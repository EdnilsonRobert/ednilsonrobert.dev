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

      let image = `<img class="hero-image"
        src="./images/img-${slugify(items[i].name)}.jpg"
        alt="${slugify(items[i].name)}"
        onerror="this.onerror=null; this.src=''; this.alt='';">`;
      document.querySelector('.hero-figure').innerHTML = image;

      recipeContainer.innerHTML += `
        <p class="overline text-center">Categoria: ${recipes[r].category}</p>
        <hr class="hr-small">
        <h2 class="headline-1 display text-center text-highlighted">${items[i].name}</h2>
        <hr class="hr-small">
        <p class="caption text-center">Tags: ${items[i].keywords}</p>
      `;

      let ingredients = items[i].ingredients;
      let ingredientList = '';
      recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">Ingredientes:</h3>`;
      for (let i in ingredients) {
        ingredientList += `<li class="list-item custom-item">${ingredients[i]}</li>`;
      }
      recipeContainer.innerHTML += `<ul class="list">${ingredientList}</ul>`;

      let howTo = items[i].howTo;
      let howToSteps = '';
      recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">Modo de preparo:</h3>`;
      for (let h in howTo) {
        howToSteps += `<li class="list-item numerical-item">${howTo[h]}</li>`;
      }
      recipeContainer.innerHTML += `<ol class="list list-ordered">${howToSteps}</ol>`;

      // let filling = items[i].filling;
      // if (filling) {
      //   let fillingList = '';
      //   recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">${items[i].fillingTitle}:</h3>`;
      //   for (let f in filling) {
      //     fillingList += `<li class="list-item custom-item">${filling[f]}</li>`;
      //   }
      //   recipeContainer.innerHTML += `<ul class="list">${fillingList}</ul>`;
      //   let fillingHowTo = items[i].fillingHowTo;
      //   let fillingSteps = '';
      //   recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">Modo de preparo da cobertura:</h3>`;
      //   for (let f in fillingHowTo) {
      //     fillingSteps += `<li class="list-item numerical-item">${fillingHowTo[f]}</li>`;
      //   }
      //   recipeContainer.innerHTML += `<ol class="list list-ordered">${fillingSteps}</ol>`;
      // }

      let topping = items[i].topping;
      if (topping) {
        let toppingList = '';
        recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">${items[i].toppingTitle}:</h3>`;

        for (let t in topping) {
          toppingList += `<li class="list-item custom-item">${topping[t]}</li>`;
        }
        recipeContainer.innerHTML += `<ul class="list">${toppingList}</ul>`;
        let toppingHowTo = items[i].toppingHowTo;
        let toppingSteps = '';
        recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">Modo de preparo da cobertura:</h3>`;
        for (let t in toppingHowTo) {
          toppingSteps += `<li class="list-item numerical-item">${toppingHowTo[t]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="list list-ordered">${toppingSteps}</ol>`;
      }

      let options = items[i].options;
      if (options) {
        let optionsList = '';
        recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">${items[i].optionsTitle}:</h3>`;
        for (let o in options) {
          optionsList += `<li class="list-item numerical-item">${options[o]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="list list-ordered">${optionsList}</ol>`;
      }

      let hints = items[i].hints;
      if (hints) {
        let hintsList = '';
        recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">Dicas:</h3>`;
        for (let h in hints) {
          hintsList += `<li class="list-item numerical-item">${hints[h]}</li>`;
        }
        recipeContainer.innerHTML += `<ol class="list list-ordered">${hintsList}</ol>`;
      }

      let notes = items[i].notes;
      if (notes) {
        let notesList = '';
        recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">Anotações:</h3>`;
        for (let n in notes) {
          notesList += `<p class="text-item">${notes[n]}</>`;
        }
        recipeContainer.innerHTML += notesList;
      }

      // let curiosities = items[i].curiosities;
      // if (curiosities) {
      //   let curiositiesList = '';
      //   recipeContainer.innerHTML += `<h3 class="headline-3">Curiosidades:</h3>`;
      //   for (let c in curiosities) {
      //     curiositiesList += `<li>${curiosities[c]}</li>`;
      //   }
      //   recipeContainer.innerHTML += `<ol class="main-recipe-list">${curiositiesList}</ol>`;
      // }

      let gallery = items[i].gallery;
      if (gallery) recipeContainer.innerHTML += `<h3 class="headline-4 has-underline">Galeria:</h3>`;
      let images = gallery.images;
      if (images) {
        let imageList = '';
        let imageName = slugify(items[i].name);
        for (let i=0; i<images.length; i++) {
          imageList +=
          `<figure class="figure">
            <img class="figure-image" src="./images/img-${imageName}-${i+1}.jpg" alt="${imageName}">
            <figcaption class="figure-caption caption text-center">${images[i]}</figcaption>
          </figure>`;
        }
        recipeContainer.innerHTML += `<div class="image-gallery">${imageList}</div>`;
      }
      let videos = gallery.videos;
      if (videos) {
        for (let v in videos) {
          if (videos[v].youtube) {
            let youtubeFrame = document.createElement('figure');
            youtubeFrame.classList.add('youtube-frame');
            let video = document.createElement('iframe');
            video.src = videos[v].youtube;
            video.setAttribute('frameborder', 0);
            youtubeFrame.append(video);
            recipeContainer.insertAdjacentElement('beforeend', youtubeFrame);
            recipeContainer.innerHTML += `<p class="figure-caption caption text-center">${videos[v].caption}</p>`;
          } else {
            let videoList = '';
            let videoName = slugify(items[i].name);
            for (let i=0; i<videos.length; i++) {
              videoList +=
              `<figure class="video">
                <video controls>
                  <source src="./images/mov-${videoName}-${i+1}.mp4" type="video/mp4">
                </video>
                <figcaption class="figure-caption caption text-center">${videos[v]}</figcaption>
              </figure>
              `;
            }
            recipeContainer.innerHTML += `<div class="video-gallery">${videoList}</div>`;
          }
        }
      }
    }
  }
}
