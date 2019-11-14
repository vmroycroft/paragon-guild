import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// load vuetify
Vue.use(Vuetify);

// create vuetify instance
export default new Vuetify({
	theme: {
		dark: true
	}
});
