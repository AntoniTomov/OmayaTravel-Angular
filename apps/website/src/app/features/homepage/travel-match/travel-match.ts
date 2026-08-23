import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

interface TravelMatchFeature {
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
}

@Component({
  selector: 'app-travel-match',
  imports: [RouterLink],
  templateUrl: './travel-match.html',
  styleUrl: './travel-match.scss',
})
export class TravelMatch {
  protected readonly i18n = inject(OmayaI18n);
  protected readonly calendarTarget = `/${new Date().getFullYear() === 2027 ? 'calendar-2027' : 'calendar'}/`;
  private readonly icons: readonly TravelMatchFeature['icon'][] = [
    {
      src: '/assets/images/home-page/travel-match/globe-icon.webp',
      alt: '',
      width: 81,
      height: 81,
    },
    {
      src: '/assets/images/home-page/travel-match/tour-guide-icon.webp',
      alt: '',
      width: 81,
      height: 81,
    },
    {
      src: '/assets/images/home-page/travel-match/group-icon.webp',
      alt: '',
      width: 81,
      height: 74,
    },
    {
      src: '/assets/images/home-page/travel-match/luggage-icon.webp',
      alt: '',
      width: 81,
      height: 81,
    },
  ];
  protected readonly features = computed<readonly TravelMatchFeature[]>(() =>
    this.i18n.travelMatch().map((feature, index) => ({
      ...feature,
      icon: this.icons[index],
    })),
  );
}
