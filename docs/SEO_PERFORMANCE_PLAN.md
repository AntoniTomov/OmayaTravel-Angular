# Performance improvement plan — 9 September 2026

Written after the `dev` → `master` release (`04240f0`) and the runtime publish to
`hostinger-runtime` (`d2d97a3`).

## What this plan is based on — and what it is not

**No new performance measurement was taken.** Two independent routes are unavailable from the
agent environment:

- **Direct requests to `omayatravel.com`** are refused by the environment's network policy — the
  proxy answers `403` to `CONNECT`. Nothing about the site; the host is simply not reachable.
- **The PageSpeed Insights API** returns `429`: _"Quota exceeded for quota metric 'Queries' and
  limit 'Queries per day'"_ on the shared anonymous project. Four attempts with backoff all
  returned 429. Note this is a **quota** response, not a network block: the request does reach
  Google. A free PSI API key would lift it.

So no figure in this document is a fresh measurement of the released site. The plan rests on two
things that **are** solid:

1. **The 8 September production baseline** in [Phase 5](SEO_PHASE_5_PERFORMANCE.md) — five real
   PageSpeed runs against production, one per template.
2. **Byte-level analysis of the exact artefact production is serving** — `hostinger-runtime` at
   `d2d97a3`, extracted and inspected file by file. Every byte count below is measured from that
   artefact, not estimated.

The baseline predates this release, but this release changed no hero image, template or bundle, so
the delivery characteristics it describes still hold.

## Measured 9 September, 18:47 EEST

Two audits Toni ran after the release, on pages absent from the 8 September baseline. Same
emulation. These are the first measurements taken **after** this release.

| Page                          | Perf | FCP   | LCP   | TBT   | CLS | SI    |
| ----------------------------- | ---- | ----- | ----- | ----- | --- | ----- |
| `/tour-item/kyrgyzstan-tour/` | 84   | 2.0 s | 4.2 s | 50 ms | 0   | 2.5 s |
| `/destinations/kyrgyzstan/`   | 86   | 2.0 s | 3.5 s | 10 ms | 0   | 4.7 s |

They confirm the diagnosis and add three things, all detailed in the
[fix plan](SEO_PERFORMANCE_FIX_PLAN.md):

- **Kyrgyzstan has no AVIF coverage at all.** No Kyrgyzstan classic asset is in the generator's
  input list. Its hero (217,994 B) is the LCP element of both pages above, and its gallery holds
  the largest file on the site at 406,604 B. Kyrgyzstan is one of the three commercial priorities.
- **LCP is not purely a bytes problem.** The destination breakdown is 40 ms TTFB, **1,680 ms
  resource load delay**, 910 ms load duration, 40 ms render delay. The hero does not start
  downloading for 1.68 s because the HTML and two `fonts.gstatic.com` files saturate Slow 4G
  first. Font bytes are delaying the LCP image.
- **The font stack is misconfigured.** `Roboto:wght@400;500;700;900` is requested, but weight 800
  is the most-used weight in the stylesheets (36 rules) and is not downloaded at all, while 500 is
  downloaded for 2 rules.

The third point revises this document's "what not to do" section: font work was ranked bottom on
the grounds that CLS is 0 and TBT is negligible. That reasoning held for _layout stability_, but
the critical-path evidence shows fonts competing with the LCP image for bandwidth, which the
8 September data could not reveal. Font delivery is now part of the plan.

## The baseline

One PageSpeed run per template, emulated Moto G Power, Slow 4G. Lab results, not field data.

| Page                 | Perf | FCP   | LCP       | TBT    | CLS |
| -------------------- | ---- | ----- | --------- | ------ | --- |
| Song Kul article     | 88   | 2.6 s | 3.3 s     | 10 ms  | 0   |
| Bulgaria destination | 86   | 2.2 s | 3.8 s     | 0 ms   | 0   |
| Homepage             | 84   | 3.0 s | 3.7 s     | 0 ms   | 0   |
| Bulgaria tour        | 72   | 2.7 s | **6.9 s** | 10 ms  | 0   |
| Tour listing         | 64   | 4.1 s | **9.2 s** | 150 ms | 0   |

**LCP is the entire problem.** CLS is 0 everywhere, so there is no layout-stability work to do.
TBT is negligible on four of five pages. FCP is acceptable throughout. Every point lost is the
hero image arriving late.

## The pattern: three heroes, three different mistakes

Inspecting the deployed markup shows the site has three separate hero implementations, each
missing a different half of correct image delivery:

| Page          | Modern format | Responsive sizing                                   | Baseline LCP |
| ------------- | ------------- | --------------------------------------------------- | ------------ |
| Homepage      | ✗ WebP only   | ✓ 480/720/960/1200w                                 | 3.7 s        |
| Bulgaria tour | ✓ AVIF        | ✗ single full-size file                             | 6.9 s        |
| Tour listing  | ✓ AVIF        | ✓ 960/1440/1920/2560w — but **`sizes` is inverted** | 9.2 s        |

The ordering is the finding: **responsive sizing matters more than image format.** The homepage
ships the _older_ format and still has the best LCP of the three, because it ships the right
number of pixels. The listing has the most modern pipeline and the worst LCP, because a single
malformed attribute defeats it.

---

## Finding 1 — Inverted `sizes` on the listing hero (critical, one line)

`apps/website/src/app/features/tour-listing-page/tour-listing-page.html:14`

```html
sizes="(min-width: 926px) 100vw, 926px"
```

Read it literally: _when the viewport is at least 926px the image is 100vw; otherwise it is
926px._ On any phone the fallback applies, so the browser is told the hero occupies **926 CSS
pixels — wider than the device itself**.

The hero is `width: 100%` at every breakpoint
(`tour-listing-page.scss:32-35`), so the correct declaration is simply `100vw`.

**What it costs, using the emulated device from the baseline** (Moto G Power: 412 CSS px, DPR
2.625):

|                 | Declared slot | Pixels required    | Candidate chosen | Bytes       |
| --------------- | ------------- | ------------------ | ---------------- | ----------- |
| Today           | 926 px        | 926 × 2.625 = 2431 | **2560w**        | **226,063** |
| Fixed (`100vw`) | 412 px        | 412 × 2.625 = 1082 | **1440w**        | **90,088**  |

**135,975 bytes saved — 60% off the LCP element of the worst page**, from a one-line change.
All four candidates are already built and deployed; nothing needs generating.

```html
sizes="100vw"
```

## Finding 2 — Responsive variants exist for exactly one image site-wide (high)

`scripts/generate-tour-web-images.mjs:58`

```js
if (relativePath === "images/destinations/classic-tours-bgr.webp") {
```

The responsive loop is **hardcoded to one filename**. It was a proof of concept and was never
generalised, so `classic-tours-bgr.webp` is the only image on the site with an AVIF `srcset`.
Confirmed against the deployed bundle: `TOUR_WEB_IMAGE_SRCSETS` contains exactly one entry.

Every other hero therefore ships one full-size AVIF to every device. The Bulgaria tour hero is
1920×800 at **232,076 bytes**, delivered whole to a 412px-wide phone — which is why that page sits
at 6.9 s despite having AVIF.

**Change:** replace the filename equality check with a list of hero sources, and add `sizes` to
the tour-detail and destination hero templates the same way. The generator already produces
960/1440/1920 and the plumbing (`TourWebImageSrcsetPipe`, `TOUR_WEB_IMAGE_SRCSETS`) already
exists and is proven by the listing.

**Expected:** tour and destination heroes fall from ~232 KB to roughly the 90 KB class, on the
1440w candidate, matching the listing's arithmetic. Applies to the Bulgaria tour (6.9 s), both
Kyrgyzstan tours, all three Morocco pages and the destination pages.

## Finding 3 — Homepage hero has no AVIF (medium)

The homepage hero already does responsive sizing correctly — `480w/720w/960w/1200w` — but only in
WebP; there is no AVIF `<source>`. `HomePageCoverPhoto-5.webp` is 127,540 bytes.

At the quality 55 setting used elsewhere, AVIF has been running 25–30% below WebP on this site's
own images, so expect roughly 30–40 KB off the homepage LCP element.

Deliberately ranked below Findings 1 and 2: the homepage is already at 84 with a 3.7 s LCP, and
this touches the carousel, which is more code than a `sizes` attribute.

## Finding 4 — Listing TBT and the 547 ms forced reflow (investigate, do not guess)

The listing is the only page with meaningful TBT (150 ms) and it carries a **547 ms forced
reflow that two prior source scans failed to attribute** (Phase 5, lines 137 and 231). No
layout-thrashing pattern was found in the source either time.

**Do not attempt a speculative fix.** Two prior attempts to find it by reading code failed; a
third will too. It needs a real performance trace from a browser against production.

**Sequence it after Finding 1, and re-measure before investigating at all.** Decoding a
2560×1425 AVIF on a phone is significant main-thread work in its own right, and that is exactly
what the inverted `sizes` forces the listing to do. The reflow and part of the 150 ms TBT may
simply disappear when the page stops decoding a 2560px image on a 412px screen. Chasing it first
risks hunting a symptom of Finding 1.

---

## What not to do

**Deferring GA4 (`gtag.js`) and the Meta Pixel** is listed as a candidate on the progress board.
It should stay at the bottom, or be dropped. TBT is 0–10 ms on four of the five templates, so
there is almost no main-thread time for it to recover, and deferring consent-relevant tags risks
breaking event delivery for a benefit the baseline says is near zero. Revisit only if a trace
after Findings 1–3 shows third-party script time actually mattering.

**Further font work** is on hold at Toni's request, and the data supports leaving it: CLS is 0 on
every template, so the font-swap hypothesis has no symptom to fix. Material Icons subsetting and
the unused `fonts.googleapis.com` request were already dealt with in Phase 5.

## Two further findings

Written up in the [fix plan](SEO_PERFORMANCE_FIX_PLAN.md) after inspecting the templates:

- **Destination heroes have no `<picture>` element at all.** They ship
  `bulgaria-tour-bgr.webp` as the raw 330,628-byte original, while the tour page renders the same
  image as a 232,076-byte AVIF that is already built and deployed. Wrapping it saves 98,552 bytes
  with no asset generation.
- **The tour-detail hero uses the single-image pipe, not the srcset pipe**, so it could never
  consume responsive variants even once they exist. Swapping it is a no-op today and an enabler
  for the generator change.

## Order of work

Each step deploys and is measured before the next begins, so every change has an attributable
result rather than one combined re-measurement at the end.

| #   | Change                                                | Effort             | Evidence quality                           |
| --- | ----------------------------------------------------- | ------------------ | ------------------------------------------ |
| 1   | `sizes="100vw"` on the listing hero                   | One line           | Measured: 135,975 bytes                    |
| 2   | Generalise responsive AVIF to all heroes, add `sizes` | Script + templates | Measured on one image, extrapolated        |
| 3   | AVIF source for the homepage hero                     | Carousel change    | Estimated from this site's own AVIF ratios |
| 4   | Trace the listing reflow                              | Investigation      | Unknown — needs a trace                    |

## Re-measuring

Neither this environment nor CI can currently verify any of it: production is unreachable and the
PSI quota is exhausted. To close the loop, one of:

- **A PageSpeed Insights API key** (free, from Google Cloud) — lifts the 429 and makes the five
  audits repeatable, including from CI.
- **Running the audits from a machine with outbound access** to `omayatravel.com`.

Until then, treat the byte counts as verified and the LCP improvements as predicted.
