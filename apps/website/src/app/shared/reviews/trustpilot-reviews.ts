import { Component, computed, input } from '@angular/core';
import { TRUSTPILOT_PROFILE_URL, trustpilotReviewsFor } from '../content/trustpilot-reviews';

@Component({
  selector: 'omaya-trustpilot-reviews',
  templateUrl: './trustpilot-reviews.html',
  styleUrl: './trustpilot-reviews.scss',
})
export class TrustpilotReviews {
  readonly destination = input.required<string>();

  protected readonly profileUrl = TRUSTPILOT_PROFILE_URL;
  protected readonly stars = [1, 2, 3, 4, 5] as const;
  protected readonly reviews = computed(() => trustpilotReviewsFor(this.destination()));
}
