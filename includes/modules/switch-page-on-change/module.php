<?php


namespace Jet_Form_Builder\Modules\Switch_Page_On_Change;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_After_Install_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Handle_Trait;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_It;
use Jet_Form_Builder\Modules\Base_Module\Base_Module_Url_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_After_Install_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;

	const SUPPORT_NAME   = 'jetFBSwitchPageOnChange';
	const ATTRIBUTE_NAME = 'switch_on_change';

	public function rep_item_id() {
		return 'switch-page-on-change';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		\WP_Block_Supports::get_instance()->register(
			self::SUPPORT_NAME,
			array(
				'register_attribute' => array( $this, 'register_support' ),
				'apply'              => array( $this, 'apply_support' ),
			)
		);
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_scripts' ),
			0
		);

		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'register_editor_scripts' ),
			0
		);

		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function register_editor_scripts() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets-build/js/editor/main{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function register_frontend_scripts() {
		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets-build/js/frontend/main{min}.js' ),
			array( 'jet-plugins' ),
			jet_form_builder()->get_version(),
			true
		);
	}

	public function register_support( \WP_Block_Type $block_type ) {
		// Setup attributes and styles within that if needed.
		if ( ! $block_type->attributes ) {
			$block_type->attributes = array();
		}

		if ( block_has_support( $block_type, array( self::SUPPORT_NAME ) ) &&
			! array_key_exists( self::ATTRIBUTE_NAME, $block_type->attributes )
		) {
			$block_type->attributes[ self::ATTRIBUTE_NAME ] = array(
				'type'    => 'boolean',
				'default' => false,
			);
		}
	}

	public function apply_support( \WP_Block_Type $block_type, array $block_attributes ): array {
		$support_config = Array_Tools::get( $block_type->supports, array( self::SUPPORT_NAME ), false );
		$value          = $block_attributes[ self::ATTRIBUTE_NAME ] ?? array();

		if ( empty( $support_config ) || empty( $value ) ) {
			return array();
		}

		wp_enqueue_script( $this->get_handle() );

		return array(
			'class' => $this->get_handle(),
		);
	}
}