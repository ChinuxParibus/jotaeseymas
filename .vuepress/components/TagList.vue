<template>
	<p>
		<strong>Tags:</strong>
		<span class="tag" v-for="tag in tags(tagstring)">{{ tag }}</span>
	</p>
</template>

<script>
export default {
	props: ['tagstring'],
	methods: {
		tags(tagstring) {
			return tagstring
				.split(',')
				.map(tagname => {
					return tagname
						.split('-')
						.map(word => word.toUpperCase())
						.join(' ')
				})
		}
	}
}
</script>

<style scoped>
.tag {
	background-color: #D25349;
	border-radius: 50%;
	color: white;
	display: inline-block;
	font-weight: bold;
}
</style>
