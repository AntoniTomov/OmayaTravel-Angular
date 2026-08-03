# Hosting, Deployment and Worldwide Delivery Playbook

**Project:** Omaya Travel Angular migration
**Domain:** `omayatravel.com`
**Owner:** DevOps / Cloudflare / Global Performance
**Related issues:** #3, #4, #7, #9, #20, #21
**Status:** DevOps proposal updated with owner-confirmed Hostinger Business Web Hosting details.

---

## 1. Purpose

This playbook defines how the WordPress-to-Angular migration should be hosted, deployed, cached, secured, monitored, launched and rolled back.

It exists to answer the Phase 0 DevOps work order:

- Confirm how Hostinger should host the Angular rebuild.
- Define the Cloudflare DNS, CDN, WAF, caching and media delivery model.
- Prepare staging, production, CI/CD, launch and rollback operations.

The accepted architecture remains:

- Angular public website with prerendering/static output for v1 unless a runtime need is proven.
- NestJS API only when forms or integrations justify backend runtime.
- Git-managed content for v1.
- Cloudflare as DNS, CDN, WAF and edge security layer.
- Media delivery decision remains open.

Provisional deployment direction:

- Build Angular in GitHub Actions.
- Deploy compiled output only to Hostinger over SSH/SFTP.
- Do not use Hostinger Git integration for the Angular site because it does not run the Angular build step.
- Do not make Angular SSR or NestJS on Hostinger a launch dependency until staging proves the runtime model.

---

## 2. Required Inputs From The Owner

These inputs are tracked before final hosting approval:

| Input | Why it matters | Status |
| --- | --- | --- |
| Exact Hostinger plan name | Determines whether static, Node runtime or VPS deployment is realistic. | Confirmed: Business Web Hosting |
| Hostinger deployment model | Determines how artifacts reach production. | Confirmed: GitHub Actions build, SSH/SFTP deploy |
| Node.js versions supported by Hostinger | Required only if SSR/API runtime is later hosted there. | Partially confirmed: Node.js supported; version still to verify |
| Process manager support | SSR/API need persistent Node processes unless fully static. | Not launch-blocking if v1 stays static/prerendered |
| Build command and start command controls | Needed for reproducibility. | Build runs in GitHub Actions; Hostinger receives compiled output |
| Environment variable support | Required for API URLs, Turnstile, email provider and monitoring keys. | Needed only if runtime API/SSR is hosted on Hostinger |
| Current Cloudflare plan | Determines available WAF, cache rules, image transformation, rate limiting and logs. | Needed |
| Domain DNS authority | Confirms whether Cloudflare nameservers already control `omayatravel.com`. | Needed |
| Expected traffic | Needed for origin sizing, R2/image transformation cost and rate limits. | Needed |
| Global audience priorities | Needed for performance testing locations and monitoring probes. | Needed |
| Staging domain preference | Default is `staging.omayatravel.com`. | Confirmed: staging subdomains available |
| Production launch window | Needed for content freeze, DNS cutover and rollback support. | Needed |
| Transactional email provider | Needed for API environment variables and SPF/DKIM/DMARC planning. | Needed |

## 3. Hosting Feasibility Decision

### Recommended Decision Rule

Use Hostinger Business Web Hosting for v1 if the website can ship as static/prerendered Angular output and dynamic functionality is limited to separately approved endpoints.

Do not depend on Hostinger as the SSR/API runtime until staging proves:

- Persistent Node.js runtime for Angular SSR.
- Persistent Node.js runtime for NestJS API, or a clean second app/service.
- Environment variables per environment.
- Runtime logs and restart behavior.
- Health checks or a reliable process restart mechanism.
- TLS compatibility behind Cloudflare Full Strict mode.

If runtime requirements are missing, keep the website static/prerendered and place backend/API functionality on a separately approved runtime instead of weakening SEO-critical pages into client-only rendering.

### Hostinger Options

| Option | Use when | Recommendation |
| --- | --- | --- |
| Hostinger Business Web Hosting static deployment | Angular can be built in GitHub Actions and deployed as compiled files to Apache/public web root. | Recommended v1 baseline. |
| Hostinger Node.js runtime | SSR or API is required and staging proves persistent Node reliability, logs, env vars and restart behavior. | Possible later; not a launch dependency. |
| Hostinger VPS | Owner wants full control, Docker, Nginx/OpenLiteSpeed, process manager, logs and snapshots. | Strong technical option, higher ops responsibility. |
| Hostinger Git integration | It only pulls source and does not run the Angular build. | Reject for Angular deployment. |

### Fallback Hosting

If Hostinger is unsuitable:

- Website: Cloudflare Pages for fully prerendered output, or another Node SSR platform if SSR routes remain required.
- API: Cloudflare Workers, Render, Fly.io, Railway, Hetzner VPS, or another Node-capable host.
- Media: Cloudflare R2 behind `media.omayatravel.com`.

The fallback must preserve:

- SSR/prerendered HTML for SEO.
- GitHub commit-based deployments.
- Separate staging and production.
- Cloudflare edge caching and security in front of public traffic.

---

## 4. Target Domain Model

| Hostname | Purpose | Cloudflare proxy | Origin |
| --- | --- | --- | --- |
| `omayatravel.com` | Production website | Proxied | Hostinger static/prerendered Angular output |
| `www.omayatravel.com` | Redirect to apex, or canonical if chosen by SEO | Proxied | Cloudflare redirect rule or origin |
| `staging.omayatravel.com` | Staging website | Proxied | Hostinger staging subdomain |
| `api.omayatravel.com` | Production API, if approved | Proxied | Approved backend origin |
| `api-staging.omayatravel.com` | Staging API, if approved | Proxied | Approved backend origin |
| `media.omayatravel.com` | Public media delivery, if approved | Proxied | Approved media origin |

DNS records should remain orange-cloud proxied except any verification records required by Hostinger, email providers, Search Console or other services.

## 5. GitHub Repository And Branch Model

Expected structure once implementation begins:

```text
apps/
  website/
  api/
content/
packages/
  content-models/
  ui/
infrastructure/
  cloudflare/
  deployment/
scripts/
.github/
  workflows/
```

Branch model:

| Branch | Role | Deployment |
| --- | --- | --- |
| `develop` | Active integration | Staging |
| `master` | Stable release | Production |
| `codex/*`, `feature/*`, `devops/*` | Work branches | Preview or PR checks only |

Rules:

- Every deployment must be tied to a Git commit SHA.
- Pull requests target `develop` during rebuild.
- `develop` merges to `master` only after Gate 5 launch approval.
- Production deployments require protected branch checks.

---

## 6. Angular SSR Requirements

The website must support:

- Angular hybrid rendering.
- Prerendered stable pages wherever possible.
- SSR only for pages that need request-time data.
- No `RenderMode.Server` route may become launch-critical until a runtime host is approved.
- Server route headers for cache and SEO status behavior.
- A lightweight public route for uptime probes.

Preferred rendering split:

| Route type | Rendering | Reason |
| --- | --- | --- |
| Homepage | Prerendered | High traffic, stable content, cacheable globally. |
| Destination pages | Prerendered | SEO-critical and content-managed through Git. |
| Tour detail pages | Prerendered | SEO-critical, stable unless operational availability becomes dynamic. |
| Blog articles | Prerendered | Stable and globally cacheable. |
| Static company/legal pages | Prerendered | Stable and cacheable. |
| Search/filter UI | Client-side enhancement over indexable listing pages | Avoids SSR pressure. |
| Enquiry/contact pages | Prerendered shell plus API POST | HTML cacheable, submissions dynamic. |
| API endpoints | Runtime | Must never be CDN-cached. |

For v1, prefer all public SEO pages as prerendered/static files deployed to Hostinger.

Angular client-side routing may need an Apache fallback so direct visits and refreshes on approved Angular routes do not return `404`.

The fallback must be ordered after the approved #5 redirect map and after explicit missing-page handling. It must not turn unknown URLs, old WordPress utility URLs or mistyped paths into soft-200 responses that serve `index.html`.

Required order:

1. Canonical host and HTTPS normalization.
2. Approved #5 single-hop redirects for old WordPress URLs.
3. Explicit 404 handling for unknown, excluded or intentionally removed URLs.
4. SPA fallback only for approved Angular client routes that are not emitted as physical prerendered files.

Example fallback shape, to be finalized after #5:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

The `.htaccess` file should be generated into or copied with the deployed Angular browser output only after the final route/redirect strategy is approved.

Deployment verification must prove:

- approved Angular routes return the intended HTML
- approved old URLs return the intended single-hop `301`
- unknown URLs do not return `200 index.html`
- excluded WordPress admin, preview, account, cart, checkout and plugin utility URLs do not become indexable soft-200 pages
- the not-found page returns a real `404` status where Hostinger/Apache allows it

---

## 7. Deployment Pipeline

### Pull Request CI

Run on every PR:

1. Install with frozen lockfile.
2. Lint.
3. Type check.
4. Unit tests.
5. Content validation.
6. Build website.
7. Build API.
8. Generate routes, sitemap and robots.
9. Verify redirects and internal links.
10. Optional Lighthouse smoke check after staging exists.

### Staging Deployment

Trigger:

- Merge to `develop`, or manual workflow dispatch.

Actions:

- Build from the exact commit.
- Deploy compiled website output to Hostinger staging web root over SSH/SFTP.
- Deploy API to `api-staging.omayatravel.com` only if an API runtime is approved.
- Use staging environment variables.
- Set `X-Robots-Tag: noindex, nofollow` and/or staging robots disallow.
- Run smoke checks.
- Purge only staging cache by hostname or prefix.

### Production Deployment

Trigger:

- Merge `develop` to `master` after Gate 5 approval, or manual release workflow from an approved commit.

Actions:

- Build from the exact commit.
- Deploy compiled website output to Hostinger production web root over SSH/SFTP.
- Deploy API to production origin only if an API runtime is approved.
- Run smoke checks against origin if possible.
- Purge changed production URLs and related cache tags.
- Verify public Cloudflare response headers.
- Notify owner with commit SHA and smoke result.

### Hostinger Static Deployment Baseline

Workflow shape:

```text
GitHub push to develop/master
GitHub Actions installs dependencies
GitHub Actions builds Angular
GitHub Actions verifies generated routes/sitemap/redirects
GitHub Actions deploys compiled browser output to Hostinger over SSH/SFTP
Cloudflare serves the result globally
```

Deployment rules:

- Deploy compiled output only, never repository source.
- Confirm Angular `outputPath` from `angular.json` before writing the workflow.
- Angular 17+ projects commonly emit browser output under `dist/<app-name>/browser/`; do not hard-code this until the app exists.
- Keep Hostinger Git integration out of the deployment path.
- Use separate Hostinger paths/accounts or subdomains for staging and production.
- Keep a previous deployment artifact for rollback.

### Required GitHub Secrets

Names are provisional and should be adjusted to the chosen host:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_ZONE_ID
CLOUDFLARE_R2_ACCESS_KEY_ID
CLOUDFLARE_R2_SECRET_ACCESS_KEY
HOSTINGER_SFTP_HOST
HOSTINGER_SFTP_USERNAME
HOSTINGER_SFTP_PASSWORD_OR_KEY
HOSTINGER_SFTP_PORT
HOSTINGER_STAGING_REMOTE_DIR
HOSTINGER_PRODUCTION_REMOTE_DIR
STAGING_API_BASE_URL
PRODUCTION_API_BASE_URL
TURNSTILE_SITE_KEY_STAGING
TURNSTILE_SECRET_KEY_STAGING
TURNSTILE_SITE_KEY_PRODUCTION
TURNSTILE_SECRET_KEY_PRODUCTION
EMAIL_PROVIDER_API_KEY_STAGING
EMAIL_PROVIDER_API_KEY_PRODUCTION
SENTRY_DSN_WEBSITE
SENTRY_DSN_API
```

Secrets rules:

- Separate staging and production secrets.
- No secrets in Angular browser bundles.
- Prefer scoped API tokens over global keys.
- Rotate tokens after any accidental exposure.
- Keep Cloudflare cache purge token limited to the target zone and purge permission.

---

## 8. Cloudflare DNS, SSL And Edge Configuration

### DNS

- Cloudflare should be authoritative nameserver provider for `omayatravel.com`.
- Use proxied records for website, API and media hostnames.
- Keep email DNS records DNS-only and untouched except when adding SPF/DKIM/DMARC.
- Use Cloudflare redirects for canonical host normalization where practical.

### SSL/TLS

- SSL mode: Full Strict.
- Origin certificate: Cloudflare Origin CA or public certificate on the origin.
- Always Use HTTPS: enabled.
- Automatic HTTPS Rewrites: enabled only after mixed-content validation.
- HSTS: enable after successful staging and production validation. Start with conservative `max-age`, then increase.
- Minimum TLS version: TLS 1.2 or higher.

### Security Headers

Website origin should send, or Cloudflare Transform Rules should add:

```text
Strict-Transport-Security: max-age=15552000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'
```

CSP must be finalized after analytics, Turnstile, maps, video and email/form integrations are known.

### Compression

- Enable Cloudflare compression.
- Use Brotli where plan/browser support allows it.
- Ensure origin sends gzip or Brotli for text assets where possible.
- Do not use Cloudflare features that rewrite HTML/JS unless tested with Angular hydration and CSP.

---

## 9. CDN And HTTP Caching Policy

### Cache Matrix

| Content | Example | Browser cache | Cloudflare edge cache | Invalidation |
| --- | --- | --- | --- | --- |
| Hashed JS/CSS | `/assets/main.ABC123.js` | 1 year, immutable | 1 year | New filename on build |
| Fonts | `/fonts/inter.woff2` | 1 year, immutable | 1 year | New filename/version |
| Versioned images | `/cdn-cgi/image/.../tours/x.jpg?v=hash` | 1 year | 1 year | New key or version param |
| Prerendered HTML | `/tours/kyrgyzstan/` | 5-10 minutes | 1-24 hours with revalidation | Cache tags or URL purge |
| SSR HTML | Runtime route | 0-5 minutes | 1-10 minutes if safe | URL purge |
| Sitemap | `/sitemap.xml` | 5 minutes | 15-60 minutes | URL purge on deploy |
| Robots | `/robots.txt` | 5 minutes | 15-60 minutes | URL purge on deploy |
| Redirects | Old WordPress URLs | 1 hour browser | 1 day edge | URL/prefix purge |
| API GET health | `/health` | No browser cache | Bypass or very short | Not needed |
| API POST forms | `/contact`, `/enquiry` | No-store | Bypass | Not cached |
| Staging HTML | Any staging page | No-store or short | Bypass/short | Hostname purge |

### Response Headers

Hashed assets:

```text
Cache-Control: public, max-age=31536000, immutable
```

Prerendered HTML:

```text
Cache-Control: public, max-age=300, s-maxage=3600, stale-while-revalidate=86400, stale-if-error=86400
CDN-Cache-Control: public, max-age=3600, stale-while-revalidate=86400, stale-if-error=86400
```

API form responses:

```text
Cache-Control: no-store
```

Staging:

```text
Cache-Control: no-store
X-Robots-Tag: noindex, nofollow
```

### Which Responses Are Cached

Cached:

- Prerendered HTML pages.
- Static JS, CSS, fonts and build assets.
- Images and transformed image variants.
- Sitemap and robots with short TTL.
- Redirect responses, after redirect map validation.

Not cached:

- POST, PUT, PATCH and DELETE responses.
- Contact and enquiry API endpoints.
- Turnstile verification responses.
- Preview/staging pages when active QA requires fresh output.
- Any response personalized by cookies, auth or geolocation.

### Content Update Invalidation

On every production deploy:

1. Changed routes are detected from Git/content diff when possible.
2. Purge exact changed HTML URLs.
3. Purge `/sitemap.xml`, `/robots.txt` and affected listing/category pages.
4. Purge old URL redirects if redirect map changed.
5. Purge image URLs only when image keys or variants changed.
6. Avoid global purge except during emergency.

Cache tags should be used when the origin supports them:

```text
Cache-Tag: page:tours/kyrgyzstan,content:tour:kyrgyzstan,listing:tours
```

Example purge groups:

| Change | Purge |
| --- | --- |
| Tour content changed | Tour URL, destination listing, tours listing, sitemap, related pages. |
| Destination content changed | Destination URL, destinations listing, related tour pages, sitemap. |
| Blog article changed | Article URL, blog listing, category page, sitemap. |
| Navigation/footer changed | All HTML pages, not static assets. |
| Image original replaced | Specific transformed image URLs or image cache tag. |

---

## 10. Worldwide Delivery Model

### Where SSR Executes

SSR executes at an approved Node-capable origin only if the project later accepts runtime-rendered routes.

Because v1 should keep public pages prerendered/static, Cloudflare should serve the majority of global traffic from edge cache and Hostinger should mainly serve cache misses and static assets.

### How Static Pages Are Distributed Globally

- Angular prerenders pages during build.
- Static HTML and assets deploy to the origin.
- First visitor to a Cloudflare data center may see a cache miss.
- Subsequent visitors near that data center receive cached content.
- Tiered Cache/Cache Reserve may be enabled if traffic or origin protection justifies it.

### How Images Are Resized And Delivered

Recommended v1:

- Originals live in R2.
- Public delivery uses `media.omayatravel.com`.
- Angular image helper generates fixed allowed widths.
- Cloudflare Image Transformations serve AVIF/WebP automatically where supported.
- Below-fold images are lazy loaded.
- Hero images use responsive sizes and fetch priority.

Allowed widths should be constrained to control transformation count:

```text
320, 480, 720, 960, 1200, 1600, 1920
```

Avoid arbitrary width URLs from client code.

### Protecting Visitors Far From Origin

- Cache HTML for prerendered pages at Cloudflare.
- Cache all static assets and image variants for long TTLs.
- Use small initial JS bundles.
- Keep API calls out of initial page render when possible.
- Use Turnstile and rate limiting at the edge before API traffic reaches origin.
- Use `stale-if-error` for cacheable HTML and assets so cached pages can survive short origin failures.

### If The Origin Goes Down

Expected behavior:

- Cached static assets continue to serve from Cloudflare until TTL/stale limits expire.
- Cached prerendered HTML can continue if `stale-if-error` is honored.
- There should be no launch-critical uncached SSR pages in v1.
- Form submissions fail gracefully with a generic retry message.
- Uptime monitor alerts the owner.
- Rollback or origin recovery begins using the rollback checklist.

Required hardening:

- Keep public pages prerendered wherever possible.
- Configure cache headers with `stale-if-error`.
- Maintain a previous known-good deployment.
- Keep WordPress backup until post-launch stability is proven.

---

## 11. Cloudflare R2 Decision

### Recommendation

Proposed direction: use R2 for original media storage and Cloudflare Image Transformations for derived sizes, unless final cost modeling shows Cloudflare Images or Hostinger-hosted optimized static images are simpler and acceptable.

Why:

- R2 keeps originals outside the Git repository.
- R2 has no egress fee to the Internet.
- Image Transformations can optimize R2-origin images without storing every variant manually.
- The migration can preserve originals and generate stable media keys.

### Decision Criteria

| Question | Prefer R2 + Transformations | Prefer Cloudflare Images |
| --- | --- | --- |
| Need low-cost original storage | Yes | Maybe |
| Need built-in image management UI/API | Maybe | Yes |
| Need strict custom key conventions from migration | Yes | Maybe |
| Need simple variants and hosted image product | Maybe | Yes |
| Large image library with predictable transformations | Yes | Maybe |
| Non-developer media workflow soon | Maybe | Yes |

### R2 Setup

- Bucket: `omaya-travel-media-production`
- Staging bucket: `omaya-travel-media-staging`
- Public domain: `media.omayatravel.com`
- Key convention:

```text
destinations/{destination-slug}/{descriptive-name}.{ext}
tours/{tour-slug}/{descriptive-name}.{ext}
blog/{article-slug}/{descriptive-name}.{ext}
company/{page-slug}/{descriptive-name}.{ext}
```

Rules:

- Upload originals only after duplicate detection.
- Preserve source mapping from WordPress URL to R2 key.
- Store width, height, alt text and hash in content/media metadata.
- Do not overwrite production image keys; publish a new key or version when content changes.

---

## 12. API Protection

Cloudflare edge:

- WAF managed rules enabled.
- Rate limiting for `/contact`, `/enquiry`, `/newsletter` and any future auth route.
- Bot fight / bot management according to plan.
- Challenge suspicious form traffic before it reaches origin.

Application:

- Turnstile verification required for public form submissions.
- Server-side validation for every field.
- Request size limits.
- CORS restricted to approved domains.
- No sensitive data in logs.
- Generic production errors.

Initial rate limit targets to validate in staging:

| Endpoint | Suggested limit | Action |
| --- | --- | --- |
| `POST /contact` | 5 requests / 10 minutes / IP | Managed challenge or block |
| `POST /enquiry` | 5 requests / 10 minutes / IP | Managed challenge or block |
| `POST /newsletter` | 10 requests / 10 minutes / IP | Managed challenge or block |
| `GET /health` | 60 requests / minute / IP | Allow or log |

Tune these after real traffic is observed.

---

## 13. Monitoring, Logging And Backups

### Monitoring

Required:

- Cloudflare analytics for traffic, cache hit ratio, WAF events and top paths.
- Uptime checks for production website and API health.
- Staging uptime checks during active test periods.
- Sentry or equivalent for website and API errors.
- GitHub Actions status notifications.
- Search Console for indexing, sitemap and crawl errors.

Suggested uptime probes:

| Probe | URL | Frequency | Region strategy |
| --- | --- | --- | --- |
| Production homepage | `https://omayatravel.com/` | 1 minute | Europe, North America, Asia |
| Production tour page | Priority tour URL | 5 minutes | Europe, North America |
| Production API | `https://api.omayatravel.com/health` | 1 minute | Europe |
| Staging homepage | `https://staging.omayatravel.com/` | 5 minutes | Europe |

### Logging

Capture:

- Build logs in GitHub Actions.
- Deployment logs from Hostinger or fallback host.
- API structured logs with request ID, route, status, duration and error class.
- Cloudflare WAF/rate-limit events.
- Cloudflare cache status during smoke tests.

Do not log:

- Turnstile secret.
- Email provider API keys.
- Full message bodies from contact/enquiry forms unless explicitly needed and privacy-reviewed.
- Payment or passport data. These are not v1 scope.

### Backups

Required:

- GitHub repository as source backup for code and content.
- Hostinger/VPS snapshots or deployment artifacts for rollback.
- R2 bucket versioning or periodic object inventory/export.
- WordPress full backup retained through post-launch stabilization.
- DNS zone export before launch.
- Cloudflare rules export or infrastructure-as-code once stable.

Backup restore must be tested before Gate 5 closes.

---

## 14. Rollback Strategy

Rollback levels:

| Level | Use when | Action |
| --- | --- | --- |
| Application rollback | New deployment has bugs, origin healthy | Redeploy previous known-good commit/artifact. |
| Cache rollback | Bad content cached | Purge affected URLs/tags after redeploy. |
| DNS/origin rollback | New origin unreachable | Point Cloudflare DNS/origin route to previous origin if preserved. |
| WordPress emergency fallback | Launch-critical failure after cutover | Restore DNS/origin to WordPress and keep redirects stable where possible. |

Rules:

- Keep the previous production artifact available.
- Keep old WordPress hosting intact until the new site is stable.
- Do not purge everything unless exact URL/tag purge is insufficient.
- Record the commit SHA, deployment ID and Cloudflare purge ID for every rollback.

---

## 15. Launch Checklist

### Before Launch

- [x] Hostinger plan confirmed: Business Web Hosting.
- [x] SSH access confirmed.
- [x] Staging subdomains confirmed.
- [ ] Hostinger SFTP paths and credentials configured as GitHub secrets.
- [ ] Fallback runtime chosen if SSR or API becomes launch-critical.
- [ ] Cloudflare nameservers active for `omayatravel.com`.
- [ ] DNS records prepared for production, staging, API and media.
- [ ] SSL mode set to Full Strict and origin certificate valid.
- [ ] Staging deployed from `develop`.
- [ ] Production deployment workflow tested from a release commit.
- [ ] Environment variables configured separately for staging and production.
- [ ] Turnstile keys configured and verified.
- [ ] Transactional email DNS and API key configured.
- [ ] R2 bucket and media domain configured, or final media alternative approved.
- [ ] Cache rules configured for assets, HTML, API bypass and staging.
- [ ] WAF and rate limiting rules configured.
- [ ] Security headers verified.
- [ ] Brotli/compression verified.
- [ ] Sitemap and robots verified.
- [ ] Redirect map verified with no chains.
- [ ] Core Web Vitals smoke checks pass on priority pages.
- [ ] Accessibility smoke checks pass on priority pages.
- [ ] Forms tested end to end.
- [ ] Monitoring and uptime checks active.
- [ ] Backups created: WordPress, DNS, deployment artifact, media.
- [ ] Rollback rehearsal completed.
- [ ] Content freeze agreed.

### Launch Window

- [ ] Freeze WordPress edits.
- [ ] Take final WordPress backup and export.
- [ ] Run final migration inventory.
- [ ] Deploy production from approved commit.
- [ ] Switch Cloudflare DNS/origin routing if required.
- [ ] Purge production cache for affected URLs.
- [ ] Verify homepage, priority tours, priority destinations, contact, sitemap and robots.
- [ ] Verify old WordPress priority URLs return `200` or single-hop `301`.
- [ ] Submit sitemap in Search Console.
- [ ] Watch Cloudflare, uptime, logs, forms and Search Console.
- [ ] Record launch commit SHA and deployment ID.

### First 48 Hours

- [ ] Monitor 5xx errors.
- [ ] Monitor Cloudflare cache hit ratio.
- [ ] Monitor WAF/rate-limit false positives.
- [ ] Monitor form submissions and email deliverability.
- [ ] Monitor Search Console coverage and sitemap processing.
- [ ] Check top old URLs manually.
- [ ] Keep WordPress fallback available.

---

## 16. Rollback Checklist

- [ ] Declare rollback owner and reason.
- [ ] Identify failed deployment commit and last known-good commit.
- [ ] Decide rollback level: app, cache, DNS/origin, or WordPress fallback.
- [ ] Disable current production deployment if needed.
- [ ] Redeploy previous known-good artifact or repoint origin.
- [ ] Purge affected Cloudflare URLs/tags.
- [ ] Verify homepage, priority pages, API health and forms.
- [ ] Verify old URL redirects still behave.
- [ ] Notify stakeholders with impact and current state.
- [ ] Preserve failed deployment logs.
- [ ] Open follow-up issue with root cause and prevention.

---

## 17. Failure Logs To Collect

When deployment or production behavior fails, collect:

- Git commit SHA.
- GitHub Actions run URL and failed step logs.
- Hostinger/fallback host build logs.
- Runtime logs for website SSR process.
- Runtime logs for API process.
- Cloudflare Ray ID from failed requests.
- HTTP response headers from failed URL.
- Cloudflare cache status.
- Cloudflare WAF/rate-limit event if blocked.
- Browser console error for frontend failures.
- Screenshot or HAR file for user-visible failures.

Minimum useful command evidence:

```text
curl -I https://omayatravel.com/
curl -I https://omayatravel.com/sitemap.xml
curl -I https://api.omayatravel.com/health
```

---

## 18. Open Decisions

| Decision | Owner | Blocks |
| --- | --- | --- |
| Exact Hostinger SFTP paths and secret names | DevOps | #3, #20 |
| Runtime host for SSR/API, if required | Lead Architect / DevOps / Backend | #9, #16, #20 |
| R2 + Image Transformations vs Cloudflare Images | Lead Architect / Media | #4, #11, #17 |
| Exact staging and production hostnames | Lead Architect / DevOps | #20 |
| CDN HTML TTL for launch | DevOps / SEO | #20, #21 |
| Turnstile mode and rate-limit thresholds | Backend / DevOps | #16, #21 |
| Monitoring provider | Owner / DevOps | #21 |
| Backup retention period | Owner / DevOps | #21 |

---

## 19. Source Notes

Vendor capabilities and prices change. Reconfirm before final approval.

- Hostinger current public materials describe managed Node.js/Web Apps hosting, VPS Node.js hosting, and static front-end hosting as separate deployment options: <https://www.hostinger.com/support/node-js-hosting-options-at-hostinger/>.
- Hostinger help materials also distinguish classic shared/WordPress-style hosting from environments with root access or managed Node.js support: <https://support.hostinger.com/en/articles/1583661-is-node-js-supported-at-hostinger>.
- Angular official docs define hybrid rendering as SSR, prerendering and CSR, and note that fully static output can be deployed through a CDN/static server: <https://angular.dev/guide/prerendering>.
- Cloudflare docs state static assets are cacheable by default, while HTML/dynamic content needs Cache Rules when edge caching is desired: <https://developers.cloudflare.com/cache/get-started/>.
- Cloudflare supports cache purge by URL and, on supported plans/configurations, by cache tags, hostnames or prefixes: <https://developers.cloudflare.com/api/resources/cache/methods/purge/> and <https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/>.
- Cloudflare R2 pricing includes storage and operation charges with no Internet egress fee; image transformation pricing depends on unique transformed variants: <https://developers.cloudflare.com/r2/pricing/> and <https://developers.cloudflare.com/images/pricing/>.
- Cloudflare compression support includes Gzip, Brotli and Zstandard depending on plan, browser support and compression rules: <https://developers.cloudflare.com/speed/optimization/content/compression/>.
