#!/bin/bash

IFS='-' read -ra vars <<< `date +%F`

year=${vars[0]}
month=${vars[1]}
day=${vars[2]}

dirtree=posts/$year/$month/$day

mkdir -p $dirtree

touch $dirtree/$1.md

title=`echo $1 | awk '{print toupper($0)}'`

title=`echo ${title//\-/ }`

echo "---

sidebar:	false
prev:			/posts/
next:			false
desc:			Sin descripción
mediaimg:	/assets/img/avatar-white-red.gif
taglist: no-tags,
meta:
  - name: keywords
    content: list,vuepress,vue
  - property: og:title
    content: $title
  - property: og:image
    content: /assets/img/avatar-white-red.gif
  - property: og:description
    content: Sin descripción
  - name: msapplication-TileColor
    content: #D25349
  - name: msapplication-TileImage
    content: /assets/favicon/ms-icon-144x144.png
  - name: theme-color
    content: #D25349

---

# $title


**¡Nos vemos en el código!**

<hr>

Si te gustó el contenido de este post, entonces [¡échame una ayudaíta!][100]
:wink:

<tag-list :tagstring="$page.frontmatter.taglist"></tag-list>

[100]: /ayuda/

" > $dirtree/$1.md

echo "
==============================================================================
 Post creado en $dirtree/$1.md
==============================================================================
"

