import { registerLocaleData } from '@angular/common';
import localeBg from '@angular/common/locales/bg';
import {
  ApplicationConfig,
  LOCALE_ID,
  inject,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { ActiveSite } from '../sites/active-site';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Amelia is a Bulgarian-first brand, so date/number pipes must format in `bg`
// while Omaya keeps the default `en-US` locale. The active site is resolved from
// the request host on both the server and the browser, so the two stay in sync.
registerLocaleData(localeBg);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(),
    {
      provide: LOCALE_ID,
      useFactory: () => inject(ActiveSite).site().locale,
    },
  ],
};
