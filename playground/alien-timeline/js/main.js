import data from './data.js';
const timeline = data;
const img_path = './images'

const timelineContainer = document.querySelector('.alien-timeline');

timeline.forEach(card => {
  let icon = card.icon ? `<i class="icon ${card.icon}"></i>` : '';
  let date = card.time ? card.time : 'Atenção';
  let figure = card.figure ? `<figure class="card-figure"><img src="${img_path}/${card.figure}"></figure>` : '';
  let video = card.video ? `<figure class="card-video">${card.video}</figure>` : '';

  timelineContainer.innerHTML += `
    <article class="card">
      <section class="card-header">
        ${icon}
        <h2 class="card-title">${date}</h2>
      </section>
      <section class="card-content">
        <p class="card-text">${card.happenings}</p>
        ${figure}
        ${video}
      </section>
    </article>
  `;
});
