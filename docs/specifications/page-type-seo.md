# Page-Type SEO Requirements

Issue: #31
Status: SEO proposal for Architect review
Date: 2026-08-03
Owner: SEO Expert

## Inputs

- `docs/specifications/routing-and-redirects-approved.md`
- `docs/specifications/core-content-models-approved.md`
- `docs/adr/ADR-011-public-routing-and-redirects.md`
- `docs/adr/ADR-012-core-content-models.md`
- `docs/audits/current-site-url-inventory.md`
- `docs/audits/current-site-url-inventory.csv`

## Scope

This specification defines page-type SEO requirements for v1 Angular SSR/prerendered output. It covers metadata, canonicals, headings, structured data, breadcrumbs, sitemap inclusion, image SEO, and noindex/exclusion behavior.

This file does not change approved public routes, content models, redirects, or implementation architecture.

## Global SEO Rules

| Area | Requirement |
| --- | --- |
| Canonical host | All public canonical URLs use `https://omayatravel.com`. |
| Canonical path | HTML page canonicals use the approved path with trailing slash. |
| Canonical source field | Published content uses `seo.canonicalPath` from the approved content model. |
| Public tour route | Tour detail canonicals use `/tour-item/{slug}/`; do not expose `/tours/{slug}/` in v1. |
| Required metadata | Every published indexable page requires `seo.title`, `seo.description`, and `seo.canonicalPath`. |
| Noindex flag | `seo.noindex: true` excludes a page from sitemap and renders `noindex, follow` unless a stricter exclusion is approved. |
| SSR/prerender | Title, description, canonical, robots meta, H1, primary content, breadcrumbs, and JSON-LD must be present in prerendered/static HTML for SEO pages. |
| Duplicate prevention | No two published indexable pages may share a canonical URL or substantially duplicate the same search intent. |
| Redirect protection | Old URLs use the approved redirect map from routing and redirects. Do not solve duplicate content with client-side redirects. |
| Unknown URLs | Unknown URLs must return a real 404 where hosting allows it, not a soft-200 Angular fallback. |

## Metadata Rules

| Field | Rule |
| --- | --- |
| Title length | Prefer 45 to 60 characters when possible. Longer titles are allowed when preserving a strong current title, but avoid boilerplate stuffing. |
| Title pattern | Put the page-specific search intent first and `Omaya Travel` last when brand is needed. |
| Meta description length | Prefer 140 to 160 characters. Shorter is acceptable if it is specific and complete. |
| Meta description content | Describe the visible page content and likely user intent. Do not promise prices, dates, destinations, or services absent from visible content. |
| Open Graph title | Defaults to the SEO title unless a shorter social title is provided. |
| Open Graph description | Defaults to the meta description. |
| Open Graph image | Use `seo.ogImage` when provided; otherwise use the page hero image where meaningful. |
| Twitter card | Use `summary_large_image` when a valid OG image exists; otherwise `summary`. |

## Structured Data Rules

Structured data must describe visible page content and approved content fields only. Do not generate schema properties from empty, draft, inferred, or client-only content.

Global schema rules:

- Use JSON-LD in prerendered/static HTML.
- Use absolute URLs with `https://omayatravel.com`.
- Match every schema URL to the page canonical unless the schema item deliberately identifies the organization or website.
- Include `BreadcrumbList` on every page type that renders visible breadcrumbs.
- Do not include FAQ schema unless the same questions and answers are visible in the page HTML.
- Do not include `Offer`, price, availability, or departure schema unless the relevant fields exist in the approved content item.

## Page-Type Requirements

### Homepage

Approved route: `/`

| Area | Requirement |
| --- | --- |
| Title pattern | `Omaya Travel | Small Group and Private Tours` or an approved equivalent with clear travel intent. |
| Description | Summarize the main destinations, tour styles, and human/local guide positioning visible on the page. |
| Canonical | `/` |
| H1 | One H1 that states the brand offer or primary travel proposition. |
| H2s | Use H2s for major sections such as destinations, tour styles, reasons to book, and latest articles. |
| Schema | `Organization` or `TravelAgency`, `WebSite`, and optional `SearchAction` only if site search exists as a real user feature. |
| Breadcrumbs | No visible breadcrumb required on homepage. Do not emit homepage-only breadcrumb schema unless the site-wide pattern requires it. |
| Sitemap | Include if published and not noindexed. |
| Images | Hero image requires meaningful alt text, width, height, and preload/eager priority if it is the LCP image. |
| Noindex | Never noindex production homepage without explicit Architect approval. |

### Destination Hub

Approved route: `/destinations/`

| Area | Requirement |
| --- | --- |
| Title pattern | `Destinations | Omaya Travel` or a keyword-specific approved variant. |
| Description | Describe the destination collection and countries available in v1. |
| Canonical | `/destinations/` |
| H1 | `Destinations` or an approved equivalent. |
| H2s | Destination country names or grouped discovery sections. |
| Schema | `CollectionPage`, `BreadcrumbList`; optional `ItemList` for visible destination cards. |
| Breadcrumbs | `Home > Destinations`. |
| Sitemap | Include if it contains meaningful destination hub content and links to published destination pages. |
| Images | Destination cards require meaningful image alt text from `MediaReference.alt`. |
| Noindex | Noindex only if the hub is thin, duplicated, or replaced by another approved route. |

### Destination Detail

Approved route: `/destinations/{slug}/`

Content model: `Destination`

| Area | Requirement |
| --- | --- |
| Title pattern | `{Destination Name} Tours and Travel Guide | Omaya Travel` unless a shorter intent-specific title is approved. |
| Description | Use the destination `summary` plus distinctive visible experiences or travel style. |
| Canonical | `seo.canonicalPath` must equal `/destinations/{slug}/`. |
| H1 | Destination name. |
| H2s | Overview, highlights, tours in this destination, practical notes, and related articles where content exists. |
| Schema | `CollectionPage`, `BreadcrumbList`; optional `ItemList` for visible related tours. |
| Breadcrumbs | `Home > Destinations > {Destination Name}`. |
| Sitemap | Include published destinations with `seo.noindex` absent or false. |
| Images | Hero image must use `Destination.heroImage`; gallery images need meaningful alt text, width, height, and captions when useful. |
| Noindex | Noindex draft, archived, thin, duplicate, or placeholder destination records. |

### Tour Listing And Category Landing Pages

Approved routes: existing root slugs such as `/women-only-tours/`, `/solo-travellers-tours/`, `/classic-tours/`, `/private-tours-your-trip-your-rules/`

Content model: `StaticPage` with `pageType: 'landing'` or another Architect-approved content type if later added.

| Area | Requirement |
| --- | --- |
| Title pattern | `{Tour Style or Category} Tours | Omaya Travel` with the primary style first. |
| Description | Describe the visible category promise, destinations, and enquiry path. |
| Canonical | Approved root slug with trailing slash. |
| H1 | Category or landing page intent, for example `Women-Only Tours`. |
| H2s | Use H2s for matching tours, destinations, who it is for, FAQs, and enquiry sections where present. |
| Schema | `CollectionPage`, `BreadcrumbList`; optional `ItemList` for visible tour cards. |
| Breadcrumbs | `Home > {Landing Page Title}` unless a future hierarchy is approved. |
| Sitemap | Include only approved indexable category/landing pages with unique copy and meaningful internal links. |
| Images | Category hero/card images require meaningful alt text and stable dimensions. |
| Noindex | Noindex or exclude search/filter result pages, empty lists, and demo tour-list routes. |

### Tour Detail

Approved route: `/tour-item/{slug}/`

Content model: `Tour`

This page type is covered here at the general page-type level. Issue #14 will define the detailed tour-page SEO requirements, including final schema decisions for `TouristTrip`, `Trip`, `Offer`, and FAQ.

| Area | Requirement |
| --- | --- |
| Title pattern | `{Tour Title} | Omaya Travel` or `{Tour Title} - {Duration} Days | Omaya Travel` when duration is a useful search modifier. |
| Description | Use `Tour.summary` with destination, duration, style, and enquiry intent when visible. |
| Canonical | `seo.canonicalPath` must equal `/tour-item/{slug}/`. |
| H1 | Tour title. |
| H2s | Overview, highlights, itinerary, departures or on-request availability, included/excluded, destination, FAQs, and enquiry section where present. |
| Schema | At minimum `BreadcrumbList`; final trip/tour schema details are deferred to issue #14. |
| Breadcrumbs | `Home > Destinations > {Primary Destination} > {Tour Title}` when the tour has one primary destination; otherwise `Home > Tours > {Tour Title}` only if an approved tours hub exists. |
| Sitemap | Include published tours with `seo.noindex` absent or false and all required content-model validation passing. |
| Images | Hero image uses `Tour.heroImage`; gallery image alt text must describe the specific destination, activity, or scene. |
| Noindex | Noindex draft, archived, duplicate, placeholder, sold-only legacy, or thin tour records. Redirect approved duplicate slugs instead of indexing them. |

### Blog Article

Approved route: `/{slug}/`

Content model: `BlogArticle`

| Area | Requirement |
| --- | --- |
| Title pattern | Use the article title, with `| Omaya Travel` only when useful and length permits. |
| Description | Use `BlogArticle.excerpt` or a hand-written description that reflects visible article content. |
| Canonical | `seo.canonicalPath` must equal `/{slug}/`. |
| H1 | Article title. |
| H2s | Use descriptive editorial subtopics; avoid generic headings such as `Introduction` when a specific heading would help search understanding. |
| Schema | `BlogPosting` or `Article`, `BreadcrumbList`; include `headline`, `description`, `datePublished`, optional `dateModified`, `author`, `image` when available, and canonical `mainEntityOfPage`. |
| Breadcrumbs | `Home > Blog > {Article Title}` if a real blog listing exists; otherwise `Home > {Article Title}`. |
| Sitemap | Include published articles with valid `publishedAt`, `authorName`, `contentPath`, and no `seo.noindex`. |
| Images | Hero image should become the article schema image when available; all meaningful article images require alt text. |
| Noindex | Noindex thin, obsolete, duplicate, draft, archived, or placeholder articles. |

### Blog Listing

Approved route: not yet required. Demo routes such as `/blog-list/`, `/blog-list-2/`, and `/blog-masonry/` are not approved canonical routes unless Architecture selects one.

| Area | Requirement |
| --- | --- |
| Title pattern | `Blog | Omaya Travel` if a real blog listing is approved. |
| Description | Summarize the editorial scope and primary destination/travel advice topics. |
| Canonical | Approved blog listing path only. |
| H1 | `Blog` or approved editorial hub name. |
| H2s | Article groups, destination guides, or latest articles where present. |
| Schema | `CollectionPage`, `BreadcrumbList`; optional `ItemList` for visible article cards. |
| Breadcrumbs | `Home > Blog`. |
| Sitemap | Include only if Architecture approves a real blog listing route with unique content. |
| Images | Article card images inherit `BlogArticle.heroImage` requirements. |
| Noindex | Demo blog list routes remain redirect/noindex/404 per approved routing spec. |

### Static, Trust, Legal, And Support Pages

Approved examples: `/contact/`, `/faq/`, `/our-story/`, `/why-book-with-us/`, `/omaya-travel-license/`, `/privacy-policy/`, `/cookie-policy/`, `/termsconditions/`

Content model: `StaticPage`

| Area | Requirement |
| --- | --- |
| Title pattern | `{Page Title} | Omaya Travel`; legal pages may use exact legal document title. |
| Description | Explain the visible page purpose and trust/support value. Legal descriptions should be factual and concise. |
| Canonical | `/{slug}/` with trailing slash. |
| H1 | Static page title. |
| H2s | Use logical content sections, questions, proof points, form sections, or legal clauses. |
| Schema | `WebPage`, `BreadcrumbList`; `FAQPage` only for visible FAQ Q&A; `ContactPage` for contact if supported by visible contact details. |
| Breadcrumbs | `Home > {Page Title}`. |
| Sitemap | Include published support, trust, and legal pages unless `seo.noindex` is true. |
| Images | Trust/license images must have factual alt text; decorative images should use empty alt only if implementation supports decorative handling. |
| Noindex | Noindex temporary, placeholder, obsolete, or legally unreviewed pages. |

### 404 Page

Approved behavior: real 404, not soft-200.

| Area | Requirement |
| --- | --- |
| Title pattern | `Page Not Found | Omaya Travel`. |
| Description | Optional; if rendered, it must not invite indexing. |
| Canonical | Do not emit a canonical to homepage. A self-canonical is acceptable only if the server returns real 404 and QA approves it. |
| H1 | `Page not found` or equivalent. |
| Schema | No marketing schema. `WebPage` is optional but unnecessary. |
| Breadcrumbs | Optional; if shown, keep it simple. |
| Sitemap | Never include. |
| Noindex | Render `noindex, follow` where possible, while relying on the HTTP 404 as the primary exclusion signal. |

### Excluded And Noindex URLs

Approved excluded categories:

- WordPress admin/login: `/wp-admin/`, `/wp-login.php*`
- WordPress previews: `?preview=true`, `?preview_id=*`
- account, cart, checkout, shop, wishlist unless business scope later requires them
- booking plugin utility pages unless replaced by approved enquiry flow
- theme/demo pages such as shortcode, gallery, tabs, columns, and demo tour-list pages
- filtered tour URLs such as `/tour-item/?type[]=...`
- unknown routes

| URL class | Required SEO behavior |
| --- | --- |
| Admin/login/preview | 404 or blocked/noindex response; never sitemap; never canonical to an indexable page unless a specific redirect is approved. |
| Account/cart/checkout/shop/wishlist | 404 unless redirected to a useful approved page such as `/contact/`. |
| Booking plugin pages | 404 unless redirected to `/contact/` or a future approved enquiry route. |
| Theme/demo pages | 404 unless Search Console proves value and Architecture approves redirect or migration. |
| Filter/query URLs | 301 to clean canonical when known; otherwise noindex/404. Never sitemap by default. |
| Duplicate tour slugs | Single-hop `301` to approved canonical tour URL. |
| Unknown URLs | Real 404; never homepage redirect by default. |

## Breadcrumb Rules

| Page type | Visible breadcrumb |
| --- | --- |
| Homepage | None required. |
| Destination hub | `Home > Destinations` |
| Destination detail | `Home > Destinations > {Destination Name}` |
| Tour category landing | `Home > {Landing Page Title}` |
| Tour detail | `Home > Destinations > {Primary Destination} > {Tour Title}` when primary destination is clear. |
| Blog article | `Home > Blog > {Article Title}` only if a real blog listing exists; otherwise `Home > {Article Title}`. |
| Static/trust/legal/support | `Home > {Page Title}` |
| 404 | Optional. |

Breadcrumb schema must match visible breadcrumb labels and URLs.

## Sitemap Rules

Include only URLs that satisfy all of these:

- Published status.
- `seo.noindex` absent or false.
- Approved public route.
- Unique canonical path.
- Required metadata present.
- Required media fields valid where media is used.
- Not a filter, preview, admin, account, cart, checkout, demo, plugin, or unknown URL.

Exclude:

- Draft and archived content.
- `seo.noindex: true` content.
- Redirect sources.
- 404/410 URLs.
- Query/filter URLs unless Architecture and SEO later approve a unique indexable landing page.
- Media file URLs as page URLs.

## Image SEO Rules

| Area | Requirement |
| --- | --- |
| Required fields | Meaningful images require `MediaReference.key`, `alt`, `width`, and `height`. |
| Alt text | Alt text must describe the specific place, activity, object, or proof shown. Generic text such as `image`, `photo`, `logo`, or empty alt fails for meaningful images. |
| Decorative images | Decorative images may use empty alt only when they carry no content or SEO value. |
| Hero images | Published indexable pages with hero images should expose dimensions, responsive sources, and eager/preload behavior when the hero is the LCP image. |
| OG images | Use `seo.ogImage` first; fallback to hero image only when it is representative and has valid dimensions. |
| Image sitemap | Include important indexable page images only after final media delivery strategy and sitemap generation are approved. |
| Legacy source | `MediaReference.sourceUrl` may store old WordPress media URL during migration but must not become the canonical media URL by default. |

## AI-Search Readability Rules

Angular pages should make entity relationships clear in visible HTML:

- State destination, tour style, duration, difficulty, departure availability, and enquiry path in plain text where available.
- Keep page-specific summaries close to the H1.
- Use descriptive headings rather than layout-only headings.
- Avoid burying essential tour facts only in images, carousels, tabs, accordions, or client-only components.
- Keep FAQ answers visible in HTML if FAQ schema is emitted.
- Use consistent names for destinations and tours across headings, breadcrumbs, metadata, schema, and internal links.

## Angular Acceptance Criteria

Angular can treat this SEO handoff as ready when implementation can verify:

- Every published indexable content item renders title, meta description, canonical, robots, H1, primary body content, breadcrumbs where required, and JSON-LD in prerendered/static HTML.
- Canonicals use `https://omayatravel.com` plus the approved trailing-slash `seo.canonicalPath`.
- No published tour exposes `/tours/{slug}/` as its canonical or sitemap URL.
- Sitemap generation excludes noindex, draft, archived, redirect, query/filter, preview, admin, utility, demo, and unknown URLs.
- Structured data uses only visible content and approved fields.
- Breadcrumb schema matches visible breadcrumbs.
- Images used for SEO have meaningful alt text and dimensions.
- Unknown or excluded URLs do not return indexable `200 index.html`.

## Open Follow-Ups

- Issue #14 must define detailed tour-detail SEO requirements, including final `TouristTrip`, `Trip`, `Offer`, FAQ, departure, price, and enquiry schema decisions.
- Migration must provide final redirect records and any Search Console conflicts before launch.
- QA must validate production/staging HTML output, sitemap contents, redirects, 404 behavior, and noindex behavior after Angular and DevOps implementation.

