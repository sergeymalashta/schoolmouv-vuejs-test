import * as types from './mutation-types';
import service from '../../../services'

export default {
	getDegreeList: async ({ commit }) => {
		try {
			const { data: degree } = await service.getDegree();
			commit(types.SET_DEGREE_LIST, degree);
		} catch (e) {
			console.error(e.toString());
		}
	}
};
