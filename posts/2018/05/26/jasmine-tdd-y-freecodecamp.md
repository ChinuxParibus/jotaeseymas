---

sidebar:	false
prev:			/posts/
next:			false
desc:			BDD ayudando a resolver retos de FreeCodeCamp
mediaimg:	/assets/img/fcclogo.png
taglist: fcc,bdd,
meta:
  - name: keywords
    content: jasmine,nodejs,tdd,bdd,freecodecamp,fcc,markdown,javascript,list,vuepress,vue
  - property: og:title
    content: JASMINE, TDD Y FREECODECAMP
  - property: og:image
    content: /assets/img/fcclogo.png
  - property: og:description
    content: BDD ayudando a resolver retos de FreeCodeCamp

---

# JASMINE, TDD Y FREECODECAMP

<iframe src="https://www.youtube.com/embed/cW5ueE2vUm0?start=7"
allowfullscreen></iframe>

Cuando una rola es buena, es buena, y la repites una y otra vez... :yum:

También lo es [FreeCodeCamp][1], una academia gratuita para aprender a programar
mediante Javascript (ah, y también lo repites una y otra vez).

En mi caso particular, ya he superado la gran mayoría de los retos del primer
tramo de la academia. Sin embargo hay un ejercicio que me ha dado bastantes
dolores de cabeza, y aunque he encontrado varias formas de resolverlo, lo que no
termino de entender es el porque se resuelven de ese modo. Tal vez sea un
problema más de entender el problema (redundancia cortesía de _Arjona_
:expressionless:).

Pero este [ejercicio][2] en particular, aunque no lo haya resuelto todavía, me
servirá para aprender un flujo de trabajo al que le he querido meter mano desde
hace bastante tiempo. No es otra cosa que el [TDD][3].

![Setup with jasmine, gulp and vim+tmux](/assets/img/setup-code-jasmine-vim-tmux.png)

Hace varios meses, sentí que mejoré mi productividad usando el setup de arriba,
o sea, [Vim][4] + [tmux][5]. Y en este caso, para hacer la especificación de las
pruebas automatizadas utilicé [Jasmine][6] y para la ejecución de las mismas
utilicé [Gulp][7], ¡y mejor no sigo porque le escribo un post a cada una de esas
herramientas!

Para todos los ejercicios estoy usando sintaxis ES6 transpilada desde
[Node.js][9]

:::warning ¡Chiste malo de G33k!
Ninguna [torre][14] de ningún [tipo][15] fue dañada durante esta publicación
:::

Ehm, mejor hablemos de [Jasmine][6]... No la princesa, el framework :sweat_smile:

![Jasmine BDD Framework](/assets/img/jasmine-logo.png)

[Jasmine][6] es un framework para especificar pruebas [BDD][8], o las siglas de
Behavior Driven Development, que representa la lógica para la especificación de
los tests. La instalación es trivial una vez tengas instalado [Node.js][9]

```bash
npm -g install jasmine
```

Para iniciar un esquema básico de pruebas, usa el comando `jasmine init` en el
directorio donde tienes el código fuente que deseas probar, este comando te
creará la siguiente estructura por defecto en tu directorio actual:

```bash
spec
└── support
    └── jasmine.json
```

El archivo `jasmine.json` contiene la configuración global por defecto que
tomará [Jasmine][6] al momento de ejecutar las pruebas. Veamos su contenido:

```json
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": true,
  "random": true
}
```

Según la [documentación][10]:

+ `spec_dir`: Ruta donde se guardarán todas las especificaciones de prueba.
+ `spec_files`: Archivos de especificación de prueba.
+ `helpers` : Ruta de archivos con funcionalidades complementarias de Jasmine.
+ `stopSpecOnExpectationFailure`: Detiene la ejecución de pruebas si hay error.
+ `random`: Ejecución aleatoria de los archivos de especificación de prueba.

En este caso particular, no tocaremos mucho de esta configuración, solo el
parámetro `random` que lo cambiaremos a **false** (queremos que las pruebas se
ejecuten de manera ordenada).

Aunque [Jasmine][6] tiene una importante cantidad de [funciones][13] al momento
de probar código, algunas funciones (como las comparaciones de tipo) no están
incluidas, por lo que tenemos que echar mano de nuestra creatividad para
solventar esa limitación. ¡Gracias a Dios que existe [Stack Overflow][11]!

Para solventar la limitación de [Jasmine][6] en la comparación de tipos de
datos, modifiqué ligeramente la respuesta antes citada para convertirla en un
_matcher_. Un [matcher][13] es una función reusable de comparación que devolverá
el estado de la comparación (**true** si es válida y **false** si no lo es).
Este es el contenido del archivo `matchers.js`

```js
const matchers = {}

const types = [
	'Arguments','Function','String','Number','Date','RegExp','Object','Array'
];

types.forEach((name) => {
	matchers['toBe' + name] = () => {
		const result = {};
		return {
			compare(actual, expected) {
				expected = expected || '';

				result.pass = toString.call(actual) == '[object ' + name + ']';

				result.message = result.pass ?
					"passed" :
					`failed. the value is not a valid ${name}`;
				return result;
			}
		}
	};
});

module.exports = matchers;
```

Este código retornará 8 funciones que compararán 8 tipos de dato, a saber:
`toBeArray()`, `toBeString()`, etcétera.

Lo próximo son las pruebas que hay que hacer. La especificación de prueba la
tomé directamente del [ejercicio][12]. No especifico todas las pruebas porque
pueden verlas ustedes mismos en ejecución en [FreeCodeCamp][1] :joy:

```js
const checkCashRegister = require("./../fcc-exact-change");
const test_cases = require("./fcc-exact-change-data");
const matchers = require("./matchers");

describe("Exact Change", () => {
	// hooks
	beforeEach(() => {
		jasmine.addMatchers(matchers);
	})

	// tests
	it(`should return an array (normal case)`, () => {
		expect(checkCashRegister(19.50, 20, test_cases.cashier1)).toBeArray();
	});

	xit(`should return a string (insufficient funds)`, () => {
		expect(checkCashRegister(19.50, 20, test_cases.cashier2)).toBeString();
	});
	/* más código */
```

La función `describe` es la especificación de prueba, agrupa todas las pruebas
que se realizarán sobre un mismo código o que se refieren a un mismo tópico, por
lo que pueden haber varias funciones de éstas en una misma especificación de
pruebas, o pueden estar anidadas.

La función `beforeEach()` corresponde a un hook o función adicional de
[Jasmine][6] que se ejecutará antes de cada prueba. En este caso, se especifica
que va a incluirse un [matcher][13].

La función `it` describe una prueba (**¡y solo una!**) de la especificación.

La función `expect` ejecutará el callback que recibe como parámetro y comparará
el valor devuelto por dicho callback con la siguiente función (acá es donde
entran en juego nuestros [matchers][13] creados anteriormente, o de los ya
incluídos en [Jasmine][6]).

La función `xit` es la forma de indicarle a [Jasmine][6] que no realice esa
prueba. Lo mismo puede hacerse con la función `describe`, colocando un _x_
como prefijo, evita que se ejecute toda una especificación de prueba.

¡Uff, que largo que ha quedado esto :sweat_smile:! Pero era una introducción
necesaria :smirk:

En la próxima parte incluiré el flujo de trabajo de [Gulp][7] para que la
especificación se ejecute apenas escribamos código, hablaré un poco más sobre la
organización de la especificación de prueba, de la data y de las funcionalidades
añadidas de [Jasmine][6].

**¡Nos vemos en el código!** :wink:

<hr>

Si te gustó el contenido de este post, entonces [¡échame una ayudaíta!][100]
:wink:

<tag-list :tagstring=$page.frontmatter.taglist></tag-list>

[1]: https://www.freecodecamp.org
[2]: https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-exact-change/16012
[3]: https://jotaeseymas.wordpress.com/2015/08/28/como-deberia-ser-el-desarrollo-tdd-yo-bdd-una-significativa-introduccion/
[4]: https://www.vim.org/
[5]: https://es.wikipedia.org/wiki/Tmux
[6]: https://jasmine.github.io/
[7]: https://gulpjs.com/
[8]: https://es.wikipedia.org/wiki/Desarrollo_guiado_por_comportamiento
[9]: https://nodejs.org/en/
[10]: https://jasmine.github.io/setup/nodejs.html
[11]: https://stackoverflow.com/a/17772086
[12]: https://www.freecodecamp.org/challenges/exact-change
[13]: https://jasmine.github.io/api/3.0/matchers.html
[14]: https://es.wikipedia.org/wiki/Torre_de_Babel
[15]: https://babeljs.io/
[100]: /ayuda/

