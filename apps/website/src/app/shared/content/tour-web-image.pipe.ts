import { Pipe, PipeTransform } from '@angular/core';
import {
  TOUR_WEB_IMAGES,
  TOUR_WEB_IMAGE_SRCSETS,
  TOUR_WEB_THUMBNAIL_SRCSETS,
} from './tour-web-images';

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

// For grid slots that crop through `object-fit: cover`. Falls back to the uncropped srcset so a
// source without a generated thumbnail still gets responsive candidates rather than nothing.
@Pipe({ name: 'tourWebThumbnailSrcset' })
export class TourWebThumbnailSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return (
      TOUR_WEB_THUMBNAIL_SRCSETS[source] ??
      TOUR_WEB_IMAGE_SRCSETS[source] ??
      TOUR_WEB_IMAGES[source] ??
      null
    );
  }
}
