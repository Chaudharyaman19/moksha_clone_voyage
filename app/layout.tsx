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
    default: "Moksha Sewa - Free Cremation Assistance and Funeral Support",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Moksha Sewa helps families with dignified funeral support, cremation assistance, ambulance, hearse van, pandit, ritual items and volunteer care.",
  keywords: [
    "Moksha Sewa",
    "free cremation assistance",
    "funeral support",
    "cremation services",
    "hearse van",
    "pandit services",
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
    title: "Moksha Sewa - Free Cremation Assistance and Funeral Support",
    description:
      "Moksha Sewa helps families with dignified funeral support, cremation assistance, ambulance, hearse van, pandit, ritual items and volunteer care.",
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
    title: "Moksha Sewa - Free Cremation Assistance and Funeral Support",
    description:
      "Moksha Sewa helps families with dignified funeral support, cremation assistance, ambulance, hearse van, pandit, ritual items and volunteer care.",
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
  icons: {
    icon: DEFAULT_OG_IMAGE,
  },
};
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
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
