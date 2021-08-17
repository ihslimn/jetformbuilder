import { ControlsSettings } from "./controls";
import FieldWithPreset from "./field-with-preset";
import DynamicPreset from "../presets/dynamic-preset";
import { getConvertedName } from '../../helpers/tools';
import { useSuccessNotice } from '../../helpers/hooks/hooks-helper';

const {
		  BlockControls,
		  RichText,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
		  useState,
		  useEffect,
	  } = wp.element;

const {
		  useDispatch,
	  } = wp.data;

const {
		  TextControl,
		  SelectControl,
		  PanelBody,
		  ToggleControl,
		  ToolbarGroup,
		  Flex,
		  BaseControl,
		  __experimentalNumberControl,
		  ClipboardButton,
		  Snackbar,
	  } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

function filterFieldControls( {
								  type,
								  attributes,
								  attrsSettings = {},
								  editProps: {
									  attrHelp = () => '',
									  blockName = '',
								  },
							  } ) {
	const controls = ControlsSettings();

	if ( ! controls[ type ] ) {
		return [];
	}

	const currentControl = controls[ type ];

	const isValidCondition = ( attr ) => {
		if ( ! attr.condition ) {
			return true;
		}

		if ( blockName && attr.condition.blockName ) {
			if ( 'string' === typeof attr.condition.blockName && blockName !== attr.condition.blockName ) {
				return false;
			}
			if ( 'object' === typeof attr.condition.blockName
				&& attr.condition.blockName.length
				&& ! attr.condition.blockName.includes( blockName )
			) {
				return false;
			}
		}

		const objectNotMatch = ( function() {
			if ( 'object' !== typeof attr.condition.attr ) {
				return true;
			}
			const { operator = 'and', items = {} } = attr.condition.attr

			if ( 'or' === operator.toLowerCase() ) {
				for ( const attrToCompare in items ) {
					const valueCompare = items[ attrToCompare ];

					if ( valueCompare === attributes[ attrToCompare ] ) {
						return true;
					}
				}
			}

			if ( 'and' === operator.toLowerCase() ) {
				return ( function() {
					for ( const attrToCompare in items ) {
						if ( items[ attrToCompare ] !== attributes[ attrToCompare ] ) {
							return false;
						}
					}
					return true;
				} )()
			}

			return true;
		} )()

		if ( ! objectNotMatch
			|| (
				'string' === typeof attr.condition.attr
				&& attr.condition.attr
				&& ! attributes[ attr.condition.attr ]
			)
			|| (
				'string' === typeof attr.condition
				&& ! attributes[ attr.condition ]
			)
		) {
			return false;
		}

		return true;
	};

	return currentControl.attrs.filter( ( { help = '', attrName, label, ...attr } ) => {
		const isRegisterAttribute = ( attrName in attributes );
		const validCondition = isValidCondition( attr );
		const isHidden = (
			attrName in attrsSettings
			&& 'show' in attrsSettings[ attrName ]
			&& false === attrsSettings[ attrName ].show
		);

		return ( isRegisterAttribute && validCondition && ! isHidden )
	} );
}

function FieldControl( props ) {
	let {
			setAttributes,
			attributes,
			editProps: {
				attrHelp  = () => '',
				blockName = '',
			},
			fieldControls = [],
		} = props;

	if ( ! fieldControls.length ) {
		fieldControls = filterFieldControls( props );
	}

	const onChangeValue = ( value, key ) => {
		setAttributes( { [ key ]: value } );
	};

	return fieldControls.map( ( { help = '', attrName, label, ...attr } ) => {
		switch ( attr.type ) {
			case 'text':
				return <TextControl
					key={ `${ attr.type }-${ attrName }-TextControl` }
					label={ label }
					help={ help }
					value={ attributes[ attrName ] }
					onChange={ newVal => onChangeValue( newVal, attrName ) }
					onBlur={ () => {
						if ( 'label' === attrName
							&& 1 < attributes.label.length
							&& ( ! attributes.name || 'field_name' === attributes.name )
						) {
							onChangeValue( getConvertedName( attributes.label ), 'name' );
						}
					} }
				/>;
			case 'dynamic_text':
				return <FieldWithPreset
					key={ `${ attr.type }-${ attrName }-FieldWithPreset` }
					ModalEditor={ ( { actionClick, onRequestClose } ) => <DynamicPreset
						value={ attributes[ attrName ] }
						isSaveAction={ actionClick }
						onSavePreset={ newVal => {
							onChangeValue( newVal, attrName )
						} }
						onUnMount={ onRequestClose }
					/> }
				>
					<TextControl
						key={ `${ attr.type }-${ attrName }-TextControlDynamic` }
						label={ label }
						help={ help || attrHelp( attrName ) }
						value={ attributes[ attrName ] }
						onChange={ newVal => {
							onChangeValue( newVal, attrName )
						} }
					/>
				</FieldWithPreset>;
			case 'select':
				return <SelectControl
					key={ `${ attr.type }-${ attrName }-SelectControl` }
					label={ label }
					help={ help || attrHelp( attrName ) }
					value={ attributes[ attrName ] }
					options={ attr.options }
					onChange={ newVal => {
						onChangeValue( newVal, attrName )
					} }
				/>;
			case 'toggle':
				return <ToggleControl
					key={ `${ attr.type }-${ attrName }-ToggleControl` }
					label={ label }
					help={ help || attrHelp( attrName ) }
					checked={ attributes[ attrName ] }
					onChange={ newVal => {
						onChangeValue( newVal, attrName )
					} }
				/>;
			case 'number':
				return <BaseControl
					key={ `${ attr.type }-${ attrName }-BaseControl` }
					label={ label }
				>
					<NumberControl
						key={ `${ attr.type }-${ attrName }-NumberControl` }
						value={ attributes[ attrName ] }
						onChange={ newVal => {
							onChangeValue( Number( newVal ), attrName )
						} }
					/>
					<p className={ 'components-base-control__help' }
					   style={ {
						   color: 'rgb(117, 117, 117)',
					   } }>{ help || attrHelp( attrName ) }</p>
				</BaseControl>;
		}

	} );

}

function GeneralFields( props ) {
	const currentControl = ControlsSettings().general;

	return <PanelBody title={ currentControl.label } key={ 'jet-form-general-fields' }>
		<FieldControl
			type='general'
			key={ 'jet-form-general-fields-component' }
			{ ...props }
		/>
		<FieldControl
			type='custom_general'
			key={ 'jet-form-general-custom-fields-component' }
			{ ...props }
		/>
	</PanelBody>;
}

function AdvancedFields( props ) {
	const currentControl = ControlsSettings().advanced;

	return <PanelBody title={ currentControl.label } key={ 'jet-form-advanced-fields' } initialOpen={ false }>
		<FieldControl
			type='advanced'
			key={ 'jet-form-advanced-fields-component' }
			{ ...props }
		/>
		<FieldControl
			type='custom_advanced'
			key={ 'jet-form-advanced-custom-fields-component' }
			{ ...props }
		/>
	</PanelBody>;
}

function ToolBarFields( props ) {

	const {
			  editProps: { uniqKey },
			  children    = [],
			  displayName = true,
			  attributes,
			  setAttributes,
		  } = props;

	const displayNotice = useSuccessNotice( `Copied "${ attributes.name }" to clipboard.` );

	return <BlockControls key={ uniqKey( 'ToolBarFields-BlockControls' ) }>
		<ToolbarGroup key={ uniqKey( 'ToolBarFields-ToolbarGroup' ) }>
			<Flex
				align={ 'center' }
				justify={ 'center' }
				className={ 'jet-form-toggle-box' }
			>
				{ displayName && <>
					<ClipboardButton
						isSmall
						icon='admin-page'
						showTooltip
						shortcut='Copy name'
						text={ attributes.name }
						onCopy={ () => displayNotice( true ) }
						onFinishCopy={ () => displayNotice( false ) }
					/>
					<TextControl
						value={ attributes.name }
						onChange={ name => setAttributes( { name } ) }
					/>
				</> }
				<FieldControl
					type='toolbar'
					key={ uniqKey( 'jet-form-toolbar-fields-component' ) }
					{ ...props }
				/>
				{ children }
			</Flex>
		</ToolbarGroup>
	</BlockControls>;
}

export {
	GeneralFields,
	ToolBarFields,
	AdvancedFields,
	FieldControl,
	filterFieldControls
};