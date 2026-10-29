import Mokshavediogallery from "@/components/page-features/mokshavediogallery/Mokshavediogallery";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, webPageJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/mokshavediogallery", "landing");
}

export default async function page() {
  const customSchema = await getPageSchemaMarkup("/mokshavediogallery", "landing").catch(() => null);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/mokshavediogallery", "Video Gallery")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <Mokshavediogallery />
    </div>
  );
}
