# Architecture Governance

## Lead Architect mandate

The Lead Architect owns the technical direction of the Omaya Travel rebuild and is the final approver for architecture, scope boundaries, implementation order and cross-specialist contradictions.

Specialist recommendations are treated as proposals until approved in `docs/DECISIONS.md` or in an ADR under `docs/adr/`.

Implementation teams work from architect-approved specification files, not from raw specialist proposals. See `docs/SPECIFICATION_WORKFLOW.md`.

GitHub Issues are the project work-order system. Every meaningful task must have an issue before implementation begins. See `docs/GITHUB_ISSUES_WORK_ORDERS.md`.

## Operating principles

- Prefer the simplest architecture that meets performance, SEO, security and maintainability requirements.
- Keep content-driven pages prerendered whenever possible.
- Add backend functionality only for workflows that cannot be handled safely as static content.
- Add a database only when the project has operational data, not merely website content.
- Keep GitHub as the source of truth for code, content models, content files and decisions.
- Treat SEO migration as a launch-critical workstream, not a cleanup task.
- Optimize image-heavy pages from the beginning.
- Defer features that create permanent maintenance cost without launch value.

## Proposal intake process

1. Specialist creates or updates a Markdown proposal using `docs/REQUIREMENTS_FOR_EACH_TASK.md`.
2. Proposal is added to `docs/HANDOFFS.md` with status `Received`.
3. Lead Architect reviews for scope, dependencies, contradictions, cost, security, SEO and implementation impact.
4. Lead Architect combines relevant specialist proposals into `docs/specifications/[feature]-approved.md`.
5. Verdict is recorded as `Accepted`, `Accepted with changes`, `Rejected` or `Deferred`.
6. Any architectural change is recorded in `docs/DECISIONS.md` or a full ADR.
7. Implementation tasks are added to `docs/IMPLEMENTATION_ORDER.md` only after approval.
8. A GitHub issue is created or updated with labels, dependencies, blockers and acceptance criteria.
9. Implementers use the approved specification and linked GitHub issue as the single source of truth.

## Contradiction resolution rules

- SEO preservation beats visual novelty when the two conflict.
- Static/prerendered content beats runtime rendering unless freshness or personalization requires runtime behavior.
- Git-managed content beats CMS/admin complexity for v1.
- Cloudflare edge caching beats origin scaling for public content.
- Measured business need beats speculative extensibility.
- Security controls are mandatory even when they slow implementation.
- Existing URL equity should be preserved unless a redirect creates a clearer long-term structure.

## Change review checklist

Every major technical change must answer:

- Does it affect rendering mode, routing, content models, SEO, media, forms, hosting or security?
- Does it introduce a new dependency, service, paid feature or operational process?
- Can it be validated in CI?
- Does it preserve the ability to prerender key pages?
- Does it require environment variables or secrets?
- Does it alter public URLs or canonical metadata?
- Does it increase maintenance cost after launch?
- Is there a rollback path?
