    //Ejercicio 1 primero localizo la tabla y le añado el addevent listener 
    onload = ()=>{
        var listatd = [...document.getElementById("ruta").getElementsByTagName("td")];
        listatd.forEach((celda)=>{
        celda.addEventListener("click",pintar);
        var botonEnviar = document.getElementById("ENVIAR");
        botonEnviar.addEventListener("click",validarFecha);
        botonEnviar.addEventListener("click",validaCheckbox);
   })
    }
   
    
    
   function pintar(evento) {
        evento.target.parentNode.style.backgroundColor="blue";
        let columna=evento.target.cellIndex;

        let contador = 0; 

        while (contador< evento.target.parentNode.children.length && evento.target.parentNode.children[contador]!=evento.target) {
            contador++; 
        }
        var listatr = [...document.getElementById("ruta").getElementsByTagName("tr")];
        listatr.forEach((fila)=>{
            fila.children[columna].style.backgroundColor="red";
        })

   }


   function validarFecha() {
        let cajaFecha = document.getElementsByTagName("input")[0].value;
        // con el date validamos la fecha 
        var fecha = new Date(cajaFecha);
        let dia = fecha.getDate();
        dia= dia+7;
        let anio = fecha.getFullYear();
        let mes = fecha.getMonth();
        mes = mes+1;
        fecha =  new Date(anio,mes,dia);
        if (fecha < Date()) {
            alert("la fecha es valida")
        }else{
            alert("la fecha no es valida ");
        }
        



   }

   function validaCheckbox() {
    let checkbox = document.getElementsByTagName("input");
    let contador=0;
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].type == 'checkbox') {
            if (checkbox[i].checked) {
                contador++;
            }
        }
        
    }
    if (contador>=3) {
        alert("es valido");
    }else{
        alert("No es valido");
    }
   }

   // para el ejercicio de los checkbox buscar el cheked 

   //Para validar la fecha fecha=new Date(a,m,d)

   // if (fecha.getfull) para ver las fehcas buscar dia de las fechas entra seguro para el examen 

   // animar el objeto 

  