// Run: node scripts/generate-tour-web-images.mjs
// Deterministic web encodings for the measured tour-image delivery work. Originals stay intact.
import { createHash } from "node:crypto";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { format, resolveConfig } from "prettier";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const assets = resolve(root, "apps/website/src/assets");
const output = resolve(assets, "images/tour-web");
// The small steps exist because audits kept flagging images as "larger than they need to be", and
// every time the cause was the same: the smallest candidate on offer was still far bigger than the
// slot. 320 and 480 serve gallery thumbnails, which sit three to a row and are about 116 CSS px
// wide on a phone — roughly 280 device px at DPR 2, against a tall source that shipped 313 kB.
// 640 serves destination and listing cards, around 333 CSS px and so ~690 px at DPR 2. The larger
// steps serve full-width heroes, which are unaffected by the smaller ones being available.
const RESPONSIVE_WIDTHS = [320, 480, 640, 800, 960, 1440, 1920];
const inputs = [
  "images/destinations/classic-tours-bgr.webp",
  "images/home-page/trips-carousel/Algeria-trip.webp",
  "images/home-page/trips-carousel/Tour-feature-image-2.webp",
  "images/home-page/trips-carousel/Tour-feature-image-1.webp",
  "images/women-tours/bulgaria-women-only-card-bgr.webp",
  "images/women-tours/kyrgyzstan-women-only-card-bgr.webp",
  "images/destinations/Bulgaria/bulgaria-tour-bgr.webp",
  "images/destinations/Kyrgystan/kyrgyzstan-tour-bgr.webp",
  // The whole Kyrgyzstan gallery, not just the two previews that were audited: the tab renders all
  // twelve once a reader opens it, and several sources are phone photographs 2,400-2,560 px tall.
  ...Array.from(
    { length: 12 },
    (_, index) =>
      `images/destinations/Kyrgystan/gallery/kyrgyzstan-gallery-${String(index + 1).padStart(2, "0")}.webp`,
  ),
  "images/women-tours/Kyrgystan-women/kyrgyzstan-women-only-bgr.webp",
  "images/destinations/Marocco/morocco-bgr.webp",
  "images/destinations/Bulgaria/gallery/Rila-Monasterry-Bulgaria-2.webp",
  "images/destinations/Bulgaria/gallery/Buzludzha-Monument-3.webp",
  "images/destinations/Bulgaria/gallery/Sofia-City-Tour-Bulgaria-4.webp",
  // Guide and article cards. These render at about 335 CSS px but ship their full source: the Song
  // Kul yurt camp alone was 475,382 bytes, the largest single asset on the Kyrgyzstan destination
  // page and bigger than the hero.
  "images/home-page/blog-posts/Yurt-Camp-at-SongKul-Lake-Opt.webp",
  "images/blog-posts/Kyrgystan-post-preview-bgr.webp",
];
mkdirSync(output, { recursive: true });
const manifest = {};
const srcsets = {};
const measurements = [];
for (const relativePath of inputs) {
  const original = readFileSync(resolve(assets, relativePath));
  const before = await sharp(original).metadata();
  const encoded = await sharp(original)
    .avif({ quality: 55, effort: 5 })
    .toBuffer();
  const after = await sharp(encoded).metadata();
  if (before.width !== after.width || before.height !== after.height) {
    throw new Error(`Dimensions changed: ${relativePath}`);
  }
  const source = `/assets/${relativePath}`;
  if (encoded.length < original.length) {
    const hash = createHash("sha256")
      .update(encoded)
      .digest("hex")
      .slice(0, 16);
    const filename = `${hash}.avif`;
    writeFileSync(resolve(output, filename), encoded);
    manifest[source] = `/assets/images/tour-web/${filename}`;
  }
  measurements.push({
    source,
    width: before.width,
    height: before.height,
    originalBytes: original.length,
    webBytes: Math.min(original.length, encoded.length),
  });
  // Generate a responsive candidate for every configured width narrower than the source. A source
  // narrower than the smallest width yields no candidates and keeps its single encoding, which is
  // what card images need: sharp's withoutEnlargement would otherwise emit byte-identical copies.
  const responsiveWidths = RESPONSIVE_WIDTHS.filter(
    (width) => width < before.width,
  );
  if (responsiveWidths.length > 0) {
    const candidates = [];
    for (const width of responsiveWidths) {
      const resized = await sharp(original)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 55, effort: 5 })
        .toBuffer();
      const hash = createHash("sha256")
        .update(resized)
        .digest("hex")
        .slice(0, 16);
      const filename = `${hash}.avif`;
      writeFileSync(resolve(output, filename), resized);
      candidates.push(`/assets/images/tour-web/${filename} ${width}w`);
      measurements.push({
        source,
        width,
        variant: "responsive",
        webBytes: resized.length,
      });
    }
    candidates.push(`${manifest[source] ?? source} ${before.width}w`);
    srcsets[source] = candidates.join(", ");
  }
}
// CSS backgrounds cannot read the hashed manifest, so these get a stable name beside the original
// and are referenced from SCSS through image-set() with the original as the fallback.
const cssBackgrounds = ["images/discover-more-tours.webp"];
for (const relativePath of cssBackgrounds) {
  const original = readFileSync(resolve(assets, relativePath));
  const before = await sharp(original).metadata();
  const encoded = await sharp(original)
    .avif({ quality: 55, effort: 5 })
    .toBuffer();
  const after = await sharp(encoded).metadata();
  if (before.width !== after.width || before.height !== after.height) {
    throw new Error(`Dimensions changed: ${relativePath}`);
  }
  if (encoded.length >= original.length) {
    throw new Error(`AVIF is not smaller: ${relativePath}`);
  }
  writeFileSync(
    resolve(assets, relativePath.replace(/\.webp$/, ".avif")),
    encoded,
  );
  measurements.push({
    source: `/assets/${relativePath}`,
    width: before.width,
    height: before.height,
    variant: "css-background",
    originalBytes: original.length,
    webBytes: encoded.length,
  });
}

const manifestPath = resolve(
  root,
  "apps/website/src/app/shared/content/tour-web-images.ts",
);
writeFileSync(
  manifestPath,
  await format(
    "// Generated by scripts/generate-tour-web-images.mjs. Originals remain available for full-size viewing.\n" +
      `export const TOUR_WEB_IMAGES: Readonly<Record<string, string>> = ${JSON.stringify(manifest, null, 2)};\n` +
      `export const TOUR_WEB_IMAGE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(srcsets, null, 2)};\n`,
    { ...(await resolveConfig(manifestPath)), filepath: manifestPath },
  ),
);
writeFileSync(
  resolve(root, "docs/SEO_IMAGE_DELIVERY_MEASUREMENTS.json"),
  JSON.stringify(
    {
      encoding: "AVIF quality 55, effort 5; original dimensions; no crop",
      images: measurements,
    },
    null,
    2,
  ) + "\n",
);
console.log(JSON.stringify(measurements, null, 2));
