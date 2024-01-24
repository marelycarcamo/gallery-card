# Galería Card

## Descripción Técnica del Programa
<p align="justify">El programa es una aplicación web que utiliza Vue.js para crear una galería de tarjetas (cards) que muestran información sobre diferentes frameworks. La aplicación está diseñada para ser responsiva y se adapta al tamaño de la pantalla del dispositivo del usuario.</p>

## Estructura del Código
El código HTML de la aplicación se divide en dos partes principales: la sección ``<head>`` y la sección ``<body>.``

#### Sección ``<head>``</br>
En la sección ``<head>``, se incluyen las siguientes dependencias:
<ul>
<li><b>Vue.js</b>. Un framework de JavaScript para construir interfaces de usuario.</li>
<li><b>Boostrap</b>. Un framework de CSS para diseñar sitios web responsivos.</li>
<li><b>Popper.js.</b>. Una biblioteca de JavaScript para el manejo de poppers en aplicaciones web.</li>
<li>Los archivos JavaScript galeriaFramework.js y componenteCard.js que contienen la lógica de la aplicación.</li>
</ul>

#### Sección ``<body>``</br>
En la sección ``<body>``, se define un contenedor con el id contenedor. Dentro de este contenedor, se utiliza el componente card de Vue.js para mostrar la información de cada framework. Los datos de cada framework se pasan al componente card como propiedades.

## Cómo Ejecutar el Programa
<p align="justify">Para ejecutar tu programa HTML con Vue.js, necesitarás un servidor web local. Aquí te dejo los pasos para hacerlo con Node.js y el paquete http-server, que es un servidor web simple de línea de comandos.</p>

1. Instala Node.js y npm: Si aún no los tienes instalados, puedes descargar Node.js y npm desde la página oficial de Node.js. npm se instala automáticamente con Node.js.

2. Instala http-server: Abre tu terminal o línea de comandos e instala http-server globalmente en tu sistema con el siguiente comando:
````
npm install --global http-server
````
</br>
3. Inicia el servidor: Navega a la carpeta que contiene tu archivo HTML y ejecuta el siguiente comando para iniciar el servidor:


````
http-server
````
</br>
4. Abre el programa en tu navegador: Finalmente, abre tu navegador web y visita http://localhost:8080/index.html
