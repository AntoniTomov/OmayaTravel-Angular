# Redirect Map

Issue: #29
Requester: Migration Expert
Status: Ready for Architect review
Date: 2026-08-03

## Source Documents

- `docs/specifications/routing-and-redirects-approved.md`
- `docs/specifications/core-content-models-approved.md`
- `docs/adr/ADR-011-public-routing-and-redirects.md`
- `docs/adr/ADR-012-core-content-models.md`
- `docs/audits/current-site-url-inventory.md`
- `docs/audits/current-site-url-inventory.csv`

## Scope

This file maps the current WordPress URL surface to the approved v1 public route strategy.

It is not a Cloudflare, Hostinger, Angular or `.htaccess` configuration file. No structured redirect file is included because the approved `content/redirects/` path becomes active only after #7 initializes the workspace.

## Approved Redirect Model Alignment

ADR-012 approves `RedirectRule` as the future normalized redirect contract:

```ts
export interface RedirectRule {
  sourcePath: string;
  targetPath?: string;
  status: 301 | 302 | 404 | 410;
  reason: string;
}
```

When the workspace exists, this map should be translated into structured redirect records under the approved `content/redirects/` location. Permanent migrations use `301`, exclusions use `404` or `410` when approved, and redirect chains remain disallowed.

Raw WordPress exports, Search Console exports, analytics exports and redirect-plugin exports must stay out of Git unless the Lead Architect approves a storage location.

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
| `/3122-2/` | `301` | `/contact/` | Numeric slug for "Let's Create Your Ideal Tour"; v1 redirects to `/contact/` unless a future approved enquiry route replaces it. |
| `/not-yet-but-soon/` | `404` or noindex/exclude | None | Placeholder page; do not launch as indexable content. |
| `/title-subtitle/` | `404` or noindex/exclude | None | Theme/demo utility page. |
| `/blog-list/` | `404` | None | Demo blog-list route; v1 excludes it unless Architecture later approves a real blog listing route. |
| `/blog-list-2/` | `404` | None | Duplicate/demo blog-list route; v1 excludes it unless Architecture later approves a real blog listing route. |
| `/blog-masonry/` | `404` | None | Demo blog-list route; v1 excludes it unless Architecture later approves a real blog listing route. |
| `/tour-item/` | `404` | None | Empty WordPress tour archive; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-list/` | `404` | None | Demo tour-list route; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-list-2/` | `404` | None | Demo tour-list route; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-list-carousel/` | `404` | None | Demo tour-list route; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-list-gallery/` | `404` | None | Demo tour-list route; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-list-masonry/` | `404` | None | Demo tour-list route; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-list-standard-2/` | `404` | None | Demo tour-list route; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-carousel/` | `404` | None | Demo tour carousel route; v1 excludes it unless Architecture later approves a tours hub or indexable landing page. |
| `/tour-filter/` | `404` | None | Filter page must not become a crawl trap; v1 excludes it unless Architecture later approves an indexable landing page. |
| `/tour-search-page/` | `404` | None | Search results are not indexable v1 pages; v1 excludes it unless Architecture later approves an indexable search landing page. |
| `/tour-checkout/` | `301` | `/contact/` | No checkout or booking flow is approved for v1; redirect to `/contact/` unless a future approved enquiry route replaces it. |
| `/wp-content/uploads/2018/03/Sofia-City-Tour-Bulgaria.webp` | Media migration only | Media key TBD | Not a page route; keep or map through media migration, not Angular routing. |

## Category Exclusions

These URL categories must not return indexable `200` responses.

| Category | Examples | Outcome |
| --- | --- | --- |
| WordPress admin/login | `/wp-admin/`, `/wp-login.php*` | `404`, blocked response, or noindex exclusion; never sitemap. |
| WordPress previews | `?preview=true`, `?preview_id=*` | `404` or noindex exclusion. |
| Account/cart/shop/wishlist | `/cart/`, `/checkout/`, `/my-account/`, `/shop/`, `/wishlist/` | `404` unless a useful approved redirect target exists. |
| Booking plugin pages | `/wp-booking-calendar-*`, `/wpbc-*`, `/calendar/`, `/calendar-2027/` | Default `404`; only exact high-value URLs with Search Console, analytics, internal-link or export evidence may redirect to `/contact/`. |
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

## Implementation-Critical V1 Decisions

| URL or category | V1 decision | Future change rule |
| --- | --- | --- |
| `/3122-2/` | `301` to `/contact/`. | May change only if a future approved enquiry route exists. |
| `/tour-checkout/` | `301` to `/contact/`. | May change only if a future approved checkout, booking or enquiry route exists. |
| Demo blog-list routes | `404`. | May change only if Architecture approves a real blog listing route. |
| Demo tour-list, filter and search routes | `404`. | May change only if Architecture approves a tours hub or indexable landing page. |
| Booking/calendar utility URLs | Default `404`. | Exact high-value URLs may redirect to `/contact/` only with Search Console, analytics, internal-link or export evidence. |

## Verification Checklist

- Every keep route returns `200` at the approved trailing-slash canonical path.
- Every exact duplicate tour redirect returns a single-hop `301`.
- Query redirects normalize to clean canonical paths without chains.
- Excluded WordPress utility/admin/preview URLs do not return indexable `200`.
- Unknown paths return a real `404`.
- Sitemap includes only approved indexable routes.
- Canonicals use `https://omayatravel.com` and trailing slashes.
