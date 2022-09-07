function BaseHelp( {
	children,
	style = {},
} ) {
	return <p
		className={ 'jet-fb-base-control__help' }
		style={ {
			fontSize: '12px',
			fontStyle: 'normal',
			color: 'rgb(117, 117, 117)',
			marginTop: '0px',
			...style,
		} }
	>
		{ children }
	</p>;
}

export default BaseHelp;