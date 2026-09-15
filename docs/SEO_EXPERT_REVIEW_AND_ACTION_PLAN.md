**Omaya Travel: SEO review and proposed 90-day action plan**

Reviewed 5 September 2026. Status: proposal for subsequent implementation.

**Assessment**

Keep the core SEO implementation. Connecting existing route and tour data to server-rendered metadata is a sound foundation. The next investment should concentrate on accurate commercial pages, useful destination pages, internal links, evidence of expertise, and qualified enquiries. More schema blocks and more URLs are not useful objectives by themselves.

This review uses the supplied SEO_IMPLEMENTATION.md, the repository's companion strategy, selected implementation files, direct production HTTP checks, and current Google documentation. Document instructions were treated as context for review, not authorization to implement or deploy. No application code was changed. The previous build, image counts and test results have not been independently reproduced. Search Console, GA4 account configuration, backlink data, country-specific keyword volumes and real-user performance data were unavailable; recommendations dependent on them remain hypotheses.

**What production checks established**

| URL checked | Observation on 5 September 2026 |
| --- | --- |
| https://omayatravel.com/ | HTTP 200; title is `Omaya Travel`; no description, canonical or JSON-LD found in the returned HTML. |
| https://omayatravel.com/robots.txt | HTTP 404. |
| https://omayatravel.com/sitemap.xml | HTTP 404. |
| https://www.omayatravel.com/ | HTTP 200; does not redirect to the bare domain. |
| http://omayatravel.com/ | HTTP 301 to HTTPS. |
| https://omayatravel.com/destinations/bulgaria/ | HTTP 200; heading is `Public route placeholder`; no robots meta tag found. |
| An intentionally nonexistent URL | Correct HTTP 404. |

These samples agree with the report's statement that Phase 1 has not been deployed. They do not constitute a complete production crawl or establish which pages Google has indexed.

**What to keep and what to correct**

Keep SSR metadata, accurate canonical URLs, intentional exclusion of unfinished pages, automated sitemap generation, truthful structured data, and regression protection against generic titles. Keep English as the working language, with US and UK audiences as the provisional priorities. There is no reason to add regional URL copies or hreflang without actual alternate regional/language pages. Preserve useful existing URLs and professional copy; propose targeted factual or clarity edits where evidence warrants them.

1. **Remove the promised review-star payoff.** Google excludes self-serving reviews of a LocalBusiness or Organization, including their subtypes, from review-star eligibility. Adding AggregateRating to Omaya's own TravelAgency entity will not make its own testimonials eligible for those stars. Collect real reviews for trust and conversion. Evaluate any future tour-specific review markup against the supported item types and actual review subject; do not relabel the business to bypass eligibility. [Google review guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet).

2. **Retire FAQ rich results as a goal.** Google's changelog says FAQ rich results stopped appearing from 7 May 2026. Helpful visible FAQs still answer purchase objections and support useful content. Existing accurate FAQPage markup is not a launch blocker, but extending it has no priority for a Google FAQ display. [Google's May 2026 update](https://developers.google.com/search/updates#may-2026).

3. **Downgrade SearchAction.** Google retired the sitelinks search box in November 2024. Keep useful WebSite identity markup; remove SearchAction during routine cleanup if it serves no other consumer. TouristTrip can describe a trip, but it is not a promise of a dedicated Google tour rich result. [Google's announcement](https://developers.google.com/search/blog/2024/10/sitelinks-search-box).

4. **Correct the claim that rankings were previously impossible.** A crawlable page can rank without custom meta descriptions, structured data or a sitemap. The old implementation weakened description and canonical signals; it did not make ranking categorically impossible. SSR improves delivery reliability, but Google can also render JavaScript. Evaluate what crawlers actually receive.

5. **Treat title length as an editorial guideline.** Google does not impose a fixed 60-character title or 160-character description limit; displayed text varies with device width and query. Keep checks for missing or accidental duplicate titles, and convert strict length failures into review warnings where appropriate. Titles must describe different page purposes, not merely use different wording. Use “tours” and “holidays” naturally when relevant; validate their relative demand rather than forcing both everywhere. [Title guidance](https://developers.google.com/search/docs/appearance/title-link), [snippet guidance](https://developers.google.com/search/docs/appearance/snippet).

6. **Replace performance assumptions with measurements.** Missing image dimensions can cause layout shifts, but CSS may already reserve space. A 606 kB build warning is not a Core Web Vitals measurement; fast server response alone does not establish good mobile experience. Measure LCP, INP and CLS on representative templates and real users where possible. [Google Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals).

7. **Validate the niche and ranking forecasts.** Current searches surfaced existing women-only Kyrgyzstan products from [Ecotour](https://ecotour.kg/our-tours/culture/women-tour/) and [Wander Kyrgyzstan](https://wanderkyrgyzstan.com/tour/women-only-tour-in-kyrgyzstan/). This is a plausible focus, not a demonstrated empty market. These examples establish competition, not market size or US/UK rankings. Competitors' article counts are not a publishing target. Four-to-six-month first-page forecasts cannot be justified without a baseline.

**Implementation findings to address before expanding**

| Finding in the current repository | Recommended action |
| --- | --- |
| `sitemap.ts` blocks every query-string URL with `Disallow: /*?*` and also blocks `/search`. | Replace the blanket rule with a policy based on actual parameter types. Tracking variants should normally remain crawlable with a clean canonical. Let Google fetch search pages when relying on their noindex directive. Handle true filter spaces separately. A robots block prevents Google from seeing page-level directives or redirects. |
| Legacy WordPress query URLs are mapped to redirects in the route definitions. | Verify real HTTP redirects for these URLs through the production CDN; blanket query blocking would obstruct crawling those redirects. Inventory old linked URLs before changing paths. |
| `/september-2027/` and `/calendar-2027/september/` have identical titles, descriptions and card selections in the listing content, despite different SEO titles. | Choose one preferred URL. If one is redundant, permanently redirect it and update internal links and sitemap membership. Distinct meta titles do not fix duplicate content. |
| Both September listings include Algeria, but the Algeria departure array contains November 2026, February 2027 and October 2027. | Derive calendars and month filters from the authoritative departure records rather than manually selected cards. Verify availability with the business. |
| `structured-data.ts` hardcodes every tour Offer to `InStock`. | Model actual availability and price conditions. Emit only supported, current facts; omit unverified availability. Keep visible prices, tour cards and structured data consistent. |
| Sitemap host selection reflects the request host while page canonicals use site configuration. | Resolve known production brands from a shared configuration. Verify sitemap origins, canonical origins and route availability agree; prevent preview/unknown hosts from advertising themselves as canonical copies. |
| Sitemap metadata lookup and rendered route keys are not identical for every page, for example the private-tour form. | Unify effective page metadata/indexability resolution. Test real rendered routes against sitemap entries; missing registry metadata should trigger review rather than silently imply indexability. |
| The metadata duplicate-title test covers static and destination registry entries. | Extend regression coverage to rendered tour and article pages and actual HTTP behavior. The report's broader title check was a build inspection, not coverage supplied by this particular unit test. |
| Lead events already exist, including `generate_lead` after successful tour enquiries. | Audit existing tracking rather than install a second implementation. Validate successful events, failed submissions, route page views, tour attribution and consent behavior. Account-side key-event configuration remains unverified. |

Google advises against using robots.txt for canonicalization and recommends consistent redirects, canonicals, sitemap membership and internal links. [Canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

**Commercial focus and page ownership**

Prioritize using booking value, available places, margin, sales lead time, existing search demand and the quality of Omaya's evidence. A useful working model is qualified organic visits × enquiry rate × booking rate × contribution per booking. Inputs are currently unknown, so no revenue forecast is attached.

Provisional first candidates are Bulgaria small-group trips, the existing women-only Kyrgyzstan tour, and the Algeria Tadrart Rouge expedition. Confirm the order against capacity and evidence. Morocco remains in scope, but should not automatically receive the largest content investment simply because its total tourism market is larger.

| Search need | Preferred page role |
| --- | --- |
| Bulgaria small-group tours / holidays | `/destinations/bulgaria/` helps compare Omaya's relevant trips. |
| The specific Bulgaria itinerary | Existing Bulgaria tour page explains that trip and captures an enquiry. |
| Women-only Kyrgyzstan tour | Improve the existing `/tour-item/women-only-tour-kyrgyzstan/` first. |
| Algeria Tadrart Rouge expedition | Existing expedition page is the primary commercial answer. |
| Song-Kul accommodation, packing and trip preparation | A firsthand guide answers practical questions and links to relevant tours. |
| Bulgaria DMC / ground handling | Existing B2B page, with partner-specific proof and a separate qualified-lead definition. |
| Confirmed 2027 departure dates | A maintained calendar derived from actual departure records. |

Do not create every country × women-only × solo × month combination. With one relevant product, improve that product before adding a competing category page. Create a separate landing page only when it serves a distinct search need with sufficient useful content or a meaningful choice of products. Women-only travel and joining a mixed group as a solo traveller are different needs and should be explained clearly.

**The 90-day delivery plan**

Timing is an indicative work sequence, assuming access and timely content review. It is not a ranking forecast. “We” means collaborative SEO and implementation work; Omaya supplies business facts and account access.

| Phase | Work and concrete deliverables | Responsibility and dependency | Completion criteria |
| --- | --- | --- | --- |
| **1 — Days 1–7: establish the baseline and release the foundation** | Inventory current and legacy URLs; resolve critical robots, canonical, availability and duplicate-calendar issues; prepare and deploy Phase 1; validate through the CDN. Verify Search Console, submit the working sitemap, and set up Bing Webmaster Tools. Audit existing GA4 lead tracking. | We audit and prepare changes. Omaya provides Search Console/GA4/DNS access and confirms release timing and business facts. | Production metadata is correct on every eligible route; sitemap returns 200 and contains only canonical, indexable 200 pages; placeholders are noindex; redirects and genuine 404s work; one successful test enquiry records once and a failed submission does not record a lead. External email delivery tests use an agreed test recipient. |
| **2 — Days 8–14: select the opportunities** | Build a US/UK query-to-page map from Search Console where available, country-specific results and keyword estimates. Review competing page types, Omaya's capacity and margins. Select three commercial priorities and define their briefs. | We research and map. Omaya confirms inventory, margins, audience, operating strengths and sales lead times. | Each priority query group has one intended primary page, documented search intent and a commercial reason to pursue it. Volume estimates have sources; unknowns are labelled. |
| **3 — Weeks 3–5: improve the pages that sell** | Build the destination hub and four useful country pages, launching the priority countries first. Improve three priority tour pages. Add relevant internal links and visible breadcrumbs as each page launches. Strengthen About, Contact and licence information. | We build and propose additions. Omaya reviews destination knowledge, prices, policies, staff details and reviews. | Each country page helps choose an actual trip; tours show consistent dates/prices and answer major objections; no priority page is orphaned; metadata and structured data match visible facts; enquiry paths work on mobile. |
| **4 — Weeks 4–8: support demand and demonstrate expertise** | Refresh the four existing articles. Publish an initial four focused guides using guide interviews, original images and practical observations. Prepare a shortlist of about ten relevant editorial/partner opportunities and a factual partner brief. Improve the existing B2B page if business capacity supports it. | We research, draft and connect the pages. Omaya supplies firsthand material, permissioned reviews and partner information. Sending outreach is a separate explicit instruction. | Guides answer specific pre-booking questions and link to relevant tours. Authors/reviewers are accurately identified. Prospects are relevant and opportunities are evaluated for referral quality and cost, not just backlinks. |
| **5 — Weeks 3–8, alongside content: fix measured performance issues** | Baseline mobile homepage, tour, listing, destination and article templates. Reserve image space; optimize responsive hero images; keep the LCP image eager; lazy-load appropriate offscreen media; reduce unnecessary initial JS and expensive interactions where measurement supports it. | We measure and implement targeted fixes. Field data may need time to accumulate. | Aim for LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile. Record before/after conditions. If field data is insufficient, report lab and instrumented evidence separately without claiming a field pass. |
| **6 — Weeks 9–12: evaluate and focus the next cycle** | Review indexing, query/page matches, US/UK organic traffic, qualified enquiries and bookings. Improve titles or page content where evidence shows a problem; consolidate overlapping pages; choose the next content batch. | We analyze; Omaya supplies enquiry qualification and booking outcomes. | A written decision for each priority page: maintain, improve, expand or consolidate, with evidence. Set the next quarter's commercial targets using the collected baseline. |

Search Console verification need not wait for deployment. Prefer a DNS-verified Domain property covering protocol and subdomain variants. The existing GA4 ID alone does not guarantee Analytics-based verification: that method requires permissions and a correctly placed snippet and applies to URL-prefix properties. [Google verification requirements](https://support.google.com/webmasters/answer/9008080).

**What the new commercial page briefs should contain**

Destination pages should explain whom the destination suits, compare actual tours, show departure dates and truthful starting prices, describe seasonal tradeoffs, identify Omaya's relevant experience, and link to useful preparation guides. There is no arbitrary word-count target. Remove noindex only when the page is useful, reviewed, linked and ready to sell.

Tour pages should make group size, trip length, pace, accommodation, arrival/departure points, included meals/transfers, flight exclusions, payment currency, supplements and booking conditions easy to find. Explain room-sharing and private-room costs precisely; “solo-friendly” must not imply a universally free private room. Confirm all guide and departure-guarantee claims. USD/GBP estimates can be considered for usability, clearly distinguished from the actual payable currency and amount.

Use genuine staff/guide profiles, accurate bylines, original trip photographs and specific traveller feedback. Licence and protection claims must reflect the business's actual status; do not borrow competitors' membership badges. Keep the brand's younger core audience clear while explaining exceptions such as genuinely suitable all-ages trips.

Initial guide candidates, subject to query research: what women should expect on Omaya's Kyrgyzstan trip; Song-Kul yurt comfort and packing; Tadrart Rouge camping, facilities and arrival logistics; and choosing between Omaya's Bulgaria itineraries. These should add practical knowledge beyond generic destination summaries. Visa, safety and other changing guidance needs dated checks against authoritative sources.

**Measurement and review rules**

| Level | Measure | How we use it |
| --- | --- | --- |
| Business | Qualified organic enquiries, bookings, revenue/contribution, enquiry-to-booking rate, departure places sold | Primary success measures. Separate B2B and leisure sales. |
| Page | Organic landing sessions, confirmed enquiry rate, country, device, tour of interest | Identify useful traffic and conversion barriers. |
| Search | Non-brand clicks and impressions for priority topics, intended versus actual landing page, CTR in comparable query/position groups | Diagnose relevance, visibility and overlapping pages. Do not treat average position alone as success. |
| Technical | Correct canonical/indexing decisions, sitemap health, broken links, production rendering and performance | Identify faults that prevent pages from competing or users from enquiring. |

Review technical/indexing exceptions weekly after release and commercial performance monthly. Compare rolling periods and seasonal equivalents when available; label sparse samples. Reconcile analytics with enquiry records because consent, repeat visits and offline decisions limit attribution. Keep personal enquiry information out of analytics payloads.

If a page has not been indexed, investigate discovery, duplication and page value before publishing more pages. If it earns impressions but few clicks, inspect query intent and competing results. If it attracts qualified visits but few enquiries, investigate information gaps and the form. If enquiries do not book, investigate offer, price, availability and response handling. Avoid repeatedly changing titles without enough evidence to interpret the result.

The first 90 days should deliver correct production SEO, useful commercial pages, reliable measurement and evidence about which topics deserve expansion. Ranking and booking growth may take longer and cannot be guaranteed.

**Lower-priority work and exclusions**

Create a better default social image and add image preview dimensions when convenient. Fix accessibility omissions as routine quality work. Add image sitemap entries if discovery inspection shows a need; a large image count alone does not establish one. Add accurate `dateModified`/sitemap `lastmod` fields for substantive changes, not automatic freshness timestamps. Build pagination when content volume requires it. Preserve a stable calendar hub and define whether expired departure pages remain useful archives, redirect to a truly equivalent page, or should be removed.

Do not pursue mass article production, paid ranking links, unnecessary regional duplicates, mass annual pages, speculative translations or cosmetic URL migrations. Evaluate any marketplace listing for commission, fit and booking contribution before committing money. Google Business Profile is worth evaluating only if the real business meets eligibility requirements.

For Google's AI search features, the same foundation applies: indexable useful pages, clear answers, original evidence and accurate business information. There is no special required AI schema or AI text file. Track identifiable AI referral traffic where available without claiming comprehensive citation measurement. [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features).

**Inputs for our first implementation session**

Bring Search Console and GA4 access where available; the three departures/products Omaya most wants to sell; confirmed dates, prices and availability; approximate margins and sales lead times; registered business details and actual protections; existing traveller reviews with reuse permission; and staff/guide material. We can begin code and URL verification before every content input is ready.

Recommended first work package: Phase 1 production readiness and measurement, followed immediately by the query-to-page map and the first destination/tour brief.
