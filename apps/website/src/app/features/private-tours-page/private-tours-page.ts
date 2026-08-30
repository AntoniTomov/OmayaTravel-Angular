import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';

@Component({
  selector: 'app-private-tours-page',
  imports: [RouterLink],
  templateUrl: './private-tours-page.html',
  styleUrl: './private-tours-page.scss',
})
export class PrivateToursPage {
  private readonly analytics = inject(OmayaAnalytics);

  protected trackPlanTourClick(): void {
    this.analytics.trackEvent('click_enquire', {
      source: 'private_tours_page',
      action: 'plan_private_tour',
    });
  }
}
