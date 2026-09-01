import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSite } from '../../../../sites/active-site';
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
  private readonly activeSite = inject(ActiveSite);
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
  protected readonly section = computed(() => {
    const siteSection = this.activeSite.site().content.travelMatchSection;

    return {
      title: siteSection?.title ?? this.i18n.t('homepage.travelMatchTitle'),
      subtitle: siteSection?.subtitle ?? this.i18n.t('homepage.travelMatchSubtitle'),
      backgroundImage: siteSection?.backgroundImage,
    };
  });
  protected readonly sectionStyle = computed(() => {
    const backgroundImage = this.section().backgroundImage;

    return backgroundImage
      ? { '--travel-match-background-image': `url('${backgroundImage}')` }
      : {};
  });
  protected readonly features = computed<readonly TravelMatchFeature[]>(() =>
    (this.activeSite.site().content.travelMatchSection?.items ?? this.i18n.travelMatch()).map(
      (feature, index) => ({
        ...feature,
        icon: this.icons[index],
      }),
    ),
  );
}
