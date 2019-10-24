import * as types from './mutation-types';

export default {
	/**
	 * Modal mutations group
	 */
	[types.SHOW_MODAL](state, { type, id }) {
		state.modals.push({
			type,
			id
		});
	},

	[types.HIDE_MODAL](state, modalName = null) {
		if (!modalName) {
			state.modals.pop();
		} else {
			state.modals = state.modals.filter(modal => modal.type !== modalName);
		}
	},
	/**
	 * Set degree list
	 * @param state
	 * @param { Array } list
	 */
	[types.SET_DEGREE_LIST](state, list) {
		state.degreeList = list;
	}
};
