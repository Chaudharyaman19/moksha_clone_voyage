/**
 * Google's free "Universal Cross-Platform Maps URL" scheme — just a deep link, not the paid Maps
 * JavaScript/Geocoding API. No API key, no billing account, nothing to configure. Opens Google
 * Maps in the browser on desktop and deep-links into the native app on mobile, which is what most
 * volunteers already have installed — a better fit here than an OpenStreetMap link nobody has an
 * app for.
 */
export function directionsUrl(...parts: (string | undefined)[]): string {
  const query = parts.filter(Boolean).join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
