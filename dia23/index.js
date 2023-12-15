var listacomidas=[]
var carrito=[];
$.getJSON("comidas.json",(datos)=>{
    listacomidas=datos
    pintarTablaComidas(listacomidas);
});
function pintarTablaComidas(){
    let divCentral=document.getElementById("central");
    let contenidoTabla="<table>"

    contenidoTabla += "<tbody>"
    listacomidas.forEach((comida)=>{

        contenidoTabla += "<tr>";
            for(propiedad in comida) 
            {
                contenidoTabla += "<td>"
                contenidoTabla += comida[propiedad]
                contenidoTabla += "</td>"
            }
            contenidoTabla += "<td>"
            contenidoTabla += `<button type='button' onclick='comprar(${comida.idComida})'>Comprar</button> `
            contenidoTabla += "</td>"

            contenidoTabla += "<td>"
            contenidoTabla += `<button type='button' onclick='quitar(${comida.idComida})'>eliminar</button> `
            contenidoTabla += "</td>"
        
    });
        contenidoTabla += "</tbody>"
        
    divCentral.innerHTML= contenidoTabla;
    
}
function comprar(idComida) {
            //PREGUNTAR PROFE 
    let posicion = carrito.findIndex((compra)=>compra.idComida == idComida)
    if (posicion!=-1) {
        carrito[posicion].cantidad++;
    }else{
        let compra ={
            "idComida":idComida,
            "cantidad":1
        }
        carrito.push(compra);
    }
    actualizarCarrito();
}
function quitar(idComida) {
    let posicion = carrito.findIndex((compra)=>compra.idComida == idComida)
    if (posicion!=-1) {
        carrito[posicion].cantidad--;
        if (carrito[posicion].cantidad<1) {
            carrito.splice(posicion,1)
            alert("Eliminado ")
        }
    }
    actualizarCarrito();
    
}
function actualizarCarrito() {
    //Actauliza las cookies 
    // document.cookie="carrito=" + JSON.stringify(carrito);
    // document.getElementById("contadorCarrito").innerHTML = carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
    document.getElementById("contadorCarrito").innerHTML = carrito.length;

}
function leerCarritoInicial(){
/*    let datosCookie=document.cookie.split(";");
    datosCookie.forEach((cookie)=>{
        let nombre = cookie.split("=")[0];
        let valor = cookie.split("=")[1];
        if (nombre=="carrito") {
            carrito = JSON.parse(valor)
        }
    })
    */
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        document.getElementById("contadorCarrito").innerHTML = carrito.length;
    }
}
onload = ()=>{
    leerCarritoInicial();
}
function pintarCarrito() {
    let divCarrito=document.getElementById("carrito");
    divCarrito.innerHTML="";

    let precioFinal=0;
        divCarrito.innerHTML += "<ul>"
        let contador=0;
    for (let i = 0; i < listacomidas.length; i++) {
        for (let j = 0; j <carrito.length; j++) {
            if (listacomidas[i].idComida==carrito[j].idComida) {
                precioFinal=carrito[j].cantidad*listacomidas[i].precio+precioFinal;
                divCarrito.innerHTML += `<li>${listacomidas[i].nombreCorto} ${carrito[j].cantidad}</li>`
            }
            
        }
        
    }
    divCarrito.innerHTML += "<li>"+precioFinal+"</li>"
    divCarrito.innerHTML += "</ul>"


}



// para casa que te muestre al pulsar el carrito un div abajo nombre del producto y la cantidad y el precio un boton para eliminar 