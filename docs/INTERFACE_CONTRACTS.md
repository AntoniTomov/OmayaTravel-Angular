# Interface Contracts

These contracts are the stable boundaries between specialists and implementation teams.
They can change only through an accepted architecture decision.

## Content to website

The Angular website consumes normalized content models from the `content/` and `packages/content-models/` areas.

Required content invariants:

- Every public item has a unique `slug`.
- Every public page has SEO metadata.
- Every canonical URL is unique.
- Every meaningful image has alt text, width and height.
- Every internal link resolves at build time.
- Every published tour references an existing destination.
- Every date is stored as an ISO string.
- Prices display explicit currency codes.

## Website to API

The public website may call the API only for dynamic workflows:

- Health checks
- Contact form submission
- Tour enquiry submission
- Newsletter subscription handoff
- Turnstile verification through backend-controlled secrets

The website must not expose provider API keys or mail credentials.

## API to email provider

The NestJS API owns transactional email delivery.

Required behavior:

- Validate all request bodies.
- Verify Turnstile tokens before sending email.
- Rate-limit by IP and endpoint.
- Send traveller confirmation emails where appropriate.
- Send Omaya notification emails with complete enquiry context.
- Log delivery status without storing unnecessary personal data.
- Return generic production errors to the browser.

## Media to website

The website references media by stable keys, not by WordPress upload URLs.

Required image fields:

- `key`
- `alt`
- `width`
- `height`
- optional `caption`
- optional `focalPoint`

The image helper is responsible for generating responsive URLs and preserving layout dimensions.

## SEO contract

Every indexable page must provide:

- Title
- Meta description
- Canonical URL
- Open Graph metadata
- Structured data where relevant
- Breadcrumb data where relevant
- Heading hierarchy
- Sitemap inclusion
- Redirect mapping if replacing a WordPress URL

