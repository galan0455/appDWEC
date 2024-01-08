import { generaCartonAleatorio } from "./funcionesAuxiliares.js";

var listaPartidas=[];

        onload = ()=>{
            $.getJSON("partidas.json",(datos)=>{
                listaPartidas=datos
                pintarlistaPartidas(listaPartidas);
            });
            cargarPartidasFuturas();
            cargarPartidaActual();
            generarTablaNumerosActuales();
        }
        async function cargarPartidaActual() {
            let respuesta = await fetch("consultaPartidaActual.php");
            let partida = await respuesta.json();
            if (partida.IdPartida !=0) {
                $('#premio').text(partida.Premio)
                generarTablaCarton(partida.IdPartida)
                generarTablaNumerosActuales(partida.NumerosActuales);
            }
        }
        
        function generarTablaCarton(IdPartida) {
            let carrito=[];
            if (localStorage.getItem("carrito")) {
                carrito=JSON.parse(localStorage.getItem("carrito"));
            }
            let posicionCarton = carrito.findIndex((partida)=>partida.IdPartida == IdPartida)

            if (posicionCarton==-1) {
                tabla.innerHTML = "<tr><td>No Tiene carton</td></tr>";
            }else{
                let carton = carrito[posicionCarton].Carton;
                let contenido = "<tr>";
                carton.forEach(valor=>{
                    contenido+= `<td>${valor}</td>`;
                })
                 contenido += "</tr>";

                tabla.insertAdjacentHTML("beforeend",contenido)
            }
            let tabla = document.getElementById("tablaCarton")
        }
        async function cargarPartidasFuturas(lista) {
            
        }

        function pintarlistaPartidas(lista) {
            console.log(lista)
            let tbody = document.querySelector("tbody");
                let contenido="";
            listaPartidas.forEach((partida)=>{
                 contenido +=`<tr>
                 <td>${partida.IdPartida}</td>
                 <td>${partida.Fecha}</td>
                 <td>${partida.Hora}</td>
                 <td>${partida.Num_Cartones}</td>
                 <td>${partida.Premio}</td>
                 <td><button type='button' onclick='ComprarCarton(${partida.IdPartida})'>Comprar</button></td>
                 </tr>`
            })
            tbody.innerHTML += contenido;
        }
        window.ComprarCarton=ComprarCarton;
        function ComprarCarton(IdPartida) {
            let carrito=[];
            if (localStorage.getItem("carrito")) {
                carrito=JSON.parse(localStorage.getItem("carrito"));
            }
            let entrada = {
                "IdPartida":IdPartida,
                "carton":generaCartonAleatorio()
            }
            carrito.push(entrada)
            localStorage.setItem("carrito",JSON.stringify(carrito));
        }
        

        

        