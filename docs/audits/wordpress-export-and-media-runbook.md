# WordPress Export and Media Inventory Runbook

## Executive summary

- Recommendation: Use this runbook to produce a repeatable, read-only inventory of the existing WordPress site before any content conversion begins.
- Recommendation: Keep raw WordPress exports, media originals, generated reports and temporary crawl results out of Git until the Lead Architect approves the storage location and retention policy.
- Accepted existing decision: V1 website content will be Git-managed with structured files and Markdown.
- Accepted existing decision: V1 website content will not use a database.
- Blocker: Final content conversion must wait for the approved core content models.
- Blocker: Final media upload paths and public delivery URLs must wait for the approved media delivery strategy.

## Proposed solution

- Recommendation: Create a local working folder named `.migration-local/` and keep it uncommitted.
- Recommendation: Put the WordPress XML export, optional WordPress media export CSV, sitemap export and downloaded media files in clearly named subfolders under `.migration-local/`.
- Recommendation: Run `scripts/migration/Inventory-WordPressExport.ps1` to generate machine-readable inventory files.
- Recommendation: Treat generated output as migration evidence until reviewed; do not treat it as approved content for Angular.
- Recommendation: Attach or reference the inventory output from the relevant GitHub issue or PR after the Lead Architect decides where non-source migration artifacts should live.

Suggested local folder layout:

```text
.migration-local/
  input/
    wordpress-export.xml
    media-library.csv
    sitemap.xml
    media/
      uploads/
  output/
```

Suggested command:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass `
  -File .\scripts\migration\Inventory-WordPressExport.ps1 `
  -WordPressExportPath .\.migration-local\input\wordpress-export.xml `
  -MediaRoot .\.migration-local\input\media `
  -OutputDirectory .\.migration-local\output
```

Optional command with a media-library CSV:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass `
  -File .\scripts\migration\Inventory-WordPressExport.ps1 `
  -WordPressExportPath .\.migration-local\input\wordpress-export.xml `
  -MediaLibraryCsvPath .\.migration-local\input\media-library.csv `
  -MediaRoot .\.migration-local\input\media `
  -OutputDirectory .\.migration-local\output
```

## Files affected

- Recommendation: `.gitignore` excludes `.migration-local/` to reduce the chance of committing private exports or bulky media.
- Recommendation: `scripts/migration/Inventory-WordPressExport.ps1` inventories WordPress export content and local media files.
- Recommendation: `docs/audits/wordpress-export-and-media-runbook.md` documents the workflow, boundaries, reports and open decisions.

## Decisions requested

- Blocker: Lead Architect should decide where raw WordPress exports and downloaded media originals are stored during the migration.
- Blocker: Lead Architect should decide whether generated inventories are committed under `docs/audits/`, attached to GitHub issues, or stored externally.
- Blocker: Lead Architect should decide the final media key convention after the media delivery strategy is approved.
- Blocker: Lead Architect should confirm whether redirects will preserve existing WordPress slugs where practical or normalize to the proposed Angular route map.

## Assumptions

- Recommendation: The WordPress XML export is a standard WXR file from WordPress Tools > Export.
- Recommendation: The media folder contains original files and may also contain WordPress-generated derivatives.
- Recommendation: SEO plugin metadata may be stored in postmeta fields from Yoast, Rank Math or a similar plugin.
- Recommendation: The first pass should inventory all public and draft content, then filter publication status during SEO and architecture review.

## Dependencies

- Accepted existing decision: Follow issue `#6` / TEMP-005 for WordPress content and media export work.
- Accepted existing decision: Follow issue `#2` / TEMP-001 for URL inventory and SEO baseline dependencies.
- Blocker: Content conversion depends on issue `#10` / TEMP-010 approving core content models.
- Blocker: Media key finalization depends on issue `#4` / TEMP-003 approving media delivery strategy.
- Blocker: Redirect implementation depends on issue `#5` / TEMP-004 approving route and redirect strategy.

## Risks

- Recommendation: Raw exports can contain private emails, draft content, form data or internal notes, so they should not be committed by default.
- Recommendation: WordPress-generated thumbnails can appear as separate files and inflate the media inventory unless derivatives are detected.
- Recommendation: Existing image alt text may be missing, generic or stored in plugin-specific fields.
- Recommendation: Existing internal links may include absolute URLs, relative URLs, shortcodes or plugin-generated markup.
- Recommendation: Duplicate images may have different filenames and paths, so duplicate detection should use file hashes, not only names.
- Recommendation: Sitemap, crawl output and WXR export may disagree; missing URLs must be reviewed manually.

## Acceptance criteria

- Recommendation: WordPress content inventory includes ID, type, status, slug, URL, title, publication date, modified date, parent ID, author, SEO fields and detected media references.
- Recommendation: Media inventory includes relative path, filename, extension, byte size, hash, width, height, derivative guess and duplicate grouping.
- Recommendation: Broken or suspicious internal links are reported separately.
- Recommendation: Suggested media keys are generated but clearly marked as suggestions.
- Recommendation: Generated reports are deterministic enough to rerun after a final WordPress content freeze.
- Recommendation: No raw export, image original or private migration artifact is committed accidentally.

## Handoff instructions

- Recommendation: Migration specialist runs the inventory script against the latest WordPress export and media download.
- Recommendation: Migration specialist reconciles script output with the sitemap and SEO URL inventory.
- Recommendation: SEO specialist reviews URL inventory, metadata, canonical URLs, indexability and redirect priority.
- Recommendation: Media specialist reviews duplicate groups, unused candidates, dimensions, alt text gaps and filename recommendations.
- Recommendation: Lead Architect resolves storage, content-model and media-delivery decisions before conversion scripts are allowed to emit final content files.

## Questions for the Lead Architect

- Blocker: Where should raw WordPress exports and downloaded media originals be stored during the migration?
- Blocker: Should generated inventory reports be committed, attached to issues, or stored outside the repository?
- Blocker: What is the approved final content model path and file format for destinations, tours, blog articles and static pages?
- Blocker: What is the approved media key convention and public media URL strategy?
- Blocker: Are there private, draft or historical WordPress records that should be excluded from migration evidence?

## Generated output

The inventory script writes these files:

```text
content-inventory.csv
content-inventory.json
media-references.csv
media-inventory.csv
media-inventory.json
duplicate-media.csv
internal-links.csv
seo-postmeta.csv
migration-summary.json
```

## Manual WordPress export checklist

1. Recommendation: In WordPress Admin, create a full XML export from Tools > Export > All content.
2. Recommendation: Export SEO metadata if the SEO plugin provides a dedicated export.
3. Recommendation: Export redirects from the redirect plugin or server configuration if available.
4. Recommendation: Export media-library metadata if a plugin or WP-CLI can provide attachment ID, URL, title, alt text, caption and description.
5. Recommendation: Download `wp-content/uploads/` with originals preserved.
6. Recommendation: Export the current XML sitemap from `https://omayatravel.com/sitemap.xml` and any sitemap index children.
7. Recommendation: Record the export date, WordPress version, plugin list and whether the site was frozen at export time.
