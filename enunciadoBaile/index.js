onload = () => {
    pedirCursos();
    // pedirEntrenadores()
}
var listaCursos = []
function pedirCursos() {
    $.getJSON("listaCursos.php", {}, (lista) => {
        listaCursos = lista;
        pintarCursos(lista);
        let div =document.getElementById("superior")
        let select = div.children[2]
        
        select.addEventListener("change",function() {pintarPorTurnos(select.value,lista)})
    })

}

function pintarCursos(lista) {
    
    let divCentral = document.getElementById("central");
    let contenido = `<table><tbody>`
    let i = 0;
    lista.forEach((curso) => {

        if (i== 0) {
            contenido += "<tr>"
        }

        contenido += `
                    
                        <td "><img src="${curso.curso_imagen}"   style="height:70px; width:70px;"></td>
                        <td> Baile${curso.curso_descripcion}
                        <br> Precio:${curso.curso_precio}
                        <br> Dia: ${curso.curso_dia}
                        <br> turno ${curso.curso_horario}
                        <br> <button type="button" disabled>Contratar</button>
                        <br> <button type="button" disabled>Descontratar</button></td>`
                    
                        i++;
        if (i == 4){
            contenido += "</tr>"
            i=0;
        }
        

    });
    contenido += `</tbody> </table>`
    divCentral.innerHTML += contenido
}


function pintarPorTurnos(valorSelect,lista) {
    let divCentral = document.getElementById("central");
    divCentral.innerHTML = "";

    let contenido = `<table><tbody>`
    let i = 0;
    lista.forEach((curso) => {

        if (i== 0) {
            contenido += "<tr>"
        }
        if (curso.curso_horario == valorSelect ) {
        contenido += `
                    
                        <td "><img src="${curso.curso_imagen}"   style="height:70px; width:70px;"></td>
                        <td> Baile${curso.curso_descripcion}
                        <br> Precio:${curso.curso_precio}
                        <br> Dia: ${curso.curso_dia}
                        <br> turno ${curso.curso_horario}
                        <br> <button type="button" id = "btn-contratar" onclick="contratar(${curso.curso_precio},'${curso.curso_horario}','${curso.curso_dia}')">Contratar</button>
                        <br> <button type="button" id = "btn-descontratar" onclick="descontratar()">Descontratar</button></td>`
                    
                        i++;
        if (i == 4){
            contenido += "</tr>"
            i=0;
            }
        }
        


    });
    contenido += `</tbody> </table>`
    divCentral.innerHTML += contenido


    
}

//Solicito los entrenadores 
// var listaEntrenadores = [];

// function pedirEntrenadores() {
//     $.getJSON("listaEntrenadores.php", {}, (listaE) => {
//         listaEntrenadores = listaE;
//         pintarEntrenadores(listaE);
//     })

// }
// function pintarEntrenadores(lista) {
//     let filtros = document.getElementById("superior").getElementsByTagName("p")[0]
//     let contenido = "Todos"
//         lista.forEach((entrenador)=>{
//             contenido += `${entrenador.curso_entrenador} <input type="radio">`
//         })

//     filtros.innerHTML += contenido
// }

//Ahora hare la funcion para contratar una clase 
    var precioTotal=0;
function contratar(precio,turno,dia) {
    precioTotal+=precio
    let CostoTotal = document.getElementById("horario").getElementsByTagName("table")[0].getElementsByTagName("tr")[0].getElementsByTagName("th")[0]
    let turnoA = document.getElementById("horario").getElementsByTagName("table")[0].getElementsByTagName("tr")[2].getElementsByTagName("td")
    let turnoB= document.getElementById("horario").getElementsByTagName("table")[0].getElementsByTagName("tr")[3].getElementsByTagName("td") 
    let turnoC= document.getElementById("horario").getElementsByTagName("table")[0].getElementsByTagName("tr")[4].getElementsByTagName("td") 
    if (turno=="TURNO A") {
        if (dia=="Lunes") {
            turnoA[0].style = "background-color:white"
            turnoA[0].innerHTML = "X"
        }else if(dia=="Martes"){
            turnoA[1].style = "background-color:white"
            turnoA[1].innerHTML = "X"
        }else if(dia=="Miercoles"){
            turnoA[2].style = "background-color:white"
            turnoA[2].innerHTML = "X"
        }else if(dia=="Jueves"){
            turnoA[3].style = "background-color:white"
            turnoA[3].innerHTML = "X"
        }else if(dia=="Viernes"){
            turnoA[4].style = "background-color:white"
            turnoA[4].innerHTML = "X"
        }
    }
    if (turno=="TURNO B") {
        if (dia=="Lunes") {
            turnoB[0].style = "background-color:white"
            turnoB[0].innerHTML = "X"
        }else if(dia=="Martes"){
            turnoB[1].style = "background-color:white"
            turnoB[1].innerHTML = "X"
        }else if(dia=="Miercoles"){
            turnoB[2].style = "background-color:white"
            turnoB[2].innerHTML = "X"
        }else if(dia=="Jueves"){
            turnoB[3].style = "background-color:white"
            turnoB[3].innerHTML = "X"
        }else if(dia=="Viernes"){
            turnoB[4].style = "background-color:white"
            turnoB[4].innerHTML = "X"
        }
    }
    if (turno=="TURNO C") {
        if (dia=="Lunes") {
            turnoC[0].innerHTML = "X"
            turnoC[0].style = "background-color:white"
        }else if(dia=="Martes"){
            turnoC[1].innerHTML = "X"
            turnoC[1].style = "background-color:white"
        }else if(dia=="Miercoles"){
            turnoC[2].innerHTML = "X"
            turnoC[2].style = "background-color:white"
        }else if(dia=="Jueves"){
            turnoC[3].innerHTML = "X"
            turnoC[3].style = "background-color:white"
        }else if(dia=="Viernes"){
            turnoC[4].innerHTML = "X"
            turnoC[4].style = "background-color:white"
        }
    }
    CostoTotal.innerHTML = `COSTE TOTAL: ${precioTotal} euros`
    
    
}