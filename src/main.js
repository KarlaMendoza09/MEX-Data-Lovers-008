
const data = window.RICKANDMORTY.results;  //llamando el contenido de la DATA "rickandmorty.js"  
const viewAllColecction = document.getElementById('view-colecction');  //llamando el div donde vamos a imprimir la data   

//CREAR FUNCION QUE DEFINE LA VISUALIZACION DE LA DATA, y llamarla con las proximas funciones
const colecctionCards = (card) => {
return `<div class= "individualcard">
          <div class="portrait">
          <img src = "${card.image}"> 
            <div class="info">   
            <h3> ${card.name} </h3>
            <p> Dimensión: ${card.origin.name} </p>
            <p> Especie: ${card.species} </p>
            <p> Localización: ${card.location.name} </p>
            </div>
          </div>
         </div>`
        };
        
// FUNCION PARA IMPRIMIR DATA
let stringAllCards = ''; // creando variable que guardara toda la data (string)
const allCards = data.forEach((element) => { 
  stringAllCards += colecctionCards(element);/*console.log(stringAllCards);*/
});

  const btnCharacters= document.getElementById('btn-characters').addEventListener('click',() => {
  viewAllColecction.innerHTML= stringAllCards;});


//se llama el boton "select" y guardarlo en una variable
const selectOrder = document.getElementById('btn-multi');

//hacemos la funcion.
//llamamos al boton "selectOrder" y le decimos que al momento del click, tendrá un evento
// "change" se activa dependiendo la interaccion del usuario
selectOrder.addEventListener('change', (event) => {
const result = document.getElementById('view-colecction');
  result.textContent += colecctionCards;
});





  //---------------------BOTONES FUNCION INDIVIDUALES --------------------
/*
//BOTON MOSTRAR DIMENSION EARTH C137
const btnEarth= document.getElementById('btn-earth'); 
let stringCardsDimensionC137 = '';
const cardDimensionC137 = data.filter((dimension) => { 
if (dimension.origin.name === 'Earth (C-137)') {
stringCardsDimensionC137 += colecctionCards(dimension);
}
}); btnEarth.addEventListener('click',() => { viewAllColecction.innerHTML = stringCardsDimensionC137; });

//BOTON MOSTRAR LOS RICK
const btnRicks= document.getElementById('btn-ricks'); 
let stringCardsAllRicks = '';
const cardRicks = data.filter((allRicks) => { 
if (allRicks.name == 'Rick Sanchez') {
stringCardsAllRicks += colecctionCards(allRicks);
}
});
btnRicks.addEventListener('click',() => { viewAllColecction.innerHTML = stringCardsAllRicks; });

//BOTON MOSTRAR LOS MORTY
const btnMortys= document.getElementById('btn-mortys'); 
let stringCardsAllMortys = '';
const cardMortys = data.filter((allMortys) => { 
if (allMortys.name == 'Morty Smith') {
stringCardsAllMortys += colecctionCards(allMortys);
}
}); btnMortys.addEventListener('click',() => { viewAllColecction.innerHTML = stringCardsAllMortys; });

//BOTON MOSTRAR LAS SUMMERS
const btnSummers= document.getElementById('btn-summers'); 
let stringCardsAllSummers = '';
const cardSummers = data.filter((allSummers) => { 
if (allSummers.name == 'Summer Smith') {
stringCardsAllSummers += colecctionCards(allSummers);
}
}); btnSummers.addEventListener('click',() => { viewAllColecction.innerHTML = stringCardsAllSummers; });

//BOTON MOSTRAR LAS BETHS
const btnBeths= document.getElementById('btn-beths'); 
let stringCardsAllBeths = '';
const cardBeths = data.filter((allBeths) => { 
if (allBeths.name == 'Beth Smith') {
stringCardsAllBeths += colecctionCards(allBeths);
}
}); btnBeths.addEventListener('click',() => { viewAllColecction.innerHTML = stringCardsAllBeths; });
*/