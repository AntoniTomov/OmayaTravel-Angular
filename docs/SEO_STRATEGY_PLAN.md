# SEO Strategy & Rollout Plan

**Omaya Travel — English only.** Target markets: **United States and United Kingdom first**, then
Germany and the rest of the world *in English*. Bulgaria is a destination Omaya sells, not a market
Omaya sells to.

**Amelia Travel** is a separate brand for the Bulgarian domestic market, women-only, in Bulgarian.
It is deliberately out of scope here and gets its own plan later — see
[AMELIA_TRAVEL_ROLLOUT_PLAN.md](AMELIA_TRAVEL_ROLLOUT_PLAN.md).

Interactive version of this document (same content, easier to read):
<https://claude.ai/code/artifact/97ca7771-a067-4393-9f75-6bb57733d96d>

> **Copy constraint.** All existing site copy was written by travel professionals and must not be
> rewritten. Everything in this plan is additive: meta tags and structured data live in the document
> head and never touch visible text, and the page-template work adds sections the pages do not have
> yet. Where existing copy already answers a question well, mark it up — do not reword it.

> **No translation.** Omaya's tours are guided in English and the team does not speak German. There
> will be no German-language site and no `.de` domain. German and other non-anglophone travellers
> are reached through the English site, on English search terms. This removes the locale axis, the
> hreflang work and a translation budget from the plan entirely.

---

## 1. Diagnosis (verified 4 September 2026, fixed in Phase 1)

Measured by fetching `omayatravel.com` directly and reading the HTML Googlebot receives.

| Signal | State before | State after Phase 1 |
| --- | --- | --- |
| Distinct title tags | **1** — every page returned `<title>Omaya Travel</title>` | 41 pages, 41 distinct titles |
| Meta descriptions | 0 | Every page |
| Canonical tags | 0 (despite `canonicalPath` existing on every route) | Every page |
| Open Graph / Twitter | 0 | Every page |
| JSON-LD blocks | 0 | 2–4 per page |
| `robots.txt` | HTTP 404 | Served, points at the sitemap |
| `sitemap.xml` | HTTP 404 | Sitemap index, 40 URLs |
| `www` vs non-`www` | Both HTTP 200 — duplicate content | 301 to the bare domain |

Root cause of the title problem: `apps/website/src/app/app.ts` ran a single global
`titleService.setTitle(site.brand.name)` on every navigation, and no route overrode it.

**Already correct, do not change:** SSR works (~100 KB of rendered HTML per page, fully crawlable),
and the site sits behind Hostinger's CDN with ~23 ms upstream and ~0.2 s TTFB. Performance is not a
ranking problem.

**Already built but unused before Phase 1:** `public-routes.ts` defined `canonicalPath` for every
route and exported `canonicalUrl()`; `app.routes.ts` attached it to every route's `data`. Nothing
consumed it. `TourDetailContent` carries an authored `seo: { title, description }` for all 8 tours,
written by the content team and never rendered — Phase 1 now renders it verbatim.

---

## 2. Market strategy

One site, one language, three concentric audiences.

### United States — primary

- **Competitors:** Intrepid US, G Adventures, Exodus US, Wilderness Travel, MT Sobek, Trafalgar,
  Insight Vacations, Adventures in Good Company, Women Travel Abroad.
- **Vocabulary:** "tours", "trips", "vacation". Trip length matters against limited vacation days.
- **Trust cues:** reviews and star ratings, TripAdvisor presence, transparent pricing, clear
  cancellation terms.
- **Shortcut:** TourRadar, Travelstride, Bookmundi and TourScoop already own page one for "best"
  queries — get listed on them.

### United Kingdom — primary

- **Competitors:** Explore Worldwide, Exodus, Intrepid UK, Undiscovered Destinations, Jules Verne,
  Wild Frontiers, Much Better Adventures, Responsible Travel, KE Adventure Travel.
- **Vocabulary:** UK searchers use **"holidays"** as heavily as "tours" — *Bulgaria holidays*,
  *small group holidays*. Undiscovered Destinations, who rank for Bulgaria, title their page
  "Bulgaria Tours & Holidays". Destination page titles should carry both words.
- **Spelling:** the existing site copy is already British English ("traveller"), which serves the UK
  natively and reads fine to American visitors. Keep it — do not Americanise.
- **Trust cues:** ABTA, AITO and ATOL badges are close to decisive in the UK. Every UK competitor
  displays them prominently. See the legal question in section 3.
- **Shortcut:** Responsible Travel and AITO carry real weight with UK buyers.

### Germany and rest of world — third, in English

German, Dutch, Scandinavian and other European travellers who search in English are a real segment,
and a narrower, less contested one than the domestic-language market. Reach them by ranking for the
same English destination terms, not by translating.

Worth knowing: the German-language operators DIAMIR, SKR Reisen and Natürlich Reisen all sell
Bulgaria **and** Kyrgyzstan — Omaya's exact portfolio — but they compete in German, on
*deutschsprachige Reiseleitung*. They are not competing for the English-language searches Omaya is
targeting, so they are context rather than competition.

### Realistic expectations

Omaya will not rank for the head term "small group adventure travel" — Intrepid, Exodus and
G Adventures have decades of authority on it. That traffic is browsing anyway. The winnable,
booking-intent terms combine a destination with a differentiator:

| Theme | Target terms (US and UK variants) |
| --- | --- |
| Kyrgyzstan | women only tour Kyrgyzstan · solo female travel Kyrgyzstan · Song-Kul lake trek · Kyrgyzstan small group holidays |
| Morocco | solo female travel Morocco small group · women only Morocco tour · Morocco small group holidays |
| Algeria | Tadrart Rouge tour · Algeria Sahara expedition · Tassili n'Ajjer guide |
| Bulgaria | small group Bulgaria tour 2027 · Bulgaria holidays small group · Rila Monastery guide · best time to visit Bulgaria |
| B2B | Bulgaria DMC · destination management company Bulgaria · Bulgaria ground handler |

**The wedge:** women-only and solo-traveller trips to uncommon destinations. Morocco women-only is
heavily contested by Trafalgar, Intrepid and Insight. Kyrgyzstan women-only is **less contested, but
not empty** — Ecotour.kg and Wander Kyrgyzstan both sell it. That makes it a plausible focus, not a
demonstrated gap; the competition is established but market size and US/UK ranking difficulty are
not, and should be validated against real query data before it absorbs the largest investment.

Note also that women-only travel and joining a mixed group as a solo traveller are **different
needs**, and the pages should say so plainly rather than blur them.

The B2B row is worth more than it looks: US and UK tour operators searching for a Bulgarian ground
handler are exactly the audience Omaya's licence and local standing were built for, and competition
on those terms is thin.

---

## 3. Open business questions

Not engineering decisions. These affect whether traffic converts once it arrives.

- **United Kingdom — ABTA / AITO / ATOL.** ATOL applies to flight-inclusive packages sold in the UK;
  if Omaya sells land-only, it likely does not apply, but this needs confirming rather than
  assuming. ABTA or AITO membership is not legally required but is a strong UK trust signal, and
  every UK competitor displays one. Worth pricing up.
- **United States — seller-of-travel registration.** California, Florida, Washington and Hawaii run
  schemes that can apply to operators selling to their residents.
- **Organisation facts for structured data** — registered business name, postal address, public
  phone number, licence number, and social profile URLs. Left as explicit `TODO_SEO_ORGANISATION`
  markers in the code rather than invented, because structured data is a factual claim published to
  Google.
- **Default social share image** — a 1200×630 image for pages without their own hero.

---

## 4. Phases

### Phase 1 — Wire up the SEO surface ✅ Completed

See [Phase 1 progress](#phase-1-progress) below.

### Phase 2 — Extend the money pages

~2–3 weeks. Existing copy untouched.

1. Keep existing destination copy exactly as written and build around it — add the sections the
   pages lack: seasonality, FAQ, embedded tours with prices and departure dates, internal links.
2. Add real traveller testimonials, for trust and conversion. They will **not** produce review
   stars in Google — self-serving reviews of an Organization or LocalBusiness, `TravelAgency`
   included, are excluded from review-snippet eligibility. Do not relabel the business to get
   around that.
3. Add visible FAQ blocks to every tour and destination page. Answer both markets' questions:
   flights and vacation days for the US, and for the UK, departure logistics and what "small group"
   actually means in numbers. Keep the existing accurate `FAQPage` markup, but do not extend it
   expecting FAQ rich results — that display has been withdrawn. The value is in answering purchase
   objections on the page.
4. Improve the existing women-only and solo-traveller products before building competing category
   landing pages. With one relevant product in a niche, a rival page splits signals rather than
   adding reach. Create a separate page only when it serves a distinct search need with a
   meaningful choice of products.
5. Surface licence, years operating, group-size cap and guaranteed departures above the fold. Add
   ABTA/AITO badges here if section 3 resolves in favour of joining.
6. Add year-qualified landing pages for 2027 departures (calendar routes already exist).
7. Audit image alt text and file names across the galleries.

### Phase 3 — UK market fit

~1 week. Small, high-return, and no longer competing with a translation project for budget.

1. Make sure destination and listing pages carry **"holidays"** as well as "tours" in titles and
   headings — the single highest-value UK vocabulary fix. *(Metadata half done in Phase 1.)*
2. Show pricing in GBP and USD alongside the EUR the tours are priced in.
3. Set UK-relevant expectations on tour pages: departure logistics, what is and is not included
   relative to what UK buyers assume from ABTA-bonded operators.
4. Pursue UK-specific listings: Responsible Travel, AITO's directory, UK adventure-travel media.

### Phase 4 — Off-page (parallel, from week one)

1. Get listed on the aggregators: TourRadar, Bookmundi, Travelstride, TourScoop for the US;
   Responsible Travel and AITO for the UK.
2. Build a review presence on TripAdvisor, Google and Trustpilot.
3. Pursue links in-market: US women's travel communities and adventure publications; UK adventure
   and responsible-travel media; English-language European travel blogs covering Central Asia.
4. Keep a Google Business Profile as a trust signal, not a traffic channel — local-pack visibility
   in Bulgaria does not reach a buyer in Chicago or Manchester.

### Phase 5 — Content engine (ongoing)

1. Two to four articles a month, permanently. All English.
2. Write only where Omaya has first-hand authority — the trips actually run. Song-Kul, Tadrart
   Rouge, Rila Monastery, women-only travel in Morocco. Never generic "top 10 destinations"
   content; that ground is lost.
3. Cluster around each destination, linking every article back to its destination page and tour.
   Topical clusters are how small sites beat large ones on specific terms.
4. Refresh the facts (years, prices, availability) each season, not the voice.

### Measurement

Review monthly in Search Console, filtered by country (US, UK, DE).

**No ranking or timeline forecast is offered.** There is no Search Console baseline yet, so any
figure would be invented. Once the property is verified and a few weeks of data exist, forecasting
becomes possible; until then, track the sequence rather than dates:

1. **Indexation** — pages get discovered and indexed. The first sign the plumbing works.
2. **Impressions** — pages start surfacing for queries. Tells you what Google thinks they are about.
3. **Clicks and CTR** — whether titles and descriptions earn the click at the position they hold.
4. **Qualified enquiries** — the only measure that matters commercially.

Diagnostic rules, in order: if a page is not indexed, investigate discovery, duplication and page
value before publishing more pages. If it earns impressions but few clicks, inspect query intent and
the competing results. If it attracts qualified visits but few enquiries, look at information gaps
and the form. If enquiries do not book, look at offer, price, availability and response handling.
Avoid changing titles repeatedly without enough evidence to interpret the result.

---

## Phase 1 progress

Implemented on branch `toni-seo-optimization` (commit `90955ab`).

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
      `apps/website/src/app/shared/seo/sitemap.ts` and served by Express, as a sitemap index
      pointing at `/sitemap-pages.xml` (40 URLs, `lastmod` on the 4 blog posts). Pages marked
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
      query string.
- [x] 8. **Unit tests** — **Completed.** `page-metadata.spec.ts` and `sitemap.spec.ts` added; suite
      green at **87 tests across 9 files**. The metadata spec asserts no two indexable pages ever
      share a title, which is the regression that caused this whole exercise.
- [x] 9. **UK "holidays" vocabulary in destination metadata** — **Completed.** Added after the market
      re-scope; destination and tour-listing titles now carry both "tours" and "holidays".
- [ ] 10. Search Console / Bing verification — **not done, requires the site owner's Google
      account.** Once merged and deployed: verify the property, submit
      `https://omayatravel.com/sitemap.xml`, and review by country for US, UK and DE.

**Verification performed:** production build succeeds and prerenders 42 routes; `robots.txt`,
`/sitemap.xml` and `/sitemap-pages.xml` return 200 with correct content types from the SSR server;
SSR-rendered (non-prerendered) pages carry the full tag set; the 404 route returns HTTP 404 with
`noindex, follow`; no browser console errors.

**Not addressed (pre-existing, unrelated):** the build reports an initial bundle budget warning
(605.86 kB against a 500 kB budget) and a `tour-detail.scss` budget warning. Both predate this work.

---

## Notes for future work

- **No hreflang is needed** while the site is English-only on one domain. Do not add it
  speculatively.
- **Amelia Travel** is a different brand for a different audience (Bulgarian, women-only, domestic),
  not a translation of Omaya. The two sites are not hreflang alternates of each other. Amelia's own
  SEO work is a separate exercise.
- The sitemap is an index with one child today. That structure is kept so a second child can be
  added when blog volume justifies splitting it, not for any language reason.
