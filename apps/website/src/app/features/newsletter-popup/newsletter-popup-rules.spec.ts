import { isAdLanding, isTourPage } from './newsletter-popup-rules';

describe('newsletter popup rules', () => {
  it('treats every tour detail URL as a tour page', () => {
    const urls = [
      '/tour-item/morocco-tour/',
      '/tour-item/morocco-tour',
      '/tour-item/morocco-tour/?utm_source=google',
      '/TOUR-ITEM/Morocco-Tour/',
      '/tour-item/',
    ];

    expect(urls.filter((url) => !isTourPage(url))).toEqual([]);
  });

  it('does not treat other pages as tour pages', () => {
    const urls = ['/', '/destinations/morocco/', '/blog/tour-item-guide/', '/tour-items/', ''];

    expect(urls.filter((url) => isTourPage(url))).toEqual([]);
  });

  it('recognises a paid click from gclid or utm_medium=cpc', () => {
    const searches = [
      '?gclid=abc123',
      '?utm_source=google&gclid=abc123',
      '?gclid=',
      '?utm_medium=cpc',
      '?utm_source=google&utm_medium=CPC&utm_campaign=x',
    ];

    expect(searches.filter((search) => !isAdLanding(search))).toEqual([]);
  });

  it('does not treat organic or other campaign traffic as a paid click', () => {
    const searches = [
      '',
      '?utm_medium=email',
      '?utm_source=cpc',
      '?utm_medium=cpcx',
      '?site=omaya',
    ];

    expect(searches.filter((search) => isAdLanding(search))).toEqual([]);
  });
});
