<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark pos-f-t">

		<router-link to="/" class="navbar-brand">Stock Trader Simulator 3000</router-link>

		<div class="collapse navbar-collapse">
			<ul class="navbar-nav">
				<router-link to="/portfolio" activeClass="active" tag="li">
					<a class="nav-link">Portfolio</a>
				</router-link>
				<router-link to="/stocks" activeClass="active" tag="li">
					<a class="nav-link">Stocks</a>
				</router-link>
			</ul>
			<ul class="nav navbar-nav navbar-right">
				<li>
					<a class="nav-link dropdown-toggle dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Save & Load
						<span class="caret"></span>
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<li>
							<a href="#">Save Data</a>
						</li>
						<li>
							<a href="#">Load Data</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>

		<strong class="navbar-text nav-link navbar-right pointer" @click="endDay">End Day</strong>
		<strong class="navbar-text navbar-right">
			<strong>Funds: {{ funds | currency }}</strong>
		</strong>
	</nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	computed: {
		funds(){
			return this.$store.getters.funds;
		}
	},
	methods: {
		...mapActions([
			'randomizeStocks',
		]),
		endDay(){
			this.randomizeStocks();
		}
	}
}
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
</style>
