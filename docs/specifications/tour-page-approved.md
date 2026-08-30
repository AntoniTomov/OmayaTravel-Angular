# Tour Page Approved Implementation Specification

Issue: #15
Status: Approved architecture specification
Date: 2026-08-04
Owner: Lead Architect

## Inputs

- `docs/specifications/tour-page-ux.md`
- `docs/specifications/tour-page-seo.md`
- `docs/specifications/page-type-seo.md`
- `docs/specifications/core-content-models-approved.md`
- `docs/specifications/routing-and-redirects-approved.md`
- `docs/specifications/media-delivery-approved.md`
- `docs/migration/redirect-map.md`
- `docs/adr/ADR-011-public-routing-and-redirects.md`
- `docs/adr/ADR-012-core-content-models.md`
- `docs/adr/ADR-013-media-delivery-strategy.md`

## Decision Summary

Implement tour detail pages as content-driven, prerendered Angular pages at the preserved v1 route:

```text
/tour-item/{slug}/
```

This approved specification reconciles the UX and SEO handoffs into one Angular implementation contract. Angular must not interpret `tour-page-ux.md` and `tour-page-seo.md` separately when implementing the page; this file is the source of truth.

The page remains enquiry-led. No checkout, payment, account, booking engine, backend inventory system, review system, or admin panel is part of this implementation scope.

## Scope

The eventual Angular implementation for #16 must include:

- tour detail route rendering from the approved `Tour` content model
- prerendered/static HTML for SEO-critical content
- responsive tour page layout
- primary and secondary CTA behavior
- departure list/calendar interaction
- itinerary, included/excluded, gallery, FAQ, related tours, and trust sections
- metadata, canonical, robots, breadcrumbs, sitemap behavior, and JSON-LD
- media helper integration from #12
- accessible keyboard and mobile behavior
- empty states for missing optional content

## Non-Goals

Do not implement in the tour page:

- `/tours/{slug}/` public routes
- online checkout or immediate payment
- customer accounts
- invented reviews, ratings, badges, memberships, awards, partner claims, phone numbers, or response guarantees
- indexable filtered/search/calendar URL variants
- backend booking inventory
- standalone dynamic departure pages
- Cloudflare or Hostinger redirect rules
- raw WordPress media URLs as production media URLs
- a CMS/admin panel

## Route And Rendering

Approved public route:

```text
/tour-item/{slug}/
```

Rules:

- `Tour.seo.canonicalPath` must equal `/tour-item/{slug}/`.
- Canonical host is `https://omayatravel.com`.
- Canonicals use trailing slash.
- Public tour pages must be prerendered/static where possible.
- Do not expose `/tours/{slug}/` in v1.
- Duplicate legacy tour slugs must redirect according to `docs/migration/redirect-map.md`; do not render them as `200` pages.
- Unknown or excluded URLs must not become soft-200 Angular fallback pages.

## Data Contract

Tour pages consume the approved `Tour` model from `docs/specifications/core-content-models-approved.md`.

Required for published tour detail pages:

- `id`
- `slug`
- `title`
- `status`
- `destinationIds`
- `styles`
- `summary`
- `durationDays`
- `heroImage`
- `highlights`
- `itinerary`
- `enquiryPath`
- `seo`

Optional but supported:

- `difficulty`
- `gallery`
- `included`
- `excluded`
- `departures`
- `priceFrom`
- `contentPath`

Build validation must fail, or the page must be excluded/noindexed, when a published indexable tour lacks required model, SEO, destination, or media fields.

## Page Objective

The tour page must help a visitor decide whether a specific Omaya journey fits them and then make a low-pressure enquiry.

It must answer quickly:

- Is this trip for people like me?
- Will I understand the place, not just see it?
- Will the group dynamic feel natural?
- Are dates, price, pace, inclusions, and exclusions clear enough?
- Can I enquire without committing to immediate payment?

## Primary Visitor

Primary visitor: English-speaking traveler from the US or UK, age 20-45, medium budget, traveling solo, as a couple, or with friends.

The design and copy should reduce anxiety about forced fun, outsider feeling, group fit, and not being adventurous enough.

## Section Order

Angular must implement the page in this order unless a later approved spec changes it:

1. Hero and key decision panel
2. Quick reassurance strip
3. Tour overview
4. Highlights
5. Departures and calendar interaction
6. Day-by-day itinerary
7. Included and excluded
8. Pace, comfort and group-fit guidance
9. Gallery
10. Enquiry panel
11. Practical FAQ
12. Related tours or comparison
13. Final trust and contact CTA

## Above The Fold

Above the fold must include:

- visible breadcrumbs
- hero image from `Tour.heroImage`
- style label from `Tour.styles`
- exactly one H1 from `Tour.title`
- short supporting copy from `Tour.summary`
- key facts: destination, duration, price-from or price-on-request, difficulty when present, group/style, and availability state
- primary CTA: `Enquire about this tour`
- secondary CTA: `View available dates`
- trust line using approved business content only

Do not show a full booking form above the fold.

## CTA Behavior

Primary CTA:

```text
Enquire about this tour
```

Rules:

- Link to `Tour.enquiryPath`.
- Default `Tour.enquiryPath` is `/contact/` unless a future approved enquiry route exists.
- Carry selected tour context.
- If a departure is selected, carry departure ID/date/status/price context.
- If no departure is selected, open enquiry with tour preselected and flexible/empty date preference.
- Do not imply immediate payment or checkout.

Secondary CTAs:

- `View available dates`
- `Ask a question`
- `Explore private version` when private/custom adaptation is supported by visible content
- `Compare with similar tours` when related tours exist
- `Download itinerary` only after a future approved content/file model supports it

Secondary CTAs must not visually compete with the primary enquiry CTA.

## Departures

Render upcoming departures when `Tour.departures` exists.

Status labels:

| Status | Label | Selectable |
| --- | --- | --- |
| `available` | Available | Yes |
| `limited` | Few places left | Yes |
| `sold-out` | Sold out | No; offer alternatives enquiry |
| `on-request` | On request | Yes as enquiry context |

Rules:

- Default to a clear departure list; a month grid is optional.
- On mobile, show compact list before any month grid.
- Sold-out departures may remain visible for trust but disabled.
- Selecting a departure changes the primary CTA to `Enquire for selected date`.
- Selected departure details remain visible near the CTA.
- Calendar/filter state must not create indexable URLs.
- Missing departures render `Dates are arranged on request for this tour.` and keep enquiry active.
- Do not render an empty calendar.

## Content Sections

Tour overview:

- Use `Tour.summary` and approved long-form content from `contentPath`.
- Include destination links from `destinationIds`.
- Explain traveler fit and mismatch when useful.

Highlights:

- Render `Tour.highlights`.
- Use 4-7 prominent items when possible.
- On mobile, all highlights must be scroll-accessible, not carousel-only.

Itinerary:

- Render day-by-day itinerary from `Tour.itinerary`.
- Show day number, title, description, meals, and accommodation where present.
- Accordion/timeline behavior is allowed.
- Essential itinerary text must be present in prerendered/static HTML.

Included and excluded:

- Render `included` and `excluded` as two balanced groups on desktop and stacked groups on mobile.
- If a list is missing, show neutral on-request copy rather than an empty column.
- State payment/deposit terms neutrally: they are confirmed after enquiry unless approved business content says more.

Pace and group fit:

- Use `difficulty`, `durationDays`, `styles`, and approved long-form content.
- Explain difficulty in human terms.
- Avoid extreme-adventure or party-travel framing unless content explicitly supports it.

Gallery:

- Use `gallery` when present.
- Fall back to a small curated strip using `heroImage` only when gallery is missing.
- Do not load the full gallery above the fold.
- Meaningful images require valid alt text and dimensions.

FAQ:

- Use tour-specific FAQ content from `contentPath` when available.
- If no tour-specific FAQ exists, link to approved global FAQ/support pages without emitting FAQ schema.
- FAQ content must be visible in prerendered/static HTML if FAQ schema is emitted.

Related tours:

- Show 2-3 related published tours by shared destination or style when relationships are available.
- Links must be crawlable anchors.
- Do not create indexable filter/search URLs from comparison behavior.

## Desktop Behavior

- Use a two-column decision area after the hero: story/content left, key facts and CTA panel right.
- Sticky CTA/key-facts panel is allowed on desktop.
- Sticky panel must stop before footer and must not overlap content, forms, itinerary, or cookie controls.
- Use stable layout dimensions for images, cards, fact rows, buttons, and calendar cells.

## Mobile Behavior

- Stack hero image, style label, title, summary, facts, and CTA.
- Use a sticky bottom CTA after the first screen.
- Sticky CTA states:
  - no date selected: `Enquire`
  - date selected: `Enquire - {date}`
  - sold-out context: `Ask about alternatives`
- Interactive controls must be at least 44px where practical.
- Avoid horizontal scrolling except intentional galleries.
- Sticky CTA must not cover form fields, footer links, or cookie controls.

## SEO Requirements

Every published indexable tour page must render in prerendered/static HTML:

- title tag
- meta description
- canonical URL
- robots meta
- Open Graph tags
- one H1
- breadcrumbs
- primary visible content
- JSON-LD

Title pattern:

```text
{Tour Title} | Omaya Travel
```

Use duration in the title only when useful and readable:

```text
{Tour Title} - {durationDays} Days | Omaya Travel
```

Metadata must not claim guaranteed departures, online booking, prices, reviews, ratings, badges, or partner claims unless visible approved content supports them.

## Breadcrumbs

Preferred visible breadcrumb:

```text
Home > Destinations > {Primary Destination} > {Tour Title}
```

Rules:

- `Home` links to `/`.
- `Destinations` links to `/destinations/`.
- Primary destination links to `/destinations/{destination-slug}/`.
- Current tour may be unlinked.
- If no primary destination can be determined, use `Home > Destinations > {Tour Title}`.
- Breadcrumb schema must match visible breadcrumbs.

## Sitemap And Indexing

Include tour URL in sitemap only when:

- `Tour.status` is `published`
- `Tour.seo.noindex` is absent or false
- `Tour.seo.title`, `description`, and `canonicalPath` are present
- canonical path equals `/tour-item/{slug}/`
- required model and media fields pass validation
- referenced destinations are published
- the tour is not a duplicate legacy slug

Exclude:

- draft, archived, noindex, duplicate, placeholder, sold-only legacy, or thin tours
- redirect sources
- filtered/search URLs
- preview URLs
- selected-departure URL variants
- media file URLs as page URLs

## Structured Data

Tour pages must emit JSON-LD in prerendered/static HTML.

Required:

- `BreadcrumbList`
- one primary `TouristTrip`

Conditional:

- `Offer` only when visible price data exists
- `FAQPage` only when tour-specific FAQ content is visible
- `ImageObject` only when implementation models image nodes separately

Do not emit:

- standalone top-level `Trip` by default
- `Product` for v1
- `AggregateRating` or `Review` without verified visible reviews
- payment/deposit/cancellation policy schema without approved content

`TouristTrip` required fields:

- `@type: TouristTrip`
- `@id`: canonical URL plus `#touristtrip`
- `url`: canonical absolute URL
- `name`: `Tour.title`
- `description`: visible summary or aligned SEO description
- `image`: absolute hero/OG image URL
- `provider`: shared Omaya organization/travel agency node
- `touristType`: readable values derived from visible `styles`

`Offer` rules:

- Emit only with visible `priceFrom` or departure `price`.
- Use `Money.amount` and `Money.currency`.
- Omit if no price exists.
- Do not invent `0`, `Price on request`, `priceValidUntil`, payment methods, deposits, or checkout data.

FAQ schema rules:

- Emit only for visible tour-specific Q&A.
- Do not emit for a simple link to `/faq/`.
- Omit when fewer than two meaningful tour-specific questions exist.

## Media Requirements

Use `MediaReference` and the approved media strategy.

Rules:

- Public media base: `https://media.omayatravel.com`.
- Use the approved image helper from #12.
- Widths must come from the allowlist: `320`, `480`, `720`, `960`, `1200`, `1600`, `1920`.
- Use `format=auto`.
- Hero images use responsive sources and LCP priority handling.
- Below-fold and gallery images lazy-load.
- Render width and height to prevent layout shift.
- `MediaReference.sourceUrl` may preserve WordPress source during migration but must not become the production media URL.

## Accessibility Requirements

- Exactly one H1.
- Logical H2/H3 hierarchy.
- CTAs, accordions, calendar controls, and gallery controls must be keyboard reachable.
- Accordions expose expanded/collapsed state.
- Availability cannot be communicated by color alone.
- Form inputs have persistent labels.
- Error messages are specific and near the relevant field.
- Meaningful images have descriptive alt text.
- Decorative images may use empty alt only when genuinely decorative.

## Empty And Error States

Missing `gallery`:

- Hide gallery or use a small curated hero-based strip.

Missing `included` or `excluded`:

- Show `Details confirmed during enquiry.` when accurate.

Missing `priceFrom`:

- Show `Price on request`.

Missing `departures`:

- Show on-request dates message and keep enquiry CTA active.

All departures sold out:

- Keep sold-out context visible when useful and use `Ask about future dates`.

Form/API unavailable:

- Show email/phone fallback only when approved global contact content exists.
- Preserve selected tour/departure context where possible.

## Analytics Hooks

Implementation should make room for future analytics events, but must not add analytics tooling until consent and analytics decisions are approved.

Recommended future events:

- tour page viewed
- hero CTA clicked
- available dates clicked
- departure selected
- sold-out alternative clicked
- enquiry started
- enquiry submitted
- FAQ opened
- included/excluded viewed
- related tour clicked
- phone link clicked
- email link clicked

## Files Expected In Angular Implementation

Exact filenames may vary with the Angular app structure created in #8, but #16 should stay within:

```text
apps/website/src/app/features/tours/
apps/website/src/app/shared/
packages/content-models/
content/tours/
content/destinations/
content/media/
```

Do not hard-code reusable business content in presentation components.

## Dependency Rules

This specification approves #15.

Implementation dependencies remain:

- #8 Create Angular website application
- #12 Implement image reference helper
- content migration data for real tour records

Do not start #16 until #8 and #12 are accepted or the Architect explicitly narrows #16 to a non-production shell.

## Acceptance Criteria For Angular

The tour detail implementation can be accepted when:

- It renders `/tour-item/{slug}/` and no `/tours/{slug}/`.
- It uses the approved `Tour` and `MediaReference` contracts.
- It renders the approved section order with responsive desktop/mobile behavior.
- It has enquiry-led CTA behavior and no checkout/payment flow.
- It handles departures, missing departures, sold-out states, missing gallery, missing included/excluded, and price-on-request states.
- It renders metadata, canonical, robots, breadcrumbs, H1, primary content, and JSON-LD in prerendered/static HTML.
- It emits `TouristTrip` and `BreadcrumbList` schema and conditional `Offer`/`FAQPage` only when allowed.
- It uses the approved media helper, media domain, width allowlist, and alt/dimension requirements.
- It excludes draft, archived, noindex, duplicate, filter, preview, and selected-departure variants from sitemap.
- It keeps related tours and destination links crawlable.
- It passes accessibility checks for headings, keyboard controls, labels, statuses, and sticky CTA behavior.

## QA Checklist

QA must verify at least one representative tour with:

- price and departures
- no departures
- sold-out departure context
- gallery
- no gallery
- tour-specific FAQ
- no tour-specific FAQ
- one primary destination
- multiple destinations

QA must also verify duplicate old tour slugs redirect instead of rendering indexable pages.
