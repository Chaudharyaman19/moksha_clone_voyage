
import type { ReactElement } from "react";

export type CSRIconName =
  | "Lotus"
  | "HeartHands"
  | "Handshake"
  | "People"
  | "ShieldCheck"
  | "ClipboardCheck"
  | "Target"
  | "Report"
  | "Ambulance"
  | "Fire"
  | "Ritual"
  | "Family"
  | "Institution"
  | "DocumentSearch"
  | "Folder"
  | "Scale"
  | "Form"
  | "CheckCircle"
  | "ArrowRight";

export function CSRIcon({
  name,
  className = "h-6 w-6",
}: {
  name: CSRIconName;
  className?: string;
}): ReactElement | null {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<CSRIconName, ReactElement> = {
    Lotus: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
        <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8" />
        <path d="M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
        <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
      </svg>
    ),
    HeartHands: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M25 16c0-4 4-6 7-2 3-4 7-2 7 2 0 4-4 7-7 10-3-3-7-6-7-10Z" />
        <path d="M8 40c6-1 10 1 15 6l8 8M56 40c-6-1-10 1-15 6l-8 8M8 38v17M56 38v17" />
      </svg>
    ),
    Handshake: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M7 27 19 18l10 6 7-3 9 6 12-5M8 38l12 8 8-7M56 37 42 47 28 34M23 29l7-5 12 10" />
      </svg>
    ),
    People: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="32" cy="19" r="6" /><circle cx="17" cy="25" r="5" /><circle cx="47" cy="25" r="5" />
        <path d="M21 51c1-11 5-17 11-17s10 6 11 17M7 50c1-8 4-13 10-13 3 0 5 1 7 3M57 50c-1-8-4-13-10-13-3 0-5 1-7 3" />
      </svg>
    ),
    ShieldCheck: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 6 50 13v14c0 13-7 22-18 29-11-7-18-16-18-29V13L32 6Z" />
        <path d="m24 30 6 6 12-14" />
      </svg>
    ),
    ClipboardCheck: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <rect x="14" y="11" width="34" height="43" rx="2" /><path d="M24 11V7h16v4M22 25h18M22 34h18M22 43h10" />
        <circle cx="45" cy="46" r="7" /><path d="m42 46 2 2 4-5" />
      </svg>
    ),
    Target: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="30" cy="34" r="20" /><circle cx="30" cy="34" r="12" /><circle cx="30" cy="34" r="4" />
        <path d="m34 30 19-19M44 11h9v9" />
      </svg>
    ),
    Report: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M12 54V32M24 54V23M36 54V37M48 54V14M8 54h48" />
        <path d="m13 27 11-8 12 8 15-16" />
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
        <path d="M32 25c4 5 6 8 6 12a6 6 0 0 1-12 0c0-4 2-7 6-12ZM15 52h34M20 47l24 10M44 47 20 57" />
      </svg>
    ),
    Ritual: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M16 43h32M19 43c3 7 8 10 13 10s10-3 13-10" />
        <path d="M32 9c5 7 7 11 7 15a7 7 0 1 1-14 0c0-4 2-8 7-15Z" />
        <circle cx="48" cy="23" r="5" /><path d="m48 14 2 4 4 1-3 3 1 5-4-2-4 2 1-5-3-3 4-1Z" />
      </svg>
    ),
    Family: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="22" cy="23" r="6" /><circle cx="42" cy="23" r="6" /><path d="M9 51c1-11 5-17 13-17M55 51c-1-11-5-17-13-17" />
        <path d="M32 43c-4-5-7-7-11-7M32 43c4-5 7-7 11-7" />
      </svg>
    ),
    Institution: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="m8 22 24-14 24 14H8ZM12 25h40M12 52h40M16 25v27M28 25v27M40 25v27M52 25v27M8 56h48" />
      </svg>
    ),
    DocumentSearch: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M14 6h27l9 9v39H14Z" /><path d="M41 6v10h9M22 25h17M22 34h11" /><circle cx="43" cy="43" r="8" /><path d="m49 49 7 7" />
      </svg>
    ),
    Folder: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M8 18h19l5 6h24v28H8Z" />
      </svg>
    ),
    Scale: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M32 8v44M17 15h30M32 15 17 22M32 15l15 7M10 42h14M40 42h14M17 22l-7 20M17 22l7 20M47 22l-7 20M47 22l7 20M22 55h20" />
      </svg>
    ),
    Form: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <path d="M14 7h31l8 8v42H14Z" /><path d="M45 7v10h8M22 26h21M22 35h21M22 44h14" />
        <path d="m37 48 13-13 5 5-13 13-7 2Z" />
      </svg>
    ),
    CheckCircle: (
      <svg className={className} viewBox="0 0 64 64" {...common}>
        <circle cx="32" cy="32" r="23" /><path d="m21 32 7 7 15-16" />
      </svg>
    ),
    ArrowRight: (
      <svg className={className} viewBox="0 0 24 24" {...common}>
        <path d="M4 12h15M14 7l5 5-5 5" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}
