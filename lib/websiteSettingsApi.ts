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
  advancedSeo?: {
    globalHeadCode?: string;
    globalBodyCode?: string;
    defaultOgImage?: string;
    googleSearchConsoleVerification?: string;
    robotsTxt?: string;
    ga4MeasurementId?: string;
    gtmContainerId?: string;
  };
  notFoundPage?: { seo?: any; sections?: any[] };
  landingPage?: { seo?: any; sections?: LandingSectionContent[] };
  aboutPage?: { seo?: any; sections?: AboutSectionContent[] };
  servicesPage?: { seo?: any; sections?: ExtraSectionContent[] };
  ambulancePage?: { seo?: any; sections?: ExtraSectionContent[] };
  panditPage?: { seo?: any; sections?: ExtraSectionContent[] };
  funeralPage?: { seo?: any; sections?: ExtraSectionContent[] };
  funeralDecorationPage?: { seo?: any; sections?: ExtraSectionContent[] };
  prayerHallPage?: { seo?: any; sections?: ExtraSectionContent[] };
  specialServicePage?: { seo?: any; sections?: ExtraSectionContent[] };
  callingRelativesPage?: { seo?: any; sections?: ExtraSectionContent[] };
  harsevanPage?: { seo?: any; sections?: ExtraSectionContent[] };
  unclaimedBodyPage?: { seo?: any; sections?: ExtraSectionContent[] };
  volunteerPage?: { seo?: any; sections?: ExtraSectionContent[] };
  partnershipPage?: { seo?: any; sections?: ExtraSectionContent[] };
  csrPage?: { seo?: any; sections?: ExtraSectionContent[] };
  requestHelpPage?: { seo?: any; sections?: ExtraSectionContent[] };
  donationPage?: { seo?: any; sections?: ExtraSectionContent[] };
  contactPage?: { seo?: any; sections?: ExtraSectionContent[] };
  trackPage?: { seo?: any; sections?: ExtraSectionContent[] };
  privacyPage?: { seo?: any; sections?: ExtraSectionContent[] };
  termsPage?: { seo?: any; sections?: ExtraSectionContent[] };
  refundPage?: { seo?: any; sections?: ExtraSectionContent[] };
  conductPage?: { seo?: any; sections?: ExtraSectionContent[] };
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
  let pageSections;

  switch (page) {
    case "about":
      pageSections = mergeAboutSections(settings?.aboutPage?.sections);
      break;
    case "services":
      pageSections = mergeServicesSections(settings?.servicesPage?.sections);
      break;
    case "ambulance":
      pageSections = mergeAmbulanceSections(settings?.ambulancePage?.sections);
      break;
    case "pandit":
      pageSections = mergePanditSections(settings?.panditPage?.sections);
      break;
    case "funeral":
      pageSections = mergeFuneralSections(settings?.funeralPage?.sections);
      break;
    case "funeralDecoration":
      pageSections = mergeFuneralDecorationSections(settings?.funeralDecorationPage?.sections);
      break;
    case "prayerHall":
      pageSections = mergePrayerHallSections(settings?.prayerHallPage?.sections);
      break;
    case "specialService":
      pageSections = mergeSpecialServiceSections(settings?.specialServicePage?.sections);
      break;
    case "callingRelatives":
      pageSections = mergeCallingRelativesSections(settings?.callingRelativesPage?.sections);
      break;
    case "harsevan":
      pageSections = mergeHarsevanSections(settings?.harsevanPage?.sections);
      break;
    case "unclaimed-body":
      pageSections = mergeUnclaimedBodySections(settings?.unclaimedBodyPage?.sections);
      break;
    case "volunteer":
      pageSections = mergeVolunteerSections(settings?.volunteerPage?.sections);
      break;
    case "partnership":
      pageSections = mergePartnershipSections(settings?.partnershipPage?.sections);
      break;
    case "csr":
      pageSections = mergeCSRSections(settings?.csrPage?.sections);
      break;
    case "request-help":
      pageSections = mergeRequestHelpSections(settings?.requestHelpPage?.sections);
      break;
    case "donation":
      pageSections = mergeDonationSections(settings?.donationPage?.sections);
      break;
    case "contact":
      pageSections = mergeContactSections(settings?.contactPage?.sections);
      break;
    case "track":
      pageSections = mergeTrackSections(settings?.trackPage?.sections);
      break;
    case "privacy-policy":
      pageSections = mergePrivacySections(settings?.privacyPage?.sections);
      break;
    case "terms":
      pageSections = mergeTermsSections(settings?.termsPage?.sections);
      break;
    case "refund-policy":
      pageSections = mergeRefundSections(settings?.refundPage?.sections);
      break;
    case "code-of-conduct":
      pageSections = mergeConductSections(settings?.conductPage?.sections);
      break;
    case "landing":
    default:
      return mergeLandingSections(settings?.landingPage?.sections);
  }

  // Inject global sections (like footer and topbar) from the landing page so they are available on all pages
  const landingSections = mergeLandingSections(settings?.landingPage?.sections);
  const globalSections = landingSections.filter((s) => s.key === "footer" || s.key === "topbar" || s.key === "navbar");
  
  return [...pageSections, ...globalSections];
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
