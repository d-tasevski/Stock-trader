<template>
	<div>
		<app-stock v-for="stock in stocks" :key="stock.id"></app-stock>
	</div>
</template>

<script>
import Stock from './Stock.vue'

export default {
	data(){
		return {
			stocks: [
				{id: 1, name: 'ABC', price: 110},
				{id: 3, name: 'Google', price: 130},
				{id: 41, name: 'T-Mobile', price: 80},
				{id: 11, name: 'Startek', price: 210},
			]
		}
	},
	components: {
		appStock: Stock
	}
}
</script>

<style>
</style>
