<?php
/**
 * @var array $args
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */

$this->add_attribute( 'value', $args['default'] );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'type', 'color' );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'class', 'jet-form-builder__field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'class', $this->maybe_get_error_class( $args ) );
?>
<input <?php $this->render_attributes_string(); ?>>
