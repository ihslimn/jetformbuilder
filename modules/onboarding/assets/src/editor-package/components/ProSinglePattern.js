const {
	      useTriggerPopover,
      } = JetFBHooks;

const {
	      Button,
	      Popover,
	      ExternalLink,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

function ProSinglePattern( { pattern } ) {
	const {
		      ref,
		      showPopover,
		      setShowPopover,
		      popoverProps,
	      } = useTriggerPopover();

	return <li className="is-pro">
		<Button
			ref={ ref }
			icon={ pattern.icon }
			onClick={ () => setShowPopover( prev => !prev ) }
			label={ pattern.description || pattern.title }
			variant="secondary"
			iconSize={ 32 }
			className="block-editor-block-variation-picker__variation"
		/>
		<span
			className="block-editor-block-variation-picker__variation-label"
		>
			{ pattern.title }
		</span>
		{ showPopover && (
			<Popover
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				{ ...popoverProps }
			>
				<div
					style={ {
						padding: '0.5em',
						width: 'max-content',
					} }
				>
					<span>{ __(
						'This is paid addon. You can buy it here:',
						'jet-form-builder',
					) }</span>
					&nbsp;
					<ExternalLink
						href={ pattern.link ??
							'https://jetformbuilder.com/pricing/' }
					>
						jetformbuilder.com
					</ExternalLink>
				</div>
			</Popover>
		) }
	</li>;
}

export default ProSinglePattern;