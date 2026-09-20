import { SITE_CONFIGS, siteConfigForHostname, siteConfigForId, siteConfigForPort } from '.';

describe('site config registry', () => {
  it('resolves Amelia by exact production domain and www host', () => {
    expect(siteConfigForHostname('ameliatravel.bg').id).toBe('amelia');
    expect(siteConfigForHostname('www.ameliatravel.bg').id).toBe('amelia');
  });

  it('resolves Omaya by exact production domain and keeps it as fallback', () => {
    expect(siteConfigForHostname('omayatravel.com').id).toBe('omaya');
    expect(siteConfigForHostname('www.omayatravel.com').id).toBe('omaya');
    expect(siteConfigForHostname('amelia-preview.hostingersite.com').id).toBe('omaya');
  });

  it('resolves a site by the staging hosts it declares, not just its domain', () => {
    // Without this the Amelia staging subdomain falls through to the default site and serves Omaya
    // — the same failure that put English Omaya pages on ameliatravel.bg.
    expect(siteConfigForHostname('staging.ameliatravel.bg').id).toBe('amelia');
    expect(siteConfigForHostname('STAGING.AMELIATRAVEL.BG').id).toBe('amelia');
    expect(siteConfigForHostname('staging.omayatravel.com').id).toBe('omaya');
  });

  it('does not treat a declared host as a wildcard over its subdomains', () => {
    const neighbours = ['other.staging.ameliatravel.bg', 'staging.ameliatravel.bg.evil.test'];

    expect(neighbours.map((host) => siteConfigForHostname(host).id)).toEqual(
      neighbours.map(() => 'omaya'),
    );
  });

  it('falls back to Omaya for unknown preview query site ids', () => {
    expect(siteConfigForId('unknown').id).toBe('omaya');
  });

  it('resolves each site by the dev server port it owns', () => {
    expect(siteConfigForPort(4200)?.id).toBe('amelia');
    expect(siteConfigForPort(4201)?.id).toBe('omaya');
    expect(siteConfigForPort('4200')?.id).toBe('amelia');
  });

  it('claims no site for a port no config owns, so the hostname still decides', () => {
    const unclaimedPorts = [3000, 4300, 80, 443];

    expect(unclaimedPorts.map((port) => siteConfigForPort(port))).toEqual(
      unclaimedPorts.map(() => null),
    );
  });

  it('treats a missing or unparsable port as no match', () => {
    // A prerender renders against `http://localhost` with no port, and a default HTTP URL reports
    // an empty port too. Either must fall through rather than land on a site by accident.
    expect(siteConfigForPort('')).toBeNull();
    expect(siteConfigForPort(null)).toBeNull();
    expect(siteConfigForPort(undefined)).toBeNull();
    expect(siteConfigForPort('not-a-port')).toBeNull();
  });

  it('gives every site a distinct dev port', () => {
    const devPorts = Object.values(SITE_CONFIGS).map((config) => config.devPort);

    expect(new Set(devPorts).size).toBe(devPorts.length);
  });
});
