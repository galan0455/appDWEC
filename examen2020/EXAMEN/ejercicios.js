var listaFotos = ["artic_logo.png","cream_sports.png","emonkeyz_logo.png","mad_lions.png","movistar_logo.png","bcn_squad_logo.png","s2v_digital_sports.png","heretics_logo.png","team_queso.png","ucam_penguins_logo.png","giants_logo.png","wizards.png","wygers.png","x6tence.png"]
var listaEquipos = ["ARCTIC GAMING","CREAM REAL BETIS","EMONKEYZ","MAD LIONS E.C.","MOVISTAR RIDERS","BCN SQUAD","S2V ESPORTS","TEAM HERETICS","TEAM QUESO","UCAM ESPORTS CLUB","VODAFONE GIANTS","WIZARDS CLUB","WYGERS","X6TENCE"]
var contador = 0;
function cambiarImg() {
    let divAnuncio = document.getElementById("anuncio")
    let parrafo =divAnuncio.children[0]
    let imagen = parrafo.children[0]
        imagen.src = "./imagenes/"+listaFotos[contador]
        if (contador==listaFotos.length) {
            contador=0
        }else{
            contador++;
        }
    
}
function NuevoContrato() {
    let divCentral = document.getElementById("central")
    divCentral.className = "oculta"
    
    let divContrato = document.getElementById("nuevoContrato");
    divContrato.className = "visible";
    
    let select = document.getElementsByName("jugador")[0];
    select.id="Selec_jugador";

    let option = document.createElement("option");
    option.textContent = "Escoge un jugador";
    option.value ="..."
    select.appendChild(option)

    listaJugadores.forEach((jugador)=>{
     option = document.createElement("option");
        option.textContent = jugador.apellidos+" "+jugador.nombre;
        option.value = jugador.apellidos+" "+jugador.nombre;
        select.appendChild(option);
    }) 
    let select2 = document.getElementsByName("equipo")[0];
    select2.id="Selec_equipo";
    option = document.createElement("option");
    option.textContent = "Escoge un Equipo";
    option.value ="..."
    select2.appendChild(option)
    listaEquipos.forEach((equipo)=>{
        option = document.createElement("option")
        option.textContent = equipo;
        option.value = equipo;
        select2.appendChild(option)

    })
    document.getElementById("guardar").addEventListener("click",guardar)




}

function guardar(){
    let valorJugador = document.getElementById("Selec_jugador").value
    let valorEquipo = document.getElementById("Selec_equipo").value
    let valorFechaDesde= document.getElementsByName("fechaDesde")[0].value
    let valorFechaHasta = document.getElementsByName("fechaHasta")[0].value
    let valorImporte = document.getElementsByName("importeAnual")[0].value
    let valorPorcentajeAge = document.getElementsByName("porcentajeAgente")[0].value
    if (valorJugador!="...") {
        localStorage.setItem("valorJugador",valorJugador);
    }else{
        let valueJugador = document.getElementById("Selec_jugador")
        valueJugador.style = "border:2px solid red";
    }

    if (valorEquipo!="...") {
        localStorage.setItem("valorEquipo",valorEquipo);
    }else{
        let valueJugador = document.getElementById("Selec_equipo")
        valueJugador.style = "border:2px solid red";
    }

    if(valorFechaDesde>Date() && valorFechaHasta > valorFechaDesde){
        localStorage.setItem("FechaDesde",valorFechaDesde)
        localStorage.setItem("FechaHasta",valorFechaHasta)
    }
    if (valorPorcentajeAge>1 && valorPorcentajeAge<10) {
        localStorage.setItem("PorcentajeAge",valorPorcentajeAge)
    }
    if (valorImporte!="") {
        localStorage.setItem("Importe",valorImporte)
    }
    
    

}

var cambiarFoto = setInterval(cambiarImg,3000)
onload=()=>{
    cambiarFoto;
    guardar()
}