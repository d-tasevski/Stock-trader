import Vue from 'vue';
import types from './types';

export const loadData = ({ commit }) => {
	Vue.http
		.get('data.json')
		.then(response => response.json())
		.then(data => {
			if (data) {
				const { stocks, funds, stockPortfolio } = data;
				const portfolio = {
					stockPortfolio,
					funds,
				};

				commit(types.SET_STOCKS, stocks);
				commit(types.SET_PORTFOLIO, portfolio);
			}
		});
};
