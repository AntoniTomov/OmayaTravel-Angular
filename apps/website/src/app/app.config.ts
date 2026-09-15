import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, UrlSerializer } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TrailingSlashUrlSerializer } from './shared/routing/trailing-slash-url-serializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Public URLs keep their trailing slash in the address bar and in every rendered href.
    { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer },
    provideClientHydration(),
  ],
};
