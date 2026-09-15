import { Component, RESPONSE_INIT, inject } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  constructor() {
    // Server routes set 404 for the paths they know are missing, but a request rendered on demand,
    // such as a tour slug that is not published, only discovers it is missing once routing falls
    // through to this page. Setting the status here keeps every rendered not-found page a real 404.
    const responseInit = inject(RESPONSE_INIT, { optional: true });

    if (responseInit) {
      responseInit.status = 404;
    }
  }
}
