module.exports = {
	head: [
	  [ 'link', { rel: 'icon', href: `/media/faviconjotaese.png` }]
	],
	ga: 'UA-90456269-1',
	title: 'JOTA ESE Y MÁS',
	description: 'Mi laboratorio de Javascript, sus herramientas derivadas y otras yerbas...',
	serviceWorker: true,
	editLinks: false,
	themeConfig: {
		nav: [
			{ text: 'ACERCA DE MÍ', link: '/about/'  },
		  { text: 'BATTLE FOR THE NET', link: '/battle/'  },
		  { text: 'DECÁLOGO HACKER', link: '/decalogo/' },
			{ text: 'MANIFIESTO', link: '/manifiesto/' }
		]
	}
}
