//variables globales
//se usan en todo el código
var turno = false;
var letraCasilla = "";
var cuentaJuego = 0;
var cuentaJugadas = 0;

function iniciaGato()
{
	//en construcción 77
}

function escribe(casilla)
{
	var letra="";
	letraCasilla = document.getElementById(casilla).innerHTML;
	if(letraCasilla=="&nbsp;")
	{
		if(turno == false)
		{
			letra ="X";
		}
		else
		{
			letra="O"
		}
		document.getElementById(casilla).innerHTML=letra;
		turno = !turno;
	}
	cuentaJugadas = cuentaJugadas + 1;
	//Para saber quien ganó, validamos la jugada
	validaJugada(letra);
}

function validaJugada
{
	var ganador = false;
	var b11 = document.getElementById("unouno").innerHTML;
	var b12 = document.getElementById("unodos").innerHTML;
	var b13 = document.getElementById("unotres").innerHTML;
	var b21 = document.getElementById("dosuno").innerHTML;
	var b22 = document.getElementById("dosdos").innerHTML;
	var b23 = document.getElementById("dostres").innerHTML;
	var b31 = document.getElementById("tresuno").innerHTML;
	var b32 = document.getElementById("tresdos").innerHTML;
	var b33 = document.getElementById("trestres").innerHTML;
	//Jugadas
	//renglones
	if(b11==b12 && b12==b13 && b11!="&nbsp;")
	ganador=true;
	if(b21==b22 && b22==b23 && b21!="&nbsp;")
	ganador=true;
	if(b32==b32 && b32==b33 && b31!="&nbsp;")
	ganador=true;
	//columnas
	if(b11==b21 && b21==b31 && b11!="&nbsp;")
	ganador=true;
	if(b12==b22 && b22==b32 && b12!="&nbsp;")
	ganador=true;
	if(b13==b23 && b23==b33 && b13!="&nbsp;")
	ganador=true;
	//diagonales
	if(b11==b22 && b22==b33 && b11!="&nbsp;")
	ganador=true;
	if(b13==b22 && b22==b31 && b13!="&nbsp;")
	ganador=true;

	//¿Alguien ganó?
	if(ganador = true)
	{
		alert("Ganador"+letra);
	}
	else 
	if(ganador = false && cuentaJugadas==9)
	{
		alert("EMPATE")
	}

}