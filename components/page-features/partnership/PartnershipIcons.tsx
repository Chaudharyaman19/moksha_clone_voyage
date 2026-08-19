"use client";

import type { ReactElement } from "react";

export type PartnershipIconName =
  | "Lotus"
  | "Handshake"
  | "ShieldCheck"
  | "People"
  | "HeartHands"
  | "Hospital"
  | "Community"
  | "Gear"
  | "Volunteer"
  | "Chat"
  | "Search"
  | "Clipboard"
  | "Lock"
  | "Building"
  | "ArrowRight"
  | "Check"
  | "Info";

export function PartnershipIcon({
  name,
  className = "h-6 w-6",
}: {
  name: PartnershipIconName;
  className?: string;
}): ReactElement | null {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<PartnershipIconName, ReactElement> = {
    Lotus: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
        <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
        <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
      </svg>
    ),
    Handshake: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M7 27 19 18l10 6 7-3 9 6 12-5M8 38l12 8 8-7M56 37 42 47 28 34M23 29l7-5 12 10" />
      </svg>
    ),
    ShieldCheck: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 6 50 13v14c0 13-7 22-18 29-11-7-18-16-18-29V13L32 6Z" />
        <path d="m24 30 6 6 12-14" />
      </svg>
    ),
    People: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="32" cy="19" r="6" /><circle cx="17" cy="25" r="5" /><circle cx="47" cy="25" r="5" />
        <path d="M21 51c1-11 5-17 11-17s10 6 11 17M7 50c1-8 4-13 10-13 3 0 5 1 7 3M57 50c-1-8-4-13-10-13-3 0-5 1-7 3" />
      </svg>
    ),
    HeartHands: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M25 16c0-4 4-6 7-2 3-4 7-2 7 2 0 4-4 7-7 10-3-3-7-6-7-10Z" />
        <path d="M8 40c6-1 10 1 15 6l8 8M56 40c-6-1-10 1-15 6l-8 8M8 38v17M56 38v17" />
      </svg>
    ),
    Hospital: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M10 54V18h44v36M8 54h48M19 54V31h26v23" />
        <path d="M32 9v13M25 15h14M18 25h6M40 25h6" />
      </svg>
    ),
    Community: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="20" cy="24" r="6" /><circle cx="44" cy="24" r="6" /><circle cx="32" cy="17" r="6" />
        <path d="M8 53c1-10 5-16 12-16M56 53c-1-10-5-16-12-16M20 53c1-13 5-20 12-20s11 7 12 20" />
      </svg>
    ),
    Gear: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="32" cy="32" r="9" />
        <path d="m32 7 4 7 8 1 5 7-3 7 3 7-5 7-8 1-4 7-8-1-5-6-8-2-3-8 3-7-3-8 6-6 8 1 5-6Z" />
      </svg>
    ),
    Volunteer: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="20" cy="21" r="6" /><circle cx="44" cy="21" r="6" />
        <path d="M8 51c1-11 5-17 12-17M56 51c-1-11-5-17-12-17" />
        <path d="M25 41c4-5 6-7 7-7s3 2 7 7M26 46h12" />
      </svg>
    ),
    Chat: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M9 13h46v31H28L16 53v-9H9Z" /><path d="M18 26h28M18 34h19" />
      </svg>
    ),
    Search: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="28" cy="28" r="17" /><path d="m41 41 14 14" /><circle cx="28" cy="24" r="5" /><path d="M18 38c2-7 5-10 10-10s8 3 10 10" />
      </svg>
    ),
    Clipboard: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <rect x="14" y="11" width="34" height="43" rx="2" /><path d="M24 11V7h16v4M22 25h18M22 34h18M22 43h10" />
      </svg>
    ),
    Lock: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <rect x="16" y="28" width="32" height="25" rx="3" /><path d="M23 28v-8a9 9 0 0 1 18 0v8M32 37v7" />
      </svg>
    ),
    Building: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="m8 22 24-14 24 14H8ZM12 25h40M12 52h40M16 25v27M28 25v27M40 25v27M52 25v27M8 56h48" />
      </svg>
    ),
    ArrowRight: (
      <svg className={className} viewBox="0 0 24 24" {...common}>
        <path d="M4 12h15M14 7l5 5-5 5" />
      </svg>
    ),
    Check: (
      <svg className={className} viewBox="0 0 24 24" {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    Info: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="32" cy="32" r="24" /><path d="M32 28v17M32 18h.01" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}
