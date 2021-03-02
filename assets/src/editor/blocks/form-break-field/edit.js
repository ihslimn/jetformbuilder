import {
	AdvancedFields,
	GeneralFields
} from "../controls/field-control";

const { __ } = wp.i18n;

const {
	ColorPalette,
	RichText,
	Editable,
	MediaUpload,
	ServerSideRender,
	BlockControls,
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	PanelColor,
	IconButton,
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
	Button,
} = wp.components;


export default function FormBreakEdit( props ) {

	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		editProps: { uniqKey, attrHelp }
	} = props;

	return [
		props.isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<PanelBody
				title={ __( 'Field Settings' ) }
			>
				<TextareaControl
					key="page_break_disabled"
					value={ attributes.page_break_disabled }
					label={ __( 'Disabled message' ) }
					help={ attrHelp( 'page_break_disabled' ) }
					onChange={ ( newValue ) => {
						setAttributes( { page_break_disabled: newValue } );
					} }
				/>
			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div className={ 'jet-form-builder__next-page-wrap' }>
				<Button
					isSecondary
					key="next_page_button"
					className="jet-form-builder__next-page"
				>{ attributes.label || 'Next' }</Button>

				{ attributes.add_prev && <Button
					isSecondary
					key="prev_page_button"
					className="jet-form-builder__prev-page"
				>{ attributes.prev_label || 'Prev' }</Button> }
			</div>
		</div>
	];

}