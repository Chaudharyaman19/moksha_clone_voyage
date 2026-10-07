import type { Metadata } from "next";
import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers/review-submit", "careers");
}

export default function ReviewSubmitLayout({ children }: { children: React.ReactNode }) {
  return children;
}
