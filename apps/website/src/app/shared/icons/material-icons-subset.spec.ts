import measurements from '../../../../../../docs/SEO_FONT_DELIVERY_MEASUREMENTS.json';

// The icon font is subsetted to the ligatures the source actually uses, so an icon added without
// rerunning scripts/generate-material-icons-subset.mjs has no glyph — and a Material Icons
// ligature with no glyph renders as its own name, printing "calendar_month" at the reader rather
// than simply going missing. This fails the build instead.
//
// The sources are read through Vite's build-time glob rather than node:fs, because the app's
// tsconfig has no node types and this spec is not worth adding them for.
const sources = (
  import.meta as unknown as {
    glob(
      pattern: string,
      options: { query: string; import: string; eager: true },
    ): Record<string, string>;
  }
).glob('../../../**/*.{html,ts}', { query: '?raw', import: 'default', eager: true });

const patterns = [
  /<mat-icon[^>]*>\s*([a-z0-9_]+)\s*<\/mat-icon>/g,
  /class="material-icons"[^>]*>\s*([a-z0-9_]+)\s*</g,
  /\bicon:\s*"([a-z0-9_]+)"/g,
  /\bicon:\s*'([a-z0-9_]+)'/g,
];

function usedLigatures(): string[] {
  const found = new Set<string>();

  for (const [path, contents] of Object.entries(sources)) {
    if (path.endsWith('.spec.ts')) {
      continue;
    }
    for (const pattern of patterns) {
      for (const match of contents.matchAll(pattern)) {
        found.add(match[1]);
      }
    }
  }

  return [...found].sort();
}

describe('Material Icons subset', () => {
  const subsetted = measurements.ligatures as string[];

  it('reads the templates it is meant to scan', () => {
    expect(usedLigatures().length).toBeGreaterThan(0);
  });

  it('covers every icon the source renders', () => {
    expect(usedLigatures().filter((name) => !subsetted.includes(name))).toEqual([]);
  });

  it('carries no icon the source no longer renders', () => {
    const used = usedLigatures();

    expect(subsetted.filter((name) => !used.includes(name))).toEqual([]);
  });
});
