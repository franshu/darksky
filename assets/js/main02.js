$(document).ready(function() {
		var latitud = localStorage.getItem('latitud');
		var longitud = localStorage.getItem('longitud');
	$.ajax({
		url: '/https://api.darksky.net/forecast/a8702e39ba75d0ff1556e34d36ecfbda/'+latitud+','+longitud;
		type: 'GET',
		dataType: 'json',
		//data: {param1: 'value1'}, van en la url
	})
	.done(function(e) {
		console.log(e);
		e.daily.forEach(function(elemento,indice){
			$("#semanal").append( elemento.data.icon  + elemento.data.temperatureMin+ elemento.data.temperatureMax);
		})
	})

	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
});