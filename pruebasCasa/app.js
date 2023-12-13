    guardar_Persona();
    function guardar_Persona() {
        let Persona={
            nombre : "Fernando",
            edad : 32,
            correo : "xyz@gmail.com",
            coords : {
                lat: 10,
                long: -10
            }
        };
        let nombre = "Juan";

        localStorage.setItem("nombre",nombre);
        localStorage.setItem("persona",JSON.stringify(Persona));

    }
    obtenerPersona()
    function obtenerPersona() {
        let nombre = localStorage.getItem("nombre");
        let persona = JSON.parse( localStorage.getItem("persona"))
        console.log(nombre)
        console.log(persona)
    }