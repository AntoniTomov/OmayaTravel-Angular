import type { SiteId } from '../../../sites/site.types';
import type { BlogPostContent } from './blog-content';

export type BlogArticleMetadata = Omit<BlogPostContent, 'sections' | 'sources'>;

// Metadata is shared by SEO and article pages; article bodies stay in lazy feature chunks.
export const BLOG_ARTICLE_METADATA: readonly BlogArticleMetadata[] = [
  {
    slug: 'morocco-casablanca-marrakech-route-guide',
    title: 'Twelve Days in Morocco: From Casablanca to Marrakech',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/destinations/Marocco/morocco-bgr.webp',
      alt: 'Traditional Moroccan architecture and decorative tilework',
    },
    publishedAt: '2026-09-08',
    category: 'Morocco',
    comments: 0,
    excerpt:
      'How Omaya’s twelve-day Morocco route connects Casablanca, Chefchaouen, Fes, Merzouga and Marrakech, with city stays and desert travel in between.',
    preview:
      'Blue lanes in the north, intricate medinas, a road south towards the dunes, and Marrakech beyond the mountains: this journey brings several very different Moroccos into one holiday. Its twelve days make room for full days in Chefchaouen and Fes as well as the distances between them.',
  },
  {
    slug: 'women-only-kyrgyzstan-what-to-expect',
    title: 'Kyrgyzstan for Women Travellers: What to Expect',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/women-tours/Kyrgystan-women/kyrgyzstan-women-only-bgr.webp',
      alt: 'Mountain landscape on a Kyrgyzstan journey',
    },
    publishedAt: '2026-09-08',
    modifiedAt: '2026-09-16',
    category: 'Kyrgyzstan',
    comments: 0,
    excerpt:
      'What to expect travelling in Kyrgyzstan as a woman: safety, what to wear, meeting Kyrgyz women, and how Omaya’s women-only group journey works.',
    preview:
      'Kyrgyzstan is one of those countries people rarely consider until they see a photograph of Song Kul at dusk. Then the questions start, and for women planning the trip they tend to be the same ones: is it safe, what should I wear, what are the nights in a yurt camp actually like? Here is an honest answer to each, alongside how Omaya’s ten-day women-only journey from Bishkek is put together.',
  },
  {
    slug: 'song-kul-yurt-stay-packing-guide',
    title: 'Packing for a Song Kul Yurt Stay',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/home-page/blog-posts/Yurt-Camp-at-SongKul-Lake-Opt.webp',
      alt: 'Yurt camp beside Song Kul Lake',
    },
    publishedAt: '2026-09-08',
    category: 'Kyrgyzstan',
    comments: 0,
    excerpt:
      'A practical packing checklist for a Song Kul yurt stay, plus the camp-specific questions to settle before travelling with Omaya.',
    preview:
      'Packing for Song Kul is easier when the essentials for a day at the lake are close to hand. This checklist focuses on clothing and personal items; the camp’s bedding, heating, bathrooms and charging arrangements need confirmation for your departure.',
  },
  {
    slug: 'bulgaria-classic-women-only-tour-comparison',
    title: 'Eight Days in Bulgaria: Classic or Women-only?',
    date: 'September 8, 2026',
    image: {
      src: '/assets/images/destinations/Bulgaria/bulgaria-tour-bgr.webp',
      alt: 'Monument on a Bulgaria tour',
    },
    publishedAt: '2026-09-08',
    category: 'Bulgaria',
    comments: 0,
    excerpt:
      'Compare the route and group format of Omaya’s eight-day classic and women-only Bulgaria journeys, both beginning and ending in Sofia.',
    preview:
      'Both Bulgaria journeys spend eight days travelling from Sofia through monasteries, mountain villages and historic towns before returning to the capital. The central choice is the group format: a classic small group or a women-only departure.',
  },
  {
    slug: 'tassili-najjer-national-park-algeria-guide',
    title: 'Tassili n’Ajjer National Park: A Guide to Algeria’s Breathtaking Sahara Wilderness',
    publishedAt: '2026-07-25',
    modifiedAt: '2026-09-08',
    date: 'July 25, 2026',
    category: 'Uncategorized',
    comments: 2,
    excerpt:
      'Guide to visiting Tassili n’Ajjer National Park and Tadrart Rouge, covering access, rock art, safety, weather, visas, desert camping, Tuareg culture and expedition conditions.',
    preview:
      'One of the largest protected areas in the Sahara, home to 600-metre red dunes, 8,000-year-old rock art, and Tuareg nomads who still live as their ancestors did – here’s what you need to know about visiting Tassili n’Ajjer National Park and its most spectacular corner, the Tadrart Rouge.',
    image: {
      src: '/assets/images/blog-posts/Algeria-Tassili-National-Park-post-preview-bgr.webp',
      alt: "Sandstone formations and dunes in Tassili n'Ajjer National Park",
    },
    heroImage: {
      src: '/assets/images/blog-posts/Algeria blog post images/Algeria-Tassili-National-Park-Desert-Expedition-bgr.webp',
      alt: "Desert rocks and dunes in Tassili n'Ajjer National Park",
    },
    sidebarImage: {
      src: '/assets/images/blog-posts/Algeria-Tassili-National-Park-post-preview-bgr.webp',
      alt: 'Desert expedition in Algeria',
    },
    relatedTour: {
      title: 'Algeria Desert Expedition (Tadrart Rouge)',
      url: '/tour-item/algeria-desert-expedition-tadrart-rouge/',
    },
  },
  {
    slug: 'the-complete-visitor-guide-to-rila-monastery',
    title: 'The Complete Visitor Guide to the Rila Monastery in Bulgaria',
    publishedAt: '2026-04-16',
    modifiedAt: '2026-09-08',
    date: 'April 16, 2026',
    category: 'Uncategorized',
    comments: 1,
    excerpt:
      'Practical guide to Rila Monastery covering history, key sights, entry fees, opening times, dress code, transport from Sofia, nearby attractions, food and overnight stays.',
    preview:
      'Bulgaria’s most sacred landmark, a UNESCO World Heritage Site, and one of the most breathtaking places in the Balkans – here’s everything you need to plan your visit.',
    image: {
      src: '/assets/images/blog-posts/Rila-Monastery-post-preview-bgr.webp',
      alt: 'Rila Monastery in the Rila Mountains',
    },
    heroImage: {
      src: '/assets/images/blog-posts/Rila Monestery/Rila-Monastery-post-bgr.webp',
      alt: 'Rila Monastery courtyard and mountain setting',
    },
    relatedTour: {
      title: 'Bulgaria Tour',
      url: '/tour-item/bulgaria-beyond-the-ordinary/',
    },
  },
  {
    slug: '10-unmissable-places-to-visit-on-your-bulgaria-trip',
    title: '10 Unmissable Places to Visit on Your Bulgaria Trip (Chosen by Local Guides)',
    publishedAt: '2026-04-01',
    date: 'April 1, 2026',
    category: 'Uncategorized',
    comments: 19,
    excerpt:
      'Local-guide selection of ten memorable places and experiences across Bulgaria, combining cities, mountain villages, wine, heritage sites, alpine landscapes and Black Sea coast.',
    preview:
      'If you’re planning a trip to Bulgaria, it can be surprisingly hard to decide where to go first. This is a country where Roman cities sit beside mountain monasteries, rose fields stretch across entire valleys, and remote villages still keep centuries-old traditions alive—often just a short drive apart.',
    image: {
      src: '/assets/images/blog-posts/beautiful-bulgaria-post-preview-bgr.webp',
      alt: 'Bulgarian mountain lake and green hills',
    },
    heroImage: {
      src: '/assets/images/blog-posts/10 places in bulgaria/beautiful-bulgaria-post-bgr.webp',
      alt: 'Beautiful mountain landscape in Bulgaria',
    },
    relatedTour: {
      title: 'Bulgaria Beyond the Ordinary',
      url: '/tour-item/bulgaria-beyond-the-ordinary/',
    },
  },
  {
    slug: 'how-to-visit-song-kul-lake-in-kyrgyzstan',
    title: 'Song Kul: What You Need to Know About Kyrgyzstan’s Most Untamed Alpine Lake',
    publishedAt: '2026-02-26',
    modifiedAt: '2026-09-08',
    date: 'February 26, 2026',
    category: 'Uncategorized',
    comments: 3,
    excerpt:
      'Practical guide to Song Kul Lake covering best season, access routes, yurt camps, horse riding, hiking, weather, cash, connectivity and basic conditions.',
    preview:
      'High in the mountains of Kyrgyzstan, at 3,016 metres above sea level, Song-Kul Lake feels like another world. There are no towns here. No paved roads circling the shoreline. No permanent settlements. Just open pasture, grazing horses, scattered yurts, and the slow rhythm of nomadic life continuing much as it has for centuries. It’s the kind of place that makes you realise how rarely you actually feel free. For many travellers, Song Kol is the highlight of Kyrgyzstan and here is what you need to know before you visit it.',
    image: {
      src: '/assets/images/blog-posts/Kyrgystan-post-preview-bgr.webp',
      alt: 'Yurt camp beside Song Kul Lake in Kyrgyzstan',
    },
    heroImage: {
      src: '/assets/images/blog-posts/Kyrgystan/Kyrgystan-bgr.webp',
      alt: 'Song Kul Lake landscape in Kyrgyzstan',
    },
    relatedTour: {
      title: 'Kyrgyzstan Discovery Tour',
      url: '/tour-item/kyrgyzstan-tour/',
    },
  },
];

export const AMELIA_BLOG_ARTICLE_METADATA: readonly BlogArticleMetadata[] = [
  {
    slug: 'maroko-za-zheni-pateshestvenichki',
    title: 'Мароко за жени пътешественички: безопасност, облекло и какво да очакваш',
    publishedAt: '2026-09-01',
    date: '1 септември 2026',
    category: 'Мароко',
    comments: 0,
    excerpt:
      'Практичен пътеводител за жени, които планират пътуване до Мароко: безопасност, облекло, сезони, местни обичаи, пустиня и пътуване в малка женска група.',
    preview:
      'Има пътувания, които започват още с кацането. Мароко е точно такова: сетивно, цветно, шумно и различно. Ето какво е добре да знаеш, когато пътуваш като жена.',
    image: {
      src: '/assets/images/amelia/blog/morocco-for-women-travel-guide/morocco-1.avif',
      alt: 'Цветни детайли от Мароко',
    },
    heroImage: {
      src: '/assets/images/amelia/blog/morocco-for-women-travel-guide/morocco-2.avif',
      alt: 'Пейзаж и архитектура от Мароко',
    },
    sidebarImage: {
      src: '/assets/images/amelia/blog/morocco-for-women-travel-guide/morocco-3.avif',
      alt: 'Мароко като дестинация за жени пътешественички',
    },
    relatedTour: {
      title: 'Morocco - Blue Cities & Golden Dunes',
      url: '/tour-item/morocco-tour/',
    },
  },
  {
    slug: 'ezeroto-song-kul-kirgistan',
    title: 'Езерото Сонг-Кул: мястото, което ще те накара да се почувстваш свободен',
    publishedAt: '2026-09-08',
    date: '8 септември 2026',
    category: 'Киргистан',
    comments: 0,
    excerpt:
      'Практичен гид за езерото Сонг-Кул в Киргизстан: кога да пътуваш, как да стигнеш, къде да спиш и какво да очакваш от живота на 3016 метра надморска височина.',
    preview:
      'В сърцето на Киргизстан, на 3016 метра надморска височина, ще откриете Сонг-Кул – езеро, което пази духа на номадския живот. Тук времето тече по различен ритъм, а безкрайните пасища и величествените планини създават усещане за пълна свобода.',
    image: {
      src: '/assets/images/blog-posts/Kyrgystan-post-preview-bgr.webp',
      alt: 'Юртен лагер край езерото Сонг-Кул в Киргизстан',
    },
    heroImage: {
      src: '/assets/images/blog-posts/Kyrgystan/Kyrgystan-bgr.webp',
      alt: 'Пейзаж на езерото Сонг-Кул в Киргизстан',
    },
    sidebarImage: {
      src: '/assets/images/blog-posts/Kyrgystan/Kyrgyzstan-tour-img-1.webp',
      alt: 'Юрти и открити пасища около Сонг-Кул',
    },
    relatedTour: {
      title: 'Киргистан - юрти, коне и високи планини',
      url: '/tour-item/kyrgyzstan-tour/',
    },
  },
  {
    slug: 'india-otblizo',
    title: 'Индия отблизо: между хаоса, цветовете и тишината',
    publishedAt: '2026-09-08',
    date: '8 септември 2026',
    category: 'Индия',
    comments: 0,
    excerpt:
      'Впечатления от Северна Индия – контрастите между шумните улици и тихите дворове, цветовете, храната и малките моменти, които остават след едно пътуване дотам.',
    preview:
      'Има места, за които можеш да прочетеш десетки статии, да изгледаш безброй видеа и да разгледаш стотици снимки, но въпреки това да не си представиш какво е да бъдеш там. Индия е едно от тях.',
    image: {
      src: '/assets/images/amelia/blog/india-otblizo/india-otblizo-01.webp',
      alt: 'Колонада в Агра Форт, Индия',
    },
    relatedTour: {
      title: 'Северна Индия отблизо',
      url: '/tour-item/india-tour/',
    },
  },
];

export function blogMetadataForSite(siteId: SiteId): readonly BlogArticleMetadata[] {
  return siteId === 'amelia' ? AMELIA_BLOG_ARTICLE_METADATA : BLOG_ARTICLE_METADATA;
}

export function findBlogMetadataBySlug(
  slug: string | null | undefined,
  siteId: SiteId = 'omaya',
): BlogArticleMetadata | undefined {
  return blogMetadataForSite(siteId).find((post) => post.slug === slug);
}
