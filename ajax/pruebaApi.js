    onload = ()=>{
        let btn_dolar = document.getElementById("dolar");
        btn_dolar.addEventListener("click",obtenerDatos);
    }
    function obtenerDatos() {
        let url = "https://mindicador.cl/api/dolar"
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url, true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (this.status ==200 && this.readyState==4) {
                let datosRecogidos = JSON.parse(xhr.responseText);
                let arrayDollar = datosRecogidos.serie
                arrayDollar.forEach(dato => {
                    let datoRecortado = dato.fecha.substr(0,10);
                    document.body.innerHTML += datoRecortado+" |||  "+dato.valor+" <br>";
                });    
            }else{
                alert("No ha habido respuesta ");
            }
        }
    }