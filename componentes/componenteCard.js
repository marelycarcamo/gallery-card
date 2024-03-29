/* The code is defining a Vue component called "card". */
/* The code is defining a Vue component called "card". This component has four props: "nombre",
"imagen", "url", and "resumen". The template section contains the HTML markup for the component,
which includes a card layout with an image, title, summary, and a link to view more information. The
props are used to dynamically populate the component with data when it is used in the application. */
app.component("card",{

	props:["nombre","imagen","url","resumen"],

	template: //html
	`
	<div>
		<div class="card border border-secondary border-2 p-md-3" style="width: 17rem; ">
			<img :src="imagen" class="card-img-top p-3"/>
			<div class="card-body">
				<h5 class="card-title text-xl-center">{{nombre}}</h5>
				<p class="card-text" style="text-align:justify">{{resumen}}<a :href="url" target="_blank" class="card-link">ver más...</a></p>
			</div> 
		</div>
	</div>

	`
})




