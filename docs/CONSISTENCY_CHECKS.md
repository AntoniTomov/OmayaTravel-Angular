# Automated Consistency Checks

CI should catch disagreements between expert recommendations, approved specs and implementation.

These checks should be added incrementally as the repository grows.

## Planned scripts

```text
scripts/validate-content.ts
scripts/validate-routes.ts
scripts/validate-redirects.ts
scripts/validate-image-references.ts
scripts/validate-seo.ts
scripts/validate-schema.ts
scripts/check-broken-links.ts
scripts/check-orphan-pages.ts
scripts/check-unused-media.ts
```

## Required rules

Content:

- Every published page has a unique slug.
- Every published page has a unique canonical URL.
- Every required content field is present.
- Every tour references an existing destination.
- Every date is valid ISO format.
- Prices use explicit supported currency codes.

Routes and redirects:

- Every generated route is unique.
- Every former indexed URL has a valid outcome.
- No redirect chains.
- Redirect destinations exist.
- No internal links point to old WordPress URLs.
- No internal links are broken.

Media:

- Every meaningful image has alt text.
- Every image has width and height.
- Every referenced media key exists.
- No unused media is shipped in the website bundle.
- Hero images have priority-loading metadata where required.

SEO:

- No production page accidentally contains `noindex`.
- No staging URL appears in production output.
- No unpublished content appears in the sitemap.
- Title and meta-description lengths are within approved ranges.
- Canonical URLs are absolute and use the production domain.
- Structured data validates against the approved schema requirements.
- Breadcrumb data matches visible breadcrumb hierarchy.

Security and environments:

- No secrets appear in frontend code.
- Production build does not reference staging API URLs.
- Staging is protected from indexing.
- API endpoints are not cached.
- Security headers are present in deployed environments.

## CI adoption order

1. Content validation.
2. Route and sitemap validation.
3. Redirect validation.
4. Image reference validation.
5. SEO metadata validation.
6. Structured data validation.
7. Broken-link checks.
8. Orphan page and unused media checks.

The build should fail on critical content, routing, redirect, security and SEO errors.

