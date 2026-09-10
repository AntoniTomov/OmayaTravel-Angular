# Phase 5 — measured performance work

8 September 2026. Production mobile baseline recorded; first image-delivery changes implemented
locally. Phase 5 remains in progress. No post-deployment speed gain or field Core Web Vitals pass
is claimed.

## Production baseline

One PageSpeed Insights run per template: initial load, emulated Moto G Power, Slow 4G,
Lighthouse 13.4.1, HeadlessChromium 151.0.7922.71. These are simulated lab results, not repeat-run
medians or real-user percentiles. Every report showed **No Data** in its real-user section.
INP is unavailable; Total Blocking Time is a separate lab diagnostic.

| Template and report                                                                                                                                 | Performance | FCP   | LCP   | TBT    | CLS |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ----- | ----- | ------ | --- |
| [Homepage](https://pagespeed.web.dev/analysis/https-omayatravel-com/u9p4m5shun?form_factor=mobile)                                                  | 84          | 3.0 s | 3.7 s | 0 ms   | 0   |
| [Bulgaria tour](https://pagespeed.web.dev/analysis/https-omayatravel-com-tour-item-bulgaria-beyond-the-ordinary/cbj9lctumu?form_factor=mobile)      | 72          | 2.7 s | 6.9 s | 10 ms  | 0   |
| [Bulgaria destination](https://pagespeed.web.dev/analysis/https-omayatravel-com-destinations-bulgaria/x61e26uzrk?form_factor=mobile)                | 86          | 2.2 s | 3.8 s | 0 ms   | 0   |
| [Tour listing](https://pagespeed.web.dev/analysis/https-omayatravel-com-tours-list/g03d5g1d5z?form_factor=mobile)                                   | 64          | 4.1 s | 9.2 s | 150 ms | 0   |
| [Song Kul article](https://pagespeed.web.dev/analysis/https-omayatravel-com-how-to-visit-song-kul-lake-in-kyrgyzstan/de1tlldjmr?form_factor=mobile) | 88          | 2.6 s | 3.3 s | 10 ms  | 0   |

Captured around 01:47–01:57 GMT+3. The public API initially returned HTTP 429 due to shared quota
exhaustion; the public PageSpeed interface completed these runs. Report links may expire; these
displayed metrics are preserved here. Each report returned 100 for basic Lighthouse SEO checks,
which is not a ranking score or proof of comprehensive SEO completion.

## First implementation

The Bulgaria report identifies the hero as its LCP element and flags that image and the first
three gallery previews for delivery improvements. Its estimated 1,229 KiB saving is a whole-page
estimate, not a saving achieved by this change.

Created six AVIF web encodings: those four images plus the Women-only Kyrgyzstan and Morocco
Classic heroes. The latter two extend the change to the other confirmed priorities; their pages
have not had separate PageSpeed runs in this batch.

- Original dimensions and composition retained, with no crop or upscaling.
- AVIF quality 55, effort 5; generated manifest includes only smaller outputs.
- Hero and information-tab previews use `picture`, with original WebP fallbacks. High-priority
  hero loading and lazy previews are retained; full-size gallery viewing uses original files.
- Desktop hero parallax selector extended to cover the picture wrapper.
- Added an accessible name to the image-only "Discover more tours" link identified by the audit.

| Image                           | Original bytes | AVIF bytes    | Saved               |
| ------------------------------- | -------------- | ------------- | ------------------- |
| Bulgaria hero                   | 330,628        | 232,076       | 98,552              |
| Women-only Kyrgyzstan hero      | 161,092        | 134,079       | 27,013              |
| Morocco Classic hero            | 257,924        | 192,288       | 65,636              |
| Bulgaria Rila Monastery preview | 315,010        | 206,079       | 108,931             |
| Bulgaria Buzludzha preview      | 217,746        | 179,450       | 38,296              |
| Bulgaria Sofia preview          | 671,924        | 463,593       | 208,331             |
| **Across six files**            | **1,954,324**  | **1,407,565** | **546,759 (28.0%)** |

This total spans different tours, not one page load. The four Bulgaria files save 454,110 bytes
when all four are requested by an AVIF-capable browser. Byte savings are not LCP measurements.

Reproduce with `node scripts/generate-tour-web-images.mjs`. Existing `sharp` and `prettier`
dependencies are used at generation time. Content-hashed assets, a typed manifest and
[byte measurements](SEO_IMAGE_DELIVERY_MEASUREMENTS.json) are written. Normal builds use the
generated files. Originals are never overwritten; obsolete outputs are not automatically deleted.

## Verification and next work

- Combined suite: 127 tests pass in 13 files. Production build and formatting checks pass.
- All 38 local sitemap URLs return 200 with matching canonicals. AVIF sources return 200 with
  `image/avif`. All generated files preserve original dimensions and are smaller than their sources.
- Browser inspection confirms the Bulgaria hero and three previews load AVIF, while the lightbox
  opens original WebP. Checked the Bulgaria page and new Song Kul journey panel at mobile width:
  no horizontal overflow. No live enquiry submission was made.
- Fonts unchanged: these runs show CLS 0, so the earlier font-swap hypothesis remains unproven.
  Zero CLS on one load does not certify field CLS. Build-budget warnings remain.

Release and repeat comparable audits, preferably three per template, before reporting a speed
gain. The listing is the weakest sampled template: investigate its LCP breakdown, image delivery
and forced-reflow trace next. Its hero is 242,714 bytes and its first two card files are 351,662
and 603,314 bytes. Responsive delivery is a candidate, preserving resolution for the actual
display and device pixel ratio. Collect real-user data as traffic permits; INP is still unknown.

Method: [Google's LCP guidance](https://web.dev/articles/optimize-lcp) separates lab from field
measurement and delivery from render delay; [CLS guidance](https://web.dev/articles/optimize-cls)
requires investigating actual shifts. These support targeted changes, not guaranteed score gains.

## Listing continuation — 8 September 2026

Expanded the saved listing audit: the hero is the LCP element. The image audit flags the
Algeria, Bulgaria and Kyrgyzstan cards, Morocco image, women-only cards and hero. Forced reflow
is **547 ms, unattributed**; this is evidence to investigate with a trace, not attribution to
a particular component. The trace breakdown and simulated 9.2 s LCP use different timing
models and must not be added together.

Extended AVIF generation and the listing hero/card template, retaining original dimensions,
original WebP fallbacks, lazy card loading and high-priority hero loading. Preserved the global
hero positioning selector through the picture wrapper. Added a discernible name to the listing
sidebar discovery link.

| Additional asset           | Original bytes | AVIF bytes |
| -------------------------- | -------------: | ---------: |
| Listing hero               |        242,714 |    226,063 |
| Algeria card               |        351,662 |     66,389 |
| Bulgaria card              |        603,314 |     69,562 |
| Kyrgyzstan card            |        190,830 |     18,564 |
| Bulgaria women-only card   |         61,982 |     45,184 |
| Kyrgyzstan women-only card |         52,646 |     37,766 |

These six additional files save **1,039,620 bytes**. The listing also reuses the Morocco
encoding from the first batch. Across all twelve generated files, savings are **1,586,379
bytes**; this is a file-size comparison, not a measured page-load or ranking improvement.

Verification: production build passes (40 prerendered routes), 127 tests across 13 files pass,
and formatting passes. Initial bundle warning is now 611.86 kB against 500 kB; tour CSS remains
14.83 kB against 14 kB. Browser verification at 390 px viewport: document width and scroll width
both 375 px; hero and six mapped card images load AVIF with original natural widths; unmapped
cards load original WebP. Price sorting and navigation to the selected tour work.

Next: obtain an attributable performance trace for listing render delay/reflow; inspect
responsive hero options and accessibility contrast/touch-target findings. The visible listing
hero is a townscape but its existing alt describes travellers on a road: queue an asset/alt
audit. Review and release the local batch, then rerun comparable mobile audits before claiming
LCP improvement. No deployment or new merge request was made in this continuation.

## Responsive delivery, accessibility and startup work — 8 September 2026

Added uncropped 960w, 1440w and 1920w AVIF alternatives for the listing/classic hero:
48,060 / 90,088 / 130,722 bytes, respectively, alongside the 2560w alternative (226,063).
The source sizes value accounts for object-fit: cover on a 515 px-high hero: a roughly 926 px
wide source is needed even on a narrow viewport before pixel-density scaling. These are
alternative downloads, not cumulative per-load savings. Original WebP remains the fallback.

Expanded the saved audit's accessibility and long-task details:

- Search and consent Accept buttons fail contrast with white text on gold; changed text to dark.
- Footer dates/copyright fail contrast; changed Omaya's footer-muted colour from #888 to #b8b8b8.
- Minimum/maximum price sliders overlap and fail touch-target spacing; separated their tracks,
  added visible labels, 44 px input rows, 24 px thumbs and a keyboard-focus outline.
- Corrected listing/classic hero alt text to describe the displayed hillside town.
- Long tasks include the document (335 ms), main (108 ms), a shared chunk (198/100/75 ms)
  and unattributed work. The 547 ms forced reflow remains unattributed. A source scan found no
  offsetWidth/offsetHeight/getBoundingClientRect loops in the listing; this does not establish
  the root cause or prove that the reflow is fixed.

The global SEO service imported every full article. Split maintained metadata from article
bodies, using the same metadata for rendering and SEO. The eight-article build initially reached
627.99 kB; after the split it is **570.37 kB**, 57.62 kB lower. This is also below the prior
611.86 kB twelve-image build despite four new guides. The 500 kB warning remains, as does the
14.83 kB tour CSS warning. No LCP, TBT or field improvement is claimed from bundle sizes alone.

129 tests / 14 files pass; build prerenders 44 routes and formatting passes.
Next: browser/HTTP checks, release review and comparable production audits. Full trace capture
with useful attribution is still needed before calling listing render-delay work complete.

## Critical-path fonts — 8 September 2026

The image work had reduced what the hero costs but not what competes with it. Inspecting the built
head against the saved audits found two requests on the critical path of **every** page, neither
of them serving anything the pages use.

### A preload nothing consumed

`index.html` carried `<link rel="preload" as="style">` for the Google Fonts stylesheet alongside
the `<link rel="stylesheet">` for the same URL. The build inlines that stylesheet as `@font-face`
rules and drops the stylesheet link, but it does not drop a hand-written preload — so every page
opened a connection to `fonts.googleapis.com` and fetched a stylesheet that was then never used, at
`as=style` priority, ahead of the LCP image. Chrome logged the "preloaded but not used" warning on
every page; that warning is the confirmation, not an inference.

Removed the preload, and the `fonts.googleapis.com` preconnect with it, since nothing requests that
origin at runtime once the preload is gone. The `fonts.gstatic.com` preconnect stays — it still
serves Roboto and Kristi. The stylesheet links stay too: the build reads them to produce the inline
`@font-face` rules, so removing them would remove the fonts.

### Material Icons: the whole set for 27 icons

`fonts.gstatic.com` served the complete Material Icons font, **128,352 bytes**, on every first page
view. The site renders 27 of those icons. On a bandwidth-constrained connection that file is
downloaded alongside the hero, so it was not only weight but contention with the LCP element.

`scripts/generate-material-icons-subset.mjs` now subsets it to the ligatures found in the source
and writes a self-hosted copy. Result: **2,688 bytes, 125,664 saved (97.9%)**, and one fewer
third-party origin on first view. Angular fingerprints the file, so it is served same-origin as
`media/material-icons-subset-<hash>.woff2` with `Cache-Control: public, max-age=31536000`.

**The subsetting detail worth keeping.** Subsetting by text alone produced 114,644 bytes — a saving
of 13,708. Harfbuzz closes the glyph set over the layout features, and because every icon name is
spelled from the same alphabet, retaining the letters retained nearly every ligature in the font.
Disabling layout closure and naming the 27 icon codepoints explicitly drops that to 2,688 while the
ligature rules whose target glyphs survive keep working — so templates still read
`<mat-icon>calendar_month</mat-icon>` rather than an opaque codepoint. A subset done the obvious way
saves 11% of what this one saves.

`font-display: block`, not `swap`. During a swap period the browser paints the ligature name as
literal text, so a slow load would flash the word "calendar_month" at the reader.

**The failure mode this creates, and the guard against it.** An icon added without rerunning the
generator has no glyph, and a Material Icons ligature with no glyph renders as its own name — the
page prints "calendar_month" instead of quietly losing an icon. `material-icons-subset.spec.ts`
scans the templates and content constants and fails if the subset and the source disagree in either
direction. The guard was confirmed by injecting an unsubsetted icon: the suite failed with
`expected [ 'rocket_launch' ] to deeply equal []`, and passed again once reverted.

### Verification

- 132 tests across 15 files pass, formatting passes, the build prerenders 44 routes. Initial bundle
  is 570.57 kB, unchanged by this work; both existing budget warnings remain.
- All 27 ligatures were rendered in the browser and measured: 27 distinct, non-blank glyphs, none
  falling back to text. This is the check that matters, because a broken subset fails visibly.
- No request to `fonts.googleapis.com` on any page; no `materialicons` request to
  `fonts.gstatic.com`; neither string survives anywhere in the built output.
- Home, listing, tour, destination, FAQ and contact return 200; the font returns `font/woff2`.
- Icons confirmed rendering on the tour detail page (information/tour plan/gallery tabs, scroll-to-
  top) and the FAQ page at 375 px.

**Not claimed.** This is a change in requests and bytes on the critical path. No LCP, TBT or score
improvement is claimed, and none should be reported until comparable production audits run after
release — the same rule the rest of this document follows.

### Two things checked and dismissed, recorded so they are not re-investigated

- **Local responses are uncompressed; production is not.** The local SSR server returns HTML with
  no `Content-Encoding`, which makes local transfer figures useless but says nothing about
  production. `https://omayatravel.com/` returns `Content-Encoding: br` from the CDN. There is no
  compression problem to fix.
- **The hero srcset descriptors are correct.** A hero reporting `naturalWidth` 926 while serving
  the 1920w candidate looks like a mislabelled descriptor. It is not: for `w` descriptors the
  browser reports the density-corrected intrinsic size, and the files measure at their declared
  widths.

### Next

Unchanged from the previous section, plus one new candidate:

- The forced reflow on the listing is **still unattributed**. A source scan again found no layout-
  reading APIs in app code; the only per-frame layout work is the hero parallax in `app.ts`, which
  writes a custom property on `documentElement` and reads `scrollY` and `matchMedia` on the next
  frame. That is a plausible shape for the pattern but it runs on scroll, not on load, so it is a
  hypothesis and not an attribution. A real trace is still required.
- **Roboto and Kristi are still third-party**, four Roboto weights across several unicode subsets
  from `fonts.gstatic.com`. Self-hosting them would take the last third-party font origin off the
  critical path. Deliberately not done here: it is a larger change than the icon subset, and the
  earlier guidance against changing font loading on lab evidence alone still stands.
- The listing hero serves the 1920w candidate to a 375 px viewport at DPR 2, which is correct for
  the `sizes` value and the `object-fit: cover` box. Capping the density would trade sharpness for
  bytes and is an editorial call, not a defect.

## Local layout probe — 8 September 2026

The saved audit reported **547 ms of forced reflow, unattributed**, and earlier sessions had left it
unattributed. Wrappers can time selected layout-reading APIs and retain their stacks. This
attributes instrumented calls in the local run, not the complete production Lighthouse trace.

### Method

A probe was injected into `index.html`, rebuilt, and the instrumented build served over SSR, so it
was installed before any application script ran. It wraps `getBoundingClientRect`, `getClientRects`,
`scrollIntoView`, `getComputedStyle`, `matchMedia`, `elementFromPoint` and the layout-reading
getters on `Element`, `HTMLElement` and `Window` — `offsetWidth/Height/Top/Left/Parent`,
`clientWidth/Height/Top/Left`, `scrollWidth/Height/Top/Left`, `scrollY/X`, `pageYOffset/XOffset`,
`innerWidth/Height`. Each call is timed and recorded with its stack; a `longtask` observer runs
alongside so records line up against tasks. The probe was reverted and the build restored; the
working tree is clean and nothing of this ships.

### Result: small costs in the instrumented local run

Across the whole load of `/tours-list/` at 375 px, **18 layout-forcing calls totalling 2.9 ms**:

| Source                    | Calls |  Total |
| ------------------------- | ----: | -----: |
| GA4 Google tag            |     6 | 1.7 ms |
| App and Angular bundles   |     1 | 0.1 ms |
| The measuring code itself |    11 | 1.1 ms |

The single largest was GA4 Google tag reading `scrollLeft` on `<html>` at 100 ms, inside the
one long task of the load (73–101 ms across runs, attributed only to `window`).

The wrappers recorded 0.1 ms for one application/Angular call in this local run. The run
did not reproduce the production audit's 547 ms. Multiplying local timings by a guessed CPU
factor cannot bridge differences in build, throttling, consent, cache and execution. This
does not identify the production root cause or rule out application-level improvements.

### Desktop parallax is not exercised on a narrow initial viewport

The standing hypothesis named `App.updateHeroBackgroundPosition` in `app.ts`, which writes a custom
property on `documentElement` and reads `matchMedia` and `scrollY`. Reading style after writing it
is the classic shape, so the hypothesis was reasonable. It is also wrong for the case that was
measured, and the reason is in the method's first line:

```
if (!window.matchMedia('(min-width: 48.01rem)').matches) {
  this.document.documentElement.style.removeProperty('--omaya-hero-background-y');
  return;
}
```

At 375 px that test is false, so the mobile path removes a property that was never set and returns.
It does not read `scrollY` or set the parallax offset on this path. Measured per frame on the listing:

| Path                                       | Per frame |
| ------------------------------------------ | --------: |
| Mobile branch, as written                  | 0.0143 ms |
| Reads only, doing nothing                  | 0.0113 ms |
| Desktop branch, as written                 | 0.2063 ms |
| Desktop branch without the `.matches` read | 0.1327 ms |

The mobile branch is indistinguishable from doing nothing. On desktop the pattern is real but
costs about 0.2 ms per scroll frame on this page, of which roughly 0.07 ms is the `.matches` read
forcing a recalculation after the previous frame's write. That is worth knowing but it is not a
546 ms problem, and it does not run at all in the mobile audit that reported one.

**One measurement is excluded.** A first run put the write-then-read pattern at 2.67 ms per frame.
It did not reproduce across three later runs on a warmed page and is not used here; the figures
above are the reproducible ones. Recorded so the discarded number is not rediscovered and believed.

### What this suggests

The Google tag appears in recorded layout reads and overlaps a long task attributed to
`window`. This is a candidate for testing; overlap does not establish the full task's cause,
and this run does not isolate Meta Pixel's contribution. The application loads GA4 `gtag.js`,
not a Google Tag Manager container, despite the shared googletagmanager.com domain.

### Limits of this result

Unthrottled desktop CPU, local build and accepted-consent session. The probe covers wrapped
APIs and can affect timing. The production audit used a different build and throttled load.
A comparable trace or controlled tag-enabled/tag-deferred experiment is needed before
assigning the original 547 ms or claiming a production TBT benefit.

## Recommended next, in order — 8 September 2026

The sections above each end with their own "next", written as the work happened. This is the
consolidated view, ordered by value, with who has to decide.

### 1. Release this branch and re-run the five audits — highest value, blocked on merge

Nothing in this document is confirmed in production. Every figure here is a local lab build. The
five production audits at the top are the **pre-change** baseline; comparable post-change runs are
what turn everything below into evidence. Until that happens, the honest summary of Phase 5 is
"fewer requests and bytes on the critical path, effect unmeasured".

Repeat the same conditions: one run per template, emulated Moto G Power, Slow 4G, mobile form
factor, and preferably three runs per template rather than one, since single lab runs move around.

### 2. Test Google tag and Meta Pixel deferral — candidate, needs a marketing decision

After release, compare consent-preserving loading options under matching conditions. Include
first-visit/no-consent and accepted-consent cases: analytics are already gated on consent.
Test tags independently where possible and verify page views/enquiry events are not lost or
duplicated. The probe does not demonstrate a production TBT improvement.

Choose scheduling only after measuring performance and agreeing reporting trade-offs.
No tracking behaviour has been changed by this review.

### 3. Fonts — on hold at Toni's request

No further font changes are planned now. The analysis below is retained for reference.

Worth stating precisely, because the case is weaker than the icon font's and should not be sold on
the same terms.

| What                                                         |          Now |
| ------------------------------------------------------------ | -----------: |
| Inlined `@font-face` CSS in every page's HTML                | 21,057 bytes |
| — as a share of the listing's 98,867-byte HTML               |          21% |
| Roboto face declarations, across 9 unicode subsets           |           36 |
| Roboto latin woff2                                           | 43,136 bytes |
| Roboto second subset woff2                                   | 20,556 bytes |
| Kristi woff2                                                 | 25,624 bytes |
| Total downloaded from `fonts.gstatic.com` on an English page | 89,316 bytes |

The gain is **latency and document size, not font weight**: it removes the last third-party origin
from the critical path — one DNS + TCP + TLS handshake, roughly 3 RTT — and replaces ~20 kB of
inlined CSS per page with about 1 kB covering only the subsets an English-only site needs. It also
makes a real `preload as="font"` possible for the one face first paint depends on. The font bytes
themselves barely move; self-hosting does not shrink glyphs. Unlike Material Icons there is no 98%
saving here, and it should not be described as if there were.

Licensing is not an obstacle — Roboto is Apache 2.0, Kristi is OFL, both permit self-hosting, and
the licence files ship with the fonts. The cost is a pinned version someone has to refresh
deliberately, the same maintenance the icon subset now carries.

### 4. Field data, once traffic allows

Every report so far shows **No Data** in its real-user section. CrUX/Search Console or suitable real-user monitoring can provide field CLS and INP.
INP remains unknown here; lab measurements do not establish the field result.

### Still explicitly not recommended

- **Changing `font-display` or adding `size-adjust` fallback metrics.** The font-swap hypothesis is
  still unproven, and the guidance not to change font loading on lab evidence alone stands.
- **Capping the hero's density.** The listing hero serves the 1920w candidate to a 375 px viewport
  at DPR 2, which is correct for the `sizes` value and the `object-fit: cover` box. Dropping to
  1440w trades sharpness for about 40 kB — an editorial call, not a defect, and not one to make
  quietly.
- **Speculative application rewrites for the 547 ms result.** The local probe did not reproduce
  it. Obtain comparable evidence before choosing a fix; it is not conclusively attributed.

## Acting on the first post-release mobile audits — 10 September 2026

Two production mobile audits after the Phase 5 release, on pages the original five-template
baseline never covered: `/tour-item/kyrgyzstan-tour/` and `/destinations/kyrgyzstan/` (score 80,
FCP 3.0 s, LCP 4.3 s, TBT 30 ms, CLS 0). Desktop was reported as fine; this work is mobile only.

**There is no before/after here.** Neither URL is in the five-template baseline, so nothing in this
section is a comparison against a previous score. The measurements below are local, and the
production effect is unknown until these two URLs are re-audited.

### A layout shift of 1.007, and it was ours

The tour audit attributed a shift of **1.000** to `app-public-footer`, with a separate audit naming
the seven payment-provider logos as images without explicit dimensions.

The cause: `.public-footer__payments img` is styled `height: 60px; width: auto`, and the images
carried no `width`/`height` attributes. With `loading="lazy"` and no intrinsic ratio the browser
reserves **no width at all**, so every logo that decoded pushed the footer around.

Fixed by carrying intrinsic pixels on each provider and binding them. The CSS still decides the
rendered size; the attributes only supply the ratio. Verified locally on the tour page: **CLS 0,
with no individual shift above 0.001**, measured after scrolling the footer into view, which is
what triggered the shift before.

This also corrects an earlier claim in this document. "0 of 36 images at risk of layout shift — CSS
reserves the space in every case" was measured across four templates that did not include the
footer, and production found a shift of 1.000 there. The claim was too broad for its evidence.

### The icon font: `block` was right, a separate request was not

The audit charged **210 ms** to `font-display` on the subset icon font and put it at **1,037 ms** in
the critical chain — it is only discovered once the stylesheet parses.

Lighthouse suggests `swap` or `optional`. Both are wrong here and the advice does not know why: for
a ligature icon font the fallback renders the ligature's own _name_, so either setting would show
the reader the word "calendar_month" instead of an icon. `block` stays.

The request went instead. At 2,688 bytes the font is smaller than a round trip, so the generator
now emits it as a base64 `@font-face` in `styles/_material-icons.scss`. Cost: the stylesheet goes
from 1.57 kB to 4.25 kB transferred. Gain: one fewer request, and the font is available the moment
the CSS applies. Verified: 15 icons render on the tour page, none as text, and **no icon-font
request is made at all**.

### Images: the audits were pointing at cards, not heroes

The destination audit flagged 281 KiB, and the largest asset on the page turned out to be a guide
thumbnail: the Song Kul yurt camp at **475,382 bytes**, rendered at 335 CSS px, larger than the
hero. The AVIF encodings for the two big destination images already existed — the template simply
was not using them.

- Destination tour cards, country cards and guide cards now go through `<picture>` with the AVIF
  srcset, as the hero already did.
- Two guide sources added to the generator.
- `RESPONSIVE_WIDTHS` gains **640**. Cards render near 333 CSS px, so even at DPR 2 they need about
  690 px and the old 960 floor was the smallest thing on offer.
- 33 AVIF files orphaned by the hash change were deleted after checking that nothing in `src` or
  `docs` referenced them: **4,317,312 bytes** that would otherwise have shipped.

Measured locally on `/destinations/kyrgyzstan/` at 375 px, all lazy images forced to load:

|               |       Image bytes |
| ------------- | ----------------: |
| Before        |           898,921 |
| After         |           231,115 |
| **Reduction** | **667,806 (74%)** |

Song Kul went 475,382 → 26,837. No large WebP is fetched any more; the prerendered HTML carries the
AVIF `srcset`, so this holds on first paint and does not depend on hydration.

### Verified

132 tests across 15 files, formatting clean, 44 prerendered routes. Initial bundle 574.39 kB, up
3.76 kB from the inlined font.

### Not done, and why

- **`discover-more-tours.webp`** — 46.5 KiB, 17.9 KiB of flagged savings, used as a CSS background
  on the tour and listing templates. It needs a stable-named AVIF and `image-set()`, because SCSS
  cannot read the hashed manifest. Left out to keep this change reviewable.
- **The Google Pay logo** is 160×160 for a 60×60 slot, and a Kyrgyzstan thumbnail is oversized.
  About 10 KiB combined, below the fold.
- **Unused JavaScript, ~50 KiB** across `main.js` and one chunk. This is framework code; it needs a
  real look at what the initial bundle pulls in, not a quick fix.

Re-audit both URLs under the same conditions before claiming any of this improved the score.

## Tour detail: the gallery was the whole problem — 10 September 2026

Post-release production mobile audits. `/destinations/kyrgyzstan/` came back at **97**, so the
previous change worked there. `/tour-item/kyrgyzstan-tour/` sat at **79**, with CLS 0 and no
font-display finding — both of those confirmed fixed in production — and 253 KiB of flagged image
delivery.

### What the audit was actually pointing at

Every flagged item was a gallery preview, not the hero.

`kyrgyzstan-gallery-02.webp` is a 1183×2560 phone photograph. Its AVIF is 313 kB, and the tour
template shipped all of it for a thumbnail, because the gallery preview used the `tourWebImage`
pipe — one fixed AVIF, no responsive candidates — while the full gallery tab used a plain `<img>`
with no AVIF at all.

Both now go through `<picture>` with `tourWebImageSrcset`, and the generator covers the whole
twelve-image Kyrgyzstan gallery rather than the two images that happened to be audited.

### A mistake worth recording, because the fix nearly shipped blurry

The first `sizes` value assumed the three-column grid held on mobile: `31vw`. It does not — the
grid collapses to one column at `48rem`, so the thumbnails are about **327 CSS px** wide, not 116.
The browser dutifully picked a 320w candidate and upscaled it into a 327 px slot.

Caught by asserting `naturalWidth >= renderedWidth` rather than by looking at the page, which is
the check worth keeping: a blurry image is not visible in a byte count, and at a glance the change
looked like a large win precisely _because_ it was serving too little data. Corrected to
`(min-width: 48.01rem) 31vw, 90vw`, and every thumbnail now measures 337 against 327 rendered.

### Results, measured locally at 375 px with lazy images forced

|                                  |             Bytes |
| -------------------------------- | ----------------: |
| Gallery image 2 thumbnail        | 313,286 → 140,476 |
| Hero (the LCP element)           |   79,106 → 58,535 |
| `discover-more-tours` background |   47,608 → 11,248 |
| **Page total**                   |     **→ 363,628** |

`RESPONSIVE_WIDTHS` gained 320, 480 and 800. The 800 step matters most: a 375 px hero at DPR 2
needs 750 device px, and 960 was previously the smallest candidate that cleared it.

`discover-more-tours.webp` was the item deferred from the previous change. CSS backgrounds cannot
read the hashed manifest, so it gets a stable-named AVIF beside the original and is referenced via
`image-set()`. The WebP declaration is repeated first, so a browser without `image-set()` keeps a
background rather than losing it.

### Verified

132 tests across 15 files, formatting clean, 44 prerendered routes, initial bundle unchanged at
574.39 kB. No thumbnail or hero upscales. The `discover-more-tours` background resolves to AVIF.

### What is left on this page

- **The tall gallery sources are the remaining ceiling.** `kyrgyzstan-gallery-02` is 1183×2560 and
  the template declares `800×1100`, so `object-fit: cover` discards a large part of every byte
  downloaded. Serving a crop would fix it properly — that is an editorial decision about
  composition, not a delivery one, so it is raised rather than taken. Re-encoding the source
  photographs at a sane height would do it too.
- **~50 KiB of unused JavaScript**, unchanged and still framework code.
- The hero is flagged for compression at quality 55. Lowering it further trades LCP sharpness for
  bytes on the largest element on the page; not worth doing blind.

Re-audit before claiming a score change.

## Cropping gallery thumbnails, and a measured before/after — 10 September 2026

### Why cropping here is not an editorial decision

The gallery grid renders every image through `object-fit: cover` with **no `object-position` set**,
so the default `50% 50%` applies. A centred crop is therefore _exactly_ the region the grid already
displays: the rendering is pixel-identical and only the bytes change. That is what makes this safe
to do without a conversation about composition, unlike the art-directed crops still outstanding.

The originals are untouched. The lightbox shows the whole frame at `max-height: 82vh` and its
"open full-size" link points at `image.src`, so cropping the source files themselves would have
broken the full-size view. The crops live in a separate manifest, `TOUR_WEB_THUMBNAIL_SRCSETS`,
consumed only by the grid.

Sources that cannot fill the crop are clamped rather than skipped: a landscape 1230×800 photograph
in a portrait slot is limited by its height and yields 582×800, which still beats leaving the
browser to upscale a smaller candidate.

### Before and after, same page, same viewport, same script

`/tour-item/kyrgyzstan-tour/` at 375 px with every lazy image forced to load, measured against
three local SSR builds:

| Build                                                   | Image bytes | Requests |
| ------------------------------------------------------- | ----------: | -------: |
| `dev` — what production serves today, scoring 79        |     748,624 |       18 |
| plus PR #75 (gallery srcset, 800w step, CSS background) |     363,628 |       18 |
| plus this change (cropped thumbnails)                   | **326,260** |       18 |

**Total against production: −422,364 bytes, −56.4%.** This change on its own contributes −37,368
(−10.3%); most of it lands on the one genuinely tall photograph, 140,476 → 104,595, because the
other two gallery previews are already close to the display ratio and have little to crop.

The hero — the LCP element — is 79,106 → 58,535 across both changes, −26%.

### What this will and will not do to the score

**Say the quiet part plainly: most of these bytes are marked `Unscored` by Lighthouse.** The
"Improve image delivery" insight that flagged 253 KiB is labelled Unscored, and the gallery
previews are lazy and below the fold. Removing their weight is a real improvement for real
visitors — less data on a metered phone, faster scrolling — but it is not what the number is
computed from.

The score comes from FCP 2.9 s, LCP 4.4 s, TBT 40 ms, CLS 0 and SI 3.2 s. The only part of this
work that touches those is the hero, and 20.5 kB less on Slow 4G is worth roughly a tenth of a
second. **Expect a small score movement, not a jump to 97.** The destination page reached 97
because its problem — a 475 kB thumbnail and two uncropped card images — sat much closer to the
metrics that count.

If the goal is the tour page's number specifically, the remaining lever is LCP, and that means the
render-blocking chain and the hero, not the gallery.

### Also found, and not caused by this work

Six images upscale into their slots on the tour page: five highlight thumbnails whose sources are
only 231 px wide against a 327 px slot, and the Visa logo at 102 px against 139. Both predate this
change — the highlight sources are simply too small, and the payment logos are sized by CSS height.
Worth fixing when someone regenerates those assets; not a delivery problem.
