import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { createHash, randomUUID } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

loadLocalEnv();

const browserDistFolder = join(import.meta.dirname, '../browser');
const FORM_CONTRACT_VERSION = 'public-forms.v1';
const FORMS_RATE_LIMIT_WINDOW_MS = Number(
  process.env['OMAYA_FORMS_RATE_LIMIT_WINDOW_MS'] ?? 600_000,
);
const FORMS_RATE_LIMIT_MAX = Number(process.env['OMAYA_FORMS_RATE_LIMIT_MAX'] ?? 5);
const OMAYA_MAIL_TO = process.env['OMAYA_MAIL_TO'] ?? 'info@omayatravel.com';
const OMAYA_MAIL_FROM = process.env['OMAYA_MAIL_FROM'] ?? 'Omaya Travel <website@omayatravel.com>';
const OMAYA_MAIL_REPLY_TO_FALLBACK = process.env['OMAYA_MAIL_REPLY_TO_FALLBACK'] ?? OMAYA_MAIL_TO;
const MAILCHIMP_SUBSCRIBE_STATUS = process.env['MAILCHIMP_SUBSCRIBE_STATUS'] ?? 'subscribed';
const allowedHosts = [
  'omayatravel.com',
  'www.omayatravel.com',
  'localhost',
  '127.0.0.1',
  ...(process.env['NG_ALLOWED_HOSTS'] ?? '')
    .split(',')
    .map((host) => host.trim())
    .filter(Boolean),
  ...(process.env['OMAYA_ALLOWED_HOSTS'] ?? '')
    .split(',')
    .map((host) => host.trim())
    .filter(Boolean),
];
const formLabels = {
  contact: 'Contact request',
  'faq-question': 'FAQ question',
  'enquire-now': 'Enquire Now request',
  'private-tour-planning': 'Private tour planning request',
} as const;
const rateLimitBuckets = new Map<string, { count: number; resetAt: number }>();
const trustProxyHeaders =
  process.env['OMAYA_TRUST_PROXY_HEADERS'] === 'true'
    ? ['x-forwarded-host', 'x-forwarded-proto', 'x-forwarded-port', 'x-forwarded-prefix']
    : false;

const app = express();
const angularApp = new AngularNodeAppEngine({ allowedHosts, trustProxyHeaders });

app.disable('x-powered-by');
app.use('/api/forms', express.json({ limit: '32kb', type: 'application/json' }));
app.use('/api/newsletter', express.json({ limit: '8kb', type: 'application/json' }));

app.post('/api/forms', async (req, res) => {
  const requestId = `frm_${randomUUID()}`;

  res.setHeader('Cache-Control', 'no-store');

  if (!isAllowedOrigin(req)) {
    return res.status(403).json(apiError(requestId, 'forbidden', 'This request is not allowed.'));
  }

  const rateLimitResult = checkRateLimit(getClientIp(req));

  if (!rateLimitResult.ok) {
    res.setHeader('Retry-After', String(Math.ceil(rateLimitResult.retryAfterMs / 1000)));

    return res
      .status(429)
      .json(
        apiError(
          requestId,
          'rate_limited',
          'Please wait a few minutes before sending another request.',
        ),
      );
  }

  const payload = normalizePayload(req.body);

  if (!payload) {
    return res.status(400).json(
      apiError(requestId, 'validation_failed', 'Please check the highlighted fields.', {
        form: 'Use the supported public forms contract.',
      }),
    );
  }

  if (payload.meta.honeypot.trim()) {
    return res.status(200).json({ ok: true, requestId });
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return res
      .status(400)
      .json(
        apiError(
          requestId,
          'validation_failed',
          'Please check the highlighted fields.',
          validation.fields,
        ),
      );
  }

  const turnstile = await verifyTurnstileToken(payload.meta.turnstileToken, getClientIp(req));

  if (!turnstile.ok) {
    return res
      .status(400)
      .json(apiError(requestId, 'turnstile_failed', 'Please refresh the page and try again.'));
  }

  const emailResult = await sendFormEmails(payload, requestId);

  if (!emailResult.ok) {
    console.error('Public form email failed', {
      requestId,
      formType: payload.formType,
      reason: emailResult.reason,
    });

    return res
      .status(502)
      .json(
        apiError(
          requestId,
          'send_failed',
          'We could not send your request right now. Please try again or email info@omayatravel.com.',
        ),
      );
  }

  return res.status(200).json({ ok: true, requestId });
});

app.post('/api/newsletter', async (req, res) => {
  const requestId = `nws_${randomUUID()}`;

  res.setHeader('Cache-Control', 'no-store');

  if (!isAllowedOrigin(req)) {
    return res.status(403).json(apiError(requestId, 'forbidden', 'This request is not allowed.'));
  }

  const rateLimitResult = checkRateLimit(`newsletter:${getClientIp(req)}`);

  if (!rateLimitResult.ok) {
    res.setHeader('Retry-After', String(Math.ceil(rateLimitResult.retryAfterMs / 1000)));

    return res
      .status(429)
      .json(
        apiError(requestId, 'rate_limited', 'Please wait a few minutes before subscribing again.'),
      );
  }

  const payload = normalizeNewsletterPayload(req.body);

  if (!payload.ok) {
    return res.status(400).json(
      apiError(requestId, 'validation_failed', 'Please enter a valid email address.', {
        email: payload.message,
      }),
    );
  }

  if (payload.honeypot.trim()) {
    return res.status(200).json({ ok: true, requestId });
  }

  const result = await subscribeToMailchimp(payload.email, payload.source);

  if (!result.ok) {
    console.error('Newsletter subscription failed', {
      requestId,
      reason: result.reason,
    });

    return res
      .status(502)
      .json(
        apiError(
          requestId,
          'subscribe_failed',
          'We could not subscribe you right now. Please try again in a few minutes.',
        ),
      );
  }

  return res.status(200).json({ ok: true, requestId });
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);

type FormType = keyof typeof formLabels;

interface PublicFormPayload {
  contractVersion: string;
  formType: FormType;
  fields: Record<string, string>;
  meta: {
    pagePath: string;
    honeypot: string;
    turnstileToken: string;
  };
}

interface NormalizedFieldRule {
  required?: boolean;
  email?: boolean;
  min?: number;
  max: number;
  pattern?: RegExp;
  enum?: readonly string[];
  message?: string;
}

function normalizeNewsletterPayload(
  value: unknown,
):
  | { ok: true; email: string; honeypot: string; source: 'home page' | 'popup' }
  | { ok: false; message: string } {
  if (!isRecord(value)) {
    return { ok: false, message: 'Enter a valid email address.' };
  }

  const email = stringValue(value['email']).trim().toLowerCase();
  const honeypot = stringValue(value['website']);
  const source = stringValue(value['source']) === 'popup' ? 'popup' : 'home page';

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: 'Enter a valid email address.' };
  }

  return { ok: true, email, honeypot, source };
}

function normalizePayload(value: unknown): PublicFormPayload | null {
  if (!isRecord(value)) {
    return null;
  }

  const formType = stringValue(value['formType']);

  if (!isFormType(formType)) {
    return null;
  }

  const fieldsInput = isRecord(value['fields']) ? value['fields'] : {};
  const metaInput = isRecord(value['meta']) ? value['meta'] : {};
  const fields = Object.fromEntries(
    Object.entries(fieldsInput).map(([key, fieldValue]) => [key, stringValue(fieldValue).trim()]),
  );

  return {
    contractVersion: stringValue(value['contractVersion']),
    formType,
    fields,
    meta: {
      pagePath: stringValue(metaInput['pagePath']).slice(0, 300),
      honeypot: stringValue(metaInput['honeypot']).slice(0, 300),
      turnstileToken: stringValue(metaInput['turnstileToken']).slice(0, 2048),
    },
  };
}

function validatePayload(
  payload: PublicFormPayload,
): { ok: true } | { ok: false; fields: Record<string, string> } {
  const errors: Record<string, string> = {};
  const rules = validationRules[payload.formType];

  if (payload.contractVersion !== FORM_CONTRACT_VERSION) {
    errors['contractVersion'] = 'Unsupported form contract version.';
  }

  for (const [field, rule] of Object.entries(rules)) {
    const value = payload.fields[field] ?? '';

    if (rule.required && !value) {
      errors[field] = 'This field is required.';
      continue;
    }

    if (!value) {
      continue;
    }

    if (rule.min && value.length < rule.min) {
      errors[field] = rule.message ?? `Enter at least ${rule.min} characters.`;
      continue;
    }

    if (value.length > rule.max) {
      errors[field] = `Keep this under ${rule.max} characters.`;
      continue;
    }

    if (rule.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field] = 'Enter a valid email address.';
      continue;
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      errors[field] = rule.message ?? 'Use the expected format.';
      continue;
    }

    if (rule.enum && !rule.enum.includes(value)) {
      errors[field] = 'Choose one of the supported options.';
    }
  }

  return Object.keys(errors).length ? { ok: false, fields: errors } : { ok: true };
}

const validationRules: Record<FormType, Record<string, NormalizedFieldRule>> = {
  contact: {
    name: { required: true, min: 2, max: 120 },
    email: { required: true, email: true, max: 254 },
    subject: { max: 160 },
    message: { required: true, min: 5, max: 5000 },
  },
  'faq-question': {
    name: { required: true, min: 2, max: 120 },
    email: { required: true, email: true, max: 254 },
    message: { required: true, min: 5, max: 5000 },
  },
  'enquire-now': {
    name: { required: true, min: 2, max: 120 },
    email: { required: true, email: true, max: 254 },
    phone: { max: 40 },
    countryCode: { max: 12 },
    preferredContactMethod: {
      max: 80,
      enum: ['Email me', 'Call me via WhatsApp', 'Email me, Call me via WhatsApp'],
    },
    travelDate: { max: 80 },
    additionalInformation: { max: 5000 },
  },
  'private-tour-planning': {
    name: { required: true, min: 2, max: 120 },
    email: { required: true, email: true, max: 254 },
    phone: { required: true, min: 5, max: 40 },
    countryCode: { required: true, min: 1, max: 12 },
    preferredContactMethod: {
      required: true,
      max: 40,
      enum: ['Email me', 'Call me on WhatsApp'],
    },
    adults: { required: true, min: 1, max: 40 },
    children: { required: true, min: 1, max: 40 },
    places: { required: true, min: 1, max: 1000 },
    budget: { required: true, min: 1, max: 160 },
    startDate: {
      required: true,
      max: 10,
      pattern: /^\d{4}-\d{2}-\d{2}$/,
      message: 'Use YYYY-MM-DD.',
    },
    days: {
      required: true,
      max: 4,
      pattern: /^[1-9]\d{0,3}$/,
      message: 'Enter a positive number of days.',
    },
    details: { max: 5000 },
  },
};

function isAllowedOrigin(req: express.Request): boolean {
  const origin = req.get('origin');

  if (!origin) {
    return true;
  }

  try {
    return allowedHosts.includes(new URL(origin).hostname);
  } catch {
    return false;
  }
}

function checkRateLimit(key: string): { ok: true } | { ok: false; retryAfterMs: number } {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(key, { count: 1, resetAt: now + FORMS_RATE_LIMIT_WINDOW_MS });
    cleanupRateLimitBuckets(now);
    return { ok: true };
  }

  if (bucket.count >= FORMS_RATE_LIMIT_MAX) {
    return { ok: false, retryAfterMs: bucket.resetAt - now };
  }

  bucket.count += 1;
  return { ok: true };
}

function cleanupRateLimitBuckets(now: number): void {
  for (const [key, bucket] of rateLimitBuckets) {
    if (bucket.resetAt <= now) {
      rateLimitBuckets.delete(key);
    }
  }
}

async function verifyTurnstileToken(
  token: string,
  remoteIp: string,
): Promise<{ ok: true } | { ok: false }> {
  const secret = process.env['TURNSTILE_SECRET_KEY'];
  const requireTurnstile = process.env['OMAYA_FORMS_REQUIRE_TURNSTILE'] === 'true';

  if (!secret) {
    return { ok: true };
  }

  if (!token) {
    return requireTurnstile ? { ok: false } : { ok: true };
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, remoteip: remoteIp }),
    });
    const body = (await response.json()) as { success?: boolean };

    return body.success ? { ok: true } : { ok: false };
  } catch (error) {
    console.error('Turnstile verification failed', { error });
    return { ok: false };
  }
}

async function sendFormEmails(
  payload: PublicFormPayload,
  requestId: string,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env['RESEND_API_KEY'] ?? process.env['resendApiKey'];

  if (!apiKey) {
    return { ok: false, reason: 'missing_resend_api_key' };
  }

  const visitorEmail = payload.fields['email'] || OMAYA_MAIL_REPLY_TO_FALLBACK;
  const visitorName = payload.fields['name'] || 'traveller';
  const label = formLabels[payload.formType];
  const timestamp = new Date().toISOString();
  const internalText = buildInternalText(payload, requestId, timestamp);
  const autoReplyText = buildAutoReplyText(visitorName);

  const internal = await sendResendEmail(apiKey, {
    from: OMAYA_MAIL_FROM,
    to: [OMAYA_MAIL_TO],
    reply_to: visitorEmail,
    subject: `[Omaya Travel] ${label}: ${visitorName}`,
    text: internalText,
    html: textToHtml(internalText),
  });

  if (!internal.ok) {
    return internal;
  }

  return sendResendEmail(apiKey, {
    from: OMAYA_MAIL_FROM,
    to: [visitorEmail],
    reply_to: OMAYA_MAIL_TO,
    subject: 'We received your Omaya Travel enquiry',
    text: autoReplyText,
    html: textToHtml(autoReplyText),
  });
}

async function sendResendEmail(
  apiKey: string,
  body: Record<string, unknown>,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const responseBody = await response.text().catch(() => '');
      const detail = responseBody.replace(/\s+/g, ' ').slice(0, 500);

      return { ok: false, reason: `resend_${response.status}${detail ? `: ${detail}` : ''}` };
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, reason: error instanceof Error ? error.message : 'resend_request_failed' };
  }
}

async function subscribeToMailchimp(
  email: string,
  source: 'home page' | 'popup',
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const apiKey = process.env['MAILCHIMP_API_KEY'];
  const audienceId = process.env['MAILCHIMP_AUDIENCE_ID'];
  const serverPrefix = process.env['MAILCHIMP_SERVER_PREFIX'];

  if (!apiKey || !audienceId || !serverPrefix) {
    return { ok: false, reason: 'missing_mailchimp_configuration' };
  }

  const subscriberHash = createHash('md5').update(email.toLowerCase()).digest('hex');
  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Basic ${Buffer.from(`omaya:${apiKey}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: MAILCHIMP_SUBSCRIBE_STATUS,
        status: MAILCHIMP_SUBSCRIBE_STATUS,
        tags: [source],
      }),
    });

    if (!response.ok) {
      const responseBody = await response.text().catch(() => '');
      const detail = responseBody.replace(/\s+/g, ' ').slice(0, 500);

      return {
        ok: false,
        reason: `mailchimp_${response.status}${detail ? `: ${detail}` : ''}`,
      };
    }

    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      reason: error instanceof Error ? error.message : 'mailchimp_request_failed',
    };
  }
}

function buildInternalText(
  payload: PublicFormPayload,
  requestId: string,
  timestamp: string,
): string {
  return [
    formLabels[payload.formType],
    '',
    `Request ID: ${requestId}`,
    `Submitted: ${timestamp}`,
    `Page: ${payload.meta.pagePath || 'Unknown'}`,
    '',
    ...Object.entries(payload.fields).map(([key, value]) => `${toLabel(key)}: ${value || '-'}`),
  ].join('\n');
}

function buildAutoReplyText(visitorName: string): string {
  return [
    `Hi ${visitorName},`,
    '',
    'Thank you for contacting Omaya Travel. We received your enquiry and will get back to you as soon as possible.',
    '',
    'If you need to add anything in the meantime, you can reply to this email or contact us at info@omayatravel.com.',
    '',
    'Warm regards,',
    'Omaya Travel',
  ].join('\n');
}

function textToHtml(value: string): string {
  return `<p>${escapeHtml(value).replaceAll('\n\n', '</p><p>').replaceAll('\n', '<br>')}</p>`;
}

function apiError(
  requestId: string,
  code: string,
  message: string,
  fields?: Record<string, string>,
): {
  ok: false;
  error: { code: string; message: string; fields?: Record<string, string> };
  requestId: string;
} {
  return {
    ok: false,
    error: fields ? { code, message, fields } : { code, message },
    requestId,
  };
}

function getClientIp(req: express.Request): string {
  const cfIp = req.get('cf-connecting-ip');
  const forwardedFor = req.get('x-forwarded-for')?.split(',')[0]?.trim();

  return cfIp || forwardedFor || req.ip || req.socket.remoteAddress || 'unknown';
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isFormType(value: string): value is FormType {
  return Object.hasOwn(formLabels, value);
}

function stringValue(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function toLabel(value: string): string {
  return value
    .replace(/([A-Z])/g, ' $1')
    .replace(/[-_]/g, ' ')
    .replace(/^./, (letter) => letter.toUpperCase());
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function loadLocalEnv(): void {
  for (const filePath of [
    join(process.cwd(), '.env'),
    join(process.cwd(), 'apps', 'website', '.env'),
    join(process.cwd(), '..', '..', '.env'),
  ]) {
    if (!existsSync(filePath)) {
      continue;
    }

    for (const line of readFileSync(filePath, 'utf8').split(/\r?\n/)) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith('#')) {
        continue;
      }

      const separatorIndex = trimmed.indexOf('=');

      if (separatorIndex <= 0) {
        continue;
      }

      const key = trimmed
        .slice(0, separatorIndex)
        .replace(/^(?:export\s+)?const\s+/, '')
        .trim();
      const rawValue = trimmed.slice(separatorIndex + 1).trim();
      const value = rawValue.replace(/;$/, '').replace(/^['"]|['"]$/g, '');

      process.env[key] ??= value;
    }
  }
}
