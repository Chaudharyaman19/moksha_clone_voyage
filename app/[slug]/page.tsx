import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, SITE_URL, DEFAULT_OG_CARD_IMAGE } from "@/lib/seo";
import LocationCityPills from "@/components/seo/LocationCityPills";
import LocationViewer from "@/components/location/LocationViewer";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/layout/Footer/FooterNew";

const API_BASE = (
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production" ? "https://api.mokshasewa.org/api/v1" : "http://localhost:5000/api/v1")
).replace(/\/api\/v1\/?$/, "");

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface LP {
  pageTitle: string; slug: string; serviceCategory: string; city: string;
  h1?: string; highlightedHeading?: string; shortSummary?: string;
  detailedDescription?: string; faqs: { question: string; answer: string }[];
  mainImage?: string; mainImageAlt?: string;
  gallery: { src: string; alt?: string }[];
  seo?: { metaTitle?: string; metaDescription?: string; metaKeywords?: string; canonicalUrl?: string; ogTitle?: string; ogDescription?: string; ogImage?: string; ogImageAlt?: string; twitterTitle?: string; twitterDescription?: string; twitterImage?: string; schemaMarkup?: string; robotsIndex?: boolean; robotsFollow?: boolean };
  updatedAt?: string;
}

async function fetchPage(slug: string): Promise<LP | null> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/location-pages/${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return (json?.data ?? null) as LP | null;
  } catch { return null; }
}

/** DesignHouse-style Service x City page. Only renders when backend has a Published LocationPage
 * with this slug — every existing static route keeps precedence, otherwise notFound(). */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = await fetchPage(slug);
  if (!p) return {};
  const url = `${SITE_URL}/${p.slug}`;
  const rawTitle = p.seo?.metaTitle || p.pageTitle;
  const hasBrand = /moksha\s*sewa/i.test(rawTitle);
  const title = hasBrand ? { absolute: rawTitle } : rawTitle;
  const ogTitle = typeof title === "string" ? title : rawTitle;
  const desc = p.seo?.metaDescription || p.shortSummary || p.pageTitle;
  const ogImg = p.seo?.ogImage || p.mainImage || DEFAULT_OG_CARD_IMAGE;
  return {
    title, description: desc,
    keywords: p.seo?.metaKeywords ? [p.seo.metaKeywords] : undefined,
    alternates: { canonical: p.seo?.canonicalUrl || url },
    robots: { index: p.seo?.robotsIndex !== false, follow: p.seo?.robotsFollow !== false },
    openGraph: { title: p.seo?.ogTitle || ogTitle, description: p.seo?.ogDescription || desc, url, type: "website", images: [{ url: ogImg, width: 1200, height: 630, alt: p.seo?.ogImageAlt || p.mainImageAlt || ogTitle }] },
    twitter: { card: "summary_large_image", title: p.seo?.twitterTitle || ogTitle, description: p.seo?.twitterDescription || desc, images: [p.seo?.twitterImage || ogImg] },
  };
}

export default async function LocationPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await fetchPage(slug);
  if (!p) return notFound();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(`/${p.slug}`)} id="schema-location-breadcrumb" />
      {p.seo?.schemaMarkup ? <JsonLd data={p.seo.schemaMarkup} id="schema-location-custom" /> : null}
      {p.faqs?.length ? (
        <JsonLd
          id="schema-location-faq"
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      ) : null}

      <LocationViewer
        slug={p.slug}
        initialPage={p}
        header={<SiteHeader />}
        pills={<LocationCityPills category={p.serviceCategory} currentSlug={p.slug} />}
        footer={<SiteFooter />}
      />
    </>
  );
}
