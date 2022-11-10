//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
import bringZelda from "../data/zeldaData/zelda.js";
const App = () => {
  const all = document.createElement('div');
  const menu = document.createElement('div');
  const el = document.createElement('div');

  menu.className = 'App';
  menu.textContent = 'Zelda Elements';

  function showZeldaMaterial() {
    bringZelda('https://botw-compendium.herokuapp.com/api/v2/all')
      .then((data) => Object.entries(data).forEach(([key, value]) => {
        console.log(value, "allData");
        const foodCreatures = value.monsters;
        console.log(foodCreatures);
        const allImages = document.createElement('div');
        allImages.classList.add('allImagesCss');
        foodCreatures.forEach((element) => {
          const eachCard = document.createElement('div');
          eachCard.classList.add('eachCard');
          const zeldaImage = document.createElement('img');
          zeldaImage.classList.add('zeldaImage');
          zeldaImage.src = element.image;
          const cardName = document.createElement('p');
          cardName.classList.add('cardNameEach');
          cardName.textContent = element.name;
          eachCard.append(zeldaImage, cardName);
          allImages.append(eachCard);
        })
        el.append(allImages)
        all.append(menu, el);
      }))
  }
  /*function showZeldaStaff() {
    const allImages = document.createElement('div');

    
    bringZelda('https://zelda.fanapis.com/api/characters')
      .then((element) => element.data.forEach(character => {
        console.log(character);
        const eachImage = document.createElement('img');
        eachImage.classList.add('eachImageCss');
        eachImage.src = character.appearances;
        allImages.append(eachImage);
      }));
    el.append(allImages);



  }*/





  showZeldaMaterial();
  return all;

};

export default App;
