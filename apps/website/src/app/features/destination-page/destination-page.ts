import { DatePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DESTINATION_CONTENT } from '../../shared/content/destination-content';
import { PublicBreadcrumbs, PublicBreadcrumb } from '../../shared/breadcrumbs/public-breadcrumbs';
import { TourWebImageSrcsetPipe } from '../../shared/content/tour-web-image.pipe';

@Component({
  selector: 'app-destination-page',
  imports: [DatePipe, RouterLink, PublicBreadcrumbs, TourWebImageSrcsetPipe],
  templateUrl: './destination-page.html',
  styleUrl: './destination-page.scss',
})
export class DestinationPage {
  private readonly route = inject(ActivatedRoute);
  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });
  protected readonly destinations = DESTINATION_CONTENT;
  protected readonly destination = computed(() =>
    this.destinations.find((item) => item.slug === this.params().get('destinationSlug')),
  );
  protected readonly hero = computed(
    () => this.destination()?.heroImage ?? this.destinations[0].heroImage,
  );
  protected readonly breadcrumbs = computed((): readonly PublicBreadcrumb[] => {
    const destination = this.destination();
    return [
      { label: 'Home', path: '/' },
      { label: 'Destinations', path: '/destinations/' },
      ...(destination ? [{ label: destination.name }] : []),
    ];
  });
}
