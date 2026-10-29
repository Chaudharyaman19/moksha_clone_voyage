const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";
const SHARE_WINDOW_MS = 3000;

let shared: Promise<{ data?: any } | null> | null = null;

// Navbar, Footer, Sideicon and the content provider all need /settings on mount. Share one request among them instead of each downloading the full payload.
export function fetchSettingsJson(): Promise<{ data?: any } | null> {
  if (!shared) {
    shared = fetch(`${API_BASE_URL}/settings`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null);
    window.setTimeout(() => {
      shared = null;
    }, SHARE_WINDOW_MS);
  }
  return shared;
}
