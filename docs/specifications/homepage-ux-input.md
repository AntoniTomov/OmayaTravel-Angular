# Homepage UX Input

Issue: TBD
Status: Architect input for UI/UX proposal
Requester: Lead Architect
Date: 2026-08-05

## Purpose

Create the UI/UX work order for the Omaya Travel homepage/header/search/enquire experience using the current WordPress site as visual reference, while preserving the approved routing and SEO migration strategy.

This is not an approved implementation specification. UI/UX must turn this into a proposal PR before Angular implementation begins.

## Reference Assets

Stored reference files:

```text
docs/reference/current-site/homepage/landing-hero-current.png
docs/reference/current-site/homepage/search-results-current.png
docs/reference/current-site/homepage/sticky-header-current.png
docs/reference/current-site/homepage/enquire-form-current.png
docs/reference/current-site/homepage/enquire-hero-current.png
docs/reference/current-site/homepage/source-assets.md
```

The raw `.webp` carousel/enquire photographs are not committed to Git because ADR-013 keeps real travel photography in the media pipeline/R2, not in the repository.

## User-Approved Inputs

- Preserve the homepage first viewport concept: top social/contact strip, logo/navigation header, full-bleed carousel hero, central title/subtitle and destination/month search.
- Use the three provided carousel images:
  - `HomePageCoverPhoto-5.webp`
  - `HomePageCoverPhoto-2-e1785918980400.webp`
  - `HomePageCoverPhoto-3.webp`
- Header hover links turn dark yellow/gold, matching the current Enquire Now emphasis.
- Sticky/scrolled header should keep the same general layout as the current site, switching to a light/solid header treatment.
- Mobile header may improve behavior and accessibility, but should preserve the current visual/layout intent.
- Hero search fields:
  - `Where to?`: destination dropdown using existing destinations.
  - `When?`: month dropdown with all 12 months.
  - `Find now`: navigates to the selected destination tour page.
- v1 has one tour per country; destination/month search should route directly to that country's tour page. Date selection happens on the tour page later.
- Site search should cover static content from destinations, tours, pages and blogs. No backend search is required for v1 unless later approved.
- Keep current `/enquire-now/` route for the Enquire Now nav item and page concept.
- Use the current enquire form and enquire hero image/text references as UX inputs.

## Canonical URL Note

An approved canonical URL is the final SEO-safe public URL the rebuild wants users and search engines to treat as the main URL.

Old WordPress URLs may keep working by redirecting with a single-hop `301` to the approved canonical URL. This is how the rebuild preserves SEO value while improving URL quality.

Example:

```text
Old duplicate URL:
/tour-item/safari-tour/

Approved canonical URL:
/tour-item/kyrgyzstan-tour/

Required behavior:
/tour-item/safari-tour/ -> 301 -> /tour-item/kyrgyzstan-tour/
```

For menus and internal links, prefer approved canonical URLs where they already exist in the Angular route skeleton. Redirects preserve old links from Google, old bookmarks and external sites.

## Header Navigation Input

### Top Strip

Current first viewport includes:

- `FOLLOW US:`
- social icons
- phone icon
- `+359 87 996 5946/+359 88 973 5274`

UI/UX should decide exact responsive behavior, spacing and whether top strip remains visible on mobile.

### Main Header Items

Primary nav:

```text
Destinations
Tours
About Us
Inspiring Stories
Enquire Now
Search icon
```

Logo remains left/center-left depending on viewport, matching the current visual intent.

### Destinations Dropdown

Current labels and old links:

| Label | Current WordPress URL | Approved canonical target for v1 internal links |
| --- | --- | --- |
| Algeria | `/tour-item/algeria-desert-expedition-tadrart-rouge/` | `/tour-item/algeria-desert-expedition-tadrart-rouge/` |
| Bulgaria | `/tour-item/bulgaria-trip/` | `/tour-item/bulgaria-beyond-the-ordinary/` |
| Kyrgyzstan | `/tour-item/safari-tour/` | `/tour-item/kyrgyzstan-tour/` |
| Morocco | `/tour-item/morocco-tour/` | `/tour-item/morocco-tour/` |

UX should preserve labels. Angular should use canonical internal targets when implemented. Old URLs remain covered by redirects.

### Tours Dropdown

Current items:

| Label | Current URL | v1 treatment |
| --- | --- | --- |
| Classic Tours | `/classic-tours/` | Keep |
| Women Only | `/women-only-tours/` | Keep |
| Solo Travellers | `/solo-travellers/?preview=true` | Use approved clean route `/solo-travellers-tours/` |
| Private Tours | `/private-tours-your-trip-your-rules/` | Keep |
| All tours / Tour List | `/category/travel/`, `/tour-list-gallery/` | Do not expose as final v1 nav unless Architect later approves a tours hub/list route |
| Calendar 2026 | `/calendar/` | Defer unless Architect approves calendar page |
| Calendar 2027 | `/calendar-2027/` | Defer unless Architect approves calendar page |

UI/UX should recommend whether deferred items are hidden, replaced with a simpler CTA, or grouped as future scope. Do not create indexable v1 pages for excluded/demo routes without Architect approval.

### About Us Dropdown

| Label | URL | v1 treatment |
| --- | --- | --- |
| Our Story | `/our-story/` | Keep |
| Why book with us? | `/why-book-with-us/` | Keep |
| Your DMC Partner in Bulgaria | `/dmc-partner-bulgaria/` | Needs Architect decision: keep, redirect, or defer |
| Contact | `/contact/` | Keep |
| FAQ | `/faq/` | Keep |

### Inspiring Stories Dropdown

| Label | Current URL | v1 treatment |
| --- | --- | --- |
| Blog | `/blog-list-2/` | Current route is excluded/demo unless a real blog index is approved |

UI/UX should propose how the dropdown behaves in v1 if there is no approved blog listing route yet. Individual blog article routes are approved.

### Enquire Now

Keep `/enquire-now/` as the v1 nav route concept.

UX should use:

- `enquire-hero-current.png`
- source image `5.webp`
- `enquire-form-current.png`

Form fields visible in current reference:

- Full name, required
- Email, required
- Phone number with country selector
- Email me checkbox
- Call me via WhatsApp checkbox
- Date of Travel, format shown as `YYYY-MM-DD`
- Additional information textarea
- Consent text with privacy policy link
- Submit button labelled `Contact us`

Backend/API implementation is not approved by this UX input. UX may specify form states and validation, but final backend contract remains a separate Architecture/Backend decision.

## Homepage Hero Input

First viewport:

- full-bleed background carousel
- dark overlay for text contrast
- H1: `See the world. Meet its people`
- Subtitle: `Explore the world's wonders through small-group travel - meaningful, immersive, and carefully curated`
- Central white search panel with two dropdowns and a gold `Find now` button

UI/UX must define:

- carousel timing and controls
- keyboard and reduced-motion behavior
- responsive crop/focal treatment for each image
- mobile stacking behavior for search controls
- loading priority for first hero image
- fallback if JavaScript/carousel interaction is unavailable

## Search Behavior

### Hero Destination/Month Search

Dropdown destinations:

```text
Algeria -> /tour-item/algeria-desert-expedition-tadrart-rouge/
Bulgaria -> /tour-item/bulgaria-beyond-the-ordinary/
Kyrgyzstan -> /tour-item/kyrgyzstan-tour/
Morocco -> /tour-item/morocco-tour/
```

Month dropdown:

```text
January
February
March
April
May
June
July
August
September
October
November
December
```

For v1, selected month may be passed as a query parameter or stored as in-page state only if Angular needs it later. The primary outcome is navigation to the selected country tour page.

UI/UX should specify empty/invalid state:

- destination not selected
- month not selected
- both selected
- keyboard use
- screen-reader label text

### Header Search Icon

Current behavior:

- Click search icon.
- Header transforms into a search input.
- User types query and presses Enter.
- User lands on search results page.

v1 search scope:

```text
destinations
tours
static pages
blog articles
```

No backend search for v1 unless later approved. Angular may use a static content index generated at build time.

UI/UX should specify:

- opened/closed search header state
- Escape behavior
- Enter behavior
- empty query behavior
- no-results state
- result card/list layout
- mobile behavior
- accessibility labels

## UI/UX Deliverable Requested

Create:

```text
docs/specifications/homepage-ux.md
```

The proposal must include:

- homepage section order for at least first viewport and enquire section references
- desktop header behavior
- sticky/scrolled header behavior
- mobile navigation behavior
- dropdown menu behavior
- hero carousel behavior
- hero search behavior
- site search behavior and search results layout
- enquire page/section UX notes
- accessibility requirements
- responsive behavior
- interaction states
- required content/media fields
- deferred items and open decisions

Do not implement Angular code from this input. Angular implementation must wait for an Architect-approved homepage specification.
