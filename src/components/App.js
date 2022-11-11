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
  menu.textContent = 'Zelda Items';

  const selectItem = document.createElement('select');
  selectItem.setAttribute('id', 'selectItem');
  const materials = document.createElement('option');
  materials.textContent = "Materials";
  const monsters = document.createElement('option');
  monsters.textContent = "Monsters";
  const foodCreatures = document.createElement('option');
  foodCreatures.textContent = "Food Creatures";
  const nonFoodCreatures = document.createElement('option');
  nonFoodCreatures.textContent = "Creatures";
  const equipment = document.createElement('option');
  equipment.textContent = "Equipment";
  selectItem.add(monsters, [0]);
  selectItem.add(materials, [1]);
  selectItem.add(foodCreatures, [2]);
  selectItem.add(nonFoodCreatures, [3]);
  selectItem.add(equipment, [4]);
  menu.append(selectItem);

  var item = selectItem.value;

  selectItem.addEventListener('change', function (event) {
    item = event.target.value;
    showZeldaMaterial(item);
  });

  function showZeldaMaterial(item) {
    bringZelda('https://botw-compendium.herokuapp.com/api/v2/all')
      .then((data) => Object.entries(data).forEach(([key, value]) => {
        console.log(value, item, "allData");
        let itemsType = value.monsters;

        if (item == "Monsters") {
          itemsType = value.monsters;
        } else if (item == "Equipment") {
          itemsType = value.equipment;
        } else if (item == "Materials") {
          itemsType = value.materials;
        } else if (item == "Food Creatures") {
          itemsType = value.creatures.food;
        } else if (item == "Creatures") {
          itemsType = value.creatures.non_food;
        }
        const allImages = document.createElement('div');
        allImages.classList.add('allImagesCss');
        el.innerHTML = '';
        itemsType.forEach((element) => {
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
  

  showZeldaMaterial(item);
  return all;

};

export default App;
