import JetDefaultMetaControl from '../blocks/controls/default-meta';
import PropertySelect from '../components/property.select';

const {
	      addAction,
	      getFormFieldsBlocks,
	      convertListToFieldsMap,
      } = JetFBActions;

const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
      } = JetFBComponents;

const { withRequestFields } = JetFBHooks;

/**
 * Internal dependencies
 */
const {
	      BaseControl,
	      SelectControl,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      useState,
	      useEffect,
      } = wp.element;

const { withSelect } = wp.data;

function InsertPostAction( props ) {
	const {
		      settings,
		      onChangeSettingObj,
		      source,
		      help,
		      label,
		      requestFields,
	      } = props;

	const [ formFields, setFormFields ] = useState( [] );

	useEffect( () => {
		onChangeSettingObj(
			{ requestFields: [ source.requestFields.inserted_post_id ] },
		);
		setFormFields(
			convertListToFieldsMap( getFormFieldsBlocks(), requestFields ),
		);
	}, [] );

	/* eslint-disable jsx-a11y/no-onchange */

	return (
		<>
			<SelectControl
				key="post_type"
				className="full-width"
				labelPosition="side"
				value={ settings.post_type }
				options={ source.postTypes }
				label={ label( 'post_type' ) }
				help={ help( 'post_type' ) }
				onChange={ post_type => onChangeSettingObj( { post_type } ) }
			/>
			<SelectControl
				key="post_status"
				className="full-width"
				labelPosition="side"
				value={ settings.post_status }
				options={ source.postStatuses }
				label={ label( 'post_status' ) }
				help={ help( 'post_status' ) }
				onChange={ post_status => onChangeSettingObj(
					{ post_status },
				) }
			/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				key="user_fields_map"
				fields={ formFields }
			>
				<WrapperRequiredControl>
					<PropertySelect/>
				</WrapperRequiredControl>
			</ActionFieldsMap>
			<BaseControl
				label={ label( 'default_meta' ) }
				key="default_meta"
			>
				<JetDefaultMetaControl
					defaultMeta={ settings.default_meta }
					onChange={ default_meta => onChangeSettingObj(
						{ default_meta },
					) }
				/>
			</BaseControl>
		</>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

addAction( 'insert_post', withSelect( withRequestFields )( InsertPostAction ) );
