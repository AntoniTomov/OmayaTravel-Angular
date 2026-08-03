# Risk Register

| ID | Risk | Probability | Impact | Owner | Mitigation | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R-001 | WordPress URL inventory misses indexed pages | Medium | High | SEO specialist | Crawl sitemap, crawl site, export WordPress URLs, compare with Search Console. | Open |
| R-002 | Redirect map creates ranking loss or redirect chains | Medium | High | Lead Architect | Version-controlled redirects, pre-launch verification, single-hop 301s. | Open |
| R-003 | Hostinger cannot run required Angular SSR and NestJS deployment cleanly | Medium | High | DevOps | Confirm plan capabilities in Phase 0; prepare fallback hosting option. | Open |
| R-004 | Image library is too large or poorly organized for migration | High | Medium | Media specialist | Deduplicate, preserve originals, generate metadata, move delivery to Cloudflare media domain. | Open |
| R-005 | Backend scope expands into booking/admin features before launch | Medium | High | Lead Architect | Enforce v1 scope and ADR approval gate. | Open |
| R-006 | Structured content becomes inconsistent without validation | Medium | High | Angular/content team | Build validation scripts early and fail CI on critical content errors. | Open |
| R-007 | SEO metadata quality is weaker than current WordPress pages | Medium | High | SEO specialist | Capture old metadata and compare during migration. | Open |
| R-008 | Form spam or abuse creates deliverability problems | Medium | Medium | Backend team | Turnstile, rate limiting, request size limits, provider monitoring. | Open |
| R-009 | Global performance suffers due to heavy media and JavaScript | Medium | High | Frontend team | Prerender, edge cache, responsive images, bundle budgets, Core Web Vitals testing. | Open |
| R-010 | Legal/privacy requirements are missed for global visitors | Medium | Medium | Product/legal owner | Privacy policy, cookie consent where needed, analytics only after consent. | Open |

