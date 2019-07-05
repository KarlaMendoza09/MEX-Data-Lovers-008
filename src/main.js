//llamando el contenido de la DATA "rickandmorty.js"
const data = window.RICKANDMORTY.results;     

const infoData = document.getElementById('info-data');     //llamando el div donde vamos a imprimir la data

//BOTON MOSTRAR TODOS LOS PERSONAJES
const btnAllData= document.getElementById('btn-allData');

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

const personajes= () => {         //funcion boton
  infoData.innerHTML = stringAllData;
};
btnAllData.addEventListener('click',personajes);


//BOTON MOSTRAR DIMENSION EARTH C137
const btnEarth= document.getElementById('btn-earth');

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

//funcion en el boton
const viewEarthC = () => {
  infoData.innerHTML = stringAllEarthC;
};
btnEarth.addEventListener('click',viewEarthC);



//BOTON MOSTRAR RICKS
const btnRicks= document.getElementById('btn-ricks');

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

//funcion en el boton
const viewAllRicks = () => {
  infoData.innerHTML = stringAllRicks;
};
btnRicks.addEventListener('click',viewAllRicks);




//BOTON MOSTRAR MORTYS
const btnMortys= document.getElementById('btn-mortys');

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

//funcion en el boton
const viewAllMortys = () => {
  infoData.innerHTML = stringAllMortys;
};
btnMortys.addEventListener('click',viewAllMortys);




/* ------------BORRADORES-----------------------------------------------------------------------
//hacer boton para que aparesca el filtrado
const btnFiltro= document.getElementById('btn-filtro');
//const data=window.RICKANDMORTY.results - esta ya esta definida en pa parte superior

let stringAllPlanets = '';
const sistems = data.filter(planets => (planets.location.name === 'Earth (C-137)'));
//console.log(sistems);
//funcion en el boton
const viewAll = () => {
  stringAllPlanets = `<div class="tarjeta">${sistems}</div>`
  
};
infoData.innerHTML = stringAllPlanets;
btnFiltro.addEventListener('click',viewAll);
----------------------------------------------------------------------------------------

let stringAllPlanet= '';
data.filter((planet) => (planet.location.name == 'Rick Sanchez'));
console.log(VewSistem);
//haciendo funcion para la accion del boton
const imprimirFiltro = () =>{
  stringAllPlanet += `<div class="tarjeta">     
  <div class= "retrato">
     <div class="texto"> 
     <h3>${vewSistem.name} </h3>
     <h4>${vewSistem.location.name} </h4>
     <img src="${vewSistem.image}" alt="">
     
      </div>
   </div>
 </div>` 
  
  
}
//infoData.innerHTML = stringAllPlanet;
btnFiltro.addEventListener('click',imprimirFiltro);

*/
/*-----------------------------------------------------------------
primer = data.filter(dats => (dats.name === 'Abradolf Lincler'));
console.log(primer); */

/*infoData.innerHTML=btnFiltro.addEventListener ('click', primer);   indexOF */
  
/*
----------------------------------------------------------------

<p>${element.location.name} </p>

data.forEach((element, index) => 
console.log(`${index} 
IMAGE: ${element.image} 
NOMBRE: ${element.name} 
DIMENSION: ${element.origin.name}`)
);

----------------------------------------------------------------

  const data = window.RICKANDMORTY.results;
  data.forEach(imprimirData);

  function imprimirData(element) {
  document.getElementById('info-data').innerHTML += element.name + "<br>" + element.location.name +"<br>";
  }

----------------------------------------------------------------
const data = window.RICKANDMORTY.results
data.forEach(imprimirData);
function imprimirData(item, index) {
document.getElementById("info-data").innerHTML += index+ ' ' + item + "<br>";
document.write(index + element.name+"<br>"); 
document.write(index + element.location.name +"<br>");
}
*/