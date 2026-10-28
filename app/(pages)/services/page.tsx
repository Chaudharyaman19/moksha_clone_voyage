import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import PracticalSewaSupport from "@/components/sections/PracticalSewaSupport/PracticalSewaSupport";
import JsonLd from "@/components/seo/JsonLd";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup } from "@/lib/seo";
import { getMergedWebsiteSections, getWebsiteSettings, isPageDisabled } from "@/lib/websiteSettingsApi";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/services", "services");
}

export default async function ServicesPage() {
  const [settings, customSchema] = await Promise.all([
    getWebsiteSettings(),
    getPageSchemaMarkup("/services", "services").catch(() => null),
  ]);

  if (isPageDisabled("services", settings)) {
    notFound();
  }
  const sections = getMergedWebsiteSections("services", settings);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mokshasewa.org/services#service",
    name: "Moksha Sewa Last Rites & Cremation Support Services",
    description: "Comprehensive humanitarian services for antim sanskar: hearse van (shav vahan), pandit, samagri, ambulance and cremation assistance.",
    provider: {
      "@type": "Organization",
      name: "Moksha Sewa",
      url: "https://mokshasewa.org",
      logo: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165236/moksha-sewa/assets/logo-moksha-seva.png",
    },
    areaServed: {
      "@type": "City",
      name: "Delhi NCR",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Final Journey Sewa Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hearse Van / Shav Vahan" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pandit for Antim Sanskar" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cremation Samagri & Wood Support" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unclaimed Body Last Rites" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ambulance Dead Body Transport" } },
      ],
    },
  };

  return (
    <WebsiteContentProvider page="services" sections={sections}>
      <JsonLd data={breadcrumbJsonLd("/services", "Services")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={serviceJsonLd} />}
      <WebsiteSection name="topbar"><Topbar /></WebsiteSection>
      <WebsiteSection name="navbar"><Navbar /></WebsiteSection>
      <main className="pt-24">
        <WebsiteSection name="practical-support"><PracticalSewaSupport isH1={true} /></WebsiteSection>
      </main>
      <WebsiteSection name="footer"><Footer /></WebsiteSection>
    </WebsiteContentProvider>
  );
}
