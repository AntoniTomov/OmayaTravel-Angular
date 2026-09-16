import { siteConfigForHostname, siteConfigForId } from '.';

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

  it('falls back to Omaya for unknown preview query site ids', () => {
    expect(siteConfigForId('unknown').id).toBe('omaya');
  });
});
