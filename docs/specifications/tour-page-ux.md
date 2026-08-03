# Tour Page UX Proposal

Issue: #13
Status: UX specialist proposal
Date: 2026-08-03
Requester: UI/UX Expert
Owner: UI/UX Expert

## Purpose

Define the information hierarchy, conversion path, mobile behavior and trust requirements for Omaya Travel tour detail pages.

This is a UX specification only. It does not authorize Angular implementation and does not change approved architecture, routing, content models or SEO decisions.

## Inputs

- `docs/specifications/core-content-models-approved.md`
- `docs/adr/ADR-012-core-content-models.md`
- `docs/specifications/routing-and-redirects-approved.md`
- `docs/audits/current-site-url-inventory.md`
- `docs/audits/current-site-url-inventory.csv`
- Current Omaya homepage crawl from `https://omayatravel.com/`
- Customer brief from project owner: US/UK travelers, ages 20-45, medium budget, solo/couples/friends, motivated by depth and real connection, afraid of forced fun, outsider feeling and not being adventurous enough
- Competitor reference: Flash Pack, especially age-fit framing, review prominence, confidence messaging and practical payment/deposit reassurance

## Page Objective

The tour page must turn a curious visitor into a qualified enquiry for a specific journey.

It should help the visitor answer five questions quickly:

1. Is this trip for people like me?
2. Will I understand the place rather than just see it?
3. Will the group dynamic feel natural rather than forced?
4. Are the dates, price, pace and inclusions clear enough to continue?
5. Can I enquire safely without being pressured into a full booking?

## Primary Visitor

Primary visitor: English-speaking traveler from the US or UK, age 20-45, medium budget, traveling solo, as a couple or with friends.

Primary motivation: meaningful cultural immersion, local connection, emotional depth, small groups and a trip that feels curated rather than generic.

Primary anxieties:

- Being trapped in forced fun or party-focused group travel.
- Feeling like an outsider in the group or destination.
- Feeling judged for not being adventurous enough.
- Not knowing whether the advertised departure is truly available.
- Worrying that enquiry means immediate payment commitment.

## Primary CTA

Primary CTA: `Enquire about this tour`

Behavior:

- Links to the tour's `enquiryPath`.
- Carries the selected tour context.
- If a departure is selected, carries departure ID/date context.
- If no departure is selected, opens enquiry with the tour preselected and date preference empty.
- Copy must imply a conversation, not an instant payment commitment.

## Secondary CTAs

Secondary CTAs:

- `View available dates`
- `Ask a question`
- `Download itinerary` if a future approved content/file model supports it
- `Explore private version` when `styles` includes `private` or when custom/private adaptation is offered
- `Compare with similar tours` when related tours are available

Secondary CTAs must never visually compete with the primary enquiry CTA.

## Above The Fold

Above the fold must contain:

- Breadcrumbs: Home, destination, tour title.
- Hero image from `heroImage`.
- Tour style label from `styles`, for example Classic, Women-only, Solo, Private or Custom.
- H1 from `title`.
- One short value proposition adapted from `summary`.
- Key facts: destination, duration, price from, difficulty if present, group style, availability state.
- Primary CTA: `Enquire about this tour`.
- Secondary CTA: `View available dates`.
- Trust line: `Small-group journeys for curious travelers, with a response within 24 hours.`

Above the fold should not include a full booking form. The first step is confidence and qualification, not data entry.

## Section Order

1. Hero and key decision panel
2. Quick reassurance strip
3. Tour overview
4. Highlights
5. Departures and calendar interaction
6. Day-by-day itinerary
7. What is included and excluded
8. Pace, comfort and group-fit guidance
9. Gallery
10. Enquiry panel
11. Practical FAQ
12. Related tours or tour comparison
13. Final trust and contact CTA

## Required Content By Section

### 1. Hero And Key Decision Panel

Objective: Confirm the visitor is on the right tour and give enough practical information to continue.

Required content:

- `title`
- `summary`
- `heroImage`
- `destinationIds` presented as destination names
- `styles`
- `durationDays`
- `priceFrom` if available
- `difficulty` if available
- departure summary derived from `departures`
- primary and secondary CTAs

UX notes:

- Keep the current Omaya visual direction: photographic hero, Roboto Slab heading, warm yellow primary CTA, dark brand accents.
- Avoid heavy overlays that make photography hard to inspect.
- Do not show vague labels like "from" without currency code. Use `EUR 1,320 from`.
- If multiple styles exist, label them as traveler-fit signals, not internal categories.

### 2. Quick Reassurance Strip

Objective: Reduce the fear of the wrong social fit.

Required content:

- Age fit: `For curious travelers in their 20s-40s`.
- Group promise: `Small groups, no forced fun`.
- Depth promise: `Local encounters and cultural context`.
- Operational promise: `We reply within 24 hours`.

Trust elements:

- Licensed travel company link to `/omaya-travel-license/`.
- Contact route link to `/contact/`.

### 3. Tour Overview

Objective: Explain why this journey exists and what kind of traveler it rewards.

Required content:

- `summary`
- Optional long-form content from `contentPath` if provided.
- Destination names from `destinationIds`.

UX notes:

- Lead with emotional clarity: what the traveler will understand, not just what they will see.
- Avoid party-travel language.
- Include a short "This is for you if..." block with 3-4 statements.
- Include a short "This may not be for you if..." block when pace, comfort, fitness or remoteness could be a mismatch.

### 4. Highlights

Objective: Make the trip memorable and scannable.

Required content:

- `highlights`

UX notes:

- Present highlights as specific experiences, not generic nouns.
- Use 4-7 items on desktop.
- On mobile, avoid carousel-only access. All highlights must be visible by scrolling.

### 5. Departures And Calendar Interaction

Objective: Make availability clear and let the visitor choose a date before enquiring.

Required content:

- `departures`
- `Departure.startDate`
- `Departure.endDate` if present
- `Departure.status`
- `Departure.price` if present, otherwise fall back to `priceFrom`
- `Departure.notes` if present

Status labels:

- `available`: Available
- `limited`: Few places left
- `sold-out`: Sold out
- `on-request`: On request

Calendar behavior:

- The default view should list upcoming departures first, then offer a calendar/month view.
- Available and limited departures are selectable.
- Sold-out departures are visible but disabled, with a link to enquire about alternatives.
- On-request departures are selectable as an enquiry context but must not imply confirmed inventory.
- If the user selects a departure, the primary CTA changes to `Enquire for selected date`.
- Selected departure details remain visible near the CTA.
- Month navigation must not hide all context; the selected tour title and CTA remain available.

Mobile behavior:

- Use a compact departure list before a month grid.
- Month grid cells must be at least 44px high/wide when interactive.
- Do not rely on color alone for status. Use text labels and/or icons.
- Sticky bottom CTA shows selected date if present.

Empty state:

- If `departures` is missing or empty, show: `Dates are arranged on request for this tour.`
- Primary CTA remains `Enquire about this tour`.
- Secondary CTA becomes `Ask about dates`.
- Do not show an empty calendar.

### 6. Day-By-Day Itinerary

Objective: Prove depth and pacing.

Required content:

- `itinerary.day`
- `itinerary.title`
- `itinerary.description`
- `itinerary.meals` if present
- `itinerary.accommodation` if present

UX notes:

- Display as an accordion or timeline.
- First two days may be expanded by default on desktop.
- On mobile, collapse all except day 1, but keep day titles visible.
- Include visible anchors so direct links can move to a specific itinerary day later if approved.
- Meals and accommodation should appear as calm metadata below each day, not as the main copy.

### 7. Included And Excluded

Objective: Remove pricing ambiguity.

Required content:

- `included`
- `excluded`
- `priceFrom`
- departure-specific `price` when available

UX notes:

- Use two balanced columns on desktop.
- Stack included first, excluded second on mobile.
- If one list is missing, show a short on-request explanation rather than a blank column.
- Clearly state that deposit/payment terms are confirmed after enquiry until backend/payment policy is approved.

### 8. Pace, Comfort And Group Fit

Objective: Prevent poor-fit enquiries and reduce anxiety.

Required content:

- `difficulty` if present
- `durationDays`
- style-specific explanation from `styles`
- relevant long-form content from `contentPath` if available

Recommended copy themes:

- "You do not need to be an extreme adventurer."
- "Expect curiosity, flexibility and respect for local rhythm."
- "Small group does not mean forced activities every minute."

UX notes:

- This section is especially important for solo and women-only tours.
- It should answer what the group dynamic feels like before asking for personal details.

### 9. Gallery

Objective: Build desire while proving the trip is real.

Required content:

- `gallery` if present
- `heroImage` may appear only if no gallery exists

UX notes:

- Prioritize real destination and experience photography over generic scenery.
- Captions should explain context where available.
- Meaningful alt text is required by the media model.
- Do not load the full gallery above the fold.

### 10. Enquiry Panel

Objective: Turn interest into a low-friction lead.

Required content:

- `enquiryPath`
- selected departure context if present
- tour title and destination names

Enquiry journey:

1. Visitor clicks primary CTA.
2. If no departure selected, they land on or open enquiry with the tour preselected.
3. If a departure is selected, selected date/status/price are carried forward.
4. Form explains response within 24 hours.
5. Form explains deposit is typically around 20-30% after confirmation, not during initial enquiry.
6. Success state confirms what happens next.

Recommended form fields:

- Name
- Email
- Country
- Number of travelers
- Preferred departure or flexible dates
- Travel style interest: classic, private, women-only, solo, custom
- Short message

UX notes:

- Keep phone optional.
- Do not ask for passport, payment details or full address at enquiry stage.
- Use one page or a short progressive form, not a long intimidating checkout.

### 11. Practical FAQ

Objective: Answer the objections that stop enquiry.

Required content:

- FAQ content from `contentPath` if available.
- If no tour-specific FAQ exists, use approved global FAQ links only.

Recommended questions:

- Who is this trip best for?
- What is the usual group size?
- Can I join alone?
- How adventurous do I need to be?
- What happens after I enquire?
- Is the departure guaranteed?
- What deposit is required?
- Can this tour be private?
- What is included in the price?

UX notes:

- FAQs should be visible content, not hidden in an off-page modal.
- Tour-specific answers must not contradict global FAQ, payment or legal pages.

### 12. Related Tours Or Comparison

Objective: Keep visitors moving if this tour is close but not perfect.

Required content:

- Related tours from same destination or same `styles`, once content relationships are available.
- Existing model fields: title, destination, duration, style, price from, departure availability.

Comparison behavior:

- Show 2-3 related tours.
- Compare by destination, duration, style, price from, difficulty and next available date.
- Include `View tour` and `Enquire` actions.
- Do not create indexable filtered/search URLs from comparison interactions.

### 13. Final Trust And Contact CTA

Objective: Give a final confident next step.

Required content:

- Contact route `/contact/`
- License/trust route `/omaya-travel-license/`
- Response time
- Phone/email if approved in global company content

UX notes:

- Use a calm final CTA: `Tell us what you are looking for`.
- Mention that Omaya can help choose the right fit if the visitor is unsure.

## Tour Model Field Placement

| Field | UX placement |
| --- | --- |
| `id` | Internal only; not displayed. |
| `slug` | Internal routing/content reference only; not displayed. |
| `title` | H1, enquiry summary, related-tour card title. |
| `status` | Internal publishing state; archived/draft tours must not render as public pages. |
| `destinationIds` | Hero facts, breadcrumbs, overview, related-tour context. |
| `styles` | Hero label, group-fit section, enquiry form preselection, related-tour comparison. |
| `summary` | Hero supporting copy and overview lead. |
| `durationDays` | Hero facts, pace/group-fit section, related-tour comparison. |
| `difficulty` | Hero facts when present, pace/group-fit section, comparison. |
| `heroImage` | Hero media; fallback gallery image if gallery missing. |
| `gallery` | Gallery section; omitted gracefully if missing. |
| `highlights` | Highlights section. |
| `itinerary` | Day-by-day itinerary section. |
| `included` | Included/excluded section. |
| `excluded` | Included/excluded section. |
| `departures` | Departures/calendar section and selected enquiry context. |
| `priceFrom` | Hero facts and pricing context; fallback when departure price is missing. |
| `enquiryPath` | Primary CTA target. |
| `seo` | Not a UX display element except title/description influence may align with visible copy. SEO implementation belongs to SEO/approved spec. |
| `contentPath` | Source for long-form overview, FAQ, practical notes and style-fit copy. |

## Desktop Behavior

- Use a two-column decision area after the hero: main story/content on the left, sticky key facts and CTA panel on the right.
- Sticky panel should stop before footer and must not overlap itinerary or forms.
- Keep the CTA visible after the visitor scrolls past the hero.
- Itinerary can use accordion/timeline behavior.
- Calendar can show a departure list plus optional month grid.
- Gallery can use grid plus lightbox if approved later, but core images must remain accessible without relying on a modal.

## Mobile Behavior

- Hero stacks: image, style label, title, summary, key facts, CTA.
- Use a sticky bottom CTA after the first screen.
- Sticky CTA states:
  - No date selected: `Enquire`
  - Date selected: `Enquire - {date}`
  - Sold out selected/not selectable: `Ask about alternatives`
- Key facts collapse into a compact grid.
- Departure list appears before month-grid calendar.
- Itinerary is collapsed by day with clear tap targets.
- Included/excluded lists stack.
- Avoid horizontal scrolling except intentional image galleries.
- Inputs and select controls must be full-width with clear labels.

## Trust Elements

Required trust elements:

- License link: `/omaya-travel-license/`
- Response time: within 24 hours
- Clear deposit expectation: usually around 20-30% after confirmation
- Contact options: email and phone when global company content is approved
- Transparent included/excluded lists
- Visible sold-out/on-request states
- Links to `/why-book-with-us/`, `/our-story/` and `/faq/`

Recommended future trust elements:

- Verified customer testimonials when available.
- Guide/team profiles for key destinations.
- Partner/local expert notes.
- Press or association badges only when accurate and approved.
- Real traveler photos with permission.

Do not invent reviews, ratings, badges or partner claims.

## Potential Points Of Confusion

- `tour-item` in URLs is legacy wording and should not appear as user-facing page language.
- "Available" must distinguish between selectable inventory and "on request".
- "Enquire" must not feel like a full checkout or immediate payment.
- Solo, women-only, classic and private are traveler-fit categories; visitors may not understand how they differ unless explained.
- Difficulty labels can increase anxiety if they are not defined in human terms.
- Price from can feel misleading if inclusions, exclusions and deposit process are unclear.
- Missing departure dates must not look like a broken calendar.
- Sold-out dates should not be hidden because hiding them reduces trust.
- Current WordPress booking utility pages must not be recreated as confusing indexable booking pages.

## Accessibility UX Requirements

- Primary CTA and all calendar/date controls must be keyboard reachable.
- Interactive targets must be at least 44px on mobile.
- Color cannot be the only indicator of availability status.
- Accordions must expose expanded/collapsed state.
- Form inputs must have persistent visible labels.
- Error messages must be specific and placed next to the relevant field.
- The sticky CTA must not cover form fields, footer links or cookie controls.
- Image alt text must describe meaningful travel content, not repeat "image" or file names.
- Heading order must be logical: one H1, then section H2s, then subsection H3s.
- Users must be able to understand enquiry next steps without reading a modal-only message.

## Empty And Error States

Missing `gallery`:

- Hide gallery section or show a small curated image strip using `heroImage`; do not show empty placeholders.

Missing `included` or `excluded`:

- Replace the missing list with `Details confirmed during enquiry.` when accurate.

Missing `priceFrom`:

- Show `Price on request` and explain that price depends on date, group size or private customization.

Missing `departures`:

- Show dates-on-request state, keep enquiry CTA active, hide calendar grid.

All departures sold out:

- Show sold-out departure history if useful, then CTA `Ask about future dates`.

Form/API unavailable:

- Show a clear fallback: email and phone contact.
- Preserve selected tour/departure details in the message if possible.

## Analytics Events To Support UX Review

Recommended events:

- Tour page viewed
- Hero CTA clicked
- Available dates clicked
- Departure selected
- Sold-out alternative clicked
- Enquiry started
- Enquiry submitted
- FAQ opened
- Included/excluded viewed
- Related tour clicked
- Phone link clicked
- Email link clicked

These events should be implemented only after analytics tooling and consent approach are approved.

## Handoff Notes

- This proposal assumes v1 remains enquiry-led, not instant booking or online payment.
- `enquiryPath` defaults to `/contact/` under the approved content model unless a future approved enquiry route exists.
- Tour detail routes must remain `/tour-item/{slug}/` for v1 according to the approved routing specification.
- Filter/search/calendar interactions on tour pages must not create indexable crawl traps.
- The final approved implementation spec should reconcile this UX proposal with SEO issue #14 before Angular implementation.

## Acceptance Criteria Mapping

| Requirement | Status |
| --- | --- |
| Every tour-model field has a defined presentation location | Met in "Tour Model Field Placement". |
| Mobile CTA behavior is defined | Met in "Mobile Behavior". |
| Missing departure dates are handled | Met in "Departures And Calendar Interaction" and "Empty And Error States". |
| Enquiry path is specified | Met in "Primary CTA", "Enquiry Panel" and "Handoff Notes". |
