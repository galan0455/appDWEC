<?php
    //Configuracion de la conexion a base de datos
  $bd_host = "mysql"; 
  $bd_usuario = "root"; 
  $bd_password = "root"; 
  $bd_base = "2daw";
  
  $con = mysqli_connect($bd_host, $bd_usuario, $bd_password); 
   mysqli_select_db($con,$bd_base) or die(mysqli_error($con)); 


 $query = "SELECT * FROM  ranking";

$Resultado=mysqli_query($con,$query);
while ($MostrarFila=mysqli_fetch_array($Resultado)) {
    echo $MostrarFila['jugador_id']."-" . $MostrarFila['jugador_puesto']."-". $MostrarFila['jugador_nombre']."-". $MostrarFila['jugador_nacionalidad']."-". $MostrarFila['jugador_puntos'].";";
  }

?>

