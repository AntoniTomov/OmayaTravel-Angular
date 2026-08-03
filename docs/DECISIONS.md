# Architecture Decision Record Index

No specialist recommendation is accepted until it appears here with status `Accepted`
or is captured in a full ADR under `docs/adr/`.

Use `docs/ADR_GUIDELINES.md` when creating or reviewing ADRs.

## Decision statuses

- `Proposed`: Under review. Do not implement as a project standard.
- `Accepted`: Approved by the Lead Architect. Implement as the project standard.
- `Rejected`: Reviewed and intentionally not adopted.
- `Superseded`: Replaced by a newer accepted decision.
- `Deferred`: Valid option, but not needed for the current phase.

## Current decisions

| ID | Decision | Status | Owner | Date | Source | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| ADR-001 | Use Angular for the public website with prerendering and SSR where needed | Accepted | Lead Architect | 2026-08-03 | Master plan | Public pages must not be client-only SPA routes. |
| ADR-002 | Manage v1 content through Git using structured files and Markdown | Accepted | Lead Architect | 2026-08-03 | Master plan | No admin panel in v1. |
| ADR-003 | Do not use a database for v1 website content | Accepted | Lead Architect | 2026-08-03 | Master plan | Add PostgreSQL only when operational data requires it. |
| ADR-004 | Use NestJS only for API responsibilities that cannot be prerendered | Accepted | Lead Architect | 2026-08-03 | Master plan | Initial scope: health, forms, Turnstile, email, logging, rate limits. |
| ADR-005 | Use GitHub as the source of truth | Accepted | Lead Architect | 2026-08-03 | Project brief | All deployable changes must trace to commits. |
| ADR-006 | Use Cloudflare as DNS, CDN, WAF and edge security layer | Accepted | Lead Architect | 2026-08-03 | Project brief | Exact paid features remain phase-0 confirmations. |
| ADR-007 | Use Cloudflare R2 for original media storage | Proposed | Lead Architect | 2026-08-03 | Master plan | Pending cost and transformation choice versus Cloudflare Images. |
| ADR-008 | Use pnpm workspace monorepo structure | Accepted | Lead Architect | 2026-08-03 | Master plan | Keep root workspace files synchronized. |
| ADR-009 | Keep English as the v1 primary language | Accepted | Lead Architect | 2026-08-03 | Master plan | Add i18n only after business demand is confirmed. |
| ADR-010 | Use Hostinger only if it supports the required Angular SSR/API deployment model cleanly | Proposed | Lead Architect | 2026-08-03 | Project brief | Must be confirmed during Phase 0. |

## Rejected or deferred complexity

| Topic | Status | Rationale |
| --- | --- | --- |
| Custom admin panel | Deferred | Owner can manage content through code initially. Avoids auth, editor workflows and CMS security surface. |
| Booking engine | Deferred | Not required for the initial SEO/content rebuild. Can be added after enquiry flow proves demand. |
| Online payments | Deferred | Adds compliance, refunds, payment state and booking coupling. Not needed for v1. |
| Customer accounts | Deferred | No v1 workflow requires accounts. |
| CRM inside the app | Deferred | Email and external tools are enough for early enquiries. |
| Multi-language indexed site | Deferred | Global audience does not automatically require immediate multilingual operations. |
| AI travel planner | Deferred | High complexity and unclear conversion value for launch. |

## Specialist proposal approval log

| Proposal | Source file | Status | Architect verdict | Required follow-up |
| --- | --- | --- | --- | --- |
| Homepage UX handoff | `docs/HANDOFFS.md` | Proposed | Not accepted yet because it lists deliverables but not enough implementation-ready detail. | UX specialist must provide section order, mobile navigation behavior, CTA hierarchy and tour-card behavior in a spec file. |
