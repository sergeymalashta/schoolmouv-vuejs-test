import Vue from 'vue';
import { endpoints } from './endpoints';

export default {
	/**
	 *
	 * @param {String} email
	 * @returns {Promise<AxiosResponse<T>>}
	 */
	checkEmail(email) {
		return Vue.axios.get(endpoints.checkEmail, { params: { email } });
	},
};
