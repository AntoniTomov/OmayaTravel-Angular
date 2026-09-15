# Multi-Site Platform

The website now has a first-pass multi-site layer so Omaya and the future Amelia site can share Angular components, form APIs, analytics, newsletter handling, and reusable page sections while keeping brand, theme, navigation, and selected homepage content separate.

## Structure

Site-specific files live in `apps/website/src/sites/`.

```text
apps/website/src/sites/
  site.types.ts
  active-site.ts
  index.ts
  omaya/
    site.config.ts
    theme.scss
    content.ts
  amelia/
    site.config.ts
    theme.scss
    content.ts
```

## What Each File Does

- `site.types.ts` defines the shared contracts for site config, brand, feature flags, theme, and content.
- `index.ts` registers all known sites and sets Omaya as the default site.
- `active-site.ts` detects which site should be active. It currently supports domain detection, an `amelia` hostname fallback, and local preview with `?site=amelia`.
- `omaya/site.config.ts` contains Omaya brand, domain, locale, theme metadata, and feature flags.
- `omaya/content.ts` points Omaya to the existing production content.
- `amelia/site.config.ts` contains Amelia brand, Bulgarian locale, theme metadata, and homepage feature flags.
- `amelia/content.ts` contains Amelia's Bulgarian hero, navigation, destination search options, featured women-only tours, search index, and allowed-route notes.
- `amelia/theme.scss` defines Amelia's palette under `[data-theme='amelia']`.

## Currently Wired

The active site config now controls:

- Header logo and primary navigation
- Document language and `data-theme`
- Homepage hero title, subtitle, and slides
- Homepage trip-search destinations and months
- Which homepage sections are shown
- Featured trip cards
- Search result index
- Footer logo and footer links
- Route access for non-Omaya sites

Omaya remains the default and should keep the current public behavior.

## Amelia Preview

Run the website locally, then open:

```text
http://localhost:4123/?site=amelia
```

The preview choice is stored in local storage so navigation keeps using Amelia. To return to Omaya, clear local storage or open:

```text
http://localhost:4123/?site=omaya
```

In production, Amelia is activated by the exact configured domain `ameliatravel.bg` or `www.ameliatravel.bg`. The host must also be allowed by the SSR server, either through configured site domains, `NG_ALLOWED_HOSTS`, or `OMAYA_ALLOWED_HOSTS`.

The `?site=` preview switch only works on local hosts such as `localhost` and `127.0.0.1`. Production users cannot switch sites with a query parameter.

## Dummy Placeholders To Replace

These are intentionally obvious in code:

- `TODO_DUMMY_AMELIA_LOGO` in `amelia/site.config.ts`: replace Omaya's temporary logo with Amelia logo files.
- `TODO_AMELIA_GA4` in `amelia/site.config.ts`: replace the empty GA4 measurement ID after the Amelia property is created.
- `TODO_DUMMY_AMELIA_MOROCCO_ROUTE` in `amelia/content.ts`: replace the shared Morocco route with a dedicated Morocco women-only detail page when that page exists.

## Site-Aware Runtime Services

The platform resolves a request's active site from the request host. Omaya remains the fallback for unknown hosts.

The active site now controls:

- Canonical host generation
- `robots.txt` sitemap URL
- `sitemap.xml` URL entries
- GA4 measurement ID
- Meta Pixel ID
- Form recipient, sender, reply-to, subject branding, and auto-reply branding
- Mailchimp audience environment variable and tags

Required production environment variables:

```text
RESEND_API_KEY
MAILCHIMP_API_KEY
MAILCHIMP_SERVER_PREFIX
OMAYA_MAILCHIMP_AUDIENCE_ID
AMELIA_MAILCHIMP_AUDIENCE_ID
```

Optional per-site overrides:

```text
OMAYA_MAIL_TO
OMAYA_MAIL_FROM
OMAYA_MAIL_REPLY_TO_FALLBACK
AMELIA_MAIL_TO
AMELIA_MAIL_FROM
AMELIA_MAIL_REPLY_TO_FALLBACK
```

Omaya still falls back to the legacy `MAILCHIMP_AUDIENCE_ID` if `OMAYA_MAILCHIMP_AUDIENCE_ID` is not set. Amelia intentionally does not, so it cannot silently subscribe Amelia users to the Omaya audience.

## Route Access

Omaya uses `enabledRoutes: ['*']`, so all current routes remain available.

Amelia uses an explicit allow-list in `amelia/content.ts`. Direct browser visits to Omaya-only routes are redirected to `/404/`. Legal/privacy routes remain allowed because the shared platform uses analytics and newsletter forms.

## Current Limitation

Server-side rendering now uses the request document URL for domain detection when Angular provides it. If the production host is not selected correctly after the Amelia domain is configured, the next step is passing explicit request context from the Express SSR handler into Angular.

## How To Add Or Change Site Content

Change text and routing in:

```text
apps/website/src/sites/amelia/content.ts
```

Change brand, domain, locale, and enabled homepage sections in:

```text
apps/website/src/sites/amelia/site.config.ts
```

Change Amelia colors in:

```text
apps/website/src/sites/amelia/theme.scss
```

Reusable Angular components should stay in `apps/website/src/app/features` or `apps/website/src/app/shared`, and should read site-specific values through `ActiveSite` instead of hardcoding Omaya text when the component is intended to be shared.
