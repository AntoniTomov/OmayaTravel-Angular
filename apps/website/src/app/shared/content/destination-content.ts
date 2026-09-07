import { BLOG_POST_SUMMARIES } from './blog-summary-content';
import { PUBLIC_TOURS } from './tour-departures';

const DESTINATION_BRIEFS = [
  {
    slug: 'bulgaria',
    name: 'Bulgaria',
    theme: 'Monasteries, mountains and village life',
    introduction:
      'Explore Bulgaria through its monasteries, mountain villages and living traditions. Enjoy the calm of frescoed monastery courtyards, unhurried afternoons in the mountains, and long tables of food cooked the way it always has been.',
    planning:
      'Both itineraries run for eight days. Compare the group format and dates below, then open the full itinerary for accommodation, meals, room-sharing arrangements and the daily route.',
    guideSlugs: [
      '10-unmissable-places-to-visit-on-your-bulgaria-trip',
      'the-complete-visitor-guide-to-rila-monastery',
    ],
  },
  {
    slug: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    theme: 'Mountain lakes and nomadic traditions',
    introduction:
      'Yurt stays, mountain landscapes and time beside Song Kul Lake are part of Omaya’s Kyrgyzstan journeys. Settle into the stillness of the high summer pastures, evenings with the families who host you, and the long golden light over the lake.',
    planning:
      'Compare each itinerary’s daily activities and accommodation before choosing your departure. Open the trip details for the riding and walking programme, what to bring and the arrangements for nights in yurts.',
    guideSlugs: ['how-to-visit-song-kul-lake-in-kyrgyzstan'],
  },
  {
    slug: 'morocco',
    name: 'Morocco',
    theme: 'Blue cities, medinas and desert dunes',
    introduction:
      'Follow Morocco’s Blue Cities & Golden Dunes itinerary through its cities, mountains and Sahara landscapes. Enjoy mint tea in the blue lanes of Chefchaouen, the colour and noise of the medinas, and a night under more stars than you thought the sky held.',
    planning:
      'The group formats share the core itinerary, but prices and participation conditions can differ. Compare the options below and read your chosen tour’s inclusions, room arrangements and booking conditions before enquiring.',
    guideSlugs: [],
  },
  {
    slug: 'algeria',
    name: 'Algeria',
    theme: 'An expedition into the Tadrart Rouge',
    introduction:
      'Omaya’s Algeria journey focuses on the Tadrart Rouge: red dunes, sandstone formations and desert camping. Feel the deep silence of the Sahara, sandstone arches burning red at sunset, and nights spent sleeping out beneath the stars.',
    planning:
      'Start with the expedition itinerary to understand the daily route and camping arrangements. Check the included services and arrival instructions with the team before making separate travel bookings.',
    guideSlugs: ['tassili-najjer-national-park-algeria-guide'],
  },
] as const;

export const DESTINATION_CONTENT = DESTINATION_BRIEFS.map((brief) => {
  const tours = PUBLIC_TOURS.filter(
    (tour) => tour.destination.country.toLowerCase() === brief.slug,
  );
  if (!tours.length) throw new Error(`No tours for destination ${brief.slug}`);
  return {
    ...brief,
    tours,
    heroImage: tours[0].heroImage,
    guides: BLOG_POST_SUMMARIES.filter((post) =>
      (brief.guideSlugs as readonly string[]).includes(post.slug),
    ),
  };
});
