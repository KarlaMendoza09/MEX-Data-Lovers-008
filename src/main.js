
const data = window.RICKANDMORTY.results;  //llamando el contenido de la DATA "rickandmorty.js"  
const viewAllColection = document.getElementById('view-colecction');  //llamando el div donde vamos a imprimir la data   

//CREAR FUNCION QUE DEFINE LA VISUALIZACION DE LA DATA, y llamarla con las proximas funciones
const colectionCards = (card) => {
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
  stringAllCards += colectionCards(element);/*console.log(stringAllCards);*/
});
  const btnCharacters= document.getElementById('btn-characters').addEventListener('click',() => {
  viewAllColection.innerHTML= stringAllCards;});

//LLAMANDO A TODOS LOS BOTONES
const allBtns = document.getElementsByClassName('all-btns');
//console.log(allBtns);
for(let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener('click', () => {
    idTarget= event.target.id;

    if(idTarget == 'btn-earth') {
    const cardDimensionC137 = data.filter(dimension => dimension.location.name =='Earth (C-137)');
    console.log(cardDimensionC137);

  } if (idTarget == 'btn-ricks') {
    const cardRicks = data.filter(allRicks => allRicks.name == 'Rick Sanchez');
    console.log(cardRicks);

  } if (idTarget == 'btn-mortys') {
    const cardMortys = data.filter(allMortys => allMortys.name == 'Morty Smith');
    console.log(cardMortys);

  } if (idTarget === 'btn-summers') {
    const cardSummers = data.filter(allSummers => allSummers.name == 'Summer Smith');
    console.log(cardSummers);

  } if (idTarget === 'btn-beths') {
    const cardBeths = data.filter(allBeths => allBeths.name == 'Beth Smith');
    console.log(cardBeths);
  } 
  return 0;
  })
};

/*llamando a select
const btnMulti= document.getElementById('btn-multi');
btnMulti.addEventListener('change', () => {
  const valueUser= btnMulti.value;
  //let orderData= data.sort((a, b) => a-b);
});
*/





/* 
const orderData = data.sort(function(a, b) {
  cardsOrder='';
  if (a.name > b.name) {
    return  AllCards(cardsOrder);
  } if (a.name < b.name) {
    return -1;
  }
  return 0;
}); console.log(orderData);




const orderData = data.sort(function(a, b) {
  if (a.name > b.name) {
    return viewAllColection.innerHTML = stringAllCards;
  } if (a.name < b.name) {
    return -1;
  }
  return 0;
}); 



//se llama el boton "select" y guardarlo en una variable
const selectOrder = document.getElementById('btn-multi');
//const optionOrder= document.getElementById ('btn-multi').value;
selectOrder.addEventListener('change', (event) => {
const result = document.getElementById('view-colecction');
  result.textContent += colectionCards; 
});

//se llama el boton "select" y guardarlo en una variable
const selectOrder = document.getElementById('btn-multi');
//const optionOrder= document.getElementById ('btn-multi').value;


selectOrder.addEventListener('change', (event) => {
const result = document.getElementById('view-colecction');
  result.textContent = `Seleccionaste ${event.target.value}`
});


*/
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