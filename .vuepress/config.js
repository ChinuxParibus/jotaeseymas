module.exports = {
	head: [
		[ 'link', { rel: 'icon', href: `/assets/img/faviconjotaese.png` } ]
	],
	locales: {
		'/': {
			lang: 'es-VE',
			title: 'JOTA ESE Y MÁS',
			description: 'Mi laboratorio de Javascript, sus herramientas derivadas y otras yerbas...'
		}
	},
	ga: 'UA-90456269-1',
	serviceWorker: true,
	editLinks: false,
	evergreen: true,
	themeConfig: {
		nav: [
			{ text: 'ACERCA DE MÍ', link: '/about/'  },
			{ text: 'UNA AYUDAÍTA', link: '/ayuda/'  },
			{ text: 'DECÁLOGO HACKER', link: '/decalogo/' },
			{ text: 'MANIFIESTO', link: '/manifiesto/' },
			{ text: 'POSTS', link: '/posts/' }
		],
		searchMaxSuggestions: 5
	}
}
