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
// The whole Kyrgyzstan gallery, not just the two previews that were audited: the tab renders all
// twelve once a reader opens it, and several sources are phone photographs 2,400-2,560 px tall.
const GALLERY_SOURCES = Array.from(
  { length: 12 },
  (_, index) =>
    `images/destinations/Kyrgystan/gallery/kyrgyzstan-gallery-${String(index + 1).padStart(2, "0")}.webp`,
);

// The gallery grid renders every image through `object-fit: cover` with the default centre
// position, in a slot shaped by the 800x1100 the content declares. A tall source therefore has its
// top and bottom thrown away *after* being downloaded — a 1183x2560 photograph shipped 313 kB so
// the browser could discard most of it. Cropping to that ratio here is not an editorial change: a
// centred crop is exactly the region `object-fit: cover` already shows, so the rendering is
// identical and only the bytes differ. The uncropped original stays untouched for the lightbox,
// which shows the whole frame.
const THUMBNAIL_RATIO = 800 / 1100;
const THUMBNAIL_WIDTHS = [320, 480, 640, 800];

const inputs = [
  "images/destinations/classic-tours-bgr.webp",
  "images/home-page/trips-carousel/Algeria-trip.webp",
  "images/home-page/trips-carousel/Tour-feature-image-2.webp",
  "images/home-page/trips-carousel/Tour-feature-image-1.webp",
  "images/women-tours/bulgaria-women-only-card-bgr.webp",
  "images/women-tours/kyrgyzstan-women-only-card-bgr.webp",
  "images/destinations/Bulgaria/bulgaria-tour-bgr.webp",
  "images/destinations/Kyrgystan/kyrgyzstan-tour-bgr.webp",
  ...GALLERY_SOURCES,
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
  // Tour heroes that were still WebP. The hero is the LCP element on every tour page, and these
  // were missed because this list is maintained by hand — tour-hero-avif.spec.ts now fails if a
  // tour hero has no AVIF, so the next tour cannot slip through the same way.
  "images/destinations/Algiria/gallery/gallery-image-5.webp",
  "images/women-tours/beautiful-bulgaria-women/bulgaria-women-only-bgr.webp",
  "images/women-tours/Morocco/morocco-women-only-bgr.webp",
  "images/solo-travellers/Morocco/Morocco-Solo-Travelers-bgr.webp",
  // First-screen images being made eager. Eager means downloading during the initial load next to
  // the hero, so they have to be cheap first: this one shipped 296,558 bytes of WebP.
  "images/private-tour/private-tour-image.webp",
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

// Cropped thumbnails for the gallery grid. See THUMBNAIL_RATIO above for why cropping is safe here.
const thumbnails = {};
for (const relativePath of GALLERY_SOURCES) {
  const original = readFileSync(resolve(assets, relativePath));
  const before = await sharp(original).metadata();
  const source = `/assets/${relativePath}`;
  // The widest crop this source can fill without inventing pixels. A landscape photograph in a
  // portrait slot is limited by its height, not its width: 1230x800 can only yield 582x800.
  const maxWidth = Math.min(
    before.width,
    Math.floor(before.height * THUMBNAIL_RATIO),
  );
  const widths = THUMBNAIL_WIDTHS.filter((width) => width <= maxWidth);
  // Offer the best the source can manage when the fixed steps stop short of it, so a slot wider
  // than the largest step is not left upscaling a small candidate.
  if (widths.at(-1) !== maxWidth && maxWidth > (widths.at(-1) ?? 0)) {
    widths.push(maxWidth);
  }
  const candidates = [];
  for (const width of widths) {
    const height = Math.round(width / THUMBNAIL_RATIO);
    const cropped = await sharp(original)
      .resize({ width, height, fit: "cover", position: "centre" })
      .avif({ quality: 55, effort: 5 })
      .toBuffer();
    const hash = createHash("sha256")
      .update(cropped)
      .digest("hex")
      .slice(0, 16);
    const filename = `${hash}.avif`;
    writeFileSync(resolve(output, filename), cropped);
    candidates.push(`/assets/images/tour-web/${filename} ${width}w`);
    measurements.push({
      source,
      width,
      height,
      variant: "gallery-thumbnail",
      webBytes: cropped.length,
    });
  }
  if (candidates.length > 0) {
    thumbnails[source] = candidates.join(", ");
  }
}

// Phone-shaped encodings of each tour hero. Up to 30rem wide the hero is a 515px-tall box and
// `object-fit: cover` fills it by height, so a phone only ever sees a centred slice of a wide
// photograph — the desktop parallax rule that moves it vertically sits behind min-width: 48.01rem.
// Shipping the whole frame to show that slice cost 3.3x the bytes of the soft images it replaced.
// This crop is the widest slice any phone up to 480px can show, so it renders pixel-identically at
// about half the bytes. Measured on Lighthouse's mobile profile: 551 KB across the eight heroes,
// against 1,048 KB for the full frame at the same sharpness.
const HERO_SOURCES = [
  "images/destinations/Algiria/gallery/gallery-image-5.webp",
  "images/destinations/Bulgaria/bulgaria-tour-bgr.webp",
  "images/destinations/Kyrgystan/kyrgyzstan-tour-bgr.webp",
  "images/destinations/Marocco/morocco-bgr.webp",
  "images/women-tours/beautiful-bulgaria-women/bulgaria-women-only-bgr.webp",
  "images/women-tours/Kyrgystan-women/kyrgyzstan-women-only-bgr.webp",
  "images/women-tours/Morocco/morocco-women-only-bgr.webp",
  "images/solo-travellers/Morocco/Morocco-Solo-Travelers-bgr.webp",
];
const HERO_HEIGHT_PX = 515;
const MOBILE_HERO_MAX_VIEWPORT = 480;
const MOBILE_HERO_WIDTHS = [320, 480, 640, 840, 960];
const heroMobile = {};
for (const relativePath of HERO_SOURCES) {
  const original = readFileSync(resolve(assets, relativePath));
  const meta = await sharp(original).metadata();
  const cropWidth = Math.min(
    meta.width,
    Math.round((meta.height * MOBILE_HERO_MAX_VIEWPORT) / HERO_HEIGHT_PX),
  );
  const left = Math.round((meta.width - cropWidth) / 2);
  const widths = [
    ...MOBILE_HERO_WIDTHS.filter((width) => width < cropWidth),
    cropWidth,
  ];
  const candidates = [];
  for (const width of widths) {
    const encoded = await sharp(original)
      .extract({ left, top: 0, width: cropWidth, height: meta.height })
      .resize({ width })
      .avif({ quality: 55, effort: 5 })
      .toBuffer();
    const hash = createHash("sha256")
      .update(encoded)
      .digest("hex")
      .slice(0, 16);
    const filename = `${hash}.avif`;
    writeFileSync(resolve(output, filename), encoded);
    candidates.push(`/assets/images/tour-web/${filename} ${width}w`);
    measurements.push({
      source: `/assets/${relativePath}`,
      width,
      variant: "hero-mobile",
      webBytes: encoded.length,
    });
  }
  heroMobile[`/assets/${relativePath}`] = candidates.join(", ");
}

// Encodes one AVIF candidate, names it by content hash and writes it beside the other encodings.
// Returns the public path and the encoded size for the measurement record.
async function writeHashedAvif(pipeline) {
  const encoded = await pipeline.avif({ quality: 55, effort: 5 }).toBuffer();
  const hash = createHash("sha256").update(encoded).digest("hex").slice(0, 16);
  const filename = `${hash}.avif`;
  writeFileSync(resolve(output, filename), encoded);
  return { path: `/assets/images/tour-web/${filename}`, bytes: encoded.length };
}

// Phone- and tablet-shaped encodings of the homepage hero slides, on the same principle as the tour
// heroes above. Up to 48rem the hero fills the viewport width and is 43rem (688px) tall, measured at
// every width from 375px to 768px; at 320px the heading wraps once more and it is 702px, which only
// narrows what shows. object-fit: cover fills that box by height at the centre position, so up to
// 48rem a screen only ever sees a centred vertical slice of each landscape slide, never wider than
// the viewport. Each tier's crop is the widest slice any viewport up to its breakpoint shows, so it
// renders identically. Cropping stops at 48rem because the parallax rule that moves the image sits
// behind min-width: 48.01rem. Without these crops a phone or tablet picks a candidate for 100vw that
// cover then displays up to 3.2 times wider than the width it was chosen for.
const HOMEPAGE_HERO_SOURCES = [
  "images/home-page/carousel/HomePageCoverPhoto-5.webp",
  "images/home-page/carousel/HomePageCoverPhoto-2-e1785918980400.webp",
  "images/home-page/carousel/HomePageCoverPhoto-3.webp",
];
const HOMEPAGE_HERO_HEIGHT_PX = 688;
const HOMEPAGE_HERO_TIERS = [
  { name: "phone", maxViewport: 480, widths: [320, 480, 640, 960] },
  { name: "tablet", maxViewport: 768, widths: [640, 800, 960] },
];
const homepageHeroCrops = {};
for (const relativePath of HOMEPAGE_HERO_SOURCES) {
  const original = readFileSync(resolve(assets, relativePath));
  const meta = await sharp(original).metadata();
  const source = `/assets/${relativePath}`;
  homepageHeroCrops[source] = {};
  for (const tier of HOMEPAGE_HERO_TIERS) {
    const cropWidth = Math.min(
      meta.width,
      Math.round((meta.height * tier.maxViewport) / HOMEPAGE_HERO_HEIGHT_PX),
    );
    const left = Math.round((meta.width - cropWidth) / 2);
    const widths = [
      ...tier.widths.filter((width) => width < cropWidth),
      cropWidth,
    ];
    const candidates = [];
    for (const width of widths) {
      const { path, bytes } = await writeHashedAvif(
        sharp(original)
          .extract({ left, top: 0, width: cropWidth, height: meta.height })
          .resize({ width }),
      );
      candidates.push(`${path} ${width}w`);
      measurements.push({
        source,
        width,
        height: Math.round((width * meta.height) / cropWidth),
        variant: `homepage-hero-${tier.name}`,
        webBytes: bytes,
      });
    }
    homepageHeroCrops[source][tier.name] = candidates.join(", ");
  }
}

// Featured-trip card images on phones. Up to 44rem each card fills the carousel and its image is a
// 1 / 0.9 box filled through object-fit: cover at the default centre position, at every width, so a
// centred crop to that ratio is exactly what a phone shows. The portrait trip photographs stop
// downloading the roughly 40% of their height that cover discards; the Morocco card reuses a
// landscape tour hero and loses its sides instead.
const FEATURED_TRIP_SOURCES = [
  "images/home-page/trips-carousel/Tour-feature-image-1.webp",
  "images/home-page/trips-carousel/Tour-feature-image-2.webp",
  "images/destinations/Marocco/morocco-bgr.webp",
  "images/home-page/trips-carousel/Algeria-trip.webp",
];
const FEATURED_TRIP_MOBILE_RATIO = 1 / 0.9;
// The steps follow what phones actually ask for rather than round numbers. The card is the viewport
// less 48px wide, so a 375px phone at DPR 2 needs 654px and a 390px phone at DPR 3 needs 1,026px.
// With 640 and 960 as neighbouring steps the first of those took the 960, 96.5 KB for the Morocco
// card where 660 is enough. The portrait trip photographs are only about 630px wide, so for them the
// list stops at their own width.
const FEATURED_TRIP_MOBILE_WIDTHS = [320, 480, 560, 660, 760, 880, 1000, 1100];
const featuredTripMobile = {};
for (const relativePath of FEATURED_TRIP_SOURCES) {
  const original = readFileSync(resolve(assets, relativePath));
  const meta = await sharp(original).metadata();
  const wide = meta.width / meta.height > FEATURED_TRIP_MOBILE_RATIO;
  const cropWidth = wide
    ? Math.round(meta.height * FEATURED_TRIP_MOBILE_RATIO)
    : meta.width;
  const cropHeight = wide
    ? meta.height
    : Math.round(meta.width / FEATURED_TRIP_MOBILE_RATIO);
  const left = Math.round((meta.width - cropWidth) / 2);
  const top = Math.round((meta.height - cropHeight) / 2);
  const widths = [
    ...FEATURED_TRIP_MOBILE_WIDTHS.filter((width) => width < cropWidth),
    cropWidth,
  ];
  const candidates = [];
  for (const width of widths) {
    const { path, bytes } = await writeHashedAvif(
      sharp(original)
        .extract({ left, top, width: cropWidth, height: cropHeight })
        .resize({ width }),
    );
    candidates.push(`${path} ${width}w`);
    measurements.push({
      source: `/assets/${relativePath}`,
      width,
      height: Math.round(width / FEATURED_TRIP_MOBILE_RATIO),
      variant: "featured-trip-mobile",
      webBytes: bytes,
    });
  }
  featuredTripMobile[`/assets/${relativePath}`] = candidates.join(", ");
}

// The newsletter popup on phones up to 34rem. Its photograph renders 340-420 CSS px wide there,
// never narrower than its 12.6rem height times the source ratio, so at DPR 2 or more a phone wants
// more pixels than the 536px source has and would always take the full image from any candidate
// list. Phones get a single 480px copy instead. The frame behind it is a CSS background, mostly
// hidden under the photograph and an 18% overlay, and gets the same width under a stable name that
// SCSS can reference.
const POPUP_MOBILE_WIDTH = 480;
const popupMobile = {};
{
  const relativePath = "images/newsletter-popup-inner.webp";
  const original = readFileSync(resolve(assets, relativePath));
  const { path, bytes } = await writeHashedAvif(
    sharp(original).resize({ width: POPUP_MOBILE_WIDTH }),
  );
  popupMobile[`/assets/${relativePath}`] = `${path} ${POPUP_MOBILE_WIDTH}w`;
  measurements.push({
    source: `/assets/${relativePath}`,
    width: POPUP_MOBILE_WIDTH,
    variant: "popup-mobile",
    originalBytes: original.length,
    webBytes: bytes,
  });
}
{
  const relativePath = "images/newsletter-popup-bgr.webp";
  const original = readFileSync(resolve(assets, relativePath));
  const encoded = await sharp(original)
    .resize({ width: POPUP_MOBILE_WIDTH })
    .avif({ quality: 55, effort: 5 })
    .toBuffer();
  writeFileSync(
    resolve(assets, relativePath.replace(/\.webp$/, "-mobile.avif")),
    encoded,
  );
  measurements.push({
    source: `/assets/${relativePath}`,
    width: POPUP_MOBILE_WIDTH,
    variant: "css-background-mobile",
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
      `export const TOUR_WEB_IMAGE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(srcsets, null, 2)};\n` +
      "// Centre-cropped to the ratio the gallery grid displays, so the browser stops downloading\n" +
      "// the parts of a tall photograph that object-fit: cover discards. The lightbox uses the\n" +
      "// original, which is why these are a separate map rather than a replacement.\n" +
      `export const TOUR_WEB_THUMBNAIL_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(thumbnails, null, 2)};\n` +
      "// Centred crops of each tour hero for phones up to 30rem. See HERO_SOURCES in the generator.\n" +
      `export const TOUR_WEB_HERO_MOBILE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(heroMobile, null, 2)};\n` +
      "// Centred crops of the homepage hero slides: phone up to 30rem, tablet up to 48rem. See HOMEPAGE_HERO_TIERS in the generator.\n" +
      `export const HOMEPAGE_HERO_CROP_SRCSETS: Readonly<Record<string, { phone: string; tablet: string }>> = ${JSON.stringify(homepageHeroCrops, null, 2)};\n` +
      "// Centred 1 / 0.9 crops of the featured-trip card images for phones up to 44rem. See FEATURED_TRIP_SOURCES in the generator.\n" +
      `export const FEATURED_TRIP_MOBILE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(featuredTripMobile, null, 2)};\n` +
      "// A 480px copy of the newsletter popup photograph for phones up to 34rem. See POPUP_MOBILE_WIDTH in the generator.\n" +
      `export const NEWSLETTER_POPUP_MOBILE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(popupMobile, null, 2)};\n`,
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
