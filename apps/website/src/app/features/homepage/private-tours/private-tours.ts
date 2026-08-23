import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OmayaI18n } from '../../../shared/i18n/omaya-i18n';

@Component({
  selector: 'app-private-tours',
  imports: [RouterLink],
  templateUrl: './private-tours.html',
  styleUrl: './private-tours.scss',
})
export class PrivateTours {
  protected readonly i18n = inject(OmayaI18n);
}
