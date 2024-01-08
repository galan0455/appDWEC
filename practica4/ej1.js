

function esNumeroValido(texto){
    if(/^[1-9][0-9]{3,7}$/.test(texto))alert("true")
    else alert("false");
    }


function esFechaValida() {
    let cajafecha = document.getElementById("caja").value
    let arrayFecha = cajafecha.split("-")
    let anio = arrayFecha[0]; 
    let mes = arrayFecha[1];
    let dia = arrayFecha[2];
    let Fecha = new Date(anio,mes-1,dia)
    alert(Fecha)
    alert(Fecha.getDate())
    alert(Fecha.getFullYear())
    alert(Fecha.getMonth())

    if (Fecha.getDate()!=dia || Fecha.getMonth()!=mes-1 || Fecha.getFullYear()!=anio) {
        console.log("false")
        return false
    }else{
        console.log("true")
        return true
    }
}

function validarCheckbox() {
    let listaCheck = document.getElementsByName("nombre")
    let i = 0;
    let contador = 0; 
        while (i<listaCheck.length) {
            if (listaCheck[i].checked) {
                contador ++;
                i++;
            }else{
                i++;
            }
        }
    alert(contador);
}

function comprobar() {
    let cajaIdentificador = document.getElementById("identificador").value
    let cajaFecha = document.getElementById("fecha").value
    let cajaClave = document.getElementById("clave").value
    let cajaPerfil = document.getElementById("perfil").value
    let cajaText = document.getElementById("area").value

    if(comprobarId(cajaIdentificador)==true){
        alert("true");
    }else{
        alert("false")
    }

    if(comprobarFecha(cajaFecha)==true){
        alert("true");
    }else{
        alert("false")
    }

    if(comprobarClave(cajaClave)==true){
        alert("true");
    }else{
        alert("false")
    }

    if(comprobarPerfil(cajaPerfil)==true){
        alert("true");
    }else{
        alert("false")
    }

    if(comprobarRadio()==true){
        alert("true");
    }else{
        alert("false")
    }

    if(comprobarTextArea(cajaText)==true){
        alert("true");
    }else{
        alert("false")
    }
    

}

function comprobarId(identificador) {
    if(/^[0-9]{0,9}$/.test(identificador)){
        return true;
    }else{
        return false;
    }
    
}
function comprobarFecha(fecha) {
    let listaFecha = fecha.split("-");
    let anio = listaFecha[0];
    let mes = listaFecha[1];
    let dia = listaFecha[2];
    let Fecha = new Date(anio,mes-1,dia);
    if (Fecha.getFullYear() != anio || Fecha.getMonth() != mes -1 || Fecha.getDate() !=dia) {
        return false
    }else { 
        return true
    }
}

function comprobarClave(clave) {
    if (/^[n,m,N,M]{1,7}$/.test(clave)) {
        return true
    }else{
        return false;
    }
}

function comprobarPerfil(perfil) {
    if (perfil>0) {
        return true
    }else{
        return false
    }
}

function comprobarRadio() {
    let listaRadios = document.getElementsByName("radios")

    let i = 0;
    let contador = 0;
    while (i<listaRadios.length) {
        if(listaRadios[i].checked){
            contador++;
            i++;
        }else{
            i++;
        }

        if (contador>0) {
            return true;
        }else{
            return false;
        }
    }
    
}

function comprobarTextArea(texto){
        var lista=texto.trim().split(" ");
        var i=0;
        while(i<lista.length-1 && lista.indexOf(lista[i],i+1)==-1) i++;
        if (i==lista.length-1) return true;
        else return false;
      }