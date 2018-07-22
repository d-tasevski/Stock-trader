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
			<ul class="nav navbar-nav navbar-right" @click="toggleDropdown">
				<li class="dropdown">
					<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Save & Load
						<span class="caret"></span>
					</a>
					<ul class="dropdown-menu bg-dark" :class="{'open-dropdown': isDropdownOpen}" aria-labelledby="navbarDropdownMenuLink" v-if="isDropdownOpen">
						<li class="list-item">
							<a class="nav-link pl-2" href="#" @click="saveData">Save Data</a>
						</li>
						<li>
							<a class="nav-link pl-2" href="#" @click="loadData">Load Data</a>
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
	data(){
		return {
			isDropdownOpen: false
		}
	},
	computed: {
		funds(){
			return this.$store.getters.funds;
		}
	},
	methods: {
		...mapActions({
			randomizeStocks: 'randomizeStocks',
			fetchData: 'loadData'
			
		}),
		endDay(){
			this.randomizeStocks();
		},
		toggleDropdown(){
			this.isDropdownOpen = !this.isDropdownOpen;
		},
		saveData(){
			const data = {
				funds: this.$store.getters.funds,
				stockPortfolio: this.$store.getters.stockPortfolio, 
				stocks: this.$store.getters.stocks
			};

			this.$http.put('data.json', data);
		},
		loadData(){
			this.fetchData()
		}
	}
}
</script>

<style scoped>
.pointer {
	cursor: pointer;
}

.open-dropdown {
	display: block;
}
</style>
