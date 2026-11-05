"use client";

import { fetchSettingsJson } from "@/lib/clientSettings";
import { createContext, useEffect, useState, useContext } from "react";
import { getMergedWebsiteSections, type WebsitePageKey } from "@/lib/websiteSettingsApi";
import { mergeLandingSections, type LandingSectionContent, type LandingSectionItem } from "@/lib/landingContent";

const WebsiteContentContext = createContext<LandingSectionContent[]>(mergeLandingSections());

async function fetchLatestSections(page: WebsitePageKey, force = false) {
  try {
    const body = (await fetchSettingsJson(force)) as { data?: Record<string, { sections?: LandingSectionContent[] }> } | null;
    if (!body) return null;
    return getMergedWebsiteSections(page, body.data as never);
  } catch {
    return null;
  }
}

export function WebsiteContentProvider({
  sections,
  children,
  page = "landing",
}: {
  sections: LandingSectionContent[];
  children: React.ReactNode;
  page?: WebsitePageKey;
}) {
  const [latestSections, setLatestSections] = useState(sections);

  useEffect(() => {
    let cancelled = false;

    const sync = async (force = false) => {
      const latest = await fetchLatestSections(page, force);
      if (!cancelled && latest) {
        setLatestSections((prev) => {
          // If content didn't change, preserve previous reference to avoid unnecessary re-renders
          if (JSON.stringify(prev) === JSON.stringify(latest)) {
            return prev;
          }
          return latest;
        });
      }
    };

    // Initial sync
    sync(true);

    // Periodic live-sync every 3 seconds so banner changes reflect without page refresh
    const pollTimer = setInterval(() => {
      sync(true);
    }, 3000);

    // Immediate sync when tab gets focused or becomes visible
    const handleFocus = () => sync(true);
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        sync(true);
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelled = true;
      clearInterval(pollTimer);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [page]);

  return <WebsiteContentContext.Provider value={latestSections}>{children}</WebsiteContentContext.Provider>;
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
