import types from '../types';
import stocks from '../../fixtures/stocks.js';

const state = {
	stocks: [],
};

const mutations = {
	[types.SET_STOCKS](state, stocks) {
		state.stocks = stocks;
	},
	[types.RANDOM_STOCKS](state) {
		state.stocks.forEach(stock => {
			stock.price = Math.round((Math.random() + 0.5) * stock.price);
		});
	},
};

const actions = {
	buyStock: ({ commit }, order) => {
		commit(types.BUY_STOCK, order);
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
