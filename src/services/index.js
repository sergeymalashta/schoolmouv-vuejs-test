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
	/**
	 *
	 * @returns {Promise<AxiosResponse<T>>}
	 */
	getDegree() {
		return Vue.axios.get(endpoints.degrees);
	},
	/**
	 *
	 * @param {Object} formData
	 * @returns {Promise<AxiosResponse<T>>}
	 */
	createUser(formData) {
		return Vue.axios.post(endpoints.user, formData);
	}
};
