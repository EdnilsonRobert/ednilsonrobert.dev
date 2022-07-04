import {receitas as receitas} from './data.js';

// CONTAINERS
let grid = document.querySelector('.recipes-categories');

// ARRAYS AND OBJECTS

// HOME CATEGORIES -------------------------------------------------------------
const slugify = string => {
  string = string.replace(/^\s+|\s+$/g, '');
  string = string.toLowerCase();
  let from = "ãàáäâáº½èéëêìíïîõòóöôùúüûñç·/_,:;";
  let to   = "aaaaaeeeeeiiiiooooouuuunc------";

  for (let i=0, l=from.length ; i<l ; i++) {
    string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  string = string.replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return string;
};

for(let recipe in receitas) {
  let items = receitas[recipe].items;
  let itemsList = '';
  for (let item in items) {
    let picture = items[item].picture ? `<img src="./images/img-${slugify(items[item].picture)}.jpg" alt="${items[item].name}">` : '<img src="https://via.placeholder.com/960x600.png?text=Sem+imagem" alt="Placeholder">';
    itemsList +=
    `<li class="recipes-categories-list-item">
      <figure>${picture}</figure>
      <a href="./receitas/${slugify(items[item].name)}.html">${items[item].name}</a>
    </li>`;
  };

  if(items.length != 0) {
    grid.innerHTML += `
    <section class="recipes-categories-item">
      <h3 class="recipes-categories-title heading-3 text-regular">${receitas[recipe].category}</h3>
      <ul class="recipes-categories-list">
        ${itemsList}
      </ul>
    </section>`;
  }
}
