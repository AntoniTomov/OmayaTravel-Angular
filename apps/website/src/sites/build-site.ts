import { DEFAULT_SITE_ID, SITE_CONFIGS, siteConfigForId } from '.';
import { SiteConfig } from './site.types';

/**
 * Site a build renders as where nothing about the request identifies one.
 *
 * Prerendering is the case that needs it: there is no request and no host, because `@angular/ssr`
 * renders every route against `http://localhost`. Without this, every snapshot bakes as the default
 * site whatever host later serves it, which is why `ameliatravel.bg` served Omaya HTML on each
 * prerendered route while its own routes rendered correctly through SSR.
 *
 * Each site gets its own build pass with this define set, and the snapshots from each pass are kept
 * apart so the server can serve the set matching the host.
 */
declare const NG_BUILD_SITE: string | undefined;

/**
 * The site this build was explicitly built for, or `null` for an ordinary build.
 *
 * Null matters: it is what lets a plain dev server still resolve its brand from the port. Only a
 * build that names a site overrides that.
 */
export const BUILD_SITE_OVERRIDE: SiteConfig | null =
  typeof NG_BUILD_SITE !== 'undefined' ? siteConfigForId(NG_BUILD_SITE) : null;

/** The site this build prerenders as, falling back to the default when no build pass names one. */
export const BUILD_SITE: SiteConfig = BUILD_SITE_OVERRIDE ?? SITE_CONFIGS[DEFAULT_SITE_ID];
