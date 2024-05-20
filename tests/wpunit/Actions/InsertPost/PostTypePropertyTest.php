<?php

namespace JFB_Tests\Wpunit\Actions\InsertPost;

use Codeception\AssertThrows;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Type_Property;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class PostTypePropertyTest extends \Codeception\TestCase\WPTestCase {

	use AssertThrows;

	private $modifier;

	private $post_id;

	protected function setUp(): void {
		parent::setUp(); // TODO: Change the autogenerated stub

		$this->modifier = new Post_Modifier();

		$this->post_id = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Temporary post by guest',
			)
		);
	}


	public function testFailWithEmptyPostType() {
		$modifier = $this->modifier;

		$this->assertThrows( Action_Exception::class, static function () use ( $modifier ) {
			$modifier->set( 'post_type', '' );
		} );
	}

	public function testFailWithInvalidPostType() {
		$modifier = $this->modifier;

		$this->assertThrows( Action_Exception::class, static function () use ( $modifier ) {
			$modifier->set( 'post_type', 'invalid-post-type' );
		} );
	}

	public function testHasPostTypeOnPostCreation() {
		$this->modifier->set( 'post_type', 'page' );

		/** @var Post_Type_Property $property */
		$property = $this->modifier->get( 'post_type' );

		$this->assertEquals( 'page', $property->get_value( $this->modifier ) );
	}

	public function testPostTypeIsEmptyOnPostUpdate() {
		$this->modifier->set( 'ID', $this->post_id );
		$this->modifier->set( 'post_type', '' );
		$modifier = $this->modifier;

		/** @var Post_Type_Property $property */
		$property = $this->modifier->get( 'post_type' );

		$this->assertThrows( Silence_Exception::class, static function () use ( $property, $modifier ) {
			$property->get_value( $modifier );
		} );
	}

	public function testPostTypeIsSkippedIfItEqual() {
		$this->modifier->set( 'ID', $this->post_id );
		$this->modifier->set( 'post_type', 'post' );
		$modifier = $this->modifier;

		/** @var Post_Type_Property $property */
		$property = $this->modifier->get( 'post_type' );

		$this->assertThrows( Silence_Exception::class, static function () use ( $property, $modifier ) {
			$property->get_value( $modifier );
		} );
	}

	public function testRestrictFromChangingPostType() {
		$this->modifier->set( 'ID', $this->post_id );
		$modifier = $this->modifier;

		$this->assertThrows( Action_Exception::class, static function () use ( $modifier ) {
			$modifier->set( 'post_type', 'page' );
		} );
	}

	public function testAllowChangePostType() {
		add_filter( 'jet-form-builder/action/insert-post/allow-change-post-type', '__return_true' );

		$this->modifier->set( 'ID', $this->post_id );
		$this->modifier->set( 'post_type', 'page' );

		/** @var Post_Type_Property $property */
		$property = $this->modifier->get( 'post_type' );

		$this->assertEquals( 'page', $property->get_value( $this->modifier ) );
	}

	public function testComputedNames() {
		$action      = new Insert_Post();
		$action->_id = 7755;

		jet_fb_action_handler()->save_action( $action, array() );

		$action->settings = array(
			'post_type' => 'page'
		);

		jet_fb_action_handler()->process_single_action( $action );

		$this->assertIsNumeric( jet_fb_context()->get_value( 'inserted_page' ) );
		$this->assertIsNumeric( jet_fb_context()->get_value( 'inserted_post_id' ) );
	}

	public function testComputedNamesOnUpdateWithEmptyPostType() {
		$post_id = wp_insert_post(
			array(
				'post_type'    => 'page',
				'post_title'   => 'something',
				'post_content' => '12345',
			)
		);

		$action      = new Insert_Post();
		$action->_id = 7755;

		jet_fb_action_handler()->save_action( $action, array() );

		$action->settings = array(
			'fields_map' => array(
				'_post_id' => 'ID',
			),
		);


		jet_fb_context()->update_request( $post_id, '_post_id' );
		jet_fb_action_handler()->process_single_action( $action );

		$this->assertIsNumeric( jet_fb_context()->get_value( 'inserted_page' ) );

	}


}