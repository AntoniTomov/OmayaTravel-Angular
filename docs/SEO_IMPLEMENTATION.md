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

> **This section is superseded by [SEO_PROGRESS.md](SEO_PROGRESS.md)**, which tracks live status
> against the external review in
> [SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md](SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md). The summary below is
> kept for orientation; the progress board is authoritative.

### Highest return

1. **Verify Google Search Console and submit the sitemap.** *(Needs the site owner's Google
   account; blocks all measurement.)* Prefer a DNS-verified Domain property, which covers protocol
   and subdomain variants. The existing GA4 ID alone does not guarantee Analytics-based
   verification — that method requires the right permissions and applies to URL-prefix properties.

2. **Build the four destination pages and the hub.** *(Largest single content win.)* They currently
   render `PublicRoutePlaceholder` — literally `<h1>Public route placeholder</h1>` — and are
   `noindex` for that reason. They target the highest-value terms on the whole list, and their
   metadata is already written and waiting. Removing the `noIndex` flags once they render real
   content puts them into the sitemap automatically.

3. **Resolve the two factual errors** — the duplicate September 2027 URLs, and Algeria appearing in
   September listings when it has no September departure. Both need a business answer.

4. **Supply the organisation facts.** Registered business name, postal address, public phone,
   licence number, social profile URLs. Roughly fifteen minutes of wiring once they exist.

5. **Collect real traveller reviews** — for trust and conversion. Note that they will *not* produce
   review stars in Google: self-serving reviews of an Organization or LocalBusiness, including
   `TravelAgency`, are excluded from review-snippet eligibility.

### Worth doing

6. **Improve the existing priority tour pages** before adding competing category pages. With one
   relevant product per niche, improving that product beats creating a rival landing page.
7. **Measure Core Web Vitals** on representative templates before acting. Missing image dimensions
   *can* cause layout shift and a bundle-budget warning *may* indicate a problem, but neither is a
   measurement. Baseline LCP, INP and CLS first.
8. **Visible breadcrumbs.** The `BreadcrumbList` JSON-LD is emitted, but there is no on-page trail.
9. **A purpose-made 1200×630 social share image.**
10. **Internal linking** between articles, tours and destinations.
11. **`og:image:width` / `og:image:height`**, and accurate `dateModified` / `lastmod` for
    substantive changes only — never automatic freshness timestamps.

### Explicitly not recommended

- **hreflang, regional copies or translations** — one language, one domain.
- **`AggregateRating` on the business entity for review stars** — ineligible, see item 5.
- **Extending `FAQPage` markup to win rich results** — that display has been withdrawn. Visible
  FAQs still earn their place by answering purchase objections.
- **`priority` and `changefreq` in the sitemap**, and the **`keywords` meta tag** — all ignored.
- **Mass article production** or treating competitors' article counts as a publishing target.
- **Chasing "small group adventure travel"** as a head term.

---

## 6. Honest expectations

Phase 1 fixed the plumbing. It did not make ranking newly *possible* — a crawlable page can rank
without a meta description or a sitemap, and the site was crawlable before. What was actually broken
was that 41 pages shared one title and none declared a canonical, which are real defects that
weakened relevance and consolidation signals. Those are now fixed.

What follows is content and time. No forecast of specific positions or timelines is offered here:
there is no Search Console baseline yet, so any such number would be invented. Once the property is
verified and a few weeks of data exist, forecasting becomes possible.

The number worth watching is qualified enquiries, not rankings.
