
const data = window.RICKANDMORTY.results;  //llamando el contenido de la DATA "rickandmorty.js"   
const infoData = document.getElementById('info-data');  //llamando el div donde vamos a imprimir la data   



const btnAllData= document.getElementById('btn-allData');  //BOTON MOSTRAR TODOS LOS PERSONAJES

let stringAllData = '';     // creando variable que guardara toda la data (string)
const allData = data.forEach((element, index) => {
  stringAllData += `<div class="tarjeta"> 
    <img src="${element.image}" alt="">
    <h3>${element.name} </h3>
    <p>DIMENSIÓN: ${element.origin.name}</p>
    <p>ESPECIE: ${element.species}</p>
    <p>GÉNERO: ${element.gender}</p>
</div>`
console.log(stringAllData);
});
btnAllData.addEventListener('click', () => { infoData.innerHTML= stringAllData; })

/* ---------- ordenando de a la z y viceversa ---------- */

document.getElementById('dropDownSelecter').addEventListener('click', () => {
  const indexSort= document.getElementById('dropDownSelecter');

  const selectedSort= indexSort[indexSort.selectedIndex].value;
  
  const arraySort= window.RICKANDMORTY.results.orderBy(selectedSort, data);
  infoData.innerHTML= arraySort;
});