import Vue from 'vue';
import * as types from './mutation-types';

export default {
	[types.SET_FORM_DATA](state, data) {
		Object.keys(data).forEach((val) => {
			Vue.set(state.formData, val, data[val]);
		});
	},
	[types.SET_ERRORS](state, error) {
		state.errors = error;
	},
	[types.CLEAR_ERRORS](state) {
		state.errors = null;
	}
};
