    onload=()=>{
        CargarPersonas(listaPersonas);
        CargarFotos();
        MuestraFotosIntervalo;
    }

function CargarPersonas() {
    let divPersonas = document.getElementById("divPersonas")
    let divPersonasInterno = divPersonas.children[0]
    let paraffo = divPersonasInterno.children[0]
    let select = paraffo.children[1];
    listaPersonas.forEach((persona)=>{
        let option = document.createElement("option")
        option.textContent = persona.Nombre
        option.value=persona.Codigo
        select.appendChild(option)
    })

    select.addEventListener("change",MostrarPista)
}

function MostrarPista(evento) {
    
    let select = document.getElementById("divPersonas").getElementsByTagName("select")[1]
    valorSelect = select.value;
    

}
function CargarFotos() {
    let divTablero = document.getElementById("divTablero");
    let tabla = divTablero.children[1]
    let tbody = tabla.children[0]
    let contadorForJ = 0;


        for (let i = 0; i < 10; i++) {
            let tr = tbody.children[i]
            
            for (let j = 0; j < 10; j++) {
                
                let td = tr.children[j]
                let divFotoParrafo = document.createElement("div")
                divFotoParrafo.id = "divFotoParrafo"+contadorForJ
                divFotoParrafo.className ="oculto";
                td.appendChild(divFotoParrafo)

                if (listaPersonas[j].PosicionCelda1 == contadorForJ+1 || listaPersonas[j].PosicionCelda2 ==contadorForJ+1) {
                    let foto = document.createElement("img")
                    foto.src ="./imagenes/"+listaPersonas[j].Foto
                    foto.style = "height:75px ;"
                    foto.style = "width: 75px;"
                    divFotoParrafo.appendChild(foto)
                    contadorForJ++;  
                }else{
                    let foto = document.createElement("img")
                    foto.src ="./imagenes/novale.png"
                    foto.style = "height:75px ;"
                    foto.style = "width: 75px;"
                    divFotoParrafo.appendChild(foto)
                    contadorForJ++;
                }
                
            }
            
            
        }

}
var contadorFotos = 0;

function MostrarFotosPersonas() {
    let divFotoParrafo = document.getElementById("divFotoParrafo"+contadorFotos)
    divFotoParrafo.style = "display: block;"
    if (contadorFotos==99) {
        clearInterval(MuestraFotosIntervalo);
        window.location.href="resultados.html"
    }
    contadorFotos++;
    
}


   
    var MuestraFotosIntervalo = setInterval(MostrarFotosPersonas,5000);
    






