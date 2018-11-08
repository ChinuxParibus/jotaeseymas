---

sidebar:	false
prev:			/posts/
next:			false
desc:			Pero es bueno motivarse de vez en cuando
mediaimg:	/assets/img/jexia-icon.svg
taglist: vue,100-days-of-code,jexia,
meta:
  - name: keywords
    content: list,vuepress,vue
  - property: og:title
    content: NO SOY FAN DE COELHO
  - property: og:image
    content: /assets/img/jexia-icon.svg
  - property: og:description
    content: Pero es bueno motivarse de vez en cuando
  - name: msapplication-TileColor
    content: #D25349
  - name: msapplication-TileImage
    content: /assets/favicon/ms-icon-144x144.png
  - name: theme-color
    content: #D25349

---

# NO SOY FAN DE COELHO

<iframe src="https://www.youtube.com/embed/HgzGwKwLmgM" allowfullscreen></iframe>

Ayer no pude subir absolutamente nada ni al [Gato-pulpo][1] ni al [pajarito azul][2] gracias a la
conspiración casi perfecta (y durante todo el día, además :rage:) entre el servicio de
energía eléctrica y el proveedor de servicios de Internet de mi país
([Venezolanos entenderán][3]).

¡Pero hoy estoy como decía el gran Freddie! :blush:

En estos 5 de [cien días de Vue][4] que estoy haciendo, me he dado cuenta de la
cantidad enorme de gente, recursos y formas de aprender [Vue][5], y las diversas
motivaciones que tienen, pero no quiero líarme más con [la reflexión][6].

Una de las apps que más me llamó la atención fue [Coelho.js][7], una app que
había hecho en un [universo paralelo][8] que salió como producto de una
conversación de 3 horas en la que estaban "decidiendo" cual era el mejor
[DaaS][9].

Eso era porque ellos no conocían [JEXIA][10]...

## ¿Qué es JEXIA?

[JEXIA][10] es una plataforma colaborativa de desarrollo, creada en Europa,
específicamente en Holanda. La plataforma te permite crear una interfaz API REST
de forma bastante intuitiva y sencilla. Bastan unas pocas configuraciones y ya
estás listo para trabajar. De hecho, había hablado de ella un poco en [otro
universo][20].

Hice una refactorización de esta app, aprovechando que me renovaron la cuenta de
usuario (¡es gratis :heart_eyes:!), usando [Vue][5], [axios][11], [Parcel][12] y
archivos [dotenv][18] para separar los datos sensibles de configuración.

No me voy a detener en el funcionamiento de la app para que les de chance de
echarle una ojeada al [repo][13]. Pero si quisiera puntualizar algunas
comparaciones de [JEXIA][10] respecto a otros competidores.

1. **API REST**: No es la opinión de una gran compañía sobre como deberían
   usarse los datos, sino simplemente un proveedor.
2. **Policies**: Se pueden crear varias claves para el mismo proyecto, con
   diferentes niveles de acceso a tus datos, lo que permite un verdadero
   desarrollo colaborativo multinivel. Puedes ver información más detallada en
   su [documentación][19].
3. **No requiere wrappers**: O "envoltorios" en español, con cualquier cliente
   [AJAX][14] (o simplemente [Vanilla.js][15]) y sin una sintaxis enrevesada
   puedes acceder a tus datos sin problemas.

Otra cosa que deseo puntualizar es que: ¡[Webpack][16] no es el [único][17],
afortunadamente! Existen otras alternativas mucho más sencillas de usar y menos
opinadas como [Parcel][12], que sin necesidad de entender como elaborar una
configuración ya tengo una herramienta que me permite lo básico para cualquier
aplicación basada en Javascript (minificación de archivos, manejo de
dependencias, modularización y live-reload durante el desarrollo).

Si continuo, no dejaré material para los próximos tutoriales :joy:, el de [Vue][5] y el
de [Parcel][12] que vendrán en camino pronto, lo prometo :sweat_smile:

Por lo pronto, solo puedo decir que ¡esto de los [cien días de Vue][4] fue una
excelente idea!

**¡Nos vemos en el código!**

<hr>

Si te gustó el contenido de este post, entonces [¡échame una ayudaíta!][100]
:wink:

<tag-list :tagstring=$page.frontmatter.taglist></tag-list>

[1]: https://github.com/ChinuxParibus
[2]: https://twitter.com/ch1nux
[3]: https://www.youtube.com/watch?v=vaHlCAXqZFE
[4]: /posts/2018/11/02/cien-dias-de-vue.html
[5]: https://vuejs.org
[6]: https://media1.tenor.com/images/4c6187594727c6937f0ed9c4cbaf7249/tenor.gif?itemid=8949118
[7]: https://github.com/ChinuxParibus/coelho.js
[8]: https://jotaeseymas.wordpress.com/2016/10/03/que-no-se-puede-estar-motivado-coelho-js-en-tres-horas
[9]: https://en.wikipedia.org/wiki/Data_as_a_service
[10]: https://jexia.com
[11]: https://github.com/axios/axios
[12]: https://en.parceljs.org
[13]: https://github.com/thousanddaysofvue/project21
[14]: https://en.wikipedia.org/wiki/Ajax_(programming)
[15]: http://vanilla-js.com
[16]: https://webpack.js.org
[17]: https://www.slant.co/options/11602/alternatives/~webpack-alternatives
[18]: https://www.npmjs.com/package/dotenv
[19]: https://docs.jexia.com
[20]: https://jotaeseymas.wordpress.com/2015/12/13/api-rest-sin-una-linea-de-codigo-del-lado-backend-parte-1-backend/
[100]: /ayuda/

