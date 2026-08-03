# Media Delivery DevOps Proposal

Issue: #4
Status: DevOps proposal for Architect review
Requester: DevOps Expert
Date: 2026-08-04

## Executive Summary

Recommendation: use Cloudflare R2 Standard storage for original media and deliver public image variants through Cloudflare Image Transformations on `media.omayatravel.com`.

Do not store the WordPress media library or large travel photo originals in Git. Do not use Hostinger static assets as the primary media store. Do not adopt Cloudflare Images storage for v1 unless the Architect prefers the product-managed image library trade-off over lower-cost object storage and migration-controlled keys.

This proposal informs #4 and should be converted by the Architect into an accepted decision or ADR before #12 image helper work and #18 media migration pipeline work begin.

## Inputs

- `docs/devops/HOSTING_DEPLOYMENT_EDGE_DELIVERY.md`
- `docs/specifications/routing-and-redirects-approved.md`
- `docs/adr/ADR-011-public-routing-and-redirects.md`
- `docs/OMAYA_WEBSITE_REBUILD_PLAN.md`
- `docs/INTERFACE_CONTRACTS.md`
- Cloudflare R2 pricing and public bucket documentation
- Cloudflare Images pricing and Image Transformations documentation

## Recommended Architecture

Use this v1 media delivery path:

```text
Angular content files
  reference stable media keys
        |
        v
media.omayatravel.com
  Cloudflare proxied custom domain
        |
        v
Cloudflare Image Transformations
  constrained width/quality/format variants
        |
        v
Cloudflare R2 Standard bucket
  original migrated images
```

Recommended production bucket:

```text
omaya-travel-media-production
```

Recommended staging bucket:

```text
omaya-travel-media-staging
```

Recommended public domain:

```text
media.omayatravel.com
```

Use a Cloudflare custom domain for the R2 bucket. Do not use the Cloudflare-managed `r2.dev` URL for production traffic because it is intended for development access and does not provide the same cache, WAF, bot-management and access-control operating surface.

## Option Comparison

| Option | Fit for v1 | Strengths | Risks / trade-offs | Recommendation |
| --- | --- | --- | --- | --- |
| R2 originals + Cloudflare Image Transformations | Strong | Low storage cost, no R2 Internet egress fee, stable custom keys, variants generated on demand, works with Git-managed content. | Must constrain transformations to avoid unique-variant growth; Cloudflare plan/features must be confirmed. | Recommended v1 baseline. |
| Cloudflare Images storage | Medium | Product-managed image storage, variants, delivery and possible future editorial workflows. | Extra product cost model, less direct control over migration key convention, Images Stored/Delivered billing applies when using hosted Images. | Defer unless Architect prioritizes managed image product over R2 key control. |
| Cloudflare Image Transformations from Hostinger assets | Medium-low | Simple if a small number of optimized images ship with the static site. | Bloats deployments, couples media changes to website deploys, Hostinger becomes media origin, harder migration rollback. | Use only for tiny fixed UI assets, not travel media library. |
| Hostinger static assets only | Low | Simplest hosting model, no R2 setup. | Poor fit for global image-heavy travel content, large repository/deploy artifacts if stored in Git, weak transformation strategy. | Reject as primary media architecture. |
| Commit optimized variants to Git | Low | Fully deterministic and cheap at runtime. | Repository bloat, poor original preservation, hard to manage large WordPress migration media. | Reject except for small logos/icons/UI assets. |

## Decision Recommendation

Accept:

- Originals live in Cloudflare R2 Standard storage.
- Public delivery domain is `media.omayatravel.com`.
- Cloudflare Image Transformations generate a small, approved set of responsive variants.
- Cloudflare Images storage is deferred for v1.
- Hostinger static assets are allowed only for small website-owned UI assets such as logos, icons, favicons and tiny decorative files.

Defer:

- Non-developer media management UI.
- Cloudflare Images storage.
- Cloudflare Stream for larger video libraries.
- Signed/private media URLs. All v1 public website media should be public, cacheable marketing content.

Reject for v1:

- Large media originals in Git.
- WordPress-generated thumbnail derivatives as source-of-truth originals.
- Arbitrary client-controlled transformation widths.
- Production use of `r2.dev` URLs.

## Media Key Convention

Recommended stable keys:

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
- Preserve a migration mapping from old WordPress URL to new key.
- Do not overwrite a production object at an existing key after launch.
- Publish changed images under a new key or versioned suffix.
- Keep original extension only when it reflects the actual original format.
- Use JPEG or WebP originals for photos; avoid PNG for normal photography.

Example:

```text
tours/kyrgyzstan-tour/song-kul-lake-yurts.jpg
```

## What Must Stay Out Of Git

Do not commit:

- WordPress full media library.
- Original high-resolution travel photographs.
- Generated responsive image variants.
- Temporary migration downloads.
- Raw export packages that may contain private or draft content.

Allowed in Git:

- Small brand assets required at build time.
- Favicons and app icons.
- Placeholder images if tiny and intentionally designed.
- Media metadata and content references.
- Migration mapping reports after privacy review, if the Architect approves committing them.

## Image Metadata Contract

Every meaningful image reference consumed by Angular should include:

```typescript
export interface ImageReference {
  key: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
  sourceWordPressUrl?: string;
  contentHash?: string;
}
```

Required fields:

- `key`
- `alt`
- `width`
- `height`

`sourceWordPressUrl` and `contentHash` are recommended for migration evidence and duplicate detection but do not need to be rendered publicly.

## Allowed Variants

Use a fixed width allowlist for v1:

```text
320
480
720
960
1200
1600
1920
```

Recommended semantic usage:

| Use | Widths |
| --- | --- |
| Small thumbnail | 320, 480 |
| Card image | 480, 720 |
| Content/body image | 720, 960, 1200 |
| Hero image | 1200, 1600, 1920 |
| Full-screen gallery | 1200, 1600, 1920 |

Image helper must not generate arbitrary pixel widths from viewport values. This controls unique transformation count and cost.

## Formats And Quality

Use `format=auto` for browser negotiation.

Recommended quality settings:

| Use | Quality |
| --- | --- |
| Thumbnail/card | 70-75 |
| Content image | 75-80 |
| Hero/gallery | 80-85 |

Rules:

- Default to transformed modern formats through Cloudflare.
- Keep original uploads high quality but not absurdly large.
- Do not upload camera raw files.
- Do not use animated GIF for real video; use an approved video strategy later.
- Do not use SVG for migrated photographic content.

## URL Builder Convention

Recommended public source URL:

```text
https://media.omayatravel.com/{key}
```

Recommended transformation URL shape:

```text
https://media.omayatravel.com/cdn-cgi/image/width={width},quality={quality},format=auto/{key}
```

If Cloudflare requires transformation requests on the main zone instead of the media hostname, the Architect-approved implementation may use:

```text
https://omayatravel.com/cdn-cgi/image/width={width},quality={quality},format=auto/https://media.omayatravel.com/{key}
```

The final implementation must use one canonical builder and must not expose multiple equivalent transformed URL shapes for the same media.

## Caching Policy

Original and transformed public images are long-lived, versioned assets.

Recommended headers for original objects:

```text
Cache-Control: public, max-age=31536000, immutable
```

Recommended Cloudflare edge behavior:

- Cache original image objects.
- Cache transformed image variants.
- Respect versioned/new keys for updates.
- Avoid global purge for ordinary content changes.

Recommended invalidation:

| Change | Action |
| --- | --- |
| New image | Upload new key; no purge required. |
| Image replacement | Prefer new key; update content reference; purge old transformed URLs only if needed. |
| Alt/caption/content metadata change | Rebuild affected HTML; no media purge unless image object changed. |
| Wrong image accidentally published | Upload corrected new key, update content, purge affected HTML and specific media URLs. |
| Legal takedown | Delete/disable object and purge exact URLs. |

Cache tags may be useful later, but v1 should not depend on cache-tag purge for media correctness. Exact URL purge is enough when media keys are immutable.

## Fallback Strategy

If Cloudflare Image Transformations are unavailable or exceed the free-plan limit:

1. Existing cached transformations continue serving where already cached.
2. The image helper should support a safe original URL fallback for critical images.
3. Original images must be reasonably bounded before upload so fallback does not serve enormous camera originals.
4. The launch can temporarily use pre-generated static variants for priority hero/card images if the Architect approves the operational trade-off.

Do not silently fall back to WordPress media URLs for production launch except during an explicit rollback.

## Cost Guardrails

Low-cost launch guardrails:

- Use R2 Standard, not Infrequent Access, for launch media.
- Keep source originals reasonably sized before upload.
- Use exactly the approved width allowlist.
- Use `format=auto` instead of separate explicit AVIF/WebP/JPEG URL families.
- Do not include height/crop/focal variants until the UX and image helper need them.
- Do not generate transformations for unused gallery images on initial page load.
- Lazy-load below-the-fold images.
- Keep transformed URL parameters ordered and normalized.
- Monitor unique transformations during staging and the first launch month.

Cost model to validate before launch:

```text
Estimated unique transformations =
  transformed source image count
  x average widths used per image
  x meaningful crop/aspect variants
```

Target for v1 launch:

- Keep first-month unique transformations below Cloudflare Images Free plan included transformations where practical.
- If the estimate exceeds the included transformation level, approve the paid plan before launch instead of discovering errors in production.

Current Cloudflare docs state that R2 Standard includes a free monthly allowance and no Internet egress charge, and that Images Free includes a limited number of unique transformations each month. Vendor pricing changes; confirm exact limits during launch readiness.

## Security

Required:

- Use a custom Cloudflare domain for public R2 delivery.
- Disable public `r2.dev` access for production buckets.
- Restrict transformation source origins to approved Omaya domains.
- Keep R2 write credentials out of developer machines where possible; use scoped CI/migration credentials.
- Use separate staging and production buckets or prefixes.
- Do not allow browser uploads in v1.
- Do not expose bucket listings.
- Do not store private traveller documents or enquiry attachments in the public media bucket.

Recommended credential scopes:

| Credential | Scope |
| --- | --- |
| Migration upload token | Write/list only required media bucket during migration window. |
| CI validation token | Read/list if build validation needs to confirm keys. |
| Cache purge token | Zone-scoped purge only. |

## Operational Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Transformation count grows unexpectedly | Cost or free-plan transformation errors | Fixed width allowlist, normalized URL builder, staging monitoring. |
| Large originals served on fallback | Slow global pages | Pre-upload size limits and original max dimensions. |
| Media keys change after launch | Broken content, cache confusion | Immutable key policy and migration mapping. |
| WordPress derivatives treated as originals | Lower quality or duplicate bloat | Migration duplicate detection and original/derivative classification. |
| Public `r2.dev` left enabled | Bypasses custom-domain controls | Disable for production bucket. |
| Any-origin transformations enabled | Third-party abuse of transformations | Restrict allowed origins. |
| Hostinger used as media store | Larger deploys and slower media operations | Keep travel media in R2. |

## Handoff To Angular Image Helper (#12)

Angular should receive:

- Final media base URL.
- Final transformation URL builder convention.
- Width allowlist.
- Quality defaults by image use.
- Required `ImageReference` fields.
- Loading rules:
  - hero/LCP images eager and prioritized
  - below-fold images lazy
  - gallery images lazy or on-demand
- `srcset` and `sizes` generation rules.
- Fallback original URL behavior.
- Validation rule: image helper rejects widths outside the allowlist.
- Validation rule: meaningful images require alt text, width and height.

Angular must not:

- Generate arbitrary transformation widths.
- Construct multiple equivalent URL forms for the same variant.
- Reference WordPress media URLs in production content.
- Treat image metadata as optional for published pages.

## Handoff To Migration Pipeline (#18)

Migration should produce:

- WordPress media URL to R2 key mapping.
- Duplicate grouping by content hash.
- Original-vs-derivative classification.
- Width and height for each accepted original.
- Alt text, caption and source ownership notes where available.
- List of missing alt text for manual review.
- Upload manifest for staging and production.
- Rejected media report for thumbnails, duplicates, broken files and unsafe/private files.

Migration should not upload:

- WordPress-generated thumbnails when a better original exists.
- Private exports or form attachments.
- Unsupported file types without Architect approval.
- Huge unbounded originals without pre-upload review.

## Handoff To DevOps Implementation

Implementation should wait for Architect acceptance of #4.

When released, DevOps should configure:

- R2 production and staging buckets.
- `media.omayatravel.com` custom domain.
- Cloudflare transformation source restrictions.
- Cache rules for media.
- Scoped credentials for upload and cache purge.
- Monitoring for image transformation errors and cache behavior.

Do not implement these resources in this PR.

## Acceptance Criteria For #4

This proposal satisfies #4 when the Architect can make or draft an accepted decision that states:

- final media source
- public media domain
- image transformation approach
- allowed widths/formats
- cost guardrails
- invalidation strategy
- handoff requirements for #12 and #18

## Source Notes

Vendor capabilities and pricing change. Reconfirm before final launch approval.

- Cloudflare R2 pricing: <https://developers.cloudflare.com/r2/pricing/>
- Cloudflare R2 public buckets and custom domains: <https://developers.cloudflare.com/r2/buckets/public-buckets/>
- Cloudflare Images pricing: <https://developers.cloudflare.com/images/pricing/>
- Cloudflare Image Transformations overview: <https://developers.cloudflare.com/images/optimization/transformations/overview/>
- Cloudflare Image Transformations features: <https://developers.cloudflare.com/images/optimization/features/>
- Cloudflare transformation source restrictions: <https://developers.cloudflare.com/images/optimization/transformations/sources/>
- Cloudflare cache getting started: <https://developers.cloudflare.com/cache/get-started/>
- Cloudflare purge by URL/tag/host/prefix API: <https://developers.cloudflare.com/api/resources/cache/methods/purge/>
