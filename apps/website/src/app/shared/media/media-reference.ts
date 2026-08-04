export interface MediaReference {
  key: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
  sourceUrl?: string;
}

export type MediaImageUse = 'thumbnail' | 'card' | 'content' | 'hero' | 'gallery';

export type MediaLoadingMode = 'lazy' | 'eager';

export interface MediaImageOptions {
  use: MediaImageUse;
  sizes: string;
  priority?: boolean;
  widths?: readonly MediaVariantWidth[];
}

export interface MediaImageAttributes {
  src: string;
  srcset: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
  loading: MediaLoadingMode;
  fetchPriority: 'high' | 'auto';
}

export const MEDIA_BASE_URL = 'https://media.omayatravel.com';

export const MEDIA_VARIANT_WIDTHS = [320, 480, 720, 960, 1200, 1600, 1920] as const;

export type MediaVariantWidth = (typeof MEDIA_VARIANT_WIDTHS)[number];

const MEDIA_QUALITY_BY_USE: Record<MediaImageUse, number> = {
  thumbnail: 72,
  card: 74,
  content: 78,
  hero: 84,
  gallery: 84,
};

const MEDIA_WIDTHS_BY_USE: Record<MediaImageUse, readonly MediaVariantWidth[]> = {
  thumbnail: [320, 480],
  card: [480, 720],
  content: [720, 960, 1200],
  hero: [1200, 1600, 1920],
  gallery: [1200, 1600, 1920],
};

const ALLOWED_WIDTHS = new Set<number>(MEDIA_VARIANT_WIDTHS);

export function buildMediaImageAttributes(
  media: MediaReference,
  options: MediaImageOptions,
): MediaImageAttributes {
  assertValidMediaReference(media);

  const widths = normalizeWidths(options.widths ?? MEDIA_WIDTHS_BY_USE[options.use]);
  const displayWidths = widths.filter((width) => width <= media.width);
  const srcsetWidths = displayWidths.length > 0 ? displayWidths : [smallestAllowedWidth()];
  const srcWidth = chooseSrcWidth(srcsetWidths, media.width);
  const priority = options.priority === true || options.use === 'hero';

  return {
    src: buildTransformedMediaUrl(media.key, srcWidth, MEDIA_QUALITY_BY_USE[options.use]),
    srcset: srcsetWidths
      .map(
        (width) =>
          `${buildTransformedMediaUrl(media.key, width, MEDIA_QUALITY_BY_USE[options.use])} ${width}w`,
      )
      .join(', '),
    sizes: options.sizes,
    width: media.width,
    height: media.height,
    alt: media.alt.trim(),
    loading: priority ? 'eager' : 'lazy',
    fetchPriority: priority ? 'high' : 'auto',
  };
}

export function buildTransformedMediaUrl(
  key: string,
  width: MediaVariantWidth,
  quality: number,
  mediaBaseUrl = MEDIA_BASE_URL,
): string {
  assertValidMediaKey(key);
  assertAllowedWidth(width);
  assertAllowedQuality(quality);

  const baseUrl = mediaBaseUrl.replace(/\/+$/, '');
  const encodedKey = key
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/');

  return `${baseUrl}/cdn-cgi/image/width=${width},quality=${quality},format=auto/${encodedKey}`;
}

export function assertValidMediaReference(media: MediaReference): void {
  assertValidMediaKey(media.key);

  if (media.alt.trim().length === 0) {
    throw new Error('MediaReference.alt is required for meaningful images.');
  }

  if (!Number.isInteger(media.width) || media.width <= 0) {
    throw new Error('MediaReference.width must be a positive integer.');
  }

  if (!Number.isInteger(media.height) || media.height <= 0) {
    throw new Error('MediaReference.height must be a positive integer.');
  }
}

function normalizeWidths(widths: readonly MediaVariantWidth[]): readonly MediaVariantWidth[] {
  const uniqueWidths = [...new Set(widths)].sort((a, b) => a - b);

  for (const width of uniqueWidths) {
    assertAllowedWidth(width);
  }

  return uniqueWidths;
}

function chooseSrcWidth(
  widths: readonly MediaVariantWidth[],
  originalWidth: number,
): MediaVariantWidth {
  return widths.find((width) => width >= originalWidth) ?? widths[widths.length - 1];
}

function smallestAllowedWidth(): MediaVariantWidth {
  return MEDIA_VARIANT_WIDTHS[0];
}

function assertValidMediaKey(key: string): void {
  if (key.trim().length === 0) {
    throw new Error('MediaReference.key is required.');
  }

  if (/^https?:\/\//i.test(key)) {
    throw new Error('MediaReference.key must be a stable media key, not a URL.');
  }

  if (key.includes('..') || key.startsWith('/') || key.endsWith('/')) {
    throw new Error('MediaReference.key must be a normalized relative media key.');
  }
}

function assertAllowedWidth(width: number): asserts width is MediaVariantWidth {
  if (!ALLOWED_WIDTHS.has(width)) {
    throw new Error(`Media width ${width} is not in the approved allowlist.`);
  }
}

function assertAllowedQuality(quality: number): void {
  if (!Number.isInteger(quality) || quality < 1 || quality > 100) {
    throw new Error('Media quality must be an integer from 1 to 100.');
  }
}
