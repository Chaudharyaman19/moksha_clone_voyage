export type AnalyticsEvent =
  | "donate_click"
  | "donation_started"
  | "donation_completed"
  | "donation_failed"
  | "request_help_click"
  | "request_help_submit"
  | "contact_form_submit"
  | "volunteer_form_submit"
  | "newsletter_subscribe"
  | "phone_click"
  | "whatsapp_click"
  | "email_click"
  | "blog_click"
  | "service_cta_click"
  | "social_click"
  | "enquiry_click";

export interface AnalyticsParams {
  button_name?: string;
  form_name?: string;
  service_name?: string;
  blog_slug?: string;
  link_url?: string;
  location?: string;
  method?: string;
  value?: number;
  currency?: string;
  status?: string;
}

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const ALLOWED_KEYS: Array<keyof AnalyticsParams> = [
  "button_name",
  "form_name",
  "service_name",
  "blog_slug",
  "link_url",
  "location",
  "method",
  "value",
  "currency",
  "status",
];

const PII_PATTERN = /[\w.+-]+@[\w-]+\.[\w.]+|\b(?:\+?\d[ -]?){7,}\b/;
function sanitize(params: AnalyticsParams): Record<string, string | number> {
  const payload: Record<string, string | number> = {};

  for (const key of ALLOWED_KEYS) {
    const value = params[key];
    if (value == null) continue;

    if (typeof value === "number") {
      if (Number.isFinite(value)) payload[key] = value;
      continue;
    }

    const text = String(value).trim();
    if (!text || PII_PATTERN.test(text)) continue;
    payload[key] = text.slice(0, 100);
  }

  return payload;
}

export function trackEvent(eventName: AnalyticsEvent, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;

  const payload = {
    ...sanitize(params),
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
  };

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
      return;
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...payload });
    }
  } catch {
    // Analytics must never break a user journey.
  }
}
