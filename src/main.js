import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/store';
import routes from './routes';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('currency', value => `$ ${value.toLocaleString()}`);

// Connect router to the Vue instance, so that we can access router methods and helpers
Vue.use(VueRouter);

const router = new VueRouter({
	// disables hashtag in urls
	mode: 'history',
	// Instantiate routes
	routes,
});

new Vue({
	render: h => h(App),
	// Connect router to app
	router,
	store,
}).$mount('#app');
