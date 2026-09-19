import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSite } from '../../../sites/active-site';
import { isSiteRouteEnabled } from '../../../sites/site-routes';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitNewsletter } from '../../shared/forms/public-form-api';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-not-yet-but-soon',
  imports: [RouterLink, FormHoneypot, FormStatus],
  templateUrl: './not-yet-but-soon.html',
  styleUrl: './not-yet-but-soon.scss',
})
export class NotYetButSoon {
  protected readonly i18n = inject(OmayaI18n);
  private readonly activeSite = inject(ActiveSite);
  private readonly analytics = inject(OmayaAnalytics);

  protected readonly newsletterStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly newsletterMessage = signal('');

  protected readonly showNewsletter = computed(
    () => this.activeSite.site().features.showNotYetNewsletter,
  );

  protected readonly ctaTarget = computed(() =>
    isSiteRouteEnabled(this.activeSite.site(), '/tours-list/') ? '/tours-list/' : '/destinations/',
  );

  protected async submitNewsletterForm(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const email = String(formData.get('email') ?? '').trim();
    const honeypot = String(formData.get('website') ?? '');

    this.newsletterStatus.set('sending');
    this.newsletterMessage.set('');

    const result = await submitNewsletter({
      email,
      source: 'not yet but soon page',
      honeypot,
    });

    if (result.ok) {
      form.reset();
      this.newsletterStatus.set('sent');
      this.newsletterMessage.set(this.i18n.t('homepage.newsletterThanks'));
      this.analytics.trackEvent('sign_up', {
        method: 'newsletter',
        source: 'not yet but soon page',
      });
      return;
    }

    this.newsletterStatus.set('error');
    this.newsletterMessage.set(result.message ?? this.i18n.t('homepage.newsletterError'));
  }
}
