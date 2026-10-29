// Hosts next/image may optimize — keep in sync with `images.remotePatterns` in next.config.ts.
const OPTIMIZABLE_HOSTS = [/^res\.cloudinary\.com$/, /^images\.pexels\.com$/, /(^|\.)unsplash\.com$/];

/**
 * Whether next/image can optimize this src. Site-relative paths and the configured CDN hosts
 * can; blob:/data: previews and other hosts cannot, and should be rendered with `unoptimized`
 * so they still show instead of failing in /_next/image.
 */
export function isOptimizableSrc(src?: string | null): boolean {
  if (!src) return false;
  if (src.startsWith("/")) return !src.startsWith("//");
  try {
    const url = new URL(src);
    return url.protocol === "https:" && OPTIMIZABLE_HOSTS.some((host) => host.test(url.hostname));
  } catch {
    return false;
  }
}
