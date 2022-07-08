/* =============================================================================
    CADERNO DE RECEITAS
    JS: RECIPES
============================================================================= */

import {receitas as recipes} from './data.js';
import {slugify as slugify} from './utils.js';

// CONTAINERS
const recipeContainer = document.querySelector('.main-recipe');

const params = new URLSearchParams(window.location.search);
const pageParam = params.get('page');

// SCRIPTS
for(let r in recipes) {
  let items = recipes[r].items;
  for (let i in items) {
    let pageSlug = slugify(items[i].name);

    if (pageSlug === pageParam) {
      document.querySelector('title').textContent = `${items[i].name} by Ed`;
      document.querySelector('meta[name="description"]').content = `${items[i].name} em Caderno de Receitas do Ed`;
      document.querySelector('meta[name="keywords"]').content = `${items[i].keywords}`;

      let image = `<img
        src="./images/img-${slugify(items[i].name)}.jpg"
        alt="${slugify(items[i].name)}"
        onerror="this.onerror=null; this.src=''; this.alt='';">`;
      document.querySelector('.hero-figure').innerHTML = image;

      recipeContainer.innerHTML += `<h2 class="headline-2 text-highlighted text-center">${items[i].name}</h2>`;

      let ingredients = items[i].ingredients;
      let ingredientList = '';
      recipeContainer.innerHTML += `<h3 class="headline-3">Ingredientes:</h3>`;
      for (let i in ingredients) {
        ingredientList += `<li>${ingredients[i]}</li>`;
      }
      recipeContainer.innerHTML += `<ul class="main-recipe-list">${ingredientList}</ul>`;

      let howTo = items[i].howTo;
      let howToSteps = '';
      recipeContainer.innerHTML += `<h3 class="headline-3">Modo de preparo:</h3>`;
      for (let h in howTo) {
        howToSteps += `<li>${howTo[h]}</li>`;
      }
      recipeContainer.innerHTML += `<ol class="main-recipe-list">${howToSteps}</ol>`;

      let filling = items[i].filling;
      if (filling) {
        let fillingList = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">${items[i].fillingTitle}:</h3>`;
        for (let f in filling) {
          fillingList += `<li>${filling[f]}</li>`;
        }
        recipeContainer.innerHTML += `<ul class="main-recipe-list">${fillingList}</ul>`;
        let fillingHowTo = items[i].fillingHowTo;
        let fillingSteps = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">Modo de preparo da cobertura:</h3>`;
        for (let f in fillingHowTo) {
          fillingSteps += `<li>${fillingHowTo[f]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="main-recipe-list">${fillingSteps}</ol>`;
      }

      let topping = items[i].topping;
      if (topping) {
        let toppingList = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">${items[i].toppingTitle}:</h3>`;
        for (let t in topping) {
          toppingList += `<li>${topping[t]}</li>`;
        }
        recipeContainer.innerHTML += `<ul class="main-recipe-list">${toppingList}</ul>`;
        let toppingHowTo = items[i].toppingHowTo;
        let toppingSteps = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">Modo de preparo da cobertura:</h3>`;
        for (let t in toppingHowTo) {
          toppingSteps += `<li>${toppingHowTo[t]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="main-recipe-list">${toppingSteps}</ol>`;
      }

      let options = items[i].options;
      if (options) {
        let optionsList = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">${items[i].optionsTitle}:</h3>`;
        for (let o in options) {
          optionsList += `<li>${options[o]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="main-recipe-list">${optionsList}</ol>`;
      }

      let hints = items[i].hints;
      if (hints) {
        let hintsList = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">Dicas:</h3>`;
        for (let h in hints) {
          hintsList += `<li>${hints[h]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="main-recipe-list">${hintsList}</ol>`;
      }

      let notes = items[i].notes;
      if (notes) {
        let notesList = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">Anotações:</h3>`;
        for (let n in notes) {
          notesList += `<p class="main-recipe-note">${notes[n]}</>`;
        }
        recipeContainer.innerHTML += notesList;
      }

      let curiosities = items[i].curiosities;
      if (curiosities) {
        let curiositiesList = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">Curiosidades:</h3>`;
        for (let c in curiosities) {
          curiositiesList += `<li>${curiosities[c]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="main-recipe-list">${curiositiesList}</ol>`;
      }

      recipeContainer.innerHTML +=
      `<div class="recipe-info">
        <p>Categoria: ${recipes[r].category}</p>
        <p>Tags: ${items[i].keywords}</p>
      </div>`;

      let gallery = items[i].gallery;
      if (gallery) {
        let galleryList = '';
        recipeContainer.innerHTML += `<h3 class="headline-3">Galeria:</h3>`;
        for (let g in gallery) {
          galleryList += `<figure class="responsive-iframe">${gallery[g]}</figure>`;
        }
        recipeContainer.innerHTML += `<div class"recipe-gallery">${galleryList}</div>`;
      }
    }
  }
}
