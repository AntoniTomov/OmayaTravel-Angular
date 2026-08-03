# Project Status

## Current phase

Phase 0: Discovery and audit

## Current milestone

Milestone 0: Discovery and control plane

## Next approval gate

Gate 1: Architecture Ready

Required to pass:

- Repository structure approved.
- Rendering strategy approved.
- Content strategy approved.
- Hosting feasibility confirmed.
- Media strategy approved.
- Initial ADR set current.
- GitHub issue workflow active.

## Completed work

- Master rebuild plan created.
- Initial architecture decisions accepted for Angular hybrid rendering, Git-managed content, no v1 content database, NestJS API scope, GitHub source of truth and Cloudflare edge layer.
- Architecture governance process created.
- ADR index created.
- Initial interface contracts created.
- Initial risk register created.
- Approved implementation order created.
- GitHub Issues work-order policy and initial issue backlog created.
- Expert PR handoff workflow created.
- ADR guidelines created.
- Expert-to-expert interface contracts created.

## Work in progress

- Current WordPress website audit.
- Hosting capability confirmation for Hostinger and Cloudflare.
- Media delivery decision between Cloudflare R2 transformations and Cloudflare Images.
- Specialist proposal intake and review.
- Live GitHub issue creation completed for the initial backlog.

## Blocked work

- Repository implementation is blocked until hosting constraints and final route strategy are known.
- UX implementation is blocked until UX specs are detailed and accepted.
- API email implementation is blocked until transactional email provider is chosen.
- Label color/description sync is still tracked in GitHub issue #1 because the connector created labels with default styling.

## Next tasks

1. Crawl and inventory `https://omayatravel.com`.
2. Export or otherwise collect WordPress pages, posts, media, metadata and redirects.
3. Confirm Hostinger plan capabilities for Angular SSR and NestJS.
4. Confirm media pricing/feature choice.
5. Request full UX spec files for homepage, navigation, tour cards and tour details.
6. Convert accepted specialist proposals into ADRs or implementation tasks.
7. Sync GitHub label colors and descriptions from `.github/labels.yml`.
8. Create the first specialist PRs for SEO URL inventory, Hostinger/Cloudflare feasibility and QA launch checklist.

## Owners

| Area | Owner |
| --- | --- |
| Architecture and final decisions | Lead Architect |
| SEO audit and redirect mapping | SEO specialist |
| UX specifications | UX specialist |
| Angular implementation | Angular frontend specialist |
| API implementation | Backend specialist |
| Hosting, Cloudflare and CI/CD | DevOps specialist |
| Media migration and optimization | Media specialist |

## Dependencies

- WordPress audit before final route map.
- Route map before redirect implementation.
- Hosting confirmation before final deployment architecture.
- Content models before UX handoff can become implementation-ready.
- Media decision before image helper and migration scripts.
- Email provider before enquiry backend.

## Latest accepted decisions

See `docs/DECISIONS.md`.

## Active work orders

| Issue | Task | Expert | Status | Depends on |
| --- | --- | --- | --- | --- |
| #2 | Inventory current WordPress URLs | SEO | Ready | None |
| #3 | Confirm Hostinger and Cloudflare deployment constraints | DevOps | Ready | None |
| #4 | Approve media delivery strategy | Architecture | Blocked | #3 |
| #5 | Approve final route and redirect strategy | Architecture | Blocked | #2 |
| #6 | Export WordPress content and media inventory | Migration | Blocked | #2 |
| #7 | Initialize pnpm monorepo workspace | DevOps | Blocked | #3 |
| #20 | Define launch quality checklist | QA | Ready | None |
