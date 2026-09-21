// Run: npm run test:webkit -- [baseUrl ...]
//
// Opens every page reachable from each site's homepage in WebKit as an iPhone 14 and fails if a page
// stops painting part-way down or scrolls sideways. Both happened on real iPhones without any desktop
// browser showing them: WebKit 26 clipped body's overflow-x: clip vertically as well, so with html and
// body pinned to height: 100% everything below about the first screen was blank, on every page of
// both sites. Chrome on iOS uses the same engine, so this covers it too.
//
// Point it at running servers, one base URL per site. The defaults are the two local dev servers
// (Omaya on 4201, Amelia on 4200); a deployed site works the same way. WebKit comes from
// `npx playwright install webkit`.
import { webkit, devices } from "playwright";

const bases = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["http://localhost:4201", "http://localhost:4200"];
// Crawling is capped so a link loop or a very large site cannot run away; both sites are well under.
const MAX_PAGES_PER_SITE = 120;
// Hit-test points: the middle of the screen horizontally, below the fixed header.
const PROBE_X = 180;
const PROBE_Y = 300;

const browser = await webkit.launch();
const context = await browser.newContext({ ...devices["iPhone 14"] });
const page = await context.newPage();
const failures = [];
let checked = 0;

for (const base of bases) {
  const origin = new URL(base).origin;
  const queue = ["/"];
  const seen = new Set(queue);
  while (queue.length && seen.size <= MAX_PAGES_PER_SITE) {
    const path = queue.shift();
    const response = await page.goto(origin + path, {
      waitUntil: "networkidle",
    });
    if (!response || response.status() >= 400) {
      failures.push(
        `${origin}${path}: HTTP ${response?.status() ?? "no response"}`,
      );
      continue;
    }
    // The newsletter popup and cookie banner are fixed overlays; hidden so they cannot hide a blank
    // page behind them or be mistaken for content.
    await page.addStyleTag({
      content:
        "app-newsletter-popup,app-cookie-consent{display:none!important}",
    });
    const result = await page.evaluate(
      async ({ x, y }) => {
        const root = document.documentElement;
        const height = root.scrollHeight;
        let blankFrom = null;
        // Step down the page. Where content has stopped painting, a hit test finds no element in
        // front of <html>, so the first such point is where the page goes blank.
        for (let top = 0; top < height - window.innerHeight; top += 150) {
          window.scrollTo(0, top);
          await new Promise((resolve) =>
            requestAnimationFrame(() => resolve()),
          );
          if (document.elementFromPoint(x, y) === root) {
            blankFrom = top + y;
            break;
          }
        }
        window.scrollTo(0, 0);
        const links = [...document.querySelectorAll("a[href]")]
          .map((anchor) => new URL(anchor.href, location.href))
          .filter((url) => url.origin === location.origin)
          .map((url) => url.pathname);
        return {
          height,
          blankFrom,
          sideways: root.scrollWidth - root.clientWidth,
          links,
        };
      },
      { x: PROBE_X, y: PROBE_Y },
    );
    checked++;
    if (result.blankFrom !== null) {
      failures.push(
        `${origin}${path}: blank from ${result.blankFrom}px of ${result.height}px`,
      );
    }
    if (result.sideways > 0) {
      failures.push(`${origin}${path}: scrolls ${result.sideways}px sideways`);
    }
    for (const link of result.links) {
      // Pages only: skip files such as images and PDFs.
      if (!seen.has(link) && !/\.[a-z0-9]+$/i.test(link)) {
        seen.add(link);
        queue.push(link);
      }
    }
  }
}

const version = browser.version();
await browser.close();
console.log(`WebKit ${version}, iPhone 14: ${checked} pages checked.`);
if (failures.length) {
  console.error(`${failures.length} problem(s):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log("No blank or sideways-scrolling pages.");
