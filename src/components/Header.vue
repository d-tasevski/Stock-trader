<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link to="/" class="navbar-brand">Stock Trader</router-link>

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

		<strong class="navbar-text nav-link navbar-right">End Day</strong>
		<strong class="navbar-text navbar-right">Funds: 1000 $</strong>
	</nav>
</template>

<script>

export default {

}
</script>

<style>
</style>
