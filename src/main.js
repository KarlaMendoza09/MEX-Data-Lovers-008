
const data = window.RICKANDMORTY.results; 
const viewAllColection = document.getElementById('view-colecction');  //llamando el div para ver data   

//View all data
const printCards = (data) => {
  let stringAllCards = ''; // (nuevo string)
  data.forEach(card => {
    stringAllCards += `<div class= "individualcard">
          <div class="portrait">
          <img src = "${card.image}"> 
            <div class="info">   
            <h3> ${card.name} </h3>
            <p> Status: ${card.status} </p>
            <p> Especie: ${card.species} </p>
            <p> Género: ${card.gender} </p>
            <p> Tipo: ${card.type} </p>
            </div>
          </div>
         </div>`
  });
  viewAllColection.innerHTML = stringAllCards;
}
printCards(data);

//BOTONES
const allButtons = document.getElementsByClassName('all-btns'); //console.log(allBtns);
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', () => {
    idTarget = event.target.id;
    if (idTarget == 'btn-characters') {
      printCards(data);
    }
    if (idTarget == 'btn-ricks') {
      const CardsAllRicks= window.ricks(data);
      printCards(CardsAllRicks);
    }
    if (idTarget == 'btn-mortys') {
      const CardsAllMortys= window.mortys(data);
      printCards(CardsAllMortys);
    }
    if (idTarget == 'btn-earth') {
      const cardDimensionC137 = window.dimensionC137(data);
      printCards(cardDimensionC137);//console.log(cardDimensionC137);
    }
    if (idTarget == 'btn-citadel') {
      const cardsCitadel = window.citadel(data); //console.log(cardRicks);
      printCards(cardsCitadel);
    }
    if (idTarget == 'btn-replacement') {
      const cardsReplacement = window.replacement(data); //console.log(cardReplace);
      printCards(cardsReplacement);
    }
    if (idTarget == 'btn-cabletv') {
      const cardsCabletv = window.cableTv(data); //console.log(cardSummers);
      printCards(cardsCabletv);
    }
    if (idTarget == 'btn-park') {
      const cardsAnatomyPark = window.anatomyPark(data); //console.log(cardPark);
      printCards(cardsAnatomyPark);
    }
    return 0;
  })
};



const selectOrder= document.getElementById('select-order');

selectOrder.addEventListener('change', () => {
  const valueUser= selectOrder.value;
  if (valueUser == 'az'){
    let orderCards= data.sort((a,b) => a.name > b.name);
  //console.log(orderCards);
  printCards(orderCards);
  }
  if (valueUser == 'za') {
    let orderCards= data.sort((a,b) => a.name < b.name );
  //console.log(orderCards);
  printCards(orderCards);
  }
});



/*//ORDENAR DE A-Z Y Z-A
document.getElementById('dropDownSelecter').addEventListener('change', () => {
  const indexSort= document.getElementById('dropDownSelecter');
  const selectedSort= indexSort[indexSort.selectedIndex].value;
  const arraySort= window.orderData(selectedSort, data);
  printCards(arraySort);
});
let orderCards= data.sort((a,b) => a.name > b.name );
console.log(orderCards);


*/