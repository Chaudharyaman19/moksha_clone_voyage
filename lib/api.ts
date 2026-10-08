const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

export class ApiRequestError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

interface ApiEnvelope<T> {
  success: boolean;
  message: string;
  data: T;
}

let accessToken: string | null = null;
let refreshToken: string | null = null;
let onTokensRefreshed: ((tokens: { accessToken: string; refreshToken: string }) => void) | null = null;
let onRefreshFailed: (() => void) | null = null;

export function setTokens(tokens: { accessToken: string | null; refreshToken: string | null }): void {
  accessToken = tokens.accessToken;
  refreshToken = tokens.refreshToken;
}

export function setTokenRefreshHandlers(handlers: {
  onRefreshed: (tokens: { accessToken: string; refreshToken: string }) => void;
  onFailed: () => void;
}): void {
  onTokensRefreshed = handlers.onRefreshed;
  onRefreshFailed = handlers.onFailed;
}

async function refreshAccessToken(): Promise<boolean> {
  if (!refreshToken) return false;

  try {
    const res = await fetch(`${API_BASE_URL}/auth/refresh-token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    const body: ApiEnvelope<{ accessToken: string; refreshToken: string }> = await res.json();
    if (!res.ok || !body.success) return false;

    setTokens(body.data);
    onTokensRefreshed?.(body.data);
    return true;
  } catch {
    return false;
  }
}

async function request<T>(path: string, options?: RequestInit, isRetry = false): Promise<T> {
  // FormData bodies must NOT get an explicit Content-Type — the browser sets one itself with the
  // correct multipart boundary, which we can't reproduce by hand.
  const isFormData = options?.body instanceof FormData;
  const headers: Record<string, string> = {
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(options?.headers as Record<string, string> | undefined),
  };
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

  const res = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });

  if (res.status === 401 && !isRetry && path !== "/auth/refresh-token") {
    const refreshed = await refreshAccessToken();
    if (refreshed) return request<T>(path, options, true);
    onRefreshFailed?.();
  }

  const body: ApiEnvelope<T> = await res.json();

  if (!res.ok || !body.success) {
    throw new ApiRequestError(res.status, body.message || "Something went wrong. Please try again.");
  }

  return body.data;
}

/** For endpoints that return raw HTML (not the {success,message,data} envelope) — e.g. the
 * receipt view, which needs the Authorization header a plain <a href> navigation can't send. */
async function requestHtml(path: string): Promise<string> {
  const headers: Record<string, string> = {};
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;

  const res = await fetch(`${API_BASE_URL}${path}`, { headers });
  if (!res.ok) throw new ApiRequestError(res.status, "Could not load this document.");
  return res.text();
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, payload?: unknown) =>
    request<T>(path, { method: "POST", body: payload !== undefined ? JSON.stringify(payload) : undefined }),
  put: <T>(path: string, payload?: unknown) =>
    request<T>(path, { method: "PUT", body: payload !== undefined ? JSON.stringify(payload) : undefined }),
  patch: <T>(path: string, payload?: unknown) =>
    request<T>(path, { method: "PATCH", body: payload !== undefined ? JSON.stringify(payload) : undefined }),
  postForm: <T>(path: string, formData: FormData) => request<T>(path, { method: "POST", body: formData }),
  getHtml: requestHtml,
};

/** OTP verification used by the careers phone-verification modal.
 * Responses keep the raw `{ success, message, msg }` shape (no envelope unwrapping) because the
 * modal reads `success`/`message` itself and treats a non-2xx as a soft, user-visible failure. */
async function verifyCall(endpoint: string, payload: Record<string, unknown>) {
  try {
    const response = await fetch(`${API_BASE_URL}/verify${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch {
      return { success: false, message: `HTTP ${response.status}: ${text.substring(0, 50)}` };
    }
  } catch (e) {
    return { success: false, message: (e as Error)?.message || "Verification service is unavailable." };
  }
}

export const verifyApi = {
  sendEmailOtp: (email: string, profile = "SPEAKER", name = "", eventName = process.env.NEXT_PUBLIC_EVENT_NAME || "MokshaSewa") =>
    verifyCall("/send-email-otp", { email, profile, name: name || null, eventName }),
  verifyEmailOtp: (email: string, otp: string) => verifyCall("/verify-email-otp", { email, otp }),
  sendPhoneOtp: (phone: string, profile = "CONTACT", name = "", eventName = process.env.NEXT_PUBLIC_EVENT_NAME || "MokshaSewa") =>
    verifyCall("/send-phone-otp", { phone, profile, name: name || null, eventName }),
  verifyPhoneOtp: (phone: string, otp: string) => verifyCall("/verify-phone-otp", { phone, otp }),
};
