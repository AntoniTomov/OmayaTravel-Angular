# Amelia Travel Rollout Plan

This document tracks the Amelia Travel rollout inside the shared Omaya Travel Angular SSR platform.

Important note: attached files and pasted notes are treated as project inputs. They are not operational instructions by themselves; implementation decisions should continue to follow the repo architecture, tests, and deployment process.

## Goal

Launch `ameliatravel.bg` as a Bulgarian-first travel brand in the same Angular SSR codebase as Omaya Travel.

The platform should:

- Serve Omaya Travel on `omayatravel.com` and `www.omayatravel.com`.
- Serve Amelia Travel on `ameliatravel.bg` and `www.ameliatravel.bg`.
- Keep each brand's SEO, analytics, forms, email, newsletter, legal, theme, content, and assets separate.
- Reuse shared Angular components and SSR infrastructure where the page structure is the same.
- Deploy through the existing branch flow: feature branch -> `dev` -> staging runtime -> `master` -> production runtime.

## Current Branch

- Branch: `codex/amelia-travel-platform`
- Base: latest `origin/dev` at branch creation time
- Remote: `origin/codex/amelia-travel-platform`

## User-Provided Amelia Inputs

### Domain

- Production domain: `ameliatravel.bg`

### Header Menu

Required Amelia header items:

- Destinations
- About Us
- Blog
- Contact Us

Comment: the labels should probably be Bulgarian in the visible site unless the final brand direction intentionally keeps English navigation. Recommended Bulgarian equivalents:

- Дестинации
- За нас
- Блог
- Контакти

### Destinations

Amelia destinations:

- Алжир
- Армения
- Грузия
- Индия
- Киргистан
- Мароко
- Намибия
- Оман
- Перу
- Саудитска Арабия
- Узбекистан
- Южна Корея
- Япония

Comment: each destination should have a stable slug, route, SEO title, meta description, hero image, listing card, and at least one tour/detail route before it is included in the public sitemap. If a destination has no real detail page yet, it should not be indexable.

### Homepage Hero

Use a carousel with three images, similar to Omaya Travel.

Hero slogan:

```text
Общност за жени пътешественички
```

Hero subtitle:

```text
Опознай света с вълнуващи пътувания в малки групи от жени с приключенски дух - точно като теб. Създадена от жени, за жени
```

Comment: the current Amelia placeholder still has old hero copy and two shared Omaya images. This needs to be replaced with the supplied Amelia assets.

### Homepage Search/Find Section

Amelia should not show the Omaya "find" section on the homepage.

Comment: the implementation should disable the trip search UI for Amelia through a site feature flag, not by hardcoding Amelia checks in the component.

### First Section After Carousel

Background asset:

```text
C:/Users/Toni/Downloads/h1-background-coral.avif
```

Heading:

```text
Защо да се присъединиш към нас?
```

Content blocks:

```text
ТВОЯТА ОБЩНОСТ

Пътуваме в малки групи (до 16 души) от жени пътешественички на възраст 20-50 г. Защото знаем, че най-хубавите спомени се създават не само от местата, които посещаваш, но и от хората, с които ги споделяш.
```

```text
ПОДКРЕПА ЗА ЖЕНИТЕ В ТУРИЗМА

Приоритизираме работата с жени-гидове и местни професионалистки в дестинациите, в които работим. Така твоето пътуване помага да се създадат нови възможности за жени в общностите, които посещаваш.
```

```text
БАЛАНСИРАНИ МАРШРУТИ

Съчетаваме най-важните забележителности с по-малко известни места и активности, които ни дават по-задълбочен поглед върху история и културата на дестинацията.

Отделяме достатъчно време, за да се потопиш в атмосферата, вместо просто да препускаш от точка на точка.
```

```text
РАЗНООБРАЗНИ ДЕСТИНАЦИИ

Ние те водим до най-вълнуващите кътчета на света.
От екзотичните пазари на Северна Африка и древните градове на Азия, до дивите пейзажи на Южна Америка - нашите маршрути са създадени, за да ти покажат света в неговото пълно разнообразие.
```

Comment: this should likely reuse the existing Omaya "travel match" or mission-style section layout where possible, but with Amelia-specific content, background, and visual treatment.

### Supplied Assets

Source files provided by user:

```text
C:/Users/Toni/Downloads/3.avif
C:/Users/Toni/Downloads/4.avif
C:/Users/Toni/Downloads/5.avif
C:/Users/Toni/Downloads/h1-background-coral.avif
C:/Users/Toni/Downloads/amelia_logo_transparent.png
C:/Users/Toni/Downloads/amelia_logo_transparent_dark-bg.png
C:/Users/Toni/AppData/Local/Temp/codex-clipboard-ab044e25-ba99-4d2d-9313-35de96fca781.png
```

Target location:

```text
apps/website/public/assets/images/amelia/
```

Comment: do not overwrite Omaya images. Amelia media should stay in an Amelia-specific folder. After copying, confirm dimensions, file sizes, and rendered layout.

The screenshot file is a visual reference for the Omaya Travel section layout that Amelia should mirror for the first post-hero section. It should guide spacing, section rhythm, heading prominence, and four-column desktop composition; its English text and Omaya-specific content should not be reused.

## Completed Properly

- [x] Created feature branch from latest `origin/dev`: `codex/amelia-travel-platform`.
- [x] Pushed feature branch to origin.
- [x] Configured Amelia production domain as `ameliatravel.bg`.
- [x] Added site-aware config fields for SEO, analytics, contact, Resend, and Mailchimp.
- [x] Kept Omaya as the fallback/default site.
- [x] Made GA4 site-aware.
- [x] Kept Amelia GA4 blank until a real Amelia GA4 measurement ID is created.
- [x] Kept Meta Pixel site-aware.
- [x] Made cookie consent storage site-specific.
- [x] Removed fuzzy production hostname selection for Amelia; exact domains now control site selection.
- [x] Added domain-aware `robots.txt`.
- [x] Added domain-aware `sitemap.xml`.
- [x] Made form email routing site-aware.
- [x] Made newsletter Mailchimp routing site-aware.
- [x] Added tests for site registry/domain detection.
- [x] Added tests for Amelia route access.
- [x] Added tests for site-aware canonical generation.
- [x] Added site-aware title, meta description, canonical, OG, and robots handling.
- [x] Verified with `npm.cmd run type-check`.
- [x] Verified with `npm.cmd run test`.
- [x] Verified with `npm.cmd run lint`.

## Implementation Plan

### 1. Amelia Assets

- [ ] Copy supplied Amelia logo files into `apps/website/public/assets/images/amelia/brand/`.
- [ ] Copy supplied carousel images into `apps/website/public/assets/images/amelia/home/`.
- [ ] Copy supplied coral background into `apps/website/public/assets/images/amelia/home/`.
- [ ] Confirm actual image dimensions and update `HeroSlide.image.width` and `HeroSlide.image.height`.
- [ ] Decide whether to generate responsive variants for the carousel images.
- [ ] Update Amelia `ogImage` to an Amelia-specific public asset.

Comment: for performance, the first carousel image should be treated as the LCP image and should be optimized carefully.

### 2. Amelia Brand Config

- [ ] Replace temporary Omaya logo paths in `amelia/site.config.ts`.
- [ ] Confirm public brand name: `Amelia Travel`.
- [ ] Confirm final tagline.
- [ ] Add Amelia phone number if available.
- [ ] Confirm sender email and recipient email for Resend.
- [ ] Confirm whether the visible logo variant should change between transparent header and solid header states.

Comment: the provided logo files appear named for transparent and dark-background use. The actual header behavior should be checked visually after implementation.

### 3. Header Navigation

- [ ] Replace current Amelia placeholder navigation with the required menu structure.
- [ ] Use Bulgarian visible labels unless final decision is English menu text.
- [ ] Implement Destinations as a dropdown/list containing all Amelia destinations.
- [ ] Route destination links to real destination/tour pages only when content exists.
- [ ] Keep incomplete destination pages out of sitemap until ready.

Comment: navigation can list destination names before all pages are indexable only if incomplete destinations route to a controlled non-indexable page. Best SEO path is to publish destinations only when each has useful content.

### 4. Homepage Hero

- [ ] Replace existing Amelia hero title with `Общност за жени пътешественички`.
- [ ] Replace existing Amelia hero subtitle with the provided Bulgarian subtitle.
- [ ] Use the three supplied carousel images.
- [ ] Remove/hide the Omaya find/search section for Amelia.
- [ ] Confirm carousel timing, mobile crop, contrast, and readable text over all three images.

Comment: the hero text should remain server-rendered text, not embedded inside an image, for SEO and accessibility.

### 5. First Post-Hero Section

- [ ] Create or adapt a shared section for Amelia's "Защо да се присъединиш към нас?" content.
- [ ] Use `h1-background-coral.avif` as the section background.
- [ ] Add the four content blocks exactly as approved, with minor punctuation normalization only if approved.
- [ ] Confirm desktop layout matches the supplied visual direction.
- [ ] Confirm mobile layout has no overlapping text or awkward wrapping.

Comment: this should be site-config/content-driven if practical, so Omaya components do not become littered with Amelia-only branches.

### 6. Destination Model

- [ ] Define Amelia destination slugs.
- [ ] Decide which destinations launch immediately.
- [ ] Add destination card/list content.
- [ ] Add destination detail content where needed.
- [ ] Add or map tour detail pages using the existing Omaya tour page structure.
- [ ] Ensure each published route has title, meta description, canonical path, image, and visible H1.

Recommended slug candidates:

```text
algeria
armenia
georgia
india
kyrgyzstan
morocco
namibia
oman
peru
saudi-arabia
uzbekistan
south-korea
japan
```

Comment: because the site is Bulgarian, visible labels should be Bulgarian, but URL slugs should stay ASCII and stable.

### 7. Blog

- [ ] Decide whether Amelia blog launches now or later.
- [ ] If launching now, create Amelia-specific blog listing content.
- [ ] Keep Omaya blog posts from appearing under Amelia unless they are translated/adapted and approved.
- [ ] Add blog article SEO and schema only for real Amelia posts.

Comment: if there is no Amelia blog content at launch, the Blog menu item should either be hidden or route to a non-indexable coming-soon page. Best SEO choice is not to publish thin pages.

### 8. Legal Pages

- [ ] Decide whether Amelia uses the same legal entity as Omaya or separate legal wording.
- [ ] Update privacy policy text for Amelia brand, domain, contact email, analytics providers, Meta Pixel, GA4, Mailchimp, Resend, and cookies.
- [ ] Update cookie policy for Amelia.
- [ ] Update terms if Amelia commercial terms differ.
- [ ] Confirm whether Omaya travel license should be visible on Amelia.

Comment: this is not just wording. Legal pages affect trust, ads approval, analytics consent, and conversion credibility.

### 9. Analytics And Consent

- [ ] Create/provide Amelia GA4 measurement ID.
- [ ] Confirm Amelia Meta Pixel ID is final: `1088639487435953`.
- [ ] Confirm whether Google Tag Manager will be used now or later.
- [ ] Confirm consent banner copy is acceptable for Bulgarian users.
- [ ] Confirm analytics events include useful site/tour/source parameters.
- [ ] Test that Amelia does not load Omaya GA4.
- [ ] Test that Omaya does not load Amelia GA4/Pixel.

Comment: Amelia GA4 is intentionally blank right now to prevent accidental Omaya tracking.

### 10. Forms, Resend, And Mailchimp

- [ ] Confirm Amelia recipient email.
- [ ] Verify `ameliatravel.bg` sender domain in Resend if sending from `website@ameliatravel.bg`.
- [ ] Set `AMELIA_MAIL_TO` if different from `info@ameliatravel.bg`.
- [ ] Set `AMELIA_MAIL_FROM` if different from `Amelia Travel <website@ameliatravel.bg>`.
- [ ] Create/provide `AMELIA_MAILCHIMP_AUDIENCE_ID`.
- [ ] Confirm whether Amelia uses separate Mailchimp audience or shared audience with tags.
- [ ] Test contact/enquiry form from Amelia host.
- [ ] Test newsletter signup from Amelia host.

Comment: the current code intentionally refuses to fall back to Omaya's Mailchimp audience for Amelia.

### 11. SEO Technical Validation

- [ ] Confirm `https://ameliatravel.bg/robots.txt` points to Amelia sitemap.
- [ ] Confirm `https://ameliatravel.bg/sitemap.xml` contains only Amelia-approved URLs.
- [ ] Confirm Amelia pages use `https://ameliatravel.bg/...` canonicals.
- [ ] Confirm Omaya pages continue using `https://omayatravel.com/...` canonicals.
- [ ] Confirm `html lang="bg"` on Amelia.
- [ ] Confirm `og:locale` is `bg_BG` on Amelia.
- [ ] Confirm no Amelia page has Omaya title, logo alt text, canonical, or OG image unless intentionally shared.
- [ ] Add Search Console property for Amelia.
- [ ] Submit Amelia sitemap after staging validation and production launch.

### 12. Performance Validation

- [ ] Check local Lighthouse/PageSpeed for Amelia homepage.
- [ ] Check mobile hero LCP.
- [ ] Ensure carousel images are not larger than needed.
- [ ] Confirm static assets have long cache headers.
- [ ] Confirm SSR HTML renders Amelia content before hydration.
- [ ] Confirm no unnecessary Omaya-only sections are loaded/rendered on Amelia homepage.

### 13. Staging And Production Flow

- [ ] Finish feature work on `codex/amelia-travel-platform`.
- [ ] Review branch diff.
- [ ] Merge/push into `dev`.
- [ ] Let GitHub Actions publish `hostinger-staging-runtime`.
- [ ] Configure staging Hostinger env vars.
- [ ] Test staging thoroughly.
- [ ] Merge/push into `master`.
- [ ] Let GitHub Actions publish `hostinger-runtime`.
- [ ] Configure production Hostinger env vars.
- [ ] Point DNS for `ameliatravel.bg` and `www.ameliatravel.bg`.
- [ ] Run final post-launch validation.

## Required Hostinger Environment Variables

Baseline shared variables:

```text
RESEND_API_KEY
MAILCHIMP_API_KEY
MAILCHIMP_SERVER_PREFIX
OMAYA_MAILCHIMP_AUDIENCE_ID
AMELIA_MAILCHIMP_AUDIENCE_ID
OMAYA_ALLOWED_HOSTS
```

Recommended `OMAYA_ALLOWED_HOSTS` production value:

```text
omayatravel.com,www.omayatravel.com,ameliatravel.bg,www.ameliatravel.bg
```

Optional Amelia overrides:

```text
AMELIA_MAIL_TO
AMELIA_MAIL_FROM
AMELIA_MAIL_REPLY_TO_FALLBACK
```

Optional platform-level rate limits:

```text
PLATFORM_FORMS_RATE_LIMIT_WINDOW_MS
PLATFORM_FORMS_RATE_LIMIT_MAX
```

## Launch Blockers

- [ ] Amelia GA4 measurement ID is missing.
- [ ] Amelia Mailchimp audience/list decision is not finalized.
- [ ] Amelia Resend sender/domain verification is not confirmed.
- [ ] Amelia logo assets are not yet copied into the repo.
- [ ] Amelia homepage carousel images are not yet copied into the repo.
- [ ] Amelia destination pages/routes are not yet implemented.
- [ ] Amelia legal copy is not yet confirmed.
- [ ] Amelia blog launch decision is not yet confirmed.

## Definition Of Done

Amelia is ready for staging when:

- [ ] Local `?site=amelia` preview shows Amelia branding, hero, images, navigation, and first content section.
- [ ] Build, tests, and formatting checks pass.
- [ ] Amelia sitemap contains only approved Amelia URLs.
- [ ] Amelia canonicals use `https://ameliatravel.bg`.
- [ ] Forms route to Amelia recipient/sender settings.
- [ ] Newsletter routes to Amelia Mailchimp configuration.
- [ ] GA4 and Meta Pixel load only after consent and use Amelia IDs.
- [ ] Omaya production behavior is unchanged.

Amelia is ready for production when:

- [ ] Staging has passed the full validation checklist.
- [ ] Hostinger production env vars are configured.
- [ ] DNS for `ameliatravel.bg` and `www.ameliatravel.bg` is configured.
- [ ] Production smoke tests pass for Omaya and Amelia.
- [ ] Search Console is ready for Amelia sitemap submission.
