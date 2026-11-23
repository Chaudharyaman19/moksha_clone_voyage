function getClientApiUrl(): string {
  if (typeof window !== "undefined") {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return process.env.NEXT_PUBLIC_API_URL || "http://localhost:5003/api/v1";
    }
    return process.env.NEXT_PUBLIC_API_URL || "https://api.mokshasewa.org/api/v1";
  }
  return process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === "production" ? "https://api.mokshasewa.org/api/v1" : "http://localhost:5003/api/v1");
}

const API_BASE_URL = getClientApiUrl();
const SHARE_WINDOW_MS = 3000;

let shared: Promise<{ data?: any } | null> | null = null;

// Navbar, Footer, Sideicon and the content provider all need /settings on mount. Share one request among them instead of each downloading the full payload.
export function fetchSettingsJson(force = false): Promise<{ data?: any } | null> {
  if (force || !shared) {
    const timestamp = Date.now();
    const primaryUrl = `${API_BASE_URL}/settings?_t=${timestamp}`;

    const req = fetch(primaryUrl, { cache: "no-store" })
      .then(async (res) => {
        if (res.ok) return res.json();
        return null;
      })
      .catch(() => null);

    if (!force) {
      shared = req;
      window.setTimeout(() => {
        shared = null;
      }, SHARE_WINDOW_MS);
    }
    return req;
  }
  return shared;
}
