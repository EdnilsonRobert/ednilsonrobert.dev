/* =============================================================================
    SOLAR SYSTEM
============================================================================= */

import { solarSystem as system } from "./data.js";

// const button = document.querySelector('.js-scroll-button');
const systemContainer = document.querySelector('.solar-system');
const star = system.star;
const planets = system.planets;

const scale = .0001;
const lightSpeed = 299792458 // m/s
const lightMinute = Math.round((lightSpeed * 60) / 1000);
let previousDistance = 0;

let itemScale = (diameter) => {
  return (diameter) * scale;
}

let sun = document.createElement('div');
sun.classList.add(star.name.toLowerCase());
sun.dataset.name = star.name;
sun.style.width = `${itemScale(star.diameter)}rem`;
sun.style.height = `${itemScale(star.diameter)}rem`;

systemContainer.append(sun);

for (let p in planets) {
  let planet = document.createElement('div');
  planet.classList.add('planet', planets[p].name.toLowerCase());
  planet.dataset.name = planets[p].name;

  let realDistance = planets[p].farFromTheSun;
  // let relativeDistance = (realDistance - previousDistance);
  planet.style.width = `${itemScale(planets[p].diameter)}rem`;
  planet.style.height = `${itemScale(planets[p].diameter)}rem`;
  // TODO: [23/07/22]: Adicionar distância correta
  // planet.style.marginTop = `${relativeDistance * scale}rem`;
  planet.style.marginTop = '7.2rem';
  previousDistance = realDistance;

  let info = document.createElement('span');
  info.classList.add('planet-info');
  info.append(document.createTextNode(`${(planets[p].farFromTheSun).toLocaleString('pt-br')} Km distante do Sol.`));
  info.append(document.createElement('br'));
  info.append(document.createTextNode(`${(planets[p].farFromTheSun / lightMinute).toFixed(1)}min para a luz solar chegar.`));
  planet.append(info);

  if (planets[p].hasOwnProperty('ringDiameter')) {
    let ring = document.createElement('span');
    ring.className = 'ring';
    ring.style.width = `${itemScale(planets[p].ringDiameter)}rem`;
    planet.append(ring);
  }

  systemContainer.append(planet);
}

button.addEventListener('click', () => {
  console.log('scroll');
  systemContainer.scrollIntoView({
    block: 'end',
    behavior: 'smooth'
  });
});
