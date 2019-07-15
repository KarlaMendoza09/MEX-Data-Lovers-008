// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example; */
const dimensionC137 = (data) => { 
  let result= data.filter(dimension => dimension.location.name =='Earth (C-137)');
  return result;
};
window.dimensionC137 = dimensionC137;


const citadel = (data) => {
  let result= data.filter(allCitadel => allCitadel.location.name == 'Citadel of Ricks');
  return result;
};
window.citadel = citadel;

const replacement= (data) => {
  let result= data.filter(allReplacement => allReplacement.location.name == 'Earth (Replacement Dimension)');
  return result;
};
window.replacement = replacement;

const cableTv = (data) => {
  let result = data.filter(allCableTv => allCableTv.location.name == 'Interdimensional Cable TV');
  return result;
};
window.cableTv = cableTv;

const anatomyPark = (data) => {
  let result = data.filter(allAnatomy => allAnatomy.location.name == 'Anatomy Park');
  return result;
};
window.anatomyPark = anatomyPark;

const ricks= (data) => {
  let items = data.filter(item => item.name.indexOf('Rick') > -1);
  return items;
};
window.ricks = ricks;

const mortys= (data) => {
  let items = data.filter(item => item.name.indexOf('Morty') > -1);
  return items;
};
window.mortys= mortys;

/*const orderData= (selectedSort, data) => {
  if (selectedSort == 'az'){
    return data.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      } else if(selectedSort == 'za') {
        return data.sort(function(a, b) {
          if (a.name < b.name) {
            return 1;
          } if (a.name > b.name) {
            return -1;
          } 
          return 0;
        })
      }
    })
  }
};
window.orderData= orderData; */