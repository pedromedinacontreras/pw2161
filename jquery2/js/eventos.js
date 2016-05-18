var iniciaApp = function()
{
	var validaEntrada = function()
	{
		//Invalida los eventos que 
		//no corresponden a esta función
		event.preventDefault();
		var usuario = $("#txtUsuario").val();
		var clave = $("#txtClave").val();

		//Validaciones
		//1-Que no estén vacíos
		if(usuario == "")
		{
			alert("El usuario no debe ser vacío");
			$("#txtUsuario").focus();
		}
		if(clave == "")
		{
			alert("La clave no ser vacía");
			$("#txtClave").focus();
		}

		//2-Verificar usuario y contraseña
		var parametros = "accion=validaEntrada"+
		"&usuario="+usuario+"&clave="+clave+"&id="+Math.random();
		$.ajax({
			beforeSend:function(){
				console.log("Validar al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					$("#datosUsuario").hide();
					$("nav").show("slow");
				}
				else
					{
						alert("Usuario/contraseña incorrecto(s)");
					}
			},
			error: function(xhr,ajaxOptions,thrownError){
				console.log("Algo salió mal");
			}
		});

		console.log("Se disparó el submit");
	}

	var Altas = function()
	{
		//Mostramos el formulario
		$("#altaUsuarios").show("slow");
	}

	var AltaUsuario = function()
	{
		$("btnAltas").on("submit", AltaUsuario);
		event.preventDefault();
		alert($("frmAltaUsuarios").serialize());
		var datos = $("frmAltaUsuarios").serialize();
		var parametros = "accion=guardaUsuario&"+datos+"&id="+Math.random();

		$.ajax({
			beforeSend:function(){
				console.log("Guarda al usuario");
			},
			cache: false,
			type: "POST",
			dataType: "json",
			url: "php/funciones.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					alert("Usuario registrado correctamente");
				}
				else
				{
					alert("No se pudo guardar la información");
				}
			},
			error: function(xhr,ajaxOptions,thrownError){
				
			}
		});
	}


	$("#frmValidaEntrada").on("submit",validaEntrada);
	$("btnAltas").on("click",Altas);
	$("frmAltaUsuarios").on("submit",AltaUsuario);
}
$(document).on("ready",iniciaApp);