# Homepage, Header And Search Approved Specification

Issue: #47
Status: Approved
Date: 2026-08-05
Owner: Lead Architect
Inputs: `docs/specifications/homepage-ux-input.md`, `docs/specifications/homepage-ux.md`

## References

- `docs/reference/current-site/homepage/landing-hero-current.png`
- `docs/reference/current-site/homepage/sticky-header-current.png`
- `docs/reference/current-site/homepage/search-results-current.png`
- `docs/reference/current-site/homepage/enquire-hero-current.png`
- `docs/reference/current-site/homepage/enquire-form-current.png`
- `docs/reference/current-site/homepage/source-assets.md`

## Scope

Angular may implement:

- Shared public header/navigation.
- Homepage first viewport with carousel and trip search.
- Site search open/submit/results UX.
- Enquire page visual/form shell only when backend contract is approved.

Angular must not implement:

- New backend search.
- Enquire form submission/API.
- Calendar, tour-list, blog-index or DMC pages unless separately approved.
- Raw `.webp` source photos in Git.

## Header

- Desktop first viewport keeps current layout: top strip, logo, nav, Enquire Now, search icon over hero.
- Scrolled header becomes compact white/light, matching `sticky-header-current.png`.
- Hover/focus color is Omaya gold/dark yellow.
- Dropdowns open on hover, focus and tap; close on Escape, outside click or link selection.
- Mobile may use drawer/accordion behavior but must preserve current visual intent.
- Top strip is desktop-first; mobile can move phone/social links into the menu.

## Navigation Targets

Destinations:

| Label | Target |
| --- | --- |
| Algeria | `/tour-item/algeria-desert-expedition-tadrart-rouge/` |
| Bulgaria | `/tour-item/bulgaria-beyond-the-ordinary/` |
| Kyrgyzstan | `/tour-item/kyrgyzstan-tour/` |
| Morocco | `/tour-item/morocco-tour/` |

Tours:

| Label | Target |
| --- | --- |
| Classic Tours | `/classic-tours/` |
| Women Only | `/women-only-tours/` |
| Solo Travellers | `/solo-travellers-tours/` |
| Private Tours | `/private-tours-your-trip-your-rules/` |

About:

| Label | Target |
| --- | --- |
| Our Story | `/our-story/` |
| Why book with us? | `/why-book-with-us/` |
| Contact | `/contact/` |
| FAQ | `/faq/` |

Keep `/enquire-now/`. Defer `All tours`, calendars, `/blog-list-2/`, and DMC Partner until separate approval.

## Homepage Hero

- Full-bleed carousel with dark overlay.
- H1: `See the world. Meet its people`
- Subtitle: `Explore the world's wonders through small-group travel - meaningful, immersive, and carefully curated`
- Use the three user-provided carousel photos through the media pipeline.
- Prioritize first slide image. Later slides must not block first render.
- Auto-advance may run at 6-8 seconds, pauses on interaction, and is disabled for reduced motion.
- Keep hero search visually close to current white panel.

## Trip Search

- `Where to?` is required destination dropdown.
- `When?` is optional month dropdown with all 12 months.
- `Find now` navigates to the selected destination tour page.
- If month is selected, do not create indexable month URLs. Pass state/query only if implementation keeps it non-indexable.
- Missing destination error: `Choose where you want to go.`
- Month-only error: `Choose a destination to find a trip.`

## Site Search

- Search covers destinations, tours, static pages and blog articles.
- Use static build-time index for v1. No backend.
- Search icon opens header/overlay search and focuses input.
- Escape closes search and restores focus.
- Enter submits non-empty trimmed query.
- Empty submit stays in place with `Type a search term.`
- Results page title: `Search results for: {query}`.
- Results list includes thumbnail when available, type, title, excerpt and canonical link.
- No-results page links to Destinations, Enquire Now and Contact.

## Enquire Page

- Keep `/enquire-now/`.
- Use current enquire hero/form screenshots as visual references.
- Form shell may include current fields, but submission waits for backend/API approval.
- No promises for response time, payment, deposits, guarantees or badges unless approved content exists.

## Accessibility

- Header, dropdowns, mobile menu, carousel, search and forms must be keyboard usable.
- Icon buttons need accessible names.
- Focus states must work on transparent and white header states.
- Carousel respects reduced motion and pauses on interaction.
- Form labels are visible; errors are associated with fields.
- Mobile tap targets should be at least 44px.

## Acceptance

- Desktop and scrolled header match approved references.
- Mobile navigation is accessible and visually aligned.
- Hero carousel renders first slide fast and remains readable.
- Trip search routes to approved canonical tour URLs.
- Static site search works without backend.
- Deferred links are not exposed as primary navigation.
