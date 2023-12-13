<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/loggin.css">
    
    <script src="./js/singin.js"></script>
</head>
<body>
    <form action="./php/addPersona.php" method="post" id="form">

        <section class="form-register">
            <input class="controls" type="text" name="Usuario" id="Usuario" placeholder="Ingrese su Usuario" >
                <br>
            <!--Comprobacion de las variables introducidas con php-->
            <?php
                if(isset($_GET["error1"]) && $_GET["error1"]==1){
                    print "<p style='color:red;'>El Usuario no es valido</p>";
                }else if(isset($_GET["error1"]) && $_GET["error1"]==2){
                    print "<p style='color:red;'>El Usuario esta vacio</p>";
                }
            ?>

            <input class="controls" type="email" name="Email" id="Email" placeholder="Ingrese su Correo">
                <br>
            <!--Validacion de los emails-->
            <?php
                if(isset($_GET["error2"]) && $_GET["error2"]==1){
                    print "<p style='color:rojo;'>El Email no es valido</p>";
                }else if(isset($_GET["error2"]) && $_GET["error2"]==3){
                    print "<p style='color:red;'>El Email esta vacio</p>";
                }
            ?>

            <input class="controls" type="email" name="ConEmail" id="ConEmail" placeholder="Confirme Correo" >
                <br>

            <?php
                if(isset($_GET["error3"]) && $_GET["error3"]==1){
                    print "<p style='color:rojo;'>El Email no es valido</p>";
                }else if(isset($_GET["error3"]) && $_GET["error3"]==3){
                    print "<p style='color:red;'>El Email esta vacio</p>";
                }else if(isset($_GET["error3"]) && $_GET["error3"]==2){
                    print "<p style='color:red;'>Los emails no coinciden </p>";
                }
            ?>

            <input class="controls" type="password" name="Contraseña" id="Contraseña" placeholder="Ingrese la contraseña" >
                <br>
                <!--Validacion de las contraseñas-->
            <?php
                if(isset($_GET["error4"]) && $_GET["error4"]==1){
                    print "<p style='color:rojo;'>La contraseñana no es valida</p>";
                }else if(isset($_GET["error4"]) && $_GET["error4"]==3){
                    print "<p style='color:red;'>La contraseña esta vacia</p>";
                }
            ?>

            <input class="controls" type="password" name="ConfContraseña" id="ConfContraseña" placeholder="Confirme la contraseña" >
                <br>

            <?php
                if(isset($_GET["error5"]) && $_GET["error5"]==1){
                    print "<p style='color:rojo;'>La contraseña no es valida</p>";
                }else if(isset($_GET["error5"]) && $_GET["error5"]==3){
                    print "<p style='color:red;'>La contraseña esta vacia</p>";
                }else if(isset($_GET["error5"]) && $_GET["error5"]==2){
                    print "<p style='color:red;'>La contraseñas no coinciden</p>";
                }
            ?>

            <input class="bottons" type="submit" name="Registro" value="Registrate" id="Avanzar_inicioS">
            <input class="bottons" type="button" name="Volver_Aterrizaje" value="Volver a aterrizaje" id="volver_aterizaje">
        </section>
    </form>
</body>
</html>