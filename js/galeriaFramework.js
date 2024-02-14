const datos={
	data(){
		return{
			oFramework:[
				{nombre:"Angular",imagen:"imagenes/imagen_angular.jpg",url:"https://angular.io/" ,resumen:"Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página."},
				{nombre:"Laravel",imagen:"imagenes/imagen_laravel.jpg",url:"https://laravel.com/", resumen:"Laravel es un framework de código abierto para desarrollar aplicaciones y servicios web con PHP 5 y PHP 7. Su filosofía es desarrollar código PHP de forma elegante y simple, evitando el 'código espagueti'."},
				{nombre:"React",imagen:"imagenes/imagen_react.jpg",url:"https://es.reactjs.org/", resumen:"React es un framework de código abierto diseñado para crear interfaces de usuario para facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre."},
				{nombre:"Vue",imagen:"imagenes/imagen_vue.jpg",url:"https://vuejs.org/",resumen:"Vue.js es un framework de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página. Fue creado por Evan You, y es mantenido por él y por el resto del equipo central.​"}
			]
		}
	}
}

const app = Vue.createApp(datos)