onload = ()=>{
    document.getElementById("btnRecibir").addEventListener("click",comprobarResultado)
}


var listaCiudades = ["MOSTOLES", "ALCORCON", "GETAFE", "LEGANES", "ARANJUEZ", "PARLA","VILLALBA","mostoles","alcorcon","getafe","leganes","aranjuez","parla","villalba"]


function comprobarResultado() {
    let cajaPuntosValor = document.getElementById("InputPuntos").value;
    let cajaFechaValor = document.getElementById("InputFecha").value;
    let cajaCiudadValor = document.getElementById("InputCiudad").value;
    let val = false;
    let val2 = false; 
    let val3=false;

        if (ValidacionPuntos(cajaPuntosValor)) {
        val =true
        
        }else{
            document.getElementById("InputPuntos").style = "border: 2px solid red"
        }

        if (ValidacionFecha(cajaFechaValor)) {
            val2 =true
            
        }else{
            document.getElementById("InputFecha").style = "border: 2px solid red"
        }

        if (ValidacionCiudad(cajaCiudadValor)) {
            val3 =true
            
        }else{
            document.getElementById("InputCiudad").style = "border: 2px solid red"
        }
        if (val==true && val2==true && val3==true) {
            window.location.href = "index.html"
    }

}

function ValidacionFecha(FechaRecogida) {
    let ArrayFecha = FechaRecogida.split("/");
    let anio = ArrayFecha[0];
    let mes =  ArrayFecha[1] -1;
    let dia = ArrayFecha[2];
    let val = true
    let fecha = new Date(anio,mes,dia)

        if (fecha.getDate()!=dia ||
            fecha.getMonth()!=mes || 
            fecha.getFullYear() != anio
        ) {
            val = false
        }
        let fechaActualmas3 = new Date();
        fechaActualmas3.setDate(fechaActualmas3.getDate()+3); 
        if (val) {  
            if (fecha > fechaActualmas3 ) {
                return true;
            }else return false;
        }else{
            return false;
        }
}

function ValidacionPuntos(puntos) {
    let totalPuntos = 50 

        if (puntos < totalPuntos || puntos == totalPuntos) {
            return true
        }else return false
}

function ValidacionCiudad(Ciudad) {
    let posicion = listaCiudades.indexOf(Ciudad)
    
        if (posicion==-1) {
            return false;
        }else{
            return true;
        }
}

