# SEO Progress Board

**Single source of truth for what is done and what is not.** Read this first when picking up SEO
work in a new session.

- **Status: LIVE.** Merged via PR #64 into `dev` and PR #65 into `master`, and deployed. Production
  verified 8 September 2026 — see [Production verification](#production-verification-8-september-2026).
- **Not yet in production:** commits `80dbea6` (docs) and `fae926f` (booking conditions block and
  the private-tour share image fix). Both need a follow-up PR into `dev`.
- **Last updated:** 8 September 2026
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
| `7d71e7f` | Record the answered business decisions; flag the licence-number inconsistency |
| `73b51d7` | Pre-merge verification against `dev` (author's own review) |
| `ad14fc4` | Group size and guaranteed departures on tour pages |
| `ef20a84` | Destination copy rewritten in an inviting voice; hub copy future-proofed |
| `74895f8` | Instructional planning paragraph removed from destination pages |

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

### Fourth batch — tour page essentials (item K, partial)

| Item | What was done |
| --- | --- |
| **Group size surfaced** | Duration and group size (`6–12 people` on every tour) now sit directly under the H1 in the hero, above the fold. They were already rendered, but inside the information tab below the tab bar — past the point where a first-time visitor decides whether a trip fits. |
| **Guaranteed departures** | New optional `guaranteedDepartures` on `TourDetailContent`. Currently set on **Algeria, 24 February 2027 only**. Shows as a hero fact and merges with the authored note so the date reads `(All ages departure · Guaranteed)` rather than carrying two brackets. Deliberately *not* mapped to schema `availability` — a guaranteed departure means the trip runs, not that places remain. |

### Fifth batch — destination page voice (7 September 2026)

**The rule established here, because it will come up again:** copy on these pages should invite,
not instruct. The destination pages we built originally ended every section by telling the reader
what to do next — *compare the itineraries, open the tour page, check the inclusions before
enquiring*. Read together it was a task list sitting where the reason to travel should be. The
author flagged it three separate times, so treat it as the house voice rather than three one-off
edits.

| Change | Detail |
| --- | --- |
| **Destination introductions rewritten** | Each keeps its factual opening sentence and closes with what the place is actually like — monastery courtyards and long tables in Bulgaria, the stillness of the summer pastures in Kyrgyzstan, mint tea and medinas in Morocco, the silence of the Sahara in Algeria. Openings are deliberately varied rather than four identical "Enjoy the…" constructions. |
| **`planning` paragraph removed** | It sat directly under each introduction, duplicated the sidebar beside it, and was instructional throughout. Removed on **all four** destinations and the field deleted from `destination-content.ts`, since nothing rendered it any more. |
| **Sidebar line rewritten** | "Compare the group formats, departure dates and itinerary details below" became "Each journey has its own pace, group and dates — find the one that feels like yours." |
| **"Omaya Travel" eyebrow removed** | From above the destination page title. The brand is already in the header, tab title and footer. The dead `.destination-page__hero p` selector went with it; `.destination-page__eyebrow` stays, still used by the tour and country cards. |
| **Hub copy future-proofed** | The subtitle no longer lists the four countries, "Four countries. Your kind of journey." became "Pick your kind of journey", and the intro dropped a clause the cards below already showed. All so a fifth destination does not make the page wrong. |

**Two facts were lost with the `planning` paragraph** — that both Bulgaria itineraries run eight
days, and that Morocco's group formats share a core itinerary at differing prices. Both remain
visible on the tour cards immediately below, which show duration, group size and price per format.
Reinstate them in the introductions if they ever stop being visible there.

**Known trade:** dropping the country names from the hub subtitle removes a little keyword text
from that page. Judged worth it — the names still appear in every card, link and H1 across the
site, and brand voice won. Recorded so it reads as a decision rather than an oversight.

### Sixth batch — booking conditions, share image, licence decision (8 September 2026)

| Item | Outcome |
| --- | --- |
| **K4 — booking conditions on tour pages** | **Done, as an FAQ entry.** The deposit (25% per person within 7 days), the balance date (60 days before departure) and the three cancellation bands now appear as a question in the FAQ tab — appended after the authored questions on tours that have them, and the only entry on the three tours that do not. That is why the FAQ tab is now always available. It lives in `shared/content/booking-conditions.ts`, which both the accordion and the `FAQPage` markup read, so visible and marked-up FAQ cannot drift apart. Written as a *summary that points at* the Terms page, not a copy: the authored terms carry qualifiers ("in general", "may vary depending on the destination") that a duplicate would lose, and two copies of a payment policy eventually disagree. **Update the Terms page and this entry together.** |
| **Known trade from that move** | Tab panels on the tour page are rendered with `@if (activeTab() === …)`, so only the Information tab is in the server-rendered HTML. Moving the booking terms into the FAQ tab means the visible text is no longer in the initial HTML — it exists there only inside the `FAQPage` JSON-LD until a visitor opens the tab. This is the page's pre-existing tab architecture, not something the move introduced, and it costs little now that FAQ rich results are withdrawn. If the text should be crawlable as body copy, render the FAQ panel always and hide it with CSS instead of `@if`. |
| **Private-tour share image** | **Done.** `/private-tours-your-trip-your-rules/` was advertising the site-wide fallback while its own generated image sat unused. It is a static route with no `listingSlug`, so `OmayaSeo` had nothing to resolve an image from; the static metadata entry now selects it explicitly via `ogImageFor`. |
| **Item R — licence number script** | **Closed, by design.** Confirmed 8 September 2026 that the split is deliberate: the DMC and FAQ pages use Latin **PK-01-8706**, while `/omaya-travel-license/`, the terms and the structured data use Cyrillic **РК-01-8706** as issued. Both are correct; do not "fix" one to match the other. The only genuine error was the FAQ page's `PK-18706`, missing the `01-` block, corrected in `5315f20`. |

### Production verification (8 September 2026)

Item P, run against the live domain rather than a local build. **Zero failures.**

| Check | Result |
| --- | --- |
| `robots.txt` | 200, `text/plain`, no crawl blocks, points at the sitemap index |
| `sitemap.xml` | 200, `application/xml`, valid index → `sitemap-pages.xml` |
| Sitemap contents | **38 URLs.** Every one returns 200, carries a canonical matching its own URL exactly, and is `index, follow`. Zero failures across all 38. |
| Homepage title | `Small Group Adventure Tours & Holidays \| Omaya Travel` — the one-title-for-every-page bug is gone from production |
| `www` → bare domain | 301 |
| Retired September URL | 301 → `/calendar-2027/september/` |
| Consolidated private-tour URL | 301 → `/private-tours-your-trip-your-rules/` |
| Legacy WordPress query URL | `/?page_id=635` → 301 → `/our-story/` |
| Retired tour URL | `/tour-item/bulgaria-trip/` → 301 → `/tour-item/bulgaria-beyond-the-ordinary/` |
| Trailing slash | `/contact` → 301 → `/contact/` |
| Genuine 404 | Unknown URL returns 404, not a soft 200 |
| Tour page markup | 5 JSON-LD blocks; per-page share image resolving to `/assets/images/og/tour-morocco-tour.jpg` |

**Sitemap submitted to Google Search Console on 8 September 2026** against the DNS-verified Domain
property. Note that a Domain property's sitemap field takes the **full URL**
(`https://omayatravel.com/sitemap.xml`), not a bare path — a bare path is rejected as invalid.

The booking conditions block is correctly **absent** from production: it lives in `fae926f`, which
has not been merged yet.

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

## Not done — needs account access

| # | Item | What is needed |
| --- | --- | --- |
| G | **Bing Webmaster Tools** | Search Console is done, so this is now a 5-minute import at <https://www.bing.com/webmasters> — it carries the verification and sitemap across, and Bing feeds DuckDuckGo and some AI search. |
| H | **GA4 account-side verification** | Code audit **done**; the FAQ page no longer fires `generate_lead` (it fires `submit_faq_question`). Outstanding: confirm `generate_lead` is configured as a key event, check data retention and country reporting, and run one live end-to-end test enquiry against an agreed test recipient. |

## Not done — real work, not yet started

| # | Item | Size |
| --- | --- | --- |
| K1 | **Single-room supplement price** — **not done, deferred.** `notIncluded` lists "Single-room supplement" with **no figure**, so a solo traveller cannot tell whether a private room costs €50 or €500. Needs a number per tour (or one policy). | Business fact |
| K2 | **Rooming policy** — **not done, deferred.** Confirmed 7 Sep 2026 that a single room is the default **only on tours where single rooms are available** — it is *per tour*, not site-wide. Kyrgyzstan yurt stays and the Algeria desert camping cannot offer them. **Do not publish a blanket "single room by default" claim**; it would be false on those tours. Needs a per-tour answer. Note this interacts with K1: if a single room is the default *and* the supplement is "not included", the two statements read as a contradiction and must be resolved together. | Business fact |
| K3 | **Pace / fitness level** — **not done, deferred.** Not modelled at all. A label plus a sentence per tour, e.g. "Moderate — 3–5 hours walking on some days, no technical terrain." | Business fact |
| L | **Query-to-page map for US/UK** | Needs Search Console data (item F) |
| M | **Core Web Vitals — field baseline and the font-swap fix** | The image question is settled (see above). What remains: a throttled cold-cache run to confirm the font-swap hypothesis, real-user field data via Search Console once verified, and only then the `size-adjust` / self-hosting change. Do not change font loading on lab evidence alone. |
| O | **Content: refresh 4 existing articles, publish 4 new guides** | Weeks, needs firsthand material from guides |

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

The code side is done. **Every small follow-up is now closed** — C, D, E, F2, Q, R, K4 and the
private-tour share image. What remains needs a deploy, a business fact, or content.

1. **Deploy.** PR #64 merged the work into `dev`, but `master` is behind and production still serves
   the pre-Phase-1 site: `sitemap.xml` and `robots.txt` return 404 and every page still carries the
   title `Omaya Travel`. Nothing below can start until this happens.
2. **Item F — Search Console.** One click once deployed; the domain is already DNS-verified.
   Everything measurable is downstream of it.
3. **Item P — verify production.** Re-run every check on this board against the live CDN. Nothing
   here is confirmed in production yet.
4. **Then** items K1–K3 (the supplement price, per-tour rooming, pace) once the facts exist, and
   item O (content), which is where the remaining search value sits.
