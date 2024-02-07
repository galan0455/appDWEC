    onload = ()=>{
        mostrarPartidas(); 
    }
    
    async function mostrarPartidas() {
        let div = document.getElementById("partidas");
        let respuesta = await fetch("consultaPartidaActual.php");
        let partida = await respuesta.json();
        $("#premio").text(partida.Premio);
        $("#numero").text(partida.NumCartones);

        div.innerHTML += partida.IdPartida
    }