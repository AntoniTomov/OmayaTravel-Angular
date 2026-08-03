# Omaya Travel Website Rebuild Plan

**Project:** Omaya Travel custom website rebuild  
**Domain:** `omayatravel.com`  
**Primary objective:** Replace the current WordPress website with a fast, secure, SEO-friendly, globally accessible custom application built with professional development tools.

---

## 1. Project principles

The new website should be:

- Fast for visitors from Europe, North America, Asia, Africa, and other regions.
- Search-engine friendly and easy for AI search systems to understand.
- Mobile-first and responsive.
- Easy to maintain by a developer using Git, Codex, and structured content files.
- Secure without the maintenance burden of WordPress and third-party plugins.
- Designed for image-heavy travel content.
- Extendable if Omaya later needs online booking, payments, multilingual content, or a CMS.

The first version should avoid unnecessary complexity. Because the website owner is a programmer and can make changes through code, a custom admin panel is not required initially.

---

## 2. Recommended architecture

### Applications

1. **Public website**
   - Angular
   - Server-side rendering and prerendering
   - Responsive, SEO-oriented pages

2. **Backend API**
   - NestJS
   - Used for contact forms, tour enquiries, newsletter subscriptions, email delivery, and future dynamic features

3. **Content source**
   - Structured files stored in Git for the first version
   - Markdown or MDX for long-form content
   - TypeScript or JSON for structured tour and destination information

4. **Media storage**
   - Cloudflare R2 for original images
   - Cloudflare CDN and image transformations for delivery

5. **Database**
   - Not required for the first content-driven version
   - PostgreSQL can be added when dynamic business data is introduced

### High-level diagram

```text
Visitors worldwide
        |
        v
Cloudflare DNS, CDN, WAF, caching and image optimization
        |
        +-------------------------+
        |                         |
        v                         v
omayatravel.com             media.omayatravel.com
Angular SSR/prerendered     Cloudflare R2 images
website
        |
        v
api.omayatravel.com
NestJS API
        |
        +--> Transactional email provider
        +--> Optional database later
```

---

## 3. Why Angular is suitable

Angular is appropriate because:

- The developer already has strong Angular experience.
- It supports server-side rendering and prerendering.
- It provides a structured architecture for a growing project.
- It has strong routing, forms, image optimization, dependency injection, and testing tools.
- The same ecosystem can support a future admin application if one becomes necessary.

The public website must not be deployed only as a client-side single-page application. Public pages should be rendered as HTML on the server or generated during the build so search engines and social platforms can read them immediately.

### Rendering strategy

Use hybrid rendering:

- **Prerendered:** Homepage, About, FAQ, Contact, destination pages, category pages, most tour pages, and blog articles.
- **SSR:** Pages that depend on frequently changing data.
- **Client-side rendering:** Interactive filters, galleries, forms, and other browser interactions after the page loads.

For the initial code-managed website, most public content can be prerendered. This gives excellent global performance and lowers hosting requirements.

---

## 4. No-admin-panel content strategy

An admin panel should not be developed initially.

Content changes will use this workflow:

1. Open the project locally or in Codex.
2. Add or edit a structured content file.
3. Add or upload the relevant images.
4. Preview locally.
5. Commit the change to Git.
6. Push to GitHub.
7. Automated checks and deployment run.
8. Cloudflare serves the updated pages globally.

### Benefits

- Less code to develop and maintain.
- No admin authentication system.
- No CMS security surface.
- Full version history through Git.
- Every content change is reviewable and reversible.
- Codex can create or update content quickly.
- No database is needed for most website content.

### Trade-offs

- Non-technical team members cannot independently update content.
- Every update requires a deployment.
- A large number of daily content changes may eventually justify a CMS.

### Decision rule for adding an admin panel later

Add a CMS or admin panel only if one or more of these become true:

- Non-developers need to publish content regularly.
- Tours, prices, and dates change several times per day.
- Multiple editors need drafts, approvals, and scheduled publishing.
- Bookings and customer data must be managed.
- Content exists in many languages and becomes difficult to maintain in files.

---

## 5. Content organization

Recommended project structure:

```text
omaya-travel/
├── apps/
│   ├── website/                  # Angular public website
│   └── api/                      # NestJS backend
│
├── content/
│   ├── destinations/
│   │   ├── bulgaria/
│   │   │   ├── index.md
│   │   │   └── metadata.ts
│   │   └── kyrgyzstan/
│   │       ├── index.md
│   │       └── metadata.ts
│   │
│   ├── tours/
│   │   ├── kyrgyzstan-discovery/
│   │   │   ├── overview.md
│   │   │   ├── itinerary.md
│   │   │   └── tour.ts
│   │   └── another-tour/
│   │
│   ├── blog/
│   │   └── article-slug.md
│   │
│   ├── pages/
│   │   ├── about.md
│   │   ├── faq.md
│   │   └── privacy-policy.md
│   │
│   └── settings/
│       ├── navigation.ts
│       ├── footer.ts
│       ├── company.ts
│       └── seo.ts
│
├── packages/
│   ├── content-models/           # Shared TypeScript interfaces
│   ├── ui/                       # Shared UI components
│   └── configuration/
│
├── infrastructure/
│   ├── cloudflare/
│   ├── docker/
│   └── deployment/
│
├── scripts/
│   ├── validate-content.ts
│   ├── generate-routes.ts
│   ├── generate-sitemap.ts
│   ├── migrate-wordpress.ts
│   └── verify-redirects.ts
│
├── pnpm-workspace.yaml
├── package.json
└── pnpm-lock.yaml
```

### Tour model example

```typescript
export interface Tour {
  slug: string;
  title: string;
  shortDescription: string;
  destinationSlug: string;
  categorySlugs: string[];

  durationDays: number;
  durationNights?: number;
  basePrice?: number;
  currency?: 'EUR' | 'BGN' | 'USD';

  minimumAge?: number;
  groupSizeMin?: number;
  groupSizeMax?: number;
  difficulty?: 'easy' | 'moderate' | 'challenging';

  heroImage: ImageReference;
  gallery: ImageReference[];
  departures: TourDeparture[];

  featured: boolean;
  published: boolean;
  publishedAt?: string;
  updatedAt: string;

  seo: SeoMetadata;
}
```

### Departure model example

```typescript
export interface TourDeparture {
  startDate: string;
  endDate: string;
  price?: number;
  currency?: 'EUR' | 'BGN' | 'USD';
  status: 'available' | 'guaranteed' | 'limited' | 'sold-out' | 'on-request';
  availablePlaces?: number;
}
```

### Content validation

Every build should validate:

- Required fields
- Unique slugs
- Valid internal links
- Valid dates
- Correct departure date ranges
- Existing image references
- Required image alt text
- SEO title and description lengths
- Duplicate canonical URLs
- Missing redirects

The build must fail when critical content is invalid.

---

## 6. Global visitor strategy

Because Omaya expects visitors from many countries, global delivery must be designed from the beginning.

### Cloudflare responsibilities

Use Cloudflare for:

- Global CDN
- DNS
- TLS certificates
- DDoS protection
- Web Application Firewall
- Bot protection
- Static asset caching
- HTML caching where safe
- Image transformations
- Compression
- HTTP/2 and HTTP/3
- Rate limiting for forms and APIs

### Hosting region

The origin can remain in Europe because:

- Omaya is based in Bulgaria.
- European hosting supports GDPR-oriented operations.
- Cloudflare will cache static content close to users globally.
- Most pages will be prerendered and served through the edge.

The origin location is much less important when HTML, JavaScript, CSS, fonts, and images are cached globally.

### Caching policy

Suggested behavior:

```text
Hashed JavaScript and CSS: 1 year, immutable
Images:                   1 year, immutable when versioned
Fonts:                    1 year, immutable
Prerendered HTML:         CDN cached with controlled revalidation
API enquiry endpoints:   never cached
Sitemap and robots:       short cache with revalidation
```

### Performance targets

Target production results on representative mobile devices:

- Largest Contentful Paint: below 2.5 seconds
- Interaction to Next Paint: below 200 milliseconds
- Cumulative Layout Shift: below 0.1
- Initial JavaScript: kept as small as practical
- Hero image: responsive, correctly sized, and prioritized
- Below-the-fold images: lazy loaded

### Fonts

- Self-host fonts when licensing permits.
- Use WOFF2.
- Limit font families and weights.
- Preload only critical font files.
- Use a fallback stack that avoids layout shift.

---

## 7. Image and video strategy

Images must not be stored as a large collection inside the Angular Git repository.

### Recommended media architecture

- Store original images in Cloudflare R2.
- Use `media.omayatravel.com` as the public media domain.
- Deliver automatically resized and modern formats through Cloudflare.
- Store image metadata in the content files.

Example image reference:

```typescript
export interface ImageReference {
  key: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  focalPoint?: {
    x: number;
    y: number;
  };
}
```

Example:

```typescript
const heroImage: ImageReference = {
  key: 'tours/kyrgyzstan/song-kul-lake.jpg',
  alt: 'Traditional yurts beside Song-Kul Lake in Kyrgyzstan',
  width: 2400,
  height: 1600,
};
```

### Image variants

Generate or request variants such as:

```text
thumbnail:  400 px wide
card:       720 px wide
content:   1200 px wide
hero:      1920 px wide
full:      original, with sensible maximum dimensions
```

Use automatic AVIF or WebP delivery where supported, while retaining a high-quality original.

### Image rules

- Do not upload unnecessarily large originals.
- Do not use PNG for normal photographs.
- Preserve original image quality before optimization.
- Always specify width and height.
- Always provide meaningful alt text unless an image is decorative.
- Do not load an entire gallery on initial page load.
- Use responsive `srcset` and `sizes`.
- Lazy load below-the-fold images.
- Use low-quality placeholders or neutral placeholders when useful.

### Video

For occasional short visual clips:

- Use optimized MP4/WebM files for small background videos.
- Consider Cloudflare Stream or a privacy-conscious video platform for larger video libraries.
- Never autoplay large video files on mobile without strict size controls.

---

## 8. Backend scope for version one

The backend should remain small initially.

### Required modules

- Health endpoint
- Contact form
- Tour enquiry form
- Newsletter subscription integration
- Transactional email delivery
- Cloudflare Turnstile verification
- Rate limiting
- Request validation
- Structured logging
- Error monitoring

### Optional database use

A database is not mandatory if enquiries are sent reliably by email and optionally forwarded to a CRM.

A PostgreSQL database should be introduced when Omaya needs:

- Enquiry history inside the application
- Booking records
- Payment records
- Customer accounts
- Saved itineraries
- Inventory or seat availability
- Editorial workflows

### Email provider

Use a transactional email service such as:

- Postmark
- Resend
- Brevo
- Amazon SES

Google Workspace remains suitable for normal employee communication but should not be the application’s direct mail transport.

### Initial email flows

1. New enquiry notification to Omaya
2. Automatic confirmation to the traveller
3. Contact form notification
4. Newsletter confirmation when required

---

## 9. Security

Even without an admin panel, the website requires professional security controls.

### Public website

- Strict Content Security Policy
- HTTPS only
- HSTS
- Secure headers
- Dependency scanning
- No secrets in frontend code
- Sanitized rich content
- Safe external links
- Restricted iframe sources

### API

- Input validation
- Request size limits
- Rate limiting
- Turnstile verification
- CORS restricted to approved domains
- Secure environment variables
- Logging without sensitive personal data
- Protection against email injection
- Generic error messages in production

### Development and deployment

- Protected main branch
- Required CI checks
- Dependabot or Renovate
- Secret scanning
- Separate staging and production secrets
- Minimal deployment permissions
- Regular backups of content and media

A hidden admin URL should never be considered a security feature. If an admin application is added later, it must use real authentication and authorization.

---

## 10. SEO and discoverability

SEO preservation is one of the highest-risk parts of the migration.

### Every public page should support

- Unique title
- Meta description
- Canonical URL
- Open Graph metadata
- Social sharing image
- Index/noindex control
- Breadcrumbs
- Correct heading hierarchy
- Structured data
- Image alt text
- Last-updated date where relevant

### Structured data

Use the relevant schema types:

- Organization
- TravelAgency
- WebSite
- WebPage
- BreadcrumbList
- TouristTrip
- Trip
- Offer
- Place
- BlogPosting
- FAQPage
- ContactPage

### Technical SEO

Generate automatically:

- XML sitemap
- Image sitemap when beneficial
- `robots.txt`
- Canonical tags
- Hreflang tags after multilingual content is introduced
- RSS feed for the blog if useful

### URL migration

Existing WordPress URLs must either remain unchanged or redirect permanently to the new URLs.

Maintain a version-controlled redirect file:

```typescript
export const redirects = [
  {
    from: '/old-tour-url/',
    to: '/tours/new-tour-slug/',
    status: 301,
  },
];
```

Before launch, crawl all old URLs and verify that each important URL returns either:

- `200` at the same address, or
- a single `301` redirect to a valid replacement page.

Avoid redirect chains.

---

## 11. Internationalization and many countries

Worldwide visitors do not necessarily mean the site must immediately support many languages.

### Version one

- Use English as the primary language.
- Format dates clearly and avoid ambiguous numeric-only dates.
- Display currency codes explicitly, for example `EUR 1,490`.
- Use international phone-number input and validation.
- Ensure contact forms support international names and addresses.
- Use UTC for backend timestamps and ISO date formats in content.

### Future multilingual version

When business demand justifies it:

```text
/en/tours/...
/bg/tours/...
/de/tours/...
```

Requirements:

- Separate translated slugs where appropriate
- Hreflang links
- Language switcher
- Translation completeness validation
- Localized metadata
- Localized structured data
- Locale-aware currency and date formatting

Do not automatically machine-translate and index low-quality versions of every page.

---

## 12. Proposed public website structure

```text
/
├── destinations/
│   ├── [destination-slug]/
│   └── ...
│
├── tours/
│   ├── [tour-slug]/
│   ├── classic/
│   ├── women-only/
│   ├── solo-travellers/
│   └── private/
│
├── departures/
│   ├── 2026/
│   └── 2027/
│
├── about/
│   ├── our-story/
│   ├── why-travel-with-us/
│   └── dmc-bulgaria/
│
├── blog/
│   ├── [article-slug]/
│   └── category/[category-slug]/
│
├── private-tours/
├── faq/
├── contact/
├── enquire/
├── privacy-policy/
├── cookie-policy/
└── terms/
```

The final routes should be selected after an inventory of existing indexed WordPress URLs.

---

## 13. Design system

Create a reusable design system before building many pages.

### Foundations

- Brand colors
- Typography
- Spacing scale
- Breakpoints
- Container widths
- Border radii
- Shadows
- Animation rules
- Icon system

### Reusable components

- Header
- Desktop navigation
- Mobile navigation
- Footer
- Hero section
- Section heading
- Tour card
- Destination card
- Blog card
- Testimonial
- Breadcrumbs
- CTA block
- Gallery
- Accordion
- Tabs
- Form controls
- Status badge
- Pagination
- Filter controls
- Loading and error states

The new website should preserve the Omaya identity but should not reproduce WordPress theme HTML or plugin behavior.

---

## 14. Suggested pages and sections

### Homepage

- Hero and primary call to action
- Featured tours
- Featured destinations
- Tour types
- Why travel with Omaya
- Private tours
- Testimonials
- Latest stories
- Newsletter
- Final contact call to action

### Destination page

- Hero
- Overview
- Travel highlights
- Best time to visit
- Practical information
- Related tours
- Gallery
- Related articles
- Enquiry CTA

### Tour page

- Hero and essential facts
- Short overview
- Price and duration
- Upcoming departures
- Day-by-day itinerary
- Inclusions
- Exclusions
- Accommodation or transport information
- Gallery
- Map
- FAQ
- Related tours
- Enquiry form or CTA

### Tour listing

- Category filter
- Destination filter
- Date filter
- Duration filter
- Sorting
- Responsive cards
- Empty state
- SEO-friendly category introductions

### Blog article

- Title and metadata
- Hero image
- Article content
- Table of contents for long articles
- Related destination or tour
- Related articles
- Social sharing metadata

---

## 15. Development environments

Use three environments:

```text
Local
Staging
Production
```

Suggested domains:

```text
localhost:4200                 website local
localhost:3000                 API local

staging.omayatravel.com        website staging
api-staging.omayatravel.com    API staging

omayatravel.com                production website
api.omayatravel.com            production API
media.omayatravel.com          media CDN
```

Staging must be:

- Protected from public indexing
- Connected to staging API credentials
- Excluded from production analytics
- Suitable for mobile and stakeholder testing

---

## 16. CI/CD and Git workflow

### Suggested workflow

```text
Create feature branch
        |
        v
Develop and preview locally
        |
        v
Open pull request
        |
        v
Run CI checks
        |
        +--> install with frozen lockfile
        +--> lint
        +--> type check
        +--> tests
        +--> content validation
        +--> production build
        +--> broken-link checks
        |
        v
Merge to main
        |
        v
Deploy production
        |
        v
Run smoke tests and notify on failure
```

### Deployment rule

The root `package.json`, `pnpm-workspace.yaml`, and `pnpm-lock.yaml` must remain synchronized and be committed together when dependency or workspace configuration changes.

### Rollback

Every deployment should be tied to a Git commit. The previous working deployment should be restorable quickly.

---

## 17. Monitoring and analytics

Use:

- Google Search Console
- Google Analytics 4 after valid consent
- Cloudflare Web Analytics
- Sentry for frontend and backend errors
- Uptime monitoring
- Server and API structured logs
- Automated broken-link checks

Track business events such as:

- Tour page viewed
- Departure viewed
- Enquiry started
- Enquiry submitted
- Phone link clicked
- Email link clicked
- Newsletter subscribed

Avoid collecting unnecessary personal data.

---

## 18. WordPress migration plan

### Inventory

Collect:

- Pages
- Tours
- Destinations
- Categories and tags
- Departure calendars
- Blog posts
- Authors
- FAQs
- Menus
- Forms
- Images and videos
- SEO titles and descriptions
- Canonical URLs
- Structured data
- Existing redirects
- XML sitemap URLs

### Content migration

1. Export WordPress content.
2. Download the original media library.
3. Build migration scripts.
4. Convert pages into Markdown and structured TypeScript data.
5. Upload original media to R2.
6. Map old media URLs to new media keys.
7. Review generated content manually.
8. Validate all internal links.
9. Create the redirect map.
10. Compare old and new page coverage.

### Image migration

- Remove redundant WordPress-generated thumbnails when originals are available.
- Detect duplicates.
- Preserve high-quality originals.
- Replace meaningless filenames only when doing so does not break migration tracking.
- Generate accurate dimensions and metadata.
- Add missing alt text manually for important content.

### Launch content freeze

Before launch:

1. Stop editing the WordPress site.
2. Take a complete backup.
3. Run a final export and migration.
4. Validate changed content.
5. Deploy the new site.
6. Activate redirects.
7. Submit the new sitemap.
8. Monitor errors and rankings.

Keep the complete WordPress backup until the new site has been stable for an extended period.

---

## 19. Implementation phases

### Phase 0 — Discovery and audit

Deliverables:

- Page and URL inventory
- Content-type inventory
- Functional requirements
- Media inventory
- SEO baseline
- Performance baseline
- Redirect draft
- Final route map

### Phase 1 — Repository and foundation

- GitHub repository
- pnpm workspace
- Angular website
- NestJS API
- Shared packages
- Local development configuration
- Environment validation
- CI pipeline
- Staging deployment

### Phase 2 — Content system

- TypeScript content models
- Markdown parsing
- Content validation
- Route generation
- Sitemap generation
- Redirect configuration
- Image reference helpers

### Phase 3 — Design system and site shell

- Global styles
- Typography
- Header
- Navigation
- Mobile menu
- Footer
- Buttons
- Cards
- Forms
- Responsive containers
- Loading and error states

### Phase 4 — Media infrastructure

- Cloudflare R2 bucket
- Custom media domain
- Upload process
- Image transformation URLs
- Responsive Angular image component
- Media metadata scripts

### Phase 5 — Destinations

- Destination model
- Destination listing
- Destination details
- Related tours
- Galleries
- SEO metadata and schema

### Phase 6 — Tours

- Tour model
- Tour listing
- Tour category pages
- Tour details
- Itineraries
- Departures
- Pricing
- Galleries
- Related tours
- Structured data

### Phase 7 — Homepage

- Hero
- Featured content
- Destinations
- Tour types
- Why Omaya
- Testimonials
- Stories
- Newsletter
- Calls to action

### Phase 8 — Enquiries and contact

- Contact API
- Tour enquiry API
- Form validation
- Turnstile
- Transactional email
- Success and error states
- Analytics events

### Phase 9 — Static pages and blog

- About pages
- Private tours
- FAQ
- Legal pages
- Blog listing
- Blog article
- Related content

### Phase 10 — Migration

- Content imports
- Media imports
- URL mapping
- Manual review
- Redirect completion

### Phase 11 — Quality and launch

- Responsive testing
- Cross-browser testing
- Accessibility audit
- Core Web Vitals
- SEO validation
- Structured data validation
- Security headers
- Rate-limit testing
- Error monitoring
- Backup and rollback test
- Production launch

---

## 20. Recommended build order section by section

1. Repository and local development
2. Content models and validation
3. Global layout, header, and footer
4. Image infrastructure
5. Destination card and destination page
6. Tour card and tour page
7. Tour listing and filters
8. Homepage
9. Departure calendar
10. Enquiry forms and backend email
11. About and company pages
12. Blog
13. Legal and cookie pages
14. WordPress content migration
15. SEO redirects and sitemap
16. Performance, accessibility, and security
17. Production launch

This order creates a complete vertical slice early and avoids hard-coded pages that must later be rewritten.

---

## 21. Version-one scope

### Include

- Public responsive website
- Destinations
- Tours
- Tour categories
- Departure dates
- Blog
- Static company pages
- Contact form
- Tour enquiry form
- Newsletter integration
- SEO metadata and structured data
- Global CDN and optimized images
- Git-based content management
- Staging and production deployment

### Exclude initially

- Custom admin panel
- Customer accounts
- Full online booking engine
- Online payments
- Live flight or hotel integrations
- Dynamic package builder
- Complex CRM
- Mobile application
- Many-language content workflow
- AI travel planner

These features may be added later without changing the basic architecture.

---

## 22. Decisions currently made

- Frontend: Angular
- Rendering: Prerendering plus SSR where needed
- Backend: NestJS
- Package management: pnpm workspace
- Source control: GitHub
- Initial content management: Git-based structured files and Markdown
- Initial admin panel: None
- Initial database: None for website content
- Future database: PostgreSQL
- Media: Cloudflare R2 with Cloudflare delivery and transformations
- Global CDN and security: Cloudflare
- Primary language: English
- Hosting origin: Existing Hostinger setup when compatible with the final Node deployment requirements
- Deployment environments: Local, staging, production

---

## 23. Decisions to confirm during Phase 0

- Exact current Hostinger plan and supported Node deployment model
- Whether the public Angular application will run on Hostinger Node hosting or another SSR platform
- Final media pricing choice between R2 transformations and Cloudflare Images
- Whether tour prices and departure availability are informational or operational
- Newsletter provider
- Transactional email provider
- Required analytics tools
- Required languages within the next twelve months
- Final URL structure after the SEO audit
- Whether existing visual branding is retained, evolved, or fully redesigned

---

## 24. First milestone

The first meaningful milestone is:

> A developer adds one destination and one tour through structured files, uploads optimized images, previews the pages locally, pushes the change to GitHub, and sees complete SEO-friendly pages deployed on staging and delivered through Cloudflare.

This validates:

- The repository
- Angular rendering
- Content models
- Image delivery
- SEO generation
- CI/CD
- Staging hosting
- The developer-managed content workflow

---

## 25. Immediate next step

Start Phase 0 with a complete audit of the current WordPress website.

The audit output should contain:

1. Every public URL
2. Page type for each URL
3. Current title and meta description
4. Canonical URL
5. Main headings
6. Images and media references
7. Internal links
8. Structured data
9. Forms and interactive behavior
10. Proposed new route
11. Keep or redirect decision
12. Migration priority

After the audit, initialize the repository and build the first vertical slice: global layout, one destination, one tour, and the media pipeline.

---

## 26. Long-term architecture path

The initial file-based content model is not a dead end.

Possible progression:

```text
Stage 1
Git-managed Markdown and TypeScript content

Stage 2
Git-based headless CMS or visual editor

Stage 3
Custom admin panel plus PostgreSQL for operational content

Stage 4
Booking, payments, customer accounts, and integrations
```

The public Angular components should consume normalized content models. This allows the data source to change later without rebuilding the public user interface.

---

**Document status:** Living project plan. Update this file whenever a major architectural or scope decision changes.

## Architecture control documents

The following documents govern implementation:

- `docs/ARCHITECTURE_GOVERNANCE.md` defines how specialist proposals become accepted decisions.
- `docs/DECISIONS.md` is the ADR index and decision approval log.
- `docs/ADR_GUIDELINES.md` defines when ADRs are required and how they are written.
- `docs/INTERFACE_CONTRACTS.md` defines boundaries between content, website, API, media and SEO.
- `docs/RISK_REGISTER.md` tracks project risks and mitigations.
- `docs/IMPLEMENTATION_ORDER.md` defines the approved build sequence.
- `docs/HANDOFFS.md` tracks specialist proposals before approval.
- `docs/SPECIFICATION_WORKFLOW.md` defines how specialist proposal files become one approved implementation specification.
- `docs/GITHUB_ISSUES_WORK_ORDERS.md` defines GitHub Issues as the work-order system.
- `docs/ISSUE_BACKLOG.md` lists the initial issues to create when the GitHub repository is configured.
- `docs/EXPERT_WORKFLOW.md` defines the issue, branch, file and pull-request workflow for all specialists and implementers.
- `docs/MILESTONE_GATES.md` defines approval gates for architecture, design, vertical slice, migration and launch.
- `docs/CODEX_AUTOMATION.md` defines how Codex should implement from approved issues and specs.
- `docs/CONSISTENCY_CHECKS.md` defines automated validation rules to add to CI.

No specialist recommendation becomes an accepted project decision until it is recorded and approved in the decision log or in a full ADR.
