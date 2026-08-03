# Implementation Order

This is the approved implementation sequence. Do not promote a specialist task into active development until its dependencies are satisfied.

## Milestone 0: Discovery and control plane

Status: Active

1. Confirm hosting constraints for Hostinger, Cloudflare and deployment model.
2. Inventory current WordPress URLs, metadata, media, forms and structured data.
3. Establish final route map and redirect strategy.
4. Finalize v1 scope boundaries.
5. Keep ADR index, risk register and handoff queue current.

Exit criteria:

- URL inventory exists.
- Redirect draft exists.
- Hosting decision is accepted or fallback is chosen.
- Initial route map is approved.

## Milestone 1: Repository foundation

Status: Pending

1. Initialize pnpm workspace.
2. Create Angular website app.
3. Create NestJS API app.
4. Create shared content-model package.
5. Add lint, format, type-check and test commands.
6. Add CI workflow.
7. Add environment validation.

Dependencies:

- Milestone 0 hosting constraints known.

## Milestone 2: Content and SEO foundation

Status: Pending

1. Define content models for destination, tour, departure, blog article, static page and media.
2. Add Markdown parsing.
3. Add content validation.
4. Add route generation.
5. Add sitemap and robots generation.
6. Add redirect config and verification script.

Dependencies:

- Milestone 1 workspace exists.

## Milestone 3: Site shell and design system

Status: Pending

1. Define design tokens.
2. Implement global layout.
3. Implement header, navigation, mobile menu and footer.
4. Implement reusable cards, buttons, forms, breadcrumbs, galleries and CTA blocks.
5. Confirm accessibility baseline.

Dependencies:

- Brand direction and typography confirmed.
- Content models stable enough for cards and navigation.

## Milestone 4: First vertical slice

Status: Pending

1. Add one destination through content files.
2. Add one tour through content files.
3. Render destination listing and destination detail.
4. Render tour listing and tour detail.
5. Serve optimized responsive images through the image helper.
6. Generate metadata, schema and sitemap entries.
7. Deploy to staging.

Dependencies:

- Milestones 1, 2 and 3.
- Media decision accepted.

## Milestone 5: Forms and API

Status: Pending

1. Implement contact endpoint.
2. Implement tour enquiry endpoint.
3. Add Turnstile verification.
4. Add transactional email integration.
5. Add rate limiting and structured logs.
6. Implement frontend form states and analytics events.

Dependencies:

- Email provider chosen.
- Turnstile keys available.
- API deployment target confirmed.

## Milestone 6: Content buildout and migration

Status: Pending

1. Migrate destinations.
2. Migrate tours.
3. Migrate static pages.
4. Migrate blog articles.
5. Migrate media to final media storage.
6. Complete redirects.
7. Manually review priority pages.

Dependencies:

- WordPress export and media backup.
- Final content models.

## Milestone 7: Launch readiness

Status: Pending

1. Run accessibility testing.
2. Run performance testing.
3. Run structured data validation.
4. Run broken-link and redirect verification.
5. Validate security headers and API abuse controls.
6. Confirm analytics and consent behavior.
7. Execute launch content freeze.
8. Deploy production and monitor.

Dependencies:

- Milestone 6 complete.

