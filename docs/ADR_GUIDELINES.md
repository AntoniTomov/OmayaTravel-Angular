# ADR Guidelines

Architecture Decision Records capture decisions that affect multiple experts or create long-lived project constraints.

## When an ADR is required

Create or update an ADR when a decision affects any of the following:

- Multiple experts or teams.
- Public routing, canonical URLs, redirects or structured data.
- Rendering mode, deployment model, caching or hosting.
- Content representation, validation or migration strategy.
- API contracts, authentication, rate limits or data persistence.
- Media storage, transformation or URL conventions.
- Security, privacy, analytics or compliance behavior.
- New third-party services, paid services or major dependencies.
- Anything specialists are likely to debate repeatedly.

Small implementation choices inside one component or script usually do not need an ADR unless they establish a reusable pattern.

## ADR lifecycle

- `Proposed`: The decision is being considered. Do not implement as a standard.
- `Accepted`: The Lead Architect approved it. Specialists should follow it.
- `Rejected`: The option was considered and intentionally not used.
- `Superseded`: A newer ADR replaces it.
- `Deferred`: Valid idea, but not part of the current phase.

Once an ADR is accepted, specialists should not repeatedly reopen the debate unless new evidence appears, such as a technical blocker, a measurable business requirement or a material cost/security change.

## ADR file naming

```text
docs/adr/ADR-000-short-decision-name.md
```

Use the next available ADR number from `docs/DECISIONS.md`.

## ADR template

```markdown
# ADR-000: Decision title

## Status

Proposed

## Date

YYYY-MM-DD

## Context

Explain the problem, constraints and why the decision matters.

## Decision

State the chosen approach directly.

## Consequences

- Positive consequence.
- Negative or trade-off consequence.
- Follow-up work required.

## Affected experts

- Architecture
- Angular
- SEO
- UX
- Content
- Migration
- Backend
- DevOps
- QA

## Review triggers

List what evidence would justify revisiting this decision.
```

## Example

```markdown
# ADR-005: Tour Content Representation

## Status

Accepted

## Context

Tour content includes structured facts, itinerary days, departures, long-form descriptions and SEO metadata.

## Decision

Use TypeScript for structured fields and Markdown for long-form content.

## Consequences

- Content is validated during CI.
- Angular consumes normalized content.
- Migration scripts must produce both formats.
- A future CMS must map to the same normalized model.

## Affected experts

- Architecture
- Angular
- SEO
- Migration
- Backend
```

