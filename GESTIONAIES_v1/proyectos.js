var listaProyectos = [];
function volver() {
    location.href = "aterrizaje.html"
}
CargarProyectos();
function CargarProyectos() {
    listaProyectos.push(new Proyecto(0,"Cepsa","Proyecto para Cepsa",1234));
    listaProyectos.push(new Proyecto(1,"Repsol","Proyecto para Repsol",1234));
    listaProyectos.push(new Proyecto(3,"Gas","Proyecto para GAS",34));
    listaProyectos.push(new Proyecto(4,"PlenOil","Proyecto para PlenOil",12));
    listaProyectos.push(new Proyecto(5,"Ballenoil","Proyecto para Ballenoil",124));
    listaProyectos.push(new Proyecto(6,"BP","Proyecto para BP",134));
}
function crearProyecto() {
    document.body.innerHTML += `<div id="nuevoProyecto" 
    class="divCentrado">
    <h1>Nuevo proyecto</h1>
    <p>
    <span></span>   
    <input type="text" id="codigo"> 
    </p>
    </div>`;
}
function creartabla() {

    var Contenido = "<table><tbody>";
    listaProyectos.forEach((proyecto)=>{
        Contenido += `<tr><td>${proyecto.nombre}</td>`
        Contenido += `<td>${proyecto.descripcion}</td>`
        Contenido += `<td>${proyecto.cliente}</td>`
        for(propiedad in proyecto){
        Contenido += `<td>${proyecto[propiedad]}</td>`
            
        }
        Contenido += `</tr>`;
})
    Contenido += "</tbody></table>"
    document.getElementById("central").innerHTML = Contenido;
}
onload=creartabla;
