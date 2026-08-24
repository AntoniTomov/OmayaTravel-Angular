import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleAnalytics } from '../../../shared/analytics/google-analytics';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-private-tours',
  imports: [RouterLink],
  templateUrl: './private-tours.html',
  styleUrl: './private-tours.scss',
})
export class PrivateTours {
  protected readonly i18n = inject(OmayaI18n);
  private readonly analytics = inject(GoogleAnalytics);

  protected trackPrivateToursCta(): void {
    this.analytics.trackEvent('click_enquire', {
      source: 'homepage_private_tours',
      action: 'plan_private_tour',
    });
  }
}
