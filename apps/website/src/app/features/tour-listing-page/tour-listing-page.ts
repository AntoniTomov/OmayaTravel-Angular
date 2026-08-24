import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { OmayaAnalytics } from '../../shared/analytics/omaya-analytics';
import {
  TOUR_CARDS,
  TourCardContent,
  findTourListingPage,
} from '../../shared/content/tour-list-content';

type TourSort = 'date' | 'price-asc' | 'price-desc' | 'name';
type TourCategory = TourCardContent['category'];

interface TourFilters {
  search: string;
  location: string;
  month: string;
  minPrice: number;
  maxPrice: number;
  categories: readonly TourCategory[];
}

const SORTS: readonly { id: TourSort; label: string; icon: string }[] = [
  { id: 'date', label: 'Date', icon: 'calendar_month' },
  { id: 'price-asc', label: 'Price Low to High', icon: 'arrow_upward' },
  { id: 'price-desc', label: 'Price High to Low', icon: 'arrow_downward' },
  { id: 'name', label: 'Name', icon: 'edit_square' },
];
function priceValue(card: TourCardContent): number {
  return Number.parseInt(card.price.replace(/\D/g, ''), 10) || 0;
}

const TOUR_PRICES = TOUR_CARDS.map((card) => priceValue(card));
const PRICE_MIN = Math.min(...TOUR_PRICES);
const PRICE_MAX = Math.max(...TOUR_PRICES);
const DEFAULT_FILTERS: TourFilters = {
  search: '',
  location: '',
  month: '',
  minPrice: PRICE_MIN,
  maxPrice: PRICE_MAX,
  categories: [],
};
const CATEGORIES: readonly TourCategory[] = ['Classic Tours', 'Women-Only', 'Solo Travellers'];
const MONTH_OPTIONS: readonly string[] = [
  'May',
  'July',
  'August',
  'September',
  'October',
  'November',
];
const TOUR_MONTHS: Readonly<Record<string, readonly string[]>> = {
  '/tour-item/algeria-desert-expedition-tadrart-rouge/': ['February', 'October', 'November'],
  '/tour-item/bulgaria-beyond-the-ordinary/': ['May', 'September'],
  '/tour-item/women-only-tour-bulgaria/': ['May', 'September'],
  '/tour-item/kyrgyzstan-tour/': ['July', 'August'],
  '/tour-item/women-only-tour-kyrgyzstan/': ['July', 'August'],
};

@Component({
  selector: 'app-tour-listing-page',
  imports: [NgClass, MatIconModule, RouterLink],
  templateUrl: './tour-listing-page.html',
  styleUrl: './tour-listing-page.scss',
})
export class TourListingPage {
  private readonly route = inject(ActivatedRoute);
  private readonly analytics = inject(OmayaAnalytics);

  protected readonly sorts = SORTS;
  protected readonly categories = CATEGORIES;
  protected readonly months = MONTH_OPTIONS;
  protected readonly priceMin = PRICE_MIN;
  protected readonly priceMax = PRICE_MAX;
  protected readonly activeSort = signal<TourSort>('date');
  protected readonly isMonthDropdownOpen = signal(false);
  protected readonly pendingFilters = signal<TourFilters>({ ...DEFAULT_FILTERS });
  protected readonly appliedFilters = signal<TourFilters>({ ...DEFAULT_FILTERS });
  protected readonly page = computed(() => findTourListingPage(this.route.snapshot.url[0]?.path));
  protected readonly isTourListPage = computed(() => this.page().slug === 'tours-list');
  protected readonly cards = computed(() => {
    const page = this.page();
    const cards = this.filterCards([...page.cards]);

    switch (this.activeSort()) {
      case 'price-asc':
        return cards.sort((a, b) => priceValue(a) - priceValue(b));
      case 'price-desc':
        return cards.sort((a, b) => priceValue(b) - priceValue(a));
      case 'name':
        return cards.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return cards;
    }
  });

  protected setSort(sort: TourSort): void {
    this.activeSort.set(sort);
    this.analytics.trackEvent('sort_tours', {
      sort,
      page: this.page().slug,
    });
  }

  protected updateFilter<K extends keyof TourFilters>(key: K, value: TourFilters[K]): void {
    this.pendingFilters.update((filters) => {
      const next = { ...filters, [key]: value };

      if (key === 'minPrice' && next.minPrice > next.maxPrice) {
        next.maxPrice = next.minPrice;
      }

      if (key === 'maxPrice' && next.maxPrice < next.minPrice) {
        next.minPrice = next.maxPrice;
      }

      return next;
    });
  }

  protected toggleCategory(category: TourCategory, checked: boolean): void {
    this.pendingFilters.update((filters) => {
      const categories = checked
        ? [...new Set([...filters.categories, category])]
        : filters.categories.filter((item) => item !== category);

      return { ...filters, categories };
    });
  }

  protected applyFilters(): void {
    this.isMonthDropdownOpen.set(false);
    this.appliedFilters.set({ ...this.pendingFilters() });
    this.analytics.trackEvent('filter_tours', {
      page: this.page().slug,
      search_used: this.pendingFilters().search.trim().length > 0,
      location_used: this.pendingFilters().location.trim().length > 0,
      month: this.pendingFilters().month || '(none)',
      categories: this.pendingFilters().categories.join(',') || '(none)',
      min_price: this.pendingFilters().minPrice,
      max_price: this.pendingFilters().maxPrice,
      result_count: this.cards().length,
    });
  }

  protected isCategoryChecked(category: TourCategory): boolean {
    return this.pendingFilters().categories.includes(category);
  }

  protected priceRangeLabel(): string {
    const filters = this.pendingFilters();

    return `EUR${filters.minPrice} - EUR${filters.maxPrice}`;
  }

  protected monthLabel(): string {
    return this.pendingFilters().month || 'Month';
  }

  protected toggleMonthDropdown(): void {
    this.isMonthDropdownOpen.update((isOpen) => !isOpen);
  }

  protected selectMonth(month: string): void {
    this.updateFilter('month', month);
    this.isMonthDropdownOpen.set(false);
    this.analytics.trackEvent('select_month', {
      month: month || '(none)',
      source: 'tour_listing_filter',
    });
  }

  protected trackTourCardClick(card: TourCardContent): void {
    this.analytics.trackEvent('select_item', {
      item_id: card.target,
      item_name: card.title,
      item_category: card.category,
      source: this.page().slug,
    });
  }

  protected trackIntroEnquiry(title: string): void {
    this.analytics.trackEvent('click_enquire', {
      source: 'tour_listing_intro',
      section: title,
    });
  }

  private filterCards(cards: TourCardContent[]): TourCardContent[] {
    const filters = this.appliedFilters();
    const search = filters.search.trim().toLowerCase();
    const location = filters.location.trim().toLowerCase();

    return cards.filter((card) => {
      const price = priceValue(card);
      const searchableText =
        `${card.title} ${card.excerpt} ${card.destination} ${card.category}`.toLowerCase();
      const matchesSearch = search.length === 0 || searchableText.includes(search);
      const matchesLocation =
        location.length === 0 || card.destination.toLowerCase().includes(location);
      const matchesCategory =
        filters.categories.length === 0 || filters.categories.includes(card.category);
      const matchesPrice = price >= filters.minPrice && price <= filters.maxPrice;
      const matchesMonth =
        filters.month.length === 0 || (TOUR_MONTHS[card.target] ?? []).includes(filters.month);

      return matchesSearch && matchesLocation && matchesCategory && matchesPrice && matchesMonth;
    });
  }
}
