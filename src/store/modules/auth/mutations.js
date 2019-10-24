import * as types from './mutation-types';

export default {
	[types.SET_FORM_DATA](state, data) {
		state.formData = Object.assign(state.formData, data);
	},
	[types.SET_ERRORS](state, error) {
		state.errors = error;
	},
	[types.CLEAR_ERRORS](state) {
		state.errors = null;
	}
};
