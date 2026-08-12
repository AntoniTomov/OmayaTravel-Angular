import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TourCardContent, findTourListingPage } from '../../shared/content/tour-list-content';

type TourFilter = 'All' | TourCardContent['category'];

const FILTERS: readonly TourFilter[] = [
  'All',
  'Classic Tours',
  'Solo Travellers',
  'Women-Only',
  'Private Tours',
];

@Component({
  selector: 'app-tour-listing-page',
  imports: [NgClass, RouterLink],
  templateUrl: './tour-listing-page.html',
  styleUrl: './tour-listing-page.scss',
})
export class TourListingPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly filters = FILTERS;
  protected readonly activeFilter = signal<TourFilter>('All');
  protected readonly page = computed(() => findTourListingPage(this.route.snapshot.url[0]?.path));
  protected readonly cards = computed(() => {
    const page = this.page();
    const activeFilter = this.activeFilter();

    if (!page.showFilters || activeFilter === 'All') {
      return page.cards;
    }

    return page.cards.filter((card) => card.category === activeFilter);
  });

  protected setFilter(filter: TourFilter): void {
    this.activeFilter.set(filter);
  }
}
