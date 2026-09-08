# Pre-merge verification — 8 September 2026

Tested remote `dev` commit `5d7cd85f9b5cc41f38a4844e10a9f23f9bb7d2b3` in a clean,
detached checkout. Remote `master` was `dcac08844e9241a400c9c0e6453cc2e4536f8a8f`.
PR #67 has merged into `dev`; this verification did not merge or deploy anything.

## Results

- Clean `npm ci`: 401 packages installed, zero reported vulnerabilities.
- `npm --workspace website run test -- --watch=false`: 132 tests passed across 15 files.
- `npm run lint`: passed (Prettier formatting check, not a separate static-analysis lint).
- `npm run build`: passed, 44 prerendered routes. Existing warnings: initial bundle
  570.63 kB against 500 kB; tour-detail CSS 14.83 kB against 14 kB.
- Production SSR preview, launched using the repository launch configuration on port 3112:
  all 42 sitemap URLs returned 200, one H1, a nonempty unique title, a description,
  the expected production canonical, and no meta noindex.
- All 149 JSON-LD script blocks parsed successfully. This checks JSON syntax, not
  eligibility for Google rich results.
- All 157 distinct local image/source URLs referenced by those pages returned 200.
  The initial asset probe incorrectly split image filenames containing spaces; after
  correcting the probe, no missing assets remained.
- Four representative redirects passed: old Bulgaria tour, destination trailing slash,
  private-tour-planning alias, and the old cookie-policy query URL. Unknown page returned 404.
- Empty JSON requests to both `/api/forms` and `/api/newsletter` returned 400 with
  validation errors. No enquiry or subscription was sent.
- Mobile viewport smoke checks: Bulgaria destination, Morocco guide, classic listing,
  and women-only Kyrgyzstan tour had no horizontal document overflow. Morocco guide and
  listing hero rendered. The listing selected an AVIF asset. These are smoke checks,
  not a complete accessibility or cross-browser audit.
- Women-only Kyrgyzstan calendar opened in August 2027; 13 August was selectable,
  6 August was disabled. Selecting 13 August updated the date button. Empty enquiry
  fields remained invalid when checking availability.

## Findings to address before release

1. `apps/website/src/app/shared/content/tour-list-content.ts`: both Kyrgyzstan card
   summaries say "Nine days" although their durations are ten days. The homepage
   Kyrgyzstan summary in `homepage-content.ts` also says nine days.
2. The Algeria card in `tour-list-content.ts` says "an 9-day" while its duration badge
   says eight days. Reconcile the summary against the actual itinerary.
3. Both Kyrgyzstan tours in `tour-content.ts` have the incomplete highlight
   "Sleeping in a at Song Kul Lake"; restore the missing word.

### Follow-up corrections — confirmed by Toni

Toni confirmed Kyrgyzstan is **10 days / 9 nights** and Algeria is **9 days / 8 nights**.
The three findings above are now corrected locally on `toni-seo-optimization`:

- Corrected both Kyrgyzstan card summaries, the site-search excerpt in `homepage-content.ts`,
  and the classic tour introduction to ten days.
- Corrected Algeria's listing badge to nine days/eight nights and its SEO description to
  nine days; fixed the article in "a 9-day". The underlying tour duration and itinerary
  were already nine days/eight nights.
- Corrected the English and Bulgarian featured-trip translation durations and Algeria
  description so those alternate strings also agree.
- Restored "Sleeping in a yurt at Song Kul Lake" on both Kyrgyzstan tour pages. Preserved
  the existing "Yurt stays" introduction on `/destinations/kyrgyzstan/`.
- Production build passed with 44 prerendered routes and the same two size warnings.
  Formatting passed; these are copy-only changes, so the 132-test result above remains
  the earlier dev baseline rather than a claim of another full test run.

These corrections are local and still need to be included in the release branch. Remaining
operating-fact questions below are unchanged.

## Still requiring separate verification or input

- Previously recorded Morocco accommodation and women-only Kyrgyzstan inclusion/day 8–9
  inconsistencies require operating facts. Room allocation remains unconfirmed and supplements
  remain deferred. Easy fitness is already implemented.
- Real enquiry email delivery, CAPTCHA, analytics events and hosting/CDN behaviour were not
  verified by these local checks. Run an authorised end-to-end delivery check after deployment.
- Repeat live mobile PageSpeed baselines after deployment. Local build and smoke checks do
  not prove improved production Core Web Vitals.
- Fonts were not changed, as requested.

Resume with the copy findings above, then rerun the relevant checks on the final release
commit. Preserve unrelated work and verify current remote SHAs before merging.
