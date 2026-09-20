/**
 * Fold a secondary site's build into the primary one.
 *
 * A prerendered page has no host to read a brand from, so it bakes as whichever site its build
 * named. One build pass therefore cannot serve two brands: `ameliatravel.bg` was served Omaya HTML
 * on every prerendered route for exactly that reason. Each site gets its own pass, and this merges
 * the results into the single bundle the runtime branch deploys.
 *
 * Snapshots go to `dist/website/sites/<siteId>/`, deliberately outside `browser/`, because
 * everything under `browser/` is served as a static file on every host — an Amelia page left there
 * would answer on the Omaya domain too, publishing the Bulgarian pages as English duplicates.
 * `server.ts` serves them from there by host instead.
 *
 * The secondary build's hashed JavaScript and CSS do go into `browser/`. Its snapshots reference
 * those filenames, and the two sets coexist safely: the hashes differ, so neither can shadow the
 * other. The cost is real but bounded, and it buys nothing to avoid it — the two brands are
 * separate origins and never share a browser cache.
 */
import { existsSync } from 'node:fs';
import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(repoRoot, 'apps/website/dist');
const primaryDist = join(distRoot, 'website');

/** Sites built in their own pass, keyed by the output directory that pass writes to. */
const SECONDARY_SITES = [{ siteId: 'amelia', dist: join(distRoot, 'website-amelia') }];

async function walkFiles(root) {
  const entries = await readdir(root, { withFileTypes: true, recursive: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => relative(root, join(entry.parentPath, entry.name)));
}

async function copyInto(sourceFile, targetFile) {
  await mkdir(dirname(targetFile), { recursive: true });
  await copyFile(sourceFile, targetFile);
}

async function mergeSite({ siteId, dist }) {
  const sourceBrowser = join(dist, 'browser');

  if (!existsSync(sourceBrowser)) {
    throw new Error(
      `Missing ${siteId} build at ${sourceBrowser}. Run the ${siteId} build pass before merging.`,
    );
  }

  const targetBrowser = join(primaryDist, 'browser');
  const targetSnapshots = join(primaryDist, 'sites', siteId);
  const files = await walkFiles(sourceBrowser);

  let snapshotCount = 0;
  let assetCount = 0;

  for (const file of files) {
    const source = join(sourceBrowser, file);

    // Snapshots are this site's alone and must never be reachable on another site's host.
    if (file.endsWith('index.html')) {
      await copyInto(source, join(targetSnapshots, file));
      snapshotCount += 1;
      continue;
    }

    // Everything else is shared. Only the files this build produced differently — its own hashed
    // chunks — are missing from the primary bundle, and those are what its snapshots reference.
    const target = join(targetBrowser, file);

    if (!existsSync(target)) {
      await copyInto(source, target);
      assetCount += 1;
    }
  }

  if (snapshotCount === 0) {
    throw new Error(`The ${siteId} build produced no prerendered pages; refusing to publish it.`);
  }

  await rm(dist, { recursive: true, force: true });

  console.log(`Merged ${siteId}: ${snapshotCount} snapshots, ${assetCount} additional assets.`);
}

if (!existsSync(primaryDist)) {
  throw new Error(`Missing primary build at ${primaryDist}. Run the default build pass first.`);
}

for (const site of SECONDARY_SITES) {
  await mergeSite(site);
}
