# Specification Workflow

Specialists communicate through files. The Lead Architect turns specialist proposals into one approved implementation specification.

## Core rule

Implementation teams must build only from approved specifications.

Specialist proposal files are inputs. They are not implementation contracts.

## File pattern

For each page, feature or workflow:

```text
docs/specifications/[feature]-ux.md
docs/specifications/[feature]-seo.md
docs/specifications/[feature]-content.md
docs/specifications/[feature]-backend.md
docs/specifications/[feature]-approved.md
```

Use only the files that are relevant. For example, a simple static page may need only UX, SEO and approved specs.

## Example

```text
UI/UX expert writes:
docs/specifications/tour-page-ux.md

SEO expert writes:
docs/specifications/tour-page-seo.md

Lead Architect resolves conflicts and writes:
docs/specifications/tour-page-approved.md

Angular expert implements from:
docs/specifications/tour-page-approved.md
apps/website/src/app/features/tours/
```

The Angular expert should not interpret conflicting specialist recommendations. If the approved spec is unclear, implementation pauses and the question goes back to the Lead Architect.

## Specialist proposal rules

Specialist files must:

- Follow `docs/REQUIREMENTS_FOR_EACH_TASK.md`.
- Mark each item as `Recommendation`, `Accepted existing decision`, `Proposed architecture change` or `Blocker`.
- Separate facts from opinions.
- Name dependencies and assumptions.
- Avoid assigning implementation tasks directly to engineers.
- Avoid changing architecture, routes, content models, dependencies or scope without asking for architect approval.

## Approved specification rules

Each approved specification must include:

- Scope and non-goals.
- Accepted requirements from each specialist.
- Rejected or deferred recommendations with reasons.
- Resolved contradictions.
- Final user experience behavior.
- Final SEO requirements.
- Final content fields and interface contracts.
- Accessibility requirements.
- Performance requirements.
- Analytics events, if applicable.
- Files or modules expected to be touched.
- Acceptance criteria.
- Dependencies and blocked items.

## Approval states

- `Draft`: Architect is still combining specialist inputs.
- `Approved`: Implementation may begin.
- `Approved with open questions`: Implementation may begin only for unaffected parts.
- `Blocked`: Missing decision or dependency prevents implementation.
- `Superseded`: Replaced by a newer approved specification.

## Conflict examples

| Conflict | Default resolution |
| --- | --- |
| UX wants a visually dramatic route change, SEO wants existing URLs preserved | Preserve URL equity unless a redirect plan is approved. |
| UX wants many above-the-fold images, performance wants smaller payload | Keep one prioritized hero image and lazy-load supporting media. |
| Backend proposes database-backed content, architecture says Git-managed content | Reject database for v1 content unless operational data requires it. |
| SEO wants indexable filters, frontend wants client-only filters | Use prerendered landing/category pages for valuable indexable combinations and client filters for exploratory combinations. |

