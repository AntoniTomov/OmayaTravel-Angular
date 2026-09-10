import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OmayaI18n } from '../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-not-yet-but-soon',
  imports: [RouterLink],
  templateUrl: './not-yet-but-soon.html',
  styleUrl: './not-yet-but-soon.scss',
})
export class NotYetButSoon {
  protected readonly i18n = inject(OmayaI18n);
}
