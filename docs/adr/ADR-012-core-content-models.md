# ADR-012: Core Content Models

## Status

Accepted

## Date

2026-08-03

## Context

Omaya Travel v1 content is managed in Git. The site needs stable models for routes, SEO, media, migration and future CMS replacement.

## Decision

Use TypeScript-defined content models as the canonical v1 content contract. Store normalized content under `content/` and shared schemas/types under `packages/content-models/` once the workspace exists.

Structured fields belong in TypeScript/JSON-compatible data. Long-form editorial content may use Markdown referenced by the structured item.

Core models:

- `Destination`
- `Tour`
- `Departure`
- `BlogArticle`
- `StaticPage`
- `MediaReference`
- `SeoMetadata`
- `RedirectRule`

## Consequences

- Angular, SEO and migration use one normalized model.
- Build-time validation can fail unsafe content before deploy.
- Future CMS data must map to this model instead of changing Angular page contracts.
- The model can be implemented after the pnpm workspace exists.

## Affected Experts

- Architecture
- Angular
- SEO
- Migration
- DevOps
- QA
