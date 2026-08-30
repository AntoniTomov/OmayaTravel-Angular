# ADR-013: Media Delivery Strategy

## Status

Accepted

## Date

2026-08-04

## Context

Omaya Travel is an image-heavy travel website with a global audience. The v1 rebuild will use Angular with Git-managed structured content and Markdown, deployed as static/prerendered output where possible. The project needs low operating cost without sacrificing performance, SEO, or security.

The current WordPress media library must be migrated safely, but large originals and generated variants should not bloat the Git repository or Hostinger deployments.

DevOps PR #39 proposed the media delivery options and trade-offs for issue #4.

## Decision

Use Cloudflare R2 Standard as the source of truth for original migrated media.

Serve public media through:

```text
media.omayatravel.com
```

Use Cloudflare Image Transformations for responsive image variants with a fixed allowlist:

```text
320, 480, 720, 960, 1200, 1600, 1920
```

Use `format=auto` and bounded quality defaults by image use. Do not generate arbitrary transformation URLs from Angular runtime values.

Use separate production and staging buckets:

```text
omaya-travel-media-production
omaya-travel-media-staging
```

Defer Cloudflare Images storage for v1. Hostinger static assets are allowed only for small website-owned assets such as logos, icons, favicons, and tiny placeholders.

The approved public content media contract remains `MediaReference` from ADR-012:

```ts
export interface MediaReference {
  key: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
  sourceUrl?: string;
}
```

Content hashes, duplicate groups, byte sizes, derivative guesses, and migration verification fields belong in migration manifests or media inventory reports, not in the public Angular content contract unless a later ADR changes the model.

## Consequences

- Git remains lightweight and does not store the migrated travel photo library.
- Angular image URLs must be generated through one approved helper.
- Migration must map old WordPress media URLs to stable R2 keys.
- Media keys are immutable after launch; replacements use new keys or approved versioned suffixes.
- Cloudflare transformation count must be controlled through the width allowlist and normalized URL builder.
- Launch readiness must reconfirm Cloudflare pricing, plan support, source restrictions, and cache behavior.

## Rejected Options

- Hostinger as the primary media store for travel photography.
- Large originals or generated variants committed to Git.
- Cloudflare Images storage as a v1 dependency.
- Production use of `r2.dev` public URLs.
- Arbitrary client-controlled image transformations.
- WordPress media URLs as production canonical image URLs, except during an explicit rollback.

## Affected Experts

- Architecture
- DevOps
- Angular
- SEO
- Migration
- QA
