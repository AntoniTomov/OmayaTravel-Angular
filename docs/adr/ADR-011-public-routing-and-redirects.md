# ADR-011: Public Routing And Redirects

## Status

Accepted

## Date

2026-08-03

## Context

Omaya Travel is replacing an existing WordPress site. The SEO inventory found valuable public URLs mixed with WordPress theme/demo, plugin, account, preview, query and duplicate tour URLs.

The launch must protect existing search equity, avoid redirect chains and support static/prerendered Angular on Hostinger.

## Decision

For v1, preserve existing high-value public URL paths where they are already clean enough:

- `/`
- `/destinations/`
- `/destinations/{country}/`
- `/tour-item/{slug}/`
- root-level blog article slugs
- root-level commercial/trust/static page slugs

Do not normalize tour URLs to `/tours/{slug}/` for launch. The cleaner route shape can be reconsidered after Search Console stabilizes post-launch.

Duplicate tour URLs that already canonicalize to stronger tour pages must become single-hop `301` redirects to their canonical targets.

WordPress admin, login, preview, query, account, cart, checkout, booking-plugin, demo/theme and utility URLs must not become indexable Angular pages. They receive either a category-level 404/exclusion rule or a specific redirect only when there is a useful equivalent.

## Consequences

- Launch has fewer risky URL changes.
- Angular route names can remain internally clean while public URLs preserve WordPress-era paths.
- Sitemap, canonical URLs and structured data must use the preserved public paths.
- `.htaccess` or Cloudflare fallback rules must not create soft-200 responses for unknown old URLs.
- Any future migration to cleaner `/tours/` routes requires a separate ADR and Search Console-informed redirect plan.

## Affected Experts

- Architecture
- SEO
- Migration
- Angular
- DevOps
- QA
