import Mokshagallrey from "@/components/page-features/mokshagallery/Mokshagallrey";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, webPageJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/mokshagallery", "landing");
}

export default async function page() {
  const customSchema = await getPageSchemaMarkup("/mokshagallery", "landing").catch(() => null);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/mokshagallery", "Photo Gallery")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <Mokshagallrey />
    </div>
  );
}
