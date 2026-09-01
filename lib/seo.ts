import type { Metadata } from "next";

export const SITE_URL = "https://mokshasewa.org";
export const SITE_NAME = "Moksha Sewa";
export const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165236/moksha-sewa/assets/logo-moksha-seva.png";
export const DEFAULT_OG_CARD_IMAGE = "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png";
import { getWebsiteSettings, type WebsitePageKey } from "./websiteSettingsApi";

type RouteSeo = {
  path: string;
  label: string;
  title: string;
  description: string;
  ogImage: string;
  ogImageAlt: string;
  keywords: string[];
  titleSuffix?: string;
  priority: number;
  changeFrequency:
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
  index?: boolean;
};

export const seoRoutes: RouteSeo[] = [
  {
    path: "/",
    label: "Home",
    title: "Moksha Sewa - Humanitarian End-of-Life Support Mission",
    description:
      "Moksha Sewa by Namo Gange Trust provides dignified last rites, ambulance, priest and essential support for needy families.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164932/moksha-sewa/hero-images/3.png",
    ogImageAlt: "Moksha Sewa humanitarian last-rites assistance mission",
    keywords: [
      "Moksha Sewa",
      "Namo Gange Trust",
      "end-of-life support mission",
      "last rites assistance",
      "unclaimed case support",
      "Delhi • Ghaziabad • Noida sewa",
    ],
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "About",
    title: "About Moksha Sewa – Dignified Last Rites",
    description:
      "Learn about Moksha Sewa, a Namo Gange Trust initiative supporting weaker families and legally authorised unclaimed cases.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165039/moksha-sewa/assets/about-reference/hero-priest-ghat.png",
    ogImageAlt: "Moksha Sewa mission and sacred final rites support",
    keywords: ["about Moksha Sewa", "Namo Gange Trust", "final rites support"],
    titleSuffix: "Namo Gange Trust",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/request-help",
    label: "Request Help",
    title: "Request Last Rites Help – Moksha Sewa Support",
    description:
      "Request verified last-rites assistance from Moksha Sewa for economically weaker families or legally authorised unclaimed cases.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165157/moksha-sewa/assets/family-support/hero-bg-2.png",
    ogImageAlt: "Moksha Sewa request help and family support",
    keywords: ["request sewa help", "last rites assistance", "Moksha Sewa assistance"],
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/donation",
    label: "Donation",
    title: "Donate for Final Journey – Moksha Sewa Support",
    description:
      "Donate to Moksha Sewa and support dignified final rites for eligible families and verified unclaimed cases in need.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164932/moksha-sewa/hero-images/3.png",
    ogImageAlt: "Donate to Moksha Sewa humanitarian final journey support",
    keywords: ["donate for last rites", "Moksha Sewa donation", "charity for final rites"],
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact Moksha Sewa for Last Rites Assistance",
    description:
      "Contact Moksha Sewa for verified last-rites assistance, donation, volunteering and Delhi • Ghaziabad • Noida launch-region coordination.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165089/moksha-sewa/assets/contact/contact-hero-new.png",
    ogImageAlt: "Contact Moksha Sewa for humanitarian last-rites support",
    keywords: ["contact Moksha Sewa", "sewa helpline", "last rites support contact"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/blog",
    label: "Blog",
    title: "Moksha Sewa Blog – Rituals, Guidance & Updates",
    description:
      "Read Moksha Sewa updates, guidance and stories about funeral support, dignity in final rites, volunteering and community service.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165059/moksha-sewa/assets/about-reference/story-evening-ghat.png",
    ogImageAlt: "Moksha Sewa blog updates and community service stories",
    keywords: ["Moksha Sewa blog", "funeral guidance", "community service updates"],
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/our-services",
    label: "Our Services",
    title: "Moksha Sewa Services – Compassionate Final Journey Support",
    description:
      "Explore Moksha Sewa services for dignified final journeys, including transport, rituals, family coordination and verified support.",
    ogImage: "/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa final journey support services",
    keywords: ["Moksha Sewa services", "final journey support", "last rites assistance"],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/ambulanceservices",
    label: "Ambulance Services",
    title: "Ambulance Services for Final Journey Support",
    description:
      "Arrange respectful ambulance support through Moksha Sewa for hospital transfer, final journey and urgent family assistance.",
    ogImage: "/ambulance/hero-ambulance.webp",
    ogImageAlt: "Moksha Sewa ambulance service for final journey support",
    keywords: ["ambulance services", "funeral ambulance", "dead body ambulance"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/harsevanservices",
    label: "Hearse Van Services",
    title: "Hearse Van Services for the Final Journey",
    description:
      "Moksha Sewa arranges respectful hearse van transport for the final journey with dignity and care for families.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165183/moksha-sewa/assets/harse.jpg",
    ogImageAlt: "Moksha Sewa hearse van service for respectful transport",
    keywords: ["hearse van service", "funeral van", "dead body transport"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/panditservices",
    label: "Pandit Services",
    title: "Pandit Services for Last Rites & Rituals",
    description:
      "Arrange experienced pandit support for antim sanskar, puja, prayer guidance and traditional last rites with Moksha Sewa.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165283/moksha-sewa/assets/panditservices/hero-real.png",
    ogImageAlt: "Pandit services for antim sanskar and traditional last rites",
    keywords: ["pandit services", "antim sanskar pandit", "last rites priest"],
    priority: 0.84,
    changeFrequency: "monthly",
  },
  {
    path: "/prayerhallservices",
    label: "Prayer Hall Services",
    title: "Prayer Hall Services for Sacred Final Rites",
    description:
      "Moksha Sewa helps coordinate prayer hall arrangements, ground support and peaceful spaces for families during final rites.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165319/moksha-sewa/assets/prayerhallservices/hero-real.png",
    ogImageAlt: "Prayer hall and ground support for final rites",
    keywords: ["prayer hall services", "funeral prayer hall", "ground support"],
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    path: "/furalservices",
    label: "Funeral Samagri",
    title: "Funeral Samagri & Cremation Essentials",
    description:
      "Arrange cremation wood, shroud cloth, flowers, prayer items and essential funeral samagri through Moksha Sewa.",
    ogImage: "/woodrituals/hero.webp",
    ogImageAlt: "Funeral samagri, cremation wood and ritual essentials",
    keywords: ["funeral samagri", "cremation wood", "ritual items"],
    priority: 0.84,
    changeFrequency: "monthly",
  },
  {
    path: "/furaldecoration",
    label: "Floral Decoration",
    title: "Funeral Floral Decoration Services for Rites",
    description:
      "Moksha Sewa helps arrange simple and dignified floral decoration for funeral rites and final journeys with care.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165179/moksha-sewa/assets/funeraldecoration.jpg",
    ogImageAlt: "Funeral floral decoration for a respectful final journey",
    keywords: ["funeral decoration", "floral decoration", "last journey flowers"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/callingrelativesservices",
    label: "Calling Relatives",
    title: "Calling Relatives & Family Coordination",
    description:
      "Get support in informing relatives, coordinating family communication and guidance during difficult final-rites moments.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165084/moksha-sewa/assets/callingrelative.jpg",
    ogImageAlt: "Family coordination and calling relatives support",
    keywords: ["calling relatives service", "family coordination", "funeral support"],
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/specialservices",
    label: "Special Services",
    title: "Family Support & Relief After Last Rites",
    description:
      "Explore Moksha Sewa special support, volunteer help and extended care for families, unclaimed cases and people in need.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165157/moksha-sewa/assets/family-support/hero-bg-2.png",
    ogImageAlt: "Special seva and volunteer support by Moksha Sewa",
    keywords: ["special seva", "volunteer support", "Moksha Sewa services"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/unclaimed-body-sewa",
    label: "Unclaimed Body Sewa",
    title: "Unclaimed Body Sewa – Dignified Last Rites",
    description:
      "Moksha Sewa provides verified and legally authorised last rites for unclaimed and unidentified bodies with dignity.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165475/moksha-sewa/assets/unclaimed-body/unclaimed-hero.png",
    ogImageAlt: "Unclaimed body sewa dignified last rites support",
    keywords: ["unclaimed body sewa", "unidentified body last rites", "unclaimed body cremation"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/mokshagallery",
    label: "Gallery",
    title: "Moksha Sewa Photo Gallery – Seva Moments",
    description:
      "View Moksha Sewa photos showing community service, funeral support, volunteer care and dignified final-rites assistance.",
    ogImage: "/gallary/g1.png",
    ogImageAlt: "Moksha Sewa photo gallery showing seva activities",
    keywords: ["Moksha Sewa gallery", "photo gallery", "seva photos"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/mokshavediogallery",
    label: "Video Gallery",
    title: "Moksha Sewa Video Gallery – Seva Activities",
    description:
      "Watch Moksha Sewa videos covering seva activities, community outreach, volunteer support and dignified assistance work.",
    ogImage: "/gallary/gg5.png",
    ogImageAlt: "Moksha Sewa video gallery and seva activities",
    keywords: ["Moksha Sewa videos", "video gallery", "seva videos"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/volunteer/register",
    label: "Volunteer",
    title: "Register as a Moksha Sewa Volunteer Today",
    description:
      "Register as a Moksha Sewa volunteer and support families with practical help, coordination and compassionate service.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165076/moksha-sewa/assets/activities/community-outreach.webp",
    ogImageAlt: "Register as a Moksha Sewa volunteer",
    keywords: ["Moksha Sewa volunteer", "volunteer registration", "seva volunteer"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/csr",
    label: "CSR Partnership",
    title: "CSR Partnership with Moksha Sewa – For Business",
    description:
      "Partner with Moksha Sewa through CSR support for verified final-rites assistance and dignified humanitarian service.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "CSR partnership with Moksha Sewa",
    keywords: ["CSR partnership", "Moksha Sewa CSR", "corporate social responsibility"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/partnership",
    label: "Partner With Us",
    title: "Partner With Moksha Sewa – Humanitarian Impact",
    description:
      "Partner with Moksha Sewa as a service provider, organisation or institutional supporter for dignified final-rites assistance.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Partner with Moksha Sewa",
    keywords: ["partner with Moksha Sewa", "Moksha Sewa partnership", "service partner"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    title: "Moksha Sewa Privacy Policy – Data Handling",
    description:
      "Read the Moksha Sewa privacy policy for how enquiry, donation, volunteer and assistance request information is handled.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa privacy policy",
    keywords: ["Moksha Sewa privacy policy", "privacy policy"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    label: "Terms",
    title: "Moksha Sewa Terms and Conditions for Users",
    description:
      "Read the Moksha Sewa terms and conditions for using the website, requesting assistance, donating and volunteering.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa terms and conditions",
    keywords: ["Moksha Sewa terms", "terms and conditions"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/refund-policy",
    label: "Refund Policy",
    title: "Moksha Sewa Refund Policy – Donation Payments",
    description:
      "Read the Moksha Sewa refund policy for donations, payments and transactions, including when refunds may be considered.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa refund policy",
    keywords: ["Moksha Sewa refund policy", "donation refund", "refund policy"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/code-of-conduct",
    label: "Code of Conduct",
    title: "Moksha Sewa Code of Conduct – Responsible Service",
    description:
      "Read the Moksha Sewa code of conduct covering dignity, privacy, ethical behaviour and responsible service for volunteers and partners.",
    ogImage: "/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa code of conduct",
    keywords: ["Moksha Sewa code of conduct", "volunteer conduct", "responsible sewa"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/track",
    label: "Track Request",
    title: "Track Your Moksha Sewa Request Status",
    description:
      "Track your Moksha Sewa request status online using your case details and phone number for real-time updates and support.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Track your Moksha Sewa request status",
    keywords: ["track request", "Moksha Sewa case status"],
    priority: 0.35,
    changeFrequency: "monthly",
    index: false,
  },
  {
    path: "/login",
    label: "Login",
    title: "Login to Moksha Sewa – Manage Your Account",
    description: "Sign in to Moksha Sewa to manage your service requests, volunteer activities and account details safely and securely.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Login to Moksha Sewa",
    keywords: ["Moksha Sewa login"],
    priority: 0.2,
    changeFrequency: "yearly",
    index: false,
  },
  {
    path: "/donation/history",
    label: "Donation History",
    title: "Moksha Sewa Donation History – Your Records",
    description: "View your complete Moksha Sewa donation history with transaction details and contribution records for each donation.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa donation history",
    keywords: ["donation history"],
    priority: 0.1,
    changeFrequency: "yearly",
    index: false,
  },
  {
    path: "/volunteer/dashboard",
    label: "Volunteer Dashboard",
    title: "Moksha Sewa Volunteer Dashboard – My Tasks",
    description: "Moksha Sewa volunteer dashboard for managing assigned requests, tasks and community service activities efficiently.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa volunteer dashboard",
    keywords: ["volunteer dashboard"],
    priority: 0.1,
    changeFrequency: "yearly",
    index: false,
  },
  {
    path: "/mortal-records",
    label: "Mortal Records",
    title: "Mortal Records – Moksha Sewa",
    description: "Moksha Sewa mortal records page. This section is being prepared and will be available soon.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa mortal records",
    keywords: ["mortal records"],
    priority: 0.1,
    changeFrequency: "yearly",
    index: false,
  },
];

export const publicSeoRoutes = seoRoutes.filter((route) => route.index !== false);

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function getSeoRoute(path: string) {
  return seoRoutes.find((route) => route.path === path) ?? seoRoutes[0];
}

export function createPageMetadata(path: string): Metadata {
  const route = getSeoRoute(path);
  const isIndexable = route.index !== false;
  const url = absoluteUrl(route.path);
  const ogImageUrl = absoluteUrl(route.ogImage);
  const suffix = route.titleSuffix ?? SITE_NAME;
  const skipSuffix = route.path === "/" || (suffix === SITE_NAME && route.title.includes(SITE_NAME));
  const socialTitle = skipSuffix ? route.title : `${route.title} | ${suffix}`;

  return {
    title: { absolute: socialTitle },
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: absoluteUrl(route.path),
    },
    robots: {
      index: isIndexable,
      follow: isIndexable,
      googleBot: {
        index: isIndexable,
        follow: isIndexable,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: socialTitle,
      description: route.description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: route.ogImageAlt,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: route.description,
      images: [ogImageUrl],
    },
  };
}

export async function createDynamicMetadata(path: string, pageKey: WebsitePageKey): Promise<Metadata> {
  const baseMetadata = createPageMetadata(path);
  const settings = await getWebsiteSettings();
  
  // pageFieldMap logic repeated or we can just access it
  const pageFieldMap: Record<WebsitePageKey, any> = {
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

  const pageSettings = settings?.[pageFieldMap[pageKey] as keyof typeof settings];
  const customSeo = (pageSettings as any)?.seo;
  const advancedSeo = settings?.advancedSeo;

  if (!customSeo) return baseMetadata;

  const title = customSeo.metaTitle || baseMetadata.title;
  const description = customSeo.metaDescription || baseMetadata.description;
  const url = customSeo.canonicalUrl || (baseMetadata.alternates?.canonical as string) || absoluteUrl(path);
  const ogTitle = customSeo.ogTitle || title;
  const ogDescription = customSeo.ogDescription || description;
  
  const ogImages = baseMetadata.openGraph?.images;
  const firstOgImage = Array.isArray(ogImages) ? ogImages[0] : ogImages;
  const baseOgImageUrl = typeof firstOgImage === 'object' && firstOgImage !== null && 'url' in firstOgImage ? firstOgImage.url : firstOgImage;
  const ogImage = customSeo.ogImage || advancedSeo?.defaultOgImage || baseOgImageUrl || DEFAULT_OG_IMAGE;

  const keywords = customSeo.metaKeywords ? customSeo.metaKeywords.split(",").map((k: string) => k.trim()) : baseMetadata.keywords;

  return {
    ...baseMetadata,
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      ...(baseMetadata.robots as any),
      index: customSeo.robotsIndex !== false && (baseMetadata.robots as any)?.index !== false,
      follow: customSeo.robotsFollow !== false && (baseMetadata.robots as any)?.follow !== false,
      googleBot: {
        ...(baseMetadata.robots as any)?.googleBot,
        index: customSeo.robotsIndex !== false && (baseMetadata.robots as any)?.index !== false,
        follow: customSeo.robotsFollow !== false && (baseMetadata.robots as any)?.follow !== false,
      }
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: ogTitle as string,
      description: ogDescription as string,
      url,
      images: [
        {
          url: ogImage as string,
          width: 1200,
          height: 630,
          alt: (title as any)?.absolute || title,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: ogTitle as string,
      description: ogDescription as string,
      images: [ogImage as string],
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE),
    sameAs: [],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9810247319",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(path: string) {
  const route = getSeoRoute(path);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  if (route.path !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: route.label,
      item: absoluteUrl(route.path),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
