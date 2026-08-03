# Expert Workflow

This is the required working model for all Omaya Travel rebuild specialists.

## Core model

```text
GitHub issue = work order
Specialist branch = workspace for the expert's deliverable
Markdown file = specialist deliverable
Pull request = review and approval channel
Approved specification = implementation contract
develop = integration branch
master = release branch
```

No specialist recommendation becomes accepted through chat alone.
Every meaningful task must be represented by a GitHub issue, delivered as files, reviewed through a pull request and approved by the Lead Architect where architecture or implementation contracts are involved.

## Required flow

1. Start from a GitHub issue.
2. Create a branch from `develop`.
3. Add or update the required files.
4. Open a pull request back to `develop`.
5. Link the PR to the GitHub issue.
6. Lead Architect reviews the PR.
7. Specialist resolves requested changes.
8. Approved proposal PR is merged to `develop`.
9. Lead Architect creates or updates the `*-approved.md` implementation specification.
10. Implementation issue becomes `status:ready` only after the approved spec exists.

## Branch naming

Use short, descriptive branches:

```text
docs/ux-tour-page
docs/seo-tour-page
docs/content-tour-model
docs/architecture-tour-page-approved
feature/tour-page
feature/contact-api
migration/wordpress-url-inventory
qa/launch-checklist
```

Use `docs/` branches for research, specifications, ADRs and planning documents.
Use `feature/` branches for implementation.
Use `migration/` branches for content, media and redirect migration.
Use `qa/` branches for test plans, audit results and launch checks.

## Specialist proposal PRs

Specialist PRs produce proposal files. They do not authorize implementation by themselves.

Examples:

```text
UX specialist branch:
docs/ux-tour-page

Produces:
docs/specifications/tour-page-ux.md

SEO specialist branch:
docs/seo-tour-page

Produces:
docs/specifications/tour-page-seo.md
```

The Lead Architect may merge a specialist proposal PR as an accepted input while still rejecting, changing or deferring parts of the recommendation in the final approved specification.

## Approved specification PRs

The Lead Architect resolves specialist inputs into a single approved implementation file.

Example:

```text
Architect branch:
docs/architecture-tour-page-approved

Inputs:
docs/specifications/tour-page-ux.md
docs/specifications/tour-page-seo.md

Produces:
docs/specifications/tour-page-approved.md
```

The approved spec must clearly state:

- accepted recommendations
- rejected recommendations and reasons
- deferred recommendations and reasons
- resolved contradictions
- final implementation requirements
- acceptance criteria
- linked GitHub issues

## Implementation PRs

Implementation experts build from the approved spec and the linked implementation issue.

Example:

```text
Frontend branch:
feature/tour-page

Builds from:
docs/specifications/tour-page-approved.md

Touches:
apps/website/src/app/features/tours/
```

Implementation experts must not interpret multiple conflicting specialist proposal files. If the approved spec is missing, unclear or contradictory, they stop and ask the Lead Architect through the issue or PR.

## Status changes

- Specialist starts work: issue stays `status:ready` or `status:blocked` depending on dependencies.
- Specialist opens PR: issue moves to `status:review`.
- Lead Architect requests changes: issue remains `status:review`.
- Lead Architect accepts and merges proposal: issue moves to `status:approved`.
- Approved implementation spec exists and dependencies are satisfied: dependent implementation issue moves to `status:ready`.
- Implementation PR is complete: implementation issue moves to `status:review`.
- Lead Architect accepts implementation: issue moves to `status:approved`.

## Pull request requirements

Every PR must include:

- requester / expert role
- linked issue number
- summary of changes
- files changed
- expert role and handoff type
- decisions requested, if any
- dependencies
- risks
- acceptance criteria
- testing or verification performed

Use this format near the top of the PR body:

```text
Requester: Angular Wizard
```

Examples:

```text
Requester: UI/UX Expert
Requester: SEO Expert
Requester: Migration Expert
Requester: DevOps Expert
Requester: Backend Expert
Requester: QA Expert
Requester: Lead Architect
```

The requester is the expert role responsible for the PR, not necessarily the GitHub account that opened it.

Specialist PRs must also state whether they include:

- recommendations
- accepted existing decisions
- proposed architecture changes
- blockers

## Communication rule

Experts communicate durable project knowledge through files, issues and pull requests.

Chat can clarify or coordinate, but chat is not the source of truth.
