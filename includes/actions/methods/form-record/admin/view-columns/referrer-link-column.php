<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Referrer_Link_Column extends Column_Advanced_Base {

	protected $column = 'from_content_id';
	protected $type   = 'link';

	public function get_label(): string {
		return __( 'Referrer', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$id = parent::get_value( $record );

		$text   = get_the_title( $id );
		$params = array(
			'text' => $text ?: '--',
			'type' => 'external',
		);

		if ( ! empty( $record['referrer'] ) ) {
			$params['href'] = $record['referrer'];
		}

		return $params;
	}

}
