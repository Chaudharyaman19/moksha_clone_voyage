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
};

export default async function DynamicH1({ pageKey, fallback }: DynamicH1Props) {
  const settings = await getWebsiteSettings();
  const pageSettings = settings?.[pageFieldMap[pageKey] as keyof typeof settings];
  const customSeo = (pageSettings as any)?.seo;

  const h1Text = customSeo?.h1Tag || fallback;

  return (
    <h1 className="sr-only">
      {h1Text}
    </h1>
  );
}
