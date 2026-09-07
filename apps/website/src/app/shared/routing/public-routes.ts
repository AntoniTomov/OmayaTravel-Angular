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
  'all-ages-tours',
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
  'blog-list',
  'tours-list',
  'calendar',
  'calendar-2027',
  'calendar-2027/september',
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
  // /private-tour-planning/ duplicated the intent of /private-tours-your-trip-your-rules/ — same
  // hero, same section images, same card source — and was orphaned with no inbound links. The
  // longer-named page owns the intent: it is the one the site links to and the one that leads into
  // the /describe/ questionnaire.
  defineRedirect('/private-tour-planning/', '/private-tours-your-trip-your-rules/'),
  defineRedirect('/september-2027/', '/calendar-2027/september/'),
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

/**
 * Resolves an incoming URL against {@link PUBLIC_REDIRECTS}.
 *
 * The redirect table existed as data long before anything applied it, so every entry in it was
 * inert: the legacy WordPress query URLs served the homepage with HTTP 200 (duplicate content on
 * five URLs) and the retired tour paths returned 404 (discarding whatever link equity they had).
 * `server.ts` now runs every request through this.
 *
 * Matching is case-insensitive and tolerant of a missing or extra trailing slash, because inbound
 * links from the old site are not consistent about it. Query-string entries are matched against the
 * full URL, path entries against the path alone.
 */
export function findRedirect(requestUrl: string): PublicRedirectDefinition | undefined {
  const normalized = (requestUrl || '/').toLowerCase();
  const exact = PUBLIC_REDIRECTS.find((redirect) => redirect.from.toLowerCase() === normalized);

  if (exact) {
    return exact;
  }

  const path = normalized.split(/[?#]/)[0];
  const withSlash = withTrailingSlash(path);

  return PUBLIC_REDIRECTS.find((redirect) => {
    const from = redirect.from.toLowerCase();

    // Only path-shaped entries may match on path alone; a query entry must match the full URL,
    // otherwise every request to "/" would match "/?page_id=3".
    return !from.includes('?') && withTrailingSlash(from) === withSlash;
  });
}

/**
 * Redirect target that canonicalises a public HTML URL onto its trailing-slash form.
 *
 * Public routes are canonical with a trailing slash, but every one of them also answered HTTP 200
 * without it, duplicating the entire site at a second set of URLs. Angular's `RouterLink` strips the
 * trailing slash when it renders an href, so crawlers genuinely follow those links — the site links
 * to its own non-canonical URLs. Users never pay for the redirect, because in-app navigation is
 * client-side; only crawlers take the hop, and then consolidate.
 *
 * Returns `undefined` for anything that must not be touched: the root, URLs that already end in a
 * slash, API routes, and any path whose last segment looks like a file (`robots.txt`,
 * `/assets/...webp`).
 */
export function trailingSlashRedirectTarget(requestUrl: string): string | undefined {
  const [path, query = ''] = splitQuery(requestUrl || '/');

  if (path === '/' || path.endsWith('/') || path.startsWith('/api/')) {
    return undefined;
  }

  const lastSegment = path.split('/').pop() ?? '';

  if (lastSegment.includes('.')) {
    return undefined;
  }

  return `${path}/${query}`;
}

function splitQuery(requestUrl: string): [string, string] {
  const index = requestUrl.search(/[?#]/);

  return index === -1 ? [requestUrl, ''] : [requestUrl.slice(0, index), requestUrl.slice(index)];
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
