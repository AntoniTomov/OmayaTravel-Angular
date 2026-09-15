# Phase 3 — improve the pages that sell

Started 8 September 2026. This follows Phase 3 in `SEO_EXPERT_REVIEW_AND_ACTION_PLAN.md`.
Status: implementation started; business-fact additions pending. Changes in this session are local
on `toni-seo-optimization`, based on `284112b`, and are not deployed.

## Existing work retained

The destination hub and four country pages, visible breadcrumbs, group-size facts, confirmed
departure labels, business identity and licence information already exist. The latest branch also
contains the booking-conditions FAQ and private-tour share-image fix. Existing authored tour copy,
prices and departure records are retained.

The progress board records production verification and Search Console sitemap submission on
8 September. Its older recommendation to start by deploying the original foundation was stale.

## Work implemented in this session

1. Tour pages now link to their destination's existing guides in the information section. The
   links reuse the destination-to-guide mapping and original article titles: Bulgaria has two,
   Kyrgyzstan and Algeria one each. Morocco has no guide yet, so no empty section is rendered.
   These links are available in server-rendered HTML and update when navigating between tours.
2. The booking calendar now derives dates and trip periods from the selected tour alone. It
   previously combined every base tour in the same country: for example, the women-only
   Kyrgyzstan enquiry could select the classic tour's August 6 departure instead of its own
   August 13 departure. Generated Morocco variants now use their own resolved records too.
3. The calendar opens on the earliest non-past departure, or the current month when all dates
   are past. Selecting another tour clears the selected date. Submission validates that the
   requested date belongs to that tour and is not in the past before contacting the form API.
4. A route regression test covers the women-only calendar, date selection, guide links, route
   changes, and the all-past-departures case. No enquiry emails are sent by this test.

## Remaining commercial-page work

Toni confirmed these priorities on 8 September: **Bulgaria Beyond the Ordinary, Women-only
Kyrgyzstan, and Morocco Classic** (`morocco-tour`). Algeria is not one of the three commercial
priorities for this phase. Shared template improvements still apply to all relevant tours.

Toni will supply the rooming, supplement and fitness information in a few days. Those additions
are deliberately deferred; no provisional prices, room policies or fitness claims are published.

| Input per priority tour | Why it is needed | Status |
| --- | --- | --- |
| Room allocation by accommodation type | Hotels, yurts and desert camping cannot share a blanket private-room claim | Awaiting business facts |
| Private-room supplement, currency and charging basis | Clarify whether the advertised price includes the default arrangement | Awaiting business facts |
| Pace and fitness requirements | Publish meaningful walking durations, terrain and other requirements without inventing a difficulty rating | Awaiting business facts |

Once confirmed, add those details to the relevant tour content and present them alongside the
existing practical information. Reconcile rooming and supplement wording together. Review each
priority page against its itinerary, prices, inclusions, booking FAQ and enquiry path, then verify
the mobile experience. Guide/staff evidence may be added when real material and reuse permissions
are supplied. This phase is not complete until those commercial-page gaps are resolved.

## Verification

- `npm --workspace website run test -- --watch=false`: **126 tests passed across 12 files**.
- `npm run build`: passed, **40 prerendered routes**. Build warnings remain: initial bundle
  611.67 kB versus 500 kB; tour-detail CSS 14.83 kB versus 14 kB. No stylesheet changes in this batch.
- Inspected prerendered HTML for all three priority tours: one H1 and the correct canonical on
  each. Bulgaria's two guide links and Kyrgyzstan's one guide link are present in the HTML.
  Morocco correctly omits the section because it has no guide in the existing content.
- Changed application files formatted with Prettier; `git diff --check` passed.

Mobile visual verification and production checks remain part of the final release review.
No production changes or external submissions were made in this session.
## Owner-confirmed fitness update — 8 September 2026

Toni confirmed: **fitness level is easy for every tour**. Added a typed per-tour fitness field
and visible “Fitness level: Easy” fact to all eight public tours, including generated Morocco
variants. Corrected the conflicting Morocco FAQ sentence recommending moderate fitness; its
descriptions of walking, uneven surfaces and drives remain. No distance, walking time, riding
alternative or accessibility guarantee is inferred from “easy”.

Single supplements remain deferred at Toni's request. Room allocation is also unconfirmed;
no new sharing policy has been published. Existing itinerary accommodation text is preserved
pending the operating team's answers. Regression coverage checks the rating across all eight
public records and the visible tour page.
