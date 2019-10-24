import * as types from './mutation-types';
import service from '../../../services'

export default {
	createUser: async ({ dispatch, commit, getters }, formData) => {
		commit(types.SET_FORM_DATA, formData);
		try {
			await service.createUser(getters['formData']);
			dispatch('ui/showModal', { type: 'result-modal' }, { root: true });
		} catch (e) {
			console.error(e.toString());
		}
	},
	sendRequestLoginForm: async ({ commit, dispatch }, { email, password }) => {
		await dispatch('clearRequestErrors');
		try {
			const { data } = await service.checkEmail(email);
			commit(types.SET_FORM_DATA, { email, password });
			return data;
		} catch ({ response }) {
			commit(types.SET_ERRORS, response.data);
			return false;
		}
	},
	clearRequestErrors: ({ commit }) => {
		commit(types.CLEAR_ERRORS);
	}
};
