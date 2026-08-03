# Milestone Gates

Milestone gates prevent the rebuild from moving ahead on unresolved assumptions.
The Lead Architect closes each gate after the required evidence exists in files, issues or pull requests.

## Gate 1: Architecture Ready

Required:

- Repository structure approved.
- Rendering strategy approved.
- Content strategy approved.
- Hosting feasibility confirmed.
- Media strategy approved.
- Initial ADR set current.
- GitHub issue workflow active.

Blocks:

- Angular foundation work that depends on runtime decisions.
- Media helper implementation.
- Staging deployment.

## Gate 2: Design Ready

Required:

- Navigation approved.
- Design tokens approved.
- Homepage UX approved.
- Tour-page UX approved.
- Mobile behavior approved.
- Accessibility expectations documented.
- Required content fields mapped to UI sections.

Blocks:

- Page implementation work.
- Shared component implementation beyond foundations.

## Gate 3: Vertical Slice Ready

Required:

- One destination deployed to staging.
- One tour deployed to staging.
- Images delivered through the media pipeline.
- Metadata rendered.
- Structured data rendered where applicable.
- CI/CD working.
- Staging accessible.
- Staging protected from indexing.

Blocks:

- Bulk content migration.
- Broad page buildout.

## Gate 4: Migration Ready

Required:

- URL inventory complete.
- Redirect mapping complete.
- Content models stable.
- Migration script tested.
- Media mapping tested.
- Priority content reviewed.
- Old URL outcomes defined as `200` keep or single-hop `301`.

Blocks:

- Final production content migration.
- Launch readiness review.

## Gate 5: Launch Ready

Required:

- SEO audit passed.
- Accessibility audit passed.
- Performance targets met.
- Forms tested.
- Backup and rollback tested.
- Monitoring enabled.
- Security headers verified.
- Redirect validation passed.
- Production sitemap and robots behavior verified.

Blocks:

- Production launch.
- Merge from `develop` to `master`.

## Gate status format

Use this format in `docs/PROJECT_STATUS.md`:

```text
Next approval gate: Gate 1 - Architecture Ready

Required to pass:
- Repository structure approved
- Hosting model approved
- Media strategy approved
- Initial content model approved
```

