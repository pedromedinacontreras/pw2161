<?php 
//Funciones
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}

function validaEntrada()
{
	$usuario = GetSQLValueString($_POST["usuario"],"text");
	$clave = GetSQLValueString(md5($_POST["clave"]),"text");
	$respuesta = false;
	//Conecta al servidor de BD
	//Servidor, usuario, clave
	$conexion = mysql_connect("localhost","root","");
	//Seleccionar base de datos
	mysql_select_db("cursopw");
	$validar = sprintf("select usuario, clave from usuarios where usuario=%s and clave=%s limit 1",$usuario,$clave);
	$resultado = mysql_query($validar);
	//Preguntamos si se trae un registro
	if(mysql_num_rows($resultado) > 0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	//Devolvemos el resultado al JS
	print json_encode($salidaJSON);
}

function guardaUsuario()
{
	$usuario = GetSQLValueString($_POST["txtNombreUsuario"],"text");
	$clave = GetSQLValueString(md5($_POST["txtClaveUsuario"]),"text");
	$tipo = GetSQLValueString($_POST["txtTipoUsuario"],"text");
	$depto = GetSQLValueString($_POST["txttDepartamento"],"long");
	$respuesta = false;
	//Conecta al servidor de BD
	//Servidor, usuario, clave
	$conexion = mysql_connect("localhost","root","");
	//Seleccionar base de datos
	mysql_select_db("cursopw");
	$guarda = sprintf("insert into usuarios values(%s,%s,%s,%d)",$usuario,$clave,$tipo,$depto);
	//Ejecutamos la consulta
	mysql_query($guarda);
	//Cuantos registros fueron afectados
	if(mysql_affected_rows() > 0)
	{
		$respuesta = true;
	}
	$salidaJSON = array('respuesta' => $respuesta);
	print json_encode($salidaJSON);

}

$accion = $_POST["accion"];
//Menú principal
switch ($accion) {
	case 'validaEntrada':
		validaEntrada();
		break;
	case 'guardaUsuario':
		guardaUsuario();
		break;
	default:
		# code...
		break;
}
?>