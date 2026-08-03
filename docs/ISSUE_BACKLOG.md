# Initial GitHub Issue Backlog

These are the initial work orders to create once the GitHub repository is configured.
Temporary IDs are used until real GitHub issue numbers exist.

## GitHub issue mapping

Repository: `AntoniTomov/OmayaTravel-Angular`

| Temporary ID | GitHub issue |
| --- | --- |
| TEMP-000 | #1 |
| TEMP-001 | #2 |
| TEMP-002 | #3 |
| TEMP-003 | #4 |
| TEMP-004 | #5 |
| TEMP-005 | #6 |
| TEMP-006 | #7 |
| TEMP-007 | #8 |
| TEMP-008 | #9 |
| TEMP-009 | #10 |
| TEMP-010 | #11 |
| TEMP-011 | #12 |
| TEMP-012 | #13 |
| TEMP-013 | #14 |
| TEMP-014 | #15 |
| TEMP-015 | #16 |
| TEMP-016 | #17 |
| TEMP-017 | #18 |
| TEMP-018 | #19 |
| TEMP-019 | #20 |
| TEMP-020 | #21 |
| TEMP-021 | #22 |

## Phase 0: Discovery and control plane

### TEMP-000

Title: `[DevOps] Configure GitHub issue labels and work-order template`

Labels: `area:devops`, `type:feature`, `status:ready`, `priority:critical`

Depends on: GitHub repository exists

Blocks: All GitHub issue creation

Deliverables:

- Required labels created in GitHub
- `.github/ISSUE_TEMPLATE/work-order.yml` available in the repository
- Initial issues created from this backlog
- Temporary IDs replaced with real issue numbers

Acceptance criteria:

- Every required area, status, priority and type label exists.
- New work orders can be created from the standard issue form.
- Initial backlog issues exist in GitHub with dependency references.

### TEMP-001

Title: `[SEO] Inventory current WordPress URLs`

Labels: `area:seo`, `type:research`, `status:ready`, `priority:critical`

Depends on: None

Blocks: `TEMP-004`, `TEMP-005`, `TEMP-018`

Deliverables:

- Current public URL inventory for `https://omayatravel.com`
- Page type for each URL
- Title, meta description, canonical URL and main headings
- Existing structured data
- Current internal links
- Migration priority

Acceptance criteria:

- Sitemap, crawl and available WordPress exports are reconciled.
- Important indexed URLs are not missing.
- Findings are saved under `docs/audits/`.

### TEMP-002

Title: `[DevOps] Confirm Hostinger and Cloudflare deployment constraints`

Labels: `area:devops`, `type:research`, `status:ready`, `priority:critical`

Depends on: None

Blocks: `TEMP-006`, `TEMP-007`, `TEMP-020`

Deliverables:

- Hostinger plan capability summary
- Angular SSR hosting recommendation
- NestJS API hosting recommendation
- Cloudflare DNS/CDN/WAF setup notes

Acceptance criteria:

- Confirms whether Hostinger can cleanly host Angular SSR and NestJS.
- Names fallback hosting option if Hostinger is unsuitable.
- Any architecture decision needed is sent to the Lead Architect.

### TEMP-003

Title: `[Architecture] Approve media delivery strategy`

Labels: `area:architecture`, `type:decision`, `status:blocked`, `priority:high`

Depends on: `TEMP-002`

Blocks: `TEMP-011`, `TEMP-017`

Deliverables:

- Accepted decision for Cloudflare R2 transformations versus Cloudflare Images
- Cost and operational trade-off summary
- Updates to `docs/DECISIONS.md` or ADR

Acceptance criteria:

- Final media source and public media domain are approved.
- Image transformation approach is implementation-ready.

### TEMP-004

Title: `[Architecture] Approve final route and redirect strategy`

Labels: `area:architecture`, `type:decision`, `status:blocked`, `priority:critical`

Depends on: `TEMP-001`

Blocks: `TEMP-012`, `TEMP-018`, `TEMP-021`

Deliverables:

- Final public route map
- Redirect policy
- URL preservation exceptions
- Updates to `docs/DECISIONS.md` if route strategy changes architecture

Acceptance criteria:

- Every important old URL has keep-or-redirect decision.
- Redirect chains are explicitly disallowed.

### TEMP-005

Title: `[Migration] Export WordPress content and media inventory`

Labels: `area:migration`, `type:migration`, `status:blocked`, `priority:critical`

Depends on: `TEMP-001`

Blocks: `TEMP-017`, `TEMP-018`

Deliverables:

- WordPress content export
- Media inventory
- Forms and plugin behavior inventory
- Existing SEO plugin metadata where available

Acceptance criteria:

- Export is stored or referenced in a reproducible location.
- Media originals and generated derivatives are distinguishable.

## Phase 1: Repository foundation

### TEMP-006

Title: `[DevOps] Initialize pnpm monorepo workspace`

Labels: `area:devops`, `type:feature`, `status:blocked`, `priority:high`

Depends on: `TEMP-002`

Blocks: `TEMP-007`, `TEMP-008`, `TEMP-009`

Deliverables:

- Root `package.json`
- `pnpm-workspace.yaml`
- Lockfile
- Initial app/package folders

Acceptance criteria:

- Workspace installs with frozen lockfile.
- Root scripts are defined for lint, type-check, test and build.

### TEMP-007

Title: `[Frontend] Create Angular website application`

Labels: `area:frontend`, `type:feature`, `status:blocked`, `priority:high`

Depends on: `TEMP-006`

Blocks: `TEMP-012`, `TEMP-013`, `TEMP-014`

Deliverables:

- Angular app under `apps/website`
- Hybrid rendering configuration
- Local development command

Acceptance criteria:

- App renders locally.
- Production build succeeds.
- Public pages are not client-only by default.

### TEMP-008

Title: `[Backend] Create NestJS API application`

Labels: `area:backend`, `type:feature`, `status:blocked`, `priority:medium`

Depends on: `TEMP-006`, `TEMP-002`

Blocks: `TEMP-016`

Deliverables:

- NestJS app under `apps/api`
- Health endpoint
- Environment validation
- Logging baseline

Acceptance criteria:

- API starts locally.
- Health endpoint returns expected response.
- No secrets are committed.

### TEMP-009

Title: `[DevOps] Add CI pipeline`

Labels: `area:devops`, `type:feature`, `status:blocked`, `priority:high`

Depends on: `TEMP-006`

Blocks: `TEMP-020`

Deliverables:

- GitHub Actions workflow
- Install, lint, type-check, test and build checks
- Content validation hook when available

Acceptance criteria:

- CI runs on pull requests.
- Failed checks block merge.

## Phase 2: Content and approved specs

### TEMP-010

Title: `[Architecture] Approve core content models`

Labels: `area:architecture`, `type:decision`, `status:blocked`, `priority:critical`

Depends on: `TEMP-001`, `TEMP-006`

Blocks: `TEMP-012`, `TEMP-013`, `TEMP-014`, `TEMP-015`

Deliverables:

- Destination model
- Tour model
- Departure model
- Blog article model
- Static page model
- Media reference model
- ADR or decision-log update

Acceptance criteria:

- Models support SEO, media, route generation and future data-source replacement.
- Required validation rules are listed.

### TEMP-011

Title: `[Frontend] Implement image reference helper`

Labels: `area:frontend`, `type:feature`, `status:blocked`, `priority:high`

Depends on: `TEMP-003`, `TEMP-007`, `TEMP-010`

Blocks: `TEMP-014`, `TEMP-017`

Deliverables:

- Responsive image URL helper
- Width, height and alt text enforcement
- Lazy/eager loading rules

Acceptance criteria:

- Hero images can be prioritized.
- Below-fold images can be lazy-loaded.
- Layout dimensions prevent image-related CLS.

### TEMP-012

Title: `[UX] Define tour-details page structure`

Labels: `area:ux`, `type:research`, `status:blocked`, `priority:high`

Depends on: `TEMP-010`

Blocks: `TEMP-013`, `TEMP-014`

Deliverables:

- `docs/specifications/tour-page-ux.md`

Acceptance criteria:

- Every tour-model field has a defined presentation location.
- Mobile CTA behavior is defined.
- Missing departure dates are handled.
- Enquiry path is specified.

### TEMP-013

Title: `[SEO] Define tour-details SEO requirements`

Labels: `area:seo`, `type:research`, `status:blocked`, `priority:high`

Depends on: `TEMP-004`, `TEMP-010`

Blocks: `TEMP-014`, `TEMP-015`

Deliverables:

- `docs/specifications/tour-page-seo.md`

Acceptance criteria:

- Metadata, canonical, schema, breadcrumbs and sitemap behavior are defined.
- `TouristTrip`, `Trip`, `Offer` and FAQ schema decisions are explicit.

### TEMP-014

Title: `[Architecture] Approve tour-details implementation specification`

Labels: `area:architecture`, `type:decision`, `status:blocked`, `priority:critical`

Depends on: `TEMP-012`, `TEMP-013`

Blocks: `TEMP-015`

Deliverables:

- `docs/specifications/tour-page-approved.md`

Acceptance criteria:

- UX and SEO contradictions are resolved.
- Angular implementer has one authoritative specification.
- Scope, non-goals, files affected and acceptance criteria are clear.

### TEMP-015

Title: `[Frontend] Implement tour-details page`

Labels: `area:frontend`, `type:feature`, `status:blocked`, `priority:high`

Depends on: `TEMP-014`, `TEMP-011`

Blocks: `TEMP-021`

Deliverables:

- Angular implementation under `apps/website/src/app/features/tours/`
- Tour detail route
- Metadata and structured data rendering

Acceptance criteria:

- Implementation matches `tour-page-approved.md`.
- Works on mobile and desktop.
- Page can be prerendered.

## Phase 3: Forms, migration and launch quality

### TEMP-016

Title: `[Backend] Implement contact and enquiry API`

Labels: `area:backend`, `type:feature`, `status:blocked`, `priority:high`

Depends on: `TEMP-008`

Blocks: `TEMP-021`

Deliverables:

- Contact endpoint
- Tour enquiry endpoint
- Turnstile verification
- Transactional email integration
- Rate limiting

Acceptance criteria:

- Valid submissions send expected emails.
- Invalid and abusive submissions are rejected safely.
- Production errors do not leak internals.

### TEMP-017

Title: `[Migration] Prepare media migration pipeline`

Labels: `area:migration`, `type:migration`, `status:blocked`, `priority:high`

Depends on: `TEMP-003`, `TEMP-005`, `TEMP-011`

Blocks: `TEMP-018`

Deliverables:

- Media key mapping
- Duplicate detection approach
- Dimension and alt text metadata extraction
- Upload process

Acceptance criteria:

- WordPress media URLs can be mapped to new media keys.
- Important images have dimensions and meaningful alt text.

### TEMP-018

Title: `[Migration] Migrate priority content and redirects`

Labels: `area:migration`, `type:migration`, `status:blocked`, `priority:critical`

Depends on: `TEMP-004`, `TEMP-005`, `TEMP-017`

Blocks: `TEMP-021`

Deliverables:

- Migrated priority destinations, tours, pages and blog articles
- Redirect map
- Manual review notes

Acceptance criteria:

- Priority pages have equivalent or better content and metadata.
- Important old URLs resolve through 200 or single-hop 301.

### TEMP-019

Title: `[QA] Define launch quality checklist`

Labels: `area:qa`, `type:research`, `status:ready`, `priority:high`

Depends on: None

Blocks: `TEMP-021`

Deliverables:

- Accessibility checklist
- Core Web Vitals checklist
- SEO validation checklist
- Security header checklist
- Cross-browser and responsive testing matrix

Acceptance criteria:

- Pass/fail criteria are measurable.
- Checklist maps to automated and manual checks.

### TEMP-020

Title: `[DevOps] Configure staging deployment`

Labels: `area:devops`, `type:feature`, `status:blocked`, `priority:high`

Depends on: `TEMP-002`, `TEMP-009`

Blocks: `TEMP-021`

Deliverables:

- Staging website deployment
- Staging API deployment if API exists
- Noindex protection for staging
- Staging environment variables

Acceptance criteria:

- Staging is reachable.
- Staging is protected from public indexing.
- Deployment is tied to GitHub commits.

### TEMP-021

Title: `[QA] Complete launch readiness review`

Labels: `area:qa`, `type:research`, `status:blocked`, `priority:critical`

Depends on: `TEMP-015`, `TEMP-016`, `TEMP-018`, `TEMP-019`, `TEMP-020`

Blocks: Production launch

Deliverables:

- Launch readiness report
- Failed checks list
- Go/no-go recommendation

Acceptance criteria:

- SEO, redirects, accessibility, performance, security and forms are validated.
- Critical failures are resolved or explicitly accepted by the Lead Architect.
