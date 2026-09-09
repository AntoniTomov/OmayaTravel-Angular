# Release-blocking questions for Toni — 9 September 2026

The `dev` branch at `a53fa31` passes every technical check (see the release-readiness audit in
[SEO_PROGRESS.md](SEO_PROGRESS.md)). The release is being held so these **factual** answers ship in
the same deploy rather than needing a second one.

Every item below is a commercial claim that a customer can read and act on. None can be settled
from the code — they need someone who knows what the tours actually deliver. **No copy has been
changed; this sheet only records what the site currently says.**

The audit that produced this list swept all six tour definitions rather than the three issues
already on the board, so items 2, 4 and 5 are new.

**Status: CLOSED — all 6 answered, nothing changed.** Toni reviewed every item on 9 September and
confirmed the site is factually correct as published. No copy, itinerary field or inclusion list
was edited as a result of this sheet. **No factual question holds the release any longer.**

This document is kept as the record of what was checked and confirmed, so the same six points are
not re-raised as defects by a later review. Each section below says what was queried and that the
answer was "correct as published".

---

## 1. Morocco Day 6 — ANSWERED 9 September: correct as published, no change

**Toni confirmed the Day 6 and Day 7 entries are factually correct and are not to be changed.**
The repository matches the production itinerary exactly, field for field:

|                 | Day 6 (Fes - Merzouga) | Day 7 (Merzouga)         |
| --------------- | ---------------------- | ------------------------ |
| `accommodation` | Hotel in Merzouga.     | Desert camp.             |
| `meals`         | breakfast              | breakfast, lunch, dinner |

Verified against `tour-content.ts:1003-1017` on `a53fa31`; the descriptions, both `accommodation`
values and both `meals` arrays are identical to what production serves. Nothing was edited.

This closes the item. The earlier reading — that Day 6's closing sentence and Day 7's "second
night at the camp" implied the `accommodation` field was wrong — was an inference from the copy,
and it was wrong. The itinerary is as the operator intends it, and the same content is inherited
by the women-only and solo-traveller Morocco pages, so all three are correct as they stand.

---

## 2. Morocco entry fees — ANSWERED 9 September: correct as published, no change

**Toni confirmed Morocco genuinely excludes entry fees.** `tour-content.ts:946-960` stays as it
is. Morocco being the only one of the six tours to exclude them is deliberate, not a data-entry
error. Applies to all three Morocco pages.

---

## 3. Women-only Kyrgyzstan inclusions — ANSWERED 9 September: correct as published, no change

**Toni confirmed the inclusion lists are correct and are not to be changed.** The women-only tour
genuinely includes insurance and genuinely excludes ground transport, where the classic tour is the
other way round. `tour-content.ts:1573-1582` stays as it is.

This was raised because the two tours invert the same matched pair, which is the shape a
copy-paste swap takes. It is not one. **Do not "fix" this in a later pass.**

## 4. Kyrgyzstan Days 8 and 9 — ANSWERED 9 September: correct as published, no change

**Toni confirmed all three gaps are correct as they stand and are not to be changed.**

- The women-only tour carries no `meals` on Days 8 and 9 (`tour-content.ts:1641-1656`), so those
  days print no meals line even though the descriptions say lunch and dinner are included. Intended.
- Neither Kyrgyzstan tour names accommodation on Day 9 (Bishkek) or Day 8 (Cholpon-Ata). Intended.

The template renders accommodation and meals only when present (`tour-detail.html:224-233`), so the
blank fields are a deliberate omission from the rendered page, not a defect. **Do not backfill
these fields in a later pass.**

---

## 5. Bulgaria activities — ANSWERED 9 September: correct as published, no change

**Toni confirmed both Bulgaria tours genuinely exclude "Activities as mentioned."** This was
already flagged at lower confidence because the two Bulgaria tours agree with each other, and that
reading was right. No change.

---

## 6. Room sharing and single supplements — ANSWERED 9 September: fine as they are

**Toni confirmed the current arrangement is fine as it stands.** The general policy is published
in the booking conditions, the solo-traveller FAQs and the destination-page prompt; no per-tour
room-sharing detail or supplement price is to be added for this release. Easy fitness is confirmed
and implemented on all eight public tours.

---

## Wording tidy-up — no answer needed

Algeria states the same six concepts in different words from every other tour ("International
flights" vs "Flights", "Travel insurance" vs "Insurance", "Single-**room** supplement" vs
"Single room supplement", "Entry fees for listed sites", "Activities mentioned in itinerary",
"Meals listed in daily itinerary"). Presentational only — no factual difference — but it makes the
inclusion lists harder to compare across tours. Worth aligning at some point; not part of this
release.
