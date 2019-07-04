/*FUNCION MOSTRAR DATA EN HTML */

const data = window.RICKANDMORTY.results;     //llamando el contenido de la DATA "rickandmorty.js"
const infoData = document.getElementById('info-data');     //llamando el div donde vamos a imprimir la data

let string = '';     // creando variable que contendra el string

data.forEach((element, index) => { // desarrollo de la funcion
  string += `<div class="tarjeta">     
 <div class= "retrato">
    <div class="texto"> 
    <h3>${element.name} </h3>
    <img src="${element.image}" alt="">
    
     </div>
  </div>
</div>`
});
//console.log(string);
infoData.innerHTML = string;

/* FILTRAR INFO */
//hacer boton para que aparesca el filtrado
const btnFiltro= document.getElementById('btn-filtro');

const primer = data.filter(dats => (dats.name === 'Abradolf Lincler'));
console.log(primer);

/*infoData.innerHTML=btnFiltro.addEventListener ('click', primer); */
  


/*
----------------------------------------------------------------

<p>${element.location.name} </p>

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