import { mergeLandingSections, type LandingSectionContent } from "./landingContent";
import { mergeAboutSections, type AboutSectionContent } from "./aboutContent";
import {
  mergeServicesSections,
  mergeAmbulanceSections,
  mergePanditSections,
  mergeFuneralSections,
  mergeFuneralDecorationSections,
  mergePrayerHallSections,
  mergeSpecialServiceSections,
  mergeCallingRelativesSections,
  mergeHarsevanSections,
  mergeUnclaimedBodySections,
  mergeVolunteerSections,
  mergePartnershipSections,
  mergeCSRSections,
  mergeRequestHelpSections,
  mergeDonationSections,
  mergeContactSections,
  mergeTrackSections,
  mergePrivacySections,
  mergeTermsSections,
  mergeRefundSections,
  mergeConductSections,
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
  ambulancePage?: { sections?: ExtraSectionContent[] };
  panditPage?: { sections?: ExtraSectionContent[] };
  funeralPage?: { sections?: ExtraSectionContent[] };
  funeralDecorationPage?: { sections?: ExtraSectionContent[] };
  prayerHallPage?: { sections?: ExtraSectionContent[] };
  specialServicePage?: { sections?: ExtraSectionContent[] };
  callingRelativesPage?: { sections?: ExtraSectionContent[] };
  harsevanPage?: { sections?: ExtraSectionContent[] };
  unclaimedBodyPage?: { sections?: ExtraSectionContent[] };
  volunteerPage?: { sections?: ExtraSectionContent[] };
  partnershipPage?: { sections?: ExtraSectionContent[] };
  csrPage?: { sections?: ExtraSectionContent[] };
  requestHelpPage?: { sections?: ExtraSectionContent[] };
  donationPage?: { sections?: ExtraSectionContent[] };
  contactPage?: { sections?: ExtraSectionContent[] };
  trackPage?: { sections?: ExtraSectionContent[] };
  privacyPage?: { sections?: ExtraSectionContent[] };
  termsPage?: { sections?: ExtraSectionContent[] };
  refundPage?: { sections?: ExtraSectionContent[] };
  conductPage?: { sections?: ExtraSectionContent[] };
}

export type WebsitePageKey =
  | "landing"
  | "about"
  | "services"
  | "ambulance"
  | "pandit"
  | "funeral"
  | "funeralDecoration"
  | "prayerHall"
  | "specialService"
  | "callingRelatives"
  | "harsevan"
  | "unclaimed-body"
  | "volunteer"
  | "partnership"
  | "csr"
  | "request-help"
  | "donation"
  | "contact"
  | "track"
  | "privacy-policy"
  | "terms"
  | "refund-policy"
  | "code-of-conduct";

export function getMergedWebsiteSections(page: WebsitePageKey, settings?: SettingsResponse) {
  switch (page) {
    case "about":
      return mergeAboutSections(settings?.aboutPage?.sections);
    case "services":
      return mergeServicesSections(settings?.servicesPage?.sections);
    case "ambulance":
      return mergeAmbulanceSections(settings?.ambulancePage?.sections);
    case "pandit":
      return mergePanditSections(settings?.panditPage?.sections);
    case "funeral":
      return mergeFuneralSections(settings?.funeralPage?.sections);
    case "funeralDecoration":
      return mergeFuneralDecorationSections(settings?.funeralDecorationPage?.sections);
    case "prayerHall":
      return mergePrayerHallSections(settings?.prayerHallPage?.sections);
    case "specialService":
      return mergeSpecialServiceSections(settings?.specialServicePage?.sections);
    case "callingRelatives":
      return mergeCallingRelativesSections(settings?.callingRelativesPage?.sections);
    case "harsevan":
      return mergeHarsevanSections(settings?.harsevanPage?.sections);
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
    case "privacy-policy":
      return mergePrivacySections(settings?.privacyPage?.sections);
    case "terms":
      return mergeTermsSections(settings?.termsPage?.sections);
    case "refund-policy":
      return mergeRefundSections(settings?.refundPage?.sections);
    case "code-of-conduct":
      return mergeConductSections(settings?.conductPage?.sections);
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
