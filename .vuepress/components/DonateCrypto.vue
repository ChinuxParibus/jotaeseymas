<template>
	<div class="tip custom-block">
		<p class="custom-block-title">{{ currency }}</p>
		<p>
			<img :src="logo" class="logo">
			<span class="wallet">{{ wallet }}</span>
		</p>
	</div>
</template>

<script>
	export default {
		props: ['currency', 'logo', 'wallet']
	}
</script>

<style scoped>
.tip {
	width: 70%;
}
.logo {
	width: 4rem;
	height: 4rem;
	vertical-align: middle;
	border-radius: 50%;
}
.wallet {
	margin-left: 1rem;
	display: inline-block;
	font-weight: bold;
}
@media(max-width: 780px) {
	.tip {
		width: 80%;
	}
	.logo {
		display: none;
	}
	.wallet {
		margin: 0;
		font-size: 0.7rem;
	}
}
</style>
