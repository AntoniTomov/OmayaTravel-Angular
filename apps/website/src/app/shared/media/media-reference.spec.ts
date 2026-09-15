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

  it('uses only the approved media key and never sourceUrl as a runtime fallback', () => {
    const attributes = buildMediaImageAttributes(
      {
        ...heroImage,
        sourceUrl: 'https://omayatravel.com/wp-content/uploads/legacy-song-kul-lake.webp',
      },
      {
        use: 'content',
        sizes: '100vw',
      },
    );

    expect(attributes.src).toContain(
      'https://media.omayatravel.com/cdn-cgi/image/width=1200,quality=78,format=auto/tours/kyrgyzstan-tour/song-kul-lake.webp',
    );
    expect(attributes.src).not.toContain('wp-content');
    expect(attributes.srcset).not.toContain('wp-content');
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

  it.each([
    ['uppercase characters', 'tours/kyrgyzstan-tour/Song-Kul-Lake.webp'],
    ['unknown top-level folder', 'uploads/kyrgyzstan-tour/song-kul-lake.webp'],
    ['whitespace', 'tours/kyrgyzstan-tour/song kul lake.webp'],
    ['backslashes', 'tours\\kyrgyzstan-tour\\song-kul-lake.webp'],
    ['query string', 'tours/kyrgyzstan-tour/song-kul-lake.webp?width=1200'],
    ['fragment', 'tours/kyrgyzstan-tour/song-kul-lake.webp#hero'],
    ['repeated slash', 'tours//kyrgyzstan-tour/song-kul-lake.webp'],
    ['dot segment', 'tours/./song-kul-lake.webp'],
    ['parent segment', 'tours/../song-kul-lake.webp'],
    ['underscore segment', 'tours/kyrgyzstan_tour/song-kul-lake.webp'],
    ['missing descriptive folder', 'shared/song-kul-lake.webp'],
  ])('rejects media keys with %s', (_caseName, key) => {
    expect(() => buildTransformedMediaUrl(key, 1200, 84)).toThrow();
  });

  it.each([
    'destinations/kyrgyzstan/song-kul-lake.webp',
    'tours/kyrgyzstan-tour/song-kul-lake.jpeg',
    'blog/silk-road-guide/bishkek-market.jpg',
    'company/about-us/omaya-travel-team.webp',
    'shared/logo/omaya-travel-mark.png',
    'amelia/home/hero-3.avif',
  ])('accepts approved media key %s', (key) => {
    expect(() => buildTransformedMediaUrl(key, 1200, 84)).not.toThrow();
  });

  it('requires dimensions for meaningful images', () => {
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

  it('requires non-empty alt text for meaningful images', () => {
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
  });

  it.each(['image', 'photo', 'picture', 'tour image', 'hero image', 'destination photo'])(
    'rejects generic alt text "%s"',
    (alt) => {
      expect(() =>
        buildMediaImageAttributes(
          {
            ...heroImage,
            alt,
          },
          {
            use: 'content',
            sizes: '100vw',
          },
        ),
      ).toThrow('MediaReference.alt must describe the meaningful image content.');
    },
  );

  it('accepts descriptive alt text for meaningful images', () => {
    expect(() =>
      buildMediaImageAttributes(
        {
          ...heroImage,
          alt: 'Travellers walking beside Song Kul Lake at sunrise',
        },
        {
          use: 'content',
          sizes: '100vw',
        },
      ),
    ).not.toThrow();
  });
});
