// Lo que hare ahora sera crear un metodo que te envia a la pagina de registro 
var listaUsuarios = [];
$.getJSON("./Usuarios.json",(datos)=>{
  listaUsuarios=datos
})

    onload = ()=>{
        document.getElementById("Inicio_sesion").addEventListener("click",validarEntrada)
        document.getElementsByTagName("button")[1].addEventListener("click",registro)
    }
    //Envia la pagina al registro
    function registro() {
        window.location.href="http://localhost:8080/aplicacion_Zapas_casa/singin.php"
    }
    // valiuda si el usuario ha sido creado 
    function validarEntrada() {
        let user = document.getElementById("user").value
        let contrasenia = document.getElementById("contrasenia").value
        let divFallo = document.getElementById("fallo");
        let contador =0;
        listaUsuarios.forEach((persona)=>{
            if (persona.Usuario == user && persona.contraseña == contrasenia) {
                window.location.href = "aterrizaje.html";
                localStorage.setItem("usuario",user+" "+contrasenia);
            }else{
                contador++;
                if (contador==listaUsuarios.length) {
                    divFallo.innerHTML = "<p style = 'color : red;'>Ha introducido mal la contraseña o el usuario</p>" 
                }
            }
        })
        
    }