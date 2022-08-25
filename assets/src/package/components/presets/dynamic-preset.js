import withPreset from './preset-editor';
import {
	GlobalField,
	MapField,
} from './preset-render';
import ActionModalContext from '../../context/action.modal';

const {
	      useState,
	      useEffect,
	      useContext,
      } = wp.element;

function DynamicPreset( {
	value,
	isSaveAction,
	onSavePreset,
	onUnMount,
	parseValue,
	excludeOptions,
	isCurrentFieldVisible,
	isVisible,
} ) {

	const position                 = 'dynamic';
	const [ stateValue, setValue ] = useState(
		() => parseValue( value ),
	);

	const { actionClick, onRequestClose } = useContext( ActionModalContext );

	if ( 'undefined' === typeof isSaveAction ) {
		isSaveAction = actionClick;
	}
	if ( 'undefined' === typeof onUnMount ) {
		onUnMount = onRequestClose;
	}

	const onChangeValue = ( newValue, name ) => {
		setValue( prev => (
			{ ...prev, [ name ]: newValue }
		) );
	};

	useEffect( () => {
		// update field attributes
		if ( isSaveAction && onSavePreset ) {
			onSavePreset( JSON.stringify( stateValue ) );
		}

		if ( null !== isSaveAction ) {
			onUnMount();
		}
	}, [ isSaveAction ] );

	return <>
		{ window.JetFormEditorData.presetConfig.global_fields.map(
			( data, index ) => <GlobalField
				key={ `current_field_${ data.name }_${ index }` }
				value={ stateValue }
				index={ index }
				data={ data }
				excludeOptions={ excludeOptions }
				onChangeValue={ onChangeValue }
				isVisible={ isVisible }
				position={ position }
			/> ) }

		{ window.JetFormEditorData.presetConfig.map_fields.map(
			( data, index ) => <MapField
				key={ `current_field_${ data.name }_${ index }` }
				currentState={ stateValue }
				value={ stateValue[ 'current_field_' + data.name ] }
				index={ index }
				data={ data }
				onChangeValue={ onChangeValue }
				isCurrentFieldVisible={ isCurrentFieldVisible }
				position={ position }
			/> ) }
	</>;
}

export default withPreset( DynamicPreset );