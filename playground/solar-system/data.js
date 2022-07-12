const solarSystem = {
  star: {
    name: 'Sun',
    diameter: 1392700
  },
  planets: [
    {
      name: 'Mercury',
      diameter: 4879.4,
      farFromTheSun: 65978000
    },
    {
      name: 'Venus',
      diameter: 12104,
      farFromTheSun: 108610000
    },
    {
      name: 'Earth',
      diameter: 12742,
      farFromTheSun: 149300000,
      moon: {
        name: 'Moon',
        diameter: 3474.2,
        farFromTheEarth: 384400
      }
    },
    {
      name: 'Mars',
      diameter: 6779,
      farFromTheSun: 242490000
    },
    {
      name: 'Jupiter',
      diameter: 139820,
      farFromTheSun: 758550000
    },
    {
      name: 'Saturn',
      diameter: 116460,
      ringDiameter: 270000,
      farFromTheSun: 1489200000 // 1.4892 * 10**9,
    },
    {
      name: 'Uranus',
      diameter: 50724,
      farFromTheSun: 2955800000 // 2.9558 * 10**9
    },
    {
      name: 'Neptune',
      diameter: 49244,
      farFromTheSun: 4475700000 // 4.4757 * 10**9
    }
  ]
}
export {solarSystem};
