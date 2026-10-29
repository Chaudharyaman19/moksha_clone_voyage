"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const INTERACTION_EVENTS = ["pointerdown", "touchstart", "scroll", "keydown"];
const MOBILE_FALLBACK_MS = 8000;

// Mobile: GA4/GTM wait for the first interaction (or a fallback timer) so they don't compete with first paint. Larger screens load them right away.
export default function DeferredAnalytics({
  ga4MeasurementId,
  gtmContainerId,
}: {
  ga4MeasurementId?: string;
  gtmContainerId?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      setReady(true);
      return;
    }
    const start = () => {
      cleanup();
      setReady(true);
    };
    const timer = window.setTimeout(start, MOBILE_FALLBACK_MS);
    const cleanup = () => {
      window.clearTimeout(timer);
      INTERACTION_EVENTS.forEach((ev) => window.removeEventListener(ev, start));
    };
    INTERACTION_EVENTS.forEach((ev) => window.addEventListener(ev, start, { once: true, passive: true }));
    return cleanup;
  }, []);

  if (!ready) return null;

  return (
    <>
      {ga4MeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
            strategy="lazyOnload"
          />
          <Script id="google-analytics" strategy="lazyOnload">
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
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmContainerId}');
          `}
        </Script>
      )}
    </>
  );
}
