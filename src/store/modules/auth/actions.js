import * as types from './mutation-types';
import service from '../../../services'

export default {
	sendRequestLoginForm: async ({ commit, dispatch }, { email }) => {
		await dispatch('clearRequestErrors');
		try {
			const { data } = await service.checkEmail(email);
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
