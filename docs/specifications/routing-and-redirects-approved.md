# Routing And Redirects Approved Specification

Issue: #5
Status: Approved architecture specification
Date: 2026-08-03
Owner: Lead Architect

## Inputs

- `docs/audits/current-site-url-inventory.md`
- `docs/audits/current-site-url-inventory.csv`
- `docs/content-migration/wordpress-export-and-media-runbook.md`
- `docs/devops/HOSTING_DEPLOYMENT_EDGE_DELIVERY.md`
- `docs/adr/ADR-001-angular-hybrid-rendering.md`
- `docs/adr/ADR-011-public-routing-and-redirects.md`

## Decision Summary

Preserve high-value existing URL paths for v1. Do not rename important tour URLs to `/tours/{slug}/` at launch.

The external public route shape is:

| Page type | Approved public pattern | Rule |
| --- | --- | --- |
| Homepage | `/` | Keep |
| Destination hub | `/destinations/` | Keep |
| Destination detail | `/destinations/{destination-slug}/` | Keep |
| Tour detail | `/tour-item/{tour-slug}/` | Keep |
| Tour category landing | existing root slug, for example `/women-only-tours/` | Keep |
| Blog article | existing root article slug | Keep |
| Static/trust/legal/support | existing root slug | Keep |
| Search/filter UI | non-indexable client enhancement | Exclude from sitemap |
| Unknown route | real 404 | Do not soft-200 |

Trailing slash is canonical for public HTML routes.

Canonical host is `https://omayatravel.com`. `www.omayatravel.com` redirects to apex unless SEO later approves the opposite.

## Critical And High-Value Keep Routes

These routes must exist as v1 public pages or receive an Architect-approved single-hop redirect only if content is intentionally consolidated.

| Current URL | Approved outcome | Notes |
| --- | --- | --- |
| `/` | Keep | Homepage canonical root. |
| `/contact/` | Keep | Lead path. |
| `/destinations/` | Keep | Destination hub. |
| `/destinations/algeria/` | Keep | Destination page. |
| `/destinations/bulgaria/` | Keep | Destination page. |
| `/destinations/kyrgyzstan/` | Keep | Destination page. |
| `/destinations/morocco/` | Keep | Destination page. |
| `/tour-item/algeria-desert-expedition-tadrart-rouge/` | Keep | Tour page. |
| `/tour-item/bulgaria-beyond-the-ordinary/` | Keep | Tour page and duplicate target. |
| `/tour-item/kyrgyzstan-tour/` | Keep | Tour page and duplicate target. |
| `/tour-item/morocco-tour/` | Keep | Tour page. |
| `/tour-item/tour-item-morocco-solo-travellers-tour/` | Keep | Tour page. |
| `/tour-item/tour-item-morocco-women-only-tour/` | Keep | Tour page. |
| `/tour-item/women-only-tour-bulgaria/` | Keep | Tour page. |
| `/tour-item/women-only-tour-kyrgyzstan/` | Keep | Tour page. |
| `/private-tours-your-trip-your-rules/` | Keep | Commercial landing page. |
| `/solo-travellers-tours/` | Keep | Commercial landing page. |
| `/women-only-tours/` | Keep | Commercial landing page. |
| `/classic-tours/` | Keep | Commercial landing page. |
| `/why-book-with-us/` | Keep | Trust page. |
| `/our-story/` | Keep | About/trust page. |
| `/omaya-travel-license/` | Keep | Trust/legal proof page if content remains accurate. |
| `/faq/` | Keep | Support/trust page. |
| `/privacy-policy/` | Keep | Legal/privacy page. |
| `/cookie-policy/` | Keep | Cookie policy page if content remains accurate. |
| `/termsconditions/` | Keep | Legal terms page if content remains accurate. |
| `/10-unmissable-places-to-visit-on-your-bulgaria-trip/` | Keep | Blog article. |
| `/how-to-visit-song-kul-lake-in-kyrgyzstan/` | Keep | Blog article. |
| `/tassili-najjer-national-park-algeria-guide/` | Keep | Blog article. |
| `/the-complete-visitor-guide-to-rila-monastery/` | Keep | Blog article. |

## High-Priority Consolidation And Exclusion Outcomes

The SEO inventory marked several crawlable URLs as high priority because they are visible and route-sensitive, not because they should all become indexable v1 pages.

| Current URL | Approved outcome | Notes |
| --- | --- | --- |
| `/3122-2/` | Redirect to `/contact/` unless content model creates a named private-tour enquiry page | Current title is "Let's Create Your Ideal Tour"; avoid keeping numeric slug. |
| `/not-yet-but-soon/` | 404 or noindex/exclude | Do not launch placeholder page as indexable content. |
| `/title-subtitle/` | 404 or noindex/exclude | Theme/demo utility page. |
| `/blog-list/` | Redirect to approved blog listing if one exists; otherwise 404/noindex | Do not keep demo listing slug as canonical unless selected as real blog index. |
| `/blog-list-2/` | Redirect to approved blog listing if one exists; otherwise 404/noindex | Duplicate/demo blog listing. |
| `/blog-masonry/` | Redirect to approved blog listing if one exists; otherwise 404/noindex | Demo blog listing. |
| `/tour-item/` | Redirect to approved tour listing/category page if one exists; otherwise 404/noindex | Do not expose empty WordPress archive without unique content. |
| `/tour-list/` | Redirect to approved tour listing if one exists; otherwise 404/noindex | Demo/listing page. |
| `/tour-list-2/` | Redirect to approved tour listing if one exists; otherwise 404/noindex | Demo/listing page. |
| `/tour-list-carousel/` | Redirect to approved tour listing if one exists; otherwise 404/noindex | Demo/listing page. |
| `/tour-list-gallery/` | Redirect to approved tour listing if one exists; otherwise 404/noindex | Demo/listing page. |
| `/tour-list-masonry/` | Redirect to approved tour listing if one exists; otherwise 404/noindex | Demo/listing page. |
| `/tour-list-standard-2/` | Redirect to approved tour listing if one exists; otherwise 404/noindex | Demo/listing page. |
| `/tour-carousel/` | Redirect to approved tour listing if one exists; otherwise 404/noindex | Demo/listing page. |
| `/tour-filter/` | 404/noindex unless SEO approves a real indexable filter landing page | Filter page must not become crawl trap. |
| `/tour-search-page/` | 404/noindex unless SEO approves a real search landing page | Search results are not indexable v1 pages. |
| `/tour-checkout/` | Redirect to `/contact/` or future approved enquiry route | No booking checkout in v1. |
| `/wp-content/uploads/2018/03/Sofia-City-Tour-Bulgaria.webp` | Keep as media only until media migration maps it | Media file URL is not a page route. |

## Required Redirects

Duplicate tour slugs must be single-hop `301` redirects:

| Old URL | Target |
| --- | --- |
| `/tour-item/bulgaria-trip/` | `/tour-item/bulgaria-beyond-the-ordinary/` |
| `/tour-item/forest-adventure/` | `/tour-item/bulgaria-beyond-the-ordinary/` |
| `/tour-item/safari-tour/` | `/tour-item/kyrgyzstan-tour/` |

Query URL canonical duplicates must redirect to the clean canonical path where a canonical is known:

| Old URL pattern | Target rule |
| --- | --- |
| `/?page_id=2719` | `/cookie-policy/` if cookie policy is kept |
| `/?page_id=3` | `/privacy-policy/` |
| `/?page_id=635` | `/our-story/` |
| `/?page_id=852` | `/faq/` |
| `/?page_id=910` | `/why-book-with-us/` |

The migration expert may add more exact query redirects only when evidence shows external traffic, internal links or Search Console value.

## Exclusion And 404 Rules

The following must not become indexable Angular pages:

- WordPress admin/login: `/wp-admin/`, `/wp-login.php*`
- WordPress previews: `?preview=true`, `?preview_id=*`
- account/cart/checkout/shop/wishlist pages unless business scope later requires them
- booking plugin utility pages unless replaced by approved enquiry flow
- theme/demo pages such as shortcode, gallery, tabs, columns and demo tour-list pages
- filtered tour URLs such as `/tour-item/?type[]=...`
- unknown routes

Default handling:

| Category | Default outcome |
| --- | --- |
| Admin/login/preview | 404 or blocked/noindex response; never sitemap |
| Account/cart/checkout/shop/wishlist | 404 unless redirected to useful current page |
| Booking plugin pages | 404 unless redirected to `/contact/` or a future approved enquiry route |
| Theme/demo pages | 404 unless Search Console proves value |
| Filter/query URLs | 301 to clean canonical when known; otherwise noindex/404 |
| Unknown URL | Real 404 |

No excluded URL may return `200 index.html` through the Hostinger SPA fallback.

## Redirect Implementation Rules

- Use single-hop `301` for permanent old-to-new mappings.
- Do not create redirect chains.
- Do not redirect every unknown URL to homepage.
- Canonical host and HTTPS normalization run before content redirects.
- Old URL redirects run before any Angular fallback.
- Explicit 404 handling runs before fallback.
- SPA fallback is only for approved Angular client routes that are not physical prerendered files.

Preferred implementation order:

1. Cloudflare canonical host and HTTPS normalization.
2. Cloudflare or Hostinger exact redirects for high-priority old URLs.
3. Hostinger `.htaccess` route fallback after redirects and 404 rules.
4. Angular not-found route for client navigation.

Final placement can be adjusted by DevOps if verification proves the same behavior.

## Angular Handoff

Angular must:

- define route constants from this approved spec
- support trailing-slash canonical paths
- generate sitemap/canonical URLs from approved public routes
- render meaningful prerendered/static HTML for SEO pages
- add a not-found route, but not rely on it to convert server 200s into true 404s
- avoid inventing `/tours/{slug}/` routes for v1 public URLs

## Migration Handoff

Migration must:

- build the redirect map from this spec, the SEO inventory and WordPress export evidence
- include every critical/high URL outcome
- include duplicate canonical tour redirects
- mark utility/demo/plugin/admin/query exclusions by category or exact URL
- flag any Search Console or export conflicts for Architect review

## SEO Handoff

SEO must:

- treat preserved public paths as canonical v1 URLs
- define metadata/schema rules by page type using these route patterns
- exclude filtered/query/admin/preview/utility URLs from sitemap
- validate that launch does not create duplicate indexable route intent

## DevOps Handoff

DevOps must:

- deploy compiled/prerendered Angular output to Hostinger
- ensure redirects and explicit 404 handling run before SPA fallback
- verify unknown URLs do not return `200 index.html`
- verify priority old URLs return `200` keep or single-hop `301`
- keep staging noindexed

## QA Acceptance

Before launch:

- every critical/high URL from SEO inventory returns `200` or single-hop `301`
- duplicate tour slugs redirect to canonical tour URLs
- excluded WordPress utility/admin/preview URLs do not return indexable `200`
- unknown URL returns a real 404 where Hostinger allows it
- sitemap includes only approved indexable routes
- canonical URLs use `https://omayatravel.com` and trailing slash
