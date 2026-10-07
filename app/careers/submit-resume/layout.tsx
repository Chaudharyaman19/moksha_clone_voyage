import type { Metadata } from "next";
import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers/submit-resume", "careers");
}

export default function SubmitResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
