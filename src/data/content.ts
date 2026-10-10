import { type Lang, type Localized, type Verified, url } from './site';
export type PhotoId =
  | 'pool'
  | 'bedroom'
  | 'bedroom2'
  | 'bedroom3'
  | 'living'
  | 'kitchen'
  | 'bathroom'
  | 'balcony'
  | 'terrace'
  | 'reception'
  | 'beach';
export const photos: Record<
  PhotoId,
  {
    alt: Localized;
    category: 'apartments' | 'pools' | 'exterior' | 'region';
    position: string;
  }
> = {
  pool: {
    alt: {
      pt: 'Piscina da Solgarve, com as varandas dos apartamentos ao fundo',
      en: 'Solgarve swimming pool with apartment balconies behind it',
    },
    category: 'pools',
    position: '55% 50%',
  },
  bedroom: {
    alt: {
      pt: 'Quarto com cama de casal e luz natural',
      en: 'Double bedroom with natural light',
    },
    category: 'apartments',
    position: '50% 50%',
  },
  bedroom2: {
    alt: {
      pt: 'Quarto com janela e cama de casal',
      en: 'Bedroom with a window and double bed',
    },
    category: 'apartments',
    position: '50% 50%',
  },
  bedroom3: {
    alt: {
      pt: 'Quarto da Solgarve com cama de casal e espelho',
      en: 'Solgarve bedroom with double bed and mirror',
    },
    category: 'apartments',
    position: '50% 50%',
  },
  living: {
    alt: {
      pt: 'Sala com sofá-cama, mesa de refeições e acesso à varanda',
      en: 'Living room with sofa bed, dining table and balcony access',
    },
    category: 'apartments',
    position: '50% 50%',
  },
  kitchen: {
    alt: {
      pt: 'Cozinha equipada com armários de madeira e zona de refeições',
      en: 'Equipped kitchen with wooden cabinets and dining area',
    },
    category: 'apartments',
    position: '50% 50%',
  },
  bathroom: {
    alt: {
      pt: 'Casa de banho com banheira e lavatório',
      en: 'Bathroom with bathtub and washbasin',
    },
    category: 'apartments',
    position: '50% 50%',
  },
  balcony: {
    alt: {
      pt: 'Vista da varanda para a piscina e os espaços exteriores',
      en: 'View from the balcony towards the pool and outdoor spaces',
    },
    category: 'exterior',
    position: '50% 55%',
  },
  terrace: {
    alt: {
      pt: 'Zona de estar exterior coberta, junto à piscina',
      en: 'Covered outdoor seating area beside the pool',
    },
    category: 'exterior',
    position: '50% 50%',
  },
  reception: {
    alt: {
      pt: 'Receção da Solgarve com balcão e zona de estar',
      en: 'Solgarve reception desk and seating area',
    },
    category: 'exterior',
    position: '50% 50%',
  },
  beach: {
    alt: {
      pt: 'Areal e mar em Quarteira, fotografia publicada pela Solgarve',
      en: 'Sand and sea in Quarteira, photograph published by Solgarve',
    },
    category: 'region',
    position: '50% 50%',
  },
};
export interface Apartment {
  id: string;
  slug: Localized;
  title: Localized;
  short: Localized;
  capacity: Localized;
  description: Localized;
  image: PhotoId;
  gallery: PhotoId[];
  source: string;
  status: 'confirmed';
}
const records: Verified<Omit<Apartment, 'status' | 'source'>>[] = [
  {
    status: 'confirmed',
    id: 'two',
    slug: { pt: 't1-duas-pessoas', en: 'one-bedroom-two-guests' },
    title: { pt: 'T1 para duas pessoas', en: 'One-bedroom apartment for two' },
    short: { pt: 'Tempo a dois.', en: 'Time for two.' },
    capacity: { pt: '2 pessoas', en: '2 guests' },
    description: {
      pt: 'Um espaço para partilhar dias sem pressa. O quarto de casal fica separado da sala, e a cozinha equipada dá liberdade para preparar uma refeição quando lhe apetecer. Na varanda, a piscina faz parte da paisagem.',
      en: 'A place to share unhurried days. The double bedroom is separate from the living room, and the equipped kitchen gives you the freedom to cook when you feel like it. Step onto the balcony for a view of the pool.',
    },
    image: 'bedroom',
    gallery: ['bedroom', 'living', 'kitchen', 'bathroom', 'balcony'],
    source: 'https://www.solgarve.pt/en/apartment/one-bedroom-apartment-2pax/',
  },
  {
    status: 'confirmed',
    id: 'four',
    slug: { pt: 't1-quatro-pessoas', en: 'one-bedroom-four-guests' },
    title: {
      pt: 'T1 para quatro pessoas',
      en: 'One-bedroom apartment for four',
    },
    short: { pt: 'Melhor em boa companhia.', en: 'Better together.' },
    capacity: { pt: '4 pessoas', en: '4 guests' },
    description: {
      pt: 'Para dias de férias em boa companhia. Um quarto de casal e um sofá-cama na sala compõem esta configuração para quatro pessoas. Entre a cozinha, a zona de refeições e a varanda, há espaço para os pequenos rituais das férias.',
      en: 'For holidays in good company. A double bedroom and a sofa bed in the living room make up this configuration for four guests. Between the kitchen, dining area and balcony, there is room for your everyday holiday rituals.',
    },
    image: 'living',
    gallery: ['living', 'bedroom3', 'kitchen', 'bathroom', 'balcony'],
    source: 'https://www.solgarve.pt/en/apartment/one-bedroom-apartment-4pax/',
  },
  {
    status: 'confirmed',
    id: 'family',
    slug: {
      pt: 't1-dois-adultos-duas-criancas',
      en: 'one-bedroom-two-adults-two-children',
    },
    title: {
      pt: 'T1 para dois adultos e duas crianças',
      en: 'One-bedroom apartment for two adults and two children',
    },
    short: { pt: 'Os dias são da família.', en: 'Days made for family.' },
    capacity: {
      pt: '2 adultos + 2 crianças até aos 12 anos',
      en: '2 adults + 2 children aged up to 12',
    },
    description: {
      pt: 'Uma base para viver o Algarve em família. O quarto de casal, a sala com sofá-cama e a cozinha equipada ajudam a manter os seus próprios horários. A varanda orientada para a piscina convida a uma pausa no final do dia.',
      en: 'A base for discovering the Algarve as a family. The double bedroom, living room with sofa bed and equipped kitchen help you keep your own routine. The pool-facing balcony is a lovely place to pause at the end of the day.',
    },
    image: 'bedroom3',
    gallery: ['bedroom3', 'living', 'kitchen', 'bathroom', 'balcony'],
    source:
      'https://www.solgarve.pt/en/apartment/apartment-t1-2-adults-2-children/',
  },
  {
    status: 'pending',
    reason:
      'Fourth listing says two people in its title but three in capacity; excluded until confirmed.',
  },
];
export const apartments = records.filter(
  (a): a is Apartment => a.status === 'confirmed',
);
export const apartmentUrl = (lang: Lang, a: Apartment) =>
  `${url(lang, 'apartments')}${a.slug[lang]}/`;
export const apartmentNote: Localized = {
  pt: 'As opções apresentadas correspondem a configurações de ocupação de apartamentos T1. As fotografias mostram os espaços da Solgarve; a disposição pode variar.',
  en: 'These options describe occupancy configurations of one-bedroom apartments. Photographs show spaces at Solgarve; layouts may vary.',
};
export const operational = {
  poolHours: '09:00–20:00',
  barHours: '09:00–20:00',
  confirmation: 'pending-client-review',
  source: 'https://www.solgarve.pt/en/services/',
};
export const serviceGroups = [
  {
    title: { pt: 'Durante a sua estadia', en: 'During your stay' },
    items: [
      {
        icon: 'reception',
        title: { pt: 'Receção permanente', en: '24-hour reception' },
        text: {
          pt: 'Uma equipa a quem pode colocar as suas questões durante a estadia.',
          en: 'A team to help with your questions during your stay.',
        },
      },
      {
        icon: 'clean',
        title: { pt: 'Limpeza diária', en: 'Daily cleaning' },
        text: {
          pt: 'O cuidado diário dos espaços faz parte da estadia.',
          en: 'Daily care of your space is part of your stay.',
        },
      },
      {
        icon: 'wifi',
        title: {
          pt: 'Wi-Fi na receção e no bar',
          en: 'Wi-Fi in reception and the bar',
        },
        text: {
          pt: 'Acesso gratuito nestas zonas comuns. Não é anunciada cobertura nos apartamentos.',
          en: 'Free access in these shared areas. Wi-Fi coverage is not advertised in the apartments.',
        },
      },
      {
        icon: 'air',
        title: { pt: 'Climatização no quarto', en: 'Bedroom air conditioning' },
        text: {
          pt: 'Ar condicionado no quarto e televisão por satélite no apartamento.',
          en: 'Air conditioning in the bedroom and satellite television in the apartment.',
        },
      },
    ],
  },
  {
    title: { pt: 'Ao ar livre', en: 'Out in the open' },
    items: [
      {
        icon: 'pool',
        title: {
          pt: 'Piscinas para adultos e crianças',
          en: 'Adult and children’s pools',
        },
        text: {
          pt: `Duas piscinas separadas, nos espaços exteriores. Horário anunciado: ${operational.poolHours}.`,
          en: `Separate pools in the outdoor grounds. Published opening hours: ${operational.poolHours}.`,
        },
      },
      {
        icon: 'bar',
        title: { pt: 'Bar da piscina', en: 'Pool bar' },
        text: {
          pt: `Uma pausa junto à água. Horário anunciado: ${operational.barHours}.`,
          en: `Take a break beside the water. Published opening hours: ${operational.barHours}.`,
        },
      },
      {
        icon: 'grill',
        title: { pt: 'Churrasqueira partilhada', en: 'Shared barbecue' },
        text: {
          pt: 'Um espaço comum para cozinhar ao ar livre. Consulte a equipa sobre a utilização.',
          en: 'A shared space for outdoor cooking. Ask the team about using it.',
        },
      },
    ],
  },
  {
    title: { pt: 'Serviços mediante pedido', en: 'Available on request' },
    items: [
      {
        icon: 'parking',
        title: { pt: 'Garagem e berço', en: 'Garage and cot' },
        text: {
          pt: 'Informe-se sobre a garagem e peça um berço com antecedência. Sujeitos a confirmação de disponibilidade e condições.',
          en: 'Ask about the garage and request a cot in advance. Availability and conditions must be confirmed.',
        },
      },
      {
        icon: 'transfer',
        title: { pt: 'Transfers e passeios', en: 'Transfers and outings' },
        text: {
          pt: 'A equipa pode dar informações sobre transfers, passeios de barco e bilhetes para parques. Disponibilidade e custos a confirmar.',
          en: 'The team can advise on transfers, boat trips and park tickets. Availability and costs must be confirmed.',
        },
      },
      {
        icon: 'care',
        title: {
          pt: 'Massagens e babysitting',
          en: 'Massages and babysitting',
        },
        text: {
          pt: 'Serviços com marcação prévia, sujeitos a disponibilidade e condições. Fale com a equipa.',
          en: 'Services by prior appointment, subject to availability and conditions. Please ask the team.',
        },
      },
    ],
  },
];
export const destinations = [
  {
    name: 'Quarteira',
    tag: { pt: 'Praia e passeio marítimo', en: 'Beach and promenade' },
    text: {
      pt: 'Leve o dia até ao mar. O areal de Quarteira e a marginal convidam a caminhar, parar numa esplanada e voltar sem pressa.',
      en: 'Let the day lead you to the sea. Quarteira’s beach and promenade invite you to walk, stop at a café and wander back at your own pace.',
    },
    link: 'https://www.visitportugal.com/pt-pt/content/praia-de-quarteira',
  },
  {
    name: 'Vilamoura',
    tag: { pt: 'Uma volta pela marina', en: 'A walk around the marina' },
    text: {
      pt: 'Um passeio junto aos barcos, uma pausa à mesa e outro lado da costa algarvia para descobrir.',
      en: 'A stroll beside the boats, a pause for a meal and another side of the Algarve coast to discover.',
    },
    link: 'https://marinadevilamoura.com/',
  },
  {
    name: 'Loulé',
    tag: { pt: 'O mercado e a cidade', en: 'The market and the town' },
    text: {
      pt: 'Entre no Mercado Municipal e continue pelas ruas de Loulé. Uma sugestão para conhecer a vida da cidade para lá da praia.',
      en: 'Step inside the Municipal Market and continue through Loulé’s streets. A chance to discover local life away from the beach.',
    },
    link: 'https://www.lcglobal.pt/mercado/mercado-municipal/mercado-municipal-3',
  },
  {
    name: 'Aquashow',
    tag: {
      pt: 'Um dia diferente em família',
      en: 'A different kind of family day',
    },
    text: {
      pt: 'Uma sugestão para quem gosta de parques aquáticos. Consulte diretamente o parque para informações atualizadas sobre funcionamento e acesso.',
      en: 'An idea for water park lovers. Check directly with the park for current opening and admission information.',
    },
    link: 'https://aquashowpark.com/',
  },
];
