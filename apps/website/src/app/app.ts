import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeader } from './features/public-header/public-header';
import { PublicFooter } from './features/public-footer/public-footer';

@Component({
  selector: 'app-root',
  imports: [PublicHeader, PublicFooter, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
