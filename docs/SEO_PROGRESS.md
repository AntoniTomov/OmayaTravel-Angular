# SEO Progress Board

**Single source of truth for what is done and what is not.** Read this first when picking up SEO
work in a new session.

- **Branch:** `toni-seo-optimization` — **not merged, not deployed.** Everything below is verified
  against local builds only; production still shows the pre-Phase-1 state.
- **Last updated:** 6 September 2026

| Commit | What |
| --- | --- |
| `90955ab` | Phase 1 — SEO service, metadata, sitemap, robots, JSON-LD |
| `a8f4a30` | Retarget to US/UK, drop the German workstream |
| `e5f7786` | Noindex the unbuilt destination placeholders; Open Graph article fixes |
| `8797538` | Implementation report |
| `f29d7d6` | Act on the expert review — robots, redirects, schema, host policy |

**Companion documents**

- [SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md](SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md) — the external review this board tracks
- [SEO_IMPLEMENTATION.md](SEO_IMPLEMENTATION.md) — how the SEO code works and how to extend it
- [SEO_STRATEGY_PLAN.md](SEO_STRATEGY_PLAN.md) — markets, competitors, keyword targets

---

## Done

### Phase 1 foundation

| # | Item | Evidence |
| --- | --- | --- |
| 1 | `OmayaSeo` service — title, description, canonical, Open Graph, Twitter, robots meta, JSON-LD, running during SSR | 41 prerendered pages carry 41 distinct titles; previously all 41 shared `<title>Omaya Travel</title>` |
| 2 | Metadata resolution wired to the `canonicalPath` data that already existed and was never read | Canonical tag on every page |
| 3 | Titles and descriptions for every public page; tours reuse authored `seo` copy verbatim, articles derive from their own title and excerpt | `page-metadata.ts` |
| 4 | `sitemap.xml` generated from the route tables, served as a sitemap index | 35 indexable URLs, `lastmod` on the 4 blog posts |
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

**Test suite: 100 passing, up from 88.** Lint clean. Build prerenders 42 routes.

### GA4 lead tracking: code audit

The review said to audit the existing implementation rather than install a second one. The code half
is done; the account half still needs access (item H).

**The implementation is sound.** Five `generate_lead` sites, every one firing only after a confirmed
successful submission:

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
2. **A FAQ question currently counts as a `generate_lead`.** Whether that is a lead is a business
   definition, not a code question — it will inflate the count relative to enquiries that could
   actually book. Worth deciding before anyone reports on lead volume.

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

Blocked on business facts, not effort. Each is small once answered.

| # | Item | What is needed |
| --- | --- | --- |
| A | **`/september-2027/` and `/calendar-2027/september/` are duplicates** — same titles, descriptions and card selections | Decide which URL survives. The other gets a 301 and leaves the sitemap. ~15 minutes once chosen. |
| B | **Algeria appears in both September listings, but its departures are `2026-11-05`, `2027-02-24`, `2027-10-28`** — no September departure exists | Confirm whether the listing is wrong or the departure data is stale. This is a factual error visible to customers, not just a search problem. |
| C | **Organisation facts for JSON-LD** — registered name, postal address, public phone, licence number, social profile URLs | Currently `TODO_SEO_ORGANISATION` in `structured-data.ts`. Omitted rather than invented. ~15 minutes to wire in. |
| D | **ABTA / AITO / ATOL** | Whether Omaya holds or will seek any of these. UK buyers look for them and every UK competitor displays one. Gates the trust-signal work. |
| E | **Default social share image** | A purpose-made 1200×630 image. Link previews currently crop a carousel frame. |
| F2 | **Is a FAQ question a lead?** | It currently fires `generate_lead`. If it is not a sales lead, say so and it comes out — otherwise every lead figure is inflated. |

## Not done — needs account access

| # | Item | What is needed |
| --- | --- | --- |
| F | **Google Search Console verification and sitemap submission** | Prefer a DNS-verified Domain property (covers protocol and subdomain variants). The existing GA4 ID alone does not guarantee Analytics verification — that method needs the right permissions and applies to URL-prefix properties. Blocks all measurement. |
| G | **Bing Webmaster Tools** | Imports from Search Console once F is done. |
| H | **GA4 account-side verification** | Code audit is **done** (see above) and the implementation is sound. Outstanding: confirm `generate_lead` is configured as a key event, check data retention and country reporting, and run one live end-to-end test enquiry against an agreed test recipient. Also needs a business decision on whether a FAQ question should count as a lead. |

## Not done — real work, not yet started

| # | Item | Size |
| --- | --- | --- |
| I | **Build the destination hub and four country pages** | Days. Highest-value content work — they hold the best keyword targets and are currently `noindex` placeholders. Remove the `noIndex` flags in `page-metadata.ts` when they render real content and they re-enter the sitemap automatically. |
| J | **Derive calendars and month filters from departure records** rather than hand-picked cards | Half a day or more. Fixes the class of bug behind item B. Changes what visitors see, so it needs sign-off. |
| K | **Improve the three priority tour pages** — group size, pace, room sharing and private-room cost, inclusions, currency, booking conditions | Days, needs business facts |
| L | **Query-to-page map for US/UK** | Needs Search Console data (item F) |
| M | **Core Web Vitals — field baseline and the font-swap fix** | The image question is settled (see above). What remains: a throttled cold-cache run to confirm the font-swap hypothesis, real-user field data via Search Console once verified, and only then the `size-adjust` / self-hosting change. Do not change font loading on lab evidence alone. |
| N | **Visible breadcrumbs** | The `BreadcrumbList` JSON-LD exists but no on-page trail. Half a day. |
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

1. Get answers to A and B — they are factual errors on a live-bound branch and cheap to fix.
2. Do F, since it blocks every measurement claim anyone will want to make later.
3. Then I (destination pages), which is where the remaining search value is concentrated.
