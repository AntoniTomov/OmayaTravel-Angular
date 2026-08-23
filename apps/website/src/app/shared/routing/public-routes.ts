export const PUBLIC_CANONICAL_HOST = 'https://omayatravel.com';

export type PublicRouteType =
  | 'home'
  | 'destination-hub'
  | 'destination-detail'
  | 'tour-detail'
  | 'tour-category'
  | 'blog-article'
  | 'static-page';

export interface PublicRouteDefinition {
  key: string;
  type: PublicRouteType;
  path: string;
  canonicalPath: string;
  prerender: boolean;
}

export interface PublicRedirectDefinition {
  from: string;
  to: string;
  statusCode: 301;
}

export const PUBLIC_DESTINATION_SLUGS = ['algeria', 'bulgaria', 'kyrgyzstan', 'morocco'] as const;

export const PUBLIC_TOUR_SLUGS = [
  'algeria-desert-expedition-tadrart-rouge',
  'bulgaria-beyond-the-ordinary',
  'kyrgyzstan-tour',
  'morocco-tour',
  'tour-item-morocco-solo-travellers-tour',
  'tour-item-morocco-women-only-tour',
  'women-only-tour-bulgaria',
  'women-only-tour-kyrgyzstan',
] as const;

export const PUBLIC_TOUR_CATEGORY_SLUGS = [
  'solo-travellers-tours',
  'women-only-tours',
  'classic-tours',
] as const;

export const PUBLIC_BLOG_ARTICLE_SLUGS = [
  '10-unmissable-places-to-visit-on-your-bulgaria-trip',
  'how-to-visit-song-kul-lake-in-kyrgyzstan',
  'tassili-najjer-national-park-algeria-guide',
  'the-complete-visitor-guide-to-rila-monastery',
] as const;

export const PUBLIC_STATIC_PAGE_SLUGS = [
  '3122-2',
  'private-tours-your-trip-your-rules/describe',
  'blog-list-2',
  'tours-list',
  'calendar',
  'calendar-2027',
  'september-2027',
  'private-tour-planning',
  'private-tours-your-trip-your-rules',
  'not-yet-but-soon',
  'contact',
  'why-book-with-us',
  'our-story',
  'your-dmc-partner-in-bulgaria',
  'omaya-travel-license',
  'faq',
  'privacy-policy',
  'cookie-policy',
  'termsconditions',
] as const;

export const PUBLIC_ROUTE_PATTERNS = {
  home: '/',
  destinations: '/destinations/',
  destinationDetail: '/destinations/:destinationSlug/',
  tourDetail: '/tour-item/:tourSlug/',
  notFound: '/404/',
} as const;

export const PUBLIC_DESTINATION_ROUTES = PUBLIC_DESTINATION_SLUGS.map((slug) =>
  defineRoute(`destination-${slug}`, 'destination-detail', `destinations/${slug}`),
);

export const PUBLIC_TOUR_DETAIL_ROUTES = PUBLIC_TOUR_SLUGS.map((slug) =>
  defineRoute(`tour-${slug}`, 'tour-detail', `tour-item/${slug}`),
);

export const PUBLIC_TOUR_CATEGORY_ROUTES = PUBLIC_TOUR_CATEGORY_SLUGS.map((slug) =>
  defineRoute(`tour-category-${slug}`, 'tour-category', slug),
);

export const PUBLIC_BLOG_ARTICLE_ROUTES = PUBLIC_BLOG_ARTICLE_SLUGS.map((slug) =>
  defineRoute(`blog-${slug}`, 'blog-article', slug),
);

export const PUBLIC_STATIC_PAGE_ROUTES = PUBLIC_STATIC_PAGE_SLUGS.map((slug) =>
  defineRoute(`static-${slug}`, 'static-page', slug),
);

export const PUBLIC_STATIC_PRERENDER_ROUTES: readonly PublicRouteDefinition[] = [
  defineRoute('home', 'home', ''),
  defineRoute('destination-hub', 'destination-hub', 'destinations'),
  ...PUBLIC_TOUR_CATEGORY_ROUTES,
  ...PUBLIC_BLOG_ARTICLE_ROUTES,
  ...PUBLIC_STATIC_PAGE_ROUTES,
];

export const PUBLIC_INDEXABLE_ROUTES: readonly PublicRouteDefinition[] = [
  ...PUBLIC_STATIC_PRERENDER_ROUTES,
  ...PUBLIC_DESTINATION_ROUTES,
  ...PUBLIC_TOUR_DETAIL_ROUTES,
];

export const PUBLIC_DUPLICATE_TOUR_REDIRECTS: readonly PublicRedirectDefinition[] = [
  defineRedirect('/tour-item/bulgaria-trip/', '/tour-item/bulgaria-beyond-the-ordinary/'),
  defineRedirect('/tour-item/forest-adventure/', '/tour-item/bulgaria-beyond-the-ordinary/'),
  defineRedirect('/tour-item/safari-tour/', '/tour-item/kyrgyzstan-tour/'),
];

export const PUBLIC_QUERY_REDIRECTS: readonly PublicRedirectDefinition[] = [
  defineRedirect('/?page_id=2719', '/cookie-policy/'),
  defineRedirect('/?page_id=3', '/privacy-policy/'),
  defineRedirect('/?page_id=635', '/our-story/'),
  defineRedirect('/?page_id=852', '/faq/'),
  defineRedirect('/?page_id=910', '/why-book-with-us/'),
];

export const PUBLIC_EXACT_REDIRECTS: readonly PublicRedirectDefinition[] = [
  defineRedirect('/tour-checkout/', '/contact/'),
];

export const PUBLIC_REDIRECTS: readonly PublicRedirectDefinition[] = [
  ...PUBLIC_DUPLICATE_TOUR_REDIRECTS,
  ...PUBLIC_QUERY_REDIRECTS,
  ...PUBLIC_EXACT_REDIRECTS,
];

export function canonicalUrl(canonicalPath: string): string {
  return `${PUBLIC_CANONICAL_HOST}${canonicalPath}`;
}

export function withTrailingSlash(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (normalizedPath === '/') {
    return normalizedPath;
  }

  return normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
}

function defineRoute(key: string, type: PublicRouteType, routePath: string): PublicRouteDefinition {
  return {
    key,
    type,
    path: routePath,
    canonicalPath: withTrailingSlash(routePath),
    prerender: true,
  };
}

function defineRedirect(from: string, to: string): PublicRedirectDefinition {
  return {
    from,
    to,
    statusCode: 301,
  };
}
