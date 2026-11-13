"use client";

import { defaultContactSections } from "@/lib/extraPagesContent";
import { defaultLandingSections } from "@/lib/landingContent";
import { imageOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

/**
 * Reads the labelled `fields` of a Contact-page section that the admin edits
 * (Website → Contact Page). An empty / missing value falls back to the built-in default,
 * so the page never renders blank.
 */
export function useContactFields(sectionKey: string) {
  const section = useWebsiteSection(sectionKey);
  const defaults = [...defaultContactSections, ...defaultLandingSections].find((s) => s.key === sectionKey)?.fields ?? [];

  const get = (key: string): string => {
    const saved = section?.fields?.find((f) => f.key === key)?.value;
    if (saved && saved.trim()) return saved;
    return defaults.find((f) => f.key === key)?.value ?? "";
  };
  /** Text split into its lines (one per newline), empty lines dropped. */
  const lines = (key: string): string[] =>
    get(key)
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  const image = (key: string): string => {
    const fallback = defaults.find((f) => f.key === key)?.value ?? "";
    return imageOrFallback(section?.fields?.find((f) => f.key === key)?.value, fallback);
  };
  return { get, lines, image };
}

/** "Contact Us" -> ["Contact", "Us"]: the last word is highlighted in orange on the page. */
export function splitLastWord(text: string): [string, string] {
  const trimmed = text.trim();
  const i = trimmed.lastIndexOf(" ");
  return i === -1 ? ["", trimmed] : [trimmed.slice(0, i), trimmed.slice(i + 1)];
}
