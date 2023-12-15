    var todosLosCuadros = ['25996_1.jpg','25996_2.jpg','25997_1.jpg','25997_3.jpg','26650_3.jpg','26704_3.jpg','26868_1.jpg','26868_2.jpg','26869_1.jpg',
    '26869_2.jpg','26873_1.jpg','26873_2.jpg','27095_3.jpg','27356_3.jpg','27429_1.jpg','27429_2.jpg','27773_3.jpg','28155_1.jpg','28155_2.jpg','28192_3.jpg',
    '28192_4.jpg','29776_3.jpg', '30390_3.jpg','30473_1.jpg','31386_1.jpg','31386_2.jpg','31469_3.jpg']
    var listaVinilos =['25996_1.jpg','25996_2.jpg','25997_1.jpg','25997_3.jpg','26650_3.jpg','26704_3.jpg','26868_1.jpg','26868_2.jpg','26869_1.jpg',
    '26869_2.jpg','26873_1.jpg']
    var listaLaminas = [ '26873_2.jpg','27095_3.jpg','27356_3.jpg','27429_1.jpg','27429_2.jpg','27773_3.jpg','28155_1.jpg','28155_2.jpg','28192_3.jpg',
    '28192_4.jpg','29776_3.jpg']
    var otrosCuadros = [ '30390_3.jpg','30473_1.jpg','31386_1.jpg','31386_2.jpg','31469_3.jpg' ]

    //Funcion que muestra todos los cuadros 
    function mostrarCuadros() {
        let divExpo = document.getElementById("exposicion")
        let contenidoTabla =  "<table><tbody>";
        let contador=0
        for (let i = 0; i < todosLosCuadros.length; ) {
            contenidoTabla += "<tr>";
                for (let j = 0; j < 4; j++) {

                    contenidoTabla += "<td>"
                    contenidoTabla += `<img src='./pagina2_files/${todosLosCuadros[i]}' width='150px'>`
                    contenidoTabla += "<br>"
                    contenidoTabla += "<button type='button' id='Contratar"+contador+"' onclick='comprar("+contador+")'>Contratar</button>"
                    contenidoTabla += "<br>"
                    contenidoTabla += "<button type='button' id='alquilar'>Alquilar</button>"
                    contenidoTabla += "<br>"
                    contenidoTabla += "Cantidad"
                    contenidoTabla += "<input type='text' id='cajaTexto"+contador+"'  width='2px' >"
                    contenidoTabla += "Duracion"
                    contenidoTabla += "<select >"
                    contador++;
                    for (let h = 1; h <= 20; h++) {
                        
                        contenidoTabla += "<option value='1'>"+h+"</option>"
                        
                    }
                    contenidoTabla += "</select>"
                    contenidoTabla += "</td>"
                    i++
                    
                }

            contenidoTabla += "</tr>";
        }
        contenidoTabla += "</tbody></table>";
        divExpo.innerHTML= contenidoTabla;
        

        
    }

    // funcion para abrir ventana con los resultados de las compras 
    function mostrarCompras() {
        ventana = window.open('', '', 'width=400, height=400');
        ventana.document.body.innerHTML = "HOLA<button type='button' onclick='opener.cerrarVentana()'>CERRAR</button>";



    } 
    function cerrarVentana() {
        ventana.close();    
    }

    onload = ()=>{
        mostrarCuadros();
    }

    // Funcion para comprobar el boton comprar 
    var contadorCompra=0;
    function comprar(numero) {
        let cantidad = document.getElementById("cajaTexto"+numero).value;
        let caja = document.getElementById("cajaTexto"+numero);
        let boton = document.getElementById("Contratar"+numero);        
            if (cantidad=="") {
                caja.placeholder="No ha introducido numeros";
                
            }else{
                let compra = {
                    Foto : `<img src='./pagina2_files/${todosLosCuadros[numero]}'`,
                    Cantidad : cantidad,
                    Operacion : "contratar"
                }
                localStorage.setItem("compra"+contadorCompra,JSON.stringify(compra));
                contadorCompra++;

            }   
        
        boton.disabled=true;  
        caja.style.display="none";
        let divLista = document.getElementById("lista");
        for (let i = 0; i < localStorage.length; i++) {
            let compra = JSON.parse(localStorage.getItem("compra"+i))
            divLista.innerHTML += "<li>"+compra+"</li>"
            
        }
        
    }
    $(document).ready(function() {
        let div = $('publicidad')
        var nuevaImagen = $("<img>", {
            id: "miImagen",
            src: "25996_1.jpg",
            alt: "Animación de Imagen"
          });
        
   })
