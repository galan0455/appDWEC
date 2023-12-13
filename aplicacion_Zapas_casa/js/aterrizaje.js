        //carga las zapatillas
        var listaZapatillas=[];
        var carrito=[];
        $.getJSON("ZapatillasJSON.json",(datos)=>{
            listaZapatillas=datos
            pintarZapatillas(listaZapatillas);
        });
        

        //Pintar zapatillas 
        function pintarZapatillas(lista) {
            
            let divContenedor = document.getElementById("contenedor-productos");
            divContenedor.innerHTML="";
            let contador = 1;
            lista.forEach((zapatilla)=>{
                
               divContenedor.innerHTML += `
               <div class="producto">
                            <img class="producto-imagen" src="${zapatilla.Foto}">
                            <div class="producto-detalles">
                                <h3 class="producto-titulo">${zapatilla.modelo}</h3>
                                <p class="producto-precio">${zapatilla.precio}</p>
                                <button class="producto-agregar" onclick="aniadirCarrito(${zapatilla.Id})">Añadir</button>
                                <button class="producto-agregar" onclick="zapatillaDetallada('${zapatilla.Id}')">Descripcion</button>
                            </div>
                            
                </div>
               `;
            })
            
        }


        function mostrarPorMarca(marca){
            var listaFiltrada = listaZapatillas.filter( (zapatilla)=> zapatilla.marca == marca);
            pintarZapatillas(listaFiltrada); 
        }


        //Te lleva a la zapatilla y muestra todos los detalles 
        function zapatillaDetallada(numero) {
            window.location.href = `http://localhost:8080/aplicacion_Zapas_casa/zapatillasDetalle/zapa.html?id=${numero}`;
        }


        //añade el evento añadir carrito 
        function aniadirCarrito(Idzapatilla) {
            let posicion = carrito.findIndex((zapatilla)=>zapatilla.Idzapatilla == Idzapatilla)
            if (posicion!=-1) {
                carrito[posicion].cantidad++;
            }else{
                let posicion = listaZapatillas.findIndex((zapatilla)=>zapatilla.Id == Idzapatilla);
                let compra={
                    "Idzapatilla":Idzapatilla,
                    "cantidad":1,
                    "modelo": listaZapatillas[posicion].modelo,
                    "precio": listaZapatillas[posicion].precio,
                    "foto": listaZapatillas[posicion].Foto
                }
                carrito.push(compra);
            }
            actualizarCarrito();
        }


        //Al cargar lo que haremos sera buscar los botones correspondientes y añadirles eventos 
        onload = () =>{
            leerCarritoDeCookie();
            document.getElementById("zNike").addEventListener("click",()=> mostrarPorMarca("Nike"))
            document.getElementById("zAdidas").addEventListener("click",()=> mostrarPorMarca("Adidas"))
            document.getElementById("zNB").addEventListener("click",()=> mostrarPorMarca("New Balance"))
            document.getElementById("zJordan").addEventListener("click",()=> mostrarPorMarca("Jordan"))
            document.getElementById("zTodas").addEventListener("click",()=> pintarZapatillas(listaZapatillas))
            pintar_Inicio_sesion();
        }


        // cada vez que se añada algo le sumaremos al numero del carrito 
        function actualizarCarrito() {
            document.cookie="carrito=" + JSON.stringify(carrito);
            document.getElementById("numero").innerHTML= carrito.length;
        }


        // esta funcion es para que cuando iniciemos la pagina lea las cookies que hay guardadas 
        function leerCarritoDeCookie(){
            let datosCookie=document.cookie.split(";");
            datosCookie.forEach((cookie)=>{
                let nombre = cookie.split("=")[0];
                let valor = cookie.split("=")[1];
                if (nombre=="carrito") {
                    carrito = JSON.parse(valor)
                }
            })
            document.getElementById("numero").innerHTML = carrito.length;
        }


        //Pintar boton inicio sesion o foto 
        function pintar_Inicio_sesion() {
            let dato = localStorage.getItem("usuario");
            let divInicioSesion = document.getElementById("Inicio_sesion");
            if (dato==null || dato==undefined) {
                divInicioSesion.innerHTML = "<a href='loggin.html' class='inicio_sesion'>Inicio de sesion</a>"
            }else{
                divInicioSesion.innerHTML = "<img src='./fotos/foto_user.jpg' class='Foto_menu_usuario' onclick='cerrar_Sesion()'>";
            }
        }


        //Si pulsamos el icono se cerrara sesion 
            function cerrar_Sesion() {
                localStorage.clear();
                alert("Has cerrado sesion")
                window.location.href="aterrizaje.html"
            }
        //---------------------------------------








