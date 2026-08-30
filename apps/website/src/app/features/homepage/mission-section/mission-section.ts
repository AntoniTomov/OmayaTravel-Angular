import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-mission-section',
  imports: [RouterLink],
  templateUrl: './mission-section.html',
  styleUrl: './mission-section.scss',
})
export class MissionSection {
  protected readonly i18n = inject(OmayaI18n);
  protected readonly image = {
    src: '/assets/images/home-page/our-mission-image.webp',
    alt: 'Traveller sitting in a cave opening overlooking mountains',
    width: 'auto',
    height: 540,
  };
}
