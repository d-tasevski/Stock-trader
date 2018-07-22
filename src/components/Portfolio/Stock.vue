<template>
	<div class="card col-xs-6 mt-3">
		<div class="card-header bg-success">
			<h3 class="card-title">
				{{ stock.name }}
				<small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small>
			</h3>
		</div>
		<div class="card-body">
			<div class="float-left">
				<input type="number" min="0" :max="stock.quantity" class="form-control" :class="{ 'is-invalid': notEnoughQuantity }" placeholder="Quantity" v-model="quantity">
			</div>
			<div class="float-right">
				<button class="btn btn-success" @click="sellStock" :disabled="notEnoughQuantity || quantity <= 0 ">
					{{notEnoughQuantity ? 'Not enough stocks' : 'Sell' }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	props: ["stock"],
	data(){ 
		return {
			quantity: 0
		}
	},
	computed: {
		notEnoughQuantity(){
			/* eslint-disable  */
			console.log(this.stock.quantity);
			console.log(this.quantity > this.stock.quantity);
			console.log(this.quantity);
			return this.quantity > this.stock.quantity;
		}
	},
	methods: {
		...mapActions({
			placeSellOrder: 'sellStock'
		}),
		sellStock(){
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			};

			this.placeSellOrder(order);
			this.quantity = 0;
		}
	} 
}
</script>

<style>
</style>
