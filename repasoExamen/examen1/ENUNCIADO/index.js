onload = ()=>{
    cargarPersonas()
    rellenarTabla()
    setInterval(mostrarDivPorSegundos,5000)
    let selectPersonas = document.getElementById("divPersonas").getElementsByTagName("select")[1]
    selectPersonas.addEventListener("change",mostrarPista)
}

function cargarPersonas() {
    let selectPersonas = $("#divPersonas select:eq(1)")
    listaPersonas.forEach((persona)=>{
        let option = document.createElement("option")
        option.textContent = persona.Nombre
        option.value= persona.Codigo
        selectPersonas[0].appendChild(option)
    })
}

function rellenarTabla() {
    let listaTD = document.getElementById("divTablero").
    getElementsByTagName("tbody")[0].getElementsByTagName("td")

    for (let i = 0; i < listaPersonas.length; i++) {
        
        
        for (let j = 0; j < listaTD.length; j++) {
            if (listaTD[j].textContent == listaPersonas[i].PosicionCelda1 || listaTD[j].textContent == listaPersonas[i].PosicionCelda2) {
                let div = document.createElement("div")
                div.className="oculto"
                let img = document.createElement("img")
                let parrafo = document.createElement("p")
                img.src = `./imagenes/${listaPersonas[i].Foto}`
                img.style = "width: 70px; height: 70px;"
                parrafo.innerHTML = `${listaPersonas[i].Nombre}`
                div.appendChild(img)
                div.appendChild(parrafo)
                listaTD[j].appendChild(div)
            } 
            
        }

        
          
    }
    for (let j = 0; j < listaTD.length; j++) {
        listaTD[j].addEventListener("click",()=>{mostrarDiv(event)})
        if (listaTD[j].childNodes.length <=1) {
            let div = document.createElement("div")
            div.className="oculto"
            let img = document.createElement("img")
            let parrafo = document.createElement("p")
            img.src = `./imagenes/novale.png`
            img.style = "width: 70px; height: 70px;"
            parrafo.innerHTML = `ERROR`
            div.appendChild(img)
            div.appendChild(parrafo)
            listaTD[j].appendChild(div)
        }
        
    }
}

var clicksCorrectos = 0
var clicksErrones = 0

    function mostrarDiv(event) {
        let td = event.target
        let div = td.children[0]
        div.className = "visible"
        let parrafoTD = div.children[1]    

        if (parrafoTD.textContent == "ERROR"){
            clicksErrones++;
        }else{
            clicksCorrectos++
        }
    }

    var contadorDivs=0
    function mostrarDivPorSegundos() {
        let listaDiv = document.getElementById("divTablero").
        getElementsByTagName("tbody")[0].getElementsByTagName("div")

            listaDiv[contadorDivs].className = "visible"
            contadorDivs++;

    }

    function mostrarPista() {
        let inputText = document.getElementById("divPersonas").getElementsByTagName("input")[0]
        let Select = document.getElementById("divPersonas").getElementsByTagName("select")[1]
        listaPersonas.forEach((persona)=>{
            if(Select.value==persona.Codigo)
            inputText.value = `${persona.PosicionCelda1} ${persona.PosicionCelda2}`
        })
        Select.removeEventListener("click",mostrarPista)
    }