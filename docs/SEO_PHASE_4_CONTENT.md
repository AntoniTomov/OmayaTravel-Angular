# Phase 4 — articles and practical guide briefs

Started 8 September 2026. Status: article discovery improvements implemented locally; four guide
briefs prepared for staff contributions. **No new guide is published and the editorial refresh is
not complete.** The three commercial priorities are Bulgaria Beyond the Ordinary, Women-only
Kyrgyzstan, and Morocco Classic (`morocco-tour`), as confirmed by Toni.

This document separates changes in this batch from proposed editorial work. Existing authored
article and tour prose, prices, publication dates and metadata have not been changed. Rooming,
private-room supplements and fitness requirements remain deferred until Toni supplies them.

## Implemented in this batch

- All four article pages now have a “Journeys through [country]” section linking to their country
  page and that country's existing tours. Tour names, duration and format come from the tour data;
  no second copy of departure dates or prices is maintained here. The wording does not imply that
  every attraction in a destination-wide article belongs to every itinerary.
- The Song Kul article now offers both the classic and women-only Kyrgyzstan tours. The two
  Bulgaria articles link to both Bulgaria formats, and the Algeria article to its expedition.
- The existing country-to-guide mapping powers these links, matching the destination pages and
  the tour-to-guide links added in Phase 3. Links use canonical trailing-slash paths and appear in
  the rendered article body, not behind an interaction.
- Suggested stories exclude the article being read. The other Bulgaria article appears first
  on both Bulgaria guides; other-country stories follow when there are fewer same-country guides.
- Removed the template's hardcoded `By nesi` label from related-story cards. It was not backed by
  article author data. No replacement identity, credential or personal experience is invented.
- Added a component regression test covering all four country/tour link sets, route-data changes,
  meaningful link labels, same-country ordering, self-link exclusion and the missing-article state.

The original in-copy tour CTAs remain in place. The new links complement them, especially where a
reader wants the women-only format or the destination overview. No routes, sitemap entries,
publication timestamps, canonical tags or structured data were added by this batch.

## Audit of the four existing articles

This is an editorial queue, not a declaration that every existing claim has been fact-checked.
Preserve the professional copy until the author approves specific factual corrections; adding a
second contradictory statement beside a stale claim would not be a useful refresh.

| Article                                                                                | Role and implemented links                                                                                                                | Next editorial work                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **10 Unmissable Places to Visit on Your Bulgaria Trip**                                | Broad discovery article → Bulgaria destination and both tours; Rila article appears first among suggested stories.                        | Identify the actual local guide(s) behind the selection; add a short, accurate contributor note and permissioned photo captions. Verify access/schedules for Buzludzha, the Rose Festival and named venues before adding dated information. Clearly distinguish trip ideas such as the Black Sea and Seven Rila Lakes from the stops actually included in the eight-day classic itinerary.                                                                                                                             |
| **The Complete Visitor Guide to the Rila Monastery in Bulgaria**                       | Practical attraction guide → Bulgaria destination and both tours; links to the broader Bulgaria article.                                  | Correct the museum ticket figure after author review: the guide says about €10, while the official museum pages show €12. Recheck opening hours by exhibition; the guide's Friday–Sunday summer wording is not supported by the current official pages, and the Bulgarian page gives exhibit-specific hours that differ from the English summary. Recheck the quoted tour, parking, winery and accommodation prices, transport timetable, and any BGN-only amounts with the relevant operators.                        |
| **How to Visit Song Kul Lake in Kyrgyzstan**                                           | General lake guide → Kyrgyzstan destination, classic tour and priority women-only tour.                                                   | Verify camp facilities, connectivity, seasonal road access and prices against a named local operator/camp. The article's generic 5–6 people per yurt must not be presented as the Omaya booking policy; the current women-only itinerary says up to four, and Toni is reconfirming rooming. Check the claimed 30 km “lake perimeter” route against a mapped walking route before repeating it in a packing/fitness guide. Have a qualified source review the altitude/medication advice; do not add drug instructions. |
| **Tassili n’Ajjer National Park: A Guide to Algeria’s Breathtaking Sahara Wilderness** | Expedition research → Algeria destination and tour. Still supported, although Algeria is outside the three current commercial priorities. | Reconcile the closing CTA's **8 days** with the tour's **9 days / 8 nights**. Verify visa claims by passport nationality, permit arrangements, exact expedition route, domestic flights and camera/drone rules. Add real guide attribution and camp/arrival details supplied by the operating team. Recheck travel advice for the precise route; a local guide is not a guarantee of safety.                                                                                                                           |

### Sources checked on 8 September 2026

- Rila Monastery's [English museum information](https://www.rilskimanastir.org/en/museums/) and
  [Bulgarian museum information](https://www.rilskimanastir.org/bg/museums/) both list a €12 combined
  ticket. The Bulgarian page distinguishes museum/exhibition summer hours; obtain confirmation
  for the intended visit rather than copying the English summary as a universal schedule.
- The [FCDO Algeria advice](https://www.gov.uk/foreign-travel-advice/algeria) identifies areas where
  it advises against travel, and its [safety and security page](https://www.gov.uk/foreign-travel-advice/algeria/safety-and-security)
  covers remote-desert risks and restricted equipment. These are inputs for a dated, route-specific
  review, not a substitute for local operating confirmation. The retrieved main-page snapshot was
  marked current at 29 August 2026; recheck it before publication.
- The [FCDO Kyrgyzstan entry requirements](https://www.gov.uk/foreign-travel-advice/kyrgyzstan/entry-requirements)
  are expressly for full British-citizen passports. Any future visa paragraph must also check the
  destination authority and the US passport case rather than generalising one nationality's rules.

The above sources support the audit points only. This batch does not certify the guides' remaining
history, geography, safety, health or legal claims. Record the source, checked date and reviewer
when an actual factual update is approved.

## Four draft guide briefs

These are proposed editorial topics, **not measured keyword-volume opportunities**. Validate the
wording and demand against the Phase 2 query map/Search Console before assigning final URLs. The
existing tour and country URLs remain the primary commercial pages. Do not create alternative
tour pages just to target a synonymous phrase.

### 1. Morocco: from Casablanca to Marrakech via Chefchaouen and the Sahara

**Priority:** first new guide; Morocco currently has no article. **Reader question:** what does the
route involve, and why does this journey take twelve days? **Primary commercial link:**
`/tour-item/morocco-tour/`; supporting link `/destinations/morocco/`.

**Distinct purpose:** explain the shape and practical tradeoffs of this route, rather than copying
the twelve-day itinerary or creating another generic “best places in Morocco” list. Candidate
query themes: Casablanca-to-Marrakech itinerary via Chefchaouen; Morocco cities and desert route.

**Opening direction, based on the current itinerary:** the journey begins in Casablanca and ends
in Marrakech, with Chefchaouen, Fes and Merzouga between them. Its appeal is the changing setting:
Atlantic city, northern mountain town, medinas, dunes and the High Atlas crossing.

**Proposed sections:**

1. A simple route map with named stops, distinguishing overnight bases from visits en route.
2. How two nights in Chefchaouen and Fes divide city exploration and free time.
3. The southbound travel day to Merzouga and the contrast between city and desert stays.
4. The Dades Valley, Aït Ben Haddou and the High Atlas route into Marrakech.
5. Arrival in Casablanca and departure from Marrakech; what the team needs before arranging
   transfers. Do not advise travellers to buy flights before departure confirmation.
6. A short “Which journey fits?” link to the classic tour and the country page, where the other
   formats can be compared without implying identical prices or rooming policies.

**Material needed:** guide interview with actual drive/break ranges; route map checked by the
driver; four original images with location/date/credit and reuse permission; an example of a
normal travel day; luggage/camp-transfer details; current arrival coordination policy.

**Resolve before drafting practical claims:** day 6's prose says desert camp but its accommodation
field says hotel, and day 7 calls itself the second camp night. Do not publish a camp-night count
until reconciled. Confirm the distinction between included activities and excluded entrance
fees. Private-room policy, camp bathrooms, camel alternatives and physical requirements await
the operator; do not describe the whole route as easy or all-inclusive.

### 2. Joining Omaya's women-only Kyrgyzstan journey: what the days are like

**Priority:** supports the selected women-only tour. **Reader question:** what would travelling
with this group actually involve? **Primary commercial link:**
`/tour-item/women-only-tour-kyrgyzstan/`; supporting links `/destinations/kyrgyzstan/` and the
existing Song Kul article.

**Distinct purpose:** group experience and preparation, not a broad claim that solo travel is
safe throughout Kyrgyzstan. Candidate query themes: women-only Kyrgyzstan trip; what to expect on
a small-group Kyrgyzstan holiday. The tour page continues to own booking intent.

**Confirmed content basis:** the current ten-day itinerary begins and ends in Bishkek and includes
Ala Archa, Song Kul, Kochkor, Issyk-Kul, Karakol and Altyn Arashan. It combines city visits, yurt
stays, riding and walking; the exact participation requirements still need business confirmation.

**Proposed sections:**

1. The group format and welcome in Bishkek, described by the actual trip leader.
2. A day beside Song Kul: planned group activity and time independently at the lake.
3. The changing accommodation types along the route, with actual facilities and allocation rules.
4. Transport days and the Altyn Arashan visit, including optional/required activity distinctions.
5. How solo joiners can ask about rooming, and what happens after an enquiry.
6. What the guide wishes guests knew before arrival, based on a recorded interview.

**Material needed:** named guide/leader profile and verified role; whether a female leader is
guaranteed (do not infer this from “women only”); actual common traveller questions; transport
arrangements; activity choices and alternatives; original images with permissions.

**Resolve before publication:** the inclusion list currently includes insurance and excludes
ground transport. The operator must confirm whether these are intentional. Day 8's narrative
says lunch and dinner are included, while the structured meal list is empty and accommodation is
null. These are content inconsistencies, not facts to fill by inference. Rooming, supplements,
walking durations/terrain and riding suitability await Toni's later input.

### 3. Song Kul yurt stays: comfort, facilities and packing for Omaya's trip

**Priority:** practical support for women-only Kyrgyzstan; also useful for the classic itinerary.
**Reader question:** what will the camp be like, and what do I need to bring? **Primary commercial
link:** women-only Kyrgyzstan; supporting links to the classic tour, country page and existing
Song Kul guide.

**Distinct purpose:** a specific camp/preparation guide based on the camps Omaya actually uses.
The existing Song Kul article retains general access, geography and seasonality. If the new
material is too thin to support a distinct answer, add it as a reviewed section to that existing
article instead of publishing an overlapping URL.

**Proposed sections:**

1. A photographed walk through the actual camp: sleeping, dining and bathroom arrangements.
2. Bedding, heating, electricity, charging and drinking-water arrangements, item by item.
3. A packing table explaining why each item matters and whether guests or the camp provide it.
4. Weather-dependent plans, the road journey and how the guide communicates changes.
5. Riding/walking choices, with operator-confirmed participation requirements and alternatives.
6. How guests can communicate dietary, medical or accessibility needs privately before booking.

**Material needed:** a camp-manager or guide interview; dated facility photographs; verified
equipment list; actual trip luggage limits and seasonal access guidance; a staff reviewer who
knows the currently contracted camps.

**Do not infer:** exclusive yurts, ensuite facilities, hot showers, reliable Wi-Fi, a guaranteed
camp opening window, suitable fitness levels, a supplement price or any medical regimen.
Room-sharing facts in a generic destination article do not establish the trip's contracted policy.
Keep changing weather/access and health information dated and attributed to suitable sources.

### 4. Eight days in Bulgaria: classic and women-only journeys compared

**Priority:** supports Bulgaria Beyond the Ordinary. **Reader question:** which Omaya Bulgaria
itinerary suits the experience I want? **Primary commercial link:**
`/tour-item/bulgaria-beyond-the-ordinary/`; comparison link `/tour-item/women-only-tour-bulgaria/`
and supporting link `/destinations/bulgaria/`.

**Distinct purpose:** a useful itinerary comparison, not a second country landing page. Candidate
query themes: Bulgaria itinerary eight days; classic versus women-only Bulgaria group tour. Use
the existing ten-places and Rila articles for attraction detail rather than reproducing them.

**Confirmed content basis:** both tours currently run eight days/seven nights from Sofia back to
Sofia. The classic route includes Rila Monastery, Melnik, Rhodope villages, Plovdiv and Veliko
Tarnovo. The comparison must be assembled from each itinerary's actual day records, preserving
alternatives such as Kazanluk Thracian Tomb **or** Damascena instead of promising both.

**Proposed sections:**

1. Side-by-side route map and concise itinerary differences.
2. The city, mountain-village and cultural balance in each journey.
3. What the women-only format means in practice, with confirmed group/leadership details.
4. Travel time, free time and accommodation types; exact pace and room policies once supplied.
5. Which ideas in the ten-places article need extra days: do not imply the classic trip includes
   the Black Sea or Seven Rila Lakes simply because those places appear in the broader article.
6. Two descriptive tour links and a short invitation to discuss personal priorities.

**Material needed:** guide-checked route map, representative transfer times, two real examples of
traveller preferences, photographs that belong to the actual itineraries and named reviewer.
Confirm how the Ribnovo demonstration is arranged; do not imply attending a private wedding is
guaranteed. Prices and dates should link to the maintained tour records rather than be copied into
static editorial prose.

## Publication and verification steps

1. Toni supplies the deferred facts and identifies a staff contributor for each country. Resolve
   the highlighted itinerary discrepancies before they propagate into new guides.
2. Review the four topics against actual US/UK query evidence. Keep the Morocco guide first unless
   that evidence or operational priorities justify changing the order.
3. Collect the interviews and image permissions; draft the guide that has enough verified material
   first. Do not manufacture first-person experience, author credentials or traveller quotations.
4. Approve factual corrections to the existing articles; record what changed and who checked it.
   Add truthful author/reviewer details when supplied. Set `dateModified` only for an actual
   substantive update and implement it consistently in the page, structured data and sitemap.
5. For each approved new guide, add its content and public route through the existing registries,
   connect it to the country and relevant tour, generate its share image, then verify rendered
   title/canonical/indexing, image availability, links and mobile layout before release.
6. Use Search Console landing/query evidence and qualified enquiries to evaluate the batch. A
   new link section alone is not evidence of ranking or booking growth.

Combined verification: 127 tests in 13 files pass; production build and formatting checks pass.
The Song Kul journey section was inspected at mobile width with no horizontal overflow; its
destination, classic-tour and women-only-tour links are present. Current release status and the
resume checkpoint are recorded in `SEO_PROGRESS.md`.
## Authorised continuation — 8 September 2026 (supersedes initial draft status)

Toni authorised factual corrections and the four guides, and confirmed easy fitness on all tours.
The four guides are now implemented as public, indexable, prerendered routes in the local build.
They are not deployed to production by this task.

- /morocco-casablanca-marrakech-route-guide/
- /women-only-kyrgyzstan-what-to-expect/
- /song-kul-yurt-stay-packing-guide/
- /bulgaria-classic-women-only-tour-comparison/

The initial briefs were narrowed to what current itinerary records support. No first-person
experience, guide biography, camp walkthrough, room policy, driving-time estimate or interview
was fabricated. Song Kul is a packing checklist with camp-specific questions, rather than a
claim that contracted camp facilities have been inspected. Unconfirmed Morocco camp-night
counts and Kyrgyzstan inclusions/meals are omitted from the new guides.

New routes appear in the blog listing, country guide lists and reciprocal tour/article links.
Homepage blog cards are capped at the three newest articles, preventing the old slice(1) logic
from expanding the homepage as the blog grows. Public route registries supply canonicals,
sitemap entries and prerender routes. Publication dates are set to 8 September 2026 in the local
release candidate; check the actual release date if publication is delayed.

### Factual corrections completed

- Algeria article CTA: eight days -> nine days, matching the maintained expedition record.
- Rila combined museum ticket: EUR 12; replaced unsupported Friday–Sunday summer hours with
  the official exhibition-specific distinction. Both official museum source links appear in
  the article. Checked https://www.rilskimanastir.org/en/museums/ and
  https://www.rilskimanastir.org/bg/museums/ on 8 September 2026.
- Song Kul: removed the unsupported 30 km full-lake walking-loop claim; removed absolute
  connectivity and generic 5–6-person allocation claims in favour of departure-specific
  confirmation. Replaced casual altitude-medication advice with a GP/travel-clinic discussion.
  The article links https://www.nhs.uk/conditions/altitude-sickness/ (checked 8 September).
- Women-only Kyrgyzstan introduction: nine -> ten days, matching its ten-day record.
- Morocco FAQ fitness: easy, per Toni's direct confirmation, preserving terrain/travel context.

Rila, Algeria and Song Kul retain their original publication dates and have real modification
dates displayed on the page, in BlogPosting dateModified and sitemap lastmod. This is a targeted
refresh, not certification of every historical, medical, visa, access or price claim elsewhere.

### Still needs operator confirmation

An asynchronous question was sent to Toni for Morocco Day 6 hotel/camp vs Day 7 “second camp
night”; women-only Kyrgyzstan insurance/transport inclusions; and Day 8 meals/accommodation.
No response was available when this update was written. Do not infer those business facts.
Private-room supplements remain expressly deferred; room-sharing facts remain unconfirmed.

### Implementation and verification

Article metadata now has one maintained source in blog-metadata-content.ts. Article bodies
spread their matching metadata by slug; the global SEO service and sitemap use metadata without
importing all article bodies. Full prose remains in lazy blog chunks. A regression checks all
metadata/body/route slugs and metadata equality. Do not recreate independently maintained SEO
copies of article titles/descriptions.

Current build passes with 44 prerendered routes; 129 tests across 14 files and formatting pass.
Browser and HTTP verification results are recorded in the main progress checkpoint.
