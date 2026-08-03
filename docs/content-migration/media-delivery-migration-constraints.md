# Media Delivery Migration Constraints

Issue: #4
Requester: Migration Expert
Status: Supporting input for DevOps and Architect review
Date: 2026-08-04

## Executive Summary

- Recommendation: Media delivery strategy must support deterministic mapping from old WordPress media URLs to stable media keys.
- Recommendation: Every migrated meaningful image must produce a `MediaReference` with `key`, `alt`, `width`, `height` and optional `sourceUrl`.
- Recommendation: Preserve the old WordPress media URL in `MediaReference.sourceUrl` during migration so content, redirects, QA and future audits can trace provenance.
- Recommendation: Keep raw WordPress exports, downloaded media originals, Search Console exports, analytics exports and redirect-plugin exports out of Git unless the Lead Architect approves a storage location.
- Accepted existing decision: Core content models are TypeScript-first and include `MediaReference`.
- Accepted existing decision: Raw media delivery/storage provider selection belongs to DevOps proposal and Architect approval, not Migration.
- Blocker: Final upload paths, public media URL behavior and transformation rules depend on the approved media delivery strategy.

## Source Structure Expected From WordPress

WordPress media usually arrives from several overlapping sources:

| Source | Expected contents | Migration use |
| --- | --- | --- |
| `wp-content/uploads/YYYY/MM/` download | Original uploads plus WordPress-generated derivatives such as `image-150x150.jpg` or `image-1024x683.jpg` | File inventory, duplicate detection, original/derivative separation, dimension extraction |
| WordPress WXR export | Attachment posts, post content, embedded image URLs, captions, attachment metadata where available | Content-to-media relationship mapping |
| Media-library CSV/export | Attachment ID, title, filename, URL, alt text, caption, description, uploaded date | Alt/caption preservation and media metadata reconciliation |
| SEO/content crawl inventory | Public page image references, rendered `alt` values, social images and internally linked media URLs | Detect media used by priority pages |
| Optional redirect/CDN evidence | Old media URLs with traffic or backlinks | Identify media URLs that need compatibility handling |

Expected URL variants include:

```text
https://omayatravel.com/wp-content/uploads/YYYY/MM/name.jpg
https://omayatravel.com/wp-content/uploads/YYYY/MM/name-150x150.jpg
https://i0.wp.com/omayatravel.com/wp-content/uploads/YYYY/MM/name.jpg?resize=150%2C150&ssl=1
https://omayatravel.com/wp-content/uploads/YYYY/MM/name.webp
```

The media migration pipeline must normalize these variants to one canonical old source URL where possible before assigning a new media key.

## Media Key Naming Convention Needs

Migration needs a deterministic, human-readable key convention. The exact public storage provider is not selected here, but the key namespace should work for R2, Cloudflare Images metadata, Hostinger static assets or a future provider.

Recommended key shape for migration and content references:

```text
destinations/{destination-slug}/{descriptive-filename}.{ext}
tours/{tour-slug}/{descriptive-filename}.{ext}
blog/{article-slug}/{descriptive-filename}.{ext}
pages/{page-slug}/{descriptive-filename}.{ext}
shared/logos/{descriptive-filename}.{ext}
shared/team/{descriptive-filename}.{ext}
shared/testimonials/{descriptive-filename}.{ext}
shared/uncategorized/{descriptive-filename}.{ext}
```

Key rules:

- Recommendation: Use lowercase ASCII filenames with words separated by hyphens.
- Recommendation: Strip WordPress size suffixes from originals when selecting the canonical migrated filename.
- Recommendation: Preserve extension only when it reflects the migrated original; do not encode transformation format in the key.
- Recommendation: Do not overwrite a production key; replace changed originals with a new key or versioned filename.
- Recommendation: Put a reused image in the most specific content namespace when it is strongly tied to one page, otherwise use `shared/`.
- Recommendation: Use file hash and page-use evidence to avoid uploading duplicate originals under many keys.

## MediaReference Mapping

ADR-012 approves this model:

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

Migration mapping requirements:

| Field | Migration source | Requirement |
| --- | --- | --- |
| `key` | New deterministic media key | Required; stable across content rebuilds |
| `alt` | WordPress attachment alt, rendered HTML alt, caption/context fallback | Required for meaningful images; empty or generic values must be flagged |
| `width` | Original file dimensions or trusted attachment metadata | Required for layout stability and validation |
| `height` | Original file dimensions or trusted attachment metadata | Required for layout stability and validation |
| `caption` | WordPress attachment caption or visible page caption | Optional; preserve when editorially meaningful |
| `focalPoint` | Manual review or future image tooling | Optional; do not invent automatically |
| `sourceUrl` | Canonical old WordPress media URL | Preserve during migration for traceability |

`sourceUrl` should be the old canonical media URL, not a transformed CDN variant when the original URL is known.

## Old URL To Media Key Mapping

Migration should produce a mapping table with at least:

| Field | Purpose |
| --- | --- |
| `sourceUrl` | Original WordPress upload URL or canonical old media URL |
| `observedUrls` | WordPress/i0.wp.com/resized variants seen in content or crawl |
| `mediaKey` | New stable key used by `MediaReference.key` |
| `sha256` | Duplicate detection and verification |
| `width` | Original width |
| `height` | Original height |
| `alt` | Selected alt text |
| `altSource` | Where the chosen alt text came from |
| `usedBy` | Content slugs or old URLs referencing the asset |
| `migrationStatus` | `ready`, `needs-alt`, `duplicate`, `unused-candidate`, `blocked` |
| `notes` | Manual review notes |

Mapping algorithm:

1. Normalize observed URLs by removing WordPress CDN query parameters where safe.
2. Detect WordPress-generated derivatives with suffixes such as `-150x150`, `-300x200`, `-1024x683`.
3. Prefer the highest-quality original when derivative and original both exist.
4. Hash files with SHA-256 to detect duplicates across folders and filenames.
5. Reconcile attachment metadata, rendered HTML `alt`, captions and page context.
6. Assign a proposed media key based on content ownership and the approved key convention.
7. Flag conflicts for manual review instead of guessing.

## Validation Requirements

Media migration must support future build validation:

- Every meaningful published image has `key`, `alt`, `width` and `height`.
- Empty, missing or generic alt text fails validation unless the image is explicitly decorative.
- Every `MediaReference.key` maps to an existing migrated media item.
- Every `sourceUrl` maps to at most one canonical media key unless a deliberate duplicate is documented.
- Duplicate originals are detected by hash, not filename alone.
- WordPress-generated thumbnail derivatives are distinguishable from originals.
- Priority pages preserve their hero/social/content image relationships.

## Raw Files And Exports That Must Stay Out Of Git

Do not commit these by default:

- WordPress XML/WXR exports.
- Full `wp-content/uploads/` downloads.
- Media-library CSV exports if they contain private metadata.
- Search Console exports.
- Analytics exports.
- Redirect-plugin exports.
- Raw image originals and generated derivatives.
- Temporary crawl output, local manifests and script output before review.

The existing `.migration-local/` ignore rule remains the preferred local workspace until the Lead Architect approves a durable storage location.

## Handoff To DevOps

DevOps media delivery proposal should answer these migration-facing questions:

- What stable media key namespace will the public image helper consume?
- Will public URLs be generated from `MediaReference.key`, or will provider-specific IDs be stored separately?
- How should old WordPress `sourceUrl` values be retained in content or media metadata?
- Which image formats are accepted for originals?
- Are SVGs, PDFs and videos part of the same media pipeline or separate asset classes?
- What maximum original dimensions and file sizes should migration enforce?
- What transformed widths are allowed so migration can avoid arbitrary variant generation?
- How will staging media keys/URLs differ from production without changing content references?

## Decisions Requested

- Blocker: DevOps and Lead Architect must decide the storage/provider and transformation approach.
- Blocker: Lead Architect must approve the final media key convention if it differs from this proposal.
- Blocker: Lead Architect must decide where raw exports and media originals live during migration.
- Blocker: Lead Architect must decide whether generated media inventories are committed, attached to issues, or stored externally.

## Acceptance Criteria

- Migration constraints are available to DevOps before the media delivery proposal is finalized.
- No provider, storage or paid-service decision is made by Migration.
- `MediaReference.sourceUrl` preservation is explicit.
- Required alt text and dimensions are explicit.
- Old WordPress URL to media key mapping requirements are explicit.
- Raw export and original-media boundaries are explicit.
