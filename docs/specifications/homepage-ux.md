# Homepage, Header And Search UX Proposal

Issue: #47
Status: UX specialist proposal
Date: 2026-08-05
Requester: UI/UX Expert
Owner: UI/UX Expert

## Purpose

Define the UX proposal for the Omaya Travel homepage first viewport, hero carousel, header navigation, dropdowns, sticky header, mobile header, homepage trip search, site search and enquire page references.

This is a UX proposal only. It does not implement Angular, approve backend/API behavior, approve final SEO schema, or change accepted route/redirect decisions.

## Inputs

- `docs/EXPERT_COMMUNICATION_PROTOCOL.md`
- `.github/PULL_REQUEST_TEMPLATE.md`
- `docs/specifications/homepage-ux-input.md`
- `docs/reference/current-site/homepage/landing-hero-current.png`
- `docs/reference/current-site/homepage/sticky-header-current.png`
- `docs/reference/current-site/homepage/search-results-current.png`
- `docs/reference/current-site/homepage/enquire-hero-current.png`
- `docs/reference/current-site/homepage/enquire-form-current.png`
- `docs/reference/current-site/homepage/source-assets.md`
- `docs/specifications/routing-and-redirects-approved.md`
- Current Omaya visual tokens and brand direction already captured in project context

## UX Objectives

- Preserve the current homepage first impression: social/contact strip, logo/navigation header, full-bleed travel hero, central headline and destination/month search.
- Make the header easier to understand, use and maintain without changing Omaya's visual identity.
- Route homepage search toward real v1 tour pages instead of demo, filter or plugin URLs.
- Keep the enquiry path conversational and low-pressure, not a checkout.
- Improve accessibility and mobile usability while staying visually close to the current WordPress direction.
- Avoid exposing excluded WordPress demo/search/calendar routes as v1 navigation destinations.

## Primary Visitors

Primary visitors are English-speaking travelers from the US and UK, age 20-45, with medium travel budgets. They may travel solo, as couples or with friends.

They are motivated by depth, cultural understanding and real connection. They are wary of generic group travel, forced fun, feeling like an outsider, or being expected to perform adventure rather than experience a place meaningfully.

## Homepage Section Order

Minimum v1 homepage section order:

1. Top social/contact strip
2. Main header and navigation
3. Full-bleed hero carousel with destination/month trip search
4. Travel-match positioning section
5. Featured tours or destination routes
6. Tour styles: Classic, Women-only, Solo Travellers, Private Tours
7. Why travel with Omaya trust section
8. Private/custom enquiry prompt
9. Inspiring stories preview when a real blog/story listing is approved
10. Newsletter or soft contact prompt if content/consent flow is approved
11. Final enquiry CTA
12. Footer

This proposal focuses on items 1-4 and the search/enquiry behaviors needed by issue #47. Later homepage sections can reuse existing Omaya visual patterns from destination cards, tour cards, editorial headings and dark footer treatment.

## First Viewport Requirements

The first viewport must include:

- Top strip with `FOLLOW US:`, social links and phone numbers on desktop.
- Main header with Omaya logo, primary navigation, Enquire Now and site search icon.
- Full-bleed carousel image from the approved media pipeline.
- Dark overlay for text contrast.
- H1: `See the world. Meet its people`
- Subtitle: `Explore the world's wonders through small-group travel - meaningful, immersive, and carefully curated`
- Central search panel with `Where to?`, `When?` and `Find now`.

The first viewport should leave a small visual hint of the next section on common desktop and mobile heights when practical, but not at the cost of making the search panel cramped.

## Header Information Architecture

Desktop primary navigation:

| Item | Behavior | Recommended internal target |
| --- | --- | --- |
| Logo | Link | `/` |
| Destinations | Dropdown | No direct required click target unless destination hub is approved in implementation spec |
| Tours | Dropdown | No direct required click target unless a tour hub is approved in implementation spec |
| About Us | Dropdown | No direct required click target |
| Inspiring Stories | Dropdown or direct link depending on approved blog index decision | See deferred decisions |
| Enquire Now | Direct link | `/enquire-now/` |
| Search icon | Opens site search state | Search overlay/header state |

Navigation labels should remain uppercase and visually close to the current site. Hover and active states use the brand gold/dark-yellow treatment already approved by user input.

## Top Strip

Desktop behavior:

- Keep the dark top strip above the main header on the first viewport.
- Align social/contact content centrally or within the same max-width as the main header.
- Keep `FOLLOW US:` and social icons visually compact.
- Phone numbers remain visible as text links using `tel:` targets when global company content confirms final numbers.

Mobile behavior:

- Do not force the full top strip above the mobile hero if it consumes too much vertical space.
- Recommended mobile treatment: hide `FOLLOW US:` and social icons in the collapsed header, but expose them in the mobile menu footer.
- Phone contact may appear as a compact icon link in the mobile menu or top row if approved.

UX constraint:

- Do not invent new social channels or phone numbers.

## Desktop Header Behavior

Initial hero state:

- Header sits over the hero image with transparent/dark overlay treatment matching the current homepage.
- Logo remains visible against the hero.
- Navigation text is white or high-contrast.
- Enquire Now should be emphasized through placement and hover state rather than becoming a separate visual style that breaks the current header.

Hover/focus behavior:

- Header nav items expose dropdowns on hover and keyboard focus.
- Focus state must be visible and not color-only.
- Dropdowns should remain open while pointer or keyboard focus is inside them.
- Escape closes the active dropdown.

Search icon:

- Opens the site-search state without navigating immediately.
- When search opens, focus moves into the search input.

## Sticky And Scrolled Header

Scrolled state:

- Header becomes solid/light, matching `sticky-header-current.png`.
- Logo changes or remains visible as needed for contrast.
- Navigation text switches to dark brand text.
- Hover/focus remains brand gold/dark-yellow.
- Header should avoid layout shift when changing from transparent to sticky state.

Top strip scrolled behavior:

- Top strip should collapse away after scroll on desktop unless implementation testing shows the current layout depends on it.
- Sticky header height should remain compact enough that it does not dominate laptop screens.

UX notes:

- Sticky header must not cover anchor targets without scroll-margin handling in implementation.
- Sticky header must not cover search results, dropdowns or form error messages.

## Dropdown Menu Behavior

General behavior:

- Dropdowns open on hover, focus and tap.
- Dropdowns close on Escape, outside click or selecting a link.
- On desktop, dropdowns appear below the header with a clean white or dark panel matching current visual direction.
- On mobile, dropdowns become expandable menu groups.
- Do not expose disabled/deferred links as normal clickable links.

Destinations dropdown:

| Label | Canonical internal target |
| --- | --- |
| Algeria | `/tour-item/algeria-desert-expedition-tadrart-rouge/` |
| Bulgaria | `/tour-item/bulgaria-beyond-the-ordinary/` |
| Kyrgyzstan | `/tour-item/kyrgyzstan-tour/` |
| Morocco | `/tour-item/morocco-tour/` |

UX note: labels should remain destination names. Although these currently route to tour pages in v1, the user-facing label is still destination-led because v1 has one tour per country.

Tours dropdown:

| Label | Recommended v1 treatment |
| --- | --- |
| Classic Tours | Link to `/classic-tours/` |
| Women Only | Link to `/women-only-tours/` |
| Solo Travellers | Link to `/solo-travellers-tours/` |
| Private Tours | Link to `/private-tours-your-trip-your-rules/` |
| All tours / Tour List | Defer unless Architect approves a tours hub/list route |
| Calendar 2026 | Defer unless Architect approves a calendar page |
| Calendar 2027 | Defer unless Architect approves a calendar page |

Recommendation: v1 Tours dropdown should contain only the four approved commercial tour-style routes. Calendar and tour-list/demo items should not appear in primary nav until their canonical destinations are approved.

About Us dropdown:

| Label | Recommended v1 treatment |
| --- | --- |
| Our Story | Link to `/our-story/` |
| Why book with us? | Link to `/why-book-with-us/` |
| Your DMC Partner in Bulgaria | Defer or hide until Architect decides keep/redirect/defer |
| Contact | Link to `/contact/` |
| FAQ | Link to `/faq/` |

Inspiring Stories:

- If a real blog/story index is approved before implementation, link the nav item to that route.
- If no blog index is approved, show a small dropdown with the approved individual article links or hide the dropdown and defer the nav item.
- Do not link to `/blog-list-2/` as an approved v1 internal URL because it is identified as a demo/excluded route.

Enquire Now:

- Keep `/enquire-now/` as the nav route concept.
- This route should be treated as the high-intent conversation path, not a checkout.

## Mobile Header Behavior

Mobile header layout:

- Compact sticky header with logo, menu button and optional search icon.
- The menu button must have an accessible label such as `Open menu`.
- Menu opens a full-height drawer or panel.
- Drawer includes primary nav groups, Enquire Now CTA, search access and contact/social links.

Mobile menu behavior:

- Destinations, Tours, About Us and Inspiring Stories are expandable groups.
- Only one group may be expanded at a time unless usability testing shows multiple-open is clearer.
- Escape closes the drawer when keyboard is attached.
- Tapping outside closes the drawer if the drawer is not full-screen.
- Body scroll should be locked while the drawer is open.

Mobile search:

- Search may be inside the drawer or opened from the mobile header.
- When opened, focus moves to the input.
- Search results should not be squeezed into the nav drawer; Enter navigates to the search results page or shows a full-screen results view.

Mobile top strip:

- Hide the desktop top strip from the mobile first viewport.
- Put phone and social links in the drawer footer.

## Hero Carousel UX

Images:

- Use the three provided carousel images through the approved media pipeline, not raw `.webp` commits.
- Future media keys should follow `docs/reference/current-site/homepage/source-assets.md`.
- The first slide image should be prioritized for loading.
- Later slide images should not block first content paint.

Carousel timing:

- Auto-advance may be used after 6-8 seconds.
- Pause auto-advance on hover, focus within hero controls, open dropdown/search interaction, or when the user changes slides manually.
- Respect `prefers-reduced-motion`: disable auto-advance and crossfade/slide motion when reduced motion is requested.

Controls:

- Provide previous/next controls on desktop if they can be styled subtly without disrupting the current hero.
- Provide slide indicators only if visually minimal.
- Controls must have accessible labels.

Fallback:

- If JavaScript is unavailable, render the first hero image, H1, subtitle and search form/link fallback.
- The page must still communicate Omaya's positioning without carousel behavior.

Responsive crop:

- Preserve people/faces where present.
- Use focal points in media metadata when available.
- On mobile, crop for the central people/landscape story rather than keeping the entire desktop frame.
- Avoid placing hero text directly over faces.

## Hero Search UX

Fields:

- `Where to?`: required destination dropdown.
- `When?`: optional month dropdown with all 12 months.
- `Find now`: primary action.

Destination options and canonical targets:

| Destination | Target |
| --- | --- |
| Algeria | `/tour-item/algeria-desert-expedition-tadrart-rouge/` |
| Bulgaria | `/tour-item/bulgaria-beyond-the-ordinary/` |
| Kyrgyzstan | `/tour-item/kyrgyzstan-tour/` |
| Morocco | `/tour-item/morocco-tour/` |

Month options:

January, February, March, April, May, June, July, August, September, October, November, December.

Behavior:

- Destination is required to navigate.
- Month may be optional in v1 because date selection happens on the tour page.
- If destination is selected and month is not selected, `Find now` navigates to the destination's canonical tour URL.
- If both are selected, `Find now` navigates to the destination's canonical tour URL and may pass month context only if the approved implementation spec allows a non-indexable query or state handoff.
- If only month is selected, show inline error: `Choose a destination to find a trip.`
- If neither field is selected, show inline error: `Choose where you want to go.`

UX recommendation:

- Do not make the month field feel mandatory in v1. Use placeholder `Any month` or keep `When?` but allow empty.
- Avoid sending users to a generic search/filter URL for v1 because one country maps to one tour.
- Do not create indexable URLs for month combinations.

Desktop layout:

- Keep the current white horizontal search panel.
- Two dropdowns and one gold button.
- Maintain large clickable/tappable fields.

Mobile layout:

- Stack fields vertically in the white search panel.
- Button spans full width.
- Panel should not cover the entire hero image; keep the H1 and subtitle readable.
- Use native select behavior or a simple accessible custom select.

Accessibility:

- Each field needs a persistent accessible label, not placeholder-only labeling.
- Errors must be announced and placed near the relevant field.
- Keyboard order: destination, month, submit.

## Site Search UX

Scope:

- Destinations
- Tours
- Static pages
- Blog articles

Implementation assumption:

- v1 can use a static build-time index. No backend search is required unless later approved.

Header search open state:

- Clicking the search icon transforms the header into a search state or opens a compact overlay.
- Input receives focus immediately.
- Placeholder: `Search tours, destinations and stories`.
- Escape closes search and restores focus to the search icon.
- Close button must be available and labeled.

Enter behavior:

- Non-empty query submits to a search results page or approved search results route.
- Empty query should not navigate; show `Type a search term.` or keep focus in the field.
- Query should be trimmed.

Results page layout:

- Keep the current broad hero/search-results visual mood but reduce wasted vertical space on mobile.
- Page title: `Search results for: {query}`.
- Include a new-search input near the top.
- Results appear as a vertical list with image thumbnail when available, title, type label, short excerpt and link.
- Prioritize exact title/destination/tour matches before broad content matches.

No-results state:

- Show `No results found for "{query}".`
- Offer direct links to Destinations, Enquire Now and Contact.
- Include a new-search field.

Mobile behavior:

- Results list stacks.
- Thumbnails should not be tiny if they carry important destination context; use full-width or generous left thumbnails.
- Search input remains easy to reach after landing.

Accessibility:

- Search icon button label: `Open site search`.
- Search input label: `Search Omaya Travel`.
- Results count should be announced in visible text.
- Do not rely on icon-only submit without label.

## Enquire Page UX References

Route:

- Keep `/enquire-now/` as the nav route concept.
- Old/current URLs should remain handled by redirect rules where applicable.

Hero:

- Use `enquire-hero-current.png` and source image `5.webp` as visual references.
- Raw `.webp` source photos must not be committed.
- Enquire page hero should feel connected to the homepage hero but slightly calmer and more form-focused.

Page objective:

- Invite a conversation about the right trip or private/custom variation.
- Reassure that enquiry is not immediate payment or checkout.
- Explain next steps only using approved business content.

Current form fields to preserve or refine:

- Full name, required
- Email, required
- Phone number with country selector
- Email me checkbox
- Call me via WhatsApp checkbox
- Date of Travel with clear date format or picker
- Additional information textarea
- Consent text with privacy policy link
- Submit button, currently `Contact us`

UX recommendations:

- Add a trip-interest field only if the approved form/backend contract supports it.
- Keep phone optional unless business policy requires it.
- The WhatsApp checkbox should be disabled or show an inline requirement until a valid phone number is entered.
- Consent text should distinguish enquiry follow-up from marketing subscription if email marketing is optional.
- Privacy policy link must point to `/privacy-policy/`.
- Submit button can remain `Contact us`, but `Send enquiry` may be clearer if approved later.

States:

- Required field errors appear below fields.
- Invalid email and invalid phone errors are specific.
- Success state confirms receipt without promising unapproved response times.
- Failure state provides fallback contact options only from approved company content.

## Required Content And Media Fields

Homepage hero content:

- H1
- Subtitle
- Carousel media references for three approved images
- Destination dropdown labels and canonical targets
- Month labels

Header content:

- Logo media reference
- Top strip social/contact links from approved company content
- Primary nav labels
- Dropdown labels and canonical internal targets
- Search icon/action label

Search content:

- Search result title
- Search result type label
- Excerpt/summary
- Thumbnail when available
- Canonical URL

Enquire page content:

- Hero image media reference
- Hero title/subtitle from approved copy
- Form labels and helper text
- Consent/privacy copy
- Success/failure messages

## Redirect And Canonical Notes

- Internal links should use approved canonical targets where known.
- Old WordPress URLs should remain covered by single-hop redirects, not recreated as user-facing canonical links.
- Do not expose `/solo-travellers/?preview=true`, `/blog-list-2/`, `/tour-list-gallery/`, `/category/travel/`, `/calendar/` or `/calendar-2027/` in primary navigation unless Architect later approves their v1 route treatment.
- Destination dropdown old links for Bulgaria and Kyrgyzstan should internally use canonical targets:
  - `/tour-item/bulgaria-trip/` redirects to `/tour-item/bulgaria-beyond-the-ordinary/`
  - `/tour-item/safari-tour/` redirects to `/tour-item/kyrgyzstan-tour/`

## Accessibility Requirements

- Header, dropdowns, carousel controls, search, mobile drawer and enquiry form must be keyboard usable.
- Focus states must be visible in both transparent and sticky header states.
- Dropdown menus must not require hover only.
- Mobile menu button must announce open/closed state.
- Carousel must pause for user interaction and respect reduced motion.
- Hero text contrast must remain readable across all slides.
- Form labels must be persistent and visible.
- Error messages must be programmatically associated with fields in implementation.
- Icon buttons need accessible names.
- Tap targets should be at least 44px on mobile.

## Interaction States

Header:

- Default over-hero
- Hover/focus
- Dropdown open
- Search open
- Sticky/scrolled
- Mobile drawer open

Hero carousel:

- Loading first image
- Slide active
- Paused
- Reduced-motion static
- Image unavailable fallback

Hero search:

- Empty
- Destination selected
- Month selected
- Both selected
- Missing destination error
- Submit/navigate

Site search:

- Closed
- Open input focused
- Empty submit
- Results
- No results
- Error/fallback

Enquire form:

- Empty
- Partially complete
- Validation error
- Submitting
- Success
- Failure with fallback contact path

## Deferred Items And Open Decisions

- Whether a real blog/story index route exists for `Inspiring Stories`.
- Whether a tours hub/list route is approved for an `All tours` link.
- Whether `/calendar/` and `/calendar-2027/` are kept, redirected or deferred.
- Whether `Your DMC Partner in Bulgaria` remains in the About dropdown.
- Final backend/API contract for `/enquire-now/` form submission.
- Final search results route name and whether search query appears in URL.
- Final approved response-time, payment, deposit, guarantee, testimonial and badge content.
- Final media keys and focal points after media pipeline approval.

## Acceptance Criteria Mapping

| Requirement | Status |
| --- | --- |
| Homepage section order for first viewport and enquire references | Met. |
| Desktop header behavior | Met. |
| Sticky/scrolled header behavior | Met. |
| Mobile navigation behavior | Met. |
| Dropdown menu behavior | Met. |
| Hero carousel behavior | Met. |
| Hero search behavior | Met. |
| Site search behavior and search results layout | Met. |
| Enquire page/section UX notes | Met. |
| Accessibility requirements | Met. |
| Responsive behavior | Met. |
| Interaction states | Met. |
| Required content/media fields | Met. |
| Deferred items and open decisions | Met. |
