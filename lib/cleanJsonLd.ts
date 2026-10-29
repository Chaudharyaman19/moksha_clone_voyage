/**
 * Clean and normalize JSON-LD content for both server and client execution.
 * Strips wrapping <script> tags, validates JSON, and sanitizes characters.
 */
export function cleanJsonLdContent(data?: Record<string, unknown> | string | null): string | null {
  if (!data) return null;
  let raw = typeof data === "string" ? data.trim() : JSON.stringify(data);
  if (!raw) return null;

  // Strip wrapping <script ...> and </script> tags if user entered them in admin
  raw = raw.replace(/^<script\b[^>]*>/i, "").replace(/<\/script>$/i, "").trim();

  // If empty after stripping or literal "null" / "{}" / "[]", treat as empty
  if (!raw || raw === "{}" || raw === "[]" || raw.toLowerCase() === "null") {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || (typeof parsed === "object" && Object.keys(parsed).length === 0)) {
      return null;
    }
    return JSON.stringify(parsed).replace(/</g, "\\u003c");
  } catch {
    return raw.replace(/</g, "\\u003c");
  }
}
