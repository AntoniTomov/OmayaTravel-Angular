import { OMAYA_SITE_CONFIG } from '../../../sites/omaya/site.config';
import {
  FEATURED_TRIP_MOBILE_SRCSETS,
  FEATURED_TRIP_WIDE_SRCSETS,
  HOMEPAGE_HERO_CROP_SRCSETS,
  NEWSLETTER_POPUP_MOBILE_SRCSETS,
} from './tour-web-images';

// The phone copies come from input lists in scripts/generate-tour-web-images.mjs that are maintained
// by hand, and a missing entry fails silently: the <source> is skipped and a phone downloads the
// full-size file again. These fail instead, so a new hero slide or featured tour cannot ship without
// its phone copy.
describe('homepage phone image copies', () => {
  const { hero, featuredTours } = OMAYA_SITE_CONFIG.content;

  it('gives every hero slide a phone, tablet and portrait crop', () => {
    const slides = hero.slides.map((slide) => slide.visualSrc ?? '(slide without visualSrc)');

    expect(
      slides.filter(
        (src) =>
          !HOMEPAGE_HERO_CROP_SRCSETS[src]?.phone ||
          !HOMEPAGE_HERO_CROP_SRCSETS[src]?.tablet ||
          !HOMEPAGE_HERO_CROP_SRCSETS[src]?.portrait,
      ),
    ).toEqual([]);
  });

  it('gives every featured tour card a phone-shaped crop', () => {
    const images = featuredTours.map((trip) => trip.image);

    expect(images.filter((src) => !FEATURED_TRIP_MOBILE_SRCSETS[src])).toEqual([]);
  });

  it('gives every featured tour card its own wide-screen copies, except Algeria which keeps its original', () => {
    const images = featuredTours.map((trip) => trip.image);

    expect(images.filter((src) => !FEATURED_TRIP_WIDE_SRCSETS[src])).toEqual([
      '/assets/images/home-page/trips-carousel/Algeria-trip.webp',
    ]);
  });

  it('gives the newsletter popup photograph a phone copy', () => {
    expect(
      NEWSLETTER_POPUP_MOBILE_SRCSETS['/assets/images/newsletter-popup-inner.webp'],
    ).toBeTruthy();
  });
});
