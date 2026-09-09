# Release-blocking questions for Toni — 9 September 2026

The `dev` branch at `a53fa31` passes every technical check (see the release-readiness audit in
[SEO_PROGRESS.md](SEO_PROGRESS.md)). The release is being held so these **factual** answers ship in
the same deploy rather than needing a second one.

Every item below is a commercial claim that a customer can read and act on. None can be settled
from the code — they need someone who knows what the tours actually deliver. **No copy has been
changed; this sheet only records what the site currently says.**

The audit that produced this list swept all six tour definitions rather than the three issues
already on the board, so items 2, 4 and 5 are new.

---

## 1. Morocco Day 6 — hotel or desert camp?

`tour-content.ts:1003-1016`. Day 6 contradicts itself, and Day 7 corroborates the camp twice:

| Field                    | Current text                                                                                              |
| ------------------------ | --------------------------------------------------------------------------------------------------------- |
| Day 6 description (ends) | "…Tonight, **a comfortable desert camp** under a sky that reminds you how many stars there actually are." |
| Day 6 `accommodation`    | "**Hotel in Merzouga.**"                                                                                  |
| Day 7 description        | "…the group **returns to the desert camp**… **A second night at the camp**…"                              |
| Day 7 `accommodation`    | "Desert camp."                                                                                            |

"A second night at the camp" on Day 7 only follows if Day 6 was also the camp, so the evidence
leans towards the `accommodation` field being the wrong one — but that is an inference, not a fact.

**Please pick one:**

- [ ] Day 6 is the **desert camp** → change Day 6 `accommodation` to "Desert camp."
- [ ] Day 6 is a **hotel in Merzouga** → then Day 6's closing sentence and Day 7's "second night"
      both need rewording, and I would need your words for them, not mine.

> **This appears on three public pages, not one.** `tour-item-morocco-women-only-tour` and
> `tour-item-morocco-solo-travellers-tour` are derived from `morocco-tour` by spreading it
> (`tour-content.ts:1697-1766`), so they inherit the whole itinerary. One fix corrects all three.

---

## 2. Morocco entry fees — the only tour that excludes them _(new)_

`tour-content.ts:946-960`. Morocco is the **only** tour of the six that lists
"Entry fees for the mentioned sites" as **not included**. Bulgaria, Kyrgyzstan and Algeria all
include them. The Morocco itinerary sends the group into paid sites, so a traveller comparing two
Omaya tours would reasonably conclude Morocco charges extra for them.

- [ ] Correct — Morocco genuinely excludes entry fees. Leave as is.
- [ ] Wrong — entry fees are included, as on the other tours. Move the line to `included`.

Also on all three Morocco pages.

---

## 3. Women-only Kyrgyzstan — insurance and ground transport look swapped

`tour-content.ts:1573-1582` versus the classic tour at `tour-content.ts:702-711`. This one tour
deviates from every other tour on **both** halves of the same pair:

|                               | Ground transport | Insurance    |
| ----------------------------- | ---------------- | ------------ |
| Bulgaria classic / women-only | INCLUDED         | not included |
| Kyrgyzstan **classic**        | INCLUDED         | not included |
| **Kyrgyzstan women-only**     | **not included** | **INCLUDED** |
| Morocco, Algeria              | INCLUDED         | not included |

The two tours are otherwise the same route. A women-only tour that excludes ground transport
in Kyrgyzstan would also be hard to operate.

- [ ] Swapped in error → ground transport included, insurance not included, matching the classic.
- [ ] Deliberate → leave as is (worth a line of on-page explanation if so).

---

## 4. Kyrgyzstan Days 8 and 9 — no accommodation on either tour _(partly new)_

Both Kyrgyzstan tours have `accommodation: null` on Days 8 and 9 of a ten-day trip. The board
recorded this for the women-only tour only; it is on the classic tour too.

|                           | Day 8 (Altyn Arashan → Cholpon-Ata)   | Day 9 (Cholpon-Ata → Burana → Bishkek) |
| ------------------------- | ------------------------------------- | -------------------------------------- |
| Classic (`:770-785`)      | acc **missing**, meals lunch + dinner | acc **missing**, meals lunch           |
| Women-only (`:1641-1656`) | acc **missing**, **meals missing**    | acc **missing**, **meals missing**     |

Day 10 is departure and correctly carries breakfast on both. Every other night on both tours names
its accommodation, so these two nights read as an omission rather than a deliberate blank.

**Needed:** where the group sleeps on Days 8 and 9 (Cholpon-Ata and Bishkek), for both tours, and
which meals are provided on those two days on the **women-only** tour.

---

## 5. Bulgaria activities — both Bulgaria tours exclude them _(new, lower confidence)_

Both Bulgaria tours list "Activities as mentioned" as **not included**, where Kyrgyzstan, Morocco
and Algeria include it. The two Bulgaria tours agree with each other, so unlike items 2 and 3 this
may well be deliberate.

- [ ] Deliberate — Bulgaria activities are paid locally. Leave as is.
- [ ] Should match the other tours → move to `included`.

---

## 6. Room sharing and single supplements — still open

Not blocking, but the last piece of item 4 on the board. The general policy is published (booking
conditions, the solo-traveller FAQs, the destination-page prompt). What is missing is the
**per-tour room-sharing arrangement** and the **actual supplement amounts** — "Single room
supplement" sits in every tour's `notIncluded` list with no price anywhere on the site.

Easy fitness is confirmed and implemented on all eight public tours; nothing outstanding there.

---

## Wording tidy-up — no answer needed

Algeria states the same six concepts in different words from every other tour ("International
flights" vs "Flights", "Travel insurance" vs "Insurance", "Single-**room** supplement" vs
"Single room supplement", "Entry fees for listed sites", "Activities mentioned in itinerary",
"Meals listed in daily itinerary"). Presentational only — no factual difference — but it makes the
inclusion lists harder to compare across tours. Worth aligning at some point; not part of this
release.
