 // Lo que hare ahora sera crear un metodo para volver a la pagina inicial
 function Volver_Aterrizaje() {
    document.location.href = "aterrizaje.html";
 }
 //Funcion que lleva al loggin
 function Avanzar_inicioS() {
   document.location.href = "loggin.html";
 }
 onload = () =>{
    document.getElementById("volver_aterizaje").addEventListener("click",Volver_Aterrizaje)

 }