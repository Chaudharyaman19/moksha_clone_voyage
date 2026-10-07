import type { Metadata } from "next";
import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return createDynamicMetadata("/careers/application-form", "careers");
}

export default function ApplicationFormLayout({ children }: { children: React.ReactNode }) {
  return children;
}
