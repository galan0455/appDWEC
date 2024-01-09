<?php
    //Configuracion de la conexion a base de datos
  $bd_host = "mysql"; 
  $bd_usuario = "root"; 
  $bd_password = "root"; 
  $bd_base = "2daw";
  
  $con = mysqli_connect($bd_host, $bd_usuario, $bd_password); 
   mysqli_select_db($con,$bd_base) or die(mysqli_error($con)); 

  $id=$_POST["identificador"];
  $query = "SELECT * FROM  ranking WHERE jugador_id=$id";

$Resultado=mysqli_query($con,$query);
if ($jugador=mysqli_fetch_assoc($Resultado)) {
        $jugador = array_map('utf8_encode', $jugador);
}

//enviamos el array como objeto JSON
echo json_encode($jugador);



?>

