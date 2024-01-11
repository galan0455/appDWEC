onload = ()=>{
    mostrarContratos();
}

function mostrarContratos() {
    let contratosString = localStorage.getItem("contratos")
    document.body.innerHTML += contratosString
    
}