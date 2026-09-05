# Omaya Travel — Angular monorepo

npm-workspaces monorepo. The website is an Angular 22 app with SSR (Express), served from
`apps/website`.

## Commands

Run from the repo root:

```bash
npm run build        # production build + prerender
npm test             # Vitest unit tests
npm run lint         # prettier --check
npm run type-check   # development build, type errors only
```

Tests use **Vitest**, not Jasmine — `withContext()` is not available; pass context by asserting on
collected arrays instead.

Do not start dev servers with raw shell commands — use `.claude/launch.json` (gitignored, so each
machine keeps its own). Two configurations are worth having: `website` running `ng serve` on port
4300, and `website-ssr` running `npm --workspace website run serve:ssr:website` on port 3000. The
`www` redirect and the robots/sitemap routes only exercise properly on the SSR build, because
`ng serve` rejects custom `Host` headers before Express sees them.

## Multi-site platform

One codebase serves multiple brands. `apps/website/src/sites/` holds one config per site
(`omaya`, `amelia`), each with its own `domain`, `locale`, brand, theme, content and feature flags.
`ActiveSite` resolves the site from the hostname, with a `?site=` query override on localhost.

`SiteLocale` is currently `'en' | 'bg'` and each site carries exactly one locale, so the platform
models **brands, not languages**. Adding a language to an existing brand needs a new locale axis —
see the SEO plan.

## Routing

`apps/website/src/app/shared/routing/public-routes.ts` is the single source of truth for public
URLs: slugs, canonical paths, prerender flags and 301 redirects. `app.routes.ts` builds the router
from those tables, and the sitemap is generated from them too, so route changes propagate
automatically. Public HTML routes keep a trailing slash.

## Content

Page content lives in typed constants under `apps/website/src/app/shared/content/`, not a CMS.

**Existing site copy was written by travel professionals and must not be rewritten.** Add sections
and metadata around it rather than editing the words. Tours carry authored `seo: { title,
description }` in `tour-content.ts` — use it verbatim; never generate replacement copy for it.

## SEO

`apps/website/src/app/shared/seo/` owns everything search-related: the `OmayaSeo` service (title,
description, canonical, Open Graph, Twitter, robots meta, JSON-LD), the page metadata registry, the
structured-data builders and the sitemap/robots generators. All of it writes to the document head
only — it never touches visible copy.

Strategy, market targeting and phased rollout: **[docs/SEO_STRATEGY_PLAN.md](docs/SEO_STRATEGY_PLAN.md)**.
Read it before changing anything under `shared/seo/` or adding public routes.

Omaya is **English only** — tours are guided in English and there is no German site and no `.de`
domain. Target markets are the **USA and UK first**, then Germany and the rest of the world *in
English*. Because the UK is primary, keep the British spelling the existing copy already uses, and
title destination and listing pages with both "tours" and "holidays" — UK searchers use "holidays"
as heavily as "tours". No hreflang is needed while the site is single-language on one domain; do
not add it speculatively.

Amelia Travel is a separate brand (Bulgarian market, women-only, Bulgarian language), not a
translation of Omaya, so the two are not hreflang alternates. Its SEO is a separate exercise.

## Other docs

`docs/` holds the working plans and governance notes. The ones worth knowing about:

- `SEO_PROGRESS.md` — **start here for SEO**: what is done, what is blocked and on whom
- `SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md` — external review and 90-day plan the progress board tracks
- `SEO_STRATEGY_PLAN.md` — search strategy, markets and keyword targets
- `SEO_IMPLEMENTATION.md` — what the SEO code does and how to extend it
- `MULTI_SITE_PLATFORM.md` — the multi-brand architecture
- `AMELIA_TRAVEL_ROLLOUT_PLAN.md` — the Bulgarian-language Amelia brand
- `OMAYA_WEBSITE_REBUILD_PLAN.md` — the rebuild this repo came from
- `PROJECT_STATUS.md`, `DECISIONS.md`, `ISSUE_BACKLOG.md` — current state and history

## Conventions

- Service files are kebab-case and export a PascalCase class (`omaya-seo.ts` → `OmayaSeo`).
- Prefer `inject()` over constructor parameters, matching the existing services.
- Prettier formats everything; run `npm run lint` before committing.
