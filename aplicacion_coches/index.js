onload = ()=>{
    let btnI_inicio = document.getElementById("btnI-inicioSesion");
        btnI_inicio.addEventListener('click', RecogerDatosInicio)        
    let btnI_registro = document.getElementById("btnI-registro")
        btnI_registro.addEventListener("click",cambiarRegistro)

    let btnR_inicio = document.getElementById("btnR-inicioSesion")
        btnR_inicio.addEventListener("click",cambiarInicio)

    let btnR_registro = document.getElementById("btnR-registro")
    btnR_registro.addEventListener("click",RecogerDatosRegistro)

    let btnR_modificar = document.getElementById("btnR-modificar")
    btnR_modificar.addEventListener("click",cambiarModificacion)
    
}

function RecogerDatosInicio() {
    let divRegistro = document.getElementById("registro")
    let in_cajaDNI = document.getElementById("inicioSesion_Dni").value
    let in_cajaContrasenia = document.getElementById("inicioSesion_contraseña").value
   alert(in_cajaDNI)
}

function RecogerDatosRegistro() {
   let re_cajaDNI = document.getElementById("registro_dni").value
   let re_cajaNombre = document.getElementById("registro_nombre").value
   let re_cajaApellidos = document.getElementById("registro_apellido").value
   let re_cajaCorreo = document.getElementById("registro_correo").value
   let re_cajaEdad = document.getElementById("registro_edad").value
   let re_cajaContrasenia = document.getElementById("registro_contrasenia").value
}

function RecogerDatosModificacion() {
    let mo_cajaDNI = document.getElementById("modificar_dni").value
    let mo_cajaNombre = document.getElementById("modificar_nombre").value
    let mo_cajaApellidos = document.getElementById("modificar_apellidos").value
    let mo_cajaCorreo = document.getElementById("modificar_correo").value
    let mo_cajaEdad = document.getElementById("modificar_edad").value
    let mo_cajaContrasenia = document.getElementById("modificar_contrasenia").value 
}

function cambiarRegistro() {
    let divRegistro = document.getElementById("registro")
    let divInicio = document.getElementById("inicioSesion")
    divRegistro.className = "visible";
    divInicio.className = "oculto";
}

function cambiarInicio() {
    let divRegistro = document.getElementById("registro")
    let divInicio = document.getElementById("inicioSesion")
    divRegistro.className = "oculto";
    divInicio.className = "visible"; 
}

function cambiarModificacion() {
    let divRegistro = document.getElementById("registro")
    let divInicio = document.getElementById("inicioSesion")
    let modificar = document.getElementById("modificacion")
    modificar.className = "visible";
    divRegistro.className = "oculto";
    divInicio.className = "oculto"; 
    
}