var listaZapatillas = [];

        function cargarZapatillas() {
            $.getJSON("ZapatillasJSON.json", function(datos) {
                listaZapatillas = datos;
                mostrarZapatillas(listaZapatillas);
            });
        }
        onload = function() {
            cargarZapatillas();
        }

        function mostrarZapatillas(lista) {
           
        }

        function addZapatilla() {
            let marca = document.getElementById("marca").value;
            let modelo = document.getElementById("modelo").value;
            let talla = document.getElementById("talla").value;
            let color = document.getElementById("color").value;
            let zapatilla = {
                "marca": marca,
                "modelo": modelo,
                "talla":talla,
                "color":color,
                "stock": 1
            }
            $.post("addZapatilla.php", zapatilla, function(respuesta) {
                if (respuesta == "OK") {
                    alert("Zapatilla grabada");
                    cargarZapatillas();
                } else {
                    alert("No se ha podido grabar");
                }
            })
        }

        function ampliar() {
            let ancho = document.getElementsByTagName("img")[0].width;
            document.getElementsByTagName("img")[0].width = ancho+10;
        }
        function quitarAmpliado() {
            let ancho = document.getElementsByTagName("img")[0].width;
            document.getElementsByTagName("img")[0].width = ancho-10;
        }
        function mostrarDescripcion() {
            
        }
        function ampliar() {
            let ancho = document.getElementsByClassName("producto-imagen")[0].width;
            document.getElementsByTagName("producto-imagen")[0].width = ancho * 2;
        }
        function quitarAmpliado() {
            
        }