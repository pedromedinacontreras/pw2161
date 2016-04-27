var inicio = function()
{
	var clicBoton = function()
	{
		console.log("Clic del botón");
		$(".anuncioWeb").html("Clic del botón");
		$(".anuncioWeb").append("Clic del botón");
	}
	//Preparar los eventos de todos mis objetos
	$("#miBoton").on("click",clicBoton);
}
//Main
$(document).on("ready",inicio);