/* =============================================================================
    CADERNO DE RECEITAS
    JS: DATA
============================================================================= */

const receitas = [
  {
    category: 'Arroz',
    items: [
    ]
  },
  {
    category: 'Feijão',
    items: [
    ]
  },
  {
    category: 'Macarrão oriental',
    items: [
    ]
  },
  {
    category: 'Macarrão',
    items: [
      {
        name: 'Macarrão ao curry',
        keywords: 'macarrão, penne, curry',
        ingredients: [
          '200g de macarrão do tipo penne',
          '1/2 colher de sopa de óleo de gergelim',
          '1 colher de sopa de azeite',
          '50g de cebola roxa',
          '3 dentes de alho picados',
          '1 colher de sopa de curry',
          '50g de pimentão cortado em tirar pequenas [1]',
          '1/4 de xícara de amêndoas picadas',
          'Sal e pimenta-do-reino a gosto'
        ],
        howTo: [
          'Cozinhar o macarrão.',
          'Aquecer o óleo de gergelim e azeite em outra panela.',
          'Adicionar a cebola e refogar por cerca de 3 a 4min para dourar.',
          'Adicionar alho e refogar por cerca de 1min para dourar.',
          'Adicionar pimentão e curry e mexer até que o curry esteja bem incorporado.',
          'Adicionar o macarrão e amendoas e mexer. Pode ser necessário adicionar água do cozimento do macarrão para manter o macarrão úmido nessa etapa.',
          'Acertar o sal e adicionar pimenta-do-reino.'
        ],
        hints: [
          'O pimentão pode ser uma mistura de pimentão amarelo, vermelho e verde ou apenas um deles.'
        ]
      },
    ]
  },
  {
    category: 'Molho para massas',
    items: [
    ]
  },
  {
    category: 'Carne bovina',
    items: [
      {
        name: 'Contra-filé com ervas',
        keywords: 'contra-filé, grelhado, ervas',
        ingredients: [
          '1 bife de contra-filé',
          '1 fio de azeite',
          '1 1/2 colher de manteiga',
          '1 dente de alho amassado',
          'Tomilho desfolhado',
          'Sal e pimenta-do-reino a gosto'
        ],
        howTo: [
          'Temperar o contra-filé com sal e pimenta-do-reino e deixar descansar por 10min.',
          'Levar uma frigideira ao fogo e adicionar um fio de azeite assim que a frigideira estiver bem aquecida.',
          'Adicionar a carne à frigideira assim que o azeite estiver aquecido.',
          'Selar a carne até que o lado da superfície "comece a suar" e então virá-la.',
          'Adicionar a manteiga à frigideira logo após virar a carne e esperar alguns segundos até que a manteiga comece a derreter.',
          'Adicionar o alho e as folhas de tomilho antes que a manteiga derreta totalmente. Mexer até aromatizar a manteiga.',
          'Regar a carne com a manteiga aromatizada até chegar ao ponto desejado da carne.'
        ]
      },
    ]
  },
  {
    category: 'Carne suína',
    items: [
      {
        name: 'Costelinha de porco assada',
        keywords: 'costelinha, porco, assado',
        ingredients: [
          'Uma peça de 1/2Kg de costelinha de porco',
          '[Soro] 1 litro de água',
          '[Soro] 2 colheres de sopa de sal',
          '[Soro] 1 colher de sopa de açúcar',
          '[Suco] Suco de 1 limão',
          '[Suco] 1/4 de fatia de abacaxi (sem o miolo) cortada em cubos',
          '[Tempero] 1 colher de sopa de azeite',
          '[Tempero] 2 colheres de chá de sal',
          '[Tempero] 3 pimentas bode amassadas',
          '[Tempero] 4 dentes de alho triturados',
          '[Tempero] Pimenta-do-reino a gosto',
          '[Tempero] Alecrim fresco e folhas-de-louro',
          '[Batatas] 2 batatas médias cortadas em 4 gomos cada uma',
          '[Batatas] 1/2 colher de azeite',
          '[Batatas] 1/2 colher de chá de sal',
          '[Batatas] 1/2 colher de chá de lemon pepper'
        ],
        howTo: [
          'Fazer 1 litro de soro com a água, sal e açúcar em um recipiente que caiba a costelinha mergulhada.',
          'Mergulhar a costelinha totalmente e deixar hidratar na geladeira por 12h. Se necessário, aumente a quantidade de soro para cobrir a carne.',
          'Remover a carne do soro e deixar escorrer.',
          'Fazer um corte não muito profundo na carne entre cada osso da costelinha para evitar que a costelinha "enrrugue" ao assar.',
          'Bater o suco com limão e abacaxi, banhar os dois lados da carne com o suco e deixar descansar por 10min.',
          'Misturar o azeite, sal, pimenta bode, alho e pimenta-do-reino para temperar.',
          'Temperar os dois lados da carne e deixar descansar por 15min.',
          'Temperar as batatas com azeite, sal e lemon pepper em um recipiente e deixar descansar por 15min.',
          'Untar uma assadeira com manteiga, adicionar a carne ao centro e espalhar as batatas temperadas ao redor da carne.',
          'Regar a carne com o restante do suco de limão e abacaxi.',
          'Salpicar alecrim e adicionar algumas folhas-de-louro.',
          'Cobrir a assadeira com papel alumínio deixando a face brilhante voltada para a carne.',
          'Levar ao forno pré aquecido a 230⁰C.'
        ]
      },
    ]
  },
  {
    category: 'Frango',
    items: [
      {
        name: 'Frango desfiado',
        keywords: 'frango, desfiado, refogado',
        ingredients: [
          '3 colheres de óleo',
          '1/2 Kg de frango',
          '1 colher de chá de açafrão',
          '1 tomate bem picado',
          'Um pouco de cheiro verde picado',
          'Sal e pimenta-do-reino a gosto'
        ],
        howTo: [
          'Levar uma panela de pressão ao fogo alto, esquentar o azeite, adicionar o frango e mexer até dourar.',
          'Adicionar água até cobrir. Após pegar pressão, baixar o fogo e cozinhar por 20min.',
          'Desfiar o frango assim que estiver pronto [1].',
          'Levar uma panela ao fogo e refogar a cebola até dourar.',
          'Adicionar alho e refogar até dourar.',
          'Adicionar frango desfiado.',
          'Temperar com açafrão e pimenta-do-reino a gosto.',
          'Adicionar o tomate e acertar o sal. Refogar mexendo.',
          'Desligar o fogo, adicionar o cheiro verde e misturar.'
        ],
        optionsTitle: 'Opções',
        options: [
          'Adicionar milho refogado junto aos tomates.',
          'Finalizar cobrindo com azeitonas e cheiro verde.'
        ],
        notes: [
          '[1] Para desfiar facilmente peito de frango ou sassami basta colocar o frango cozido em um recipiente bem fechado e chacoalhar bem por 1~2min.'
        ]
      },
    ]
  },
  {
    category: 'Peixe',
    items: [
    ]
  },
  {
    category: 'Ovos',
    items: [
      {
        name: 'Omelete',
        keywords: 'ovo, omelete',
        ingredients: [
          '3 ovos',
          '3 colheres de sopa de leite',
          '1 colher de sopa de manteiga',
          'Sal e pimenta-do-reino a gosto'
        ],
        howTo: [
          'Bater os ovos junto ao leite.',
          'Temperar os ovos batidos com sal e pimenta-do-reino.',
          'Aquecer uma frigideira e adicionar a manteiga. Mexer sem queimar a manteiga.',
          'Adicionar os ovos  e mexer as bordas de fora para o centro até que os ovos não escorram mais para as laterais.',
          'Adicionar o recheio desejado e fechar a omelete.'
        ],
        optionsTitle: 'Opções de recheio',
        options: [
          'Presunto e queijo branco picados, folhas de manjericão',
          'Tomates cereja cortados em rodelas, mussarela ralada, orégano',
          'Blend de queijos (prato, mussarela e parmesão)',
          'Tiras de bacon tostado para decorar'
        ]
      },
      {
        name: 'Ovos de codorna em conserva',
        keywords: 'ovo, codorna, conserva',
        ingredients: [
          '1 caixa de ovos de codorna (30 ovos)',
          '1 colher de sopa de salsinha bem picada',
          '1/2 colher de chá de pimenta calabresa',
          '1/2 colher de chá de orégano',
          '1/2 colher de chá de sal',
          '1 colher de sopa de vinagre',
          '2 colheres de sopa de azeite'
        ],
        howTo: [
          'Depositar os ovos em uma vasilha com água para verificar aqueles que estão estragados (os que boiarem).',
          'Mover os ovos cuidadosamente até uma panela, adicionar água até cobrir e adicionar um pouco de vinagre.',
          'Levar ao fogo alto.',
          'Mexer cuidadosamente os ovos até a água ferver para centralizar as gemas.',
          'Baixar o fogo e deixar cozinhar por 12min assim que água ferver.',
          'Retirar os ovos e colocar em água fria com gelo por 3min.',
          'Depositar a salsinha no fundo do pote que armazenará os ovos.',
          'Adicionar a pimenta calabresa, orégano, sal, vinagre e azeite.',
          'Descascar os ovos [1] e depositá-los sobre os temperos.',
          'Adicionar água filtrada [2] até cobrir os ovos no recipiente.',
          'Mexer bem para misturar e armazenar em geladeira.'
        ],
        optionsTitle: 'Opções para a conserva',
        options: [
          'Junto aos demais temperos da conserva também é possível adicionar alho desidratado e pimenta-do-reino em grãos.'
        ],
        notes: [
          '[1] Para descascar os ovos com mais facilidade basta espalmar cada ovo sobre uma tábua de corte e deslizar a mão em movimento de vai-e-vem fazendo uma leve pressão até que a casca comece a romper.',
          '[2] Caso não tenha água filtrada basta ferver a água.',
        ]
      },
    ]
  },
  {
    category: 'Saladas',
    items: [
    ],
  },
  {
    category: 'Molhos para saladas',
    items: [
      {
        name: 'Caesar Dressing (1)',
        keywords: 'caesar, molho, anchova',
        ingredients: [
          '6 filés de anchovas picados sem o óleo',
          '2 dentes de alho picados',
          '2 colheres de sopa de suco de limão',
          '2 colheres de sopa de maionese',
          'Azeite',
          '2 colheres de sopa de água',
          'Sal'
        ],
        howTo: [
          'Bater no liquidificador as anchovas, alho, suco de limão, maionese e sal.',
          'Com o liquidificador em movimento, adicionar o azeite em fio até emulsificar.',
          'Juntar a água e bater bem.',
          'Servir sobre a salada.'
        ],
        curiosities: [
          'Molhos para saladas são, via de regra, criações de chefs, inclusive as variações do Caesar Dressing.',
          'Essa receita é básica e complementa a salada que é feita com alface americana rasgada, queijo parmesão ralado e croutons.',
          'Além desses ingredientes, podem ser adicionados outros temperos como molho worcestershire, ovos, cebolinhas, ervas, etc.',
          'Segundo a literatura a respeito, fala-se que o molho foi criado no Caesar Restaurant, em Tijuana, Baja California, México.',
          'A versão original é sem maionese, vinagre no lugar do limão, o alho é passado em uma saladeira de madeira e é feita uma pasta de parmesão com as "acciughe".'
        ]
      },
      {
        name: 'Caesar Dressing (2)',
        keywords: 'caesar, molho, anchova',
        ingredients: [
          '2 filés de anchova',
          '1 dente de alho',
          '1/2 colher de chá de mostarda',
          '1 colher de chá de molho inglês',
          '1 colher de sopa de suco de limão',
          '3 colheres de sopa de vinagre',
          '4 colheres de sopa de maionese',
          '60ml de azeite',
          '100ml de óleo de milho',
          'Sal e pimenta-do-reino a gosto'
        ],
        howTo: [
          'Bater por 1min no liquidicador as anchovas, alho, mostarda, molho inglês, suco de limão e vinagre.',
          'Adicionar a maionese e bater por mais 1min.',
          'Continuar batendo e adicionar fio a fio o azeite e óleo de milho até emulsionar.',
          'Adicionar pimenta-do-reino, acertar o sal e reservar.'
        ],
        curiosities: [
          'Molhos para saladas são, via de regra, criações de chefs, inclusive as variações do Caesar Dressing.',
          'Essa receita é básica e complementa a salada que é feita com alface americana rasgada, queijo parmesão ralado e croutons.',
          'Além desses ingredientes, podem ser adicionados outros temperos como molho worcestershire, ovos, cebolinhas, ervas, etc.',
          'Segundo a literatura a respeito, fala-se que o molho foi criado no Caesar Restaurant, em Tijuana, Baja California, México.',
          'A versão original é sem maionese, vinagre no lugar do limão, o alho é passado em uma saladeira de madeira e é feita uma pasta de parmesão com as "acciughe".'
        ]
      },
      {
        name: 'Molho italiano',
        keywords: 'molho, italiano, salada',
        ingredients: [
          '1 xícara de chá de azeite',
          '6 colheres de sopa de vinagre branco',
          '1 1/2 colher de chá de orégano',
          '3/4 colher de chá de pimenta calabresa',
          '1 1/2 colher de chá de alho em pó (ou desidratado)',
          'Sal a gosto'
        ],
        howTo: [
          'Juntar todos os ingredientes em um recipiente e bater com fouet até misturar bem.'
        ],
        optionsTitle: 'Opções',
        options: [
          'Testar a receita adicionando 1 colher de chá de lemon pepper.'
        ],
        hints: [
          'A recomendação é guardar na geladeira por no máximo 15 dias.'
        ]
      },
    ]
  },
  {
    category: 'Vegetais',
    items: [
    ]
  },
  {
    category: 'Acompanhamentos',
    items: [
    ]
  },
  {
    category: 'Tempero caseiro',
    items: [
      {
        name: 'Tempero alho e cebola',
        keywords: 'tempero, alho, cebola',
        ingredients: [
          '150g de dentes de alho',
          '120g de cebola picada',
          '2 colheres de chá de sal',
          '2 colheres de sopa de azeite'
        ],
        howTo: [
          'Triturar o alho e cebola em um processador até ficarem em pedaços bem pequenos.',
          'Adicionar o sal e o azeite e triturar no processador até obter uma pasta.',
          'Guardar em pote fechado e armazenar na geladeira.'
        ],
        optionsTitle: 'Opções',
        options: [
          'Adicionar um pouco de cheiro verde picado junto ao azeite.'
        ]
      },
    ]
  },
  {
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
          'Água',
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
        // Bauru original: https://www.youtube.com/watch?v=Z4Hjezw7TKg
        name: 'Bauru (receita original)',
        keywords: 'bauru, lanche, sanduíche',
        ingredients: [
          'Pão francês',
          'Rosbife frio e malpassado',
          'Tomate em rodelas',
          'Picles de pepino em rodelas',
          'Blend de queijos', // [estepe, suíço, prato e gouda]
          'Água',
          'Sal'
        ],
        howTo: [
          'Cortar um pão ao meio e retirar o miolo na parte superior.',
          'Adicionar as fatias de rosbife, tomate e pepino na parte inferior. Salgar levemente.',
          'Derreter os queijos em uma frigideira com água quente e colocá-lo na cova da parte superior do pão.'
        ]
        // gallery: [
        //   '<iframe style="width:100%;" src="https://www.youtube.com/embed/Z4Hjezw7TKg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        // ]
      },
    ]
  },
  {
    category: 'Geleias',
    items: [
      {
        name: 'Geleia de maracujá',
        keywords: 'geleia, maracujá',
        ingredients: [
          '2 maracujás',
          '1/2 xícara de açúcar demerara',
          '1/2 xícara de água'
        ],
        howTo: [
          'Remover a polpa dos maracujás e levar a uma panela.',
          'Adicionar o açúcar e água e levar a panela ao fogo baixo.',
          'Mexer até alcançar o ponto de geleia.'
        ],
      },
      {
        name: 'Geleia de uva',
        keywords: 'geleia, uva',
        ingredients: [
          '500g de uva sem sementes',
          '100g de açúcar demerara',
          '10ml de limão',
          'Cravo e canela a gosto'
        ],
        howTo: [
          'Depositar as uvas na água com vinagre por 5min.',
          'Escorrer as uvas e cortá-las. Remover as sementes se estiver usando uvas com semente.',
          'Levar as uvas cortadas até uma panela e cozinhar por 20min. Apertar as uvas com uma colher de pau durante o cozimento para soltar as cascas.',
          'Escorrer e levar as uvas para bater no liquificador até obter um caldo.',
          'Voltar as uvas para a panela e juntar o açúcar, limão, cravo e canela.',
          'Mexer por 10 a 15min até alcançar o ponto de geleia.'
        ]
      },
    ]
  },
  {
    category: 'Bolos',
    items: [
      {
        name: 'Bolo de cenoura',
        keywords: 'bolo, cenoura, chocolate',
        ingredients: [
          '2 xícaras de farinha peneirada',
          '1 colher de sopa de fermento em pó',
          '1/2 colher de chá de sal',
          '3 cenouras médias picadas (aprox. 400g)',
          '4 ovos',
          '1 1/2 xícara de açúcar',
          '1 xícara de óleo'
        ],
        howTo: [
          'Misturar todos os ingredientes secos: farinha de trigo, fermento e sal. Misturar cuidadosamente para manter os ingredientes aerados.',
          'Bater no liquidicador por 5min a cenoura, ovos, açúcar e óleo.',
          'Em um recepiente juntar a massa batida e os ingredientes secos.',
          'Misturar tudo cautelosamente (não bater).',
          'Depositar a massa em uma assadeira untada com manteiga e farinha de trigo.',
          'Levar ao forno pré aquecido a 180⁰C por 30~35min.'
        ],
        toppingTitle: 'Cobertura de chocolate',
        topping: [
          '1/2 xícara de chocolate em pó (50% cacau)',
          '1/3 xícara de açúcar',
          '1/3 xícara de água',
          '1 colher de sopa de manteiga'
        ],
        toppingHowTo: [
          'Adicionar o chocolate e açúcar a uma panela e misturar bem os ingredientes.',
          'Adicionar a água e manteiga. Levar ao fogo médio.',
          'Mexer com fouet por 5min até alcançar o ponto de calda de cobertura.'
        ]
      },
      {
        name: 'Bolo Sococo',
        keywords: 'bolo, coco',
        ingredients: [
          '4 ovos médios',
          '1 lata de leite condensado',
          '100g de coco ralado Sococo',
          '1/2 colher de chá de essência de baunilha',
          '1 colher de sopa de fermendo em pó'
        ],
        howTo: [
          'Misturar bem os ovos, meia caixa de leite condensado e metade do coco ralado.',
          'Adicionar a baunilha, o restante do leite condensado e do coco ralado e misturar bem.',
          'Adicionar o fermento e misturar cuidadosamente sem bater.',
          'Colocar a massa em uma forma untada com manteiga e farinha de trigo.',
          'Levar ao forno pré aquecido a 160⁰C por 25~35min.'
        ],
      },
    ]
  },
  {
    category: 'Sobremesas',
    items: [
    ]
  },
  {
    category: 'Doces',
    items: [
    ]
  },
  {
    category: 'Sucos',
    items: [
      {
        name: 'Suco de maracujá',
        keywords: 'suco, maracujá',
        ingredients: [
          '2 maracujás (aprox. 250g)',
          '1 laranja sem a casca e cortada em pedaços pequenos',
          'Suco de 1 limão',
          '1/3 de xícara de açúcar'
        ],
        howTo: [
          'Levar a polpa dos maracujás a um liquidificador e bater até triturar as sementes.',
          'Coar o maracujá batido para remover as sementes trituradas e levar o suco de volta ao liquidificador.',
          'Adicionar a laranja, limão e açúcar.',
          'Bater até a laranja não estar mais em pedaços.'
        ],
        optionsTitle: 'Opções',
        options: [
          'Adicionar algumas folhas de hortelã junto à laranja'
        ]
      },
    ]
  },
  {
    category: 'Café',
    items: [
    ]
  },
  {
    category: 'Drinks',
    items: [
      {
        name: 'Cuba libre',
        keywords: 'drink, cuba, libre',
        ingredients: [
          '60ml de rum',
          '4 fatias de limão',
          '15ml de suco de limão',
          '200ml de refrigerante de cola',
          'Gelo'
        ],
        howTo: [
          'Adicionar o rum a um copo do tipo Long Drink.',
          'Adicionar três fatias de limão',
          'Preencher o copo com gelo e adicionar o suco de limão.',
          'Adicionar refrigerante até quase preencher o copo.',
          'Posicionar uma fatia de limão na borda do copo para enfeitar.'
        ]
      },
    ]
  }
];

export {receitas};
