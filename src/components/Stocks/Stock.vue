<template>
	<div class="col-sm-6 col-md-4">
		<div class="card ">
			<div class="card-header bg-info">
				<h3 class="card-title">
					<strong>{{ stock.name }} </strong>
					<small>(Price: {{ stock.price }} )</small>
				</h3>
			</div>
			<div class="card-body">
				<div class="float-left">
					<input type="number" min="0" class="form-control" :class="{ 'is-invalid': notEnoughFunds }" placeholder="Quantity" v-model="quantity">
				</div>
				<div class="float-right">
					<button class="btn btn-success" @click="buyStock" :disabled="notEnoughFunds || quantity <= 0 ">
						{{ !notEnoughFunds ? 'Buy' : 'Insufficient funds'}}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	props: ["stock"],
	data(){ 
		return {
			quantity: 0
		}
	},
	computed: {
		notEnoughFunds(){
			return this.quantity * this.stock.price > this.funds;
		},
		funds(){
			return this.$store.getters.funds;
		}
	},
	methods: {
		buyStock(){
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			};

			this.$store.dispatch('buyStock', order);
			this.quantity = 0;
		}
	} 
}
</script>

<style scoped>
</style>
