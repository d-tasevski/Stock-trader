import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import store from './store/store';
import routes from './routes';
import App from './App.vue';

Vue.config.productionTip = false;

// Connect router to the Vue instance, so that we can access router methods and helpers
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-728b4.firebaseio.com/';

Vue.filter('currency', value => `$ ${value.toLocaleString()}`);

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
