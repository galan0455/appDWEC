<?php
require("acceso_mysql2.php");
if (isset($_POST["matricula"])){
   $matricula = $_POST["matricula"];
   $stmt = $dbh->prepare("SELECT * FROM coches WHERE matricula = ?");
   $stmt->execute([$matricula]);     
   
        if (isset($_POST["matricula"])){
            $matricula =trim(htmlspecialchars(strip_tags($_POST["matricula"])));
            $stmt = $dbh->prepare("DELETE FROM coches where matricula = ?");
            $stmt->execute([$matricula]);
            if ($stmt->rowCount()==0){
                echo '{"estado":"error","mensaje":"No se ha podido dar de alta"}'; 
            } else {
            echo '{"estado":"ok"}';
            }
        } else {
            echo '{"estado":"error","mensaje":"faltan campos"}';
        }
    }
?>