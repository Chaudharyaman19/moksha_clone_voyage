import type { Metadata } from "next";

export const SITE_URL = "https://moksha-clone-voyage.vercel.app";
export const SITE_NAME = "Moksha Sewa";
export const DEFAULT_OG_IMAGE = "/assets/logo-moksha-seva.png";

type RouteSeo = {
  path: string;
  label: string;
  title: string;
  description: string;
  ogImage: string;
  ogImageAlt: string;
  keywords: string[];
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
    title: "Moksha Sewa - Free Cremation Assistance and Funeral Support",
    description:
      "Moksha Sewa helps families with dignified funeral support, cremation assistance, ambulance, hearse van, pandit, ritual items and volunteer care.",
    ogImage: "/hero-images/3.png",
    ogImageAlt: "Moksha Sewa dignified final rites and cremation assistance",
    keywords: [
      "Moksha Sewa",
      "free cremation assistance",
      "funeral support",
      "cremation services",
      "hearse van",
      "pandit services",
    ],
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "About",
    title: "About Moksha Sewa",
    description:
      "Learn about Moksha Sewa, our mission, Namo Gange Trust initiatives and our work supporting dignified final rites for families in need.",
    ogImage: "/assets/about-reference/hero-priest-ghat.png",
    ogImageAlt: "Moksha Sewa mission and sacred final rites support",
    keywords: ["about Moksha Sewa", "Namo Gange Trust", "final rites support"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/request-help",
    label: "Request Help",
    title: "Request Cremation Assistance",
    description:
      "Request cremation assistance from Moksha Sewa for poor, helpless, orphaned or unclaimed cases. Our team contacts you to coordinate support.",
    ogImage: "/assets/family-support/hero-bg-2.png",
    ogImageAlt: "Moksha Sewa request help and family support",
    keywords: ["request cremation help", "free funeral help", "Moksha Sewa assistance"],
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/donation",
    label: "Donation",
    title: "Donate for Funeral and Cremation Support",
    description:
      "Donate to Moksha Sewa and help arrange cremation wood, ambulance, ritual materials, food support and dignified farewells for families in need.",
    ogImage: "/hero-images/3.png",
    ogImageAlt: "Donate to Moksha Sewa for dignified funeral support",
    keywords: ["donate for cremation", "funeral donation", "charity for final rites"],
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact Moksha Sewa",
    description:
      "Contact Moksha Sewa for cremation assistance, ambulance support, pandit services, donations, volunteering and service coordination.",
    ogImage: "/assets/contact/contact-hero-new.png",
    ogImageAlt: "Contact Moksha Sewa for cremation and funeral support",
    keywords: ["contact Moksha Sewa", "cremation helpline", "funeral support contact"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/blog",
    label: "Blog",
    title: "Moksha Sewa Blog and Updates",
    description:
      "Read Moksha Sewa updates, guidance and stories about funeral support, dignity in final rites, volunteering and community service.",
    ogImage: "/assets/about-reference/story-evening-ghat.png",
    ogImageAlt: "Moksha Sewa blog updates and community service stories",
    keywords: ["Moksha Sewa blog", "funeral guidance", "community service updates"],
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/ambulanceservices",
    label: "Ambulance Services",
    title: "Ambulance Services for Funeral Support",
    description:
      "Arrange respectful ambulance support through Moksha Sewa for hospital transfer, final journey coordination and urgent family assistance.",
    ogImage: "/ambulance/hero-ambulance.webp",
    ogImageAlt: "Moksha Sewa ambulance service for final journey support",
    keywords: ["ambulance services", "funeral ambulance", "dead body ambulance"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/harsevanservices",
    label: "Hearse Van Services",
    title: "Hearse Van Services",
    description:
      "Moksha Sewa helps families arrange hearse van support for respectful transport during the final journey.",
    ogImage: "/assets/harse.jpeg",
    ogImageAlt: "Moksha Sewa hearse van service for respectful transport",
    keywords: ["hearse van service", "funeral van", "dead body transport"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/panditservices",
    label: "Pandit Services",
    title: "Pandit Services for Last Rites",
    description:
      "Arrange experienced pandit support for antim sanskar, puja, prayer guidance and traditional last rites with Moksha Sewa.",
    ogImage: "/assets/panditservices/hero-real.png",
    ogImageAlt: "Pandit services for antim sanskar and traditional last rites",
    keywords: ["pandit services", "antim sanskar pandit", "last rites priest"],
    priority: 0.84,
    changeFrequency: "monthly",
  },
  {
    path: "/prayerhallservices",
    label: "Prayer Hall Services",
    title: "Prayer Hall and Ground Support",
    description:
      "Moksha Sewa helps coordinate prayer hall arrangements, ground support and peaceful spaces for families during final rites.",
    ogImage: "/assets/prayerhallservices/hero-real.png",
    ogImageAlt: "Prayer hall and ground support for final rites",
    keywords: ["prayer hall services", "funeral prayer hall", "ground support"],
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    path: "/furalservices",
    label: "Funeral Samagri",
    title: "Funeral Samagri and Cremation Essentials",
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
    title: "Funeral Floral Decoration Services",
    description:
      "Moksha Sewa helps arrange simple and respectful floral decoration for funeral rites and the final journey.",
    ogImage: "/assets/funeraldecoration.jpeg",
    ogImageAlt: "Funeral floral decoration for a respectful final journey",
    keywords: ["funeral decoration", "floral decoration", "last journey flowers"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/callingrelativesservices",
    label: "Calling Relatives",
    title: "Calling Relatives and Family Coordination",
    description:
      "Get support in informing relatives, coordinating family communication and arranging guidance during difficult final-rites moments.",
    ogImage: "/assets/callingrelative.jpeg",
    ogImageAlt: "Family coordination and calling relatives support",
    keywords: ["calling relatives service", "family coordination", "funeral support"],
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/specialservices",
    label: "Special Services",
    title: "Special Seva and Volunteer Support",
    description:
      "Explore Moksha Sewa special support, volunteer help and extended care for families, unclaimed cases and people in need.",
    ogImage: "/assets/family-support/hero-bg-2.png",
    ogImageAlt: "Special seva and volunteer support by Moksha Sewa",
    keywords: ["special seva", "volunteer support", "Moksha Sewa services"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/mokshagallery",
    label: "Gallery",
    title: "Moksha Sewa Photo Gallery",
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
    title: "Moksha Sewa Video Gallery",
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
    title: "Register as a Moksha Sewa Volunteer",
    description:
      "Register as a Moksha Sewa volunteer and support families with practical help, coordination and compassionate service.",
    ogImage: "/assets/activities/community-outreach.webp",
    ogImageAlt: "Register as a Moksha Sewa volunteer",
    keywords: ["Moksha Sewa volunteer", "volunteer registration", "seva volunteer"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    label: "Privacy Policy",
    title: "Privacy Policy",
    description:
      "Read the Moksha Sewa privacy policy for how enquiry, donation, volunteer and assistance request information is handled.",
    ogImage: "/assets/logo-moksha-seva.png",
    ogImageAlt: "Moksha Sewa privacy policy",
    keywords: ["Moksha Sewa privacy policy", "privacy policy"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/terms",
    label: "Terms",
    title: "Terms and Conditions",
    description:
      "Read the Moksha Sewa terms and conditions for using the website, requesting assistance, donating and volunteering.",
    ogImage: "/assets/logo-moksha-seva.png",
    ogImageAlt: "Moksha Sewa terms and conditions",
    keywords: ["Moksha Sewa terms", "terms and conditions"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/track",
    label: "Track Request",
    title: "Track Your Moksha Sewa Request",
    description:
      "Track your Moksha Sewa request status using your case details and phone number.",
    ogImage: "/assets/logo-moksha-seva.png",
    ogImageAlt: "Track your Moksha Sewa request status",
    keywords: ["track request", "Moksha Sewa case status"],
    priority: 0.35,
    changeFrequency: "monthly",
    index: false,
  },
  {
    path: "/login",
    label: "Login",
    title: "Login to Moksha Sewa",
    description: "Sign in to Moksha Sewa to manage service requests and volunteer activity.",
    ogImage: "/assets/logo-moksha-seva.png",
    ogImageAlt: "Login to Moksha Sewa",
    keywords: ["Moksha Sewa login"],
    priority: 0.2,
    changeFrequency: "yearly",
    index: false,
  },
  {
    path: "/donation/history",
    label: "Donation History",
    title: "Donation History",
    description: "View your Moksha Sewa donation history.",
    ogImage: "/assets/logo-moksha-seva.png",
    ogImageAlt: "Moksha Sewa donation history",
    keywords: ["donation history"],
    priority: 0.1,
    changeFrequency: "yearly",
    index: false,
  },
  {
    path: "/volunteer/dashboard",
    label: "Volunteer Dashboard",
    title: "Volunteer Dashboard",
    description: "Moksha Sewa volunteer dashboard for managing assigned requests.",
    ogImage: "/assets/logo-moksha-seva.png",
    ogImageAlt: "Moksha Sewa volunteer dashboard",
    keywords: ["volunteer dashboard"],
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
  const socialTitle = route.path === "/" ? route.title : `${route.title} | ${SITE_NAME}`;

  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: route.path,
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
