import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  HostListener,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { ActiveSite } from '../../../sites/active-site';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import {
  LogoSrcsetPipe,
  NewsletterPopupMobileSrcsetPipe,
  NewsletterPopupTabletSrcsetPipe,
} from '../../shared/content/tour-web-image.pipe';
import { CookieConsent } from '../../shared/cookie-consent/cookie-consent';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitNewsletter } from '../../shared/forms/public-form-api';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';
import { AD_SESSION_KEY, isAdLanding, isTourPage } from './newsletter-popup-rules';

const POPUP_DELAY_MS = 2000;
const DISMISSED_KEY = 'omaya-newsletter-popup-dismissed';
const SUBSCRIBED_KEY = 'omaya-newsletter-popup-subscribed';

@Component({
  selector: 'app-newsletter-popup',
  imports: [
    FormHoneypot,
    FormStatus,
    LogoSrcsetPipe,
    NewsletterPopupMobileSrcsetPipe,
    NewsletterPopupTabletSrcsetPipe,
  ],
  templateUrl: './newsletter-popup.html',
  styleUrl: './newsletter-popup.scss',
})
export class NewsletterPopup {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly activeSite = inject(ActiveSite);
  private readonly router = inject(Router);
  private readonly cookieConsent = inject(CookieConsent);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly i18n = inject(OmayaI18n);
  private timerId: ReturnType<typeof setTimeout> | null = null;
  private hasOpened = false;

  protected readonly brand = computed(() => this.activeSite.site().brand);
  protected readonly mediaImage = computed(() => {
    const site = this.activeSite.site();

    return site.id === 'amelia'
      ? { src: site.content.hero.slides[0]?.visualSrc ?? '', width: 1920, height: 1080 }
      : { src: '/assets/images/newsletter-popup-inner.webp', width: 536, height: 318 };
  });

  protected readonly isOpen = signal(false);
  protected readonly isSignupOpen = signal(false);
  protected readonly submitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly submitMessage = signal('');

  constructor() {
    this.watchNavigation();
  }

  @HostListener('document:keydown.escape')
  protected closeFromEscape(): void {
    if (this.isOpen()) {
      this.close();
    }
  }

  protected close(): void {
    this.isOpen.set(false);
    this.remember(DISMISSED_KEY);
    this.analytics.trackEvent('popup_dismiss', {
      popup: 'newsletter',
    });
  }

  protected openSignup(): void {
    this.isSignupOpen.set(true);
    this.analytics.trackEvent('popup_signup_click', {
      popup: 'newsletter',
    });
  }

  protected async submitPopup(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);

    this.submitStatus.set('sending');
    this.submitMessage.set('');

    const result = await submitNewsletter({
      email: String(formData.get('email') ?? '').trim(),
      source: 'popup',
      honeypot: String(formData.get('website') ?? ''),
    });

    if (result.ok) {
      form.reset();
      this.submitStatus.set('sent');
      this.submitMessage.set('Thank you for joining our newsletter.');
      this.remember(SUBSCRIBED_KEY);
      this.analytics.trackEvent('sign_up', {
        method: 'newsletter',
        source: 'popup',
      });

      setTimeout(() => {
        this.isOpen.set(false);
      }, 1600);
      return;
    }

    this.submitStatus.set('error');
    this.submitMessage.set(result.message ?? 'We could not subscribe you right now.');
  }

  /**
   * Arms the popup on every page a visitor reaches except tour pages, and never in a session that
   * arrived from a paid click. The delay restarts on each eligible navigation, and moving on to a
   * tour page cancels it, so the popup never opens over a tour.
   */
  private watchNavigation(): void {
    if (!this.isBrowser || this.wasHandled() || this.isAdSession()) {
      return;
    }

    this.destroyRef.onDestroy(() => this.cancelTimer());

    // Runs once now and again whenever the cookie choice changes, so answering the banner starts
    // the delay on the page the visitor is already on.
    effect(() => {
      this.cookieConsent.currentChoice();
      untracked(() => {
        if (this.router.navigated) {
          this.schedule(this.router.url);
        }
      });
    });

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.schedule(event.urlAfterRedirects));
  }

  private schedule(url: string): void {
    this.cancelTimer();

    // The cookie banner sits above the popup and would cover "No, thanks", so the popup waits until
    // the banner has been answered.
    if (this.hasOpened || isTourPage(url) || !this.cookieConsent.hasChoice()) {
      return;
    }

    this.timerId = setTimeout(() => {
      this.timerId = null;

      if (
        this.hasOpened ||
        this.wasHandled() ||
        isTourPage(this.router.url) ||
        !this.cookieConsent.hasChoice()
      ) {
        return;
      }

      this.hasOpened = true;
      this.isOpen.set(true);
      this.analytics.trackEvent('popup_view', {
        popup: 'newsletter',
      });
    }, POPUP_DELAY_MS);
  }

  private cancelTimer(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  /**
   * Whether this browser session began with a paid click. The landing URL is read once and the
   * answer kept for the session, because the click parameters leave the address bar on the first
   * in-app navigation.
   */
  private isAdSession(): boolean {
    const view = this.document.defaultView;
    const landedFromAd = isAdLanding(view?.location.search ?? '');

    try {
      if (landedFromAd) {
        view?.sessionStorage.setItem(AD_SESSION_KEY, 'true');
      }

      return landedFromAd || view?.sessionStorage.getItem(AD_SESSION_KEY) === 'true';
    } catch {
      // Storage can be unavailable in privacy modes; the landing URL is then all there is to go on.
      return landedFromAd;
    }
  }

  private wasHandled(): boolean {
    const storage = this.document.defaultView?.localStorage;

    return (
      storage?.getItem(DISMISSED_KEY) === 'true' || storage?.getItem(SUBSCRIBED_KEY) === 'true'
    );
  }

  private remember(key: string): void {
    this.document.defaultView?.localStorage.setItem(key, 'true');
  }
}
