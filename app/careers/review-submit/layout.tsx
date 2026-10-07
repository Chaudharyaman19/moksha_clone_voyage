import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createDynamicMetadata } from "@/lib/seo";
import { getWebsiteSettings, isSettingsPageDisabled } from "@/lib/websiteSettingsApi";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers/review-submit", "careers");
}

export default async function ReviewSubmitLayout({ children }: { children: React.ReactNode }) {
  const settings = await getWebsiteSettings();
  if (
    isSettingsPageDisabled(settings, "careersPage") ||
    isSettingsPageDisabled(settings, "careersReviewSubmitPage")
  ) {
    notFound();
  }
  return children;
}
