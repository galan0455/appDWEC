onload = () => {
    pedirCursos();
}
var listaCursos = []
function pedirCursos() {
    $.getJSON("listaCursos.php", {}, (lista) => {
        listaCursos = lista;
        pintarCursos(lista);
        let div =document.getElementById("superior")
        let select = div.children[2]
        
        select.addEventListener("change",pintarPorTurnos)
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
                        <br> <button type="button" >Contratar</button>
                        <br> <button type="button" >Descontratar</button></td>`
                    
                        i++;
        if (i == 4){
            contenido += "</tr>"
            i=0;
        }
        

    });
    contenido += `</tbody> </table>`
    divCentral.innerHTML += contenido
}

function pintarPorTurnos() {
    let div =document.getElementById("superior")
    let select = div.children[2]
    let turno = select.value
    $.post("listaCursos.php",{turno})
}