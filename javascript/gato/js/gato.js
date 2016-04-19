var contador=0;

function seleccion(valor,pos)
{
	if(valor=="")
	{	
		if (contador%2 == 0)
		{
			document.getElementById(pos).value="X";
			contador=contador+1;
		}
		else
		{
			document.getElementById(pos).value="O";
			contador=contador+1;
		}
	}
}