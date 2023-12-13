function mostrarContratos() {
    let Nombre = localStorage.getItem("valorJugador")
    let Equipo = localStorage.getItem("valorEquipo")
    let Import = localStorage.getItem("Importe")
    let Porcentage = localStorage.getItem("PorcentajeAge")
 let parrafo = document.createElement("p");   
 document.body.innerHTML += Nombre+" "+Equipo+" "+Import+" "+Porcentage
 let body = document.getElementsByTagName("body")[0];
 body.appendChild(parrafo);
 document.body.innerHTML += "<button type='button' id='beneficios'>Beneficios</button>"
 document.getElementById("beneficios").addEventListener("click",MostrarBeneficios)
}

function volverYCargar(){
    let referencia = document.getElementById("volver");
    let referencia2 = document.getElementById("cargar");
    referencia.href= "index.html";
    referencia2.href = "contratos.html";
}
function MostrarBeneficios() {
    window.open("")
}

onload= () =>{
    mostrarContratos()
    volver();
}