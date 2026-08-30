import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';

import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitNewsletter } from '../../shared/forms/public-form-api';

const POPUP_DELAY_MS = 5000;
const DISMISSED_KEY = 'omaya-newsletter-popup-dismissed';
const SUBSCRIBED_KEY = 'omaya-newsletter-popup-subscribed';

@Component({
  selector: 'app-newsletter-popup',
  imports: [FormHoneypot, FormStatus],
  templateUrl: './newsletter-popup.html',
  styleUrl: './newsletter-popup.scss',
})
export class NewsletterPopup implements OnDestroy {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly document = inject(DOCUMENT);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly timerId: ReturnType<typeof setTimeout> | null = this.createTimer();

  protected readonly isOpen = signal(false);
  protected readonly isSignupOpen = signal(false);
  protected readonly submitStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly submitMessage = signal('');

  ngOnDestroy(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
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

  private createTimer(): ReturnType<typeof setTimeout> | null {
    if (!this.isBrowser || this.wasHandled()) {
      return null;
    }

    return setTimeout(() => {
      this.isOpen.set(true);
      this.analytics.trackEvent('popup_view', {
        popup: 'newsletter',
      });
    }, POPUP_DELAY_MS);
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
