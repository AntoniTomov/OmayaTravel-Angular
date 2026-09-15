// Run: node scripts/check-image-dimensions.mjs
// Fails when a tour hero or highlight declares width/height that its file does not have.
//
// These attributes are what the browser uses to reserve space before an image decodes. They were
// wrong on 36 of 38 declarations when this check was written — heroes claiming 1920x900 against
// 1230x800 files, highlights claiming 800x1100 against 231x150 ones, and one entry carrying
// `height: 'auto'`, which is not valid in an HTML height attribute and is discarded outright.
//
// Nothing shifted, because the tour stylesheet pins both with `aspect-ratio` and `object-fit`.
// That is luck rather than design: remove those CSS rules and every wrong number becomes a layout
// shift. Gallery entries are deliberately out of scope — their mobile row heights *do* come from
// these attributes, so changing them is a layout decision, not a data fix.
import sharp from "sharp";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = resolve(root, "apps/website/src");
const file = resolve(src, "app/shared/content/tour-content.ts");
const text = readFileSync(file, "utf8");
const lines = text.split(/\r?\n/);

const bases = {};
for (const m of text.matchAll(/const ([A-Z_]+_ASSET_BASE) = '([^']+)'/g)) {
  bases[m[1]] = m[2];
}

const problems = [];
let checked = 0;

for (let i = 0; i < lines.length; i++) {
  const match = lines[i].match(/src:\s*`\$\{([A-Z_]+)\}([^`]+)`/);
  // Skip loop-built paths: those are gallery arrays, which are out of scope.
  if (!match || match[2].includes("${")) {
    continue;
  }

  let role = "?";
  for (let j = i; j >= 0 && role === "?"; j--) {
    const found = lines[j].match(/^\s*(highlights|gallery|heroImage|image):/);
    if (found) {
      role = found[1];
    }
  }
  if (role !== "heroImage" && role !== "image") {
    continue;
  }

  const web = bases[match[1]] + match[2];
  const onDisk = resolve(src, "." + web);
  if (!existsSync(onDisk)) {
    problems.push(`${web} — declared but the file does not exist`);
    continue;
  }

  // A `source:` line sits between src and width on some entries, so read a generous window.
  const block = lines.slice(i, i + 9).join("\n");
  const width = block.match(/width:\s*([0-9]+|'[a-z]+')/)?.[1];
  const height = block.match(/height:\s*([0-9]+|'[a-z]+')/)?.[1];
  const meta = await sharp(onDisk).metadata();
  checked++;

  if (
    String(width) !== String(meta.width) ||
    String(height) !== String(meta.height)
  ) {
    problems.push(
      `${web.split("/").pop()} (${role}, line ${i + 1}) — declared ${width}x${height}, file is ${meta.width}x${meta.height}`,
    );
  }
}

if (problems.length > 0) {
  console.error(
    `${problems.length} of ${checked} declarations do not match their file:\n`,
  );
  problems.forEach((p) => console.error("  " + p));
  process.exit(1);
}

console.log(`${checked} hero and highlight declarations match their files.`);
