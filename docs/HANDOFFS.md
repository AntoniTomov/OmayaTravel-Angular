# Specialist Handoffs

This file tracks specialist outputs before they become implementation work.
No handoff is accepted until the Lead Architect records a verdict here and, when needed, updates `docs/DECISIONS.md`.

Raw specialist handoffs are not implementation contracts. Implementation begins only from approved files such as `docs/specifications/tour-page-approved.md`.

## Status meanings

- `Received`: File exists but has not been reviewed.
- `Needs changes`: Specialist must revise before implementation.
- `Accepted`: Approved for implementation without architecture changes.
- `Accepted with changes`: Approved only with the listed constraints.
- `Rejected`: Do not implement.
- `Deferred`: Reasonable idea, but not for the current phase.

## Active handoffs

| ID | Area | Source | Status | Verdict | Dependencies | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| UX-HOME-001 | Homepage UX | Existing note in this file before governance setup | Needs changes | The recommendation is directionally useful, but not implementation-ready. It lacks concrete section order, responsive behavior and component states. | Brand typography confirmation; final tour model. | UX specialist must provide a spec file using `docs/REQUIREMENTS_FOR_EACH_TASK.md`. |

## UX-HOME-001 original proposal summary

Deliverables requested:

- Homepage section order
- Mobile navigation behavior
- CTA hierarchy
- Tour-card interaction

Original acceptance criteria:

- Works at 360 px width
- Primary CTA visible above fold
- Keyboard-accessible navigation

Architect review:

- Accept the criteria as useful constraints.
- Do not implement from this note alone.
- Require a full UX specification with desktop behavior, mobile behavior, states, accessibility notes and content-model dependencies.

## Intake template

| ID | Area | Source | Status | Verdict | Dependencies | Next action |
| --- | --- | --- | --- | --- | --- | --- |
| TBD | TBD | `docs/specifications/example.md` | Received | Pending review | TBD | Lead Architect review |

## Approved spec tracking template

| Feature | Input specs | Approved spec | Approval state | Implementer |
| --- | --- | --- | --- | --- |
| Tour page | `docs/specifications/tour-page-ux.md`, `docs/specifications/tour-page-seo.md` | `docs/specifications/tour-page-approved.md` | Draft | Angular frontend specialist |
