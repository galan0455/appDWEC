var listaUsuarios=[];

	listaUsuarios.push(["Javier",1457]);
	listaUsuarios.push(["Jaime",2534]);
	listaUsuarios.push(["Juan",5656]);
	listaUsuarios.push(["Jacinto",2134])
	listaUsuarios.push(["Jorge",34157]);
function cargarUsuarios(){
	
}
//Esto de abajo sirve para las comprobaciones de usuario
function comprobarUsuario(){
	let NombreUsuario	= document.getElementById("usuario").value.trim();
	let ClaveUsuario = document.getElementById("clave").value.trim();
	let posicion=listaUsuarios.findIndex((usuario)=>usuario[0]==NombreUsuario);
	if (posicion!=-1) {
		if (ClaveUsuario=listaUsuarios[posicion][1]) {
			location.href="aterrizaje.html";
		}else{
			alert ("Usuario o clave erronea")
		}
	}	
	else{
		alert("Usuario o clave incorrectos")
	}
}

cargarUsuarios();
