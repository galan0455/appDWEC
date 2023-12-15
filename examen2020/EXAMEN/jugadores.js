var listaJugadores=[
  {
    "nombre":"Pedro",
    "apellidos":"Gomez Borrero",
    "nif":"12345678C",
    "correo":"pedro@gmail.com",
    "comentarios":"Timido"
  },{
    "nombre":"Pablo",
    "apellidos":"Gomez Borrero",
    "nif":"22345678C",
    "correo":"pablo@gmail.com",
    "comentarios":"Muy joven"
  },{
    "nombre":"Pilar",
    "apellidos":"Perez Borrero",
    "nif":"33345678C",
    "correo":"pilar@gmail.com",
    "comentarios":"hay que hablar con ella"
  },{
    "nombre":"Patricia",
    "apellidos":"Lopez Borrero",
    "nif":"44445678C",
    "correo":"patricia@gmail.com",
    "comentarios":""
  },{
    "nombre":"Paloma",
    "apellidos":"Lopez Borrero",
    "nif":"4444555C",
    "correo":"paloma@gmail.com",
    "comentarios":""
  },{
    "nombre":"Antonio",
    "apellidos":"Lopez Borrero",
    "nif":"45555678C",
    "correo":"antonio@gmail.com",
    "comentarios":""
  },{
    "nombre":"Jesus",
    "apellidos":"Perez Borrero",
    "nif":"94445678D",
    "correo":"jesus@gmail.com",
    "comentarios":""
  }
]

function mostrarJugador() {
  let divCentral = document.getElementById("central")
  let select = document.createElement("select")
  select.id="jugador_Seleccionado";
  divCentral.appendChild(select)
  let option = document.createElement("option")
  option.textContent += "Seleccione un jugador"
  option.value += "";
  select.appendChild(option); 
  
  
  listaJugadores.forEach((jugador) => {
    option = document.createElement("option")
    option.value = jugador.nombre
    option.textContent += jugador.nombre
    select.appendChild(option);
  });

}

function mostrarJugadorEspe() {
  let select = document.getElementById("jugador_Seleccionado").value;
  if (select!="Seleccione un jugador") {
    let posicion=listaJugadores.indexOf(option.value)
    divCentral.innerHTML +=`
      <p>Nombre <input type='text' value='${listaJugadores[posicion]}'>
      <p>Nombre <input type='text' value='${listaJugadores[posicion]}'>
      <p>Nombre <input type='text' value='${listaJugadores[posicion]}'>
      <p>Nombre <input type='text' value='${listaJugadores[posicion]}'>
    `;
  }
}
onload = ()=>{
  mostrarJugador();
}