import type { Metadata } from "next";
import "./globals.css";
import Sideicon from "@/components/layout/Sideicon/Sideicon";
import StoreProvider from "@/store/StoreProvider";
import JsonLd from "@/components/seo/JsonLd";
import {
  DEFAULT_OG_CARD_IMAGE,
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
        url: DEFAULT_OG_CARD_IMAGE,
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
    images: [DEFAULT_OG_CARD_IMAGE],
  },
  icons: {
    icon: DEFAULT_OG_IMAGE,
  },
};
import { getWebsiteSettings } from "@/lib/websiteSettingsApi";
import SmoothScrolling from "@/components/common/SmoothScrolling";
import Script from "next/script";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getWebsiteSettings();
  const advancedSeo = settings?.advancedSeo;
  // The CMS field wins, but an env var lets Analytics run before advancedSeo is populated.
  const configuredGa4Id = advancedSeo?.ga4MeasurementId || process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const configuredGtmId = advancedSeo?.gtmContainerId || process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
  const ga4MeasurementId = /^G-[A-Z0-9]+$/i.test(configuredGa4Id ?? "") ? configuredGa4Id : undefined;
  const gtmContainerId = /^GTM-[A-Z0-9]+$/i.test(configuredGtmId ?? "") ? configuredGtmId : undefined;

  return (
    <html lang="en">
      <head>
        {advancedSeo?.googleSearchConsoleVerification && (
          <meta name="google-site-verification" content={advancedSeo.googleSearchConsoleVerification} />
        )}
        {advancedSeo?.globalHeadCode && (
          <div dangerouslySetInnerHTML={{ __html: advancedSeo.globalHeadCode }} />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (window.self !== window.top) {
                  var style = document.createElement('style');
                  style.innerHTML = 'a, button, [role="button"], form { pointer-events: none !important; cursor: default !important; }';
                  (document.head || document.documentElement).appendChild(style);

                  window.addEventListener('click', function(e) {
                    var el = e.target;
                    while (el && el !== document.body) {
                      if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.getAttribute('role') === 'button') {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        return false;
                      }
                      el = el.parentElement;
                    }
                  }, true);
                }
              } catch (err) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <StoreProvider>
          <JsonLd data={organizationJsonLd()} />
          <JsonLd data={websiteJsonLd()} />
          <Sideicon />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </StoreProvider>
        {advancedSeo?.globalBodyCode && (
          <div dangerouslySetInnerHTML={{ __html: advancedSeo.globalBodyCode }} />
        )}

        {/* Analytics */}
        {ga4MeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${ga4MeasurementId}', { send_page_view: true });
              `}
            </Script>
          </>
        )}
        {gtmContainerId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmContainerId}');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
