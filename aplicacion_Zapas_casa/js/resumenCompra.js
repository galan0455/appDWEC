onload = ()=>{
    mostrarTotal();
}

function mostrarTotal() {
    let total = localStorage.getItem("PrecioF");
    let precioF_h1 = document.getElementById("PrecioFinal");
    precioF_h1.innerHTML = total+"€";  
}

function volver() {
    window.location.href="http://localhost:8080/aplicacion_Zapas_casa/aterrizaje.html";
}
function finalizar() {
    window.location.href = "final.html";
}