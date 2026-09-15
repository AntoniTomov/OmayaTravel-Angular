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

export function siteConfigForHostname(hostname: string | null | undefined): SiteConfig {
  const normalizedHostname = (hostname ?? '').toLowerCase();
  const domainMatch = Object.values(SITE_CONFIGS).find((config) => {
    if (!config.domain) {
      return false;
    }

    return normalizedHostname === config.domain || normalizedHostname === `www.${config.domain}`;
  });

  return domainMatch ?? SITE_CONFIGS[DEFAULT_SITE_ID];
}
