export type PublicFormType = 'contact' | 'faq-question' | 'enquire-now' | 'private-tour-planning';

export interface PublicFormSubmitPayload {
  formType: PublicFormType;
  fields: Record<string, string>;
  honeypot?: string;
  turnstileToken?: string;
}

export interface PublicFormSubmitResult {
  ok: boolean;
  message?: string;
  fields?: Record<string, string>;
}

export interface NewsletterSubmitPayload {
  email: string;
  source: 'home page' | 'popup';
  honeypot?: string;
}

interface PublicFormApiResponse {
  ok?: boolean;
  error?: {
    message?: string;
    fields?: Record<string, string>;
  };
}

const FORM_CONTRACT_VERSION = 'public-forms.v1';
const DEFAULT_ERROR =
  'We could not send your request right now. Please try again or email info@omayatravel.com.';

export async function submitPublicForm(
  payload: PublicFormSubmitPayload,
): Promise<PublicFormSubmitResult> {
  try {
    const response = await fetch('/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contractVersion: FORM_CONTRACT_VERSION,
        formType: payload.formType,
        fields: payload.fields,
        meta: {
          pagePath: window.location.pathname,
          honeypot: payload.honeypot ?? '',
          turnstileToken: payload.turnstileToken ?? '',
        },
      }),
    });
    const body = (await response.json().catch(() => ({}))) as PublicFormApiResponse;

    if (!response.ok || !body.ok) {
      return {
        ok: false,
        message: body.error?.message ?? DEFAULT_ERROR,
        fields: body.error?.fields,
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, message: DEFAULT_ERROR };
  }
}

export async function submitNewsletter(
  payload: NewsletterSubmitPayload,
): Promise<PublicFormSubmitResult> {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: payload.email,
        source: payload.source,
        website: payload.honeypot ?? '',
      }),
    });
    const body = (await response.json().catch(() => ({}))) as PublicFormApiResponse;

    if (!response.ok || !body.ok) {
      return {
        ok: false,
        message: body.error?.message ?? 'We could not subscribe you right now. Please try again.',
        fields: body.error?.fields,
      };
    }

    return { ok: true };
  } catch {
    return { ok: false, message: 'We could not subscribe you right now. Please try again.' };
  }
}
