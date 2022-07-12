const lanchessanduiches = {
  category: 'Lanches e sanduíches',
  items: [
    {
      name: 'Bauru caseiro',
      keywords: 'bauru, lanche, sanduíche',
      ingredients: [
        'Pão francês',
        '2 fatias de presunto na chapa',
        'Tomate em rodelas',
        'Orégano',
        'Blend de queijos prato e mussarela',
        'Sal'
      ],
      howTo: [
        'Cortar um pão ao meio e retirar o miolo na parte superior.',
        'Adicionar as fatias de presunto e tomate na parte inferior. Salpicar orégano e salgar levemente.',
        'Derreter os queijos em uma frigideira com água quente e colocá-lo na cova da parte superior do pão.'
      ],
      optionsTitle: 'Opções',
      options: [
        'Assim como na <a href="./receita.html?page=bauru-receita-original">receita original de bauru</a>, adicionar picles de pepino junto ao tomate.'
      ]
    },
    {
      name: 'Bauru (receita original)',
      keywords: 'bauru, lanche, sanduíche',
      ingredients: [
        'Pão francês',
        'Rosbife frio e malpassado',
        'Tomate em rodelas',
        'Picles de pepino em rodelas',
        'Blend de queijos', // [estepe, suíço, prato e gouda]
        'Sal'
      ],
      howTo: [
        'Cortar um pão ao meio e retirar o miolo na parte superior.',
        'Adicionar as fatias de rosbife, tomate e pepino na parte inferior. Salgar levemente.',
        'Derreter os queijos em uma frigideira com água quente e colocá-lo na cova da parte superior do pão.'
      ],
      gallery: {
        videos: [
          {
            youtube: 'https://www.youtube.com/embed/Z4Hjezw7TKg',
            caption: 'Receita original de bauru'
          }
        ]
      }
    }
  ]
}
export {lanchessanduiches};
