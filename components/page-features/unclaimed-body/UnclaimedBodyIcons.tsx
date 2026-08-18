"use client";

import type { ReactElement } from "react";

export type UBSIconName =
  | "Lotus"
  | "ShieldCheck"
  | "FileCheck"
  | "People"
  | "HeartHands"
  | "Ambulance"
  | "Fire"
  | "Ritual"
  | "Priest"
  | "Handshake"
  | "Lock"
  | "Clipboard"
  | "Building"
  | "ArrowRight"
  | "Check"
  | "Info"
  | "Phone";

export function UBSIcon({
  name,
  className = "h-6 w-6",
}: {
  name: UBSIconName;
  className?: string;
}): ReactElement | null {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<UBSIconName, ReactElement> = {
    Lotus: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
        <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
        <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
      </svg>
    ),
    ShieldCheck: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 6 50 13v14c0 13-7 22-18 29-11-7-18-16-18-29V13L32 6Z" />
        <path d="m24 30 6 6 12-14" />
      </svg>
    ),
    FileCheck: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M14 7h29l8 8v42H14Z" /><path d="M43 7v10h8M22 27h18M22 36h13" /><path d="m34 47 4 4 9-10" />
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
    Ambulance: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M8 21h32v25H8ZM40 29h8l8 8v9H40Z" /><circle cx="19" cy="47" r="5" /><circle cx="47" cy="47" r="5" />
        <path d="M20 27v12M14 33h12" />
      </svg>
    ),
    Fire: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 7c9 11 12 18 12 25a12 12 0 0 1-24 0c0-7 4-13 12-25Z" />
        <path d="M32 25c4 5 6 8 6 12a6 6 0 0 1-12 0c0-4 2-7 6-12ZM15 52h34" />
      </svg>
    ),
    Ritual: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M16 43h32M19 43c3 7 8 10 13 10s10-3 13-10" />
        <path d="M32 9c5 7 7 11 7 15a7 7 0 1 1-14 0c0-4 2-8 7-15Z" />
        <circle cx="49" cy="23" r="5" />
      </svg>
    ),
    Priest: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="32" cy="18" r="8" /><path d="M18 54c1-14 5-23 14-23s13 9 14 23M25 31l7 10 7-10M25 47h14" />
      </svg>
    ),
    Handshake: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M7 27 19 18l10 6 7-3 9 6 12-5M8 38l12 8 8-7M56 37 42 47 28 34M23 29l7-5 12 10" />
      </svg>
    ),
    Lock: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <rect x="16" y="28" width="32" height="25" rx="3" /><path d="M23 28v-8a9 9 0 0 1 18 0v8M32 37v7" />
      </svg>
    ),
    Clipboard: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <rect x="14" y="11" width="34" height="43" rx="2" /><path d="M24 11V7h16v4M22 25h18M22 34h18M22 43h10" />
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
    Phone: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M18 8 29 19l-6 8c5 9 10 14 19 19l8-6 11 11-6 8c-2 3-6 4-10 3C25 57 8 40 3 20c-1-4 0-8 3-10Z" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}
