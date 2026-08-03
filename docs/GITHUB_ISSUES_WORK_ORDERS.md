# GitHub Issues Work Orders

GitHub Issues are the execution system for the Omaya Travel rebuild.

Every meaningful task must have one GitHub issue before implementation begins.
Docs can describe strategy, but Issues own work assignment, status, dependencies and completion tracking.

Pull requests are the review channel for those issues. Specialist proposals, approved specifications and implementation work should all arrive through PRs into `develop`.

## Required labels

### Area

- `area:architecture`
- `area:frontend`
- `area:ux`
- `area:seo`
- `area:content`
- `area:migration`
- `area:devops`
- `area:backend`
- `area:qa`

### Status

- `status:ready`
- `status:blocked`
- `status:review`
- `status:approved`

### Priority

- `priority:critical`
- `priority:high`
- `priority:medium`
- `priority:low`

### Type

- `type:feature`
- `type:decision`
- `type:bug`
- `type:research`
- `type:migration`

## Issue title format

```text
[Area] Imperative task title
```

Examples:

```text
[UX] Define tour-details page structure
[SEO] Inventory current WordPress URLs
[Architecture] Approve tour content model
[Frontend] Implement tour-details page
```

## Dependency format

Use explicit issue references:

```text
Depends on:
#12 Approve tour content model

Blocks:
#24 Implement tour-details page
#31 Add TouristTrip structured data
```

Before real issue numbers exist, use temporary IDs from `docs/ISSUE_BACKLOG.md`.

## Status rules

- `status:ready`: Requirements are clear and dependencies are satisfied.
- `status:blocked`: Work cannot proceed because a dependency, decision or external input is missing.
- `status:review`: Work is complete and awaiting architect or specialist review.
- `status:approved`: The Lead Architect has accepted the result.

Only the Lead Architect can move architecture, approved specification or major implementation issues to `status:approved`.

## Work order rules

- One issue should represent one meaningful deliverable.
- Large issues must be split when they span multiple owners or acceptance paths.
- Specialist proposal issues produce proposal files, not implementation instructions.
- Approved specification issues produce `docs/specifications/*-approved.md`.
- Implementation issues must link to one approved specification.
- Every specialist proposal, approved specification and implementation change should have a PR linked to its issue.
- Specialist proposal PRs are reviewed as inputs; implementation PRs are reviewed against approved specs.
- Architecture decisions must link to `docs/DECISIONS.md` or a full ADR.
- Migration issues must identify source URLs, target routes and redirect requirements.
- QA issues must identify the exact checks, tools and pass/fail criteria.

## GitHub setup checklist

When the GitHub repository exists:

1. Create the required labels.
2. Add `.github/ISSUE_TEMPLATE/work-order.yml`.
3. Use `.github/labels.yml` as the canonical label list.
4. Create issues from `docs/ISSUE_BACKLOG.md`.
5. Replace temporary dependency IDs with real issue numbers.
6. Link approved specs and ADRs from their corresponding issues.

## Repository

GitHub repository:

```text
AntoniTomov/OmayaTravel-Angular
```

The initial work-order issues have been created in this repository.

## Branch policy

- `develop` is the active integration branch.
- `master` is the stable release branch.
- Specialist, architecture, migration, QA and feature branches are created from `develop`.
- Pull requests target `develop` during rebuild work.
- `develop` is merged to `master` only when the project owner approves release readiness.

See `docs/EXPERT_WORKFLOW.md` for branch naming and PR expectations.

## Codex-ready issues

Implementation issues should include enough context for Codex to work safely:

- Exact issue objective.
- Approved specification files to read first.
- Relevant ADRs.
- Constraints.
- Files or modules expected to change.
- Files, contracts or architecture areas that must not change.
- Required verification commands.
- What unresolved issues must be documented in the PR.

See `docs/CODEX_AUTOMATION.md`.
