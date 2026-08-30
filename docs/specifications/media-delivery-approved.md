# Media Delivery Approved Specification

Issue: #4
Status: Approved architecture specification
Date: 2026-08-04
Owner: Lead Architect

## Inputs

- `docs/specifications/media-delivery-devops.md`
- `docs/specifications/core-content-models-approved.md`
- `docs/adr/ADR-012-core-content-models.md`
- `docs/devops/HOSTING_DEPLOYMENT_EDGE_DELIVERY.md`
- Cloudflare R2 pricing and public bucket documentation
- Cloudflare Images pricing and Image Transformations documentation

## Decision Summary

Use Cloudflare R2 Standard for original migrated media.

Use `media.omayatravel.com` as the public media domain.

Use Cloudflare Image Transformations for responsive variants, with a fixed width allowlist and normalized URL builder.

Defer Cloudflare Images storage for v1. Do not store the WordPress media library, large originals, or generated image variants in Git. Do not use Hostinger as the primary media store for travel photography.

## Storage

Approved buckets:

```text
omaya-travel-media-production
omaya-travel-media-staging
```

Rules:

- Store accepted originals in R2 Standard.
- Use separate staging and production buckets.
- Keep production media public and cacheable.
- Do not enable public production traffic through `r2.dev`.
- Do not expose bucket listings.
- Do not store private traveller documents or enquiry attachments in public media buckets.
- Do not overwrite production keys after launch.
- Replace images by publishing a new key or approved versioned suffix.

## Public Domain

Approved public media domain:

```text
https://media.omayatravel.com
```

DevOps must configure this as a Cloudflare-controlled custom domain in front of R2 and transformation delivery.

## Media Keys

Approved key convention:

```text
destinations/{destination-slug}/{descriptive-name}.{ext}
tours/{tour-slug}/{descriptive-name}.{ext}
blog/{article-slug}/{descriptive-name}.{ext}
company/{page-slug}/{descriptive-name}.{ext}
shared/{topic-or-purpose}/{descriptive-name}.{ext}
```

Rules:

- Keys are lowercase ASCII.
- Use hyphen-separated descriptive names.
- Preserve the old WordPress source URL in `MediaReference.sourceUrl` during migration when useful.
- Preserve old URL to new key mapping in the migration manifest.
- Use JPEG or WebP originals for normal photography.
- Avoid PNG for ordinary photos unless the source actually needs it.

## Public Content Contract

Angular and published content must use the approved `MediaReference` contract:

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

Required for meaningful images:

- `key`
- `alt`
- `width`
- `height`

`sourceUrl` may store the old WordPress media URL during migration. It is not the canonical production media URL.

Migration-only metadata such as `contentHash`, duplicate group, byte size, and derivative classification belongs in migration manifests or inventory reports, not in the public content contract.

## Transformations

Approved width allowlist:

```text
320
480
720
960
1200
1600
1920
```

Semantic usage:

| Use | Widths |
| --- | --- |
| Small thumbnail | 320, 480 |
| Card image | 480, 720 |
| Content/body image | 720, 960, 1200 |
| Hero image | 1200, 1600, 1920 |
| Full-screen gallery | 1200, 1600, 1920 |

Rules:

- Use `format=auto`.
- Use quality 70-75 for thumbnails and cards.
- Use quality 75-80 for content images.
- Use quality 80-85 for hero and gallery images.
- Do not generate arbitrary pixel widths from viewport values.
- Do not create multiple equivalent transformed URL shapes for the same image.
- Do not add crop/focal transformations until UX and Angular need them and Architecture approves the helper behavior.

Preferred transformed URL shape:

```text
https://media.omayatravel.com/cdn-cgi/image/width={width},quality={quality},format=auto/{key}
```

If Cloudflare requires transformation requests on the main zone instead of the media hostname, the implementation may use one Architect-approved alternate canonical builder:

```text
https://omayatravel.com/cdn-cgi/image/width={width},quality={quality},format=auto/https://media.omayatravel.com/{key}
```

Only one canonical builder is allowed in production.

## Caching And Invalidation

Original and transformed images are long-lived assets.

Recommended object headers:

```text
Cache-Control: public, max-age=31536000, immutable
```

Invalidation rules:

| Change | Action |
| --- | --- |
| New image | Upload new key; no purge required. |
| Image replacement | Prefer new key; update content reference; purge exact old URLs only when needed. |
| Alt/caption/content change | Rebuild affected HTML; no media purge unless image object changed. |
| Wrong image published | Upload corrected new key, update content, purge affected HTML and exact media URLs. |
| Legal takedown | Delete or disable object and purge exact URLs. |

Do not rely on global cache purge for ordinary media changes.

## Git Rules

Do not commit:

- WordPress full media library.
- Original high-resolution travel photographs.
- Generated responsive variants.
- Temporary migration downloads.
- Raw export packages that may contain private or draft content.

Allowed in Git:

- Small brand assets required at build time.
- Favicons and app icons.
- Tiny intentional placeholders.
- Media metadata and content references.
- Migration mapping reports after privacy review and Architect approval.

## Fallback

If Cloudflare Image Transformations are unavailable or exceed plan limits:

- The image helper may fall back to the original R2 URL for critical images.
- Originals must be bounded before upload so fallback does not serve enormous camera originals.
- Priority hero/card variants may be pregenerated and uploaded only if Architecture approves the temporary operational trade-off.
- Do not silently fall back to WordPress media URLs in production except during an explicit rollback.

## Cost Guardrails

- Use R2 Standard for launch.
- Keep source originals reasonably sized before upload.
- Use only the approved width allowlist.
- Use `format=auto` instead of separate explicit AVIF/WebP/JPEG URL families.
- Lazy-load below-the-fold images.
- Do not generate transformations for unused gallery images on initial load.
- Normalize URL parameter order.
- Monitor unique transformations during staging and the first launch month.
- Reconfirm Cloudflare pricing and plan limits before production launch.

## Handoff To Angular Image Helper (#12)

Angular must implement one media helper that receives:

- media base URL
- transformation URL convention
- width allowlist
- quality defaults by image use
- required `MediaReference` fields
- loading rules
- `srcset` and `sizes` generation rules
- original URL fallback behavior

Angular must:

- reject widths outside the allowlist
- use eager/fetch-priority behavior for LCP hero images
- lazy-load below-fold and gallery images
- require meaningful alt text and dimensions for meaningful images
- avoid WordPress media URLs in production content

## Handoff To Migration Pipeline (#18)

Migration must produce:

- WordPress media URL to R2 key mapping
- duplicate grouping by content hash
- original-vs-derivative classification
- width and height for each accepted original
- alt text, captions, and source ownership notes where available
- list of missing alt text for manual review
- upload manifest for staging and production
- rejected media report for thumbnails, duplicates, broken files, unsafe/private files, and unsupported files

Migration must not upload:

- WordPress-generated thumbnails when a better original exists
- private exports or form attachments
- unsupported file types without Architect approval
- huge unbounded originals without review

## DevOps Implementation Notes

Implementation must wait until the relevant infrastructure issue is released.

DevOps must eventually configure:

- R2 production and staging buckets
- `media.omayatravel.com`
- Cloudflare transformation source restrictions
- cache rules for media
- scoped upload and cache purge credentials
- monitoring for transformation errors and cache behavior

## Acceptance

Issue #4 is approved by this specification and ADR-013.

This unblocks:

- #12 image reference helper, after #7 and #8 exist
- #18 media migration pipeline
