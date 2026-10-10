export type Lang = 'pt' | 'en';
export type Localized = Record<Lang, string>;
export type Verified<T> =
  | ({ status: 'confirmed'; source: string } & T)
  | { status: 'pending'; reason: string };
export const site = {
  name: 'Solgarve',
  email: 'geral@solgarve.pt',
  phones: ['+351 289 323 299', '+351 914 410 132'],
  address: 'Rua da Abelheira, Edifício Solgarve',
  postal: '8125-173 Quarteira',
  region: 'Algarve, Portugal',
  registration: '3498',
  map: 'https://www.google.com/maps/search/?api=1&query=Solgarve%2C%20Rua%20da%20Abelheira%2C%208125-173%20Quarteira',
};
export const routes = {
  home: { pt: '', en: '' },
  apartments: { pt: 'apartamentos', en: 'apartments' },
  services: { pt: 'servicos', en: 'services' },
  gallery: { pt: 'galeria', en: 'gallery' },
  region: { pt: 'descobrir-o-algarve', en: 'discover-the-algarve' },
  contact: { pt: 'contactos', en: 'contacts' },
  privacy: { pt: 'privacidade', en: 'privacy' },
  cookies: { pt: 'cookies', en: 'cookies' },
} as const;
export type PageKey = keyof typeof routes;
export const labels: Record<PageKey, Localized> = {
  home: { pt: 'Início', en: 'Home' },
  apartments: { pt: 'Apartamentos', en: 'Apartments' },
  services: { pt: 'Serviços', en: 'Services' },
  gallery: { pt: 'Galeria', en: 'Gallery' },
  region: { pt: 'Descobrir o Algarve', en: 'Discover the Algarve' },
  contact: { pt: 'Contactos', en: 'Contacts' },
  privacy: { pt: 'Privacidade', en: 'Privacy' },
  cookies: { pt: 'Cookies', en: 'Cookies' },
};
export const nav: PageKey[] = [
  'home',
  'apartments',
  'services',
  'gallery',
  'region',
  'contact',
];
export const url = (lang: Lang, key: PageKey) =>
  `/${lang}/${routes[key][lang] ? routes[key][lang] + '/' : ''}`;
export const copy = {
  pt: {
    contact: 'Fale connosco',
    apartments: 'Conhecer os apartamentos',
    gallery: 'Ver fotografias',
    region: 'Descobrir a região',
    directions: 'Como chegar',
    skip: 'Saltar para o conteúdo',
    menu: 'Abrir menu',
    close: 'Fechar',
    hero: 'O Algarve, ao seu ritmo.',
    intro: 'Apartamentos para viver dias tranquilos, entre a piscina e o mar.',
    introTitle: 'Tempo para abrandar. Espaço para ficar.',
    introText:
      'Há dias que pedem menos planos e mais tempo. Na Solgarve, em Quarteira, encontre o seu espaço entre um mergulho na piscina, uma refeição na varanda e um passeio junto ao mar.',
    footer: 'Dias tranquilos, entre a piscina e o mar.',
    discover: 'Explorar a Solgarve',
  },
  en: {
    contact: 'Get in touch',
    apartments: 'Explore the apartments',
    gallery: 'View photographs',
    region: 'Discover the area',
    directions: 'Get directions',
    skip: 'Skip to content',
    menu: 'Open menu',
    close: 'Close',
    hero: 'The Algarve, at your own pace.',
    intro: 'Apartments for unhurried days, between the pool and the sea.',
    introTitle: 'Time to slow down. Room to stay.',
    introText:
      'Some days call for fewer plans and a little more time. At Solgarve in Quarteira, settle into your own rhythm: a dip in the pool, lunch on the balcony, a walk by the sea.',
    footer: 'Unhurried days, between the pool and the sea.',
    discover: 'Explore Solgarve',
  },
};
