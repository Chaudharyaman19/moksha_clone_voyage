"use client";

import { createContext, useContext } from "react";
import { mergeLandingSections, type LandingSectionContent, type LandingSectionItem } from "@/lib/landingContent";
import type { WebsitePageKey } from "@/lib/websiteSettingsApi";

const WebsiteContentContext = createContext<LandingSectionContent[]>(mergeLandingSections());

export function WebsiteContentProvider({
  sections,
  children,
}: {
  sections: LandingSectionContent[];
  children: React.ReactNode;
  page?: WebsitePageKey;
}) {
  return <WebsiteContentContext.Provider value={sections}>{children}</WebsiteContentContext.Provider>;
}

export function useWebsiteSection(key: string) {
  const sections = useContext(WebsiteContentContext);
  return sections.find((section) => section.key === key);
}

export function WebsiteSection({
  name,
  children,
  showIfMissing = false,
}: {
  name: string;
  children: React.ReactNode;
  showIfMissing?: boolean;
}) {
  const section = useWebsiteSection(name);
  // Hide if: section not found (and showIfMissing not set), or explicitly disabled
  if (!section && !showIfMissing) return null;
  if (section?.enabled === false || (section as any)?.visible === false) return null;

  return (
    <div data-website-section={name} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

export function textOrFallback(value: string | undefined, fallback: string, maxLength?: number) {
  const next = value?.trim() || fallback;
  if (!maxLength || next.length <= maxLength) return next;
  const truncated = next
    .slice(0, Math.max(0, maxLength - 3))
    .trimEnd()
    .replace(/[.\u2026]+$/g, "");
  return `${truncated}...`;
}

export function imageOrFallback(value: string | undefined, fallback: string) {
  const source = value?.trim();
  if (!source) return fallback;
  if (source.startsWith("/")) return source;
  try {
    const url = new URL(source);
    return url.protocol === "http:" || url.protocol === "https:" ? source : fallback;
  } catch {
    return fallback;
  }
}

export function itemOrFallback<T extends LandingSectionItem>(items: LandingSectionItem[] | undefined, index: number, fallback: T): T {
  return { ...fallback, ...(items?.[index] ?? {}) };
}
