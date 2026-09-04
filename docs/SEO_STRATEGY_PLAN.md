# SEO Strategy & Rollout Plan

Target markets: **United States and Germany first, rest of world after.**
Bulgaria is a destination Omaya sells, not a market Omaya sells to.

Interactive version of this document (same content, easier to read):
<https://claude.ai/code/artifact/97ca7771-a067-4393-9f75-6bb57733d96d>

> **Copy constraint.** All existing site copy was written by travel professionals and must not be
> rewritten. Everything in this plan is additive: meta tags and structured data live in the document
> head and never touch visible text, and the page-template work adds sections the pages do not have
> yet. Where existing copy already answers a question well, mark it up — do not reword it.

---

## 1. Diagnosis (verified 4 September 2026 against the live site)

Measured by fetching `omayatravel.com` directly and reading the HTML Googlebot receives.

| Signal | State |
| --- | --- |
| Distinct title tags across the whole site | **1** — every page returns `<title>Omaya Travel</title>` |
| Meta descriptions | **0** — Angular's `Meta` service is never imported |
| Canonical tags emitted | **0** — despite `canonicalPath` existing on every route |
| Open Graph / Twitter tags | **0** |
| JSON-LD structured data blocks | **0** |
| German-language pages | **0** |
| `robots.txt` | HTTP 404 |
| `sitemap.xml` | HTTP 404 |
| `www` vs non-`www` | Both return HTTP 200 with no redirect — duplicate content |

Root cause of the title problem: `apps/website/src/app/app.ts` runs a single global
`titleService.setTitle(site.brand.name)` on every navigation, and no route ever overrides it.

**Already correct, do not change:** SSR works (~100 KB of rendered HTML per page, fully crawlable),
and the site sits behind Hostinger's CDN with ~23 ms upstream and ~0.2 s TTFB. Performance is not a
ranking problem.

**Already built but unused:** `public-routes.ts` defines `canonicalPath` for every route and exports
`canonicalUrl()`; `app.routes.ts` attaches it to every route's `data`. Nothing consumed it.
`TourDetailContent` carries an authored `seo: { title, description }` for all 8 tours — written by
the content team and never rendered.

---

## 2. Market strategy

### United States — English, USD

- **Competitors:** Intrepid US, G Adventures, Exodus US, Wilderness Travel, MT Sobek, Trafalgar,
  Insight Vacations, Adventures in Good Company, Women Travel Abroad.
- **Wedge:** women-only and solo-traveller trips to uncommon destinations. Morocco women-only is
  contested; **Kyrgyzstan women-only is close to empty.**
- **Trust cues:** reviews and star ratings, TripAdvisor presence, transparent USD pricing.
- **Shortcut:** TourRadar, Travelstride, Bookmundi and TourScoop already own page one for "best"
  queries — get listed on them.

### Germany — German, EUR

- **Competitors:** DIAMIR, SKR Reisen, Natürlich Reisen, Gebeco, Hauser Exkursionen, ASI Reisen,
  Chamäleon, Studiosus, Wikinger, World Insight, Djoser.
- **Wedge:** DIAMIR, SKR and Natürlich Reisen all sell Bulgaria **and** Kyrgyzstan — Omaya's exact
  portfolio — but none run women-only departures. `Frauenreise Kirgistan` is effectively unclaimed.
- **Trust cues:** insolvency protection, group-size cap as a number, and above all
  **deutschsprachige Reiseleitung** (a German-speaking guide).
- **Shortcut:** kleingruppenreisen.com, travelcowboy.de and German comparison portals.

> **Product question that gates the German launch.** Every German competitor sells on
> *deutschsprachige Reiseleitung*. German travellers search for it and filter on it. If Omaya cannot
> field German-speaking guides, German organic traffic will arrive and bounce — translating the site
> without solving the guide question buys expensive disappointment.

### Realistic expectations

Omaya will not rank for the head term "small group adventure travel" — Intrepid, Exodus and
G Adventures have decades of authority on it. That traffic is browsing anyway. The winnable,
booking-intent terms combine a destination with a differentiator:

| Theme | United States (English) | Germany (German) |
| --- | --- | --- |
| Kyrgyzstan | women only tour Kyrgyzstan · Song-Kul lake trek · solo female travel Kyrgyzstan | Frauenreise Kirgistan · Kirgistan Rundreise Kleingruppe · Song-Kul Trekking |
| Morocco | solo female travel Morocco small group · women only Morocco tour | Marokko Frauenreise · Marokko Rundreise kleine Gruppe |
| Algeria | Tadrart Rouge tour · Algeria Sahara expedition · Tassili n'Ajjer guide | Algerien Sahara Reise · Tadrart Rouge Wüstenreise |
| Bulgaria | small group Bulgaria tour 2027 · Rila Monastery guide · best time to visit Bulgaria | Bulgarien Rundreise Kleingruppe · Rila Kloster · beste Reisezeit Bulgarien |
| B2B | Bulgaria DMC · destination management company Bulgaria | DMC Bulgarien · Incoming Agentur Bulgarien |

---

## 3. German architecture decision (blocks Phase 3)

The platform models **brands**, not languages: `SiteLocale` is `'en' | 'bg'`, each `SiteConfig`
carries one `domain` and one `locale`, and the active site resolves by hostname. German Omaya is the
same brand in another language — a new axis.

| Option | Upside | Downside |
| --- | --- | --- |
| **Subfolder `omayatravel.com/de/`** *(recommended)* | All authority compounds on one domain; Google's preferred pattern; one Search Console property | Needs a locale axis in routing, slugs and content |
| Separate domain `omayatravel.de` | Fits the existing site model with almost no refactor | Starts from zero authority; roughly doubles time to first rankings |

Either way, hreflang between language variants is mandatory from launch day.

**Legal checks for counsel, not for engineering:**

- **Germany** — package travel sold to German consumers falls under EU Directive 2015/2302 (§651r
  BGB), requiring insolvency protection and a *Reisesicherungsschein*. Omaya's Bulgarian EU
  protection is likely recognised — confirm it, then display it.
- **United States** — California, Florida, Washington and Hawaii run seller-of-travel registration
  schemes that can apply to operators selling to their residents.

---

## 4. Phases

### Phase 1 — Wire up the SEO surface

~1 week, all in this repo, language-agnostic. **Prerequisite to everything else** — content
published before this is wasted because Google cannot tell the pages apart.

See [Phase 1 progress](#phase-1-progress) below for live status.

1. Build an `OmayaSeo` service setting title, meta description, canonical, Open Graph and Twitter
   tags per route, running during SSR so tags land in the served HTML.
2. Extend route data with `seoTitle` / `seoDescription`, following the existing `canonicalPath`
   pattern.
3. Supply titles and descriptions for all public pages. Tours already have authored `seo` copy —
   use it verbatim.
4. Generate `sitemap.xml` from the route tables so it cannot drift, served as a sitemap **index**
   so German can be added as a child later.
5. Add `robots.txt` pointing at the sitemap index.
6. Add JSON-LD: `TravelAgency` / `Organization` site-wide, `TouristTrip` + `Offer` on tours,
   `BreadcrumbList` everywhere, `FAQPage` where FAQ content exists.
7. Verify Google Search Console and Bing Webmaster Tools, submit the sitemap, set up
   country-segmented reporting for US and DE.

### Phase 2 — Extend the money pages for the US

~2–3 weeks, depends on Phase 1. Existing copy untouched.

1. Keep existing destination copy exactly as written and build around it — add the sections the
   pages lack: seasonality, FAQ, embedded tours with prices and departure dates, internal links.
2. Add real traveller testimonials with `AggregateRating` markup so stars appear in results.
3. Add `FAQPage`-marked FAQ blocks to every tour and destination page, answering US-specific
   questions (flights, visas from the US, trip length against limited vacation days).
4. Build dedicated women-only and solo-traveller landing pages per destination — the category
   routes already exist.
5. Show USD pricing; surface licence, years operating, group-size cap and guaranteed departures
   above the fold.
6. Add year-qualified landing pages for 2027 departures (calendar routes already exist).
7. Audit image alt text and file names across the galleries.

### Phase 3 — Launch German

~4–6 weeks, blocked on the architecture decision and the German-guide question.

1. Settle subfolder vs separate domain, then build the locale axis into routing, slugs and content.
2. Have a native German travel copywriter write the pages — not machine translation.
3. Brief that writer *from* the existing English copy rather than handing it over to be translated.
4. Localise URL slugs (`/de/kirgistan/`, not `/de/kyrgyzstan/`).
5. Lead every German page with *deutschsprachige Reiseleitung*, the group-size cap as a number, and
   insolvency protection.
6. Add hreflang across all variants including `x-default`; give German its own child sitemap.
7. Show EUR pricing.

### Phase 4 — Off-page (parallel, from week one)

1. Get listed on the aggregators in both markets.
2. Build a review presence on TripAdvisor, Google and Trustpilot (Trustpilot carries unusual weight
   with German buyers).
3. Pursue in-language links: US women's travel communities and adventure publications; German
   outdoor and *Fernreisen* media.
4. Keep a Google Business Profile as a trust signal, not a traffic channel — local-pack visibility
   in Bulgaria does not reach a buyer in Chicago or Hamburg.

### Phase 5 — Content engine (ongoing)

1. Two to four articles a month, permanently, per language.
2. Write only where Omaya has first-hand authority — the trips actually run.
3. Cluster around each destination in each language, linking back to destination pages and tours.
4. Write German content natively; the two markets ask different questions.
5. Refresh the facts (years, prices, availability) each season, not the voice.

### Measurement

Review monthly in Search Console, segmented by country.

- **Weeks 1–4** — indexed page count climbs toward ~40.
- **Months 2–3** — US impressions rise on long-tail queries; CTR improves as real titles land.
- **Months 4–6** — first-page US positions on destination-plus-differentiator terms; German pages
  enter the index. Enquiry volume is the number that matters.
- **Months 6–12** — German rankings mature and content clusters start ranking for unplanned terms.

---

## Phase 1 progress

Status of the implementation on branch `toni-seo-optimization`.

- [x] 1. **`OmayaSeo` service** — **Completed.** `apps/website/src/app/shared/seo/omaya-seo.ts` sets
      title, description, canonical link, Open Graph, Twitter card and robots meta per route, and
      runs during SSR so the tags are in the served HTML. Replaces the single site-wide
      `setTitle(site.brand.name)` that `app.ts` used to run.
- [x] 2. **Route metadata resolution** — **Completed.** The service consumes the `canonicalPath` and
      `canonicalPathPattern` data that already existed on every route and was previously unused,
      expanding `:tourSlug` / `:destinationSlug` for parameterised routes.
- [x] 3. **Titles and descriptions for all public pages** — **Completed.** Tours use their authored
      `seo.title` / `seo.description` from `tour-content.ts` verbatim; blog articles derive from the
      post's own title and excerpt; the remaining pages are covered by
      `apps/website/src/app/shared/seo/page-metadata.ts`. **41 prerendered pages now carry 41
      distinct titles** — previously all 41 shared `<title>Omaya Travel</title>`.
- [x] 4. **`sitemap.xml`** — **Completed.** Generated from `PUBLIC_INDEXABLE_ROUTES` in
      `apps/website/src/app/shared/seo/sitemap.ts` and served by Express. It is a sitemap *index*
      pointing at `/sitemap-pages.xml` (40 URLs, `lastmod` on the 4 blog posts), so a German child
      sitemap can be added later without changing the URL Google already knows. Pages marked
      `noIndex` are excluded.
- [x] 5. **`robots.txt`** — **Completed.** Served by Express, points at the sitemap index and
      disallows `/search` and query-parameter URLs. Both files advertise the host they were
      requested from, so each site in the platform gets its own domain.
- [x] 6. **JSON-LD structured data** — **Completed.**
      `apps/website/src/app/shared/seo/structured-data.ts` emits `TravelAgency` and `WebSite` with
      `SearchAction` site-wide, `BreadcrumbList` on every non-home page, `TouristTrip` + `Offer` +
      itinerary `ItemList` on tour pages, `FAQPage` where a tour has FAQ content, and `BlogPosting`
      on articles. Tour pages ship 4 blocks, destination pages 3, the homepage 2.
- [x] 7. **`www` → non-`www` 301** — **Completed.** Express middleware, verified preserving path and
      query string. Fixes the duplicate-content finding in section 1.
- [x] 8. **Unit tests** — **Completed.** `page-metadata.spec.ts` and `sitemap.spec.ts` added; suite
      is green at **87 tests across 9 files**. The metadata spec asserts no two indexable pages ever
      share a title, which is the regression that caused this whole exercise.
- [ ] 9. Search Console / Bing verification — **not done, requires the site owner's Google account.**
      Once merged and deployed: add the property, submit `https://omayatravel.com/sitemap.xml`, and
      enable country-segmented reporting for US and DE.

**Verification performed:** production build succeeds and prerenders 42 routes; `robots.txt`,
`/sitemap.xml` and `/sitemap-pages.xml` return 200 with correct content types from the SSR server;
SSR-rendered (non-prerendered) pages carry the full tag set; the 404 route returns HTTP 404 with
`noindex, follow`; no browser console errors.

**Not addressed (pre-existing, unrelated):** the build reports an initial bundle budget warning
(605.86 kB against a 500 kB budget) and a `tour-detail.scss` budget warning. Both predate this work.

---

## Open questions for the business

These block nothing in Phase 1 but are needed to complete the structured data and social previews.

1. **Organisation facts for JSON-LD** — registered business name, postal address, public phone
   number, licence number, and social profile URLs. Left as explicit `TODO_SEO_*` markers in the
   code rather than invented, because structured data is a factual claim published to Google.
2. **Default social share image** — a 1200×630 image for pages without their own hero, used by
   Open Graph when a link is shared.
3. **German architecture** — subfolder or separate domain (section 3).
4. **German-speaking guides** — whether Omaya can field them, which determines whether Phase 3 is
   worth doing this year.
