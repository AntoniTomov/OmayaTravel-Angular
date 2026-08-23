import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { TourCardContent, findTourListingPage } from '../../shared/content/tour-list-content';

type TourSort = 'date' | 'price-asc' | 'price-desc' | 'name';

const SORTS: readonly { id: TourSort; label: string; icon: string }[] = [
  { id: 'date', label: 'Date', icon: 'calendar_month' },
  { id: 'price-asc', label: 'Price Low to High', icon: 'arrow_upward' },
  { id: 'price-desc', label: 'Price High to Low', icon: 'arrow_downward' },
  { id: 'name', label: 'Name', icon: 'edit_square' },
];

@Component({
  selector: 'app-tour-listing-page',
  imports: [NgClass, MatIconModule, RouterLink],
  templateUrl: './tour-listing-page.html',
  styleUrl: './tour-listing-page.scss',
})
export class TourListingPage {
  private readonly route = inject(ActivatedRoute);

  protected readonly sorts = SORTS;
  protected readonly activeSort = signal<TourSort>('date');
  protected readonly page = computed(() => findTourListingPage(this.route.snapshot.url[0]?.path));
  protected readonly cards = computed(() => {
    const page = this.page();
    const cards = [...page.cards];

    switch (this.activeSort()) {
      case 'price-asc':
        return cards.sort((a, b) => this.priceValue(a) - this.priceValue(b));
      case 'price-desc':
        return cards.sort((a, b) => this.priceValue(b) - this.priceValue(a));
      case 'name':
        return cards.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return cards;
    }
  });

  protected setSort(sort: TourSort): void {
    this.activeSort.set(sort);
  }

  private priceValue(card: TourCardContent): number {
    return Number.parseInt(card.price.replace(/\D/g, ''), 10) || 0;
  }
}
