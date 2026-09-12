import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSite } from '../../../sites/active-site';
import { isSiteRouteEnabled } from '../../../sites/site-routes';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-not-yet-but-soon',
  imports: [RouterLink],
  templateUrl: './not-yet-but-soon.html',
  styleUrl: './not-yet-but-soon.scss',
})
export class NotYetButSoon {
  protected readonly i18n = inject(OmayaI18n);
  private readonly activeSite = inject(ActiveSite);

  protected readonly ctaTarget = computed(() =>
    isSiteRouteEnabled(this.activeSite.site(), '/tours-list/') ? '/tours-list/' : '/destinations/',
  );
}
