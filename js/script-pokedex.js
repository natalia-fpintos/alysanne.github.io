let pokemon = [{name: 'Bulbasaur', num: '#001', url: '../images/other-projects.jpg',
              type: 'grass'},
              {name: 'Charmander', num: '#004', url: '../images/other-projects.jpg',
              type: 'fire'},
              {name: 'Squirtle', num: '#007', url: '../images/patterns.jpg',
              type: 'water'},
              {name: 'Pikachu', num: '#025', url: '../images/patterns.jpg',
              type: 'electric'},
              {name: 'Gengar', num: '#094', url: '../images/patterns.jpg',
              type: 'ghost'},
              {name: 'Koffing', num: '#109', url: '../images/patterns.jpg',
              type: 'poison'},
              {name: 'Eevee', num: '#133', url: '../images/patterns.jpg',
              type: 'normal'},
              {name: 'Vaporeon', num: '#134', url: '../images/patterns.jpg',
              type: 'water'},
              {name: 'Jolteon', num: '#135', url: '../images/patterns.jpg',
              type: 'electric'},
              {name: 'Flareon', num: '#136', url: '../images/patterns.jpg',
              type: 'fire'},
              {name: 'Quilava', num: '#156', url: '../images/patterns.jpg',
              type: 'fire'},
              {name: 'Pichu', num: '#172', url: '../images/patterns.jpg',
              type: 'electric'},
              {name: 'Ampharos', num: '#181', url: '../images/patterns.jpg',
              type: 'electric'},
              {name: 'Umbreon', num: '#197', url: '../images/patterns.jpg',
              type: 'dark'},
              {name: 'Leafeon', num: '#470', url: '../images/patterns.jpg',
              type: 'grass'},
              {name: 'Oshawott', num: '#501', url: '../images/patterns.jpg',
              type: 'water'},
              {name: 'Dedenne', num: '#702', url: '../images/patterns.jpg',
              type: 'electric'},
              {name: 'Pumpkaboo', num: '#710', url: '../images/pokedex.png',
              type: 'ghost'},
              {name: 'Rowlet', num: '#722', url: '../images/patterns.jpg',
              type: 'grass'}];


function create(pokemon) {
  for (let i = 0; i < pokemon.length; i++) {
    let element = document.createElement("FIGURE");
    let pokedexItems = document.getElementById('pokedex-items');

    pokedexItems.appendChild(element);
    pokedexItems.lastChild.innerHTML = `<figure>${pokemon[i].name}</figure>`;
    pokedexItems.lastChild.className = `poke-item ${pokemon[i].type}`;
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

window.onload = create(pokemon);
console.log(document.getElementById('pokedex-items'));
function selector(value, pokemon) {
  let low = value.toLowerCase();
  visibleItems('none');

  if (low === '') {
    visibleItems('inline');
  } else {
    for (let i = 0, len = pokemon.length; i < len; i++) {
      let findName = pokemon[i].name.toLowerCase().search(low) != -1;
      let findType = pokemon[i].type.toLowerCase() === low;
      if (findName || findType) {
        document.getElementsByClassName('poke-item')[i].style.display = 'inline';
      }
    }
  }
}
