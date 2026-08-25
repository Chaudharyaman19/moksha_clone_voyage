"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { mergeLandingSections, type LandingSectionContent, type LandingSectionItem } from "@/lib/landingContent";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";
const WebsiteContentContext = createContext<LandingSectionContent[]>(mergeLandingSections());

async function fetchLatestSections() {
  try {
    const response = await fetch(`${API_BASE_URL}/settings`, { cache: "no-store" });
    if (!response.ok) return null;
    const body = (await response.json()) as { data?: { landingPage?: { sections?: LandingSectionContent[] } } };
    return mergeLandingSections(body.data?.landingPage?.sections);
  } catch {
    return null;
  }
}

export function WebsiteContentProvider({
  sections,
  children,
}: {
  sections: LandingSectionContent[];
  children: React.ReactNode;
}) {
  const [latestSections, setLatestSections] = useState(sections);

  useEffect(() => {
    let cancelled = false;
    const sync = async () => {
      const latest = await fetchLatestSections();
      if (!cancelled && latest) setLatestSections(latest);
    };

    const interval = window.setInterval(sync, 5000);
    window.addEventListener("focus", sync);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.removeEventListener("focus", sync);
    };
  }, []);

  return <WebsiteContentContext.Provider value={latestSections}>{children}</WebsiteContentContext.Provider>;
}

export function useWebsiteSection(key: string) {
  const sections = useContext(WebsiteContentContext);
  return sections.find((section) => section.key === key);
}

export function WebsiteSection({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const section = useWebsiteSection(name);
  if (section?.enabled === false) return null;

  return (
    <div data-website-section={name} style={{ display: "contents" }}>
      {children}
    </div>
  );
}

export function textOrFallback(value: string | undefined, fallback: string, maxLength?: number) {
  const next = value?.trim() || fallback;
  const fallbackText = fallback.trim();
  if (next.startsWith(fallbackText) && next.slice(fallbackText.length).trim()) {
    const truncatedFallback = fallbackText.trimEnd().replace(/[.\u2026]+$/g, "");
    return `${truncatedFallback}...`;
  }
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
