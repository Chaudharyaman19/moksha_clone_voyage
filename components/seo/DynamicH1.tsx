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

export default async function DynamicH1({ pageKey, fallback }: DynamicH1Props) {
  // Return null so that page headers do not render duplicate hidden <h1> tags.
  // Each page now has a single, visible, semantic <h1> in its Hero component.
  return null;
}
