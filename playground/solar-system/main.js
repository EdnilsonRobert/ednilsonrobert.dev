import { solarSystem as system } from "./data.js";

const systemContainer = document.querySelector('.solar-system');
const star = system.star;
const planets = system.planets;

let scale = .0001;

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
  planet.style.width = `${itemScale(planets[p].diameter)}rem`;
  planet.style.height = `${itemScale(planets[p].diameter)}rem`;

  if (planets[p].hasOwnProperty('ringDiameter')) {
    let ring = document.createElement('span');
    ring.className = 'ring';
    ring.style.width = `${itemScale(planets[p].ringDiameter)}rem`;
    planet.append(ring);
  }

  systemContainer.append(planet);
}
