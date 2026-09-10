// Run: node scripts/generate-material-icons-subset.mjs
// Google serves one Material Icons font covering every glyph in the set. The site uses a few
// dozen, so the hosted file spends most of its bytes on icons nobody renders, and it competes
// with the LCP image for bandwidth on a slow connection. This subsets it to the ligature names
// that actually appear in the source, and writes the result next to the other generated assets.
import { createHash } from "node:crypto";
import {
  readFileSync,
  readdirSync,
  mkdirSync,
  writeFileSync,
  statSync,
} from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import subsetFont from "subset-font";
import { format, resolveConfig } from "prettier";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "apps/website/src");
const output = resolve(source, "assets/fonts");

// Google returns woff2 only to a user agent it recognises as supporting it.
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36";
const STYLESHEET = "https://fonts.googleapis.com/icon?family=Material+Icons";
const CODEPOINTS =
  "https://raw.githubusercontent.com/google/material-design-icons/master/font/MaterialIcons-Regular.codepoints";

function walk(directory) {
  const files = [];
  for (const entry of readdirSync(directory)) {
    if (entry === "node_modules" || entry === "assets") {
      continue;
    }
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      files.push(...walk(path));
    } else if (
      [".html", ".ts"].includes(extname(path)) &&
      !path.endsWith(".spec.ts")
    ) {
      files.push(path);
    }
  }
  return files;
}

// Three ways an icon reaches the page: a <mat-icon> ligature, a bare .material-icons span, and a
// name held in a content constant and bound into either of those.
const patterns = [
  /<mat-icon[^>]*>\s*([a-z0-9_]+)\s*<\/mat-icon>/g,
  /class="material-icons"[^>]*>\s*([a-z0-9_]+)\s*</g,
  /\bicon:\s*"([a-z0-9_]+)"/g,
  /\bicon:\s*'([a-z0-9_]+)'/g,
];

const ligatures = new Set();
for (const file of walk(source)) {
  const contents = readFileSync(file, "utf8");
  for (const pattern of patterns) {
    for (const match of contents.matchAll(pattern)) {
      ligatures.add(match[1]);
    }
  }
}

const names = [...ligatures].sort();
if (names.length === 0) {
  throw new Error(
    "Found no Material Icons ligature names; refusing to write an empty subset.",
  );
}

const css = await (
  await fetch(STYLESHEET, { headers: { "User-Agent": USER_AGENT } })
).text();
const fontUrl = css.match(/url\((https:\/\/[^)]+\.woff2)\)/)?.[1];
if (!fontUrl) {
  throw new Error(`No woff2 source in the Material Icons stylesheet:\n${css}`);
}

const original = Buffer.from(
  await (
    await fetch(fontUrl, { headers: { "User-Agent": USER_AGENT } })
  ).arrayBuffer(),
);

// Harfbuzz's default subsetting closes the glyph set over the layout features. Every icon name is
// spelled from the same alphabet, so retaining the letters retains nearly every ligature in the
// font: a 27-icon subset came back at 114,644 of the original 128,352 bytes. Turning closure off
// and naming the icon codepoints explicitly keeps only the icons in use, and the ligature rules
// that survive are the ones whose target glyphs were kept — so the templates keep reading
// `<mat-icon>calendar_month</mat-icon>` rather than an opaque codepoint.
const codepointsFile = await (await fetch(CODEPOINTS)).text();
const codepoints = new Map(
  codepointsFile
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => line.split(" "))
    .map(([name, hex]) => [name, String.fromCodePoint(parseInt(hex, 16))]),
);

const unknown = names.filter((name) => !codepoints.has(name));
if (unknown.length > 0) {
  throw new Error(`Not Material Icons names: ${unknown.join(", ")}`);
}

const glyphs = names.map((name) => codepoints.get(name)).join("");
const subset = await subsetFont(original, `${names.join(" ")}${glyphs}`, {
  targetFormat: "woff2",
  noLayoutClosure: true,
});
if (subset.length >= original.length) {
  throw new Error(
    `Subset is not smaller: ${subset.length} vs ${original.length}`,
  );
}

mkdirSync(output, { recursive: true });
writeFileSync(resolve(output, "material-icons-subset.woff2"), subset);

// The subset is small enough that a separate request costs more than the bytes. A production audit
// put the font at 1,037 ms in the critical chain — it is only discovered once the stylesheet is
// parsed — and flagged 210 ms against `font-display: block`. Inlining it as a data URI removes the
// request, so the font is available the moment the CSS applies and the block period never bites.
//
// `block` stays deliberately. Lighthouse suggests `swap` or `optional`, but both paint the
// fallback first, and for a ligature icon font the fallback renders the ligature's own name — a
// slow load would show the reader the word "calendar_month" instead of an icon.
const scssPath = resolve(root, "apps/website/src/styles/_material-icons.scss");
const scss = `// Generated by scripts/generate-material-icons-subset.mjs — do not edit by hand.
// ${names.length} ligatures, ${subset.length} bytes, inlined to keep it off the critical path.
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('data:font/woff2;base64,${subset.toString("base64")}') format('woff2');
}
`;
writeFileSync(
  scssPath,
  await format(scss, {
    ...(await resolveConfig(scssPath)),
    filepath: scssPath,
  }),
);

const measurements = {
  generatedBy: "scripts/generate-material-icons-subset.mjs",
  stylesheet: STYLESHEET,
  upstreamFont: fontUrl,
  upstreamSha256: createHash("sha256").update(original).digest("hex"),
  ligatures: names,
  originalBytes: original.length,
  subsetBytes: subset.length,
  savedBytes: original.length - subset.length,
};

const target = resolve(root, "docs/SEO_FONT_DELIVERY_MEASUREMENTS.json");
const prettierConfig = await resolveConfig(target);
writeFileSync(
  target,
  await format(JSON.stringify(measurements, null, 2), {
    ...prettierConfig,
    filepath: target,
  }),
);

console.log(
  `${names.length} ligatures: ${original.length} -> ${subset.length} bytes ` +
    `(${measurements.savedBytes} saved)`,
);
