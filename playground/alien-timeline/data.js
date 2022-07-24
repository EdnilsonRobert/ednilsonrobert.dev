const data = [
  {
    time: '4 bilhões - 2 milhões AC',
    happenings: 'Uma raça alienígena, mais tarde apelidada de "Os Engenheiros", visita a Terra e deixa um dos seus para trás. Seu corpo se quebra depois que ele bebe uma gosma negra e seu DNA entra na água recombinado para semear a Terra com os blocos de construção da vida.'
  },
  {
    time: '35.000 AC',
    happenings: 'Evidência dos Engenheiros na Escócia.'
  },
  {
    time: '3.590 AC',
    happenings: 'Evidência suméria da visita dos Engenheiros à Terra.'
  },
  {
    time: '2.470 AC',
    happenings: 'Evidência egípcia da visita dos Engenheiros à Terra.'
  },
  {
    time: '1.540 AC',
    happenings: 'Evidência na Babilônia da visita dos Engenheiros à Terra.'
  },
  {
    time: 'Século 8 AC',
    happenings: 'O mito de Prometeu (sobre um titã que trouxe o homem à vida do barro e roubou o segredo do fogo dos deuses) aparece pela primeira vez na mitologia grega.',
    figure: {
      name: 'prometheus.jpg',
      caption: 'O mito de Prometeu'
    }
  },
  {
    time: '620 AC',
    happenings: 'Evidência maia da visita dos Engenheiros à Terra.'
  },
  {
    time: 'Século 1 DC',
    happenings: 'Os Engenheiros preparam uma "nave da morte", cheia de potes de gosma negra, para enviar à Terra a fim de destruir seus filhos rebeldes, a humanidade. O engenheiro decapitado encontrado pela tripulação do Prometheus em LV-223 foi datado com carbono de aproximadamente 2.000 anos antes.'
  },
  /*
  {
    time: '1.990',
    icon: 'star icon-gold',
    figure: 'peter-weyland.jpg',
    happenings: 'Nasce Peter Weyland, o homem criador da Weyland Corp.'
  },
  {
    time: '2004',
    happenings: 'Aliens e Predadores fazem coisas. Juntos. Se você viu os filmes AvP, então sabe que é melhor seguirmos em frente.'
  },
  {
    time: '2008',
    happenings: 'Criado o Corpo de Fuzileiros Navais do Espaço Europeu (European Space Marine Corps).'
  },
  {
    time: '2012',
    figure: 'weyland-corp.webp,
    happenings: 'Peter Weyland funda a Weyland Corp, a empresa por trás de tantas missões espaciais condenadas.'
  },
  {
    time: '2023',
    happenings: 'Weyland dá uma palestra TED TALK.',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/JK53n8camwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  },
  {
    time: '2024',
    happenings: 'Yutani Corp processa Weyland pela patente do modelo andróide David.'
  },
  {
    time: '2026',
    happenings: 'Weyland adquire a Genentech e privatiza a missão Kepler da NASA, descobrindo no mesmo ano 4.326 planetas biocompatíveis.'
  },
  {
    time: '2029',
    happenings: 'Weyland vence o processo de patente de David contra a Yutani Corp.'
  },
  {
    time: 'Por volta de 2030',
    happenings: 'Weyland cria David, um andróide.'
  },
  {
    time: '2034',
    happenings: 'O advento da viagem mais rápida que a luz.'
  },
  {
    time: '2064',
    happenings: 'A memória de Elizabeth Shaw de seu pai.'
  },
  {
    time: '2065',
    happenings: 'A Biblioteca Memorial Sir Peter Weyland é construída em Washington, DC.'
  },
  {
    time: '2066',
    happenings: 'Sieg and Son possui fábricas em Londres, Nagasaki, Buenos Aires e na fronteira lunar Schickard-Wargentin.'
  },
  {
    time: '2071',
    happenings: 'A família Sieg vende todas as suas ações de volta para a empresa.'
  },
  {
    time: '2079',
    happenings: 'Eventos de Feliz Aniversário, David.'
  },
  {
    time: 'Década de 2080',
    happenings: 'Dra. Elizabeth Shaw e Dr. Charlie Holloway descobrem evidências de mapas estelares das eras babilônica, suméria, maia, egípcia e mesopotâmica.'
  },
  {
    time: '2089',
    happenings: 'Os doutores Elizabeth Shaw e Charles Holloway descobrem outro mapa estelar, ou "convite", em uma caverna na Ilha de Skye, na Escócia, datando de 35.000 anos.'
  },
  {
    time: '2089',
    happenings: 'Peter Weyland dita uma carta relembrando seu mentor Eldon Tyrell e sua competição no campo da inteligência artificial. Mais tarde, ele teria morrido em uma estação acima de Marte.',
    reference: 'https://collider.com/prometheus-blade-runner-connection/'
  },
  {
    time: '2089',
    happenings: 'Eventos de Quiet Eye.'
  },
  {
    time: '2091',
    happenings: 'O USCSS Prometheus, uma nave de exploração espacial construída pela Weyland Corp, deixa a Terra em sua jornada para o LV-223.'
  },
  {
    time: '2091',
    happenings: 'Eventos de Transmissão de Prometheus.'
  },
  {
    time: '2092',
    happenings: 'Ellen Ripley nasce na Terra em 7 de janeiro.'
  },
  {
    time: '2093',
    happenings: 'Todos, exceto dois da tripulação do USCSS Prometheus, são mortos após um encontro no LV-223 com uma espécie alienígena e um Engenheiro revivido. Peter Weyland, um passageiro secreto, está entre os mortos. A nave é destruída e o Dr. Shaw e um David gravemente danificado partem em uma nave dos Engenheiros para encontrar o planeta natal dos Engenheiros.'
  },
  {
    time: '2094',
    happenings: 'Dr. Shaw presumivelmente reconstrói David, e de acordo com o testemunho de David em Alien: Covenant, ele e Shaw chegam ao "Paraíso", um planeta onde vivem milhões de Engenheiros. Ele usa a carga de gosma preta tóxica de sua nave para destruir toda a população.'
  },
  {
    time: '2094',
    happenings: 'Eventos de Alien: Covenant - The Crossing.'
  },
  {
    time: '2103',
    happenings: 'Eventos de Alien: Covenant - Origins e Alien: Covenant - Phobos.'
  },
  {
    time: '2104',
    happenings: 'Eventos de Alien: Covenant - The Last Supper.'
  },
  {
    time: '2104',
    happenings: 'Acontecimentos de Alien: Covenant.'
  },
  {
    time: '2104',
    happenings: 'Eventos de Alien: Covenant - Advent.'
  },
  {
    time: '2104',
    happenings: 'Covenant, uma nave de colonização carregando milhares de humanos e embriões, faz um desvio para um planeta sem nome (Paraíso) em seu caminho para Origae-6. Lá a tripulação descobre David e uma nova espécie, o neomorfo. Após a incursão no planeta, onde a maioria da tripulação é morta, é revelado que David possui alienígenas bio-projetados como os conhecemos. Ele traz seus embriões a bordo junto com os embriões humanos. A nave continua sua jornada para Origae-6.'
  },
  {
    happenings: '* Era do mistério, que uma sequência do Covenant presumivelmente ocuparia *'
  },
  {
    time: '2120',
    happenings: 'A nave espacial Nostromo deixa a Terra.'
  },
  {
    time: '2122',
    happenings: 'Após detectar um sinal, Nostromo pousa no planetóide LV-426. Depois de ser infectado por um alienígena que o abraçou, o oficial executivo Kane morre quando um alienígena explode em seu peito. Ele abate a tripulação um por um, deixando Ripley e Jones, o gato da nave, vivos.'
  },
  {
    time: '2124',
    happenings: 'Estação Sevastopol concluída.'
  },
  {
    time: '2127',
    happenings: 'Nasce Michael Weyland.'
  },
  {
    time: '2137',
    happenings: 'Acontecimentos de Alien: Isolation a bordo da Estação Espacial Sevastopol.'
  },
  {
    time: '2138',
    happenings: 'Acontecimentos de Aliens: Defiance.'
  },
  {
    time: '2140',
    happenings: 'Acontecimentos de Aliens: Resistance.'
  },
  {
    time: '2159',
    happenings: 'Acontecimentos de Alien: Out of the Shadows.'
  },
  {
    time: '2179',
    happenings: 'Após ficar à deriva em estase por 57 anos, Ripley é resgatada, mas retorna ao LV-426 porque o contato com a nova colônia humana lá, Hadley\'s Hope, foi perdido. Chegando com um esquadrão militar, eles encontram o único sobrevivente humano (Newt), face-huggers, um enxame de alienígenas e uma Rainha muito durona. Ripley foge com Newt, Cabo Hicks e o andróide Bishop, e volta para a Terra a bordo da nave Sulaco. Deve haver pelo menos dois face-huggers a bordo, e enquanto eles dormem um engravida Ripley com uma rainha. Um incêndio começa de alguma forma e o pod de vida dos humanos é ejetado, pousando perto de uma colônia penal em Fiorina 161. Apenas Ripley e um outro face-hugger sobrevivem. Ripley mata o alienígena resultante, então morre por suicídio pulando em uma fornalha.'
  },
  {
    time: '2179',
    happenings: 'Ripley é resgatada da Orla Exterior.'
  },
  {
    time: '2179',
    happenings: 'Ripley é levada para a Gateway Station.'
  },
  {
    time: '2179',
    happenings: 'Acontecimentos de Alien: River of Pain.'
  },
  {
    time: '2179',
    happenings: 'Acontecimentos de Alien: The Cold Forge.'
  },
  {
    time: '2179',
    happenings: 'Acontecimentos de Alien 3.'
  },
  {
    time: '2179',
    happenings: 'Acontecimentos de Alien: Colonial Marines'
  },
  {
    time: '2194',
    happenings: 'Michael Weyland morre.'
  },
  {
    time: '2295',
    happenings: 'Eventos de Aliens: Dead Orbit.'
  },
  {
    time: '2379',
    happenings: 'A partir de amostras médicas salvas de Fiorina 161 o United Systems Military clona Ripley (e seu bio-passageiro) por meio de um processo de clonagem como um dos muitos híbridos Xenomorph-Humano conhecidos como Clone Ripley. Eles removeram cirurgicamente a rainha alienígena para criar a espécie, que escapou a bordo do Auriga, matando muitos. Auriga se choca com a atmosfera da Terra e explode. O clone de Ripley, entretanto, foge a bordo do Betty com o android Call.'
  },
  {
    time: '2381',
    happenings: 'Principais acontecimentos de Alien: Resurrection.'
  },
  {
    time: '2497',
    happenings: 'Eventos de Alien: Sea of ​​Sorrows.'
  }
  */
];
export default data;

/*
NOTES:

Alien RPG
O ano é 2183 - pouco mais de três anos desde a destruição da colônia Hadley's Hope no LV-426, o desaparecimento do USS Sulaco e o fechamento da prisão e obras de chumbo na Fiorina 161. A perda da Marinha Colonial de Sulaco junto com esses postos avançados patrocinados pela Weyland-Yutani, e as implicações do jogo sujo corporativo decorrente desses incidentes, criaram um ar de desconfiança entre a empresa e as Américas.
Para adicionar lenha ao fogo, os conflitos entre os setores rivais do espaço aumentaram exponencialmente nos últimos cinco anos. Embora não confirmado, muitos acreditam que Hadley’s Hope foi um local de teste para uma das armas biológicas de Weyland-Yutani e que um estado inimigo enviou um navio de guerra para retirá-la da órbita com o nuclear. Outros acreditam que a empresa está trabalhando com uma nação desonesta para assumir o controle das colônias na fronteira.
A década de 2180 é uma época perigosa para se estar vivo.

REFERENCES:

https://www.digitalspy.com/movies/a844657/alien-timeline-chronology-prometheus/
https://alienanthology.fandom.com/wiki/Alien_Universe_Timeline
https://web.archive.org/web/20200626222858/https://alienanthology.fandom.com/wiki/Alien_Universe_Timeline
*/
