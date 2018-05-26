<template>
	<section>
		<div class="postcard animate" v-for="post in posts()" v-show="hasPosts">
			<router-link :to="post.path">
				<article class="media">
					<div class="media-body">
						<h2 class="title">{{ post.title }}</h2>
						<p class="description"> {{ post.frontmatter.desc }}</p>
						<p class="date">Escrito el: {{ extractDate(post.path) }}</p>
					</div>
					<div class="media-image">
						<img class="square" :src="post.frontmatter.mediaimg">
					</div>
				</article>
			</router-link>
		</div>
		<div v-show="!hasPosts">
			<p><img class="square" src="/assets/img/avatar-white-red.gif"></p>
			<h2>Ehm, creo que no hay nada que mostrar... [todavía] 😅 </h2>
		</div>
	</section>
</template>

<script>
export default {
	data () {
		return {
			monthsTable: {
				"01": "Enero", "02": "Febrero", "03": "Marzo", "04": "Abril", "05":
				"Mayo", "06": "Junio", "07": "Julio", "08": "Agosto", "09":
				"Septiembre", "10": "Octubre", "11": "Noviembre", "12": "Diciembre"
			}
		}
	},
	computed: {
		hasPosts: function () {
			return this.posts().length > 0;
		}
	},
	methods: {
		posts() {
			return this.$site.pages
				.filter( (page) =>	page.path.startsWith("/posts/2") )
				.sort( (pA, pB) => {
					let timeA = Date.parse(new Date(this.chopDate(pA.path)));
					let timeB = Date.parse(new Date(this.chopDate(pB.path)));
					return timeB - timeA;
				})
		},
		chopDate (text) {
			return text.split('/').slice(2, 5)
		},
		convertMonth (v, i) {
			return i === 1 ? this.monthsTable[v] : v // convertir el mes
		},
		extractDate(text) {
			return this.chopDate(text)
				.map(this.convertMonth)
				.reverse() // día, mes y año
				.join(' de '); // "{ día } de { mes } de { año }"
		}
	}
}
</script>

<style scoped>
.animate {
	transition: all .2s
}
.postcard {
	margin: 15px 0;
	padding: 5px 0 5px 20px;
	max-height: 250px;
}
.postcard:hover {
	box-shadow: 5px 5px 5px #D25349;
}
.date {
	font-weight: bold;
}
.square {
	width: 8rem;
	height: 8rem;
}
.media {
	display: flex;
	align-items: flex-start;
}
.media-image {
	margin: 1rem;
}
.media-body {
	flex: 1;
}
@media(max-width: 780px) {
	.media-image {
		display: none;
	}
}
</style>
