import types from '../types';
import stocks from '../../fixtures/stocks.js';

const state = {
	stocks: [],
};

const mutations = {
	[types.SET_STOCKS](state, stocks) {
		state.stocks = stocks;
	},
	[types.RANDOM_STOCKS](state) {},
};

const actions = {
	buyStock: ({ commit }, order) => {
		commit();
	},
	initStocks: ({ commit }) => {
		commit(types.SET_STOCKS, stocks);
	},
	randomizeStocks: ({ commit }) => {
		commit(types.RANDOM_STOCKS);
	},
};

const getters = {
	stocks: state => state.stocks,
};

export default {
	state,
	mutations,
	actions,
	getters,
};
