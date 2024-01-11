var listaEquipos = ["ARCTIC GAMING","CREAM REAL BETIS","EMONKEYZ","MAD LIONS E.C.","MOVISTAR RIDERS","BCN SQUAD","S2V ESPORTS","TEAM HERETICS","TEAM QUESO","UCAM ESPORTS CLUB","VODAFONE GIANTS","WIZARDS CLUB","WYGERS","X6TENCE"]
var listaImagenes =["artic_logo.png","cream_sports.png","emonkeyz_logo.png","mad_lions.png","movistar_logo.png","bcn_squad_logo.png","s2v_digital_sports.png","heretics_logo.png","team_queso.png","ucam_penguins_logo.png","giants_logo.png","wizards.png","wygers.png","x6tence.png"]
var indiceImagenAuncio = 0;


onload = ()=>{
    setInterval(()=>{imagenesAnuncio(listaImagenes)},3000)
    let EnlaceJugadores = document.querySelector("#menu > nav > ul > li:nth-child(2) > a");
    let EnlaceContratos = document.querySelector("#menu > nav > ul > li:nth-child(3) > a");
    EnlaceJugadores.addEventListener("click",MostrarJugadores)
    EnlaceContratos.addEventListener("click", MostrarContratos);
    let guardarContrato = document.getElementById("guardar");
    guardarContrato.addEventListener('click', validacion);

}



function imagenesAnuncio(lista) {
    let divAnuncio = document.getElementById("anuncio")

    divAnuncio.innerHTML = "<img src='./imagenes/"+lista[indiceImagenAuncio]+"'>"

    if (indiceImagenAuncio==lista.length-1) {
        indiceImagenAuncio=0
    }else{
        indiceImagenAuncio++;
    }
    
}

function MostrarJugadores() {
    let divContrato= document.getElementById("nuevoContrato")
    divContrato.className = "oculta";
    let divCentral = document.getElementById("central");
    divCentral.className = "visible";
    divCentral.innerHTML = "Jugadores:   "
    let select = document.createElement("select");
    select.id = "selectJugador"
    select.addEventListener("change",mostrarCajasJugador)
    divCentral.appendChild(select)
        let option = document.createElement("option")
        option.value = 0;
        option.textContent = "Selecciona jugador"
        select.appendChild(option);

    for (let i = 0; i < listaJugadores.length; i++) {
        option = document.createElement("option")
       
            option.value = listaJugadores[i].nif;
            option.textContent = listaJugadores[i].nombre
        
        select.appendChild(option);
        
    }
    
}

function mostrarCajasJugador() {
    let contenidoCaja =document.getElementById("selectJugador").value
    let divCentral = document.getElementById("central");
    if (contenidoCaja==0) {
        alert("Seleccione un jugador ")
    }else{
        let posicion =  listaJugadores.findIndex((jugador)=> {
            return jugador.nif === contenidoCaja;
          });

        divCentral.innerHTML +=`<br><br>
        Nombre: <input type="text" value="${listaJugadores[posicion].nombre}">
        Apellidos: <input type="text" value="${listaJugadores[posicion].apellidos}">
        nif: <input type="text" value="${listaJugadores[posicion].nif}">
        Correo: <input type="text" value="${listaJugadores[posicion].correo}">
        Comentarios: <input type="text" value="${listaJugadores[posicion].comentarios}">`
        
    }
}

function MostrarContratos() {
    let divCentral = document.getElementById("central");
    divCentral.className = "oculta";

    let divContrato= document.getElementById("nuevoContrato")
    divContrato.className = "visible";

    let selectJugadores = document.getElementsByName("jugador")[0];

    let option = document.createElement("option");

        option.value = "fallo";
        option.textContent = "Escoge un jugador";
        selectJugadores.appendChild(option);

    for (let i = 0; i < listaJugadores.length; i++) {
        option = document.createElement("option");
        option.value = listaJugadores[i].nif;
        option.textContent = listaJugadores[i].nombre
        selectJugadores.appendChild(option);
        
    }

    let selectEquipo = document.getElementsByName("equipo")[0]

        let option2 = document.createElement("option");
        option2.value = "fallo";
        option2.textContent = "Escoge un equipo";
        selectEquipo.appendChild(option2)   
        
    for (let i = 0; i < listaEquipos.length; i++) {
        option2 = document.createElement("option");
        option2.value = i;
        option2.textContent = listaEquipos[i]
     selectEquipo.appendChild(option2)   
    }
}


var listaContratos = []

function validacion() {
    let cajaJugador = document.getElementsByName("jugador")[0].value
    let cajaEquipo = document.getElementsByName("equipo")[0].value
    let cajaFechaDesde = document.getElementsByName("fechaDesde")[0].value
    let cajaFechaHasta = document.getElementsByName("fechaHasta")[0].value
    let cajaImporte = document.getElementsByName("importeAnual")[0].value
    let cajaPorcentaje = document.getElementsByName("porcentajeAgente")[0].value

    if (validacionJugador(cajaJugador)==true && validacionEquipo(cajaEquipo)==true && validacionFechas(cajaFechaDesde,cajaFechaHasta)==true
    && validacionImporte(cajaImporte)==true && validacionPorcentaje(cajaPorcentaje)==true) {
        let jugadorContrato = 
            {
                nombre: cajaJugador,
                equipo: cajaEquipo,
                importe: cajaImporte,
                porcentaje: cajaPorcentaje,
            }
        let ContratoString = JSON.stringify(jugadorContrato);

        listaContratos.push(ContratoString);

        localStorage.setItem("contratos",listaContratos);
            alert("contrato Guardado")
    }else{
        alert("false")
    }
    
    
}


function validacionJugador(jugador) {
    if (jugador == "fallo") {
        return false;
    }else{
        return true;
    }
}

function validacionEquipo(equipo) {
    if (equipo == "fallo") {
        return false;
    }else{
        return true;
    }
}

function validacionFechas(cajafechaDesde,cajafechaHasta) {
    let valDesde = false;
    let valHasta = false;

    let listaFechaDesde = cajafechaDesde.split("/")
    let listaFechaHasta = cajafechaHasta.split("/")
    
    let añoDesde = listaFechaDesde[0];
    let mesDesde = listaFechaDesde[1];
    let diaDesde = listaFechaDesde[2];

    let añoHasta = listaFechaHasta[0];
    let mesHasta = listaFechaHasta[1];
    let diaHasta = listaFechaHasta[2];

    let FechaDesde = new Date(añoDesde,mesDesde -1,diaDesde)
    let FechaHasta = new Date(añoHasta,mesHasta -1,diaHasta)

    if (FechaDesde.getFullYear()!=añoDesde || FechaDesde.getMonth()!=mesDesde -1 || FechaDesde.getDate()!=diaDesde) {
        valDesde=false;
    }else{
        valDesde=true
    }

    if (FechaHasta.getFullYear()!=añoHasta || FechaHasta.getMonth()!=mesHasta -1 || FechaHasta.getDate()!=diaHasta) {
        valHasta=false;
    }else{
        valHasta=true
    }

    if (valDesde==true && valHasta==true) {
        if (FechaDesde<FechaHasta) {
            return true
        }else{
            return false
        }
    }else{
        return false
    }



}

function validacionImporte(importe) {
    if (importe!="") {
        return true
    }else{
        return false
    }
}

function validacionPorcentaje(porcentaje) {
    if (porcentaje>=1 && porcentaje<=10) {
        return true
    }else{
        return false
    }
}
