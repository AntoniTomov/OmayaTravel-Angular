import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { CookieConsent as CookieConsentService } from '../../shared/cookie-consent/cookie-consent';

@Component({
  selector: 'app-cookie-consent',
  imports: [RouterLink],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.scss',
})
export class CookieConsent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly consent = inject(CookieConsentService);

  protected readonly isVisible = computed(() => this.isBrowser && !this.consent.hasChoice());

  protected accept(): void {
    this.consent.accept();
    this.analytics.trackPageView(this.router.url, this.document.title);
  }

  protected reject(): void {
    this.consent.reject();
  }
}
