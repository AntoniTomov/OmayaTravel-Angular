import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CookieConsent as CookieConsentService } from '../../shared/cookie-consent/cookie-consent';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-cookie-consent',
  imports: [RouterLink],
  templateUrl: './cookie-consent.html',
  styleUrl: './cookie-consent.scss',
})
export class CookieConsent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly consent = inject(CookieConsentService);
  protected readonly i18n = inject(OmayaI18n);

  protected readonly isVisible = computed(() => this.isBrowser && !this.consent.hasChoice());

  protected accept(): void {
    this.consent.accept();
  }

  protected reject(): void {
    this.consent.reject();
  }
}
