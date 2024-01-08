<?php
    //Configuracion de la conexion a base de datos
  $bd_host = "mysql"; 
  $bd_usuario = "root"; 
  $bd_password = "root"; 
  $bd_base = "2daw";
  
  $con = mysqli_connect($bd_host, $bd_usuario, $bd_password); 
   mysqli_select_db($con,$bd_base) or die(mysqli_error($con)); 

  $query = "SELECT jugador_id, jugador_puesto, jugador_nombre, jugador_puntos, jugador_nacionalidad  FROM  ranking";

$Resultado=mysqli_query($con,$query);
$arrayJugadores = array();
while ($jugador=mysqli_fetch_assoc($Resultado)) {
        $arrayJugadores[] = array_map('utf8_encode', $jugador);
}

//enviamos el array como objeto JSON
echo json_encode($arrayJugadores);


?>

