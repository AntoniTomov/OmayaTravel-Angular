import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ActiveSite } from '../../../sites/active-site';
import { isSiteRouteEnabled } from '../../../sites/site-routes';
import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import { TourWebImageSrcsetPipe } from '../../shared/content/tour-web-image.pipe';
import { FormHoneypot } from '../../shared/forms/form-honeypot';
import { FormStatus } from '../../shared/forms/form-status';
import { submitNewsletter } from '../../shared/forms/public-form-api';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-not-yet-but-soon',
  imports: [RouterLink, FormHoneypot, FormStatus, TourWebImageSrcsetPipe],
  templateUrl: './not-yet-but-soon.html',
  styleUrl: './not-yet-but-soon.scss',
})
export class NotYetButSoon {
  protected readonly i18n = inject(OmayaI18n);
  protected readonly heroImage = '/assets/images/home-page/private-tours-right-bgr.webp';
  private readonly activeSite = inject(ActiveSite);
  private readonly analytics = inject(OmayaAnalytics);
  private readonly route = inject(ActivatedRoute);
  private readonly requestedDestination = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('d') ?? '')),
    { initialValue: '' },
  );

  protected readonly newsletterStatus = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');
  protected readonly newsletterMessage = signal('');

  protected readonly showNewsletter = computed(
    () => this.activeSite.site().features.showNotYetNewsletter,
  );

  /**
   * Amelia's nine coming-soon destinations all link here, so the page names the one that was asked
   * for. The value is matched against the site's own destination list rather than printed as it
   * arrives, so a hand-edited URL cannot put arbitrary words in the hero.
   */
  protected readonly destination = computed(() => {
    const requested = (this.requestedDestination() ?? '').trim();

    if (!requested) {
      return '';
    }

    const destinations = this.activeSite.site().content.tripSearchDestinations;

    return destinations.find((entry) => entry.label === requested)?.label ?? '';
  });

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
