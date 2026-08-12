import { DatePipe, NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  TourDetailContent,
  TourFaqItem,
  TourHighlight,
  TourItineraryDay,
  findTourBySlug,
} from '../../shared/content/tour-content';

type TourTab = 'information' | 'tour-plan' | 'gallery' | 'faq';

interface TourTabDefinition {
  id: TourTab;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-tour-detail',
  imports: [DatePipe, NgClass, RouterLink],
  templateUrl: './tour-detail.html',
  styleUrl: './tour-detail.scss',
})
export class TourDetail {
  private readonly route = inject(ActivatedRoute);

  protected readonly activeTab = signal<TourTab>('information');
  protected readonly tour = computed(() =>
    findTourBySlug(this.route.snapshot.paramMap.get('tourSlug')),
  );
  protected readonly tabs = computed<readonly TourTabDefinition[]>(() => {
    const tabs: TourTabDefinition[] = [
      { id: 'information', label: 'Information', icon: 'i' },
      { id: 'tour-plan', label: 'Tour Plan', icon: 'book' },
      { id: 'gallery', label: 'Gallery', icon: 'cam' },
    ];

    if (this.tour()?.faq) {
      tabs.push({ id: 'faq', label: 'FAQ', icon: '?' });
    }

    return tabs;
  });
  protected readonly contentClasses = computed(() => ({
    'tour-detail__content--gallery': this.activeTab() === 'gallery',
  }));

  protected setTab(tab: TourTab): void {
    this.activeTab.set(tab);
  }

  protected priceLabel(tour: TourDetailContent): string {
    return `${tour.price.currency}${tour.price.amount}`;
  }

  protected durationLabel(tour: TourDetailContent): string {
    return `${tour.duration.days} Days ${tour.duration.nights} Nights`;
  }

  protected groupSizeLabel(tour: TourDetailContent): string {
    return `${tour.groupSize.min} - ${tour.groupSize.max} people`;
  }

  protected mealsLabel(day: TourItineraryDay): string {
    return day.meals.join(', ');
  }

  protected highlightTitleText(highlight: TourHighlight): string {
    return `${highlight.title.text}${highlight.title.linkText}`;
  }

  protected faqAnswerId(item: TourFaqItem, index: number): string {
    return `${item.question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
  }
}
