
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
// FUNCION PARA IMPRIMIR DATA EN EL HTML
let stringAllCards = ''; // creando variable que guardara toda la data (string)
    const allCards = data.forEach((element) => { 
      stringAllCards += colecctionCards(element);
      //console.log(stringAllCards);
});
viewAllColecction.innerHTML= stringAllCards;

//Ordenando data por medio de un select
const btn= document.getElementById('btn-multi').addEventListener('click', () => { 
  const indexSort= document.getElementById('btn-multi');
  const selectedSort= indexSort.selectedIndex.value;
  const arraySort= AllCards.sortBy(selectedSort, data);
});
stringAllCards(arraySort);



/*const btnMultiOption = document. getElementById('btn-multioption');

dataFiltrada= () =>{
  const indexSort = btnMultiOption;
  const selectedSort = indexSort[indexSort.selectedIndex].value;
  const newDataFiltrada = data.sort(selectedSort, data) => {

  }
} */








/* ------------------ PROCESS --------------------------

const colecctionCards = (card) => {
return `<div class= "individual-card">
          <div clas="portrait">
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



-----------------------------------------------------

const viewDataCards = () => {
  let viewCards= '';
  data.forEach(element => {
   viewCards += colecctionCards(element); 
  });
  viewAllColecction.innerHTML= cards;
};
viewDataCards;


---------------------------------------------------------

const viewDataCards= (data.forEach(element) => {
  let cards= '';
  cards += colecctionCards(element);

  viewAllColecction.innerHTML= cards;
})
viewDataCards

 -------------- first function with forEach() method --------------
 let stringAllData = ''; // creando variable que guardara toda la data (string)

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
btnAllData.addEventListener('click', ()=> {infoData.innerHTML= stringAllData });
---------- */