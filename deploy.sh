#!/bin/bash

echo "
*============================================*
| Paso 1: Creando el bundle de la aplicación |
*============================================*
"
vuepress build

cd .vuepress/dist/

echo "
*==================================*
| Paso 2: Desplegando a producción |
*==================================*
"
surge --domain https://jotaeseymas.surge.sh

echo "
*==============================*
| ¡Ahora a disfrutar del blog! |
*==============================*
"
