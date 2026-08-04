import {
  buildMediaImageAttributes,
  buildTransformedMediaUrl,
  type MediaReference,
} from './media-reference';

const heroImage: MediaReference = {
  key: 'tours/kyrgyzstan-tour/song-kul-lake.webp',
  alt: 'Travellers beside Song Kul Lake in Kyrgyzstan',
  width: 1800,
  height: 1200,
  sourceUrl: 'https://omayatravel.com/wp-content/uploads/song-kul-lake.webp',
};

describe('media reference helper', () => {
  it('builds normalized Cloudflare transformation URLs', () => {
    expect(buildTransformedMediaUrl(heroImage.key, 1200, 84)).toBe(
      'https://media.omayatravel.com/cdn-cgi/image/width=1200,quality=84,format=auto/tours/kyrgyzstan-tour/song-kul-lake.webp',
    );
  });

  it('builds layout-stable prioritized hero attributes', () => {
    const attributes = buildMediaImageAttributes(heroImage, {
      use: 'hero',
      sizes: '(min-width: 1024px) 70vw, 100vw',
    });

    expect(attributes.width).toBe(1800);
    expect(attributes.height).toBe(1200);
    expect(attributes.alt).toBe(heroImage.alt);
    expect(attributes.loading).toBe('eager');
    expect(attributes.fetchPriority).toBe('high');
    expect(attributes.sizes).toBe('(min-width: 1024px) 70vw, 100vw');
    expect(attributes.srcset).toContain('1200w');
    expect(attributes.srcset).toContain('1600w');
    expect(attributes.srcset).not.toContain('320w');
  });

  it('uses lazy loading for non-priority card images', () => {
    const attributes = buildMediaImageAttributes(heroImage, {
      use: 'card',
      sizes: '(min-width: 768px) 33vw, 100vw',
    });

    expect(attributes.loading).toBe('lazy');
    expect(attributes.fetchPriority).toBe('auto');
    expect(attributes.srcset).toContain('480w');
    expect(attributes.srcset).toContain('720w');
  });

  it('rejects widths outside the approved allowlist', () => {
    expect(() => buildTransformedMediaUrl(heroImage.key, 640 as never, 74)).toThrow(
      'Media width 640 is not in the approved allowlist.',
    );
  });

  it('rejects absolute media keys so WordPress URLs do not become production media URLs', () => {
    expect(() =>
      buildMediaImageAttributes(
        {
          ...heroImage,
          key: 'https://omayatravel.com/wp-content/uploads/song-kul-lake.webp',
        },
        {
          use: 'content',
          sizes: '100vw',
        },
      ),
    ).toThrow('MediaReference.key must be a stable media key, not a URL.');
  });

  it('requires meaningful alt text and dimensions', () => {
    expect(() =>
      buildMediaImageAttributes(
        {
          ...heroImage,
          alt: '',
        },
        {
          use: 'content',
          sizes: '100vw',
        },
      ),
    ).toThrow('MediaReference.alt is required for meaningful images.');

    expect(() =>
      buildMediaImageAttributes(
        {
          ...heroImage,
          width: 0,
        },
        {
          use: 'content',
          sizes: '100vw',
        },
      ),
    ).toThrow('MediaReference.width must be a positive integer.');
  });
});
