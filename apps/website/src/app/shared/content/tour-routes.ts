import { SiteLocale } from '../../../sites/site.types';

/**
 * Stops for the tour map, in travel order. A stop names the itinerary days spent there; a stop
 * with no days is one the group passes through, drawn smaller. A place visited twice (a tour that
 * starts and ends in the same city) appears twice here and is merged into one marker on the map.
 *
 * Every route is checked against the tour's day-by-day itinerary on both sites: overnight stops
 * match the accommodation, pass-through stops are the places a day's text visits on the way, and
 * the Bulgarian names use the spelling of the Amelia itinerary. A headline sight visited on an
 * out-and-back day trip (Ellora, Deadvlei) is a side trip: drawn as a small named point with no
 * route line, which would only draw a spike there and back. Remote desert camps and lodges with
 * no exact place in the itinerary sit at the named landmark, within a few kilometres.
 */
export interface TourRouteStop {
  name: Readonly<Record<SiteLocale, string>>;
  lat: number;
  lng: number;
  days: readonly number[];
  /** How the group reaches the next stop. Flights are drawn dashed. */
  next?: 'road' | 'flight';
  /** A day trip from the previous overnight stop: shown, but left out of the route line. */
  sideTrip?: true;
}

export type TourRoute = readonly TourRouteStop[];

const MOROCCO_ROUTE: TourRoute = [
  { name: { en: 'Casablanca', bg: 'Казабланка' }, lat: 33.5731, lng: -7.5898, days: [1] },
  { name: { en: 'Rabat', bg: 'Рабат' }, lat: 34.0209, lng: -6.8416, days: [] },
  { name: { en: 'Chefchaouen', bg: 'Шефшауен' }, lat: 35.1688, lng: -5.2636, days: [2, 3] },
  { name: { en: 'Volubilis', bg: 'Волубилис' }, lat: 34.0745, lng: -5.5536, days: [] },
  { name: { en: 'Meknes', bg: 'Мекнес' }, lat: 33.8935, lng: -5.5473, days: [] },
  { name: { en: 'Fes', bg: 'Фес' }, lat: 34.0181, lng: -5.0078, days: [4, 5] },
  { name: { en: 'Azrou', bg: 'Азру' }, lat: 33.4342, lng: -5.2213, days: [] },
  { name: { en: 'Merzouga', bg: 'Мерзуга' }, lat: 31.0802, lng: -4.0134, days: [6, 7] },
  { name: { en: 'Todra Gorge', bg: 'Клисурата Тодра' }, lat: 31.59, lng: -5.59, days: [] },
  { name: { en: 'Boumalne Dades', bg: 'Бумалн Дадес' }, lat: 31.37, lng: -5.99, days: [8] },
  { name: { en: 'Skoura', bg: 'Скура' }, lat: 31.0606, lng: -6.5547, days: [] },
  { name: { en: 'Ouarzazate', bg: 'Уарзазат' }, lat: 30.9189, lng: -6.8934, days: [] },
  { name: { en: 'Aït Ben Haddou', bg: 'Аит Бен Хаду' }, lat: 31.047, lng: -7.1319, days: [9] },
  { name: { en: "Tizi n'Tichka", bg: 'Тизи н’Тичка' }, lat: 31.2867, lng: -7.3803, days: [] },
  { name: { en: 'Marrakech', bg: 'Маракеш' }, lat: 31.6295, lng: -7.9811, days: [10, 11, 12] },
];

const KYRGYZSTAN_ROUTE: TourRoute = [
  { name: { en: 'Bishkek', bg: 'Бишкек' }, lat: 42.8746, lng: 74.5698, days: [1, 2] },
  { name: { en: 'Kochkor', bg: 'Кочкор' }, lat: 42.2167, lng: 75.75, days: [] },
  { name: { en: 'Song Kul', bg: 'Сон-Кул' }, lat: 41.85, lng: 75.12, days: [3, 4] },
  { name: { en: 'Kochkor', bg: 'Кочкор' }, lat: 42.2167, lng: 75.75, days: [] },
  { name: { en: 'Bokonbaevo', bg: 'Боконбаево' }, lat: 42.1167, lng: 76.9833, days: [5] },
  { name: { en: 'Skazka Canyon', bg: 'Каньонът Сказка' }, lat: 42.155, lng: 77.36, days: [] },
  { name: { en: 'Barskoon', bg: 'Барскоон' }, lat: 42.145, lng: 77.605, days: [] },
  { name: { en: 'Karakol', bg: 'Каракол' }, lat: 42.4907, lng: 78.3936, days: [6] },
  { name: { en: 'Altyn Arashan', bg: 'Алтън Арашан' }, lat: 42.37, lng: 78.62, days: [7] },
  { name: { en: 'Cholpon-Ata', bg: 'Чолпон-Ата' }, lat: 42.6494, lng: 77.0817, days: [8] },
  { name: { en: 'Burana Tower', bg: 'Кулата Бурана' }, lat: 42.7464, lng: 75.25, days: [] },
  { name: { en: 'Bishkek', bg: 'Бишкек' }, lat: 42.8746, lng: 74.5698, days: [9, 10] },
];

// The group meets in Algiers and flies to Djanet and back; the desert camps are wild camps at
// the named dunes and wadis of the Tadrart Rouge.
const ALGERIA_ROUTE: TourRoute = [
  {
    name: { en: 'Algiers', bg: 'Алжир' },
    lat: 36.7538,
    lng: 3.0588,
    days: [1],
    next: 'flight',
  },
  { name: { en: 'Djanet', bg: 'Джанет' }, lat: 24.5542, lng: 9.4846, days: [1] },
  { name: { en: 'El Berdj', bg: 'Ел Бердж' }, lat: 24.15, lng: 10.3, days: [2] },
  { name: { en: 'Moul Naga', bg: 'Мул Нага' }, lat: 23.95, lng: 10.55, days: [3] },
  { name: { en: 'Tamzdiga', bg: 'Тамздига' }, lat: 23.92, lng: 10.65, days: [] },
  { name: { en: 'Tin Merzouga', bg: 'Тин Мерзуга' }, lat: 23.98, lng: 10.72, days: [4] },
  { name: { en: 'Adjlati', bg: 'Аджлати' }, lat: 24.1, lng: 10.62, days: [5] },
  { name: { en: 'Adaik', bg: 'Адаик' }, lat: 24.3, lng: 10.2, days: [6] },
  { name: { en: 'Wadi Essendilene', bg: 'Уади Есендилен' }, lat: 24.7, lng: 9.9, days: [] },
  { name: { en: 'Erg Admer', bg: 'Ерг Адмер' }, lat: 24.85, lng: 9.6, days: [7] },
  { name: { en: 'Tikobawin Arch', bg: 'Арката Тикобауин' }, lat: 24.78, lng: 9.68, days: [] },
  {
    name: { en: 'Djanet', bg: 'Джанет' },
    lat: 24.5542,
    lng: 9.4846,
    days: [8],
    next: 'flight',
  },
  { name: { en: 'Algiers', bg: 'Алжир' }, lat: 36.7538, lng: 3.0588, days: [9] },
];

const DECCAN_ROUTE: TourRoute = [
  { name: { en: 'Mumbai', bg: 'Мумбай' }, lat: 19.076, lng: 72.8777, days: [1, 2, 3] },
  {
    name: { en: 'Aurangabad', bg: 'Аурангабад' },
    lat: 19.8762,
    lng: 75.3433,
    days: [4, 5],
    next: 'flight',
  },
  { name: { en: 'Ellora', bg: 'Елора' }, lat: 20.0258, lng: 75.178, days: [], sideTrip: true },
  { name: { en: 'Ajanta', bg: 'Аджанта' }, lat: 20.5519, lng: 75.7033, days: [], sideTrip: true },
  {
    name: { en: 'Mumbai', bg: 'Мумбай' },
    lat: 19.076,
    lng: 72.8777,
    days: [6],
    next: 'flight',
  },
  { name: { en: 'Jabalpur', bg: 'Джабалпур' }, lat: 23.1815, lng: 79.9864, days: [] },
  { name: { en: 'Kanha', bg: 'Канха' }, lat: 22.277, lng: 80.611, days: [7, 8, 9] },
  {
    name: { en: 'Jabalpur', bg: 'Джабалпур' },
    lat: 23.1815,
    lng: 79.9864,
    days: [],
    next: 'flight',
  },
  { name: { en: 'Mumbai', bg: 'Мумбай' }, lat: 19.076, lng: 72.8777, days: [10] },
];

// Both Bulgaria tours share this itinerary. Day 4 ends in "Leshten or Kovachevitsa"; Leshten is
// the one in the day's title.
const BULGARIA_ROUTE: TourRoute = [
  { name: { en: 'Sofia', bg: 'София' }, lat: 42.6977, lng: 23.3219, days: [1, 2] },
  { name: { en: 'Rila Monastery', bg: 'Рилски манастир' }, lat: 42.1335, lng: 23.3401, days: [] },
  { name: { en: 'Melnik', bg: 'Мелник' }, lat: 41.5236, lng: 23.3926, days: [3] },
  { name: { en: 'Ribnovo', bg: 'Рибново' }, lat: 41.511, lng: 23.855, days: [] },
  { name: { en: 'Leshten', bg: 'Лещен' }, lat: 41.554, lng: 23.773, days: [4] },
  { name: { en: 'Plovdiv', bg: 'Пловдив' }, lat: 42.1354, lng: 24.7453, days: [5] },
  { name: { en: "Asen's Fortress", bg: 'Асенова крепост' }, lat: 41.9886, lng: 24.873, days: [] },
  { name: { en: 'Kazanlak', bg: 'Казанлък' }, lat: 42.6194, lng: 25.393, days: [] },
  { name: { en: 'Buzludzha', bg: 'Бузлуджа' }, lat: 42.7356, lng: 25.3936, days: [] },
  { name: { en: 'Veliko Tarnovo', bg: 'Велико Търново' }, lat: 43.0757, lng: 25.6172, days: [6] },
  {
    name: { en: 'Krushuna Waterfalls', bg: 'Крушунски водопади' },
    lat: 43.2425,
    lng: 25.0358,
    days: [],
  },
  { name: { en: 'Devetashka Cave', bg: 'Деветашка пещера' }, lat: 43.2333, lng: 24.8853, days: [] },
  { name: { en: 'Sofia', bg: 'София' }, lat: 42.6977, lng: 23.3219, days: [7, 8] },
];

// Omaya's women-only India tour and Amelia's India tour share this itinerary.
const INDIA_ROUTE: TourRoute = [
  { name: { en: 'New Delhi', bg: 'Ню Делхи' }, lat: 28.6139, lng: 77.209, days: [1, 2, 3] },
  { name: { en: 'Jaipur', bg: 'Джайпур' }, lat: 26.9124, lng: 75.7873, days: [4, 5, 6] },
  { name: { en: 'Abhaneri', bg: 'Абанери' }, lat: 27.0074, lng: 76.6066, days: [] },
  { name: { en: 'Agra', bg: 'Агра' }, lat: 27.1767, lng: 78.0081, days: [7, 8, 9] },
  {
    name: { en: 'Fatehpur Sikri', bg: 'Фатехпур Сикри' },
    lat: 27.0945,
    lng: 77.6679,
    days: [],
    sideTrip: true,
  },
  {
    name: { en: 'Varanasi', bg: 'Варанаси' },
    lat: 25.3176,
    lng: 82.9739,
    days: [10, 11, 12],
    next: 'flight',
  },
  { name: { en: 'Sarnath', bg: 'Сарнат' }, lat: 25.3762, lng: 83.0227, days: [], sideTrip: true },
  { name: { en: 'New Delhi', bg: 'Ню Делхи' }, lat: 28.6139, lng: 77.209, days: [13, 14] },
];

// The Orange River and Erongo lodges are not named in the itinerary, so they sit at the river
// crossing and in the Erongo Mountains.
const NAMIBIA_ROUTE: TourRoute = [
  { name: { en: 'Cape Town', bg: 'Кейптаун' }, lat: -33.9249, lng: 18.4241, days: [1] },
  { name: { en: 'Cederberg', bg: 'Седерберг' }, lat: -32.47, lng: 19.05, days: [2] },
  { name: { en: 'Orange River', bg: 'Река Оранжева' }, lat: -28.75, lng: 17.62, days: [3] },
  {
    name: { en: 'Fish River Canyon', bg: 'Каньонът на Фиш Ривър' },
    lat: -27.59,
    lng: 17.61,
    days: [],
  },
  { name: { en: 'Keetmanshoop', bg: 'Кийтмансхуп' }, lat: -26.5833, lng: 18.1333, days: [4] },
  {
    name: { en: 'Quiver Tree Forest', bg: 'Гората от колчанови дървета' },
    lat: -26.477,
    lng: 18.24,
    days: [],
  },
  { name: { en: 'Sesriem', bg: 'Сесрием' }, lat: -24.4869, lng: 15.8014, days: [5, 6] },
  {
    name: { en: 'Deadvlei', bg: 'Дедвлей' },
    lat: -24.7593,
    lng: 15.2944,
    days: [],
    sideTrip: true,
  },
  {
    name: { en: 'Tropic of Capricorn', bg: 'Тропикът на Козирога' },
    lat: -23.437,
    lng: 15.8,
    days: [],
  },
  { name: { en: 'Swakopmund', bg: 'Свакопмунд' }, lat: -22.6784, lng: 14.5266, days: [7, 8] },
  { name: { en: 'Spitzkoppe', bg: 'Шпицкопе' }, lat: -21.825, lng: 15.1917, days: [] },
  { name: { en: 'Erongo', bg: 'Еронго' }, lat: -21.62, lng: 15.55, days: [9] },
  { name: { en: 'Andersson Gate', bg: 'Портата Андерсон' }, lat: -19.3, lng: 15.93, days: [10] },
  { name: { en: 'Okaukuejo', bg: 'Окаукуехо' }, lat: -19.18, lng: 15.92, days: [11] },
  { name: { en: 'Windhoek', bg: 'Виндхук' }, lat: -22.5609, lng: 17.0658, days: [12] },
];

const SAUDI_ARABIA_ROUTE: TourRoute = [
  {
    name: { en: 'Riyadh', bg: 'Рияд' },
    lat: 24.7136,
    lng: 46.6753,
    days: [1, 2],
    next: 'flight',
  },
  { name: { en: 'AlUla', bg: 'АлУла' }, lat: 26.6084, lng: 37.9232, days: [3, 4] },
  { name: { en: 'Hegra', bg: 'Хегра' }, lat: 26.792, lng: 37.954, days: [], sideTrip: true },
  { name: { en: 'Medina', bg: 'Медина' }, lat: 24.5247, lng: 39.5692, days: [5] },
  {
    name: { en: 'Jeddah', bg: 'Джеда' },
    lat: 21.4858,
    lng: 39.1925,
    days: [6],
    next: 'flight',
  },
  { name: { en: 'Riyadh', bg: 'Рияд' }, lat: 24.7136, lng: 46.6753, days: [7, 8, 9] },
];

/** Keyed by tour slug; tours that share an itinerary share a route. */
const TOUR_ROUTES: Readonly<Record<string, TourRoute>> = {
  'morocco-tour': MOROCCO_ROUTE,
  'tour-item-morocco-women-only-tour': MOROCCO_ROUTE,
  'tour-item-morocco-solo-travellers-tour': MOROCCO_ROUTE,
  'kyrgyzstan-tour': KYRGYZSTAN_ROUTE,
  'women-only-tour-kyrgyzstan': KYRGYZSTAN_ROUTE,
  'algeria-desert-expedition-tadrart-rouge': ALGERIA_ROUTE,
  'india-mumbai-ajanta-ellora-kanha-tour': DECCAN_ROUTE,
  'bulgaria-beyond-the-ordinary': BULGARIA_ROUTE,
  'women-only-tour-bulgaria': BULGARIA_ROUTE,
  'women-only-tour-india': INDIA_ROUTE,
  'india-tour': INDIA_ROUTE,
  'women-only-tour-namibia': NAMIBIA_ROUTE,
  'saudi-arabia-tour': SAUDI_ARABIA_ROUTE,
};

export function findTourRoute(slug: string | null | undefined): TourRoute | undefined {
  return slug ? TOUR_ROUTES[slug] : undefined;
}
