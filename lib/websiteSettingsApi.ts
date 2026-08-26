import { mergeLandingSections, type LandingSectionContent } from "./landingContent";
import { mergeAboutSections, type AboutSectionContent } from "./aboutContent";
import {
  mergeServicesSections,
  mergeUnclaimedBodySections,
  mergeVolunteerSections,
  mergePartnershipSections,
  mergeCSRSections,
  mergeRequestHelpSections,
  mergeDonationSections,
  mergeContactSections,
  mergeTrackSections,
  type ExtraSectionContent,
} from "./extraPagesContent";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

interface SettingsResponse {
  landingPage?: { sections?: LandingSectionContent[] };
  aboutPage?: { sections?: AboutSectionContent[] };
  servicesPage?: { sections?: ExtraSectionContent[] };
  unclaimedBodyPage?: { sections?: ExtraSectionContent[] };
  volunteerPage?: { sections?: ExtraSectionContent[] };
  partnershipPage?: { sections?: ExtraSectionContent[] };
  csrPage?: { sections?: ExtraSectionContent[] };
  requestHelpPage?: { sections?: ExtraSectionContent[] };
  donationPage?: { sections?: ExtraSectionContent[] };
  contactPage?: { sections?: ExtraSectionContent[] };
  trackPage?: { sections?: ExtraSectionContent[] };
}

export type WebsitePageKey =
  | "landing"
  | "about"
  | "services"
  | "unclaimed-body"
  | "volunteer"
  | "partnership"
  | "csr"
  | "request-help"
  | "donation"
  | "contact"
  | "track";

export function getMergedWebsiteSections(page: WebsitePageKey, settings?: SettingsResponse) {
  switch (page) {
    case "about":
      return mergeAboutSections(settings?.aboutPage?.sections);
    case "services":
      return mergeServicesSections(settings?.servicesPage?.sections);
    case "unclaimed-body":
      return mergeUnclaimedBodySections(settings?.unclaimedBodyPage?.sections);
    case "volunteer":
      return mergeVolunteerSections(settings?.volunteerPage?.sections);
    case "partnership":
      return mergePartnershipSections(settings?.partnershipPage?.sections);
    case "csr":
      return mergeCSRSections(settings?.csrPage?.sections);
    case "request-help":
      return mergeRequestHelpSections(settings?.requestHelpPage?.sections);
    case "donation":
      return mergeDonationSections(settings?.donationPage?.sections);
    case "contact":
      return mergeContactSections(settings?.contactPage?.sections);
    case "track":
      return mergeTrackSections(settings?.trackPage?.sections);
    case "landing":
    default:
      return mergeLandingSections(settings?.landingPage?.sections);
  }
}

export async function getWebsiteSettings(): Promise<SettingsResponse | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/settings`, { cache: "no-store" });
    if (!response.ok) return undefined;
    const body = (await response.json()) as ApiEnvelope<SettingsResponse>;
    return body.data;
  } catch {
    return undefined;
  }
}

export async function getPageSections(page: WebsitePageKey) {
  const settings = await getWebsiteSettings();
  return getMergedWebsiteSections(page, settings);
}

export async function getWebsiteSections(): Promise<LandingSectionContent[]> {
  return getPageSections("landing") as Promise<LandingSectionContent[]>;
}

export async function getAboutSections(): Promise<AboutSectionContent[]> {
  return getPageSections("about") as Promise<AboutSectionContent[]>;
}
