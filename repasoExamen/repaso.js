onload = ()=>{
    let boton = document.getElementById("Datos");
    boton.addEventListener("click",datos_td);
}
var listaContenidos =[];
function datos_td() {
    let listaTD=document.querySelectorAll("#tabla td");
    
    listaTD.forEach((values) => {
        listaContenidos.push(values.textContent);
        document.body.innerHTML += values.textContent;
        

    })
    console.log(listaTD);
}
function prueba() {
    alert("Hola buenas");
}
