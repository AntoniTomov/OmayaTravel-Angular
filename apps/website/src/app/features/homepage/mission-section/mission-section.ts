import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mission-section',
  imports: [RouterLink],
  templateUrl: './mission-section.html',
  styleUrl: './mission-section.scss',
})
export class MissionSection {
  protected readonly image = {
    src: '/assets/images/home-page/our-mission-image.webp',
    alt: 'Traveller sitting in a cave opening overlooking mountains',
    width: 1080,
    height: 1080,
  };
}
