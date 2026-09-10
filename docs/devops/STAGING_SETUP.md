# Staging setup on Hostinger

What `staging.omayatravel.com` needs before it will serve the site, and how to check each part.

The build pipeline already works and needs no changes. `.github/workflows/publish-hostinger-staging-runtime.yml`
runs on every push to `dev`, lints, type-checks, tests, builds, and publishes a **prebuilt** Node
application to the `hostinger-staging-runtime` branch. Hostinger only has to run it.

## Current state

Diagnosed 10 September 2026:

| Check                             | Result                                                                  |
| --------------------------------- | ----------------------------------------------------------------------- |
| DNS for `staging.omayatravel.com` | Resolves — `217.65.159.182`, `217.65.156.1`                             |
| Port 80                           | Responds, 301 to HTTPS                                                  |
| Port 443                          | **TLS handshake fails**, including with certificate validation disabled |
| Staging runtime branch            | Published and current                                                   |

A handshake that fails even with validation off is not an expired or mismatched certificate — it
means **no certificate exists for the hostname**. The subdomain was recreated without one.

## 1. Issue the TLS certificate

In hPanel, on the staging subdomain, issue a free Let's Encrypt certificate and wait for it to show
as active. Menu labels move between hPanel versions; production already has one, so the reliable
route is to open the production site's SSL screen and do the same thing for the staging subdomain.

Verify from a terminal, not a browser — a browser will cache and confuse the picture:

```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://staging.omayatravel.com/
```

Anything other than `000` means TLS is working. `000` with exit code 35 means it still is not.

## 2. Run the Node application

Point a Node.js application at the staging subdomain with:

| Setting      | Value                                                     |
| ------------ | --------------------------------------------------------- |
| Repository   | `AntoniTomov/OmayaTravel-Angular`                         |
| Branch       | **`hostinger-staging-runtime`** — not `dev`, not `master` |
| Startup file | `hostinger-entry.mjs`                                     |
| Node version | 18 or newer; production CI builds on 24.15.0              |

The branch is important. It holds the _built_ output plus a two-line entry point, not the source —
Hostinger's Git integration does not run an Angular build, which is why the workflow publishes a
ready-to-run bundle instead.

Port binding needs nothing: `hostinger-entry.mjs` sets `OMAYA_FORCE_SERVER_LISTEN=true`, and the
server listens on `process.env.PORT` (falling back to 3000), which Hostinger provides.

Mirror whatever the production Node app already uses for application root and deployment mode.

## 3. Environment variables

### Required — the site will not behave correctly without these

| Variable              | Value                     | Why                                                                                                                                                                                                                                                          |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `OMAYA_ALLOWED_HOSTS` | `staging.omayatravel.com` | `server.ts` allows only `omayatravel.com`, `www.omayatravel.com`, `localhost` and `127.0.0.1`. The SSR engine rejects any other hostname, so staging fails **after** TLS starts working — which reads like a mysterious 500 rather than a configuration gap. |
| `RESEND_API_KEY`      | A Resend key              | Without it every form submission returns **HTTP 502**. Forms are the main thing worth testing on staging, so this is not optional.                                                                                                                           |

### Strongly recommended — these stop staging touching real data

| Variable          | Value                                   | Why                                                                                                                                                                     |
| ----------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMAYA_MAIL_TO`   | A test inbox                            | Defaults to `info@omayatravel.com`. Without an override, every staging test enquiry lands in the real inbox and is indistinguishable from a customer.                   |
| `OMAYA_MAIL_FROM` | A staging sender                        | Defaults to `website@omayatravel.com`.                                                                                                                                  |
| `MAILCHIMP_*`     | Leave **unset**, or use a test audience | If the production keys are set, newsletter tests add real subscribers to the live audience. Unset returns `missing_mailchimp_configuration`, which is the safe failure. |

### Optional

| Variable                                                         | Notes                                                                                                                                                              |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `TURNSTILE_SECRET_KEY`                                           | Unset skips verification entirely, so forms still work. Set it only to test the captcha path; pair with `OMAYA_FORMS_REQUIRE_TURNSTILE=true` to make it mandatory. |
| `OMAYA_TRUST_PROXY_HEADERS`                                      | Set to `true` only if `Host` does not survive the proxy. Production works without it, so start without it.                                                         |
| `OMAYA_FORMS_RATE_LIMIT_MAX`, `OMAYA_FORMS_RATE_LIMIT_WINDOW_MS` | Default to 5 per 10 minutes. Raise on staging if repeated testing trips the limit.                                                                                 |

## Indexing

Handled in code, not in hPanel. Any host that is not a published site domain is served
`X-Robots-Tag: noindex, nofollow` and a disallow-all `robots.txt` that advertises no sitemap. This
covers staging, previews, bare IPs and stray `Host` headers by the same rule.

Confirm after deploying:

```bash
curl -sSI https://staging.omayatravel.com/ | grep -i x-robots-tag
curl -sS https://staging.omayatravel.com/robots.txt
```

Expect `noindex, nofollow` and `Disallow: /`. If the header is missing, the request is being
treated as a published host and staging is indexable — stop and fix that before sharing the URL.

## Verification checklist

Once the three steps are done:

1. `https://staging.omayatravel.com/` returns 200.
2. `X-Robots-Tag: noindex, nofollow` is present and `robots.txt` disallows everything.
3. A tour page, a destination page and the listing all render with images.
4. One enquiry submits successfully and arrives at the **test** inbox, not the real one.
5. `https://staging.omayatravel.com/sitemap.xml` is reachable but **not** advertised in robots.txt.

## The release flow this enables

```
feature branch ──PR──▶ dev ──▶ staging (auto)  ──▶ verify
                       │
                       └──PR──▶ master ──▶ production (auto)
```

Both publishes are automatic on push. Nothing reaches production without passing through `dev` and
therefore through staging first.
