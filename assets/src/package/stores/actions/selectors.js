import DEFAULT_LOADING_STATE from './loading.state';

const self = {
	getLoadingIndex( state, actionId ) {
		return state.loadingState.findIndex( action => action.id === actionId );
	},
	getLoading( state, actionId ) {
		const actionIndex = self.getLoadingIndex( state, actionId );

		return - 1 !== actionIndex ? state.loadingState[ actionIndex ] : { ...DEFAULT_LOADING_STATE };
	},
	getCallback( state, actionType ) {
		return state.callbacks[ actionType ];
	}
};

export default {
	...self,
	getCurrentAction( state ) {
		return state.currentAction;
	},
	getCurrentCallback( state ) {
		const type = state.currentAction?.type ?? false;

		return self.getCallback( state, type );
	},
	getCurrentSettings( state ) {
		const settings = state.currentAction?.settings ?? {};
		const type = state.currentAction?.type ?? false;

		return settings[ type ] ?? {};
	},
	getCurrentLoading( state ) {
		const actionId = state.currentAction?.id;

		return self.getLoading( state, actionId );
	},
	dangerGetAllLoading( state ) {
		return state.loadingState;
	},
}