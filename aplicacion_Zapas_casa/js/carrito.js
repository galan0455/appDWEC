//Funciones del carrito 
var carrito = [];
var listaZapatillas=[];$.ajaxSetup({cache: false});

//Con esto lo que haremos sera llenar el array lista de zapatillas con los datos del json
    $.getJSON("./ZapatillasJSON.json",(datos)=>{
        listaZapatillas=datos
    })


    //Primero leeremos el carrito y lo mostraremos 
    function leerCarrito() {
        let datosCookie=document.cookie.split(";");
        datosCookie.forEach((cookie)=>{
            let valor = cookie.split("=")[1];
            carrito = JSON.parse(valor); 
        })


        //Una vez leido el carrito procedemos a mostrarlo 
        let divContenedor = document.getElementById("contenedor-carrito");
        var precioFinal=0;

        carrito.sort((a,b)=> {
            if (a.Idzapatilla<b.Idzapatilla){
                return 1;
            } else {
                return -1;
            }
        });


        // en las siguientes lineas lo que hago es mostrar las zapatillas que acabamos de leer en el carrito 
        divContenedor.innerHTML += "<div class='carrito-productos'>"; 
        for (let j = 0; j < carrito.length; j++) {
            let precioFinalZ = parseInt(carrito[j].precio)*parseInt(carrito[j].cantidad);
            divContenedor.innerHTML +=`
                 <div class='carrito-producto'> 
                    <img class='carrito-producto-imagen' src="${carrito[j].foto}">
                    <div class='carrito-producto-titulo'>
                        <small>Titulo</small> 
                        <h3>${carrito[j].modelo}</h3>
                    </div>
                    <div class='carrito-producto-cantidad'>
                        <p>${carrito[j].cantidad}</p>
                    </div>
                    <div class='carrito-producto-precio'>
                        <small>Precio</small> 
                        <p>${carrito[j].precio}</p>
                    </div>
                    <div class='carrito-producto-subtotal'>
                        <small>subtotatal</small> 
                        <p>${precioFinalZ}</p>
                    </div>
                    <button class='carrito-producto-eliminar id='basura' onclick='borrar_elementoC(${carrito[j].Idzapatilla})'><i class='bi bi-trash'></i> </button>
                </div>
            </div>
            `

            precioFinal += precioFinalZ;
            localStorage.setItem("PrecioF",precioFinal);
        }

        
        // ahora escribire el precio total de la compra 

        let Ptotal = document.getElementById("total")
        Ptotal.innerHTML = "  "+precioFinal+"€";
    }   

    //Esta funcion como su nombre indica borrara el carrito entero lo vaciara 

    function VaciarCarrito() {
        document.cookie = "carrito="+"[]";
        window.location.href = "carrito.html";
    }


    //Con esta funcion borraremos una zapatilla del carrito 

    function borrar_elementoC(idZapa) {
        let posicion = carrito.findIndex((Zapa)=>Zapa.Idzapatilla == idZapa)
    if (posicion!=-1) {
        if (carrito[posicion].cantidad>1) {
            carrito[posicion].cantidad--;
        }else{
            carrito.splice(posicion,1);
        }
    }
    document.cookie="carrito=" + JSON.stringify(carrito);
    window.location.href="carrito.html";
}

    //Aqui haremos una funcion que pase al resumen de la compra 
    function ResumenCompra(){
        window.location.href = "ResumenCompra.html";

    }


    onload = ()=>{
        leerCarrito();
        document.getElementById("Vaciar-Carrito").addEventListener("click",VaciarCarrito);
        document.getElementById("Comprar").addEventListener("click",ResumenCompra);
        
    }

    //Preguntar profe como actualizo numero del carrito preguntar como valido el loggin como puedo mostrar lo del inicio de sesion 
