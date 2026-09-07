# SEO Progress Board

**Single source of truth for what is done and what is not.** Read this first when picking up SEO
work in a new session.

- **Branch:** `toni-seo-optimization` — **not merged, not deployed.** Everything below is verified
  against local builds only; production still shows the pre-Phase-1 state.
- **Last updated:** 7 September 2026
- **Test suite:** 125 passing across 12 files. Build prerenders 40 routes. Sitemap lists 38 URLs.

| Commit | What |
| --- | --- |
| `90955ab` | Phase 1 — SEO service, metadata, sitemap, robots, JSON-LD |
| `a8f4a30` | Retarget to US/UK, drop the German workstream |
| `e5f7786` | Noindex the unbuilt destination placeholders; Open Graph article fixes |
| `8797538` | Implementation report |
| `f29d7d6` | Act on the expert review — robots, redirects, schema, host policy |
| `db1e86b` | Progress board; correct superseded claims |
| `63689e1` | Measure the image/CLS assumption instead of asserting it |
| `a5d53e9` | GA4 lead tracking code audit |
| `8003dea` | Destination pages, breadcrumbs, departure-derived calendars, September dedupe, trailing-slash canonicalisation |
| `583145f` | Verify Phase 1 completion criteria; record the orphaned page |
| `57d708a` | Organisation facts, per-page share images, FAQ lead fix, private tour consolidation |

**Companion documents**

- [SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md](SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md) — the external review this board tracks
- [SEO_IMPLEMENTATION.md](SEO_IMPLEMENTATION.md) — how the SEO code works and how to extend it
- [SEO_STRATEGY_PLAN.md](SEO_STRATEGY_PLAN.md) — markets, competitors, keyword targets

---

## Done

### Phase 1 foundation

| # | Item | Evidence |
| --- | --- | --- |
| 1 | `OmayaSeo` service — title, description, canonical, Open Graph, Twitter, robots meta, JSON-LD, running during SSR | Every prerendered page carries a distinct title; previously all of them shared `<title>Omaya Travel</title>` |
| 2 | Metadata resolution wired to the `canonicalPath` data that already existed and was never read | Canonical tag on every page |
| 3 | Titles and descriptions for every public page; tours reuse authored `seo` copy verbatim, articles derive from their own title and excerpt | `page-metadata.ts` |
| 4 | `sitemap.xml` generated from the route tables, served as a sitemap index | 38 indexable URLs today, `lastmod` on the 4 blog posts |
| 5 | `robots.txt` served from the same source | Points at the sitemap index |
| 6 | JSON-LD: `TravelAgency`, `WebSite`, `BreadcrumbList`, `TouristTrip` + `Offer` + itinerary, `FAQPage` where content exists, `BlogPosting` | 2–4 blocks per page |
| 7 | `www` → bare-domain 301, preserving path and query | Verified against the SSR build |
| 8 | UK "holidays" vocabulary in home, listing and destination titles | |
| 9 | Unbuilt destination placeholders set `noindex, follow` and excluded from the sitemap | They render `<h1>Public route placeholder</h1>`; indexing them would have published five near-empty pages |
| 10 | Blog Open Graph — `og:type: article` and `article:published_time`, removed on navigation to non-article pages | |

### Acted on from the expert review

| Review item | What was done |
| --- | --- |
| **`Disallow: /*?*` and `/search` in robots.txt** | Both removed. The query block stopped Google crawling the legacy WordPress URLs to discover their 301s; blocking `/search` prevented Googlebot fetching the page to read its `noindex` tag. robots.txt now carries no crawl blocks at all. |
| **Verify the legacy WordPress redirects** | Verified — and found **`PUBLIC_REDIRECTS` was declared but never applied**. All nine entries were inert: five legacy WordPress URLs answered 200 with the homepage (duplicate content), four retired tour paths answered 404 (lost link equity). `findRedirect()` added in `public-routes.ts`, applied in `server.ts`. All nine verified returning 301 locally. |
| **`SearchAction` retired** | Removed from the `WebSite` JSON-LD. Google retired the sitelinks search box in November 2024. |
| **`InStock` hardcoded on every Offer** | Removed. Nothing in the content model tracks capacity, so availability is omitted rather than asserted. |
| **Sitemap host vs canonical host** | Resolution now matches the request host against configured site domains; unknown and preview hosts fall back to the canonical host instead of advertising themselves. |
| **Metadata lookup vs rendered route keys** | The route table keys pages by URL, `app.routes.ts` keys them by component, and the two disagreed on **eight** routes (the review found one). An alias map reconciles them; unresolved routes now fail the spec rather than silently entering the sitemap; tour and article routes resolve through authored content exactly as `OmayaSeo` does at runtime. |
| **Duplicate-title test coverage** | Extended beyond the static registry to rendered tour and article titles. |
| **Title length as editorial guideline** | Length checks are now warnings, not build failures. Duplicate and empty titles still fail hard. |
| **Replace performance assumptions with measurement** | Partly done — see below. The image/CLS assumption is now disproven; a real field baseline is still outstanding. |

### Performance: what was actually measured

Review item 6 asked for measurement instead of assumption. Done for the image question, outstanding
for the rest.

**Disproven — the image dimension claim.** Across four templates (homepage, tour detail, article,
tour listing), every image lacking `width`/`height` attributes has its space reserved by CSS
(`aspect-ratio`, an explicit height, or absolute positioning). Images at risk of layout shift:
**0 of 36 checked**. My earlier "339 images cause CLS" claim was wrong, exactly as the review
suspected.

**Measured, with caveats.** Mobile viewport 375×812, against the local SSR build:

| Metric | Cold load | Warm reload |
| --- | --- | --- |
| CLS | 0.0726 (2 shifts, largest 0.0446) | 0 |
| LCP | 72 ms | — |
| TTFB | 2 ms | — |

**Do not quote the LCP or TTFB figures.** They are localhost with no network throttling and mean
nothing about real users. CLS is more transferable but still understated here, because fast local
loading hides shifts a slow connection would expose.

**Hypothesis, not a finding:** the cold-load shift is probably webfont swap. Kristi and Roboto load
from `fonts.googleapis.com` with `display=swap` and no fallback metric matching, and a warm reload
with fonts cached shows exactly zero shift — consistent with a fallback-to-webfont reflow. Candidate
fixes are `size-adjust` / `ascent-override` fallback metrics, or self-hosting the fonts. **Not
implemented** — this needs a throttled cold-cache run and ideally field data before changing
anything, per the review's own guidance.



### Second batch — destination pages, calendars, breadcrumbs, canonicalisation

| Item | What was done | Verified |
| --- | --- | --- |
| **Destination pages built** (was item I) | `features/destination-page/` plus `content/destination-content.ts`. The hub and all four country pages render real content and are no longer `noindex`. Metadata now also supplies each destination's hero image for Open Graph. | H1s read "Bulgaria Tours & Holidays", "Kyrgyzstan Tours & Holidays" etc — the UK "holidays" vocabulary carried into the visible heading. All five return `index, follow` and appear in the sitemap. |
| **September duplicate resolved** (was item A) | `/september-2027/` removed from the route table and added to `PUBLIC_EXACT_REDIRECTS`; `/calendar-2027/september/` is the surviving URL. | `/september-2027/` returns **301** to the canonical URL. Only the canonical URL appears in the sitemap. |
| **Calendars derived from departure records** (was item J) | New `content/tour-departures.ts` derives month listings from each tour's actual `departures` array instead of hand-picked cards. | Fixes item B structurally. |
| **Algeria September mismatch resolved** (was item B) | Follows from the above — Algeria's departures are `2026-11-05`, `2027-02-24`, `2027-10-28`, so it no longer appears in September. | The September page's only Algeria mentions are a nav link and a blog-post title; it is not listed as a departure. |
| **Visible breadcrumbs** (was item N) | New `shared/breadcrumbs/public-breadcrumbs.ts`, an accessible component (`aria-label="Breadcrumb"`, `aria-current="page"`). Tour breadcrumbs now run Home → Destinations → Country → Tour. | Visible trail and the `BreadcrumbList` JSON-LD agree exactly on every page checked. |
| **Trailing-slash canonicalisation** | *Found during review of the above.* Every public URL answered HTTP 200 both with and without a trailing slash — the whole site duplicated at a second set of URLs, the same class of problem as the `www` issue. Angular's `RouterLink` strips the trailing slash when rendering hrefs, so the site linked to its own non-canonical URLs. `trailingSlashRedirectTarget()` added and applied in `server.ts`. | Public routes 301 onto the slash form preserving query and fragment; `/`, already-canonical URLs, `robots.txt`, the sitemaps, assets and `/api/*` are untouched. No redirect chains — legacy URLs still reach their target in one hop. |

### Phase 1 completion criteria, verified

The external review sets two testable criteria for Phase 1. Both now pass against the local SSR
build. They still need re-running in production after deploy (item P).

| Criterion | Result |
| --- | --- |
| "sitemap returns 200 and contains only canonical, indexable 200 pages" | **Pass.** All **39** sitemap URLs return HTTP 200, are self-canonical (the canonical tag matches the sitemap URL exactly) and carry `index, follow`. Zero failures. |
| "no priority page is orphaned" | **One orphan found** — see item Q below. The other 38 have inbound internal links. |

Method: fetched every URL in the live sitemap and compared status, canonical and robots meta; then
built an internal link graph across all 40 prerendered pages and checked inbound links per sitemap
URL.

### Third batch — business answers implemented (7 September 2026)

| Item | Answer given | What was built |
| --- | --- | --- |
| **C — organisation facts** | Supplied in full | `TravelAgency` schema now carries Omaya Travel EOOD, registration **РК-01-8706**, EIK 208663654, the Kardzhali address, both public phones as `ContactPoint`s, founding year 2026, and the Facebook, Instagram and LinkedIn profiles. Stored in a new optional `organisation` block on `SiteConfig`, so Amelia can supply its own later. The Instagram `?stkn=` share token is stripped — it is personal to whoever copied the link — and a spec fails if any tokenised profile URL is ever added. |
| **D — ABTA / AITO / ATOL** | None held or planned | Nothing claimed anywhere. No trust-badge work will be designed around a membership that does not exist. |
| **E — share images** | "Use each page's first big image, with the logo smaller" | `npm run og:generate` composites every page's own hero into the 1200×630 frame with the logo bottom-left. **23 images generated.** A gradient scrim sits under the logo because the logo is white and vanished on pale heroes. Output is committed and a generated manifest tells the app which pages have one, so a normal build never needs `sharp` and no page links a missing image. The site-wide fallback is now a generated image too. |
| **F2 — is a FAQ question a lead?** | No | The FAQ page fires `submit_faq_question` instead of `generate_lead`. Still tracked, just reported apart, so lead volume reflects actual sales enquiries. |
| **Q — the orphaned page** | "You decide who owns the intent" | `/private-tours-your-trip-your-rules/` owns it — it is the page the site links to and the one leading into the questionnaire. `/private-tour-planning/` now **301s** onto it. Its copy is kept in `tour-list-content.ts`, unrouted, with a note on how to restore it. |

Regenerate share images with `npm run og:generate` after changing any hero image. `sharp` is a
dev dependency needed only for that script.

### Pre-merge review against dev (7 September 2026)

Reviewed application commit `5315f20` against `dev` at `e63b486`: 13 commits ahead, no
divergence. This PR includes both the SEO foundation and the subsequent destination, calendar,
organisation and share-image work. No merge-blocking issue found in the checks below.

- **Tests:** `npm --workspace website run test -- --watch=false` — 125 passing in 12 files.
- **Formatting:** `npm run lint` — passed.
- **Production build:** `npm run build` — passed; 40 prerendered routes. Warnings remain for the
  initial bundle (611.41 kB against 500 kB) and tour-detail CSS (14.48 kB against 14 kB).
- **Fresh local SSR crawl:** all **38** sitemap URLs return 200, have the matching canonical,
  one H1, no `noindex`, unique titles and parseable JSON-LD. All 21 distinct advertised share
  images return 200. All 23 generated image files are 1200×630.
- **Redirects:** checked both slash variants of the retired September and private-planning URLs,
  a legacy WordPress query URL, a retired tour URL and a slash redirect with a tracking query.
  Each returns 301 to the expected target. An unknown destination returns 404.
- **Minor follow-up:** the surviving `/private-tours-your-trip-your-rules/` page still advertises
  `listing-tours-list.jpg`. Its own generated image exists, but the dedicated page route has no
  `listingSlug` and its static metadata does not select that image. Add an explicit image to the
  static metadata in a follow-up; the current fallback is valid and accessible.

The earlier 39-URL crawl below predates the private-planning consolidation; **38 is the current
count**. These are local checks, not production or GitHub CI results. Wait for PR CI before merging,
then repeat the HTTP checks after deployment. This review only updates documentation; it does not
change application code, merge branches or deploy the site.

### GA4 lead tracking: code audit (historical, before the FAQ event change)

The review said to audit the existing implementation rather than install a second one. The code half
is done; the account half still needs access (item H).

At the time of the original audit there were five `generate_lead` sites, every one firing only
after a confirmed successful submission. The FAQ event has since changed to `submit_faq_question`,
leaving four sales-lead sites:

| Where | `form_type` | Attribution |
| --- | --- | --- |
| Tour detail booking form | `tour-booking` | `tour_slug` — the only site with product attribution |
| Enquire page | `enquire-now` | — |
| Contact page | `contact` | — |
| FAQ page | `faq-question` | — |
| Private tour planning form | `private-tour-planning` | — |

Four use `if (result.ok)`, the fifth an early-return guard on `!result.ok`. Equivalent. **A failed
submission cannot record a lead**, which is the completion criterion the review's Phase 1 asks for —
though it should still be confirmed end to end against the live property once access exists.

**No personal data reaches the analytics payload** — only `form_type` and `tour_slug`. That matches
the review's rule about keeping enquiry information out of analytics.

**Two things to be aware of when reconciling:**

1. **Every event is gated on cookie consent** (`OmayaAnalytics.trackEvent` returns early unless
   `canUseAnalytics()`). Leads from visitors who declined analytics are invisible to GA4 but real in
   the inbox. Analytics will undercount, and reconciliation against enquiry records is mandatory
   rather than optional.
2. **FAQ questions now use `submit_faq_question`.** This implements the business decision to
   report them separately from sales enquiries. Historical `generate_lead` figures may still
   include FAQ questions from before deployment of this change.

**Still needs account access:** whether `generate_lead` is configured as a key event in GA4,
data-retention settings, and country reporting.

---

## Corrections to earlier claims

Recorded so they are not repeated. Several came from the expert review; the last is mine.

| Claim previously made | Correction |
| --- | --- |
| `AggregateRating` would put review stars in the listing — "highest-visibility, lowest-effort rich result" | **Wrong.** Google excludes self-serving reviews of an Organization or LocalBusiness, and `TravelAgency` is a subtype. Collect reviews for trust and conversion, not for stars. |
| Extending `FAQPage` markup would win FAQ rich results | **Outdated.** Google has been dismantling FAQ rich results since 2023. Visible FAQs still help buyers; the markup buys no SERP space. |
| Phase 1 "makes rankings possible, which wasn't true before" | **Overstated.** A crawlable page can rank without a meta description or sitemap. What was broken was duplicate titles and missing canonicals — bad, not categorical. |
| "Kyrgyzstan women-only is close to empty" | **Not established.** Ecotour.kg and Wander Kyrgyzstan already sell it. A plausible focus, not a demonstrated gap. |
| 339 images missing `width` cause CLS | **Disproven by measurement.** 0 of 36 such images across four templates are at risk — CSS reserves the space in every case. See the performance section above. |
| The 606 kB bundle warning is a performance problem | **Still a hypothesis.** A build-budget warning is not a Core Web Vitals measurement. Unmeasured. |
| First-page positions in months 4–6 | **Unjustifiable** without a baseline. Removed. |
| "6 images missing alt text" | **False positive of mine.** All 584 images have alt. Empty alts render as the bare attribute `alt`, which is valid HTML and the correct marking for decorative images. My grep only looked for `alt=`. No action needed. |

---

## Not done — needs a decision from Omaya

**All previously open decisions (C, D, E, F2, Q) were answered on 7 September 2026 and are
implemented.** One new item stands.

| # | Item | What is needed |
| --- | --- | --- |
| R | **The licence number still reads two ways, in two scripts** | *Partly fixed.* The FAQ page said **PK-18706**, missing the `01-` block entirely and matching nothing; on instruction it now reads **PK-01-8706**, in line with the DMC page. What remains is a script split, not a wrong number: the DMC and FAQ pages use Latin **PK-01-8706** while `/omaya-travel-license/` and the terms use Cyrillic **РК-01-8706**, which is the form as issued and the form the structured data publishes. Both are recognisable to a reader; only one matches the register exactly. Worth deciding whether the Latin pages should switch to Cyrillic for consistency. |

## Not done — needs account access

| # | Item | What is needed |
| --- | --- | --- |
| F | **Google Search Console verification and sitemap submission** | Prefer a DNS-verified Domain property (covers protocol and subdomain variants). The existing GA4 ID alone does not guarantee Analytics verification — that method needs the right permissions and applies to URL-prefix properties. Blocks all measurement. |
| G | **Bing Webmaster Tools** | Imports from Search Console once F is done. |
| H | **GA4 account-side verification** | Code audit **done**; the FAQ page no longer fires `generate_lead` (it fires `submit_faq_question`). Outstanding: confirm `generate_lead` is configured as a key event, check data retention and country reporting, and run one live end-to-end test enquiry against an agreed test recipient. |

## Not done — real work, not yet started

| # | Item | Size |
| --- | --- | --- |
| K | **Improve the three priority tour pages** — group size, pace, room sharing and private-room cost, inclusions, currency, booking conditions | Days, needs business facts |
| L | **Query-to-page map for US/UK** | Needs Search Console data (item F) |
| M | **Core Web Vitals — field baseline and the font-swap fix** | The image question is settled (see above). What remains: a throttled cold-cache run to confirm the font-swap hypothesis, real-user field data via Search Console once verified, and only then the `size-adjust` / self-hosting change. Do not change font loading on lab evidence alone. |
| O | **Content: refresh 4 existing articles, publish 4 new guides** | Weeks, needs firsthand material from guides |
| P | **Production verification after deploy** | Re-run every check in this board against the live CDN. Nothing here is confirmed in production yet. |

## Explicitly not recommended

Do not spend time on these; the reasoning is in the expert review and the corrections table.

- hreflang, regional URL copies, or speculative translations — one language, one domain
- `AggregateRating` on the business entity for review stars — ineligible
- Extending `FAQPage` markup to win rich results — the display is gone
- Mass article production, paid links, mass annual pages, cosmetic URL migrations
- `priority` / `changefreq` in the sitemap, or a `keywords` meta tag — both ignored
- Chasing "small group adventure travel" as a head term

---

## Suggested next session

The code side of Phase 1 and most of Phase 2 is now done. What is left is mostly not code.

1. **Item F — Search Console.** Everything measurable is downstream of it, and it is the one task
   nobody else can do. Do it before writing another line of content.
2. **Item R and the private-tour share image follow-up** — the previously requested business
   answers (C, D, E, F2 and Q) are already implemented. The remaining small follow-ups are licence
   script consistency and selecting the existing private-tour share image in metadata.
3. **Merge and deploy**, then item P: re-run every check on this board against the live CDN. None of
   it is confirmed in production yet, and the external review's own production checks still show the
   pre-Phase-1 state.
4. Only then item K (tour page depth) and item O (content), which is where the remaining search
   value now sits.
