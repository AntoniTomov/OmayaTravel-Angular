import { SiteLocale } from '../../../sites/site.types';

/**
 * Stops for the tour map, in travel order. A stop names the itinerary days spent there; a stop
 * with no days is one the group passes through, drawn smaller. A place visited twice (a tour that
 * starts and ends in the same city) appears twice here and is merged into one marker on the map.
 *
 * Every route is checked against the tour's day-by-day itinerary on both sites: overnight stops
 * match the accommodation, pass-through stops are the places a day's text visits on the way, and
 * the Bulgarian names use the spelling of the Amelia itinerary. Out-and-back day trips from an
 * overnight base (Ala Archa, Khamlia) are left off, as they would only draw a spike.
 */
export interface TourRouteStop {
  name: Readonly<Record<SiteLocale, string>>;
  lat: number;
  lng: number;
  days: readonly number[];
  /** Which side of the marker the name sits on, to keep neighbouring names apart. Default top. */
  label?: TourRouteLabel;
  /** How the group reaches the next stop. Flights are drawn dashed. */
  next?: 'road' | 'flight';
}

export type TourRouteLabel = 'top' | 'bottom' | 'left' | 'right';

export type TourRoute = readonly TourRouteStop[];

const MOROCCO_ROUTE: TourRoute = [
  {
    name: { en: 'Casablanca', bg: 'Казабланка' },
    lat: 33.5731,
    lng: -7.5898,
    days: [1],
    label: 'left',
  },
  { name: { en: 'Rabat', bg: 'Рабат' }, lat: 34.0209, lng: -6.8416, days: [], label: 'left' },
  { name: { en: 'Chefchaouen', bg: 'Шефшауен' }, lat: 35.1688, lng: -5.2636, days: [2, 3] },
  {
    name: { en: 'Volubilis', bg: 'Волубилис' },
    lat: 34.0745,
    lng: -5.5536,
    days: [],
    label: 'left',
  },
  { name: { en: 'Meknes', bg: 'Мекнес' }, lat: 33.8935, lng: -5.5473, days: [], label: 'left' },
  { name: { en: 'Fes', bg: 'Фес' }, lat: 34.0181, lng: -5.0078, days: [4, 5], label: 'right' },
  { name: { en: 'Azrou', bg: 'Азру' }, lat: 33.4342, lng: -5.2213, days: [], label: 'left' },
  { name: { en: 'Merzouga', bg: 'Мерзуга' }, lat: 31.0802, lng: -4.0134, days: [6, 7] },
  { name: { en: 'Todra Gorge', bg: 'Клисурата Тодра' }, lat: 31.59, lng: -5.59, days: [] },
  {
    name: { en: 'Boumalne Dades', bg: 'Бумалн Дадес' },
    lat: 31.37,
    lng: -5.99,
    days: [8],
    label: 'top',
  },
  { name: { en: 'Skoura', bg: 'Скура' }, lat: 31.0606, lng: -6.5547, days: [] },
  {
    name: { en: 'Ouarzazate', bg: 'Уарзазат' },
    lat: 30.9189,
    lng: -6.8934,
    days: [],
    label: 'bottom',
  },
  {
    name: { en: 'Aït Ben Haddou', bg: 'Аит Бен Хаду' },
    lat: 31.047,
    lng: -7.1319,
    days: [9],
    label: 'left',
  },
  {
    name: { en: "Tizi n'Tichka", bg: 'Тизи н’Тичка' },
    lat: 31.2867,
    lng: -7.3803,
    days: [],
  },
  {
    name: { en: 'Marrakech', bg: 'Маракеш' },
    lat: 31.6295,
    lng: -7.9811,
    days: [10, 11, 12],
    label: 'left',
  },
];

const KYRGYZSTAN_ROUTE: TourRoute = [
  { name: { en: 'Bishkek', bg: 'Бишкек' }, lat: 42.8746, lng: 74.5698, days: [1, 2] },
  { name: { en: 'Kochkor', bg: 'Кочкор' }, lat: 42.2167, lng: 75.75, days: [], label: 'left' },
  { name: { en: 'Song Kul', bg: 'Сон-Кул' }, lat: 41.85, lng: 75.12, days: [3, 4] },
  { name: { en: 'Kochkor', bg: 'Кочкор' }, lat: 42.2167, lng: 75.75, days: [], label: 'left' },
  {
    name: { en: 'Bokonbaevo', bg: 'Боконбаево' },
    lat: 42.1167,
    lng: 76.9833,
    days: [5],
    label: 'bottom',
  },
  {
    name: { en: 'Skazka Canyon', bg: 'Каньонът Сказка' },
    lat: 42.155,
    lng: 77.36,
    days: [],
    label: 'top',
  },
  { name: { en: 'Barskoon', bg: 'Барскоон' }, lat: 42.145, lng: 77.605, days: [], label: 'bottom' },
  { name: { en: 'Karakol', bg: 'Каракол' }, lat: 42.4907, lng: 78.3936, days: [6] },
  {
    name: { en: 'Altyn Arashan', bg: 'Алтън Арашан' },
    lat: 42.37,
    lng: 78.62,
    days: [7],
    label: 'bottom',
  },
  { name: { en: 'Cholpon-Ata', bg: 'Чолпон-Ата' }, lat: 42.6494, lng: 77.0817, days: [8] },
  {
    name: { en: 'Burana Tower', bg: 'Кулата Бурана' },
    lat: 42.7464,
    lng: 75.25,
    days: [],
    label: 'bottom',
  },
  { name: { en: 'Bishkek', bg: 'Бишкек' }, lat: 42.8746, lng: 74.5698, days: [9, 10] },
];

/** Keyed by tour slug, so the Omaya tour and its Amelia version share one route. */
const TOUR_ROUTES: Readonly<Record<string, TourRoute>> = {
  'morocco-tour': MOROCCO_ROUTE,
  'kyrgyzstan-tour': KYRGYZSTAN_ROUTE,
};

export function findTourRoute(slug: string | null | undefined): TourRoute | undefined {
  return slug ? TOUR_ROUTES[slug] : undefined;
}
