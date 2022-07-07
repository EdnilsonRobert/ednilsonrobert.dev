/* =============================================================================
    CADERNO DE RECEITAS
    JS: HOME
============================================================================= */

import {receitas as recipes} from './data.js';
import {slugify} from './utils.js';

// VARIABLES
const grid = document.querySelector('.recipe-index');

let totalItems = 0;
for (let r in recipes) {
  totalItems += recipes[r].items.length;
}

// PAGE
document.querySelector('.total-index').innerHTML = `<b>${totalItems}</b> receitas`;

for (let r in recipes) {
  let items = recipes[r].items;
  let itemsList = '';

  for (let i in items) {
    itemsList +=
    `<li class="index-list-item">
      <figure class="index-list-item-figure">
        <img src="./images/img-${slugify(items[i].name)}.jpg"
          onerror="this.onerror=null; this.src='https://via.placeholder.com/960x600.png?text=Sem+imagem';"
          alt="${slugify(items[i].name)}">
      </figure>
      <a class="index-list-item-link" href="./receita.html?page=${slugify(items[i].name)}">${items[i].name}</a>
    </li>`;
  };

  if (items.length != 0) {
    grid.innerHTML += `
    <section class="index-item">
      <h3 class="index-title heading-3 text-regular">${recipes[r].category} <small>${items.length} ${items.length == 1 ? 'receita' : 'receitas'}</small></h3>
      <ul class="index-list">
        ${itemsList}
      </ul>
    </section>`;
  }
}
