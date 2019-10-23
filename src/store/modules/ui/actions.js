import * as types from './mutation-types';
import uid from 'uid';
import service from '../../../services'

export default {
	showModal: ({ commit }, { type, ...props }) => {
		const id = uid();
		commit(types.SHOW_MODAL, { id, type, props });
	},
	hideModal: ({ commit }, modalName = null) => {
		commit(types.HIDE_MODAL, modalName);
	},
	getDegreeList: async ({ commit }) => {
		try {
			const { data: degree } = await service.getDegree();
			commit(types.SET_DEGREE_LIST, degree);
		} catch (e) {
			console.error(e.toString());
		}
	}
};
