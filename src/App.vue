<template>
	<div class="container">
		<app-header></app-header>
		<div class="row mt-2 app">
			<div class="col-xs-12">
				<transition name="slide">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue'

export default {
	components: {
		appHeader: Header
	},
	created(){
		this.$store.dispatch('initStocks');
	}
}
</script>

<style>
.app {
	padding: 3rem;
}

.container {
	margin-left: 0;
	margin-right: 0;
	padding-left: 0;
	padding-right: 0;
	max-width: 100%;
}
</style>
