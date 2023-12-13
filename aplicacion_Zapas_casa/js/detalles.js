var listaZapatillas=[];
//Recoge el id pasado por el html
let idZapatilla = location.search.split("?")[1].split("=")[1];;
// recoge los datos del json de zapatillas
$.getJSON("ZapatillasJSON.json", (datos) => {
    listaZapatillas = datos;
    let posicion = listaZapatillas.findIndex((zapatilla)=>zapatilla.Id==  idZapatilla)
    pintarZapatilla(listaZapatillas[posicion]);
});
//Pinta las zapatillas 
function pintarZapatilla(zapatilla) {
    let divDatos=document.getElementById("datos");
        divDatos.innerHTML += "<ul>"
        divDatos.innerHTML +=  "<img src="+zapatilla.Foto+" class='foto'>"
        divDatos.innerHTML+= "<li> Marca: "+zapatilla.marca+"</li>";
        divDatos.innerHTML+= "<li> Modelo: "+zapatilla.modelo+"</li>";
        divDatos.innerHTML+= "<li> Color: "+zapatilla.color+"</li>";
        divDatos.innerHTML+= "<li> stock: "+zapatilla.stock+"</li>";
        divDatos.innerHTML+= "<li> precio: "+zapatilla.precio+"</li>";           
        divDatos.innerHTML += "</ul>"
}
// Envia la pagina al aterrizaje 
function volver() {
    window.location.href="http://localhost:8080/aplicacion_Zapas_casa/aterrizaje.html";
}
