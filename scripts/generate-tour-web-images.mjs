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
  "images/blog-posts/Kyrgystan Women only blog/Blog_Kyrgystan-women.webp",
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

// AVIF quality for the homepage copies below, per original. Each value is the lowest quality, in
// steps of 5, at which every copy made from that original scores SSIM of at least 0.97 on luma and
// 0.96 on each of red, green and blue against the original cropped and resized the same way but never
// compressed (Gaussian-window SSIM, no downsampling). Those thresholds were set by eye: a Morocco copy
// at 0.971 luma and 0.964-0.969 per channel was compared with its original and judged the same quality.
// The site-wide encodings above use 55, which several of these originals fall short of: the Morocco
// card scored 0.948. Algeria is the exception: its film grain keeps one colour channel below 0.96 until
// quality 95, so its phone copies use 95 and its wide-screen card keeps the original; see
// FEATURED_TRIP_WIDE_KEEP_ORIGINAL.
const MATCHED_QUALITY = {
  "images/home-page/carousel/HomePageCoverPhoto-5.webp": 65,
  "images/home-page/carousel/HomePageCoverPhoto-2-e1785918980400.webp": 60,
  "images/home-page/carousel/HomePageCoverPhoto-3.webp": 55,
  "images/home-page/trips-carousel/Tour-feature-image-1.webp": 55,
  "images/home-page/trips-carousel/Tour-feature-image-2.webp": 60,
  "images/destinations/Marocco/morocco-bgr.webp": 70,
  "images/home-page/trips-carousel/Algeria-trip.webp": 95,
  "images/newsletter-popup-inner.webp": 55,
  "images/newsletter-popup-bgr.webp": 55,
};

// Narrower copies of the same original pack more detail into each pixel and lose more at the same
// quality, so these needed one or two steps more to clear the same bar. Measured copy by copy against
// the thresholds above; a copy not listed passes at its original's quality.
const MATCHED_QUALITY_OVERRIDES = {
  "images/home-page/carousel/HomePageCoverPhoto-5.webp": {
    "homepage-hero-phone": { 320: 70, 480: 70 },
    "homepage-hero-tablet": { 640: 70, 800: 70 },
  },
  "images/home-page/carousel/HomePageCoverPhoto-2-e1785918980400.webp": {
    "homepage-hero-phone": { 320: 65 },
  },
  "images/home-page/carousel/HomePageCoverPhoto-3.webp": {
    "homepage-hero-phone": { 320: 65, 480: 60 },
    "homepage-hero-tablet": { 640: 60, 800: 60 },
  },
  "images/home-page/trips-carousel/Tour-feature-image-2.webp": {
    "featured-trip-mobile": { 320: 65 },
    "featured-trip-wide": { 320: 65 },
  },
};

function qualityFor(relativePath, variant, width) {
  return (
    MATCHED_QUALITY_OVERRIDES[relativePath]?.[variant]?.[width] ??
    MATCHED_QUALITY[relativePath]
  );
}

// Encodes one AVIF candidate at the given quality, names it by content hash and writes it beside the
// other encodings. Returns the public path and the encoded size for the measurement record.
async function writeHashedAvif(pipeline, quality) {
  const encoded = await pipeline.avif({ quality, effort: 5 }).toBuffer();
  const hash = createHash("sha256").update(encoded).digest("hex").slice(0, 16);
  const filename = `${hash}.avif`;
  writeFileSync(resolve(output, filename), encoded);
  return { path: `/assets/images/tour-web/${filename}`, bytes: encoded.length };
}

// Cropped copies of the homepage hero slides for smaller and taller screens, on the same principle
// as the tour heroes above. The originals are untouched and still serve every other screen.
//
// Phone and tablet: up to 48rem the hero fills the viewport width and is 43rem (688px) tall, measured
// at every width from 375px to 768px; at 320px the heading wraps once more and it is 702px, which
// only narrows what shows. object-fit: cover fills that box by height at the centre position, so a
// screen up to 48rem only ever sees a centred vertical slice of each landscape slide, never wider
// than the viewport. Each tier's crop is the widest slice any viewport up to its breakpoint shows,
// so it renders identically. Without them a phone or tablet picks a candidate for 100vw that cover
// then displays up to 3.2 times wider than the width it was chosen for.
//
// Portrait: above 48rem the parallax rule moves the image vertically, so a crop there must keep the
// full height. That is still worth doing on a tall screen such as an iPad in portrait (1024x1366,
// where the hero measured 956px tall): cover fills the box by height and 29-47% of each slide's
// width is never shown. Above 48rem the hero is at least 70svh tall, so a viewport no wider than 3/4
// of its height gives a box at most (3/4) / 0.7 = 1.07 times as wide as it is tall. The ratio used,
// 1.16, leaves room for Safari's small viewport being shorter than the one media queries measure.
// A landscape iPad needs nothing: its 1024x538 hero is wider than the slides, which fill it by width.
const HOMEPAGE_HERO_SOURCES = [
  "images/home-page/carousel/HomePageCoverPhoto-5.webp",
  "images/home-page/carousel/HomePageCoverPhoto-2-e1785918980400.webp",
  "images/home-page/carousel/HomePageCoverPhoto-3.webp",
];
const HOMEPAGE_HERO_HEIGHT_PX = 688;
const HOMEPAGE_HERO_TIERS = [
  { name: "phone", maxViewport: 480, widths: [320, 480, 640, 960] },
  { name: "tablet", maxViewport: 768, widths: [640, 800, 960] },
  { name: "portrait", ratio: 1.16, widths: [960, 1200] },
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
      tier.ratio
        ? Math.round(meta.height * tier.ratio)
        : Math.round((meta.height * tier.maxViewport) / HOMEPAGE_HERO_HEIGHT_PX),
    );
    const left = Math.round((meta.width - cropWidth) / 2);
    const widths = [
      ...tier.widths.filter((width) => width < cropWidth),
      cropWidth,
    ];
    const candidates = [];
    for (const width of widths) {
      const variant = `homepage-hero-${tier.name}`;
      const quality = qualityFor(relativePath, variant, width);
      const { path, bytes } = await writeHashedAvif(
        sharp(original)
          .extract({ left, top: 0, width: cropWidth, height: meta.height })
          .resize({ width }),
        quality,
      );
      candidates.push(`${path} ${width}w`);
      measurements.push({
        source,
        width,
        height: Math.round((width * meta.height) / cropWidth),
        variant,
        quality,
        webBytes: bytes,
      });
    }
    homepageHeroCrops[source][tier.name] = candidates.join(", ");
  }
}

// Featured-trip card images on phones. Up to 44rem each card fills the carousel and its image is a
// 1 / 0.9 box filled through object-fit: cover at the default centre position, at every width, so a
// centred crop to that ratio is exactly what a phone shows. The portrait trip photographs stop
// downloading the roughly 40% of their height that cover discards. The originals are untouched and
// still serve wider screens.
const FEATURED_TRIP_SOURCES = [
  "images/home-page/trips-carousel/Tour-feature-image-1.webp",
  "images/home-page/trips-carousel/Tour-feature-image-2.webp",
  "images/destinations/Marocco/morocco-bgr.webp",
  "images/home-page/trips-carousel/Algeria-trip.webp",
];
const FEATURED_TRIP_MOBILE_RATIO = 1 / 0.9;
// Every phone copy tops out at 632px wide, the width of the trip photographs. A phone at DPR 2 or
// more wants at least that (a 375px phone at DPR 2 needs 654px) and takes the largest; 560 covers a
// 320px phone at DPR 2, which needs 544px.
const FEATURED_TRIP_MOBILE_WIDTHS = [320, 480, 560];
// Phone crops that are placed by hand instead of centred. The phone copy fills its 1 / 0.9 box
// exactly, so where it is cut from is free to choose. The Morocco card uses its landscape tour hero,
// 1600x1066, where a centred cut would split the carved arch left of centre: this region frames the
// whole arch with a tile panel either side. maxWidth caps it at the 632px of the other three cards,
// so all four phone copies ship the same dimensions.
const FEATURED_TRIP_PHONE_CROPS = {
  "images/destinations/Marocco/morocco-bgr.webp": {
    left: 90,
    top: 103,
    width: 723,
    height: 651,
    maxWidth: 632,
  },
};
const featuredTripMobile = {};
for (const relativePath of FEATURED_TRIP_SOURCES) {
  const original = readFileSync(resolve(assets, relativePath));
  const meta = await sharp(original).metadata();
  const wide = meta.width / meta.height > FEATURED_TRIP_MOBILE_RATIO;
  const centredWidth = wide
    ? Math.round(meta.height * FEATURED_TRIP_MOBILE_RATIO)
    : meta.width;
  const centredHeight = wide
    ? meta.height
    : Math.round(meta.width / FEATURED_TRIP_MOBILE_RATIO);
  const region = FEATURED_TRIP_PHONE_CROPS[relativePath];
  const cropWidth = region?.width ?? centredWidth;
  const cropHeight = region?.height ?? centredHeight;
  const left = region?.left ?? Math.round((meta.width - cropWidth) / 2);
  const top = region?.top ?? Math.round((meta.height - cropHeight) / 2);
  const maxWidth = region?.maxWidth ?? cropWidth;
  const widths = [
    ...FEATURED_TRIP_MOBILE_WIDTHS.filter((width) => width < maxWidth),
    maxWidth,
  ];
  const candidates = [];
  for (const width of widths) {
    const quality = qualityFor(relativePath, "featured-trip-mobile", width);
    const { path, bytes } = await writeHashedAvif(
      sharp(original)
        .extract({ left, top, width: cropWidth, height: cropHeight })
        .resize({ width }),
      quality,
    );
    candidates.push(`${path} ${width}w`);
    measurements.push({
      source: `/assets/${relativePath}`,
      width,
      height: Math.round(width / FEATURED_TRIP_MOBILE_RATIO),
      variant: "featured-trip-mobile",
      quality,
      webBytes: bytes,
    });
  }
  featuredTripMobile[`/assets/${relativePath}`] = candidates.join(", ");
}

// Copies of the featured-trip card images for wider screens, resized but never cropped: there
// object-fit: cover still frames the original. The site-wide AVIF encodings of these photographs are
// quality 55 and stay exactly as they are for the tour listing pages that use them; the homepage
// carousel gets its own at the matched quality instead, so its cards look the same as the originals.
const FEATURED_TRIP_WIDE_WIDTHS = [320, 480, 640, 800, 960, 1200];
// Originals that get no wide-screen copy. Algeria only meets the quality bar at 90, where its copy is
// 309 KB against a 352 KB original, so the carousel keeps loading the original instead.
const FEATURED_TRIP_WIDE_KEEP_ORIGINAL = new Set([
  "images/home-page/trips-carousel/Algeria-trip.webp",
]);
const featuredTripWide = {};
for (const relativePath of FEATURED_TRIP_SOURCES) {
  if (FEATURED_TRIP_WIDE_KEEP_ORIGINAL.has(relativePath)) {
    continue;
  }
  const original = readFileSync(resolve(assets, relativePath));
  const meta = await sharp(original).metadata();
  const widths = [
    ...FEATURED_TRIP_WIDE_WIDTHS.filter((width) => width < meta.width),
    meta.width,
  ];
  const candidates = [];
  for (const width of widths) {
    const quality = qualityFor(relativePath, "featured-trip-wide", width);
    const { path, bytes } = await writeHashedAvif(
      sharp(original).resize({ width }),
      quality,
    );
    candidates.push(`${path} ${width}w`);
    measurements.push({
      source: `/assets/${relativePath}`,
      width,
      height: Math.round((width * meta.height) / meta.width),
      variant: "featured-trip-wide",
      quality,
      originalBytes: original.length,
      webBytes: bytes,
    });
  }
  featuredTripWide[`/assets/${relativePath}`] = candidates.join(", ");
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
    MATCHED_QUALITY[relativePath],
  );
  popupMobile[`/assets/${relativePath}`] = `${path} ${POPUP_MOBILE_WIDTH}w`;
  measurements.push({
    source: `/assets/${relativePath}`,
    width: POPUP_MOBILE_WIDTH,
    variant: "popup-mobile",
    quality: MATCHED_QUALITY[relativePath],
    originalBytes: original.length,
    webBytes: bytes,
  });
}
{
  const relativePath = "images/newsletter-popup-bgr.webp";
  const original = readFileSync(resolve(assets, relativePath));
  const encoded = await sharp(original)
    .resize({ width: POPUP_MOBILE_WIDTH })
    .avif({ quality: MATCHED_QUALITY[relativePath], effort: 5 })
    .toBuffer();
  writeFileSync(
    resolve(assets, relativePath.replace(/\.webp$/, "-mobile.avif")),
    encoded,
  );
  measurements.push({
    source: `/assets/${relativePath}`,
    width: POPUP_MOBILE_WIDTH,
    variant: "css-background-mobile",
    quality: MATCHED_QUALITY[relativePath],
    originalBytes: original.length,
    webBytes: encoded.length,
  });
}

// Phone and tablet copies of the mission photograph. Up to 58rem it is one square column the width of
// the viewport less 3rem, 272-880 CSS px, so depending on its pixel ratio a device wants anything from
// 272 to about 1,760 pixels across. Each width is a step a common device lands on, and the largest
// candidate is the original itself, so a screen that needs more than the copies offer loads the
// untouched 1080px file rather than a softer one. The photograph has film grain, which costs quality
// steps to keep: each width uses the lowest quality at which it clears the same bar as the other
// homepage copies (see MATCHED_QUALITY). 880 was left out because at the quality it needs it came out
// larger than the 960 copy.
const MISSION_SOURCE = "images/home-page/our-mission-image.webp";
const MISSION_COPY_QUALITY = { 480: 85, 560: 80, 660: 80, 760: 75, 960: 70 };
const missionMobile = {};
{
  const original = readFileSync(resolve(assets, MISSION_SOURCE));
  const meta = await sharp(original).metadata();
  const candidates = [];
  for (const [key, quality] of Object.entries(MISSION_COPY_QUALITY)) {
    const width = Number(key);
    const { path, bytes } = await writeHashedAvif(
      sharp(original).resize({ width }),
      quality,
    );
    candidates.push(`${path} ${width}w`);
    measurements.push({
      source: `/assets/${MISSION_SOURCE}`,
      width,
      height: Math.round((width * meta.height) / meta.width),
      variant: "mission-mobile",
      quality,
      originalBytes: original.length,
      webBytes: bytes,
    });
  }
  candidates.push(`/assets/${MISSION_SOURCE} ${meta.width}w`);
  missionMobile[`/assets/${MISSION_SOURCE}`] = candidates.join(", ");
}

// Copies of the brand logos for each pixel ratio. The header shows the logo 5.8rem (92.8 CSS px) wide
// and the newsletter popup 7.8rem (124.8px), so screens from DPR 1 to 3 want 93 to 374 pixels
// across. The white header logo was a 100px file, stretched on every phone. It is the same artwork as
// the 400px black logo with white lettering, so the white copies are made from the black file by
// turning its neutral lettering pixels white and leaving the gold and the transparency untouched.
// Logos are flat artwork where compression shows on every edge, so every copy is lossless WebP and
// resizing to the width a device displays is the only change. The black logo's largest candidate is
// the original file itself.
const BLACK_LOGO = "images/home-page/company-logo/Black_logo-e1781169999413.webp";
const WHITE_LOGO =
  "images/home-page/company-logo/Omaya-Travel-Logo-e1780484928941.webp";
const LOGO_WIDTHS = [100, 150, 200, 250, 300, 350];
// Pixels whose red, green and blue are within this of each other are the lettering, black or its
// anti-aliased grey edge; the gold sun and wave are far more saturated.
const LOGO_NEUTRAL_SATURATION = 40;

async function writeHashedLosslessWebp(pipeline) {
  const encoded = await pipeline.webp({ lossless: true, effort: 6 }).toBuffer();
  const hash = createHash("sha256").update(encoded).digest("hex").slice(0, 16);
  const filename = `${hash}.webp`;
  writeFileSync(resolve(output, filename), encoded);
  return { path: `/assets/images/tour-web/${filename}`, bytes: encoded.length };
}

const logoSrcsets = {};
{
  const black = readFileSync(resolve(assets, BLACK_LOGO));
  const { data, info } = await sharp(black)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const white = Buffer.from(data);
  for (let i = 0; i < white.length; i += 4) {
    const saturation =
      Math.max(white[i], white[i + 1], white[i + 2]) -
      Math.min(white[i], white[i + 1], white[i + 2]);
    if (white[i + 3] > 0 && saturation < LOGO_NEUTRAL_SATURATION) {
      white[i] = 255;
      white[i + 1] = 255;
      white[i + 2] = 255;
    }
  }
  const whiteFull = await sharp(white, { raw: info }).png().toBuffer();
  const blackCandidates = [];
  const whiteCandidates = [];
  for (const width of LOGO_WIDTHS) {
    const blackCopy = await writeHashedLosslessWebp(
      sharp(black).resize({ width }),
    );
    const whiteCopy = await writeHashedLosslessWebp(
      sharp(whiteFull).resize({ width }),
    );
    blackCandidates.push(`${blackCopy.path} ${width}w`);
    whiteCandidates.push(`${whiteCopy.path} ${width}w`);
    measurements.push(
      { source: `/assets/${BLACK_LOGO}`, width, variant: "logo-lossless", webBytes: blackCopy.bytes },
      { source: `/assets/${WHITE_LOGO}`, width, variant: "logo-lossless-white", webBytes: whiteCopy.bytes },
    );
  }
  const whiteLargest = await writeHashedLosslessWebp(sharp(whiteFull));
  measurements.push({
    source: `/assets/${WHITE_LOGO}`,
    width: info.width,
    variant: "logo-lossless-white",
    webBytes: whiteLargest.bytes,
  });
  blackCandidates.push(`/assets/${BLACK_LOGO} ${info.width}w`);
  whiteCandidates.push(`${whiteLargest.path} ${info.width}w`);
  logoSrcsets[`/assets/${BLACK_LOGO}`] = blackCandidates.join(", ");
  logoSrcsets[`/assets/${WHITE_LOGO}`] = whiteCandidates.join(", ");
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
      "// Centred crops of the homepage hero slides: phone up to 30rem, tablet up to 48rem, portrait for screens no wider than 3/4 of their height. See HOMEPAGE_HERO_TIERS in the generator.\n" +
      `export const HOMEPAGE_HERO_CROP_SRCSETS: Readonly<Record<string, { phone: string; tablet: string; portrait: string }>> = ${JSON.stringify(homepageHeroCrops, null, 2)};\n` +
      "// Centred 1 / 0.9 crops of the featured-trip card images for phones up to 44rem. See FEATURED_TRIP_SOURCES in the generator.\n" +
      `export const FEATURED_TRIP_MOBILE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(featuredTripMobile, null, 2)};\n` +
      "// Homepage carousel copies of the featured-trip card images for wider screens, at the quality matched to the originals. See FEATURED_TRIP_WIDE_WIDTHS in the generator.\n" +
      `export const FEATURED_TRIP_WIDE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(featuredTripWide, null, 2)};\n` +
      "// A 480px copy of the newsletter popup photograph for phones up to 34rem. See POPUP_MOBILE_WIDTH in the generator.\n" +
      `export const NEWSLETTER_POPUP_MOBILE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(popupMobile, null, 2)};\n` +
      "// Mission photograph copies for viewports up to 58rem, topped by the original. See MISSION_COPY_QUALITY in the generator.\n" +
      `export const MISSION_IMAGE_MOBILE_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(missionMobile, null, 2)};\n` +
      "// Lossless logo copies for each pixel ratio, keyed by the logo they stand in for. See LOGO_WIDTHS in the generator.\n" +
      `export const LOGO_SRCSETS: Readonly<Record<string, string>> = ${JSON.stringify(logoSrcsets, null, 2)};\n`,
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
