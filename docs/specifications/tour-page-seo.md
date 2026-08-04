# Tour Page SEO Requirements

Issue: #14
Status: SEO proposal for Architect review
Date: 2026-08-04
Owner: SEO Expert

## Inputs

- `docs/specifications/routing-and-redirects-approved.md`
- `docs/specifications/core-content-models-approved.md`
- `docs/specifications/page-type-seo.md`
- `docs/specifications/tour-page-ux.md`
- `docs/audits/current-site-url-inventory.md`
- `docs/audits/current-site-url-inventory.csv`

## Scope

This specification defines SEO requirements for tour detail pages in the Angular SSR/prerendered rebuild.

It covers:

- metadata
- canonical URLs
- robots/indexability
- heading hierarchy
- breadcrumbs
- sitemap behavior
- internal linking
- image SEO
- final structured-data rules for `TouristTrip`, `Trip`, `Offer`, `FAQPage`, and supporting schema
- validation and QA acceptance criteria

This file does not change approved public routes, content models, redirects, UX layout, booking scope, backend behavior, or payment policy.

## Approved Tour Route

Tour detail pages use the existing v1 public route:

```text
/tour-item/{slug}/
```

Rules:

- Do not expose `/tours/{slug}/` in v1.
- `Tour.seo.canonicalPath` must equal `/tour-item/{slug}/`.
- Canonical host is `https://omayatravel.com`.
- Canonical URLs use trailing slash.
- Legacy duplicate tour URLs listed in the routing spec must be single-hop `301` redirects to the approved canonical tour URL.

## Tour Model SEO Inputs

The SEO implementation must use only approved `Tour` model fields and visible page content.

| Field | SEO use |
| --- | --- |
| `slug` | Public route segment and canonical path. |
| `title` | H1, title tag source, schema name/headline, internal link anchor source. |
| `status` | Sitemap/indexability gate. Only `published` tours are indexable. |
| `destinationIds` | Breadcrumbs, destination links, schema itinerary/destination context, related-tour logic. |
| `styles` | Metadata modifiers, visible category labels, internal links to approved style landing pages. |
| `summary` | Meta description source, above-fold copy, schema description. |
| `durationDays` | Title/description modifier, key facts, schema duration where representable. |
| `difficulty` | Visible key fact and optional description copy; do not map to unsupported schema claims. |
| `heroImage` | LCP image, OG image fallback, schema image. |
| `gallery` | Supporting image SEO and optional image sitemap candidates. |
| `highlights` | Visible content, H2/H3 support, possible `TouristTrip` description enrichment. |
| `itinerary` | Visible itinerary, schema itinerary candidate, AI-search readability. |
| `included` | Visible commercial clarity; schema only when included text is visible and stable. |
| `excluded` | Visible commercial clarity; not schema by default. |
| `departures` | Visible availability/date context; `Offer` only when a specific departure price/status exists. |
| `priceFrom` | Visible price-from context; `Offer` only when amount and currency exist. |
| `enquiryPath` | CTA target and schema potentialAction target if approved. |
| `seo` | Required metadata, canonical, noindex, OG image. |
| `contentPath` | Long-form visible copy and FAQ source. |

## Metadata Requirements

| Field | Requirement |
| --- | --- |
| Title tag | Prefer `{Tour Title} | Omaya Travel`. Use `{Tour Title} - {durationDays} Days | Omaya Travel` when duration is a meaningful search modifier and the title remains readable. |
| Title length | Prefer 45-65 characters. Preserve strong existing title wording when needed, but avoid keyword stuffing. |
| Meta description | Use `Tour.summary` rewritten to include destination, style, duration, and enquiry intent when visible. |
| Meta description length | Prefer 140-160 characters. |
| OG title | Defaults to title tag unless a shorter social title is approved. |
| OG description | Defaults to meta description. |
| OG image | Use `Tour.seo.ogImage` first. If absent, use `Tour.heroImage` when representative and valid. |
| Twitter card | `summary_large_image` when OG image exists; otherwise `summary`. |
| Robots | `index, follow` for published indexable tours; `noindex, follow` for noindex tours. |

Metadata must not claim:

- guaranteed departures unless visible departure data supports it
- online booking or payment if the approved flow is enquiry-led
- prices when neither `priceFrom` nor departure-specific `price` exists
- reviews, ratings, badges, or partner claims not present in approved content

## Canonical Requirements

| Case | Canonical behavior |
| --- | --- |
| Published canonical tour | `https://omayatravel.com/tour-item/{slug}/` |
| Duplicate legacy tour slug | No indexable page; single-hop `301` to approved canonical target. |
| Query/filter variant | Redirect to clean canonical when known; otherwise noindex/404 per routing spec. |
| Draft/archived tour | No sitemap entry; no public indexable page. |
| Missing required model fields | Build validation should fail before launch or page must be noindexed until fixed. |

Canonical tags must be present in prerendered/static HTML.

## Heading Hierarchy

| Level | Requirement |
| --- | --- |
| H1 | Exactly one H1 from `Tour.title`. |
| H2 | Major sections: overview, highlights, departures/dates, itinerary, included/excluded, pace/group fit, gallery, enquiry, FAQ, related tours. |
| H3 | Subsections such as itinerary day titles, FAQ questions if not implemented as buttons/headings, included/excluded subgroups, and related-tour card headings. |

Rules:

- Heading order must be logical and must not skip levels for visual styling.
- Do not expose `tour-item` as user-facing heading text.
- H2 labels should describe content, not layout controls.
- Accordion/timeline content must keep headings and primary text in the HTML.

## Breadcrumb Requirements

Preferred visible breadcrumb:

```text
Home > Destinations > {Primary Destination} > {Tour Title}
```

Rules:

- `Home` links to `/`.
- `Destinations` links to `/destinations/`.
- `{Primary Destination}` links to `/destinations/{destination-slug}/` when one clear primary destination exists.
- `{Tour Title}` is the current page and may be unlinked.
- If a tour has multiple destinations and no approved primary destination rule exists, use `Home > Destinations > {Tour Title}`.
- Breadcrumb schema must exactly match visible breadcrumb labels and URLs.
- Breadcrumbs must render in prerendered/static HTML.

## Sitemap Requirements

Include a tour detail URL in the XML sitemap only when all are true:

- `Tour.status` is `published`.
- `Tour.seo.noindex` is absent or false.
- `Tour.seo.title`, `Tour.seo.description`, and `Tour.seo.canonicalPath` are present.
- `Tour.seo.canonicalPath` equals `/tour-item/{slug}/`.
- Required model fields pass validation: `destinationIds`, `summary`, `durationDays`, `heroImage`, `highlights`, `itinerary`, `enquiryPath`.
- Every referenced destination is published.
- `heroImage` has `key`, meaningful `alt`, `width`, and `height`.
- The tour is not a duplicate legacy slug that should redirect.

Exclude from sitemap:

- draft, archived, noindex, duplicate, placeholder, sold-only legacy, or thin tours
- redirect source URLs
- filtered/search URLs
- preview URLs
- media file URLs

## Internal Linking Requirements

Tour pages should support crawl paths and user discovery through visible links.

Required internal links:

- Link to `/destinations/`.
- Link to each visible destination page referenced by `destinationIds`.
- Link to `Tour.enquiryPath`, defaulting to `/contact/` unless a future approved enquiry route exists.
- Link to `/omaya-travel-license/` where the license trust element is shown.
- Link to `/faq/`, `/why-book-with-us/`, or `/our-story/` where the trust/support section references those pages.

Recommended internal links:

- Link to approved style/category landing pages when the tour `styles` map to preserved landing pages such as `/women-only-tours/`, `/solo-travellers-tours/`, `/classic-tours/`, or `/private-tours-your-trip-your-rules/`.
- Link to 2-3 related published tours by shared destination or style.
- Link to relevant blog articles when content migration identifies a strong topical match.

Rules:

- Related-tour links must be normal crawlable anchors, not client-only click handlers.
- Filter and comparison interactions must not create indexable URL parameters.
- Anchor text should describe the destination, style, or tour title clearly.

## Image SEO Requirements

| Image type | Requirement |
| --- | --- |
| Hero image | Use `Tour.heroImage`; must include meaningful alt, width, height, responsive sources, and LCP priority handling. |
| OG image | Use `Tour.seo.ogImage` first; otherwise use `Tour.heroImage`. Must have stable dimensions and represent the tour. |
| Gallery images | Use `Tour.gallery` when present. Alt text must describe the specific destination, activity, landmark, or scene. |
| Decorative images | May use empty alt only when genuinely decorative and not part of tour understanding. |
| Legacy source | `MediaReference.sourceUrl` may preserve WordPress origin during migration but must not be emitted as canonical media URL by default. |

Performance rules:

- The hero image is likely the LCP image and should be eager-loaded/preloaded according to the final image helper and media delivery strategy.
- Below-fold gallery images should lazy-load.
- Width and height must be rendered to prevent layout shift.
- Do not render large gallery images above the fold.

Image sitemap rules:

- Include the hero image for indexable published tours after image sitemap generation is approved.
- Include only high-value gallery images that support the tour's destination or experience.
- Exclude decorative UI images, logos repeated site-wide, tracking pixels, and WordPress media attachment-page URLs.

## Structured Data Overview

Tour pages must emit JSON-LD in prerendered/static HTML.

Required schema:

- `BreadcrumbList`
- `TouristTrip`

Conditional schema:

- `Offer` when visible price data exists
- `FAQPage` when visible tour-specific FAQ content exists
- `ImageObject` when the implementation represents hero/OG images as separate image nodes

Not recommended for v1:

- Standalone `Trip` as the primary schema type, because `TouristTrip` is the more specific type for the tour product page.
- `Product`, unless a later SEO/Architect decision chooses ecommerce-style markup with reviews/payment/commercial policy support.
- `AggregateRating`, `Review`, or rating stars unless verified review content is approved and visible.

`Trip` decision:

- Do not emit a separate top-level `Trip` node by default.
- If implementation wants broader compatibility, `TouristTrip` may be emitted with an `additionalType` value referencing `https://schema.org/Trip`.
- Do not duplicate the same page as both unrelated `TouristTrip` and `Trip` entities.

## TouristTrip Schema Requirements

Use one primary `TouristTrip` JSON-LD node for the tour.

Required fields:

| Schema field | Source |
| --- | --- |
| `@type` | `TouristTrip` |
| `@id` | Canonical URL plus `#touristtrip` |
| `url` | Canonical absolute URL |
| `name` | `Tour.title` |
| `description` | `Tour.summary` or `Tour.seo.description` when aligned with visible copy |
| `image` | Absolute URL for `Tour.seo.ogImage` or `Tour.heroImage` |
| `provider` | Omaya Travel organization/travel agency node |
| `touristType` | Human-readable values derived from visible `styles`, for example `Solo travelers`, `Women-only travelers`, `Private groups`, `Curious travelers` |

Recommended fields when data is available and visible:

| Schema field | Source |
| --- | --- |
| `itinerary` | Visible itinerary day list. |
| `duration` | `durationDays`, represented as ISO 8601 duration such as `P8D`. |
| `offers` | `Offer` object when price data exists. |
| `subjectOf` | FAQ or related article only if visible and strongly tied to the tour. |

Avoid:

- exact group size unless approved model/content adds it
- guaranteed availability unless supported by visible departure status
- payment/deposit terms not present in approved content
- invented review/rating fields

## Offer Schema Rules

Emit `Offer` only when price information is visible on the page.

Allowed sources:

- `Tour.priceFrom`
- `Departure.price` for visible specific departures

Required `Offer` fields when emitted:

| Schema field | Source |
| --- | --- |
| `@type` | `Offer` |
| `url` | Canonical tour URL |
| `price` | `Money.amount` |
| `priceCurrency` | `Money.currency` |
| `availability` | Derived from visible departure status or page-level on-request state |

Availability mapping:

| Content state | Schema availability |
| --- | --- |
| At least one visible `available` departure | `https://schema.org/InStock` |
| At least one visible `limited` departure and no available departure | `https://schema.org/LimitedAvailability` |
| Only visible `sold-out` departures | `https://schema.org/SoldOut` |
| On-request departure or no dated departures with enquiry available | `https://schema.org/PreOrder` or omit availability if this feels misleading in implementation review |

Rules:

- Use the lowest visible amount as a from-price only if the visible page copy clearly says price is from that amount.
- Do not emit `priceValidUntil` unless the content model later includes a reliable field.
- Do not emit payment methods, deposits, cancellation policy, or booking checkout properties in v1.
- If no price is available, omit `Offer` rather than inventing `0`, `Price on request`, or a placeholder value.

## FAQ Schema Rules

Emit `FAQPage` only when tour-specific questions and answers are visible in prerendered/static HTML.

Allowed sources:

- approved tour-specific FAQ content from `Tour.contentPath`
- approved global FAQ excerpts only if copied visibly onto the tour page and accurate for that tour

Rules:

- Do not emit FAQ schema for links to `/faq/` alone.
- Do not emit FAQ schema for hidden/off-page modal content.
- Every FAQ schema question must match visible question text.
- Every FAQ schema answer must match visible answer content in substance.
- FAQ answers must not contradict global FAQ, legal, payment, or enquiry content.
- Omit FAQ schema when there are fewer than two meaningful tour-specific questions.

## BreadcrumbList Schema Rules

Required on every indexable tour page.

Rules:

- Use absolute URLs.
- Position values must be sequential.
- Labels and URLs must match visible breadcrumbs.
- The final breadcrumb item uses the canonical tour URL.
- If no primary destination can be determined, omit the destination detail breadcrumb rather than inventing one.

## Organization / TravelAgency Node

Tour pages may reference a shared Omaya Travel organization/travel agency node as the `provider`.

Rules:

- Use consistent `@id`, for example `https://omayatravel.com/#organization`.
- Use `TravelAgency` or `Organization` consistently with the global page-type SEO specification.
- Include only verified business fields available in approved global content.
- Do not invent phone, address, opening hours, reviews, social profiles, memberships, or licenses.

## Departure SEO Rules

Departures are page content, not separate indexable pages in v1.

Rules:

- Departure selection, calendar months, and date filters must not create indexable URLs.
- If UI uses query parameters or fragments for selected dates, those URLs must canonicalize to the clean tour URL and remain excluded from sitemap.
- Sold-out departures may remain visible for trust, but they must not force a noindex state when the tour is still available by enquiry or future departures.
- Missing departures should render visible enquiry/on-request copy, not an empty calendar.

## Duplicate And Legacy Tour Slugs

Approved duplicate tour redirects:

| Old URL | Target |
| --- | --- |
| `/tour-item/bulgaria-trip/` | `/tour-item/bulgaria-beyond-the-ordinary/` |
| `/tour-item/forest-adventure/` | `/tour-item/bulgaria-beyond-the-ordinary/` |
| `/tour-item/safari-tour/` | `/tour-item/kyrgyzstan-tour/` |

Rules:

- Do not migrate approved duplicate slugs as separate indexable tour pages.
- Do not canonicalize duplicate pages while still returning `200`; use the approved single-hop `301`.
- Do not include redirect sources in sitemap.

## Noindex Rules

Tour pages must be noindexed or excluded when:

- `Tour.status` is `draft` or `archived`
- `Tour.seo.noindex` is true
- required SEO metadata is missing
- `heroImage` is missing required media fields
- the tour has no visible summary, highlights, or itinerary
- the tour duplicates another approved tour without distinct intent
- the page is a preview, filter, search, or selected-departure URL variant

Prefer build-time validation failure for broken published tour content. Use `noindex` only when the page intentionally exists for users but should not be indexed.

## AI-Search Readability Requirements

Tour pages must clearly state the following in visible HTML when the model provides it:

- tour title
- destination names
- duration in days
- travel styles
- difficulty
- price-from or price-on-request state
- departure availability or on-request status
- highlights
- day-by-day itinerary
- included and excluded items
- enquiry next step

Keep a concise tour summary close to the H1. Avoid relying on images, carousels, accordions, or client-only interactions for essential facts.

## Angular Acceptance Criteria

Angular implementation can be accepted against this SEO handoff when:

- Tour title, meta description, canonical, robots, OG tags, H1, primary content, breadcrumbs, and JSON-LD render in prerendered/static HTML.
- Canonical URL equals `https://omayatravel.com/tour-item/{slug}/`.
- No tour page exposes `/tours/{slug}/`.
- Published indexable tours are included in sitemap only when validation passes.
- Draft, archived, noindex, duplicate, preview, filter, search, and selected-departure URL variants are excluded from sitemap.
- `TouristTrip` and `BreadcrumbList` schema validate structurally and use only visible approved fields.
- `Offer` schema is omitted unless visible price data exists.
- FAQ schema is omitted unless visible tour-specific FAQ content exists.
- Hero images include meaningful alt, width, height, and LCP priority handling.
- Related tour and destination links render as crawlable anchors.
- Unknown and excluded old URLs do not return indexable soft-200 pages.

## QA Checklist

Before launch, QA should verify at least one representative tour page for:

- title tag pattern and length
- meta description presence and visible-copy alignment
- canonical host/path/trailing slash
- robots meta
- one H1
- logical H2/H3 order
- visible breadcrumbs and matching `BreadcrumbList`
- `TouristTrip` schema fields
- conditional `Offer` behavior with and without price
- conditional `FAQPage` behavior with and without tour-specific FAQ
- sitemap inclusion/exclusion
- duplicate tour redirects
- filtered/query/departure selection URL exclusion
- hero image alt/dimensions/LCP behavior
- crawlable internal links to destination, enquiry, trust, and related tour pages

## Open Follow-Ups

- Architect should reconcile this SEO proposal with `docs/specifications/tour-page-ux.md` in the approved tour-page implementation specification for issue #15.
- Media delivery strategy may refine exact image URL generation, image sitemap format, and hero-image preload implementation.
- Backend/API contracts may later refine enquiry context handling, but this SEO handoff does not require backend booking or payment fields.
