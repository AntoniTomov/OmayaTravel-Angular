import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const ENQUIRE_HERO_IMAGE = '/assets/images/enquire-us/enquire-us-bgr.webp';

@Component({
  selector: 'app-enquire-page',
  imports: [RouterLink],
  templateUrl: './enquire-page.html',
  styleUrl: './enquire-page.scss',
})
export class EnquirePage {
  protected readonly heroImage = ENQUIRE_HERO_IMAGE;
}
