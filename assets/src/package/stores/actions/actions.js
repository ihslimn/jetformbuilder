import constants from './constants';

export default {
	setCurrentAction( item ) {
		return {
			type: constants.setCurrentAction,
			item,
		};
	},
	setLoading( item ) {
		return {
			type: constants.setLoading,
			state: {
				id: item.actionId,
				state: 'loading',
				loading: true,
			},
		};
	},
	setLoadingResult( item ) {
		return {
			type: constants.setLoadingResult,
			state: {
				id: item.actionId,
				state: item.success ? 'is-valid' : 'is-invalid',
				success: item.success,
				response: item.response,
				loading: false,
			},
		};
	},
	updateCurrentSettings( item ) {
		return {
			type: constants.updateCurrentSettings,
			item,
		};
	},
	addCallback( actionType, callback ) {
		return {
			type: constants.addCallback,
			actionType,
			callback,
		};
	},
};