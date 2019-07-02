/*FUNCION MOSTRAR DATA EN HTML */

//llamando el contenido de la DATA "rickandmorty.js"
const data = window.RICKANDMORTY.results;

data.forEach(imprimirData);

function imprimirData(item, index) {
    
    document.getElementById("info-data").innerHTML += index+ ' ' + item + "<br>"; 
  }