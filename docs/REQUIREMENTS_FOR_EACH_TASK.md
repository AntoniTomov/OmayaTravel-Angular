Return your result using these sections:

1. Executive summary
2. Proposed solution
3. Files affected
4. Decisions requested
5. Assumptions
6. Dependencies
7. Risks
8. Acceptance criteria
9. Handoff instructions
10. Questions for the Lead Architect

Clearly label every item as:

- Recommendation
- Accepted existing decision
- Proposed architecture change
- Blocker

Specialist outputs are proposal files only. Do not instruct an implementation expert to build directly from this file unless the Lead Architect has produced a matching `*-approved.md` specification.

Specialist outputs must be delivered through a pull request from a task branch into `develop`. Link the PR to the GitHub issue that requested the work.

Use this naming convention:

- UX proposal: `docs/specifications/[feature]-ux.md`
- SEO proposal: `docs/specifications/[feature]-seo.md`
- Content proposal: `docs/specifications/[feature]-content.md`
- Backend proposal: `docs/specifications/[feature]-backend.md`
- Architect-approved implementation spec: `docs/specifications/[feature]-approved.md`

Before opening the PR, confirm:

- The source branch was created from `develop`.
- The GitHub issue is linked.
- The output file follows the naming convention.
- Any proposed architecture change is clearly marked.
- Blockers and questions for the Lead Architect are explicit.

If your recommendation affects multiple experts, routes, rendering, content models, APIs, media, hosting, caching, SEO, security, privacy, analytics, dependencies or costs, include a `Proposed architecture change` section and request an ADR review.

When handing work to another expert, satisfy the relevant contract in `docs/INTERFACE_CONTRACTS.md`.
