---

sidebar:	false
prev:			/posts/
next:			false
desc:			Ni híbridas, ni nativas. Todo lo contrario
mediaimg:	/assets/img/pwa-logo.png
taglist: 100-days-of-code,pwa
meta:
  - name: keywords
    content: 100aysofcode,pwa,progressive,webapps,javascript,list,vuepress,vue
  - property: og:title
    content: PROGRESSIVE WEB APPS. LA REVOLUCION
  - property: og:image
    content: /assets/img/pwa-logo.png
  - property: og:description
    content: Ni híbridas, ni nativas. Todo lo contrario
  - name: msapplication-TileColor
    content: #D25349
  - name: msapplication-TileImage
    content: /assets/favicon/ms-icon-144x144.png
  - name: theme-color
    content: #D25349

---

# PROGRESSIVE WEB APPS. LA REVOLUCION

## Parte 1. Una sencilla introducción.

<iframe src="https://www.youtube.com/embed/4yItxoATmq4" allowfullscreen></iframe>

Buen producto, buen performance, buen concepto... La rola, digo... :sweat_smile:

Hablando en serio, después de 5 días peleando con el internet, la energía
eléctrica, ya saben, los problemas [típicos][1] de todo venezolano, finalmente
hoy fui bendecido con todas esas cosas :blush:.

Pero hablemos de otras revoluciones tecnológicas mejor... <span style="color: #D25349">#PorFavor</span>

Las aplicaciones web progresivas no son nada nuevas, de hecho tienen su tiempo
en el mercado, solo que, mmm, digamos... ¿nadie le había prestado atención?
excepto quizás [Google][2] y [Mozilla][3], quienes claramente han visto las
ventajas de PWA sobre las aplicaciones mobiles nativas o híbridas.

Pero, ¿qué _c/%&@#$_ son las aplicaciones web progresivas? :thinking:

De acuerdo con [los que saben][4] :sweat_smile: :

> Las aplicaciones web progresivas son aplicaciones web diseñadas mediante
> estándares abiertos que proporcionan funcionalidades y rendimiento similares a
> una aplicación nativa.
> - MDN Docs

En castellano...

Cada navegador tiene sus propias WebAPIs que funcionan dentro del contexto del
navegador (conocemos `navigator`, `document`, `window`, por ejemplo), pero hay
otras WebAPIs que funcionan en un contexto superior, [dependiendo][5] de cada
navegador (`File API`, `Capture Media API`, `Worker API`, por ejemplo).

Sacar ventajas de estas APIs usando el hardware de nuestro teléfono celular, sin
necesidad de [pasar por salida o cobrar los $25][6] :smirk:

Las ventajas más claras son:

+ **Ligero**: Una aplicación web progresiva puede pesar hasta 50% menos que una
    app nativa o híbrida.
+ **Seguro**: Las aplicaciones web progresivas funcionan bajo HTTPS.
+ **No requieren conexión (frecuentemente)**: Por medio de la [Worker API][7],
    podemos permitir o denegar que APIs tiene acceso la aplicación, ¡incluso sin
    conexión! :heart_eyes:

El desarrollo de aplicaciones web progresivas no es solamente Javascript, sino
un conjunto de tecnologías probadas que funcionan bajo las mismas premisas que
Javascript.

## ¿Y cómo sabes tú eso? :thinking:

Porque para mis <span style="color: #D25349">#100DaysOfVue</span> hice una
[PWA][8] yo solito :yum: (con [Vue][9], por supuesto :+1:), de la que hablaré en
otro post porque este post es una breve introducción  :sweat_smile:. Igual me
prepararé un poco más para los próximos :wink:

**¡Nos vemos en el código!**

<hr>

Si te gustó el contenido de este post, entonces [¡échame una ayudaíta!][100]
:wink:

<tag-list :tagstring=$page.frontmatter.taglist></tag-list>

[1]: https://www.youtube.com/watch?v=vaHlCAXqZFE
[2]: https://developers.google.com/web/progressive-web-apps/?hl=en
[3]: https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive
[4]: https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Introduction
[5]: https://caniuse.com/#search=Web%20App
[6]: https://play.google.com/
[7]: https://developer.mozilla.org/en-US/docs/Web/API/Worker
[8]: https://thousanddaysofvue.github.io/project1
[9]: https://vuejs.org/
[100]: /ayuda/


