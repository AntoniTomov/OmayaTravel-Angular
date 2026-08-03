# Codex Automation Workflow

Codex should implement from approved issues and specifications, not from broad chat summaries.

## Issue-to-code flow

1. Lead Architect creates or approves a GitHub issue.
2. The issue references exact specification files.
3. Codex reads the repository, issue and referenced files.
4. Codex creates the implementation on a branch from `develop`.
5. CI validates the changes.
6. Specialist reviews the relevant area.
7. Lead Architect performs final review.
8. Pull request is merged into `develop`.

## Good Codex task format

```text
Implement GitHub issue #24.

Read first:
- docs/specifications/tour-page-approved.md
- docs/specifications/design-system.md
- docs/specifications/content-models.md
- docs/adr/ADR-001-angular-hybrid-rendering.md

Constraints:
- Angular standalone components
- SSR-safe implementation
- No business content hard-coded in components
- Use NgOptimizedImage
- Meet the defined accessibility acceptance criteria
- Add tests

Do not change:
- Content model
- URL structure
- Infrastructure configuration

Run:
- lint
- type checking
- unit tests
- production build

Document unresolved issues in the pull request.
```

## Codex implementation rules

- Start from `develop`.
- Read the linked issue and approved spec before editing.
- Do not implement from raw UX, SEO, content or backend proposal files.
- Do not change content models, URL structure, rendering strategy, deployment, dependencies or API contracts unless the issue explicitly requests it.
- Keep implementation scoped to the issue.
- Add tests when behavior, rendering, validation or contracts change.
- Run the verification commands named in the issue or approved spec.
- Document skipped checks and unresolved questions in the PR.

## Read-first checklist by work type

Frontend implementation:

- Approved feature specification.
- Relevant ADRs.
- Design-system specification.
- Content model specification.
- SEO requirements included in approved spec.

Backend implementation:

- Approved API contract.
- Security requirements.
- Environment-variable contract.
- Rate-limit and validation requirements.

Migration implementation:

- URL inventory.
- Redirect strategy.
- Content model specification.
- Media mapping rules.

DevOps implementation:

- Architecture-to-DevOps contract.
- Rendering and runtime ADRs.
- Environment-variable list.
- Cacheability rules.

