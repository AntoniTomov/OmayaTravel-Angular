import { AMELIA_SITE_CONFIG } from './amelia/site.config';
import { OMAYA_SITE_CONFIG } from './omaya/site.config';
import { SiteConfig, SiteId } from './site.types';

export const SITE_CONFIGS: Record<SiteId, SiteConfig> = {
  omaya: OMAYA_SITE_CONFIG,
  amelia: AMELIA_SITE_CONFIG,
};

export const DEFAULT_SITE_ID: SiteId = 'omaya';

export function siteConfigForId(siteId: SiteId | string | null | undefined): SiteConfig {
  return SITE_CONFIGS[(siteId as SiteId) || DEFAULT_SITE_ID] ?? SITE_CONFIGS[DEFAULT_SITE_ID];
}

/**
 * Site a local dev server port belongs to, or `null` when the port is not one a site claims.
 *
 * Only meaningful on a local host: a deployed server listens on whatever port the platform hands
 * it, so ports say nothing about the brand there and the hostname decides instead.
 */
export function siteConfigForPort(port: string | number | null | undefined): SiteConfig | null {
  const normalizedPort = Number(port);

  if (!Number.isInteger(normalizedPort) || normalizedPort <= 0) {
    return null;
  }

  return Object.values(SITE_CONFIGS).find((config) => config.devPort === normalizedPort) ?? null;
}

export function siteConfigForHostname(hostname: string | null | undefined): SiteConfig {
  const normalizedHostname = (hostname ?? '').toLowerCase();
  const domainMatch = Object.values(SITE_CONFIGS).find((config) => {
    if (!config.domain) {
      return false;
    }

    return normalizedHostname === config.domain || normalizedHostname === `www.${config.domain}`;
  });

  if (domainMatch) {
    return domainMatch;
  }

  // Staging and preview origins pick their brand here rather than falling through to the default
  // site. They stay unpublished: `isPublishedSiteHost` and `canonicalHostForRequestHost` match on
  // `domain` alone, so these hosts keep `noindex` and canonicalise to the real site.
  const additionalHostMatch = Object.values(SITE_CONFIGS).find((config) =>
    config.additionalHosts?.some((host) => host.toLowerCase() === normalizedHostname),
  );

  return additionalHostMatch ?? SITE_CONFIGS[DEFAULT_SITE_ID];
}
