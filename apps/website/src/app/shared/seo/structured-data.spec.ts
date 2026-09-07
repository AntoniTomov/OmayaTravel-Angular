import { OMAYA_SITE_CONFIG } from '../../../sites/omaya/site.config';
import { SITE_CONFIGS } from '../../../sites';
import { PUBLIC_CANONICAL_HOST } from '../routing/public-routes';
import { SeoSiteIdentity, organizationJsonLd } from './structured-data';

const identity: SeoSiteIdentity = {
  name: OMAYA_SITE_CONFIG.brand.name,
  canonicalHost: PUBLIC_CANONICAL_HOST,
  logoUrl: OMAYA_SITE_CONFIG.brand.logoSrc,
  email: 'info@omayatravel.com',
  locale: OMAYA_SITE_CONFIG.locale,
  organisation: OMAYA_SITE_CONFIG.organisation,
};

describe('organisation structured data', () => {
  it('publishes the registered business facts', () => {
    const json = organizationJsonLd(identity) as Record<string, never>;

    expect(json['@type']).toBe('TravelAgency');
    expect(json['legalName']).toBe('Omaya Travel EOOD');
    expect(json['foundingDate']).toBe('2026');
    expect(json['telephone']).toBe('+359889735274');
  });

  it('publishes a complete postal address', () => {
    const address = (organizationJsonLd(identity) as Record<string, Record<string, string>>)[
      'address'
    ];

    expect(address['@type']).toBe('PostalAddress');
    expect(address['streetAddress']).toBe('61 Hristo Botev St.');
    expect(address['addressLocality']).toBe('Kardzhali');
    expect(address['postalCode']).toBe('6600');
    expect(address['addressCountry']).toBe('BG');
  });

  it('publishes the verifiable identifiers with the registration exactly as issued', () => {
    const identifiers = (
      organizationJsonLd(identity) as unknown as {
        identifier: { name: string; value: string }[];
      }
    ).identifier;
    const byName = Object.fromEntries(identifiers.map((item) => [item.name, item.value]));

    // Cyrillic РК, matching the licence page. A Latin "PK-01-8706" would not match the register.
    expect(byName['Tour operator registration']).toBe('РК-01-8706');
    expect(byName['EIK']).toBe('208663654');
  });

  it('never publishes a share or session token in a social profile URL', () => {
    const sameAs = (organizationJsonLd(identity) as unknown as { sameAs: string[] }).sameAs;

    expect(sameAs.length).toBeGreaterThan(0);

    // ?stkn= and friends are personal to whoever copied the link and must never be published.
    const tokenised = sameAs.filter((url) => /[?&](stkn|igsh|share|si|fbclid)=/i.test(url));

    expect(tokenised).toEqual([]);
  });

  it('lists only absolute https profile URLs', () => {
    const sameAs = (organizationJsonLd(identity) as unknown as { sameAs: string[] }).sameAs;
    const malformed = sameAs.filter((url) => !url.startsWith('https://'));

    expect(malformed).toEqual([]);
  });

  it('stays valid for a brand that has supplied no organisation block', () => {
    // Amelia has no registered details yet; it must still emit usable schema rather than
    // undefined fields or invented ones.
    expect(SITE_CONFIGS.amelia.organisation).toBeUndefined();

    const json = organizationJsonLd({ ...identity, organisation: undefined }) as Record<
      string,
      unknown
    >;

    expect(json['name']).toBeTruthy();
    expect(json['address']).toBeUndefined();
    expect(json['identifier']).toBeUndefined();
    expect(json['sameAs']).toBeUndefined();
    expect(JSON.stringify(json)).not.toContain('undefined');
  });
});
