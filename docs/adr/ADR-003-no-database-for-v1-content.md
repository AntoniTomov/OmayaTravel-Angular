# ADR-003: No Database for V1 Website Content

## Status

Accepted

## Date

2026-08-03

## Context

The initial rebuild is content-led: pages, tours, destinations, blog articles and static company information. These do not require runtime persistence.

## Decision

Do not use a database for v1 website content.

Introduce PostgreSQL later only when Omaya needs operational data such as bookings, payments, customer accounts, enquiry history, inventory or editorial workflows.

## Consequences

- Lower launch cost and operational complexity.
- Fewer backup, migration and security responsibilities.
- The backend remains focused on forms and integrations.
- Content models must be designed so a future data source can replace files without changing page components.

