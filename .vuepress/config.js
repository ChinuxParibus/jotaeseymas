module.exports = {
	head: [
		[ 'link', { rel: 'icon', href: `/assets/img/faviconjotaese.png` } ]
	],
	ga: 'UA-90456269-1',
	title: 'JOTA ESE Y MÁS',
	description: 'Mi laboratorio de Javascript, sus herramientas derivadas y otras yerbas...',
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
