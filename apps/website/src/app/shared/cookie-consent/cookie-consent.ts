import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

type CookieConsentChoice = 'accepted' | 'rejected';

const COOKIE_CONSENT_KEY = 'omaya_cookie_consent';

@Injectable({ providedIn: 'root' })
export class CookieConsent {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly choice = signal<CookieConsentChoice | null>(this.readChoice());

  readonly currentChoice = this.choice.asReadonly();

  hasChoice(): boolean {
    return this.choice() !== null;
  }

  canUseAnalytics(): boolean {
    return this.choice() === 'accepted';
  }

  accept(): void {
    this.saveChoice('accepted');
  }

  reject(): void {
    this.saveChoice('rejected');
  }

  private saveChoice(choice: CookieConsentChoice): void {
    this.choice.set(choice);

    if (!this.isBrowser) {
      return;
    }

    window.localStorage.setItem(COOKIE_CONSENT_KEY, choice);
  }

  private readChoice(): CookieConsentChoice | null {
    if (!this.isBrowser) {
      return null;
    }

    const choice = window.localStorage.getItem(COOKIE_CONSENT_KEY);

    return choice === 'accepted' || choice === 'rejected' ? choice : null;
  }
}
