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
    src: 'https://omayatravel.com/wp-content/uploads/2026/03/Untitled-design-17.png',
    alt: 'Traveller sitting in a cave opening overlooking mountains',
    width: 900,
    height: 625,
  };
}
