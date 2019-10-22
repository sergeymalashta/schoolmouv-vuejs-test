import * as types from './mutation-types';

export default {
	[types.SET_DEGREE_LIST](state, list) {
		state.degreeList = list;
	}
};
