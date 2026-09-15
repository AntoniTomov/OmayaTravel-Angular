# Performance fix plan — how to implement

9 September 2026. Companion to [SEO_PERFORMANCE_PLAN.md](SEO_PERFORMANCE_PLAN.md), which sets out
the diagnosis and the evidence. This document is the implementation: exact files, exact changes,
and how to prove each one worked.

Every byte figure is measured from the deployed artefact (`hostinger-runtime` at `d2d97a3`), not
estimated. Two findings below (**Fix 2** and **Fix 3**) were discovered while writing this plan
and are not in the diagnosis document.

## Revised against measurement — 9 September 2026, 18:47 EEST

Toni ran two PageSpeed audits that were not in the 8 September baseline. They confirm the
diagnosis, **correct one of its cost estimates, and promote a finding that was buried**.

| Page                          | Perf | FCP   | LCP   | TBT   | CLS | SI    |
| ----------------------------- | ---- | ----- | ----- | ----- | --- | ----- |
| `/tour-item/kyrgyzstan-tour/` | 84   | 2.0 s | 4.2 s | 50 ms | 0   | 2.5 s |
| `/destinations/kyrgyzstan/`   | 86   | 2.0 s | 3.5 s | 10 ms | 0   | 4.7 s |

Same emulation as the baseline (Moto G Power, Slow 4G, Lighthouse 13.4.1). Lighthouse puts image
delivery at **456 KiB** of estimated savings on the tour page and **282 KiB** on the destination.

### What changed in the plan

**Kyrgyzstan has no AVIF coverage at all, and it is a commercial priority.** The generator's
`inputs` list contains no Kyrgyzstan _classic_ asset — not the hero, not the gallery. Only the
women-only hero and card are there. Verified: `grep -c "Kyrgystan/kyrgyzstan-tour-bgr"` and
`grep -c "Kyrgystan/gallery"` both return 0.

`kyrgyzstan-tour-bgr.webp` (**217,994 bytes**) is the LCP element of **both** pages above. It ships
as the raw WebP to each. This is now the single highest-value change in the plan, and it is a
one-line addition to a list.

| Asset                                         | Deployed bytes | Lighthouse est. saving | In generator? |
| --------------------------------------------- | -------------- | ---------------------- | ------------- |
| `kyrgyzstan-tour-bgr.webp` (hero, both pages) | 217,994        | 129.6 KiB              | **no**        |
| `kyrgyzstan-gallery-02.webp`                  | **406,604**    | 254.2 KiB              | **no**        |
| `kyrgyzstan-gallery-01.webp`                  | 84,248         | 48.4 KiB               | **no**        |
| `discover-more-tours.webp`                    | 47,608         | 17.9 KiB               | **no**        |

`kyrgyzstan-gallery-02.webp` at 406,604 bytes is **the largest asset on the site** — larger than
the Sofia gallery file I had flagged as the heaviest in Fix 6.

**Correction to Fix 2.** I estimated 98,552 bytes saved by wrapping destination heroes in
`<picture>`. That figure holds **for Bulgaria only**, whose hero is already in the generator.
Kyrgyzstan and Morocco destinations save **nothing** from Fix 2 alone, because no AVIF exists for
their heroes yet. Fix 2 must ship with the input-list additions, not before them. The blockquote
under Fix 2 anticipated this; the measurement confirms it.

### LCP is not purely a bytes problem

The destination report breaks LCP down, and the shape is the finding:

| Sub-part                | Duration     |
| ----------------------- | ------------ |
| Time to First Byte      | 40 ms        |
| **Resource load delay** | **1,680 ms** |
| Resource load duration  | 910 ms       |
| Element render delay    | 40 ms        |

**The hero does not begin downloading for 1.68 s** — that dominates, and no amount of AVIF fixes
it directly. The critical-path tree shows why: the HTML (17.76 KiB) and two `fonts.gstatic.com`
woff2 files (20.87 + 42.92 KiB) all complete around 1,787–1,792 ms, saturating Slow 4G before the
image gets bandwidth.

So **font bytes are directly delaying the LCP image**, which the 8 September baseline could not
show. Smaller heroes still help — they cut the 910 ms load duration and reduce contention — but
the font work below now earns its place, having previously been ranked "do not do".

### New: the font stack is misconfigured

`index.html:16` requests `Roboto:wght@400;500;700;900`. What the stylesheets actually use:

| Weight  | Rules using it | Declared?            |
| ------- | -------------- | -------------------- |
| **800** | **36**         | **no — synthesised** |
| 700     | 27             | yes                  |
| 400     | 23             | yes                  |
| 900     | 7              | yes                  |
| **600** | **3**          | **no — synthesised** |
| 500     | 2              | yes                  |

The most-used weight on the site is not downloaded. Thirty-six rules ask for 800 and get a
browser-synthesised faux-bold off 700 or 900, while 500 is downloaded for two rules.

**Recommended change: request Roboto as a variable font** — `family=Roboto:wght@400..900`. One
file instead of four static faces, typically well below the current 63.8 KiB for the two fetched,
and it makes 600 and 800 real weights rather than synthetic. It both cuts critical-path bytes and
_improves_ rendering fidelity.

> This changes how 600 and 800 text renders — from synthesised to true weights. It is a visual
> change, small but real, and should be eyeballed against the current site before shipping.
> Do not treat it as a pure performance change.

**Also flagged: `font-display` on the icon font.** Lighthouse costs the self-hosted
`material-*.woff2` **270 ms** for `font-display: block` (`styles.scss:20`). Phase 5 chose `block`
deliberately, to stop ligature names painting as text during a swap period — that reasoning is
sound and should not be reverted. The better fix keeps both properties: **preload the subsetted
icon font**. It is same-origin and only 3.08 KiB, so preloading removes the delay without
reintroducing the ligature flash.

### Smaller confirmed items

- **Payment logos have no `width`/`height`** (`public-footer.ts:81`, seven images). CLS is 0 today,
  so this is unprotected luck rather than a live defect. Cheap to fix.
- **Unused JavaScript: 49 KiB** — 27.1 KiB in `main.js`, 22.1 KiB in `chunk-BBXOUSuu.js`. Worth a
  treemap look, but note TBT is 10–50 ms, so this is bytes not blocking time.
- **The forced reflow is 34 ms on the tour page**, against 547 ms on the listing. That supports
  sequencing Fix 7 last: it is a listing-specific problem, not a site-wide one.

> A finding I checked and dropped: Lighthouse reports the payment logos with `src=""`. The
> deployed HTML has correct `src` values on all seven — the empty attribute is an artefact of
> Lighthouse reading the rendered DOM for not-yet-loaded lazy images. Not a defect.

### Revised order

Batch A is re-cut. The input-list additions move to the front, because they are the cheapest
change in the plan and they unblock both Kyrgyzstan pages plus two of the three commercial
priorities.

| #      | Change                                                                                   | Effort                        |
| ------ | ---------------------------------------------------------------------------------------- | ----------------------------- |
| **A1** | Add the four missing Kyrgyzstan/shared sources to the generator `inputs`, regenerate     | 4 lines + regen               |
| **A2** | Listing `sizes="100vw"` (Fix 1)                                                          | 1 attribute                   |
| **A3** | Destination `<picture>` (Fix 2) + tour-detail srcset pipe (Fix 3)                        | ~8 lines                      |
| **B1** | Generalise responsive widths (Fix 4)                                                     | ~8 lines                      |
| **B2** | Roboto variable font + preload the icon font                                             | 2 lines, needs a visual check |
| **C**  | Homepage AVIF (Fix 5), gallery sizes (Fix 6), payment dimensions, then the trace (Fix 7) | larger                        |

A1 and A2 together are four lines of list plus one attribute, and they cover the LCP element of
the two worst-measured pages plus the largest asset on the site.

---

## Summary

| Fix | File                           | Effort        | Bytes saved on the LCP element      | Assets to build         |
| --- | ------------------------------ | ------------- | ----------------------------------- | ----------------------- |
| 1   | `tour-listing-page.html`       | 1 attribute   | **135,975** (listing)               | none — already deployed |
| 2   | `destination-page.html`        | ~6 lines      | **98,552** (destinations)           | none — already deployed |
| 3   | `tour-detail.html`             | 2 attributes  | 0 on its own — unblocks Fix 4       | none                    |
| 4   | `generate-tour-web-images.mjs` | ~8 lines      | ~140,000 (tour + destination)       | regenerate              |
| 5   | homepage carousel              | larger        | ~30,000–40,000 (homepage)           | new AVIF set            |
| 6   | gallery previews               | via Fix 4     | not LCP — up to 463 KB of bandwidth | regenerate              |
| 7   | listing reflow trace           | investigation | unknown                             | none                    |

**Fixes 1 and 2 together save 234,527 bytes across the two worst templates and require no new
image assets at all** — every file they need is already built and deployed. Do them first.

---

## Fix 1 — Listing hero `sizes` (critical)

`apps/website/src/app/features/tour-listing-page/tour-listing-page.html:14`

```diff
-          sizes="(min-width: 926px) 100vw, 926px"
+          sizes="100vw"
```

The hero is `width: 100%` at every breakpoint (`tour-listing-page.scss:32-35`), so the slot is
always the full viewport. The current value claims a 926px slot on devices narrower than 926px —
wider than the phone — which pulls the 2560w candidate (226,063 B) instead of the 1440w one
(90,088 B).

**Verify:** build, then confirm the emitted `sizes` is `100vw` and the four `srcset` candidates are
unchanged. In a browser at 412px width with DPR 2.625, DevTools Network should show the **1440w**
file, not the 2560w one.

## Fix 2 — Destination heroes have no `<picture>` at all (high, free)

`apps/website/src/app/features/destination-page/destination-page.html:3`

The destination hero is a bare `<img>`. It ships **`bulgaria-tour-bgr.webp` at 330,628 bytes** —
the raw original — even though an AVIF of that exact source already exists and is already
deployed at 232,076 bytes, because the _tour_ page uses it. The two pages render the same image
at very different weights.

```diff
-    <img [src]="hero().src" [alt]="hero().alt" width="1600" height="900" fetchpriority="high" />
+    <picture style="display: contents">
+      <source
+        type="image/avif"
+        [attr.srcset]="hero().src | tourWebImageSrcset"
+        sizes="100vw"
+      />
+      <img [src]="hero().src" [alt]="hero().alt" width="1600" height="900" fetchpriority="high" />
+    </picture>
```

Import `TourWebImageSrcsetPipe` into the component's `imports` array, matching
`tour-listing-page.ts`.

Using the **srcset** pipe rather than the single-image one means this fix gains the responsive
candidates automatically once Fix 4 lands, with no second edit.

**Saves 98,552 bytes immediately** on destination pages, with no asset generation. Rises to
roughly 240,000 after Fix 4.

> Check the other destination heroes when implementing: only Bulgaria's source is in the
> generator's `inputs` list. Kyrgyzstan and Morocco destinations may fall back to the original
> until their sources are added in Fix 4.

## Fix 3 — Tour detail uses the single-image pipe (high, enabler)

`apps/website/src/app/features/tour-detail/tour-detail.html:5`

```diff
-        <source type="image/avif" [attr.srcset]="tour.heroImage.src | tourWebImage" />
+        <source
+          type="image/avif"
+          [attr.srcset]="tour.heroImage.src | tourWebImageSrcset"
+          sizes="100vw"
+        />
```

`tourWebImage` returns a single URL. `tourWebImageSrcset` returns the responsive set and _falls
back to the single URL when no set exists_, so this change is safe to make before Fix 4 — it is a
no-op until the variants exist, then starts using them.

Hero is `width: 100%` (`tour-detail.scss:36-39`), so `100vw` is correct. Swap the pipe import.

Line 199 (gallery previews) uses the same single pipe; leave it until Fix 6.

## Fix 4 — Generalise responsive variant generation (high)

`scripts/generate-tour-web-images.mjs:58`

```js
if (relativePath === "images/destinations/classic-tours-bgr.webp") {
```

A hardcoded filename equality check — a proof of concept never generalised. It is why exactly one
image site-wide has a responsive `srcset`.

Replace with a width rule. Small card images (400–632px wide) must be excluded: with
`withoutEnlargement: true` their variants would be byte-identical duplicates of the original.

```diff
+const RESPONSIVE_WIDTHS = [960, 1440, 1920];
+const RESPONSIVE_MIN_WIDTH = 1200;
...
-  if (relativePath === "images/destinations/classic-tours-bgr.webp") {
+  if (before.width >= RESPONSIVE_MIN_WIDTH) {
     const candidates = [];
-    for (const width of [960, 1440, 1920]) {
+    for (const width of RESPONSIVE_WIDTHS.filter((w) => w < before.width)) {
```

**This has a strong self-check: the listing's srcset must come out byte-identical.** The rule
yields 960/1440/1920 + 2560 for a 2560-wide source — exactly what is deployed today. If
`tour-web-images.ts` shows any change to the `classic-tours-bgr.webp` entry, the rule is wrong.

Which images gain variants, from their measured dimensions:

| Source                           | Dimensions            | Variants generated         | Current single AVIF |
| -------------------------------- | --------------------- | -------------------------- | ------------------- |
| `classic-tours-bgr.webp`         | 2560×1425             | 960, 1440, 1920            | unchanged           |
| `bulgaria-tour-bgr.webp`         | 1920×800              | 960, 1440                  | 232,076             |
| `morocco-bgr.webp`               | 1600×1066             | 960, 1440                  | 192,288             |
| `kyrgyzstan-women-only-bgr.webp` | 1600×753              | 960, 1440                  | 134,079             |
| Three Bulgaria gallery files     | 1600×1046 / 1600×2407 | 960, 1440                  | see Fix 6           |
| Five card images                 | 400–632 wide          | **none** — below threshold | unchanged           |

Run `node scripts/generate-tour-web-images.mjs`. It rewrites `tour-web-images.ts` and
`SEO_IMAGE_DELIVERY_MEASUREMENTS.json`; commit both. Originals are never overwritten.

**Also add the missing destination sources** (Kyrgyzstan, Morocco) to `inputs` so Fix 2 covers all
three destination pages rather than Bulgaria alone.

## Fix 5 — Homepage hero AVIF (medium)

The homepage hero already sizes correctly — `480w/720w/960w/1200w` — but in WebP only, with no
AVIF `<source>`. `HomePageCoverPhoto-5.webp` is 127,540 bytes.

This is a larger change than the others: the carousel rotates several images, each needing its own
AVIF set, and the parallax selector already had to be widened once when a `<picture>` wrapper was
introduced (Phase 5). Expect ~30–40 KB off the LCP element based on this site's own WebP→AVIF
ratios at quality 55.

Ranked below Fixes 1–4 deliberately: the homepage is already 84 with a 3.7 s LCP, and it carries
more risk per byte saved than any other fix here.

## Fix 6 — Gallery previews (medium, bandwidth not LCP)

`tour-detail.html:199`. These are `loading="lazy"`, so they do not affect LCP and should not be
counted as an LCP win. They are, however, the heaviest files on the site:

| File                              | AVIF today  |
| --------------------------------- | ----------- |
| `Sofia-City-Tour-Bulgaria-4.webp` | **463,593** |
| `Rila-Monasterry-Bulgaria-2.webp` | 206,079     |
| `Buzludzha-Monument-3.webp`       | 179,450     |

Fix 4 generates their variants automatically. To use them, switch line 199 to
`tourWebImageSrcset` and add a `sizes` matching the preview's rendered width — **not `100vw`**,
since these are grid thumbnails, not full-bleed. Measure the rendered width before choosing the
value; guessing here reintroduces exactly the Fix 1 bug.

Keep the lightbox pointing at the originals for full-size viewing.

## Fix 7 — Listing forced reflow (investigate last)

547 ms, unattributed. **Two prior source scans failed to find it** (Phase 5, lines 137 and 231).
Do not attempt a third read-the-code attempt; it needs a real browser performance trace against
production.

**Do not start this until Fix 1 is deployed and the listing re-measured.** Decoding a 2560×1425
AVIF on a phone is substantial main-thread work, and that is precisely what the inverted `sizes`
forces today. The reflow and much of the 150 ms TBT may be a symptom of Fix 1 rather than an
independent defect. Re-measure first, and only investigate what survives.

---

## Sequencing

Deploy and measure in three batches, so each result is attributable rather than one combined
re-measurement at the end.

**Batch A — no new assets, highest certainty.** Fixes 1, 2, 3.
Saves 234,527 measured bytes across listing and destination pages. Fix 3 lands as a no-op that
arms Batch B. Re-measure the listing and Bulgaria destination.

**Batch B — regenerate.** Fix 4, plus the added destination sources.
Tour and destination heroes gain responsive candidates. Verify the listing srcset is unchanged.
Re-measure the Bulgaria tour and the destinations.

**Batch C — the rest.** Fixes 5 and 6, then 7 only if it survives Batch A.

## Verification for every batch

Repo checks, all of which pass today and must continue to:

```bash
npm run lint
npm --workspace website run test -- --watch=false   # 132 tests / 15 files
npm run build                                        # 44 prerendered routes
```

Note the build needs Node ≥ 22.22.3; 22.22.2 fails the Angular CLI version gate.

Then, on the built output:

- The four AVIF candidates still resolve and return `image/avif`.
- Hero dimensions are unchanged — no crop, no upscale (the generator throws if they change).
- No horizontal overflow at 412px on listing, tour, destination and homepage.
- `sizes` renders as intended in the prerendered HTML.

**The real proof is a PageSpeed re-run, and it is currently blocked.** Production is unreachable
from the agent environment and the PSI API returns 429 on exhausted daily quota. Closing that
needs either a free **PSI API key** — which also makes the five audits repeatable from CI — or a
machine with outbound access to `omayatravel.com`. Until one exists, byte counts are verified and
LCP improvements remain predicted.
