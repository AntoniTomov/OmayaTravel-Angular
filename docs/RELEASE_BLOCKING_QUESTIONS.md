# Release-blocking questions for Toni — 9 September 2026

The `dev` branch at `a53fa31` passes every technical check (see the release-readiness audit in
[SEO_PROGRESS.md](SEO_PROGRESS.md)). The release is being held so these **factual** answers ship in
the same deploy rather than needing a second one.

Every item below is a commercial claim that a customer can read and act on. None can be settled
from the code — they need someone who knows what the tours actually deliver. **No copy has been
changed; this sheet only records what the site currently says.**

The audit that produced this list swept all six tour definitions rather than the three issues
already on the board, so items 2, 4 and 5 are new.

**Status: 4 of 6 answered; 2 remain.** Toni confirmed on 9 September that items 1, 2, 5 and 6 are
correct as they stand — Morocco Day 6, Morocco entry fees, Bulgaria activities, and rooming — and
none of them is to be changed. **Only items 3 and 4, both on the Kyrgyzstan tours, still hold the
release.** They are restated below with the evidence gathered after the first sweep.

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

## 3. Women-only Kyrgyzstan — insurance and ground transport look swapped — OPEN

`tour-content.ts:1573-1582` against the classic tour at `tour-content.ts:702-711`. Same route,
same ten days, and the **same two lines sit on opposite sides**:

|                  | Classic (`/tour-item/kyrgyzstan-tour/`) | Women-only (`/tour-item/women-only-tour-kyrgyzstan/`) |
| ---------------- | --------------------------------------- | ----------------------------------------------------- |
| Ground transport | **Included**                            | **Not included**                                      |
| Insurance        | **Not included**                        | **Included**                                          |

Not one line differing, but a matched pair inverted — the shape of a copy-paste swap rather than
a policy difference. Every other tour matches the classic on both.

**Insurance is the half with hard corroboration.** Two other pages contradict it:

- FAQ, `faq-page.ts:107`: "We strongly recommend **purchasing** comprehensive travel insurance at
  the time of paying your deposit."
- Booking conditions, `legal-page.ts:56`: "Travel insurance covering illness and unforeseen events
  is strongly recommended."

If this one tour included insurance, both pages would be telling that customer to buy cover they
already hold. The "full travel insurance" on `legal-page.ts:26` is Omaya's own operator liability
cover under licence РК-01-8706 — a different thing from traveller cover, and not an inclusion.

**Ground transport is circumstantial only.** The itinerary loops Bishkek → Song Kul (3,000 m) →
Issyk-Kul → Karakol → Altyn Arashan → Bishkek, and every other tour including the identical classic
route includes it — but nothing on this page states it either way. The driver FAQ that mentions
"local drivers, who are contracted separately for ground transport" is on the women-only **Bulgaria**
tour (`tour-content.ts:1375`), which includes transport, so it corroborates nothing here.

- [ ] Swapped in error → ground transport included, insurance not included, matching the classic.
- [ ] One or both are deliberate → say which, and leave as is.

---

## 4. Kyrgyzstan Days 8 and 9 — three separate gaps — OPEN

Both tours have `accommodation: null` on Days 8 and 9 of a ten-day trip. The template renders
accommodation and meals only when present (`tour-detail.html:224-233`), so those nights print no
accommodation line while the other eight do. This splits into three questions, and two are close
to self-answering.

### (a) Meals on the women-only tour — the tour's own copy already answers it

|                               | Day 8 description ends        | `meals` field         |
| ----------------------------- | ----------------------------- | --------------------- |
| Classic (`:770-777`)          | "…Lunch and dinner included." | `['lunch', 'dinner']` |
| **Women-only** (`:1641-1648`) | "…Lunch and dinner included." | **`[]`**              |

|                               | Day 9 description says           | `meals` field |
| ----------------------------- | -------------------------------- | ------------- |
| Classic (`:778-785`)          | "Lunch is shared in a homestay…" | `['lunch']`   |
| **Women-only** (`:1649-1656`) | "Lunch is shared in a homestay…" | **`[]`**      |

The descriptions are identical between the two tours. The women-only page therefore prints no meals
line on days where its own prose states lunch and dinner are included — **the page contradicts
itself.** This reads as an unfilled field rather than a fact question.

- [ ] Copy the classic tour's values: Day 8 lunch + dinner, Day 9 lunch.
- [ ] The women-only tour genuinely differs → say what it provides.

### (b) Day 9 accommodation, both tours — location known, property not

The Day 9 text ends "…the road leads back to Bishkek for **our last overnight in Bishkek**", so the
city is known; the property is not. Days 1 and 2 read "3\* hotel in Bishkek (TWIN/DBL room)".

**Needed:** is Day 9 the same Bishkek hotel as Days 1-2, or a different one?

### (c) Day 8 accommodation, both tours — the only real information gap

The group arrives in Cholpon-Ata on the northern shore of Issyk-Kul. Nothing on either tour says
where they sleep.

**Needed:** hotel, guesthouse or yurt camp, and the room type, phrased to match the other nights.

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
