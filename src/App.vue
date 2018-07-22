<template>
	<div class="container">
		<app-header></app-header>
		<div class="row mt-2 app">
			<div class="col-xs-12">
				<transition name="slide" mode="out-in">
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

.slide-enter-active {
	animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
	animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
	from {
		transform: translateY(-3rem);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
		opacity: 1;
	}
	to {
		transform: translateY(-3rem);
		opacity: 0;
	}
}
</style>
