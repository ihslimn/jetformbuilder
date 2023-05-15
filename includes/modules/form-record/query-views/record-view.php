<?php


namespace Jet_Form_Builder\Modules\Form_Record\Query_Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Modules\Form_Record\Models;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_View extends View_Base {

	protected $order_by = array(
		array(
			'column' => 'id',
			'sort'   => self::FROM_HIGH_TO_LOW,
		),
	);

	public function table(): string {
		return Models\Record_Model::table();
	}

	public function select_columns(): array {
		return Models\Record_Model::schema_columns();
	}

	public function set_filters( array $filters ) {
		parent::set_filters( $filters );

		$forms = $this->filters['form'] ?? array();

		if ( empty( $forms ) ) {
			return $this;
		}

		if ( ! is_array( $forms ) ) {
			$forms = array( $forms );
		}

		$this->set_conditions(
			array(
				array(
					'type'   => 'in',
					'values' => array( 'form_id', $forms ),
				),
			)
		);

		return $this;
	}

	public function query(): Query_Builder {
		$this->prepare_dependencies();

		return ( new Query_Builder() )->set_view( $this );
	}
}