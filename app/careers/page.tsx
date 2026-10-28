import type { Metadata } from "next";
import CareersClientContent from "./CareersClientContent";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup } from "@/lib/seo";
import { getWebsiteSettings, isPageDisabled } from "@/lib/websiteSettingsApi";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers", "careers");
}

export default async function CareerPage() {
  const settings = await getWebsiteSettings();
  if (isPageDisabled("careers", settings)) {
    notFound();
  }

  const customSchema = await getPageSchemaMarkup("/careers", "careers").catch(() => null);

  return (
    <>
      <DynamicH1 pageKey="careers" fallback="Careers at Moksha Sewa - Join Our Humanitarian Mission" />
      <JsonLd data={breadcrumbJsonLd("/careers", "Careers")} />
      {customSchema && <JsonLd data={customSchema} />}
      <CareersClientContent />
    </>
  );
}
