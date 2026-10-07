import type { Metadata } from "next";
import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers/uploade_cv", "careers");
}

export default function UploadCvLayout({ children }: { children: React.ReactNode }) {
  return children;
}
