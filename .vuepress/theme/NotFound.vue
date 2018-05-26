<template>
	<div class="content">
		<img alt="404 Not Found" src="/assets/img/404.gif">
		<p class="fourohfour">4 + 0 = 4</p>
		<p class="message">
			← <router-link to="/">{{ getMsg() }}</router-link>
		</p>
	</div>
</template>

<script>
const msgs = [
	`Así como cuando te equivocas, pues así...`,
	`Mi lógica es innegable -_-`,
	`No, no, no, no, no. ¡En mi máquina funciona!`,
	`Si, o sea, que no encontró lo que buscas pues.`,
	`Ehm, este, pues...`,
	`¿Qué esperabas? Si no está, no está... ¬_¬`,
	`Arriba dice '404' y significa que no soy adivino`,
	`Meh.`,
	`Cannot get 'undefined' from la reconcha de la lora`,
	`¡Qué no, que no hay nivel de las vacas!`,
	`atrás, atrás, abajo, A, B, start, ah, no...`,
	`Creo que vi a un lindo gatito ^_^`,
	`#allyourbasearebelongtous`,
	`... No hay huevos de pascua en esta página. Estoy seguro`
]

export default {
	methods: {
		getMsg () {
			return msgs[Math.floor(Math.random() * msgs.length)]
		}
	}
}
</script>

<style scoped>
	.fourohfour {
		color: #D25349;
		display: block;
		line-height: 2rem;
		font-size: 4rem;
	}
	.message {
		font-size: 1.5rem;
	}
</style>
