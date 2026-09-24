import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DESTINATION_CONTENT } from '../../shared/content/destination-content';
import { PublicBreadcrumbs, PublicBreadcrumb } from '../../shared/breadcrumbs/public-breadcrumbs';
import { TourImage, tourDepartureDate } from '../../shared/content/tour-content';
import { TourWebImageSrcsetPipe } from '../../shared/content/tour-web-image.pipe';
import { TrustpilotReviews } from '../../shared/reviews/trustpilot-reviews';

// A tour card puts the photograph in a grid column beside the text, and the row is as tall as the
// text makes it — 555 to 642px measured across every destination. `object-fit: cover` then fills
// that height, which means height, not the column's width, is what decides how many pixels the
// photograph needs. `sizes` can only state a width, so it has to state the width that covering
// that height takes: the photograph's own ratio times the row height. Asking for the column width
// instead is what shipped a 800x333 candidate into a 614px slot.
//
// 640 is also the largest value that still resolves to the 960w candidate for a 3/2 source, so
// the taller photographs stay on a smaller file rather than jumping a step for a few pixels.
const TALLEST_CARD_PX = 640;
// Under the 760px breakpoint the card stacks and the slot becomes a 3/2 box the width of the body.
const PHONE_BREAKPOINT_PX = 760;
const PHONE_SLOT_RATIO = 3 / 2;
// Only reached if a height is ever authored as a string; the widest hero we ship is 2.55.
const WIDEST_HERO_RATIO = 2.6;

@Component({
  selector: 'app-destination-page',
  imports: [DatePipe, RouterLink, PublicBreadcrumbs, TourWebImageSrcsetPipe, TrustpilotReviews],
  templateUrl: './destination-page.html',
  styleUrl: './destination-page.scss',
})
export class DestinationPage {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  protected readonly destinations = DESTINATION_CONTENT;
  protected readonly departureDate = tourDepartureDate;
  protected readonly destination = computed(() =>
    this.destinations.find((item) => item.slug === this.params().get('destinationSlug')),
  );
  protected readonly hero = computed(
    () => this.destination()?.heroImage ?? this.destinations[0].heroImage,
  );
  protected cardSizes(image: TourImage): string {
    const height = typeof image.height === 'number' ? image.height : 0;
    const ratio = height > 0 ? image.width / height : WIDEST_HERO_RATIO;
    const phone = Math.ceil((ratio / PHONE_SLOT_RATIO) * 100);
    const card = Math.ceil(ratio * TALLEST_CARD_PX);
    return `(max-width: ${PHONE_BREAKPOINT_PX}px) ${phone}vw, ${card}px`;
  }
  protected readonly breadcrumbs = computed((): readonly PublicBreadcrumb[] => {
    const destination = this.destination();
    return [
      { label: 'Home', path: '/' },
      { label: 'Destinations', path: '/destinations/' },
      ...(destination ? [{ label: destination.name }] : []),
    ];
  });
}
