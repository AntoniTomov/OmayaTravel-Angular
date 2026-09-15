/**
 * Generates the Open Graph share images.
 *
 * For every public page that has a hero image, this crops that image to the 1200x630 frame social
 * platforms use and overlays the Omaya logo. Output lands in `apps/website/src/assets/images/og/`
 * and is committed, so a normal `npm run build` never needs sharp installed — only regenerating
 * does.
 *
 * Run with: npm run og:generate
 *
 * It imports the same content modules the site renders rather than parsing them, so the image set
 * cannot drift from the pages. Adding a hero image to a tour, listing, destination or article is
 * enough; re-run the script and the share image appears.
 */
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import esbuild from 'esbuild';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const websiteRoot = resolve(here, '..', 'apps', 'website');
const assetsRoot = join(websiteRoot, 'src', 'assets');
const contentRoot = join(websiteRoot, 'src', 'app', 'shared', 'content');
const outputDir = join(assetsRoot, 'images', 'og');

/** The frame Facebook, LinkedIn, WhatsApp and X all crop toward. */
const WIDTH = 1200;
const HEIGHT = 630;

/** Logo width as a share of the frame — a mark, not a watermark. */
const LOGO_WIDTH_RATIO = 0.16;
const LOGO_MARGIN = 36;

function assetPath(imagePath) {
  return join(assetsRoot, imagePath.replace(/^\/assets\//, ''));
}

/**
 * Bundles the content modules into one ESM file and imports it.
 *
 * The app's TypeScript uses extensionless imports, which Node's ESM loader will not resolve, so
 * esbuild (already a build dependency) does the resolution. This keeps the script reading the same
 * content the site renders instead of pattern-matching source text, which silently missed every
 * image built from a template literal.
 */
async function loadContent() {
  const entry = join(tmpdir(), `omaya-og-entry-${process.pid}.ts`);
  const bundle = join(tmpdir(), `omaya-og-bundle-${process.pid}.mjs`);

  writeFileSync(
    entry,
    [
      `export { findTourBySlug } from ${JSON.stringify(join(contentRoot, 'tour-content.ts'))};`,
      `export { TOUR_LISTING_PAGES } from ${JSON.stringify(join(contentRoot, 'tour-list-content.ts'))};`,
      `export { DESTINATION_CONTENT } from ${JSON.stringify(join(contentRoot, 'destination-content.ts'))};`,
      `export { BLOG_POSTS } from ${JSON.stringify(join(contentRoot, 'blog-content.ts'))};`,
      `export { PUBLIC_TOUR_SLUGS } from ${JSON.stringify(join(websiteRoot, 'src/app/shared/routing/public-routes.ts'))};`,
    ].join('\n'),
  );

  await esbuild.build({
    entryPoints: [entry],
    outfile: bundle,
    bundle: true,
    format: 'esm',
    platform: 'node',
    logLevel: 'silent',
  });

  try {
    return await import(pathToFileURL(bundle).href);
  } finally {
    rmSync(entry, { force: true });
    rmSync(bundle, { force: true });
  }
}

async function main() {
  const content = await loadContent();
  const { findTourBySlug, TOUR_LISTING_PAGES, DESTINATION_CONTENT, BLOG_POSTS, PUBLIC_TOUR_SLUGS } =
    content;
  const tourContent = { findTourBySlug };
  const listContent = { TOUR_LISTING_PAGES };
  const destinationContent = { DESTINATION_CONTENT };
  const blogContent = { BLOG_POSTS };
  const routes = { PUBLIC_TOUR_SLUGS };

  // findTourBySlug resolves the Morocco variants that are not separate entries in the array.
  const tours = routes.PUBLIC_TOUR_SLUGS.map((slug) => tourContent.findTourBySlug(slug)).filter(
    Boolean,
  );

  const targets = [
    ...tours.map((tour) => ({ key: `tour-${tour.slug}`, image: tour.heroImage.src })),
    ...listContent.TOUR_LISTING_PAGES.map((page) => ({
      key: `listing-${page.slug.replaceAll('/', '-')}`,
      image: page.heroImage,
    })),
    ...destinationContent.DESTINATION_CONTENT.map((destination) => ({
      key: `destination-${destination.slug}`,
      image: destination.heroImage.src,
    })),
    ...blogContent.BLOG_POSTS.map((post) => ({
      key: `article-${post.slug}`,
      image: (post.heroImage ?? post.image).src,
    })),
  ];

  const logoPath = assetPath('/assets/images/home-page/company-logo/Omaya-Travel-Logo-e1780484928941.webp');

  if (!existsSync(logoPath)) {
    throw new Error(`Logo not found at ${logoPath}`);
  }

  const logo = await sharp(logoPath)
    .resize({ width: Math.round(WIDTH * LOGO_WIDTH_RATIO) })
    .png()
    .toBuffer();
  const logoHeight = (await sharp(logo).metadata()).height ?? 0;

  const scrim = Buffer.from(
    `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="fade" x1="0" y1="1" x2="0" y2="0">
           <stop offset="0%" stop-color="#000" stop-opacity="0.55"/>
           <stop offset="45%" stop-color="#000" stop-opacity="0"/>
         </linearGradient>
       </defs>
       <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fade)"/>
     </svg>`,
  );

  if (existsSync(outputDir)) {
    rmSync(outputDir, { recursive: true });
  }

  mkdirSync(outputDir, { recursive: true });

  const missing = [];
  let written = 0;

  for (const { key, image } of targets) {
    if (!image) {
      missing.push(`${key} -> (no hero image in content)`);
      continue;
    }

    const source = assetPath(image);

    if (!existsSync(source)) {
      missing.push(`${key} -> ${image}`);
      continue;
    }

    // "attention" crops toward the most visually salient region rather than the centre, which
    // keeps subjects in frame when a tall hero is squeezed into a landscape card.
    const base = await sharp(source)
      .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'attention' })
      .toBuffer();

    await sharp(base)
      .composite([
        // The logo is white, so a pale hero would swallow it. This scrim darkens only the lower
        // band and fades out well before the middle, so the photograph still reads as the subject.
        { input: scrim, left: 0, top: 0 },
        { input: logo, left: LOGO_MARGIN, top: HEIGHT - LOGO_MARGIN - logoHeight },
      ])
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(outputDir, `${key}.jpg`));

    written += 1;
  }

  // The app cannot stat the filesystem at runtime, so the generated set is written out as a typed
  // manifest. A page with no generated image falls back to the site default rather than linking a
  // 404 into every social preview.
  const generated = readdirSync(outputDir)
    .filter((file) => file.endsWith('.jpg'))
    .map((file) => file.replace(/\.jpg$/, ''))
    .sort();

  writeFileSync(
    join(websiteRoot, 'src', 'app', 'shared', 'seo', 'og-images.ts'),
    [
      '// GENERATED FILE — do not edit by hand. Run `npm run og:generate` after changing hero images.',
      '//',
      `// ${WIDTH}x${HEIGHT} share images composited from each page's hero image with the Omaya logo.`,
      '',
      'export const OG_IMAGE_KEYS: ReadonlySet<string> = new Set([',
      ...generated.map((key) => `  '${key}',`),
      ']);',
      '',
      '/** Root-relative path to a page\'s generated share image, or undefined if it has none. */',
      'export function ogImageFor(key: string | null | undefined): string | undefined {',
      '  return key && OG_IMAGE_KEYS.has(key) ? `/assets/images/og/${key}.jpg` : undefined;',
      '}',
      '',
    ].join('\n'),
  );

  console.log(`Generated ${written} Open Graph images (${WIDTH}x${HEIGHT}) in assets/images/og/`);

  if (missing.length) {
    console.warn(`Skipped ${missing.length} with a missing source image:`);
    missing.forEach((entry) => console.warn(`  ${entry}`));
  }

  console.log(`Manifest: ${generated.length} keys written to shared/seo/og-images.ts`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
