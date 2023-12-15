// archivo ejemplo.js
function miPrimeraFuncion() {
    console.log("Hola mundo");

    var a = 11;
    var textoEnInglesDeNumero = a == 5 ? 'Five' :
        a == 7 ? 'Seven' :
            a == 11 ? 'Eleven' :
                a == 15 ? 'Fifteen' :
                    'Other Number';

    console.log(textoEnInglesDeNumero); // Eleven
}
// sumar 33 +28 
//Funcion que sume dos numeros 
//Mostrar el numero entero
miPrimeraFuncion();
function suma1() {
    let resultado = 33 + 28;
    alert(`El resultado es ${resultado}`)
}
function suma2(x, y) {
    resultado = x + y;
    alert(`El resultado es ${resultado}`)
}
function suma3(x, y) {
    resultado = x + y;
    alert(`El resultado de ${x} + ${y} =s ${resultado}`)
}

var listaChuches = ["Caramelos", "Piruletas", "Chocolatinas"];

var listaChuches2 = []
chuche1 = {
    "Nombre": "Caramelo",
    "Calorias": 120
}
    class chuche{
        constructor(){
            this.Nombre="piruleta";
            this.Calorias=100;
        }
    }
    var chuche2=new chuche("piruletas",100)

    listaChuches2.push(chuche2);

    listaChuches2.push(chuche1);
    listaChuches2.push(new chuche("chocolate",200));
    console.log(listaChuches2);
    //Asi pasas un array de objetos a una cadena de texto
    console.log(JSON.stringify(listaChuches2));

    listaChuches2[2].sabor="fresa";
    console.log(listaChuches2);

    delete listaChuches2[2].sabor;
    console.log(listaChuches2);

   

    function mostrarChuchesenTabla() {
        Contenido = "<table><tbody>";
        Contenido += "<tr>";
        for (let i = 0; i < listaChuches.length; i++) {
            Contenido += "<td>" + listaChuches[i] + "<td>"
        }
        Contenido += "</tr>"
        Contenido += "</tbody></table>"
        document.body.innerHTML += Contenido;

    }   
function EliminarChuche(letra) {
    listaChuches.forEach((chuche, posicion) => {
        if (chuche.startsWith(letra)) {
            listaChuches.splice(posicion, 1)
        }
    })
}

function AniadirChuches(arr = []) {
    ChucheAniad = document.getElementById("AniadirChuche").value.trim();
    arr.push([ChucheAniad]);

    for (let i = 0; i < arr.length; i++) {
        alert(`${arr[i]}`)
    }

}
function ContarLetras() {
    var Contador = 0;
    listaChuches.forEach((elemento) => {
        Contador += elemento.length;
    })
    return Contador;
    alert(Contador);
}