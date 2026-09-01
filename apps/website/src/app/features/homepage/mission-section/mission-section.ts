import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActiveSite } from '../../../../sites/active-site';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

const OMAYA_MISSION_IMAGE = {
  src: '/assets/images/home-page/our-mission-image.webp',
  alt: 'Traveller sitting in a cave opening overlooking mountains',
  width: 'auto' as const,
  height: 540,
};

@Component({
  selector: 'app-mission-section',
  imports: [RouterLink],
  templateUrl: './mission-section.html',
  styleUrl: './mission-section.scss',
})
export class MissionSection {
  protected readonly i18n = inject(OmayaI18n);
  private readonly activeSite = inject(ActiveSite);

  private readonly siteMission = computed(
    () => this.activeSite.site().content.missionSection ?? null,
  );
  protected readonly image = computed(() => this.siteMission()?.image ?? OMAYA_MISSION_IMAGE);
  protected readonly title = computed(
    () => this.siteMission()?.title ?? this.i18n.t('homepage.missionTitle'),
  );
  protected readonly copy = computed(
    () => this.siteMission()?.copy ?? this.i18n.t('homepage.missionCopy'),
  );
  protected readonly cta = computed(
    () => this.siteMission()?.cta ?? this.i18n.t('homepage.missionCta'),
  );
}
