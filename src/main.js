
const data = window.RICKANDMORTY.results;  //llamando el contenido de la DATA "rickandmorty.js"   
const viewData = document.getElementById('view-data');  //llamando el div donde vamos a imprimir la data   

/*
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
btnAllData.addEventListener('click', () => { infoData.innerHTML= stringAllData; })  */

/* ---------- ordenando de a la z y viceversa ---------- */

const sortData = (selectedOrder, data) => {
  if (SelectedOrder === 1) {
    return data.sort(function(elementA, elementB) {
      if(elementA.name > elementB.name){
        return 1;
      }
      if (elementA.name < elementB.name) {
        return -1;
      }
      return 0;
    });

  } else if (selectedOrder === 2) {
    return data.sort(function(elementA, elementB) {
      if(elementA.name < elementB.name) {
        return 1;
      }
      if(elementA.name > elementB.name) {
        return 0;
      }
    })
  }
};


document.getElementById('interactiveSelecter').addEventListener('click', () => {
  const indexOrder= document.getElementById('interactiveSelecter'); //obtenemos text

  const selectedOrder= indexOrder[indexOrder.selectedIndex].value; // obtenemos valor
  
  const newArrayOrder= sortData(selectedOrder, data);
  infoData.innerHTML= data;
});