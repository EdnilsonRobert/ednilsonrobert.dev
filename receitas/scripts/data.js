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
    category: 'Pratos diversos',
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
    category: 'Tempero caseiro',
    items: [
    ]
  },
  {
    category: 'Lanches e sanduíches',
    items: [
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
    ]
  }
];

export {receitas};
