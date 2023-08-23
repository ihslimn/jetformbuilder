import { ATTRIBUTE_NAME } from '../constants';
import lifeSaverIcon from './lifeSaverIcon';
import useSanitizers from '../hooks/useSanitizers';

const {
	      __,
      } = wp.i18n;

const {
	      ToolbarDropdownMenu,
	      Button,
	      Flex,
      } = wp.components;

const {
	      useBlockAttributes,
      } = JetFBHooks;

const {
	      isEmpty,
      } = JetFBActions;

const {
	      BaseHelp,
      } = JetFBComponents;

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/dropdown-menu/index.tsx#L169
 *
 * @param onClose {Function}
 * @param control {Object}
 * @param current {Object} Attributes for sanitize-value
 * @param addNew {Function}
 * @param remove {Function}
 * @param edit {Function}
 * @returns {JSX.Element}
 * @constructor
 */
const ControlButton = function ( {
	onClose,
	control,
	current,
	addNew,
	remove,
	edit,
} ) {

	const RenderCallback = 'function' === typeof control.render
	                       ? control.render
	                       : null;

	const isActive = !isEmpty( current );

	return RenderCallback
	       ? <RenderCallback
		       control={ control }
		       current={ current }
		       addNew={ addNew }
		       remove={ remove }
		       edit={ edit }
	       />
	       : <Button
		       onClick={ ( event ) => {
			       event.stopPropagation();
			       onClose();

			       isActive ? remove() : addNew();
		       } }
		       className={ [
			       'components-dropdown-menu__menu-item',
			       'has-text',
			       isActive ? 'is-active' : '',
		       ].join( ' ' ) }
		       icon={ control.icon }
		       aria-checked={
			       control.role === 'menuitemcheckbox' ||
			       control.role === 'menuitemradio'
			       ? isActive
			       : undefined
		       }
		       role={
			       control.role === 'menuitemcheckbox' ||
			       control.role === 'menuitemradio'
			       ? control.role
			       : 'menuitem'
		       }
		       label={ control.help || '' }
		       showTooltip
		       disabled={ control.isDisabled }
	       >
		       { control.label }
	       </Button>;
};

const SanitizeValueButton = function () {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const current = attributes[ ATTRIBUTE_NAME ];

	const getControlIndex = controlSlug => (
		current?.length
		? current.findIndex( element => (
			'string' === typeof element
			? element === controlSlug
			: element.value === controlSlug
		) )
		: -1
	);

	const remove = controlSlug => setAttributes( prev => (
		{
			...prev,
			[ ATTRIBUTE_NAME ]: prev[ ATTRIBUTE_NAME ].filter(
				prevItem => (
					(
						prevItem?.value ?? prevItem
					) !== controlSlug
				),
			),
		}
	) );

	const add = controlSlug => setAttributes( prev => (
		{
			...prev,
			[ ATTRIBUTE_NAME ]: [
				...(
					prev[ ATTRIBUTE_NAME ] || []
				),
				controlSlug,
			],
		}
	) );

	const edit = ( controlSlug, editProps ) => setAttributes( prev => {
		const allSanitizers = JSON.parse(
			JSON.stringify(
				prev[ ATTRIBUTE_NAME ] || [],
			),
		);

		let currentIndex = getControlIndex( controlSlug );

		if ( -1 === currentIndex ) {
			currentIndex = allSanitizers.push( { value: controlSlug } ) - 1;
		}

		if ( 'string' === allSanitizers[ currentIndex ] ) {
			allSanitizers[ currentIndex ] = { value: controlSlug };
		}

		allSanitizers[ currentIndex ] = {
			...allSanitizers[ currentIndex ],
			...editProps,
		};

		return {
			...prev,
			[ ATTRIBUTE_NAME ]: [ ...allSanitizers ],
		};
	} );

	const transformControl = control => {
		control.icon = control.icon || lifeSaverIcon;

		return control;
	};

	const sanitizers = useSanitizers().map( transformControl );

	return <ToolbarDropdownMenu
		icon={ lifeSaverIcon }
		label={ __(
			'Choose a value transformation method',
			'jet-form-builder',
		) }
	>{ ( { onClose } ) => sanitizers.map( ( control, index ) => {
		return <ControlButton
			key={ index }
			control={ control }
			onClose={ onClose }
			current={ current?.[ getControlIndex( control.value ) ] }
			addNew={ () => add( control.value ) }
			remove={ () => remove( control.value ) }
			edit={ editProps => edit( control.value, editProps ) }
		/>;
	} ) }</ToolbarDropdownMenu>;
};

export default SanitizeValueButton;