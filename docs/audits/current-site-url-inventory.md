# Current Site URL Inventory

Issue: [#2](https://github.com/AntoniTomov/OmayaTravel-Angular/issues/2)  
Role: SEO Expert  
Site audited: `https://omayatravel.com/`  
Audit date: 2026-08-03  
Primary companion file: `docs/audits/current-site-url-inventory.csv`

## Executive Summary

This audit inventories the current public WordPress URL surface for Omaya Travel before the Angular SSR/prerendered rebuild. It is a migration-focused SEO evidence file, not the final route or redirect decision.

The crawl reconciled XML sitemap URLs with same-domain links discovered from public rendered HTML. It found 100 sitemap URLs and 135 total same-domain URLs after following public internal links. Of those, 129 returned `200`, 2 returned `403`, and 4 returned `404`.

The main SEO risk is not lack of crawlability. The main risk is that the current WordPress site exposes a mixture of valuable pages, real tour/destination content, theme/demo pages, WooCommerce/account pages, calendar/booking utility pages, preview URLs, login/admin URLs, and duplicate tour slugs with canonicals pointing elsewhere. The Angular rebuild should preserve or redirect valuable URLs, but it should not blindly recreate the entire WordPress URL surface as indexable routes.

## Methodology

Sources used:

- XML sitemap discovery from `https://omayatravel.com/sitemap.xml` and child sitemaps.
- Public same-domain crawl from the homepage and discovered internal links.
- Rendered server HTML inspection for titles, meta descriptions, canonicals, robots meta state, headings, JSON-LD structured data, internal links, and image references.
- Architect assignment comment: `https://github.com/AntoniTomov/OmayaTravel-Angular/issues/2#issuecomment-5170763755`.
- Project workflow and SEO handoff contracts in `docs/EXPERT_WORKFLOW.md`, `docs/GITHUB_ISSUES_WORK_ORDERS.md`, and `docs/INTERFACE_CONTRACTS.md`.

Sitemaps checked:

- `https://omayatravel.com/sitemap.xml`
- `https://omayatravel.com/sitemap_index.xml`
- `https://omayatravel.com/page-sitemap.xml`
- `https://omayatravel.com/post-sitemap.xml`
- `https://omayatravel.com/destinations-sitemap.xml`
- `https://omayatravel.com/tour-item-sitemap.xml`
- `https://omayatravel.com/wp-sitemap.xml`

Limitations:

- Google Search Console exports, analytics, backlink data, WordPress WXR exports, SEO plugin exports, and redirect-plugin exports were not available in this task.
- The crawl did not use a paid SEO platform.
- Private raw exports and customer data were not accessed or committed.
- The CSV captures crawl-time evidence only. Final route and redirect decisions remain blocked on architecture issue #5.

## Crawl Totals

| Metric | Count |
| --- | ---: |
| Sitemap URLs discovered | 100 |
| Total same-domain URLs crawled | 135 |
| HTTP `200` URLs | 129 |
| HTTP `403` URLs | 2 |
| HTTP `404` URLs | 4 |
| Critical migration priority | 1 |
| High migration priority | 43 |
| Medium migration priority | 64 |
| Low migration priority | 27 |

## Page-Type Findings

| Page type guess | Count | SEO interpretation |
| --- | ---: | --- |
| Home | 6 | Includes canonical homepage plus query duplicates such as `?page_id=` URLs. Only `/` should be treated as the canonical homepage route. |
| Tour/destination candidate | 43 | Includes real tour pages, destination pages, tour archive/listing routes, trust pages, and some theme/demo tour pages. Needs intent separation before final routes. |
| Content page | 75 | Mixed WordPress pages, demo shortcodes, utility pages, booking pages, account/cart/shop pages, and date/archive pages. Many should not become indexable Angular routes. |
| Blog/article | 7 | Includes real editorial content plus blog-list demo/archive pages. Preserve article URLs where practical. |
| Static page | 2 | Contact and privacy-policy were identified as static/trust pages. |
| Taxonomy/archive | 2 | Category archive URLs exist and should be reviewed before indexing. |

## Critical and High-Priority URLs

The full URL-level inventory is in `docs/audits/current-site-url-inventory.csv`. These are the URLs currently proposed as critical or high priority based on migration value, current status, and search/conversion intent:

| Current URL | Type guess | Proposed destination | Proposed outcome | Risk note |
| --- | --- | --- | --- | --- |
| `/` | Home | `/` | Keep | Preserve homepage equity and canonical root. |
| `/contact/` | Static page | `/contact/` | Keep | Preserve lead/contact path. |
| `/10-unmissable-places-to-visit-on-your-bulgaria-trip/` | Blog/article | Same slug or approved blog route | Keep or redirect | Preserve article slug where practical. |
| `/how-to-visit-song-kul-lake-in-kyrgyzstan/` | Blog/article | Same slug or approved blog route | Keep or redirect | Preserve article slug where practical. |
| `/tassili-najjer-national-park-algeria-guide/` | Blog/article | Same slug or approved blog route | Keep or redirect | Preserve article slug where practical. |
| `/the-complete-visitor-guide-to-rila-monastery/` | Blog/article | Same slug or approved blog route | Keep or redirect | Preserve article slug where practical. |
| `/destinations/` | Destination archive | Same slug or approved destination hub | Keep or redirect | Destination hub intent should be distinct from tour listings. |
| `/destinations/algeria/` | Destination page | Same slug or approved destination route | Keep or redirect | Country/destination intent should stay separate from tour-detail intent. |
| `/destinations/bulgaria/` | Destination page | Same slug or approved destination route | Keep or redirect | Country/destination intent should stay separate from tour-detail intent. |
| `/destinations/kyrgyzstan/` | Destination page | Same slug or approved destination route | Keep or redirect | Country/destination intent should stay separate from tour-detail intent. |
| `/destinations/morocco/` | Destination page | Same slug or approved destination route | Keep or redirect | Country/destination intent should stay separate from tour-detail intent. |
| `/tour-item/algeria-desert-expedition-tadrart-rouge/` | Tour page | Same slug or approved tour route | Keep or redirect | Important tour URL; avoid redirect chains. |
| `/tour-item/bulgaria-beyond-the-ordinary/` | Tour page | Same slug or approved tour route | Keep or redirect | Important tour URL and canonical target for duplicate tour slugs. |
| `/tour-item/kyrgyzstan-tour/` | Tour page | Same slug or approved tour route | Keep or redirect | Important tour URL and canonical target for duplicate tour slugs. |
| `/tour-item/morocco-tour/` | Tour page | Same slug or approved tour route | Keep or redirect | Important tour URL. |
| `/tour-item/tour-item-morocco-solo-travellers-tour/` | Tour page | Same slug or approved tour route | Keep or redirect | Important niche tour URL. |
| `/tour-item/tour-item-morocco-women-only-tour/` | Tour page | Same slug or approved tour route | Keep or redirect | Important niche tour URL. |
| `/tour-item/women-only-tour-bulgaria/` | Tour page | Same slug or approved tour route | Keep or redirect | Important niche tour URL. |
| `/tour-item/women-only-tour-kyrgyzstan/` | Tour page | Same slug or approved tour route | Keep or redirect | Important niche tour URL. |
| `/private-tours-your-trip-your-rules/` | Tour category/landing page | Same slug or approved category route | Keep or redirect | Commercial intent; separate from individual tours. |
| `/solo-travellers-tours/` | Tour category/landing page | Same slug or approved category route | Keep or redirect | Commercial intent; separate from individual tours. |
| `/women-only-tours/` | Tour category/landing page | Same slug or approved category route | Keep or redirect | Commercial intent; separate from individual tours. |
| `/classic-tours/` | Tour category/landing page | Same slug or approved category route | Keep or redirect | Commercial intent; separate from individual tours. |
| `/why-book-with-us/` | Trust page | Same slug or approved trust page route | Keep or redirect | Useful internal trust/conversion page. |
| `/our-story/` | Trust/about page | Same slug or approved about route | Keep or redirect | Useful brand trust page. |
| `/omaya-travel-license/` | Trust/legal proof page | Same slug or approved trust route | Keep or redirect | Preserve licensing/trust evidence if still accurate. |
| `/faq/` | Support/trust page | Same slug or approved FAQ route | Keep or redirect | FAQ content may support rich results if content is kept visible in SSR HTML. |

## Duplicate and Canonical Risks

The crawl found several duplicate or alternate tour slugs with canonicals pointing to a different URL:

| URL | Current canonical | Proposed handling |
| --- | --- | --- |
| `/tour-item/bulgaria-trip/` | `/tour-item/bulgaria-beyond-the-ordinary/` | Consolidate or 301 to the canonical tour URL unless architecture deliberately keeps both with distinct content. |
| `/tour-item/forest-adventure/` | `/tour-item/bulgaria-beyond-the-ordinary/` | Consolidate or 301 to the canonical tour URL unless architecture deliberately keeps both with distinct content. |
| `/tour-item/safari-tour/` | `/tour-item/kyrgyzstan-tour/` | Consolidate or 301 to the canonical tour URL unless architecture deliberately keeps both with distinct content. |

These should be treated as redirect-sensitive. Do not migrate them as separate indexable Angular tour pages unless content and intent are made meaningfully distinct.

## Low-Value or Exclusion Candidates

The CSV includes many URLs that appear to be WordPress/theme/plugin utility pages rather than strategic SEO landing pages. Proposed handling is usually noindex, consolidate, remove with documented reason, or redirect to a useful equivalent.

Examples:

- Theme/demo pages: `/accordions-and-toogles/`, `/blockquote/`, `/buttons/`, `/columns/`, `/dropcaps/`, `/headings/`, `/icon-list/`, `/icon-with-text/`, `/image-gallery/`, `/parallax-sections/`, `/progress-bar/`, `/separators/`, `/tabs/`, `/title-subtitle/`, `/video-button/`.
- WooCommerce/account pages: `/cart/`, `/cart-2/`, `/checkout/`, `/checkout-2/`, `/my-account/`, `/my-account-2/`, `/shop/`, `/shop-2/`, `/wishlist/`.
- Booking/calendar utility pages: `/calendar/`, `/calendar-2027/`, `/wp-booking-calendar-contact/`, `/wp-booking-calendar-full-day/`, `/wp-booking-calendar-time-appointments/`, `/wp-booking-calendar-time-slots/`, `/wpbc-bfb-preview/`, `/wpbc-booking-received/`.
- Preview/query URLs: `?preview=true`, `?preview_id=...`, `?page_id=...`, filtered tour URLs such as `/tour-item/?type%5B%5D=...`.
- WordPress admin/login URLs: `/wp-admin/`, `/wp-login.php?...`.

These should not be silently deleted if indexed or linked externally. If Google Search Console shows impressions/clicks/backlinks, assign an explicit 301 target or documented no-redirect reason.

## Structured Data Findings

Structured data was present in crawlable HTML, but the audit should be treated as a baseline rather than an implementation model. Current schema types were captured per URL in the CSV.

Recommended Angular direction:

- Homepage and organization/trust pages: render `Organization` and `WebSite` schema where content supports it.
- Destination pages: render destination-oriented schema only if the final content model supports visible, crawlable destination content.
- Tour pages: define explicit `TouristTrip`, `Trip`, `Offer`, `BreadcrumbList`, and optional FAQ decisions in issue #14 after route strategy and content models are approved.
- Blog posts: render `Article` or `BlogPosting` schema with author, date, image, and canonical URL.
- Breadcrumbs: render visible breadcrumbs and matching `BreadcrumbList` schema on destination, tour, and blog pages.

## Angular SSR and Indexation Requirements

For every production page approved from this inventory:

- Render meaningful page copy, primary heading, metadata, canonical, breadcrumbs, and structured data in SSR/prerendered HTML.
- Do not require client-side JavaScript for Google to see core content, tour details, prices, dates, or FAQs.
- Keep filtered/search URLs out of the XML sitemap unless explicitly designed as indexable landing pages.
- Use canonical URLs consistently; avoid parameterized canonicals for filtered pages.
- Do not create duplicate destination, country, and tour pages with overlapping intent.
- Ensure every old URL has one of: kept route, single-hop 301 redirect, noindex/exclusion rule, or documented no-redirect reason.

## Proposed Migration Rules for Issue #5

These are SEO proposals for architecture review, not final decisions:

1. Preserve `/` as the canonical homepage.
2. Preserve or single-hop redirect high-value blog article URLs.
3. Preserve or single-hop redirect country/destination URLs under `/destinations/`.
4. Preserve or single-hop redirect real tour detail URLs currently under `/tour-item/`.
5. Consolidate duplicate tour slugs that already canonicalize to another tour URL.
6. Do not index WordPress preview, admin, login, account, cart, checkout, or plugin utility URLs.
7. Do not index filtered tour URLs unless architecture approves deliberate SEO landing pages with unique copy and canonical rules.
8. Document every non-migrated indexed URL after Search Console export is available.

## Redirect-Sensitive Risks

- Several current high-value URLs live under WordPress/theme route patterns such as `/tour-item/`. If Angular changes tour routes, every old tour URL needs a direct 301 to the approved equivalent.
- Duplicate tour URLs already canonicalize to stronger URLs. Migrating both without consolidation would create duplicate content.
- Demo/theme URLs may be crawlable and indexable. Search Console must confirm whether any receive impressions before removal.
- Query URLs and preview URLs are internally discoverable. The Angular rebuild should prevent equivalent crawl traps.
- Image URLs under `/wp-content/uploads/` are discoverable. Media migration should map important image assets, but image file URLs should not become page routes.

## Open Questions and Blockers

- Google Search Console URL export is needed to identify indexed URLs, clicks, impressions, and pages not found by sitemap/crawl.
- WordPress WXR export and SEO plugin metadata export are needed to reconcile titles, descriptions, drafts, publication status, redirects, and historical slugs.
- Redirect plugin or server redirect export is needed before final redirect mapping.
- Architecture must decide whether final Angular tour URLs preserve `/tour-item/{slug}/` or normalize to a new `/tours/{slug}/` pattern.
- Architecture must decide whether `/destinations/{country}/` stays as the destination route pattern.
- Content models must separate country, destination, tour, departure, category, and blog article intent before issue #14 can define tour-page SEO requirements.
- The current site should be frozen or re-crawled immediately before launch because WordPress content appears actively edited, including 2026/2027 date pages and preview URLs.

## Acceptance-Criteria Mapping

| Requirement | Status |
| --- | --- |
| Sitemap, crawl, and available exports reconciled | Partially met: sitemap and crawl reconciled; WordPress/GSC exports unavailable. |
| Important indexed URLs are not missing | Partially met: public sitemap and crawl URLs captured; GSC export still required for indexed-but-unlinked URLs. |
| Titles, meta descriptions, canonicals, indexability, headings, schema captured | Met for crawled public HTML; see CSV. |
| Each priority URL has proposed migration outcome and proposed Angular route | Met as proposal; final route decisions remain issue #5. |
| Redirect-sensitive risks called out | Met. |
| Open questions and blockers listed | Met. |

