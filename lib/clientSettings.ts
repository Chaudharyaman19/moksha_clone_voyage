const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== "undefined" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1"
    ? "https://api.mokshasewa.org/api/v1"
    : process.env.NODE_ENV === "production"
      ? "https://api.mokshasewa.org/api/v1"
      : "http://localhost:5000/api/v1");
const SHARE_WINDOW_MS = 3000;

let shared: Promise<{ data?: any } | null> | null = null;

// Navbar, Footer, Sideicon and the content provider all need /settings on mount. Share one request among them instead of each downloading the full payload.
export function fetchSettingsJson(force = false): Promise<{ data?: any } | null> {
  if (force || !shared) {
    const timestamp = Date.now();
    const req = fetch(`${API_BASE_URL}/settings?_t=${timestamp}`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
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
