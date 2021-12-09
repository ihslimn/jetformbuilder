import PaypalEntries from './PaypalEntries';

Vue.use( Vuex );

const { getSearch, createPath, addQueryArgs } = window.JetFBActions;

const { apiFetch } = wp;

window.jfbEventBus = window.jfbEventBus || new Vue();

const options = {
	store: new Vuex.Store( {
		state: {
			currentPopupData: {},
			columns: {},
			currentList: [],
			actions: {},
			queryState: {
				currentPage: 1,
				extreme_id: 0,
				limit: 25,
				sort: 'DESC',
				total: 0,
			},
			fetchedSubscriptions: {},
			isShowPopup: false,
			loadingPopup: false,
			doingAction: false,
			loadingButton: {},
		},
		getters: {
			getCurrent: state => {
				return state.currentPopupData;
			},
			getColumns: state => {
				return state.columns;
			},
			getSubscription: state => id => {
				return state.fetchedSubscriptions[ id ] || {};
			},
			currentSubscription: ( state, getters ) => {
				const id = state.currentPopupData?.record_id?.value;

				return getters.getSubscription( id );
			},
			getList: state => {
				return state.currentList;
			},
			getActions: state => {
				return state.actions;
			},
			isShowPopup: state => {
				return state.isShowPopup;
			},
			isLoadingPopup: state => {
				return state.loadingPopup;
			},
			isDoingAction: state => {
				return state.doingAction;
			},
			getQueryState: state => {
				return state.queryState;
			}
		},
		mutations: {
			setList( state, list ) {
				state.currentList = list;
			},
			setQueryState( state, newState ) {
				state.queryState = {
					...state.queryState,
					...newState,
				};
			},
			setColumns( state, columns ) {
				state.columns = columns;
			},
			setCurrent( state, current ) {
				state.currentPopupData = current;
			},
			clearCurrent( state ) {
				state.currentPopupData = {};
			},
			saveSubscription( state, subDetails ) {
				state.fetchedSubscriptions[ subDetails?.sub_id ] = subDetails;
			},
			setActions( state, actions ) {
				state.actions = actions;
			},
			togglePopup( state ) {
				state.isShowPopup = ! state.isShowPopup;
			},
			toggleLoadingPopup( state ) {
				state.loadingPopup = ! state.loadingPopup;
			},
			toggleDoingAction( state ) {
				state.doingAction = ! state.doingAction;
			},

		},
		actions: {
			replaceCurrent( { commit, getters }, { sub_id, replace } ) {
				commit( 'setCurrent', {
					...getters.getCurrent,
					...replace,
				} );

				commit( 'setList', getters.getList.map( subscription => {
					if ( sub_id !== subscription.record_id.value ) {
						return subscription;
					}
					return {
						...subscription,
						...replace,
					};
				} ) );
			},
			openPopup( { commit, state, getters, dispatch }, entryID ) {
				const current = state.currentList[ entryID ] || {};

				commit( 'setCurrent', current );

				window.history.replaceState(
					'on_open_modal',
					document.title,
					createPath( {
						sub: current.record_id.value,
					} ),
				);

				if ( getters.currentSubscription.sub_id ) {
					commit( 'togglePopup' )
					return;
				}

				commit( 'toggleLoadingPopup' );

				const options = {
					...getters.getCurrent?.links?.value?.plan_details || {},
				};

				dispatch( 'fetch', options ).then( response => {
					dispatch( 'replaceCurrent', response.data );

					commit( 'saveSubscription', response.data );
					commit( 'togglePopup' );

				} ).finally( () => {
					commit( 'toggleLoadingPopup' );
				} );
			},
			closePopup( { commit } ) {
				commit( 'togglePopup' );
				commit( 'clearCurrent' );

				window.history.replaceState(
					'on_open_modal',
					document.title,
					createPath( {}, {}, [ 'sub' ] ),
				);
			},
			addNote( { commit, getters, dispatch }, note ) {
				const options = {
					...getters.getCurrent?.links?.value?.add_note || {},
					data: {
						sub_id: getters.getCurrent.record_id.value,
						order_id: getters.getCurrent.id.value,
						note,
					},
				};

				commit( 'toggleDoingAction' );

				return new Promise( resolve => dispatch( 'fetch', options ).then( response => {
					dispatch( 'replaceCurrent', response.data );

				} ).finally( () => {
					commit( 'toggleDoingAction' );
					resolve();
				} ) );
			},
			processAction( { commit, getters, dispatch }, { reason, type } ) {
				const options = {
					...getters.getCurrent?.links?.value[ type ],
					data: {
						form_id: getters.getCurrent._FORM_ID.value,
						reason,
					},
				};

				commit( 'toggleDoingAction' );

				return new Promise( resolve => dispatch( 'fetch', options ).then( response => {
					jfbEventBus.$CXNotice.add( {
						message: response.message,
						type: 'success',
						duration: 4000,
					} );
				} ).finally( () => {
					commit( 'toggleDoingAction' );
					resolve();
				} ) );
			},
			fetch( { commit, getters }, options ) {
				return new Promise( ( resolve, reject ) => {
					apiFetch( options ).then( response => {
						resolve( response );
					} ).catch( error => {
						jfbEventBus.$CXNotice.add( {
							message: error.message,
							type: 'error',
							duration: 4000,
						} );

						reject( error );
					} ).finally( reject );
				} );
			},

		},
	} ),
};

const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( PaypalEntries, options );
