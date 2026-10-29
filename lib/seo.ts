import type { Metadata } from "next";

export const SITE_URL = "https://mokshasewa.org";
export const SITE_NAME = "Moksha Sewa";
export const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165236/moksha-sewa/assets/logo-moksha-seva.png";
export const DEFAULT_OG_CARD_IMAGE = "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png";
import { getWebsiteSettings, type WebsitePageKey } from "./websiteSettingsApi";
import { seoApi } from "./seoApi";

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
    title: "Antim Sanskar & Cremation Support - Delhi NCR | Moksha Sewa",
    description:
      "Moksha Sewa (Namo Gange Trust) arranges dignified antim sanskar for unclaimed and needy families: shav vahan, pandit, samagri and cremation help.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164932/moksha-sewa/hero-images/3.png",
    ogImageAlt: "Moksha Sewa humanitarian last-rites assistance mission",
    keywords: [
      "Moksha Sewa",
      "Namo Gange Trust",
      "antim sanskar support",
      "cremation assistance Delhi NCR",
      "shav vahan",
      "unclaimed body last rites",
      "cremation help Ghaziabad Noida",
    ],
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    label: "About",
    title: "About Moksha Sewa - Namo Gange Trust Last-Rites Mission",
    description:
      "Moksha Sewa, a Namo Gange Trust initiative, gives dignified last rites to unclaimed, family-less and needy cases in Delhi, Ghaziabad and Noida.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165039/moksha-sewa/assets/about-reference/hero-priest-ghat.png",
    ogImageAlt: "Moksha Sewa mission and sacred final rites support",
    keywords: ["about Moksha Sewa", "Namo Gange Trust", "final rites mission", "dignified cremation Delhi NCR"],
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/request-help",
    label: "Request Help",
    title: "Request Cremation & Last-Rites Help - 24x7 | Moksha Sewa",
    description:
      "Submit a confidential request for cremation, shav vahan, pandit and samagri help. Moksha Sewa helps needy and unclaimed cases in Delhi NCR. Helpline 24x7.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165157/moksha-sewa/assets/family-support/hero-bg-2.png",
    ogImageAlt: "Moksha Sewa request help and family support",
    keywords: ["request cremation help", "last rites assistance", "Moksha Sewa emergency helpline", "shav vahan request"],
    priority: 0.95,
    changeFrequency: "weekly",
  },
  {
    path: "/donation",
    label: "Donation",
    title: "Donate for Last Rites & Cremation Support | Moksha Sewa",
    description:
      "Donate to Moksha Sewa (Namo Gange Trust) to fund shav vahan, samagri and last rites for unclaimed and needy families. Secure payment, receipt provided.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164932/moksha-sewa/hero-images/3.png",
    ogImageAlt: "Donate to Moksha Sewa humanitarian final journey support",
    keywords: ["donate for last rites", "cremation charity donation", "Moksha Sewa donation", "80G donation"],
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact Moksha Sewa - 24x7 Last-Rites Helpline",
    description:
      "Call or WhatsApp Moksha Sewa 24x7 for antim sanskar, shav vahan and pandit support in Delhi, Ghaziabad and Noida. Head office: Mohan Nagar, Ghaziabad.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165089/moksha-sewa/assets/contact/contact-hero-new.png",
    ogImageAlt: "Contact Moksha Sewa for humanitarian last-rites support",
    keywords: ["contact Moksha Sewa", "last rites helpline", "shav vahan contact", "Moksha Sewa Ghaziabad phone"],
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/blog",
    label: "Blog",
    title: "Blog: Last-Rites Guidance & Awareness | Moksha Sewa",
    description:
      "Read guides on antim sanskar, cremation help, unclaimed body procedure and how to get support in Delhi, Ghaziabad and Noida.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165059/moksha-sewa/assets/about-reference/story-evening-ghat.png",
    ogImageAlt: "Moksha Sewa blog updates and community service stories",
    keywords: ["Moksha Sewa blog", "antim sanskar guidance", "cremation rules", "unclaimed body procedure"],
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/services",
    label: "Our Services",
    title: "Moksha Sewa Services – Compassionate Final Journey Support",
    description:
      "Explore Moksha Sewa services for dignified final journeys, including transport, rituals, family coordination and verified support.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Moksha Sewa final journey support services",
    keywords: ["Moksha Sewa services", "final journey support", "last rites assistance", "cremation support services"],
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/ambulanceservices",
    label: "Ambulance Services",
    title: "Mortuary Ambulance for Dead Body Transport | Moksha Sewa",
    description:
      "Mortuary ambulance support to move a body from hospital or home to the cremation ground in Ghaziabad, Delhi and Noida for eligible cases. Call 24x7.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Moksha Sewa mortuary ambulance service",
    keywords: ["mortuary ambulance", "dead body transport ambulance", "cremation ambulance Delhi NCR"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/harsevanservices",
    label: "Hearse Van Services",
    title: "Hearse Van (Shav Vahan) for Last Rites | Moksha Sewa",
    description:
      "Moksha Sewa coordinates respectful hearse van (shav vahan) transport for eligible cases in Delhi, Ghaziabad and Noida. Request support 24x7.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165183/moksha-sewa/assets/harse.jpg",
    ogImageAlt: "Moksha Sewa hearse van shav vahan service",
    keywords: ["hearse van service", "shav vahan", "dead body transport vehicle Ghaziabad"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/panditservices",
    label: "Pandit Services",
    title: "Pandit for Antim Sanskar & Last Rites | Moksha Sewa",
    description:
      "Experienced pandit ji for antim sanskar, mukhagni, asthi visarjan, pind daan and terahvi puja. Moksha Sewa arranges ritual guidance for eligible families.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165283/moksha-sewa/assets/panditservices/hero-real.png",
    ogImageAlt: "Pandit services for antim sanskar and traditional last rites",
    keywords: ["pandit for antim sanskar", "cremation priest", "pind daan pandit", "terahvi puja"],
    priority: 0.84,
    changeFrequency: "monthly",
  },
  {
    path: "/prayerhallservices",
    label: "Prayer Hall Services",
    title: "Prayer Hall & Shanti Path Arrangement | Moksha Sewa",
    description:
      "Moksha Sewa coordinates prayer hall setup, seating, flowers and ground support for shanti path and last-rites ceremonies for eligible families.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165319/moksha-sewa/assets/prayerhallservices/hero-real.png",
    ogImageAlt: "Prayer hall and ground support for final rites",
    keywords: ["prayer hall arrangements", "shanti path arrangement", "cremation ground support"],
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    path: "/furalservices",
    label: "Funeral Samagri",
    title: "Cremation Wood, Kafan & Funeral Samagri | Moksha Sewa",
    description:
      "Moksha Sewa arranges cremation wood, kafan (shroud cloth), flowers, ghee, incense and pooja samagri for eligible families. Request help 24x7.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Funeral samagri, cremation wood and ritual essentials",
    keywords: ["cremation wood", "kafan shroud cloth", "funeral samagri", "antim sanskar samagri"],
    priority: 0.84,
    changeFrequency: "monthly",
  },
  {
    path: "/furaldecoration",
    label: "Floral Decoration",
    title: "Funeral Flower Decoration for Hearse & Pyre | Moksha Sewa",
    description:
      "Moksha Sewa volunteers arrange fresh flower decoration for the hearse van, pyre and prayer hall for dignified last rites. Request help 24x7.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165179/moksha-sewa/assets/funeraldecoration.jpg",
    ogImageAlt: "Funeral floral decoration for a respectful final journey",
    keywords: ["funeral flower decoration", "hearse van flower decoration", "cremation decoration"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/callingrelativesservices",
    label: "Calling Relatives",
    title: "Relatives Notification & Family Help | Moksha Sewa",
    description:
      "Moksha Sewa volunteers inform relatives, guide arrivals and handle repeated calls so a grieving family can focus on the final farewell.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165084/moksha-sewa/assets/callingrelative.jpg",
    ogImageAlt: "Family coordination and calling relatives support",
    keywords: ["calling relatives service", "bereavement family coordination", "funeral communication help"],
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/specialservices",
    label: "Special Services",
    title: "Family Support After Cremation: Meals & Relief | Moksha Sewa",
    description:
      "After the last rites, Moksha Sewa helps eligible families with meals, death-certificate paperwork, tehravi khana support and compassionate guidance.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165157/moksha-sewa/assets/family-support/hero-bg-2.png",
    ogImageAlt: "Special seva and family relief support by Moksha Sewa",
    keywords: ["family support after cremation", "death certificate guidance", "bereavement relief support"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/unclaimed-body-sewa",
    label: "Unclaimed Body Sewa",
    title: "Unclaimed Body Antim Sanskar (Lawaris Laash) | Moksha Sewa",
    description:
      "Moksha Sewa arranges respectful last rites for legally authorised unclaimed bodies (lawaris laash) after police and hospital formalities. See the process.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165475/moksha-sewa/assets/unclaimed-body/unclaimed-hero.png",
    ogImageAlt: "Unclaimed body sewa dignified last rites support",
    keywords: ["unclaimed body antim sanskar", "lawaris laash cremation", "unidentified body last rites Delhi NCR"],
    priority: 0.86,
    changeFrequency: "monthly",
  },
  {
    path: "/mokshagallery",
    label: "Gallery",
    title: "Moksha Sewa Photo Gallery – Seva Moments",
    description:
      "View Moksha Sewa photos showing community service, funeral support, volunteer care and dignified final-rites assistance.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
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
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Moksha Sewa video gallery and seva activities",
    keywords: ["Moksha Sewa videos", "video gallery", "seva videos"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/volunteer/register",
    label: "Volunteer",
    title: "Become a Volunteer: Serve Last Rites | Moksha Sewa",
    description:
      "Join Moksha Sewa as a volunteer in Delhi, Ghaziabad or Noida. Help families and unclaimed cases with dignified last-rites support. Training provided.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165076/moksha-sewa/assets/activities/community-outreach.webp",
    ogImageAlt: "Register as a Moksha Sewa volunteer",
    keywords: ["become a volunteer", "volunteer for last rites", "Moksha Sewa volunteer registration"],
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/csr",
    label: "CSR Partnership",
    title: "CSR Partnership for Last-Rites Support | Moksha Sewa",
    description:
      "Companies can support Moksha Sewa through CSR: sponsor hearse vans, cremation kits and unclaimed body rites with defined scope and impact reporting.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "CSR partnership with Moksha Sewa",
    keywords: ["CSR partnership", "corporate social responsibility", "Moksha Sewa CSR funding"],
    priority: 0.65,
    changeFrequency: "monthly",
  },
  {
    path: "/partnership",
    label: "Partner With Us",
    title: "Partner With Moksha Sewa: Hospitals, NGOs & Institutions",
    description:
      "Hospitals, NGOs, municipalities and service providers can partner with Moksha Sewa to support unclaimed body handling and dignified last rites.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Partner with Moksha Sewa",
    keywords: ["partner with Moksha Sewa", "hospital NGO partnership", "last rites institutional partner"],
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
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Moksha Sewa code of conduct",
    keywords: ["Moksha Sewa code of conduct", "volunteer conduct", "responsible sewa"],
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/disclaimer",
    label: "Disclaimer",
    title: "Moksha Sewa Disclaimer – Website Information",
    description:
      "Read the Moksha Sewa disclaimer covering website content, external links, service eligibility and limitation of liability.",
    ogImage: DEFAULT_OG_CARD_IMAGE,
    ogImageAlt: "Moksha Sewa disclaimer",
    keywords: ["Moksha Sewa disclaimer", "website disclaimer"],
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
  {
    path: "/careers",
    label: "Careers",
    title: "Careers at Moksha Sewa: Join Our Mission",
    description:
      "Explore careers at Moksha Sewa. Join our mission providing dignified last rites and humanitarian end-of-life support across India.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Careers at Moksha Sewa",
    keywords: ["Moksha Sewa careers", "jobs", "career opportunities", "Namo Gange Trust careers"],
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/careers/submit-resume",
    label: "Careers – Eligibility Check",
    title: "Check Your Eligibility – Moksha Sewa Careers",
    description:
      "Check if you are eligible to apply for a role at Moksha Sewa and continue your job application in a few simple steps.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa careers eligibility check",
    keywords: ["Moksha Sewa careers eligibility", "job eligibility check", "apply for Moksha Sewa job"],
    priority: 0.3,
    changeFrequency: "monthly",
    index: false,
  },
  {
    path: "/careers/application-form",
    label: "Careers – Application Form",
    title: "Job Application Form – Moksha Sewa Careers",
    description:
      "Fill in your details on the official Moksha Sewa job application form and submit your interest in joining our team.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa careers application form",
    keywords: ["Moksha Sewa application form", "job application form", "Moksha Sewa apply"],
    priority: 0.3,
    changeFrequency: "monthly",
    index: false,
  },
  {
    path: "/careers/review-submit",
    label: "Careers – Review & Submit",
    title: "Review & Submit Your Application – Moksha Sewa Careers",
    description:
      "Review your details and submit your job application to join the Moksha Sewa team.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa careers review and submit",
    keywords: ["Moksha Sewa submit application", "job application review"],
    priority: 0.3,
    changeFrequency: "monthly",
    index: false,
  },
  {
    path: "/careers/uploade_cv",
    label: "Careers – Upload CV",
    title: "Upload Your CV – Moksha Sewa Careers",
    description:
      "Upload your CV and apply for open roles at Moksha Sewa to support dignified end-of-life care and humanitarian service.",
    ogImage: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
    ogImageAlt: "Moksha Sewa careers upload CV",
    keywords: ["Moksha Sewa upload CV", "submit resume Moksha Sewa", "Moksha Sewa jobs"],
    priority: 0.3,
    changeFrequency: "monthly",
    index: false,
  },
];

export const publicSeoRoutes = seoRoutes.filter((route) => route.index !== false);

/** hreflang for an India-targeted, single-language site (en-IN + x-default). */
export function languageAlternates(url: string) {
  return { "en-IN": url, "x-default": url };
}

export function absoluteUrl(path = "/") {
  if (typeof path !== "string") return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, SITE_URL).toString();
}

/**
 * Extracts the canonical URL (href value) from a raw <link rel="canonical"> HTML string.
 * Returns null if the string is empty or doesn't contain a valid href.
 *
 * Example input:  '<link rel="canonical" href="https://mokshasewa.org/about" />'
 * Example output: 'https://mokshasewa.org/about'
 */
export function extractCanonicalUrl(canonicalTag?: string | null): string | null {
  if (!canonicalTag || !canonicalTag.trim()) return null;
  const trimmed = canonicalTag.trim();
  const match = trimmed.match(/href=["']([^"']+)["']/i);
  if (match) return match[1].trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return null;
}


export function normalizeOgImageUrl(image?: string | null) {
  if (!image) return DEFAULT_OG_CARD_IMAGE;
  if (/^https?:\/\//i.test(image)) return image;
  if (image.startsWith("data:")) return image;
  return absoluteUrl(image);
}

export function getSeoRoute(path: string) {
  return seoRoutes.find((route) => route.path === path) ?? null;
}
function fallbackSeoRoute(path: string): RouteSeo {
  const home = seoRoutes[0];
  return {
    ...home,
    path,
    label: home.label,
    priority: 0.5,
    changeFrequency: "monthly",
  };
}

export function createPageMetadata(path: string): Metadata {
  const route = getSeoRoute(path) ?? fallbackSeoRoute(path);
  const isIndexable = route.index !== false;
  const url = absoluteUrl(route.path);
  const ogImageUrl = normalizeOgImageUrl(route.ogImage);
  const suffix = route.titleSuffix ?? SITE_NAME;
  const skipSuffix = route.path === "/" || (suffix === SITE_NAME && route.title.includes(SITE_NAME));
  const socialTitle = skipSuffix ? route.title : `${route.title} | ${suffix}`;

  return {
    title: { absolute: socialTitle },
    description: route.description,
    keywords: route.keywords,
    alternates: {
      canonical: absoluteUrl(route.path),
      languages: languageAlternates(absoluteUrl(route.path)),
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

export interface ParsedOgData {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogUrl?: string;
  ogSiteName?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  keywords?: string[];
}

export function parseOpenGraphTagsContent(rawTags?: string | null): ParsedOgData {
  if (!rawTags || typeof rawTags !== "string" || !rawTags.trim()) {
    return {};
  }

  const trimmed = rawTags.trim();
  const result: ParsedOgData = {};

  // 1. Check if rawTags is JSON
  if ((trimmed.startsWith("{") && trimmed.endsWith("}")) || (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && typeof parsed === "object") {
        if (parsed.title) result.title = String(parsed.title);
        if (parsed.description) result.description = String(parsed.description);
        if (parsed.canonical) result.canonicalUrl = String(parsed.canonical);
        if (Array.isArray(parsed.keywords)) {
          result.keywords = parsed.keywords.map((k: any) => String(k).trim()).filter(Boolean);
        } else if (typeof parsed.keywords === "string") {
          result.keywords = parsed.keywords.split(",").map((k: string) => k.trim()).filter(Boolean);
        }

        const og = parsed.openGraph || parsed.opengraph || {};
        if (og.title) result.ogTitle = String(og.title);
        if (og.description) result.ogDescription = String(og.description);
        if (og.url) result.ogUrl = String(og.url);
        if (og.siteName || og.site_name) result.ogSiteName = String(og.siteName || og.site_name);
        if (og.type) result.ogType = String(og.type);
        if (og.image) {
          if (typeof og.image === "string") result.ogImage = og.image;
          else if (typeof og.image === "object" && og.image.url) {
            result.ogImage = String(og.image.url);
            if (og.image.alt) result.ogImageAlt = String(og.image.alt);
            if (og.image.width) result.ogImageWidth = Number(og.image.width);
            if (og.image.height) result.ogImageHeight = Number(og.image.height);
          }
        }

        const tw = parsed.twitter || {};
        if (tw.card) result.twitterCard = String(tw.card);
        if (tw.title) result.twitterTitle = String(tw.title);
        if (tw.description) result.twitterDescription = String(tw.description);
        if (tw.image) {
          result.twitterImage = typeof tw.image === "string" ? tw.image : (tw.image?.url ? String(tw.image.url) : undefined);
          if (typeof tw.image === "object" && tw.image.alt) result.twitterImageAlt = String(tw.image.alt);
        }
        if (tw.imageAlt || tw.image_alt) result.twitterImageAlt = String(tw.imageAlt || tw.image_alt);

        return result;
      }
    } catch {
      // Not JSON, continue to HTML meta tag parsing
    }
  }

  // 2. Helper to extract content from <meta property="..." content="..."> or <meta content="..." property="...">
  const extractMetaContent = (nameOrProperty: string): string | undefined => {
    const escaped = nameOrProperty.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const p1 = new RegExp(`<meta\\s+[^>]*(?:property|name)=["']${escaped}["'][^>]*content=["']([^"']*)["']`, "i");
    const m1 = trimmed.match(p1);
    if (m1) return m1[1].trim();

    const p2 = new RegExp(`<meta\\s+[^>]*content=["']([^"']*)["'][^>]*(?:property|name)=["']${escaped}["']`, "i");
    const m2 = trimmed.match(p2);
    if (m2) return m2[1].trim();

    return undefined;
  };

  const titleMatch = trimmed.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) result.title = titleMatch[1].trim();

  const canonicalMatch =
    trimmed.match(/<link\s+[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
    trimmed.match(/<link\s+[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  if (canonicalMatch) result.canonicalUrl = canonicalMatch[1].trim();

  const desc = extractMetaContent("description");
  if (desc) result.description = desc;

  const kw = extractMetaContent("keywords");
  if (kw) result.keywords = kw.split(",").map((k) => k.trim()).filter(Boolean);

  result.ogTitle = extractMetaContent("og:title");
  result.ogDescription = extractMetaContent("og:description");
  result.ogImage = extractMetaContent("og:image");
  result.ogImageAlt = extractMetaContent("og:image:alt");
  const widthStr = extractMetaContent("og:image:width");
  if (widthStr) result.ogImageWidth = parseInt(widthStr, 10);
  const heightStr = extractMetaContent("og:image:height");
  if (heightStr) result.ogImageHeight = parseInt(heightStr, 10);
  result.ogUrl = extractMetaContent("og:url");
  result.ogSiteName = extractMetaContent("og:site_name");
  result.ogType = extractMetaContent("og:type");

  result.twitterCard = extractMetaContent("twitter:card");
  result.twitterTitle = extractMetaContent("twitter:title");
  result.twitterDescription = extractMetaContent("twitter:description");
  result.twitterImage = extractMetaContent("twitter:image");
  result.twitterImageAlt = extractMetaContent("twitter:image:alt");

  return result;
}

// In-memory cache for metadata resolution
const dynamicSeoCache = new Map<string, { dedicatedSeo: any; settings: any; timestamp: number }>();

export async function createDynamicMetadata(path: string, pageKey: WebsitePageKey): Promise<Metadata> {
  const baseMetadata = createPageMetadata(path);

  const isLocal = process.env.NODE_ENV !== "production";
  const slug = path === "/" ? "home" : path.replace(/^\/+|\/+$/g, "") || "home";

  let cached = dynamicSeoCache.get(slug);
  const now = Date.now();
  if (!cached || now - cached.timestamp > 30000) {
    try {
      const [dedicatedSeo, settings] = await Promise.all([
        seoApi.getByPage(slug, isLocal ? "local" : "live").catch(() => null),
        getWebsiteSettings().catch(() => null),
      ]);
      cached = { dedicatedSeo, settings, timestamp: Date.now() };
      dynamicSeoCache.set(slug, cached);
    } catch {
      // ignore
    }
  }

  const dedicatedSeo = cached?.dedicatedSeo;
  const settings = cached?.settings;

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
    careers: "careersPage",
    disclaimer: "disclaimerPage",
  };

  const pageSettings = settings?.[pageFieldMap[pageKey] as keyof typeof settings];
  const activeSeo = dedicatedSeo?.isActive !== false ? dedicatedSeo : null;
  const customSeo = activeSeo || (pageSettings as any)?.seo;
  const advancedSeo = settings?.advancedSeo;

  if (!customSeo) return baseMetadata;

  const parsedOg = parseOpenGraphTagsContent(customSeo.openGraphTags);

  const isGenericDesc =
    !customSeo.metaDescription ||
    /^Comprehensive .* services provided by Moksha Sewa/i.test(customSeo.metaDescription.trim());
  const description =
    (!isGenericDesc && customSeo.metaDescription) ||
    parsedOg.description ||
    baseMetadata.description;

  const isGenericTitle =
    !customSeo.metaTitle ||
    /^(About|Contact|Donation|Csr|Careers|Request Help|Partnership|Home|Register|Volunteer|Disclaimer|Services|Blog|Terms|Privacy Policy|Refund Policy|Code of Conduct)\s*\|\s*Moksha Sewa$/i.test(customSeo.metaTitle.trim()) ||
    /^(About|Contact|Donation|Csr|Careers|Request Help|Partnership|Register|Volunteer|Disclaimer)$/i.test(customSeo.metaTitle.trim());
  const rawTitle =
    (!isGenericTitle && customSeo.metaTitle) ||
    parsedOg.title ||
    baseMetadata.title;
  const title = rawTitle || baseMetadata.title;

  // Canonical resolution: ignore placeholder / local domains and enforce production canonical
  const isInvalidCanonical = (c?: string | null) =>
    !c ||
    c.includes("yourdomain.com") ||
    c.includes("example.com") ||
    c.includes("localhost") ||
    c.includes("127.0.0.1");

  const rawAdminCanonical =
    parsedOg.canonicalUrl ||
    extractCanonicalUrl(customSeo.canonicalTag) ||
    customSeo.canonicalUrl ||
    null;
  const adminCanonical = isInvalidCanonical(rawAdminCanonical) ? null : rawAdminCanonical;
  const resolvedUrl = adminCanonical || parsedOg.ogUrl || absoluteUrl(path);
  const url = isInvalidCanonical(resolvedUrl) ? absoluteUrl(path) : resolvedUrl;

  const ogTitle = parsedOg.ogTitle || (!isGenericTitle && customSeo.ogTitle ? customSeo.ogTitle : title);
  const ogDescription = parsedOg.ogDescription || (!isGenericDesc && customSeo.ogDescription ? customSeo.ogDescription : description);

  const ogImages = baseMetadata.openGraph?.images;
  const firstOgImage = Array.isArray(ogImages) ? ogImages[0] : ogImages;
  const baseOgImageUrl = typeof firstOgImage === "object" && firstOgImage !== null && "url" in firstOgImage ? firstOgImage.url : firstOgImage;
  const ogImage = normalizeOgImageUrl(
    parsedOg.ogImage || customSeo.ogImage || advancedSeo?.defaultOgImage || baseOgImageUrl || DEFAULT_OG_IMAGE
  );

  const keywords =
    parsedOg.keywords && parsedOg.keywords.length > 0
      ? parsedOg.keywords
      : customSeo.metaKeywords
      ? customSeo.metaKeywords.split(",").map((k: string) => k.trim())
      : baseMetadata.keywords;

  const twitterTitle = parsedOg.twitterTitle || ogTitle;
  const twitterDescription = parsedOg.twitterDescription || ogDescription;
  const twitterImage = normalizeOgImageUrl(parsedOg.twitterImage || ogImage);

  // The root layout sets `title: { template: "%s | Moksha Sewa" }`, so a plain string
  // title gets the site-name suffix appended. Admin SEO titles often already include it
  // (e.g. "Careers | Moksha Sewa"), which rendered as "... | Moksha Sewa | Moksha Sewa".
  // Titles that already end with the site name are returned as absolute so the
  // template is bypassed; everything else keeps the template behaviour.
  const titleStr = typeof title === "string" ? title : (title as any)?.absolute || "";
  const titleHasBrand =
    Boolean(titleStr) &&
    (titleStr.toLowerCase().includes(SITE_NAME.toLowerCase()) ||
      new RegExp(`(?:\\||\\u2013|-)\\s*${SITE_NAME}\\s*$`, "i").test(titleStr.trim()));
  const resolvedTitle = titleHasBrand ? { absolute: titleStr } : title;

  return {
    ...baseMetadata,
    title: resolvedTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: languageAlternates(url),
    },
    robots: {
      ...(baseMetadata.robots as any),
      index: customSeo.robotsIndex !== false && (baseMetadata.robots as any)?.index !== false,
      follow: customSeo.robotsFollow !== false && (baseMetadata.robots as any)?.follow !== false,
      googleBot: {
        ...(baseMetadata.robots as any)?.googleBot,
        index: customSeo.robotsIndex !== false && (baseMetadata.robots as any)?.index !== false,
        follow: customSeo.robotsFollow !== false && (baseMetadata.robots as any)?.follow !== false,
      },
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: ogTitle as string,
      description: ogDescription as string,
      url,
      siteName: parsedOg.ogSiteName || (baseMetadata.openGraph?.siteName ?? "Moksha Sewa"),
      type: (parsedOg.ogType as any) || (baseMetadata.openGraph as any)?.type || "website",
      images: [
        {
          url: ogImage as string,
          width: parsedOg.ogImageWidth || 1200,
          height: parsedOg.ogImageHeight || 630,
          alt: parsedOg.ogImageAlt || (resolvedTitle as any)?.absolute || resolvedTitle,
        },
      ],
    },
    twitter: {
      ...baseMetadata.twitter,
      card: (parsedOg.twitterCard as any) || "summary_large_image",
      title: twitterTitle as string,
      description: twitterDescription as string,
      images: [twitterImage as string],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: "Namo Gange Trust",
    url: SITE_URL,
    logo: absoluteUrl(DEFAULT_OG_IMAGE),
    image: absoluteUrl(DEFAULT_OG_CARD_IMAGE),
    description:
      "Moksha Sewa by Namo Gange Trust provides dignified last rites, ambulance and hearse van, pandit, cremation support and essential assistance for verified needy and unclaimed cases in Delhi, Ghaziabad and Noida.",
    email: "info@mokshasewa.org",
    telephone: "+91-9220147229",
    knowsLanguage: ["en-IN", "hi-IN"],
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Noida" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      "https://www.facebook.com/mokshasewa/",
      "https://www.instagram.com/mokshasewa/",
      "https://x.com/mokshasewa",
      "https://www.linkedin.com/company/mokshasewa/"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 12/52, Site II Industrial Area, Mohan Nagar",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      postalCode: "201007",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9220147229",
        contactType: "emergency",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9818353841",
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
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function humanizeSegment(segment: string) {
  return decodeURIComponent(segment)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

export function breadcrumbJsonLd(path: string, finalName?: string) {
  const cleanPath = path.split("?")[0].split("#")[0];
  const segments = cleanPath.split("/").filter(Boolean);

  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
  ];

  let cumulative = "";
  segments.forEach((segment, index) => {
    cumulative += `/${segment}`;
    const isLast = index === segments.length - 1;
    const route = getSeoRoute(cumulative);
    const name = isLast && finalName ? finalName : route?.label ?? humanizeSegment(segment);
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name,
      item: absoluteUrl(cumulative),
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  const serviceUrl = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name,
    description,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165236/moksha-sewa/assets/logo-moksha-seva.png",
    },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "City", name: "Ghaziabad" },
      { "@type": "City", name: "Noida" },
      { "@type": "City", name: "Greater Noida" },
      { "@type": "City", name: "Gurugram" },
    ],
  };
}

export async function getPageSchemaMarkup(path: string, pageKey: WebsitePageKey): Promise<string | null> {
  const isLocal = process.env.NODE_ENV !== "production";
  const slug = path === "/" ? "home" : path.replace(/^\/+|\/+$/g, "") || "home";
  const dedicatedSeo = await seoApi.getByPage(slug, isLocal ? "local" : "live").catch(() => null);
  if (dedicatedSeo?.schemaMarkup) return dedicatedSeo.schemaMarkup;

  const settings = await getWebsiteSettings();
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
    careers: "careersPage",
    disclaimer: "disclaimerPage",
  };

  const pageSettings = settings?.[pageFieldMap[pageKey] as keyof typeof settings];
  return (pageSettings as any)?.seo?.schemaMarkup || null;
}

