# Phase 6 — measurement and decisions

Prepared 8 September 2026. **Ready to use; the Phase 6 results review has not been executed.**
Phases 1 and 2 are complete according to Toni. Search Console is verified and the sitemap was
submitted on 8 September, as recorded in [SEO_PROGRESS.md](SEO_PROGRESS.md). This document prepares
the later evaluation phase while Phase 3 awaits confirmed rooming, supplement and fitness facts.
It does not reopen those decisions or claim that account setup is incomplete.

No Search Console or GA4 exports, enquiry totals or booking outcomes were available for this
work. All performance cells below are **pending**, not zero. No rankings, demand estimates,
conversion uplift or return on investment have been inferred from the code or sitemap.

## Confirmed priorities and working query ownership

The commercial priorities are **Bulgaria Beyond the Ordinary, Women-only Kyrgyzstan, and Morocco
Classic**. These supersede the original review's provisional Algeria suggestion. The query groups
below are a working reference derived from the products and existing routes, not a new Phase 2
research result. Use any completed Phase 2 query research as the authority when it becomes
available to this task. Validate these groups against actual queries before changing a title or
commissioning an additional landing page.

All paths use the canonical origin `https://omayatravel.com`.

| Search need / candidate query group                             | Intended primary path                                               | Intent and ownership rule                                                                  | Evidence status                                    |
| --------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| Bulgaria small-group tours / Bulgaria holidays                  | `/destinations/bulgaria/`                                           | Compare the available Bulgaria itineraries                                                 | Provisional query grouping; existing page          |
| Bulgaria Beyond the Ordinary / the specific eight-day itinerary | `/tour-item/bulgaria-beyond-the-ordinary/`                          | Evaluate and enquire about this trip                                                       | Product priority confirmed; search demand pending  |
| Women-only Kyrgyzstan tour / Kyrgyzstan women's group trip      | `/tour-item/women-only-tour-kyrgyzstan/`                            | Evaluate the women-only product; do not send this intent primarily to the mixed group tour | Product priority confirmed; search demand pending  |
| Kyrgyzstan tours / Kyrgyzstan holidays                          | `/destinations/kyrgyzstan/`                                         | Compare the country offer                                                                  | Provisional query grouping; existing page          |
| Morocco tours / Morocco small-group holidays                    | `/destinations/morocco/`                                            | Compare the country offer and group formats                                                | Provisional query grouping; existing page          |
| Omaya Morocco Classic / the specific classic Morocco itinerary  | `/tour-item/morocco-tour/`                                          | Evaluate the classic product; keep its evidence separate from women-only and solo variants | Product priority confirmed; search demand pending  |
| Practical questions about these itineraries                     | Existing relevant guide, or a reviewed Phase 4 guide when published | Answer the preparation question and connect it to the relevant tour                        | Validate against query data and firsthand material |

Analyse the United States and United Kingdom separately first, then inspect the combined picture.
Country in either reporting tool is an audience signal, not proof of citizenship or language.
Record actual competing Omaya URLs for each query group. Two pages earning impressions is a prompt
to inspect their purposes; it does not automatically justify a redirect or consolidation.

## Inputs for the first review

Export files can remain in a private working folder outside Git. The repository should contain
only the reporting method and sanitised aggregate findings. No account password or API secret is
needed in these documents. Record the export date, property, report, date range, filters, time zone
where shown, and any sampling, thresholding, missing rows or incomplete-day notices with each file.

Use one latest **complete** 28-day interval available in both accounts and the preceding 28 days.
Do not compare a partial current day with a complete prior day. Where historical data is unavailable,
record the actual coverage and start a baseline instead of filling missing days with zero. Retain
an 84-day view for context when available; use the equivalent seasonal period only where real
historical coverage exists. Record release dates so pre-release and post-release observations
remain distinguishable.

| Input file / report                                  | Exact contents required                                                                                                                                                          | Filters and purpose                                                                                                                                                                                                                                                    |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `gsc-summary-[period].csv`                           | Daily date, clicks, impressions, CTR, average position; accompanying property-level totals                                                                                       | Search results, Web search type; all countries; both comparison periods. Establish overall coverage without a query filter.                                                                                                                                            |
| `gsc-pages-[country]-[period].csv`                   | Page URL, clicks, impressions, CTR, average position                                                                                                                             | Separate United States and United Kingdom exports, plus all countries; Web; both periods. Include all returned pages, not just the three tours.                                                                                                                        |
| `gsc-queries-[page]-[country]-[period].csv`          | Query, clicks, impressions, CTR, average position                                                                                                                                | For each priority tour and its country page, apply the exact canonical page filter and each target-country filter, then export the Queries table. This preserves the query-to-page relationship without assuming separate generic query and page tables can be joined. |
| `gsc-pages-for-query-[group]-[country]-[period].csv` | Page URL, clicks, impressions, CTR, average position, with the exact query/group filter recorded                                                                                 | For promising or ambiguous query groups, apply a query filter, then export the Pages table. Check whether the intended page or another Omaya page receives the visibility.                                                                                             |
| `gsc-indexing-[date].md`                             | Sitemap read/status and eligible URL counts; indexing exclusions by reason; inspection result for each priority tour, including Google-selected canonical and inspection date    | Capture account evidence, not just a successful HTTP request. A submitted sitemap is not evidence that every submitted URL is indexed.                                                                                                                                 |
| `ga4-organic-landings-[period].csv`                  | Landing page, Country, Device category; Sessions, Engaged sessions and the selected `generate_lead` session key-event rate if available                                          | Session default channel group = Organic Search. Separate US, UK and all-country totals. Use landing-page paths without queries where available; record any URL cleanup used. Preserve the unfiltered session denominator.                                              |
| `ga4-lead-events-[period].csv`                       | Event name, event count, `form_type`, `tour_slug` where reportable; record session channel and country filters                                                                   | Event = `generate_lead`. Also export `submit_faq_question` separately. If the custom parameters are not available in reports, label the breakdown unavailable and use the enquiry register for product outcomes. Do not invent historical breakdowns.                  |
| `sales-summary-[period].md`                          | Aggregate enquiries, qualified enquiries, bookings, travellers booked, net booking value and contribution where known; by tour, audience market, leisure/B2B and recorded source | Use the definition below. Include unknown-source totals and enquiry-date cohorts, with status observed as of the review date. Export aggregates, not message text or customer details.                                                                                 |
| `release-and-offer-log.md`                           | Production dates, affected URLs, title/content/form changes, departure/price changes, campaigns, sold-out dates and known outages                                                | Explain changes in demand, measurement or commercial availability before attributing them to SEO.                                                                                                                                                                      |

For GA4, use **session-scoped** acquisition for organic landing-session comparisons. First-user
acquisition answers a different question, and event-attributed conversion reports may assign credit
differently. Keep those views separate rather than expecting their totals to match.
[Google's traffic-source scope guidance](https://support.google.com/analytics/answer/11080067).

Search Console omits some queries for privacy and can truncate rows; a query-filtered report is
not a complete census. Keep the unfiltered totals alongside the query exports. Label any non-brand
subtotal as **visible, classified queries**. Begin with `omaya`, `omaya travel` and observed brand
misspellings as the brand group; review ambiguous queries manually. Do not claim that the remainder
equals every non-brand search. [Search Console query limitations](https://support.google.com/webmasters/answer/17011259?hl=en).

## What counts as a result

| Measure                       | Definition and calculation                                                                                                                                                                         | Source and limitation                                                                                                                                                                                                                                               |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Successful enquiry submission | A successful sales form submission; currently tracked as `generate_lead`                                                                                                                           | GA4 event count is an observed action count, not distinct people, qualification or confirmed bookings. Contact forms can include non-sales messages.                                                                                                                |
| Organic enquiry-session rate  | Organic landing sessions containing at least one successful `generate_lead` / all organic landing sessions in the same country, device and period                                                  | Use the selected event's session key-event rate only once account configuration is confirmed. Otherwise obtain the numerator as a session segment and keep the denominator unfiltered; do not divide event count by sessions and call it a session conversion rate. |
| Qualified enquiry             | One deduplicated, non-spam leisure sales opportunity with a real interest in an offered tour/private trip, a plausible travel timeframe and enough information for Omaya to follow up meaningfully | Omaya classifies in its private sales records. General questions, suppliers, job enquiries, duplicates and FAQ submissions are excluded. Unknown qualification remains pending. B2B opportunities are reported separately.                                          |
| Booking                       | One confirmed reservation meeting Omaya's normal operational booking/deposit rule                                                                                                                  | Use the sales system's real rule and write it into the report. A form headed “booking request” is still an enquiry. Report traveller count separately from reservation count.                                                                                       |
| Enquiry-to-booking rate       | Qualified opportunities from a defined enquiry-date cohort that have booked by the observation date / all qualified opportunities in that cohort                                                   | Keep still-open opportunities visible and recheck older cohorts as they mature. Do not divide bookings created this month by unrelated enquiries created this month.                                                                                                |
| Commercial value              | Booking value less cancellations/refunds; contribution only where direct trip costs are actually known                                                                                             | Keep currency, gross/net basis and collection status explicit. A deposit received and the full reservation value are different amounts. Do not use a tour's advertised price as realised revenue.                                                                   |
| Organic contribution          | Qualified opportunities and bookings with organic source evidence, plus a separate “self-reported organic” group                                                                                   | Record the attribution method; avoid double counting if both methods apply. Keep unknown-source outcomes visible. GA4-attributed and sales-record-attributed totals are different views.                                                                            |

The private enquiry register can hold the information the business needs to service the request.
For reporting, retain only aggregate fields such as tour, market, enquiry cohort, outcome, source
method and observation date. Do not send names, email addresses, phone numbers, free-text messages,
booking references or customer IDs to analytics. Check URLs and page titles as well as event
parameters when validating tracking. [Google's guidance on avoiding PII](https://support.google.com/analytics/answer/6366371?hl=en).

The current `OmayaAnalytics` service returns before tracking when analytics consent is absent.
Those enquiries can still reach the business. Consequently, GA4 submissions undercount actual
enquiries and cannot be used to calculate the consent rate by dividing them by inbox counts.
Cookie choices, repeat submissions, attribution windows and separate devices all affect that
comparison. This playbook does not change consent behaviour or claim complete attribution.

`submit_faq_question` is deliberately separate from `generate_lead`. Mark the deployed event change
in historical comparisons; older `generate_lead` totals may include FAQ questions. The tour booking
form supplies `tour_slug`; generic contact/enquiry/private-planning forms do not reliably identify
one of the three fixed tours. A tour landing page and the tour eventually enquired about are
different dimensions and must not be substituted for each other.

## Baseline register — ready to fill

Reporting interval: **pending**. Comparison interval: **pending**. Export date: **pending**.
Account time zones / completeness notes: **pending**. Production release dates: **record from log**.
Run this table separately for US, UK and all-country totals; do not sum overlapping totals.

| Priority page                | GSC indexed / selected canonical / checked date | Web clicks / impressions | GA4 organic landing sessions | Enquiry-session rate | Qualified organic opportunities | Bookings / travellers / value | Evidence                    |
| ---------------------------- | ----------------------------------------------- | ------------------------ | ---------------------------- | -------------------- | ------------------------------- | ----------------------------- | --------------------------- |
| Bulgaria Beyond the Ordinary | Pending                                         | Pending                  | Pending                      | Pending              | Pending                         | Pending                       | No account exports reviewed |
| Women-only Kyrgyzstan        | Pending                                         | Pending                  | Pending                      | Pending              | Pending                         | Pending                       | No account exports reviewed |
| Morocco Classic              | Pending                                         | Pending                  | Pending                      | Pending              | Pending                         | Pending                       | No account exports reviewed |

Use `0` only for a verified zero in complete data; `unavailable` for a metric that cannot be
reported; `pending` for an uncollected input. Where sales attribution cannot link an enquiry to its
landing page, show tour-level business outcomes alongside the page metrics with that limitation.

## Weekly and monthly review

**Weekly after releases:** inspect sitemap/indexing exceptions, the three priority URLs, unexpected
canonical selections, broken enquiry paths and material traffic drops. Fix reproducible technical
faults immediately. A crawlable 200 response and a Google indexing decision are separate checks.
Record the issue, evidence, affected route, owner, action and verification date.

**Every 28 days:** refresh the exports, compare both target markets and devices, classify visible
query groups, and reconcile observed submissions with qualified sales opportunities. Use counts
beside every rate. Review the 84-day trend and availability changes before drawing conclusions from
a small month-to-month movement. If the sample is sparse or a sales cohort immature, keep the
decision provisional; there is no universal impression threshold that makes a title test valid.

| Evidence pattern                                                    | Next investigation                                                                                                              | Decision that follows only if supported                                                                                    |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Priority page not indexed, wrong canonical, or sudden disappearance | Inspect production status, canonical, discovery links, duplicate content and Google inspection evidence                         | Repair the identified issue; verify the URL again before adding more pages to that topic                                   |
| Impressions grow but relevant clicks do not                         | Compare like-for-like queries, market, device and position groups; inspect displayed title/snippet and the competing page types | Propose one targeted title/snippet or relevance improvement, preserving professional copy and recording the change date    |
| Two Omaya pages repeatedly serve the same narrow intent             | Compare their query mixes, product distinction and conversion roles                                                             | Clarify purpose/internal links first; consolidate only when one page is redundant and an appropriate surviving page exists |
| Relevant visits arrive but enquiry-session rate is weak             | Inspect the mobile form and unanswered purchase questions; check tracking and current departures                                | Fix demonstrated friction or add confirmed information. Deferred rooming/fitness facts remain unpublished until supplied   |
| Qualified enquiries do not become bookings                          | Review cohort age, availability, offer fit, prices and response handling with Omaya                                             | Improve the offer or sales process supported by the evidence; avoid attributing all lost bookings to rankings              |
| A page brings qualified enquiries and profitable bookings           | Check available capacity, contribution and whether adjacent query needs are distinct                                            | Maintain the successful page; expand with a supported guide or product only where there is useful evidence and capacity    |
| Data remains sparse, inconsistent or incomplete                     | Check measurement coverage and use a longer observation window                                                                  | Maintain and collect more evidence; do not repeatedly change titles to manufacture an experiment                           |

At the Phase 6 review, record **maintain, improve, expand or consolidate** for every priority page,
with observed counts, the reason, the next action and review date. If evidence is insufficient,
record **maintain provisionally — collect data**. Set the next quarter's targets from available
capacity and the measured enquiry/booking baseline, not a promised ranking or percentage increase.

This document creates no scheduled job, sends no outreach, changes no account settings and submits
no live enquiry. Its completion means the measurement workflow is prepared. Phase 6 itself is
complete only after the collected evidence supports a written decision for each priority page.
