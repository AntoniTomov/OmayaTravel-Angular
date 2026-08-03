# Redirect Map

Issue: #29
Requester: Migration Expert
Status: Ready for Architect review
Date: 2026-08-03

## Source Documents

- `docs/specifications/routing-and-redirects-approved.md`
- `docs/adr/ADR-011-public-routing-and-redirects.md`
- `docs/audits/current-site-url-inventory.md`
- `docs/audits/current-site-url-inventory.csv`

## Scope

This file maps the current WordPress URL surface to the approved v1 public route strategy.

It is not a Cloudflare, Hostinger, Angular or `.htaccess` configuration file. No structured redirect file is included because no Architect-approved redirect-file format exists yet.

## Global Redirect Rules

| Rule | Outcome | Notes |
| --- | --- | --- |
| `http://omayatravel.com/*` | `301` to `https://omayatravel.com/*` | Canonical HTTPS normalization. |
| `https://www.omayatravel.com/*` | `301` to `https://omayatravel.com/*` | Canonical host is apex. |
| Public HTML route without trailing slash | `301` to trailing-slash path | Trailing slash is canonical for public HTML routes. |
| Unknown path | Real `404` | Do not soft-200 through Angular fallback. |
| WordPress admin/login/preview URLs | `404`, blocked response, or noindex exclusion | Never sitemap. |

Canonical host and HTTPS normalization must run before content redirects. Old URL redirects must run before any Angular fallback.

## Keep Routes

These URLs should exist as v1 public pages and return `200` at the same canonical path.

| Current URL | New URL | Status | Page type | Source |
| --- | --- | --- | --- | --- |
| `/` | `/` | `200` keep | Homepage | Approved spec, SEO inventory |
| `/contact/` | `/contact/` | `200` keep | Static lead page | Approved spec, SEO inventory |
| `/destinations/` | `/destinations/` | `200` keep | Destination hub | Approved spec |
| `/destinations/algeria/` | `/destinations/algeria/` | `200` keep | Destination detail | Approved spec |
| `/destinations/bulgaria/` | `/destinations/bulgaria/` | `200` keep | Destination detail | Approved spec |
| `/destinations/kyrgyzstan/` | `/destinations/kyrgyzstan/` | `200` keep | Destination detail | Approved spec |
| `/destinations/morocco/` | `/destinations/morocco/` | `200` keep | Destination detail | Approved spec |
| `/tour-item/algeria-desert-expedition-tadrart-rouge/` | `/tour-item/algeria-desert-expedition-tadrart-rouge/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/tour-item/bulgaria-beyond-the-ordinary/` | `/tour-item/bulgaria-beyond-the-ordinary/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/tour-item/kyrgyzstan-tour/` | `/tour-item/kyrgyzstan-tour/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/tour-item/morocco-tour/` | `/tour-item/morocco-tour/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/tour-item/tour-item-morocco-solo-travellers-tour/` | `/tour-item/tour-item-morocco-solo-travellers-tour/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/tour-item/tour-item-morocco-women-only-tour/` | `/tour-item/tour-item-morocco-women-only-tour/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/tour-item/women-only-tour-bulgaria/` | `/tour-item/women-only-tour-bulgaria/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/tour-item/women-only-tour-kyrgyzstan/` | `/tour-item/women-only-tour-kyrgyzstan/` | `200` keep | Tour detail | Approved spec, SEO inventory |
| `/private-tours-your-trip-your-rules/` | `/private-tours-your-trip-your-rules/` | `200` keep | Commercial landing page | Approved spec, SEO inventory |
| `/solo-travellers-tours/` | `/solo-travellers-tours/` | `200` keep | Commercial landing page | Approved spec, SEO inventory |
| `/women-only-tours/` | `/women-only-tours/` | `200` keep | Commercial landing page | Approved spec, SEO inventory |
| `/classic-tours/` | `/classic-tours/` | `200` keep | Commercial landing page | Approved spec, SEO inventory |
| `/why-book-with-us/` | `/why-book-with-us/` | `200` keep | Trust page | Approved spec, SEO inventory |
| `/our-story/` | `/our-story/` | `200` keep | About/trust page | Approved spec, SEO inventory |
| `/omaya-travel-license/` | `/omaya-travel-license/` | `200` keep if accurate | Trust/legal proof page | Approved spec, SEO inventory |
| `/faq/` | `/faq/` | `200` keep | Support/trust page | Approved spec, SEO inventory |
| `/privacy-policy/` | `/privacy-policy/` | `200` keep | Legal page | Approved spec, SEO inventory |
| `/cookie-policy/` | `/cookie-policy/` | `200` keep if accurate | Legal page | Approved spec |
| `/termsconditions/` | `/termsconditions/` | `200` keep if accurate | Legal page | Approved spec, SEO inventory |
| `/10-unmissable-places-to-visit-on-your-bulgaria-trip/` | `/10-unmissable-places-to-visit-on-your-bulgaria-trip/` | `200` keep | Blog article | Approved spec, SEO inventory |
| `/how-to-visit-song-kul-lake-in-kyrgyzstan/` | `/how-to-visit-song-kul-lake-in-kyrgyzstan/` | `200` keep | Blog article | Approved spec, SEO inventory |
| `/tassili-najjer-national-park-algeria-guide/` | `/tassili-najjer-national-park-algeria-guide/` | `200` keep | Blog article | Approved spec, SEO inventory |
| `/the-complete-visitor-guide-to-rila-monastery/` | `/the-complete-visitor-guide-to-rila-monastery/` | `200` keep | Blog article | Approved spec, SEO inventory |

## Required Exact 301 Redirects

These redirects are approved and should be implemented as single-hop permanent redirects.

| Old URL | Target URL | Status | Reason |
| --- | --- | --- | --- |
| `/tour-item/bulgaria-trip/` | `/tour-item/bulgaria-beyond-the-ordinary/` | `301` | Duplicate tour slug canonicalizes to stronger tour page. |
| `/tour-item/forest-adventure/` | `/tour-item/bulgaria-beyond-the-ordinary/` | `301` | Duplicate tour slug canonicalizes to stronger tour page. |
| `/tour-item/safari-tour/` | `/tour-item/kyrgyzstan-tour/` | `301` | Duplicate tour slug canonicalizes to stronger tour page. |

## Required Query Redirects

These exact query URLs should redirect to clean canonical paths when the target page is kept.

| Old URL | Target URL | Status | Condition |
| --- | --- | --- | --- |
| `/?page_id=2719` | `/cookie-policy/` | `301` | Use if cookie policy is kept. |
| `/?page_id=3` | `/privacy-policy/` | `301` | Approved target exists. |
| `/?page_id=635` | `/our-story/` | `301` | Approved target exists. |
| `/?page_id=852` | `/faq/` | `301` | Approved target exists. |
| `/?page_id=910` | `/why-book-with-us/` | `301` | Approved target exists. |

Do not add more query redirects without Search Console, analytics, internal-link or export evidence.

## Approved High-Priority Consolidation And Exclusion Outcomes

These URLs were visible or route-sensitive in the audit, but the approved route strategy does not make them indexable v1 pages by default.

| Current URL | Outcome | Target | Notes |
| --- | --- | --- | --- |
| `/3122-2/` | `301` preferred | `/contact/` | Numeric slug for "Let's Create Your Ideal Tour"; redirect to `/contact/` unless a named private-tour enquiry page is approved. |
| `/not-yet-but-soon/` | `404` or noindex/exclude | None | Placeholder page; do not launch as indexable content. |
| `/title-subtitle/` | `404` or noindex/exclude | None | Theme/demo utility page. |
| `/blog-list/` | `404` or noindex/exclude | None | Redirect only if an approved blog listing route exists. |
| `/blog-list-2/` | `404` or noindex/exclude | None | Duplicate/demo blog listing; redirect only if an approved blog listing route exists. |
| `/blog-masonry/` | `404` or noindex/exclude | None | Demo blog listing; redirect only if an approved blog listing route exists. |
| `/tour-item/` | `404` or noindex/exclude | None | Redirect only if an approved tour listing/category route exists. |
| `/tour-list/` | `404` or noindex/exclude | None | Demo tour listing; redirect only if an approved tour listing route exists. |
| `/tour-list-2/` | `404` or noindex/exclude | None | Demo tour listing; redirect only if an approved tour listing route exists. |
| `/tour-list-carousel/` | `404` or noindex/exclude | None | Demo tour listing; redirect only if an approved tour listing route exists. |
| `/tour-list-gallery/` | `404` or noindex/exclude | None | Demo tour listing; redirect only if an approved tour listing route exists. |
| `/tour-list-masonry/` | `404` or noindex/exclude | None | Demo tour listing; redirect only if an approved tour listing route exists. |
| `/tour-list-standard-2/` | `404` or noindex/exclude | None | Demo tour listing; redirect only if an approved tour listing route exists. |
| `/tour-carousel/` | `404` or noindex/exclude | None | Demo tour listing; redirect only if an approved tour listing route exists. |
| `/tour-filter/` | `404` or noindex/exclude | None | Filter page must not become a crawl trap. |
| `/tour-search-page/` | `404` or noindex/exclude | None | Search results are not indexable v1 pages. |
| `/tour-checkout/` | `301` preferred | `/contact/` | No booking checkout in v1; redirect to `/contact/` or future approved enquiry route. |
| `/wp-content/uploads/2018/03/Sofia-City-Tour-Bulgaria.webp` | Media migration only | Media key TBD | Not a page route; keep or map through media migration, not Angular routing. |

## Category Exclusions

These URL categories must not return indexable `200` responses.

| Category | Examples | Outcome |
| --- | --- | --- |
| WordPress admin/login | `/wp-admin/`, `/wp-login.php*` | `404`, blocked response, or noindex exclusion; never sitemap. |
| WordPress previews | `?preview=true`, `?preview_id=*` | `404` or noindex exclusion. |
| Account/cart/shop/wishlist | `/cart/`, `/checkout/`, `/my-account/`, `/shop/`, `/wishlist/` | `404` unless a useful approved redirect target exists. |
| Booking plugin pages | `/wp-booking-calendar-*`, `/wpbc-*`, `/calendar/`, `/calendar-2027/` | `404` unless redirected to `/contact/` or future approved enquiry route. |
| Theme/demo utility pages | `/accordions-and-toogles/`, `/blockquote/`, `/buttons/`, `/columns/`, `/dropcaps/`, `/headings/`, `/icon-list/`, `/icon-with-text/`, `/image-gallery/`, `/parallax-sections/`, `/progress-bar/`, `/separators/`, `/tabs/`, `/video-button/` | `404` unless Search Console proves value and Architect approves a target. |
| Filtered tour URLs | `/tour-item/?type[]=...` and encoded equivalents | `301` to clean canonical when known; otherwise noindex or `404`. |
| Unknown URLs | Any non-approved route | Real `404`; never homepage redirect. |

## Implementation Order For DevOps

| Order | Rule family | Purpose |
| --- | --- | --- |
| 1 | HTTPS and apex-host normalization | Ensure canonical scheme and host. |
| 2 | Exact old URL redirects | Preserve value and avoid redirect chains. |
| 3 | Category exclusions and explicit 404s | Prevent WordPress/demo/plugin crawl traps. |
| 4 | Hostinger fallback | Only after redirects and explicit 404 handling. |
| 5 | Angular not-found route | Client navigation support only; not a substitute for server 404s. |

## Architect Review Questions

| Question | Reason |
| --- | --- |
| Is `/3122-2/` approved for immediate `301` to `/contact/`, or should it wait for a named private-tour enquiry route? | The approved spec allows either path depending on content model. |
| Should `/tour-checkout/` redirect to `/contact/` now, or wait for a future enquiry route? | No booking checkout exists in v1. |
| Is there an approved blog listing route for `/blog-list/`, `/blog-list-2/`, and `/blog-masonry/` redirects? | No blog listing public route is approved in the routing spec. |
| Is there an approved tour listing route for the demo tour-list URLs? | No generic tour listing public route is approved in the routing spec. |
| Should any booking/calendar utility URL redirect to `/contact/`, or should they all be excluded until enquiry flow is approved? | The spec allows useful redirects but does not name exact targets for all booking/plugin URLs. |

## Verification Checklist

- Every keep route returns `200` at the approved trailing-slash canonical path.
- Every exact duplicate tour redirect returns a single-hop `301`.
- Query redirects normalize to clean canonical paths without chains.
- Excluded WordPress utility/admin/preview URLs do not return indexable `200`.
- Unknown paths return a real `404`.
- Sitemap includes only approved indexable routes.
- Canonicals use `https://omayatravel.com` and trailing slashes.
