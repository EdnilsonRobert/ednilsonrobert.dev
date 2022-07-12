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
document.querySelector('.total-index').innerHTML = totalItems;

for (let r in recipes) {
  let items = recipes[r].items;
  let itemsList = '';

  for (let i in items) {
    itemsList +=
    `<li class="card">
      <figure class="card-figure">
        <img class="card-image" src="./images/img-${slugify(items[i].name)}.jpg"
          onerror="this.onerror=null; this.src='https://via.placeholder.com/960x600.png?text=Sem+imagem';"
          alt="${slugify(items[i].name)}">
      </figure>
      <div class="card-body">
        <a class="button" href="./receita.html?page=${slugify(items[i].name)}">${items[i].name}</a>
      </div>
    </li>`;
  };

  if (items.length != 0) {
    grid.innerHTML += `
    <section class="card-display">
      <h3 class="headline-4 flex has-underline">${recipes[r].category} <small class="caption">${items.length} ${items.length == 1 ? 'receita' : 'receitas'}</small></h3>
      <ul class="card-grid">
        ${itemsList}
      </ul>
    </section>`;
  } else {
    grid.innerHTML += `
    <section class="card-display">
      <h3 class="headline-4 flex has-underline">${recipes[r].category} <small class="caption">Não há receitas</small></h3>
    </section>`;
  }
}
