var vinilos = ['25996_1.jpg','25996_2.jpg','25997_1.jpg','25997_3.jpg','26650_3.jpg','26704_3.jpg','26868_1.jpg','26868_2.jpg','26869_1.jpg','26869_2.jpg','26873_1.jpg']
var laminas = ['26873_2.jpg','27095_3.jpg','27356_3.jpg','27429_1.jpg','27429_2.jpg','27773_3.jpg','28155_1.jpg','28155_2.jpg','28192_3.jpg','28192_4.jpg','29776_3.jpg']
var otros = ['30390_3.jpg','30473_1.jpg','31386_1.jpg','31386_2.jpg','31469_3.jpg']
var todos_cuadros = ['25996_1.jpg','25996_2.jpg','25997_1.jpg','25997_3.jpg','26650_3.jpg','26704_3.jpg','26868_1.jpg','26868_2.jpg','26869_1.jpg','26869_2.jpg','26873_1.jpg',
'26873_2.jpg','27095_3.jpg','27356_3.jpg','27429_1.jpg','27429_2.jpg','27773_3.jpg','28155_1.jpg'
,'28155_2.jpg','28192_3.jpg','28192_4.jpg','29776_3.jpg','30390_3.jpg','30473_1.jpg','31386_1.jpg','31386_2.jpg','31469_3.jpg']

onload = ()=>{
    mostrarCuadros()

}

function mostrarCuadros() {
    let divExpo = document.getElementById("exposicion")
        todos_cuadros.forEach((cuadro)=>{
        divExpo.innerHTML +=`<div>
        <img src="./pagina2_files/${cuadro}"><br>
        <button type="button">CONTRATAR</button><br>
        <button type="button">ALQUILAR</button><br>
        <input type="text"><br>
        <select>
            <option value="escoge">Escoge</option>
        </select>
    </div>`

        })
    }

function mostrarPublicidad() {
    
}

