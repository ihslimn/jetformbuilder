import { SelectRadioCheckPlaceholder } from "../../components/base-select-check-radio/select-radio-check-placeholder";
import {
	AdvancedFields,
	GeneralFields,
	ToolBarFields
} from "../controls/field-control";
import SelectRadioCheck from "../../components/base-select-check-radio/select-radio-check";

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;


const localized = window.JetFormCheckboxFieldData;

export default function CheckboxEdit( props ) {

	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey }
	} = props;

	const { field_options_from } = attributes;

	return [
		<ToolBarFields
			key={ uniqKey( 'JetForm-toolbar' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'JetForm-general' ) }
				{ ...props }
			/>
			<AdvancedFields
				key={ uniqKey( 'JetForm-advanced' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<SelectRadioCheck { ...props } />
			<SelectRadioCheckPlaceholder
				key={ uniqKey( 'SelectRadioCheckPlaceholder' ) }
				scriptData={ localized }
				{ ...props }
			/>
		</div>
	];
}