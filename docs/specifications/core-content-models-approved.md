# Core Content Models Approved Specification

Issue: #11
Status: Approved architecture specification
Date: 2026-08-03
Owner: Lead Architect

## Decisions

- Content is Git-managed for v1.
- Public routes follow `docs/specifications/routing-and-redirects-approved.md`.
- Content model contracts are TypeScript-first.
- Long-form content may be Markdown.
- No database or admin panel is part of v1 content.
- Every published public item must be build-time validated.

## Planned Paths

These paths become active after #7 initializes the workspace:

```text
content/
  destinations/
  tours/
  blog/
  pages/
  redirects/
  media/
packages/
  content-models/
```

## Shared Primitives

```ts
export type IsoDate = string;
export type CurrencyCode = 'EUR' | 'USD' | 'GBP';
export type PublicationStatus = 'draft' | 'published' | 'archived';
export type TravelStyle = 'classic' | 'private' | 'women-only' | 'solo' | 'custom';
export type Difficulty = 'easy' | 'moderate' | 'challenging';
```

## SEO Metadata

Every indexable public page requires:

```ts
export interface SeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
  ogImage?: MediaReference;
}
```

Rules:

- `canonicalPath` is path-only and must include trailing slash for HTML pages.
- Canonical host is always `https://omayatravel.com`.
- `title` and `description` are required for published indexable content.
- `noindex: true` excludes the item from sitemap.

## Media Reference

```ts
export interface MediaReference {
  key: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
  sourceUrl?: string;
}
```

Rules:

- `key`, `alt`, `width` and `height` are required.
- `sourceUrl` may hold the old WordPress media URL during migration.
- Empty or generic alt text fails validation for meaningful images.

## Destination

```ts
export interface Destination {
  id: string;
  slug: string;
  name: string;
  status: PublicationStatus;
  summary: string;
  heroImage: MediaReference;
  gallery?: MediaReference[];
  seo: SeoMetadata;
  contentPath?: string;
}
```

Route:

```text
/destinations/{slug}/
```

Rules:

- Published destinations must have unique `slug`.
- Published tours must reference an existing published destination.
- `seo.canonicalPath` must equal `/destinations/{slug}/`.

## Tour

```ts
export interface Tour {
  id: string;
  slug: string;
  title: string;
  status: PublicationStatus;
  destinationIds: string[];
  styles: TravelStyle[];
  summary: string;
  durationDays: number;
  difficulty?: Difficulty;
  heroImage: MediaReference;
  gallery?: MediaReference[];
  highlights: string[];
  itinerary: ItineraryDay[];
  included?: string[];
  excluded?: string[];
  departures?: Departure[];
  priceFrom?: Money;
  enquiryPath: string;
  seo: SeoMetadata;
  contentPath?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals?: string[];
  accommodation?: string;
}

export interface Money {
  amount: number;
  currency: CurrencyCode;
}
```

Route:

```text
/tour-item/{slug}/
```

Rules:

- Do not expose `/tours/{slug}/` in v1.
- `seo.canonicalPath` must equal `/tour-item/{slug}/`.
- `durationDays` must be a positive integer.
- `itinerary.day` values must be sequential.
- `enquiryPath` defaults to `/contact/` unless a future approved enquiry route exists.

## Departure

```ts
export interface Departure {
  id: string;
  startDate: IsoDate;
  endDate?: IsoDate;
  status: 'available' | 'limited' | 'sold-out' | 'on-request';
  price?: Money;
  notes?: string;
}
```

Rules:

- Dates are ISO strings.
- Departure dates are optional for tours.
- Missing departures must render as enquiry/on-request, not as broken UI.

## Blog Article

```ts
export interface BlogArticle {
  id: string;
  slug: string;
  status: PublicationStatus;
  title: string;
  excerpt: string;
  publishedAt: IsoDate;
  updatedAt?: IsoDate;
  authorName: string;
  heroImage?: MediaReference;
  seo: SeoMetadata;
  contentPath: string;
}
```

Route:

```text
/{slug}/
```

Rules:

- Preserve existing root article slugs unless a later ADR changes blog routing.
- `seo.canonicalPath` must equal `/{slug}/`.
- Published articles require `publishedAt`, `authorName` and `contentPath`.

## Static Page

```ts
export interface StaticPage {
  id: string;
  slug: string;
  status: PublicationStatus;
  title: string;
  pageType: 'contact' | 'trust' | 'legal' | 'support' | 'landing';
  heroImage?: MediaReference;
  seo: SeoMetadata;
  contentPath?: string;
}
```

Route:

```text
/{slug}/
```

Rules:

- Keep approved root slugs such as `/contact/`, `/faq/`, `/our-story/`, `/why-book-with-us/`.
- Legal pages require owner review before launch.
- Contact/enquiry forms may be added later through approved backend/API contracts.

## Redirect Rule

```ts
export interface RedirectRule {
  sourcePath: string;
  targetPath?: string;
  status: 301 | 302 | 404 | 410;
  reason: string;
}
```

Rules:

- Permanent migrations use `301`.
- Unknown or excluded WordPress URLs must not soft-200.
- No redirect chains.

## Validation Requirements

Build validation must eventually check:

- unique IDs and slugs per content type
- unique canonical paths across all public pages
- required SEO metadata for published indexable content
- no `/tours/{slug}/` public tour routes in v1
- all internal links resolve
- all media references have `key`, `alt`, `width`, `height`
- every tour references existing destinations
- route paths match ADR-011
- redirect rules have no chains
- no published draft/archived item appears in sitemap

## Expert Handoffs

Angular:

- implement typed schemas from this spec after #7
- do not hard-code business content in components
- generate routes/canonicals from normalized content

SEO:

- use `SeoMetadata` and route patterns as the page-type SEO base
- define structured data requirements in #31/#14

Migration:

- map WordPress records into these models
- keep raw exports outside Git
- preserve old URL and media source mappings

DevOps:

- validation must run in CI once scripts exist
- deployment must use generated routes/sitemap/redirect artifacts

QA:

- verify every published item has route, canonical, metadata and media integrity
