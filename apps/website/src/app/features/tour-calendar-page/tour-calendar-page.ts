import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface CalendarMonth {
  name: string;
  image: string;
  tours: readonly string[];
  resultPath?: string;
}

const MONTH_IMAGES = [
  '/assets/images/destinations/classic-tours-bgr.webp',
  '/assets/images/home-page/trips-carousel/Tour-feature-image-1.webp',
  '/assets/images/blog-posts/beautiful-bulgaria-post-preview-bgr.webp',
  '/assets/images/women-tours/women-tours-bgr.webp',
  '/assets/images/home-page/private-tours-left-bgr.webp',
  '/assets/images/women-tours/Kyrgystan-women/thumbnails/Kyrgyzstan-tour-1-thumbnail.webp',
  '/assets/images/women-tours/Kyrgystan-women/Kyrgystan_women_only_tour-bgr.webp',
  '/assets/images/blog-posts/Kyrgystan-post-preview-bgr.webp',
  '/assets/images/women-tours/beautiful-bulgaria-women/thumbnails/Bulgaria-tour-.webp',
  '/assets/images/destinations/Algiria/gallery/gallery-image-5.webp',
  '/assets/images/home-page/private-tours-right-bgr.webp',
  '/assets/images/blog-posts/10 places in bulgaria/beautiful-bulgaria-post-bgr.webp',
];

@Component({
  selector: 'app-tour-calendar-page',
  templateUrl: './tour-calendar-page.html',
  styleUrl: './tour-calendar-page.scss',
})
export class TourCalendarPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly year = computed(() =>
    this.route.snapshot.url[0]?.path === 'calendar-2027' ? 2027 : 2026,
  );
  protected readonly months = computed(() => this.buildMonths(this.year()));

  protected openMonth(month: CalendarMonth): void {
    if (month.tours.length === 0) {
      void this.router.navigateByUrl('/not-yet-but-soon/');
      return;
    }

    if (month.tours.length === 1) {
      void this.router.navigateByUrl(month.tours[0]);
      return;
    }

    if (month.tours.length > 1 && month.resultPath) {
      void this.router.navigateByUrl(month.resultPath);
    }
  }

  private buildMonths(year: number): readonly CalendarMonth[] {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ].map((name, index) => ({
      name,
      image: MONTH_IMAGES[index],
      tours: this.monthTours(year, index),
      resultPath: year === 2027 && index === 8 ? '/september-2027/' : undefined,
    }));
  }

  private monthTours(year: number, monthIndex: number): readonly string[] {
    const key = `${year}-${monthIndex + 1}`;
    const toursByMonth: Record<string, readonly string[]> = {
      '2026-10': ['/tour-item/morocco-tour/'],
      '2026-11': ['/tour-item/algeria-desert-expedition-tadrart-rouge/'],
      '2027-2': ['/tour-item/algeria-desert-expedition-tadrart-rouge/'],
      '2027-4': ['/tour-item/morocco-tour/'],
      '2027-5': ['/tour-item/bulgaria-beyond-the-ordinary/'],
      '2027-7': ['/tour-item/women-only-tour-kyrgyzstan/'],
      '2027-8': ['/tour-item/women-only-tour-kyrgyzstan/'],
      '2027-9': [
        '/tour-item/women-only-tour-bulgaria/',
        '/tour-item/bulgaria-beyond-the-ordinary/',
        '/tour-item/algeria-desert-expedition-tadrart-rouge/',
      ],
      '2027-10': ['/tour-item/algeria-desert-expedition-tadrart-rouge/'],
    };

    return toursByMonth[key] ?? [];
  }
}
