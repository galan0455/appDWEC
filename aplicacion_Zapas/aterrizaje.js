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
            var divCentral = document.getElementById("central");
            divCentral.innerHTML = "<h1>Zapatillas</h1><table><tbody></tbody></table>";
            var tbody = divCentral.getElementsByTagName("tbody")[0];
            let contador = 0;
            lista.forEach((zapatilla) => {
                tbody.innerHTML += `<tr>
                            <td><img src="af1.jpeg"/></td>
                            <td>${zapatilla.marca}</td>
                            <td>${zapatilla.modelo}</td>
                            <td>${zapatilla.talla}</td>
                            <td>${zapatilla.color}</td>
                            <td>${zapatilla.stock}</td>

                              
                            </tr>`;
            });
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