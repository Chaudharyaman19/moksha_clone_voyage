"use client";

/**
 * DynamicCanonical
 *
 * In Next.js 15+ & React 19, canonical URLs and Open Graph tags are hoisted and
 * managed natively by React in Server Components through `generateMetadata`.
 * Direct DOM manipulation (such as `el.remove()`) on `<head>` elements triggers
 * React 19 reconciliation errors ("Cannot read properties of null (reading 'removeChild')").
 * To prevent this runtime crash and ensure smooth navigation across all pages,
 * we keep this component safe and passive.
 */
export default function DynamicCanonical() {
  return null;
}
