onload = ()=>{
    let btn_comprobar = document.getElementById("btnRecibir")
    btn_comprobar.addEventListener('click', comprobar)
}

function comprobar() {
    let cajaPuntos = document.getElementById("ejercicio3").getElementsByTagName("input")[0]
    let cajaFecha = document.getElementById("ejercicio3").getElementsByTagName("input")[1]
    let cajaCiudad = document.getElementById("ejercicio3").getElementsByTagName("input")[2]
    let listaCheckbox = document.getElementById("ejercicio3").querySelectorAll("input[type='checkbox']:checked")
    if(validarCheckbox(listaCheckbox)){
        alert("true")
    }else{
        alert("false")
    }
}   

function validarPuntos(Puntos) {
    let clicksAlmacenados = 20
    if (Puntos<=clicksAlmacenados) {
        return true    
    }else{
        return false
    }
}

function validarFecha(FechaEntera) {
    let listaFecha = FechaEntera.split("-")
    let dia = listaFecha[2]
    let mes = listaFecha[1]-1
    let anio = listaFecha[0]
    let fecha = new Date(anio,mes,dia)
    let validacionFecha = false;
    if (anio!=fecha.getFullYear() || mes!=fecha.getMonth() || dia!=fecha.getDate()) {
        validacionFecha=false
    }else{
        validacionFecha=true
    }

    let fechaActual = new Date()
    fechaActual.setDate(fechaActual.getDate()+3)

    if (validacionFecha==true) {
        if (fecha>fechaActual) {
            return true
        }else{
            return false
        }
    }
}

function validarCiudad(Ciudad) {
    if (Ciudad!="MOSTOLES" || Ciudad!="ALCORCON" || Ciudad!="GETAFE" || Ciudad!="LEGANES" || Ciudad!="ARANJUEZ" || Ciudad!="PARLA" || Ciudad!="VILLALBA" ){
        return false
    }else{
        return true
    }
}

function validarCheckbox(checkbox) {
    console.log(checkbox);
    if (checkbox.length>=2) {
        return true
    }else{
        return false
    }
}