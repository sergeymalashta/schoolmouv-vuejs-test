import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

/**
 *  initial and configure vue-axios
 */
function registerAxios() {
	const axiosInstance = axios.create({
		baseURL: 'http://localhost:3000'
	});

	Vue.use(VueAxios, axiosInstance);
}

/**
 *  create application
 */
function createApp() {

	registerAxios();

	new Vue({
		router,
		store,
		render: h => h(App)
	}).$mount('#app');
}

createApp();
