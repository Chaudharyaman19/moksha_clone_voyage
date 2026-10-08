import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createDynamicMetadata } from "@/lib/seo";
import { getWebsiteSettings, isSettingsPageDisabled } from "@/lib/websiteSettingsApi";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers/uploade_cv", "careers");
}

export default async function UploadCvLayout({ children }: { children: React.ReactNode }) {
  const settings = await getWebsiteSettings();
  if (
    isSettingsPageDisabled(settings, "careersPage") ||
    isSettingsPageDisabled(settings, "careersUploadCvPage")
  ) {
    notFound();
  }
  return children;
}
