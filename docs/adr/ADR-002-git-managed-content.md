# ADR-002: Git-Managed Content

## Status

Accepted

## Date

2026-08-03

## Context

The initial site does not need non-developer content editing. Omaya wants low costs, high performance and low security burden.

## Decision

Manage v1 website content through Git using structured TypeScript or JSON files plus Markdown for long-form content.

Do not build an admin panel for v1.

## Consequences

- Content changes are reviewable, versioned and deployable through GitHub.
- Build-time validation can enforce SEO, link and media requirements.
- Non-technical editors cannot publish directly.
- A CMS or admin panel can be introduced later if publishing volume or team needs justify it.

