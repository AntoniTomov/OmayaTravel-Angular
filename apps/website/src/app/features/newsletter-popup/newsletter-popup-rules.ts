/**
 * When the newsletter popup may open.
 *
 * Visitors from paid ads land on the tour they clicked and are almost all new, so before these rules
 * nearly every one of them had the popup cover that tour two seconds after arriving. The popup now
 * stays away from tour pages, and from any session that arrived from a paid click.
 */

/** sessionStorage key recording that this browser session started from a paid click. */
export const AD_SESSION_KEY = 'omaya-newsletter-popup-ad-session';

/** True for tour detail pages (`/tour-item/<slug>/`), with or without a query or trailing slash. */
export function isTourPage(url: string): boolean {
  const path = (url || '/').split(/[?#]/)[0].toLowerCase();

  return path === '/tour-item' || path.startsWith('/tour-item/');
}

/**
 * True when the landing URL's query marks a paid click: a Google Ads click id (`gclid`), or
 * `utm_medium=cpc`.
 */
export function isAdLanding(search: string): boolean {
  const params = new URLSearchParams(search || '');

  return params.has('gclid') || params.get('utm_medium')?.trim().toLowerCase() === 'cpc';
}
