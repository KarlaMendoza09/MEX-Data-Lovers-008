/*FUNCION MOSTRAR DATA EN HTML */

//llamando el contenido de la DATA "rickandmorty.js"
const data = window.RICKANDMORTY.results;

//llamando el div donde vamos a imprimir la data
const infoData = document.getElementById('info-data');


/*HACIENDO L FUNCION PARA IMPRIMIR CONTENIDO EN HTML */

let string = '';   // creando variable que contendra el string

data.forEach((element, index) => {         // DESARROLLLO DE FUNCION
  // console.log(`${index} 
  // IMAGE: ${element.image} 
  // NOMBRE: ${element.name} 
  // DIMENSION: ${element.origin.name}`
  // console.log(element.image)

  string += `<div class="contenido">
 <div class= "tarjeta">
    <div class="contenido-tarjeta"> 
    <img src="${element.image}" alt="">
      <h3>${element.name} </h3>
        <p>${element.origin.name} </p>
     </div>
  </div>
</div>`
})


//console.log(string);
infoData.innerHTML = string;
  



  /*
----------------------------------------------------------------

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