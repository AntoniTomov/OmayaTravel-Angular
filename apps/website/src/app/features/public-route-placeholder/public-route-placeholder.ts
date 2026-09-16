import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActiveSite } from '../../../sites/active-site';
import { canonicalUrl, withTrailingSlash } from '../../shared/routing/public-routes';

@Component({
  selector: 'app-public-route-placeholder',
  templateUrl: './public-route-placeholder.html',
  styleUrl: './public-route-placeholder.scss',
})
export class PublicRoutePlaceholder {
  private readonly route = inject(ActivatedRoute);
  private readonly activeSite = inject(ActiveSite);

  protected readonly routeType = computed(() => this.route.snapshot.data['routeType'] as string);
  protected readonly canonicalUrl = computed(() =>
    canonicalUrl(
      withTrailingSlash(this.route.snapshot.url.map((segment) => segment.path).join('/')),
      this.activeSite.site(),
    ),
  );
}
