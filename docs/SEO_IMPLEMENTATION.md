# SEO Implementation Report

What was built, how it works, and what is still worth doing.

- **Branch:** `toni-seo-optimization`
- **Commits:** `90955ab` (Phase 1), `a8f4a30` (US/UK retarget), `e5f7786` (placeholder + Open Graph fixes)
- **Status:** Phase 1 complete and verified. Not yet merged or deployed.

Companion documents:

- [SEO_STRATEGY_PLAN.md](SEO_STRATEGY_PLAN.md) — markets, competitors, keyword targets, phase plan
- [CLAUDE.md](../CLAUDE.md) — the conventions any future work must follow

> **Copy constraint observed throughout.** No visible site copy was changed. Everything added lives
> in the document head — title tags, meta descriptions, canonical links, Open Graph, Twitter cards
> and JSON-LD — or in server-side files that render nothing. Where authored copy already existed,
> it is used verbatim.

---

## 1. The problem, in one table

Measured against the live site before the work, and against the production build after.

| Signal | Before | After |
| --- | --- | --- |
| Distinct title tags | **1** — every page returned `<title>Omaya Travel</title>` | **41** pages, 41 distinct titles |
| Meta descriptions | 0 | Every page |
| Canonical tags | 0, despite `canonicalPath` existing on every route | Every page |
| Open Graph / Twitter cards | 0 | Every page |
| JSON-LD blocks | 0 | 2–4 per page |
| `robots.txt` | HTTP 404 | Served, points at the sitemap |
| `sitemap.xml` | HTTP 404 | Sitemap index → 35 indexable URLs |
| `www` vs bare domain | Both HTTP 200 — the whole site duplicated | 301 to the bare domain |
| Unbuilt placeholder pages | Would have been indexed | `noindex, follow`, excluded from sitemap |

**Root cause of the title problem:** `apps/website/src/app/app.ts` ran a single global
`titleService.setTitle(site.brand.name)` on every navigation. No route ever overrode it.

**What was already there and unused:** `public-routes.ts` defined a `canonicalPath` for every route
and exported a working `canonicalUrl()` helper; `app.routes.ts` attached it to all ~40 routes;
nothing read it. All 8 tours carried authored `seo: { title, description }` copy in
`tour-content.ts` that was never rendered. The hard parts were built — the wiring was missing.

---

## 2. What was built

Everything new lives in `apps/website/src/app/shared/seo/`.

### `omaya-seo.ts` — the service

Injectable, started once from the root component, then driven by router navigation. For each route
it resolves the page, then writes:

- `<title>` and `<meta name="description">`
- `<link rel="canonical">`, from the `canonicalPath` / `canonicalPathPattern` route data that
  already existed (`:tourSlug` and `:destinationSlug` are expanded from route params, with a
  fallback that reads the slug off the matched URL segments for the canonical-matcher routes)
- `<meta name="robots">` — `index, follow` or `noindex, follow`
- Open Graph: `og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`,
  `og:locale`, plus `article:published_time` on blog posts only
- Twitter: `summary_large_image` card with title, description and image
- JSON-LD blocks, tagged with a `data-omaya-seo` attribute so stale ones are cleared on navigation

It runs during SSR, so every tag is present in the served HTML rather than appearing after
hydration. That matters — it is what crawlers actually read.

**Metadata resolution order:** tour → blog article → destination → static registry → safe fallback.

- **Tours** use their authored `seo.title` / `seo.description` from `tour-content.ts`, verbatim.
- **Blog articles** derive from the post's own `title` and `excerpt`. Where the headline plus the
  brand suffix would exceed 60 characters, the suffix is dropped rather than truncating the
  author's headline.
- **Destinations** and **everything else** come from `page-metadata.ts`.

### `page-metadata.ts` — the registry

Titles and descriptions for the ~30 pages that had no authored copy of their own, keyed by the
`routeKey` already set in `app.routes.ts`. Titles carry both "tours" and "holidays" because the UK
is a primary market and UK searchers use "holidays" as heavily as "tours" — one title serves both
markets. Also holds the `noIndex` flags and the default social share image.

### `structured-data.ts` — JSON-LD builders

| Schema | Where |
| --- | --- |
| `TravelAgency` | Every page |
| `WebSite` + `SearchAction` | Every page |
| `BreadcrumbList` | Every page except the homepage |
| `TouristTrip` + `Offer` + itinerary `ItemList` | Tour pages |
| `FAQPage` | Tours that have FAQ content |
| `BlogPosting` | Articles |

Facts that could not be verified — postal address, public phone, licence number, social profiles —
are **omitted rather than invented**, behind a `TODO_SEO_ORGANISATION` marker. Structured data is a
factual claim published to Google; a wrong address is worse than a missing one.

### `sitemap.ts` — sitemap and robots.txt

Both generated from `PUBLIC_INDEXABLE_ROUTES`, the same table the router is built from, so they
cannot drift from the real site. Pages marked `noIndex` are filtered out automatically.

`/sitemap.xml` is a sitemap **index** pointing at `/sitemap-pages.xml`, so a second child can be
added when blog volume justifies splitting it without changing the URL Google already knows.
`lastmod` is set on blog posts from their own `publishedAt`, and omitted elsewhere rather than
faked.

### `server.ts` — Express routes

- `GET /robots.txt`, `GET /sitemap.xml`, `GET /sitemap-pages.xml`, all cached for an hour
- A `www` → bare-domain 301 that preserves path and query string

All three files advertise the host they were requested from, so each brand on the platform gets its
own domain rather than Omaya's hardcoded.

### Tests

`page-metadata.spec.ts` and `sitemap.spec.ts`, 88 tests green across 9 files. The most important
assertion is that **no two indexable pages ever share a title** — that is the exact regression that
caused this whole exercise, and it will now fail the build rather than reach production.

---

## 3. How to work with it

**Adding a public page:** add the slug to `public-routes.ts` as usual, then add a matching entry to
`STATIC_PAGE_METADATA` keyed by the route's `routeKey`. It enters the sitemap automatically. The
metadata spec will fail if the title is too long, the description is outside snippet length, or the
title duplicates another page's.

**Adding a tour:** nothing to do here — write `seo: { title, description }` in `tour-content.ts` as
the existing tours do, and it is picked up verbatim.

**Adding a blog post:** nothing to do — the post's `title`, `excerpt`, `publishedAt` and image are
used automatically.

**Making a page non-indexable:** set `noIndex: true` on its metadata entry. It drops out of the
sitemap and gains a `noindex, follow` robots tag in the same step.

---

## 4. Verification performed

Not just unit tests — the production SSR build was run and inspected.

- Build succeeds, prerenders 42 static routes; **41 pages carry 41 distinct titles**, and no page
  still returns the bare `<title>Omaya Travel</title>`
- `robots.txt`, `/sitemap.xml` and `/sitemap-pages.xml` all return HTTP 200 with correct content
  types from the running SSR server
- `www` → bare-domain 301 verified preserving both path and query string; the bare domain correctly
  does **not** redirect; an unknown host correctly gets its own origin in robots.txt
- SSR-rendered (not prerendered) pages carry the full tag set
- The 404 route returns HTTP 404 with `noindex, follow`
- Blog articles emit `og:type: article` and `article:published_time`; non-article pages carry
  neither
- Destination placeholders emit `noindex, follow` while real pages emit `index, follow`
- Every one of the 41 pages has exactly one `<h1>`
- No browser console errors
- Lint clean, 88 tests green

---

## 5. What is still worth doing

Ordered by return on effort. Items 1–5 are where the remaining value is concentrated.

### Tier 1 — highest return

1. **Verify Google Search Console and submit the sitemap.** *(Needs the site owner's Google
   account; blocks all measurement.)* The site already runs GA4 `G-2F24XF4XZ8`, so if the same
   Google account administers that property, Search Console verifies through the existing tag with
   no code change. Otherwise a DNS TXT record at Hostinger. Then submit
   `https://omayatravel.com/sitemap.xml` and review Performance filtered by country. Until this
   exists there is no way to tell whether any of the work landed.

2. **Build the four destination pages and the hub.** *(Largest single content win.)* They currently
   render `PublicRoutePlaceholder` — literally `<h1>Public route placeholder</h1>` — and are
   `noindex` for that reason. They target the highest-value terms on the whole list
   (*Bulgaria small group tours & holidays*, *Kyrgyzstan small group tours & holidays*), and their
   metadata is already written and waiting. Removing the `noIndex` flags once they render real
   content puts them into the sitemap automatically.

3. **Collect real reviews and add `AggregateRating` markup.** The highest-visibility, lowest-effort
   rich result available — it puts star ratings directly in the search listing. Needs real
   testimonials first; do not fabricate them.

4. **Supply the organisation facts.** Registered business name, postal address, public phone,
   licence number, social profile URLs. Roughly fifteen minutes of wiring once they exist, and they
   materially strengthen the entity signal for a small operator.

5. **Build the women-only and solo-traveller landing pages per destination.** This is the strategic
   wedge. Morocco women-only is contested; **Kyrgyzstan women-only is close to empty** and Omaya
   already runs the trip. The category routes already exist.

### Tier 2 — real impact, more work

6. **FAQ blocks with `FAQPage` markup** on every tour and destination page. The builder already
   exists and fires wherever a tour has `faq` content — most tours simply have none yet. FAQ rich
   results expand in the listing and push competitors down the page.

7. **Core Web Vitals.** Two measured issues, both ranking factors:
   - **339 of 584 images carry no `width` attribute**, which risks cumulative layout shift.
   - The initial bundle is **605.86 kB against a 500 kB budget** (pre-existing, not caused by this
     work), which affects load performance.

8. **Visible breadcrumbs.** The `BreadcrumbList` JSON-LD is emitted, but there is no breadcrumb
   trail on the page itself. Google prefers both, and it helps users orient.

9. **Year-qualified landing pages for 2027 departures.** The calendar routes exist and just need
   titles and content. Year-qualified travel searches are high volume and cheap to capture.

10. **A purpose-made 1200×630 social share image.** Link previews currently crop a carousel frame —
    it works, but it was not designed for the shape.

### Tier 3 — worthwhile, less urgent

11. **Image sitemap entries.** Travel is an image-search category and the site has 584 images.
12. **`og:image:width` / `og:image:height`**, so social platforms render previews without a reflow.
13. **Four decorative homepage icons are missing `alt`** (`travel-match__icon`). They should carry
    `alt=""` to be correctly announced as decorative.
14. **71 images have no `loading` attribute.** Below-the-fold images should be `lazy`; above-the-fold
    ones should stay eager.
15. **`lastmod` for tours.** Tours have no date field today; adding one would let the sitemap signal
    freshness on the money pages, not just the blog.
16. **Internal linking between blog articles, tours and destinations.** Topical clusters are how
    small sites beat large ones on specific terms, and the links are currently sparse.
17. **Blog pagination** once article count grows past a single page.

### Explicitly not recommended

- **hreflang** — pointless while the site is one language on one domain. Do not add speculatively.
- **A German translation or a `.de` domain** — decided against; tours are guided in English.
- **`priority` and `changefreq` in the sitemap** — Google ignores both.
- **A `keywords` meta tag** — ignored by every major engine for over fifteen years.
- **Chasing "small group adventure travel"** — Intrepid, Exodus and G Adventures have decades of
  authority on it. That traffic is browsing anyway; the destination-plus-differentiator terms are
  where the bookings are.

---

## 6. Honest expectations

Phase 1 fixed the plumbing. It does not, by itself, produce rankings — it makes rankings possible,
which was not true before. The site went from telling Google nothing about 41 pages to describing
each one accurately.

What follows from here is content and time. Competitors ranking for these terms run 340–500 blog
articles against Omaya's 4, and that gap does not close by writing harder — it closes by picking
narrow topics nobody else has covered forty times, and publishing consistently for a year. Expect
indexation within weeks, impression growth within two to three months, and meaningful first-page
positions on the narrow terms somewhere in months four to six.

The number worth watching is enquiry volume, not rankings.
