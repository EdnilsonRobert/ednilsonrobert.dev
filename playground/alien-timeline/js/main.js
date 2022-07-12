import data from './data.js';
const timeline = data;
const img_path = './images'

const timelineContainer = document.querySelector('.alien-timeline');

for (let t in timeline) {
  let card = timeline[t];
  let date = card.time ? card.time : 'Atenção';
  let figure = card.figure ? `<figure class="card-figure"><img class="card-image" src="${img_path}/${card.figure.name}" alt="${card.figure.caption}"></figure>` : '';
  // let icon = card.icon ? `<i class="icon ${card.icon}"></i>` : '';
  // let video = card.video ? `<figure class="card-video">${card.video}</figure>` : '';

  timelineContainer.innerHTML += `
    <article class="card">
      <div class="card-header">
        <h2 class="card-title display-5">${date}</h2>
      </div>
      <div class="card-content">
        <p class="card-text">${card.happenings}</p>
        ${figure}
      </div>
    </article>
  `;
}
