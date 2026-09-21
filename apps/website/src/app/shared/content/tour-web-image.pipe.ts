import { Pipe, PipeTransform } from '@angular/core';
import {
  FEATURED_TRIP_MOBILE_SRCSETS,
  FEATURED_TRIP_WIDE_SRCSETS,
  HOMEPAGE_HERO_CROP_SRCSETS,
  LOGO_SRCSETS,
  MISSION_IMAGE_MOBILE_SRCSETS,
  NEWSLETTER_POPUP_MOBILE_SRCSETS,
  NEWSLETTER_POPUP_TABLET_SRCSETS,
  TOUR_WEB_HERO_MOBILE_SRCSETS,
  TOUR_WEB_IMAGES,
  TOUR_WEB_IMAGE_SRCSETS,
  TOUR_WEB_THUMBNAIL_SRCSETS,
} from './tour-web-images';

// Homepage hero crops: 'phone' for viewports up to 30rem, 'tablet' up to 48rem, 'portrait' for
// wider screens no wider than 3/4 of their height. Null when a slide
// has none, so the <source> is skipped and the browser falls through to the next one.
@Pipe({ name: 'homepageHeroCropSrcset' })
export class HomepageHeroCropSrcsetPipe implements PipeTransform {
  transform(source: string | undefined, tier: 'phone' | 'tablet' | 'portrait'): string | null {
    return source ? (HOMEPAGE_HERO_CROP_SRCSETS[source]?.[tier] ?? null) : null;
  }
}

// Featured-trip card crops for viewports up to 44rem. Null for a card without one, so the <source>
// is skipped.
@Pipe({ name: 'featuredTripMobileSrcset' })
export class FeaturedTripMobileSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return FEATURED_TRIP_MOBILE_SRCSETS[source] ?? null;
  }
}

// Featured-trip card copies for wider screens, at the quality matched to the originals. Null for a
// card without them, so the <source> is skipped and the original <img> is used.
@Pipe({ name: 'featuredTripWideSrcset' })
export class FeaturedTripWideSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return FEATURED_TRIP_WIDE_SRCSETS[source] ?? null;
  }
}

// The capped newsletter popup photograph for viewports up to 34rem.
@Pipe({ name: 'newsletterPopupMobileSrcset' })
export class NewsletterPopupMobileSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return NEWSLETTER_POPUP_MOBILE_SRCSETS[source] ?? null;
  }
}

// The newsletter popup photograph for viewports up to 64rem. Null without one, so the <source> is
// skipped.
@Pipe({ name: 'newsletterPopupTabletSrcset' })
export class NewsletterPopupTabletSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return NEWSLETTER_POPUP_TABLET_SRCSETS[source] ?? null;
  }
}

// Mission photograph copies for viewports up to 58rem. Null without them, so the <source> is skipped.
@Pipe({ name: 'missionImageMobileSrcset' })
export class MissionImageMobileSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return MISSION_IMAGE_MOBILE_SRCSETS[source] ?? null;
  }
}

// Lossless logo copies for each pixel ratio. Null for a logo without them, which leaves the plain src.
@Pipe({ name: 'logoSrcset' })
export class LogoSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return LOGO_SRCSETS[source] ?? null;
  }
}

// Phone-shaped hero crops for viewports up to 30rem. Returns null when a hero has none, so the
// <source> is skipped and the browser falls through to the full-frame srcset instead.
@Pipe({ name: 'tourWebHeroMobileSrcset' })
export class TourWebHeroMobileSrcsetPipe implements PipeTransform {
  transform(source: string): string | null {
    return TOUR_WEB_HERO_MOBILE_SRCSETS[source] ?? null;
  }
}

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
