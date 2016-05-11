var iniciaApp = function()
{
	var validaEntrada = function()
	{
		event.preventdefault;
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
		if(usuario == "pw" && clave == "1234")
		{
			alert("Bienvenido "+ usuario)
			//Dar entrada al usuario
			$("#datosUsuario").hide(); //escondemos
			$("nav").show("slow"); //mostramos
		}
		else
			alert("usuario y/o contraseña incorrecta");

		console.log("Se disparó el submit");
	}
	$("#frmValidaEntrada").on("submit",validaEntrada);
}
$(document).on("ready",iniciaApp);