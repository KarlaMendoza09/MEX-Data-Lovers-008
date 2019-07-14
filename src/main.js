
const data = window.RICKANDMORTY.results;  //llamando el contenido de la DATA "rickandmorty.js"  
const viewAllColection = document.getElementById('view-colecction');  //llamando el div donde vamos a imprimir la data   

//CREAR FUNCION QUE DEFINE LA VISUALIZACION DE LA DATA, y llamarla con las proximas funciones
const printCards = (data) => {
  let stringAllCards = ''; // creando variable que guardara toda la data (string)
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
    };
    printCards(data);      


//LLAMANDO A TODOS LOS BOTONES
const allBtns = document.getElementsByClassName('all-btns');
//console.log(allBtns);
for(let i = 0; i < allBtns.length; i++) {
  allBtns[i].addEventListener('click', () => {
    idTarget= event.target.id;
    if(idTarget == 'btn-earth') {
    const cardDimensionC137 = data.filter(dimension => dimension.location.name =='Earth (C-137)');
    printCards(cardDimensionC137);
    //console.log(cardDimensionC137);
  } if (idTarget == 'btn-ricks') {
    const cardRicks = data.filter(allRicks => allRicks.location.name == 'Citadel of Ricks');
    //console.log(cardRicks);
    printCards(cardRicks);
  } if (idTarget == 'btn-replace') {
    const cardReplace = data.filter(allReplaces => allReplaces.location.name == 'Earth (Replacement Dimension)');
    //console.log(cardReplace);
    printCards(cardReplace);
  } if (idTarget == 'btn-cable') {
    const cardCable = data.filter(allCable => allCable.location.name == 'Interdimensional Cable');
    //console.log(cardSummers);
    printCards(cardCable);
  } if (idTarget == 'btn-park') {
    const cardPark = data.filter(allPark => allPark.location.name == 'Anatomy Park');
    //console.log(cardPark);
    printCards(cardPark);
  } 
  return 0;
  })
};

//ORDENAR DE A-Z Y Z-A
/*let orderCards= data.sort((a,b) => a.name > b.name );
console.log(orderCards);
*/

const btnMulti= document.getElementById('btn-multi');

btnMulti.addEventListener('change', () => {
  const valueUser= btnMulti.value;
  if (valueUser == 'az'){
    let orderCards= data.sort((a,b) => a.name > b.name);
  console.log(orderCards);
  }
  if (valueUser == 'za') {
    let orderCards= data.sort((a,b) => a.name < b.name );
  console.log(orderCards);
  }
  
})