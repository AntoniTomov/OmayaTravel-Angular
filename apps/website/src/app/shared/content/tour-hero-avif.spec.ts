import { TOUR_DETAIL_CONTENT } from './tour-content';
import {
  TOUR_WEB_HERO_MOBILE_SRCSETS,
  TOUR_WEB_IMAGES,
  TOUR_WEB_IMAGE_SRCSETS,
} from './tour-web-images';

// The hero is the LCP element on every tour page. Four were shipping as WebP because the AVIF
// generator's input list is maintained by hand and nobody had added them. These fail instead, so a
// new tour cannot reach production with an unencoded hero or without its phone-shaped crop.
describe('tour hero images', () => {
  const heroes = TOUR_DETAIL_CONTENT.map((tour) => tour.heroImage.src);

  it('gives every tour hero an AVIF encoding', () => {
    expect(heroes.filter((src) => !TOUR_WEB_IMAGES[src] && !TOUR_WEB_IMAGE_SRCSETS[src])).toEqual(
      [],
    );
  });

  it('gives every tour hero a phone-shaped crop', () => {
    expect(heroes.filter((src) => !TOUR_WEB_HERO_MOBILE_SRCSETS[src])).toEqual([]);
  });
});
