
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
//console.log(stringAllData);
});
btnAllData.addEventListener('click', ()=> {infoData.innerHTML= stringAllData })


const btnEarth= document.getElementById('btn-earth');  //BOTON MOSTRAR DIMENSION EARTH C137

let stringAllEarthC = '';
const sistems = data.filter((planets) => { 
  if (planets.origin.name === 'Earth (C-137)') {
    stringAllEarthC += `<div class="tarjeta"> 
    <img src="${planets.image}" alt="">
    <h3>${planets.name} </h3>
    <p>ESPECIE: ${planets.species}</p>
    <p>GÉNERO: ${planets.gender}</p>
</div>`
   //console.log(stringAllPlanets);
  }
});
btnEarth.addEventListener('click', () => {infoData.innerHTML = stringAllEarthC})




const btnRicks= document.getElementById('btn-ricks');  //BOTON MOSTRAR RICKS
let stringAllRicks = '';

const personRk = data.filter((rickSan) => {  
  if (rickSan.name === 'Rick Sanchez') {
    stringAllRicks += `<div class="tarjeta"> 
    <img src="${rickSan.image}" alt="">
    <h3>${rickSan.name} </h3>
    <p>DIMENSIÓN: ${rickSan.origin.name}</p>
    <p>ESPECIE: ${rickSan.species}</p>
</div>`
   //console.log(stringAllRicks);
  }
});
btnRicks.addEventListener('click', () => {infoData.innerHTML = stringAllRicks })




const btnMortys= document.getElementById('btn-mortys');   //BOTON MOSTRAR MORTYS
let stringAllMortys = '';

const personMt = data.filter((mortySm) => { 
  if (mortySm.name === 'Morty Smith') {
    stringAllMortys += `<div class="tarjeta"> 
    <img src="${mortySm.image}" alt="">
    <h3>${mortySm.name} </h3>
    <p>DIMENSIÓN: ${mortySm.origin.name}</p>
    <p>ESPECIE: ${mortySm.species}</p>
</div>`
   //console.log(stringAllMortys);
  }
});
btnMortys.addEventListener('click',() => {infoData.innerHTML = stringAllMortys })