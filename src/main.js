
const data = window.RICKANDMORTY.results;  //llamando el contenido de la DATA "rickandmorty.js"   
const viewData = document.getElementById('view-data');  //llamando el div donde vamos a imprimir la data   


let stringAllData = '';     // creando variable que guardara toda la data (string)
const allData = data.forEach((element, index) => {
  stringAllData += `<div class="tarjeta"> 
    <img src="${element.image}" alt="">
    <h3>${element.name} </h3>
    <p>DIMENSIÓN: ${element.origin.name}</p>
    <p>ESPECIE: ${element.species}</p>
    <p>GÉNERO: ${element.gender}</p>
    <p>STATUS: ${element.status}</p>
</div>`
});
viewData.innerHTML= stringAllData;





// ---------- ordenando de a la z y viceversa ----------




const newArrayOrder='';
document.getElementById('interactiveSelecter').addEventListener('click', () => {
  const indexOrder= document.getElementById('interactiveSelecter'); //obtenemos text

  const selectedOrder= indexOrder[indexOrder.selectedIndex].value; // obtenemos valor
  
  const newArrayOrder= window.RICKANDMORTY.orderBy(selectedOrder, Allata);
  
});
console.log(newArrayOrder);
