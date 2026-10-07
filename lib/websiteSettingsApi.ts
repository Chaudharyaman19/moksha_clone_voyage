import { mergeLandingSections, type LandingSectionContent } from "./landingContent";
import { mergeAboutSections, type AboutSectionContent } from "./aboutContent";
import { notFound } from "next/navigation";
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
  notFoundPage?: { enabled?: boolean; seo?: any; sections?: any[] };
  landingPage?: { enabled?: boolean; seo?: any; sections?: LandingSectionContent[] };
  aboutPage?: { enabled?: boolean; seo?: any; sections?: AboutSectionContent[] };
  servicesPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  ambulancePage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  panditPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  funeralPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  funeralDecorationPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  prayerHallPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  specialServicePage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  callingRelativesPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  harsevanPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  unclaimedBodyPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  volunteerPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  partnershipPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  csrPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  requestHelpPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  donationPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  contactPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  trackPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  privacyPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  termsPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  refundPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  conductPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  careersPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  careersSubmitResumePage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  careersApplicationFormPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  careersReviewSubmitPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
  careersUploadCvPage?: { enabled?: boolean; seo?: any; sections?: ExtraSectionContent[] };
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
  | "code-of-conduct"
  | "careers";

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

export function isSettingsPageDisabled(
  settings: SettingsResponse | undefined,
  configKey: keyof SettingsResponse,
): boolean {
  const pageConfig = settings?.[configKey] as { enabled?: boolean } | undefined;
  return Boolean(pageConfig && pageConfig.enabled === false);
}

export function isPageDisabled(page: WebsitePageKey, settings?: SettingsResponse): boolean {
  if (!settings) return false;
  
  const pageKeyMap: Record<WebsitePageKey, keyof SettingsResponse> = {
    "landing": "landingPage",
    "about": "aboutPage",
    "services": "servicesPage",
    "ambulance": "ambulancePage",
    "pandit": "panditPage",
    "funeral": "funeralPage",
    "funeralDecoration": "funeralDecorationPage",
    "prayerHall": "prayerHallPage",
    "specialService": "specialServicePage",
    "callingRelatives": "callingRelativesPage",
    "harsevan": "harsevanPage",
    "unclaimed-body": "unclaimedBodyPage",
    "volunteer": "volunteerPage",
    "partnership": "partnershipPage",
    "csr": "csrPage",
    "request-help": "requestHelpPage",
    "donation": "donationPage",
    "contact": "contactPage",
    "track": "trackPage",
    "privacy-policy": "privacyPage",
    "terms": "termsPage",
    "refund-policy": "refundPage",
    "code-of-conduct": "conductPage",
    "careers": "careersPage",
  };

  const key = pageKeyMap[page];
  return isSettingsPageDisabled(settings, key);
}

export async function getPageSections(page: WebsitePageKey) {
  const settings = await getWebsiteSettings();
  if (isPageDisabled(page, settings)) {
    notFound();
  }
  return getMergedWebsiteSections(page, settings);
}

export async function getWebsiteSections(): Promise<LandingSectionContent[]> {
  return getPageSections("landing") as Promise<LandingSectionContent[]>;
}

export async function getAboutSections(): Promise<AboutSectionContent[]> {
  return getPageSections("about") as Promise<AboutSectionContent[]>;
}
