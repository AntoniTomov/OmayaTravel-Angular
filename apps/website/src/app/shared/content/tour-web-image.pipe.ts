import { Pipe, PipeTransform } from '@angular/core';
import { TOUR_WEB_IMAGES, TOUR_WEB_IMAGE_SRCSETS } from './tour-web-images';

@Pipe({ name: 'tourWebImage' })
export class TourWebImagePipe implements PipeTransform {
  transform(source: string): string | null {
    return TOUR_WEB_IMAGES[source] ?? null;
  }
}

@Pipe({ name: 'tourWebImageSrcset' })
export class TourWebImageSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return TOUR_WEB_IMAGE_SRCSETS[source] ?? TOUR_WEB_IMAGES[source] ?? null;
  }
}
