// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/*const example = () => {
  return 'example';
};

window.example = example; */


const sortBy = (selectedSort, data) => {
  if(selectedSort == 1) {
    return data.sort(function(a, b) {
      if(a.name > b.name) {
        return 1;
      } if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
  } else if (selectedSort == 2) {
    return data.sort(function (a, b) {
      if(a.name < b.name) {
        return 1;
      } if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
  }
};

window.sortBy =sortBy;