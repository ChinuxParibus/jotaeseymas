<template>
	<p>
		<strong>Tags:</strong>
		<span class="tag" v-for="tag in tags(tagstring)">{{ tag }}</span>
	</p>
</template>

<script>
export default {
	name: 'tag-list',
	props: ['tagstring'],
	methods: {
		tags(tagstring) {
			return tagstring
				.split(',')
				.map(tagname => {
					return tagname.indexOf('-') !== -1 ?
					tagname
						.split('-')
						.map(word => word.toUpperCase())
						.join(' ')
					: tagname.toUpperCase()
				})
		}
	}
}
</script>

<style scoped>
.tag {
	background-color: #FFADA6;
	border-radius: 20px;
	color: white;
	display: inline-block;
	margin: 0 5px;
	padding: 0 6px;
}
</style>
