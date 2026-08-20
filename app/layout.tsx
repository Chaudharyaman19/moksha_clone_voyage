import type { Metadata } from "next";
import "./globals.css";
import Sideicon from "@/components/layout/Sideicon/Sideicon";
import StoreProvider from "@/store/StoreProvider";
import JsonLd from "@/components/seo/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: "Moksha Sewa - Humanitarian End-of-Life Support Mission",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Moksha Sewa by Namo Gange Trust provides dignified last rites, ambulance, priest, cremation support and essential assistance for verified needy cases in Delhi • Ghaziabad • Noida.",
  keywords: [
    "Moksha Sewa",
    "Namo Gange Trust",
    "end-of-life support mission",
    "last rites assistance",
    "unclaimed case support",
    "Delhi • Ghaziabad • Noida sewa",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Moksha Sewa - Humanitarian End-of-Life Support Mission",
    description:
      "Moksha Sewa by Namo Gange Trust provides dignified last rites, ambulance, priest, cremation support and essential assistance for verified needy cases in Delhi • Ghaziabad • Noida.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} logo`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moksha Sewa - Humanitarian End-of-Life Support Mission",
    description:
      "Moksha Sewa by Namo Gange Trust provides dignified last rites, ambulance, priest, cremation support and essential assistance for verified needy cases in Delhi • Ghaziabad • Noida.",
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
  icons: {
    icon: DEFAULT_OG_IMAGE,
  },
};
import SmoothScrolling from "@/components/common/SmoothScrolling";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <StoreProvider>
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={websiteJsonLd()} />
          <Sideicon />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </StoreProvider>
      </body>
    </html>
  );
}
