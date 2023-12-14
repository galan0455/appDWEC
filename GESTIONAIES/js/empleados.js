var listaEmpleados = [];
listaEmpleados.push(new Empleado("12345678A", "Fernando", "Garcia Jimenez", 50, 2010, "Jefe"));
listaEmpleados.push(new Empleado("22345678A", "Federico", "Perez Lopez", 40, 2012, "Analista"));
listaEmpleados.push(new Empleado("44445678C", "Felix", "Martinez Alba", 60, 2013, "Programador Senior"));
listaEmpleados.push(new Empleado("92345678A", "Feliciano", "Castro Gomez", 30, 2016, "Programador"));
listaEmpleados.push(new Empleado("12345999Z", "Fermin", "Gutierrez Mesa", 20, 2020, "Becario"));


window.onload = function() {
    pintarTabla(listaEmpleados);
}

function pintarTabla(lista) {
    var central = document.getElementById("central");
    central.innerHTML = "";
    var tabla = document.createElement("table");
    central.appendChild(tabla);
    lista.forEach(empleado => {
        var fila = document.createElement("tr");
        tabla.appendChild(fila);
        for (propiedad in empleado) {
            var celda = document.createElement("td");
            fila.appendChild(celda);
            if (propiedad != "foto") {
                celda.innerHTML = empleado[propiedad];
            } else {
                celda.innerHTML = `<img src="${empleado[propiedad]}">`
                celda.addEventListener("click",() => editar(empleado))
            }
        }
        var celda = document.createElement("td");
        fila.appendChild(celda);
        celda.innerHTML = "Eliminar";
        celda.addEventListener("click", () => eliminar(empleado));
    });
}

function eliminar(empleadoABorrar) {
    var posicion = listaEmpleados.findIndex(empleado => empleado.DNI == empleadoABorrar.DNI);
    if (posicion != -1) {
        listaEmpleados.splice(posicion, 1);
        pintarTabla(listaEmpleados);
    }
}
function editar(EmpleadoAEditar) {
    var posicion = listaEmpleados.findIndex(empleado => empleado.DNI == EmpleadoAEditar.DNI)
    
    var formularioEdi=document.getElementById("FormularioEdi");
    formularioEdi.innerHTML=`<h3>DNI</h3>`;
    formularioEdi.innerHTML+=`<input type="text" id="DNI" value="${EmpleadoAEditar.DNI}" disabled>`;
    formularioEdi.innerHTML+='<h3>Nombre</h3>';
    formularioEdi.innerHTML+=`<input type="text" id="Nombre" value="${EmpleadoAEditar.nombre}" >`;
    formularioEdi.innerHTML+='<h3>Apellido</h3>';
    formularioEdi.innerHTML+=`<input type="text" id="Apellido" value="${EmpleadoAEditar.apellidos}">`;
    formularioEdi.innerHTML+='<h3>Edad</h3>';
    formularioEdi.innerHTML+=`<input type="text" id="Edad" value="${EmpleadoAEditar.edad}">`;
    formularioEdi.innerHTML+='<h3>Año</h3>';
    formularioEdi.innerHTML+=`<input type="text" id="Año" value="${EmpleadoAEditar.antiguedad}">`;
    formularioEdi.innerHTML+='<h3>Puesto</h3>';
    formularioEdi.innerHTML+=`<input type="text" id="Puesto" value="${EmpleadoAEditar.puesto}">`;
    formularioEdi.innerHTML+=`<button id="guardar" onclick="gurdaDatos('${EmpleadoAEditar.DNI}')">Guardar Cambios</button>`;
      
    
}

function ordenar() {
    listaEmpleados.sort((a, b) => {
        if (a.nombre > b.nombre) return 1
        else return -1;
    });
    pintarTabla(listaEmpleados);
}
function gurdaDatos(dni) {
    let posicion = listaEmpleados.findIndex((empleado)=>empleado.DNI == dni);
    if (posicion != -1) {
        listaEmpleados[posicion].nombre= document.getElementById("Nombre").value;
        listaEmpleados[posicion].apellidos= document.getElementById("Apellido").value;
        listaEmpleados[posicion].edad= document.getElementById("Edad").value;
        listaEmpleados[posicion].antiguedad= document.getElementById("Año").value;
        listaEmpleados[posicion].puesto= document.getElementById("Puesto").value;
        alert ("datos actualizados")
    }
    pintarTabla(listaEmpleados);
}