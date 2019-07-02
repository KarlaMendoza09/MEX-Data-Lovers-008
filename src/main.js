/*FUNCION MOSTRAR DATA EN HTML */

//llamando el contenido de la DATA "rickandmorty.js"
const data = window.RICKANDMORTY.results;
//Definir funcion para pintar en el html
data.forEach((element, index) => 
console.log(`${index} 
IMAGE: ${element.image} 
NOMBRE: ${element.name} 
DIMENSION: ${element.origin.name}`)
);
//imprimir en html





  
  
  
  
  
  
  
  /*
  const data = window.RICKANDMORTY.results;
  data.forEach(imprimirData);

  function imprimirData(element) {
  document.getElementById('info-data').innerHTML += element.name + "<br>" + element.location.name +"<br>";
  }
  
  
  
  
  
  
  const data = window.RICKANDMORTY.results
data.forEach(imprimirData);
function imprimirData(item, index) {
document.getElementById("info-data").innerHTML += index+ ' ' + item + "<br>";
document.write(index + element.name+"<br>"); 
} */