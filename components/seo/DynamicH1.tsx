import { getWebsiteSettings, type WebsitePageKey } from "@/lib/websiteSettingsApi";

interface DynamicH1Props {
  pageKey: WebsitePageKey;
  fallback: string;
}

const pageFieldMap: Record<WebsitePageKey, string> = {
  landing: "landingPage",
  about: "aboutPage",
  services: "servicesPage",
  ambulance: "ambulancePage",
  pandit: "panditPage",
  funeral: "funeralPage",
  funeralDecoration: "funeralDecorationPage",
  prayerHall: "prayerHallPage",
  specialService: "specialServicePage",
  callingRelatives: "callingRelativesPage",
  harsevan: "harsevanPage",
  "unclaimed-body": "unclaimedBodyPage",
  volunteer: "volunteerPage",
  partnership: "partnershipPage",
  csr: "csrPage",
  "request-help": "requestHelpPage",
  donation: "donationPage",
  contact: "contactPage",
  track: "trackPage",
  "privacy-policy": "privacyPage",
  terms: "termsPage",
  "refund-policy": "refundPage",
  "code-of-conduct": "conductPage",
  careers: "careersPage",
  disclaimer: "disclaimerPage",
};

export default function DynamicH1({ pageKey, fallback }: DynamicH1Props) {
  // Server-rendered <h1> so every page has exactly one H1 in the initial HTML.
  // Client-side component headings should use <h2> (or lower) to avoid duplicate H1s.
  return <h1 className="font-sans text-[30px] font-normal leading-[1.1] text-[#2B251F]">{fallback}</h1>;
}
