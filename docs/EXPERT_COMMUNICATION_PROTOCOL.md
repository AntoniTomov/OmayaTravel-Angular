# Expert Communication Protocol

This protocol keeps expert coordination fast, durable and low-token.

## Source Of Truth

Project truth lives in this order:

1. Accepted ADRs in `docs/adr/`
2. Approved specifications in `docs/specifications/*-approved.md`
3. GitHub issues and pull requests
4. Specialist proposal files
5. Codex task messages

Codex task messages are notifications only. Do not treat chat text as an accepted project decision unless the Lead Architect records it in an issue, PR, approved spec, ADR or governance document.

## Token-Saving Rule

Do not paste long diffs, full specs, full issue bodies or repeated context into Codex task messages.

Use short notifications and let the receiving expert fetch details from GitHub or files.

Good notification:

```text
Issue: #12
PR: #44
Requester: Angular Wizard
Commit: 7d72e01
Status: Ready for Architect re-review
Verification: lint/test/type-check/build passed
Needs Architect: yes
Blocks: #16, #18
```

Avoid:

- pasted PR diffs
- copied chat histories
- full Markdown specs
- repeated dependency lists when the issue already has them
- long explanations of unchanged state

## PR Notification Loop

Every PR must keep the requester and Lead Architect explicitly notified until the PR is merged or closed.

Required loop:

1. Requester opens a PR.
2. Requester comments on the PR that the Lead Architect has been informed.
3. Requester sends a short task notification to the Lead Architect.
4. Lead Architect reviews the PR.
5. If changes are needed, Lead Architect comments on the PR and notifies the requester task.
6. Requester resolves comments.
7. Requester comments on the PR with the resolving commit SHA.
8. Requester sends a short task notification to the Lead Architect.
9. Lead Architect re-reviews.
10. Loop repeats until the PR is merged or closed.

Silent pushes are not enough. A requester must explicitly say when a PR is ready for review or re-review.

## Hourly Check Rule

After opening a PR, the requester must check the PR at least once per hour while actively working or waiting for review.

The requester checks for:

- Architect comments
- specialist comments
- requested changes
- failed checks
- merge conflicts
- new dependency blockers

If the requester will be unavailable for more than one working day, they must leave a PR comment with the expected return time or name the expert taking over.

## Lean Notification Template

Use this template for most Codex task handoffs:

```text
Issue:
PR:
Requester:
Commit:
Status:
Verification:
Needs Architect:
Blocks:
Notes:
```

Keep `Notes` to blockers, deviations, or decisions needed. Omit it when there is nothing important.

## Architect Review Responses

Architect review comments must be concise and actionable:

- exact blocker
- required fix
- file/spec/ADR reference when useful
- verification required
- comment occasion count when changes are requested

When GitHub blocks formal review actions because the same account opened the PR, the Lead Architect records the review as a PR conversation comment.

## Problematic PR Rule

If the Lead Architect leaves comments on the same PR on three separate review occasions and the requester resolves them, but a fourth Architect review still finds new required comments, the PR must be flagged in `docs/PROBLEMATIC_PRS.md`.

Record:

- PR number
- issue number
- requester
- summary of repeated problem
- corrective action

Problematic PR tracking is not blame. It means the work order, implementation approach, or review criteria need correction before more time is spent.

## Expert-To-Expert Communication

Experts should communicate through GitHub issues, PR comments and files.

Use task messages only to notify:

- a PR is ready
- Architect comments were resolved
- a dependency is blocked or unblocked
- a handoff file/spec/report was produced
- a decision is needed

When one expert depends on another, link the issue or PR instead of summarizing the whole conversation.

## What Experts Must Read

Before starting work, every expert must read:

- the assigned GitHub issue
- linked approved specs
- linked ADRs
- relevant interface contracts
- latest Architect comments on the issue or PR

If those sources conflict, stop and ask the Lead Architect. Do not resolve contradictions independently.

