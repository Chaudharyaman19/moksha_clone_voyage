import type { Metadata } from "next";
import CareersClientContent from "./CareersClientContent";
import JsonLd from "@/components/seo/JsonLd";
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
      <JsonLd data={breadcrumbJsonLd("/careers", "Careers")} />
      {customSchema && <JsonLd data={customSchema} />}
      <CareersClientContent />
    </>
  );
}
