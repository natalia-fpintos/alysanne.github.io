let pokemon = [{name: 'Bulbasaur', num: '#001', url: '../images/pokedex/bulbasaur-wbw.jpg',
              type: 'grass', eeveelution: false},
              {name: 'Charmander', num: '#004', url: '../images/pokedex/charmander-wbw.jpg',
              type: 'fire', eeveelution: false},
              {name: 'Charizard', num: '#006', url: '../images/pokedex/charizard-wbw.jpg',
              type: 'fire', eeveelution: false},
              {name: 'Mega Charizard X', num: '#006', url: '../images/pokedex/charizardx-wbw.jpg',
              type: 'fire', eeveelution: false},
              {name: 'Squirtle', num: '#007', url: '../images/pokedex/squirtle-wbw.jpg',
              type: 'water', eeveelution: false},
              {name: 'Pikachu', num: '#025', url: '../images/pokedex/pikachu-wbw.jpg',
              type: 'electric', eeveelution: false},
              {name: 'Gengar', num: '#094', url: '../images/pokedex/gengar-wbw.jpg',
              type: 'ghost', eeveelution: false},
              // {name: 'Koffing', num: '#109', url: '../images/patterns.jpg',
              // type: 'poison', eeveelution: false},
              {name: 'Eevee', num: '#133', url: '../images/pokedex/eevee-wbw.jpg',
              type: 'normal', eeveelution: true},
              {name: 'Vaporeon', num: '#134', url: '../images/pokedex/vaporeon-wbw.jpg',
              type: 'water', eeveelution: true},
              {name: 'Jolteon', num: '#135', url: '../images/pokedex/jolteon-wbw.jpg',
              type: 'electric', eeveelution: true},
              {name: 'Flareon', num: '#136', url: '../images/pokedex/flareon-wbw.jpg',
              type: 'fire', eeveelution: true},
              // {name: 'Quilava', num: '#156', url: '../images/pokedex/quilava-wbw.jpg',
              // type: 'fire', eeveelution: false},
              {name: 'Pichu', num: '#172', url: '../images/pokedex/pichu-wbw.jpg',
              type: 'electric', eeveelution: false},
              // {name: 'Ampharos', num: '#181', url: '../images/pokedex/ampharos-wbw.jpg',
              // type: 'electric', eeveelution: false},
              {name: 'Umbreon', num: '#197', url: '../images/pokedex/umbreon-wbw.jpg',
              type: 'dark', eeveelution: true},
              // {name: 'Mega Lucario', num: '#448', url: '../images/pokedex/megalucario-wbw.jpg',
              // type: 'fighting', eeveelution: false},
              {name: 'Leafeon', num: '#470', url: '../images/pokedex/leafeon-wbw.jpg',
              type: 'grass', eeveelution: true},
              // {name: 'Oshawott', num: '#501', url: '../images/patterns.jpg',
              // type: 'water', eeveelution: false},
              // {name: 'Dedenne', num: '#702', url: '../images/patterns.jpg',
              // type: 'electric', eeveelution: false},
              // {name: 'Pumpkaboo', num: '#710', url: '../images/pokedex.png',
              // type: 'ghost', eeveelution: false},
              {name: 'Rowlet', num: '#722', url: '../images/pokedex/rowlet-wbw.jpg',
              type: 'grass', eeveelution: false}];


function doubleLine(name) {
  for (let i = 0; i < name.length; i++) {
    if (name[i] === ' ') {
      return `<figure>${name.slice(0, i)}<br>${name.slice(i+1, name.length)}</figure>`
    }
  }
}

function create(pokemon) {
  for (let i = 0; i < pokemon.length; i++) {
    let element = document.createElement("FIGURE");
    let pokedexItems = document.getElementById('pokedex-items');

    pokedexItems.appendChild(element);
    pokedexItems.lastChild.innerHTML = pokemon[i].name.length < 15 ?
      `<figure>${pokemon[i].name}</figure>` : doubleLine(pokemon[i].name);
    pokedexItems.lastChild.className = pokemon[i].name.length < 15 ?
      `poke-item ${pokemon[i].type}` : `poke-item ${pokemon[i].type} multi-line`;
    pokedexItems.lastChild.style.background = `url(${pokemon[i].url}) center no-repeat`;
    pokedexItems.lastChild.style.backgroundSize = '180px';
  }
}


function visibleItems(v) {
  let pokedexItems = document.getElementById('pokedex-items');

  for (let a = 0, b = pokedexItems.childNodes.length; a < b; a++) {
    pokedexItems.childNodes[a].style.display = v;
  }
}

function selector(value, pokemon) {
  let low = value.toLowerCase();
  visibleItems('none');

  if (low === '') {
    visibleItems('inline');
  } else {
    for (let i = 0, len = pokemon.length; i < len; i++) {
      let findName = pokemon[i].name.toLowerCase().search(low) != -1;
      let findType = pokemon[i].type.toLowerCase() === low;
      let regex = /eevee?lutions?/ig;
      let eeveelution = low.match(regex) !== null && pokemon[i].eeveelution === true;
      if (findName || findType || eeveelution) {
        document.getElementsByClassName('poke-item')[i].style.display = 'inline';
      }
    }
  }
}

function animateBoxes() {
  // document.getElementById
}

let searchBox = document.getElementById('searchBox');

function getData() {
  let data = location.search.split("=");
  let value = decodeURI(data[1]);
  console.log(value);
  searchBox.value = value;
}

window.onload = create(pokemon);
window.onload = location.search != '' && getData();
window.onload = searchBox.value != '' && selector(searchBox.value, pokemon);
// body.onload = animateBoxes();
