# Implementation Order

This is the approved implementation sequence. Do not promote a specialist task into active development until its dependencies are satisfied.

Use `docs/MILESTONE_GATES.md` to decide when a milestone is ready to close.

## Dependency-based execution model

Do not ask every expert to work simultaneously from day one.

Preferred sequence:

1. Architect defines foundations.
2. SEO and migration audit the current site.
3. UI/UX defines page experience.
4. Architect approves page specification.
5. Content expert prepares content model and data.
6. Angular expert implements.
7. Backend expert implements dynamic functions.
8. DevOps deploys the vertical slice.
9. SEO validates rendered output.
10. QA verifies acceptance criteria.
11. Architect closes the milestone.

Allowed parallel work:

- SEO audit and content inventory may run in parallel before route approval.
- UI design and content model work may run in parallel before Angular implementation.
- Backend enquiry API and frontend enquiry form work may run in parallel before integrated form testing, once the API contract is approved.

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
- Gate 1 requirements are satisfied or explicitly deferred by the Lead Architect.

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
- Gate 1 architecture readiness.

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
- Approved content-model work order.

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
- Gate 2 design readiness for any page-specific implementation.

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
- Gate 3 closes after this milestone is deployed and verified.

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
- Approved API contract.

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
- Gate 4 migration readiness.

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
- Gate 5 launch readiness.
