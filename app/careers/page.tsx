import type { Metadata } from "next";
import CareersClientContent from "./CareersClientContent";
import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers", "careers");
}

export default function CareerPage() {
  return <CareersClientContent />;
}
