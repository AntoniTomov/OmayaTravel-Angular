# Interface Contracts

These contracts define the required handoff content between experts.
They are stable project boundaries and can change only through an accepted architecture decision.

## Contract rules

- The producing expert owns completeness and clarity.
- The receiving expert must not infer missing requirements from chat.
- If a required field is not applicable, the producing expert must write `Not applicable` and explain why.
- If contracts conflict, the Lead Architect resolves the conflict in an approved specification or ADR.
- Implementation must use approved specifications and versioned contracts, not raw specialist debate.

## UI/UX to Angular

The UX specialist must provide:

- Page or component objective.
- Section order.
- Desktop responsive behavior.
- Tablet responsive behavior where different from desktop or mobile.
- Mobile responsive behavior, including 360 px width behavior.
- Navigation behavior.
- Interaction states, including hover, focus, active, disabled, loading, success and error where relevant.
- Primary CTA behavior.
- Secondary CTA behavior.
- Sticky or persistent CTA rules.
- Accessibility requirements.
- Keyboard behavior.
- Required content fields.
- Optional content behavior.
- Loading states.
- Empty states.
- Error states.
- Image and gallery behavior.
- Trust, reassurance or conversion elements.
- Analytics events requested by UX.
- Dependencies on content models, SEO rules or backend capabilities.

Angular may reject the handoff as incomplete if these items are missing.

## SEO to Angular

The SEO specialist must provide:

- Page title pattern.
- Meta-description rules.
- Canonical URL rules.
- Open Graph and social image requirements.
- Structured-data requirements.
- Heading hierarchy.
- Breadcrumb rules.
- Internal-linking rules.
- Index/noindex behavior.
- Sitemap inclusion rules.
- Image alt-text requirements where SEO-specific.
- Pagination or filtered-page indexing behavior.
- Redirect requirements for replaced URLs.
- Hreflang requirements when multilingual content is approved.
- SEO validation acceptance criteria.

Angular must not invent SEO behavior when the SEO handoff is missing or ambiguous.

## Content to Angular

The content specialist or architect must provide:

- Content type name.
- Required fields.
- Optional fields.
- Field types.
- Allowed enum values.
- Validation rules.
- Slug rules.
- Publication rules.
- Date and currency formatting rules.
- Media reference requirements.
- SEO field requirements.
- Example valid content object.
- Example invalid content object where helpful.
- Migration mapping from WordPress fields where applicable.

Angular consumes normalized content models from `content/` and `packages/content-models/`.

Required content invariants:

- Every public item has a unique `slug`.
- Every public page has SEO metadata.
- Every canonical URL is unique.
- Every meaningful image has alt text, width and height.
- Every internal link resolves at build time.
- Every published tour references an existing destination.
- Every date is stored as an ISO string.
- Prices display explicit currency codes.

## Migration to SEO

The migration specialist must provide:

- Existing URL.
- Existing page type.
- Existing title.
- Existing meta description.
- Existing canonical URL.
- Existing primary heading.
- Existing structured data.
- Existing index/noindex state when available.
- Proposed destination URL.
- Redirect status, usually `200` keep or `301` redirect.
- Content importance.
- Current internal links.
- Current inbound priority where known.
- Current media references.
- Current language.
- Notes on thin, duplicate or obsolete content.

SEO uses this handoff to approve route preservation, redirects, metadata improvements and migration priority.

## Architecture to DevOps

The Lead Architect must provide:

- Applications to deploy.
- Rendering model.
- Runtime requirements.
- Node.js and package-manager expectations.
- Build commands.
- Start commands.
- Environment variables.
- Secret-management requirements.
- Health checks.
- Cacheability rules.
- Public domains and subdomains.
- Staging noindex requirements.
- Rollback requirements.
- Logging and monitoring expectations.
- Required security headers.
- Deployment approval gates.

DevOps must not choose a hosting model that contradicts accepted rendering, caching, security or SEO decisions.

## Backend to Angular

The backend specialist must provide a versioned API contract:

- Contract version.
- Method.
- Endpoint.
- Purpose.
- Authentication requirements.
- Turnstile or anti-abuse requirements.
- Request schema.
- Response schema.
- Validation error format.
- Rate limits.
- Request size limits.
- Response size limits.
- Idempotency behavior where relevant.
- CORS requirements.
- Example successful request and response.
- Example validation error.
- Example rate-limit error.
- Production error behavior.

Angular must integrate only against the approved API contract.

## Angular to Backend

The Angular specialist must provide:

- Form fields and client-side validation rules.
- Endpoint integration points.
- Expected loading, success and error states.
- Required analytics events.
- Required redirect or thank-you behavior.
- Data the browser must never send.
- Data the browser must never store.
- Accessibility requirements for form errors.

Backend must reject unsafe or unexpected inputs even if Angular performs client-side validation.

## DevOps to Frontend

DevOps must provide:

- Asset URL conventions.
- Cache headers.
- Media URL builder rules.
- Deployment environment URLs.
- Runtime limitations.
- Maximum request size.
- Maximum response size.
- CDN behavior.
- HTML caching behavior.
- Image transformation limits.
- Compression behavior.
- Security header constraints.
- Environment variable availability.
- Build-time versus runtime configuration rules.

Frontend must respect these constraints when building routing, images, assets and API calls.

## Media to Angular

The media or migration specialist must provide:

- Stable media key.
- Alt text.
- Width.
- Height.
- Caption where relevant.
- Focal point where relevant.
- Source ownership or licensing note when needed.
- Mapping from old WordPress media URL when migrated.

The image helper is responsible for generating responsive URLs and preserving layout dimensions.

Required image fields:

- `key`
- `alt`
- `width`
- `height`
- optional `caption`
- optional `focalPoint`

## QA to All Experts

QA must provide:

- Test scope.
- Pass/fail criteria.
- Browsers and viewport sizes.
- Accessibility checks.
- Performance checks.
- SEO checks.
- Security checks where relevant.
- Manual test cases.
- Automated test commands.
- Evidence required for approval.

Experts must provide enough implementation or specification detail for QA to verify outcomes without guessing intent.

