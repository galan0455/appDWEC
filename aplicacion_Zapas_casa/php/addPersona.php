<?php
    $val = false;
    $val2 = false;
    $val3 = false;
    $val4 = false;
    $val5 = false;
    $error1 = "";
    $error1 = "";
    $error2 = "";
    $error2 = "";
    $error3 = "";
    $error3 = "";
    $error4 = "";
    $error4 = "";
    $error5 = "";
    $error5 = "";
    
    //Validacion del usuario 
    if (!empty($_REQUEST["Usuario"])) {
        $usuario =trim(htmlspecialchars(strip_tags($_REQUEST["Usuario"])));
        if (preg_match("/^[a-zA-Z0-9]+$/",$usuario)) {
            $val=true;
        }else{
            $error1 ="error1=1&";
        }
    }else{
        $error1 ="error1=2&";
    }

    //Validacion del email y de la confirmacion del email
    if (!empty($_REQUEST["Email"] && !empty($_REQUEST["Email"]))) {
        $email = trim(htmlspecialchars(strip_tags( $_REQUEST["Email"])));
        $confemail =trim(htmlspecialchars(strip_tags($_REQUEST["ConEmail"])));
        if ($email == $confemail) {
            if (filter_var($email,FILTER_VALIDATE_EMAIL) && filter_var($confemail,FILTER_VALIDATE_EMAIL)) {
                $val2=true;
                $val3=true;
            }else{
                $error2="error2=1&";
                $error3="error3=1&";
            }
        }else{
            $error2="error2=2&";
            $error3="error3=2&";
        }
    }else {
        $error2="error2=3&";
        $error3="error3=3&";
    }
    
    //validacion de la contraseña y de la confirmacion de la contraseña 
    if (!empty($_REQUEST["Contraseña"] && !empty($_REQUEST["ConfContraseña"]))) {
        $contrasenia = trim(htmlspecialchars(strip_tags( $_REQUEST["Contraseña"])));
        $confcontrasenia =trim(htmlspecialchars(strip_tags($_REQUEST["ConfContraseña"])));
        if ($contrasenia == $confcontrasenia) {
            if (preg_match("/^[a-zA-Z0-9\-\#]+$/",$contrasenia) && preg_match("/^[a-zA-Z0-9\-\#]+$/",$confcontrasenia)){
                $val4=true;
                $val5=true;
            }else{
                $error4="error4=1&";
                $error5="error5=1";
            }
        }else{
            $error4="error4=2&";
            $error5="error5=2";
        }
    }else {
        $error4="error4=3&";
        $error5="error5=3";
    }

    if ($val==true && $val2==true && $val3== true && $val4== true && $val5== true) {
        $open = fopen("../Usuarios.json","r");
        $texto = fread($open, filesize("../Usuarios.json"));
        $texto = str_replace("]",',{"Usuario":"'.$usuario.'","email":"'. $email.'","confemail":"'. $confemail.'","contraseña":"'. $contrasenia.'","confcontraseña":"'. $confcontrasenia.'"}',$texto);
        $texto = $texto . "]";
        fclose($open);
        $open = fopen("../Usuarios.json","w+");
        fwrite($open, $texto);
        fclose($open);
        header("Location:../loggin.html");          
    }else{
        header("Location:../singin.php?".$error1.$error2.$error3.$error4.$error5);
    }




?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            background-color: lightblue;
            text-align: center;
        }
        a{
            /* Estilos para el enlace que parece un botón */
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      background-color: white; /* Color de fondo */
      color: blue; /* Color del texto */
      border: 1px solid blue; /* Borde del botón */
      border-radius: 5px; /* Bordes redondeados */
      cursor: pointer; /* Cambia el cursor al pasar sobre el botón */

    }
    /* Cambia el estilo al pasar el ratón sobre el botón */
    a:hover {
      background-color: darkblue; /* Cambia el color de fondo al pasar el ratón */
    }
    </style>

</head>
<body>
    
</body>
</html>

