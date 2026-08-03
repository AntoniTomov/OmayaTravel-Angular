# ADR-001: Angular Hybrid Rendering

## Status

Accepted

## Date

2026-08-03

## Context

Omaya Travel is rebuilding an existing WordPress site for a global audience. The site must preserve SEO, perform well globally and remain maintainable by a TypeScript/Angular-oriented developer.

## Decision

Use Angular for the public website with prerendering for stable content pages and SSR only where runtime data requires it.

The public website must not be deployed as a purely client-rendered SPA for indexable pages.

## Consequences

- Most pages can be served as cacheable HTML.
- SEO and social previews receive complete page metadata.
- Runtime hosting must support the selected Angular rendering/deployment model.
- Interactive behavior still runs client-side after initial HTML is delivered.

