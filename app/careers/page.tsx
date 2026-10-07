import type { Metadata } from "next";
import CareersClientContent from "./CareersClientContent";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers", "careers");
}

export default async function CareerPage() {
  const customSchema = await getPageSchemaMarkup("/careers", "careers").catch(() => null);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/careers", "Careers")} />
      {customSchema && <JsonLd data={customSchema} />}
      <CareersClientContent />
    </>
  );
}
