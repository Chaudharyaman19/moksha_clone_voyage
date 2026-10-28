import { Suspense } from "react";
import ResultPageContent from "../ResultPageContent";

export const metadata = {
  title: { absolute: "AI Screening Result - Eligible - Moksha Sewa" },
  description: "Great news! You are eligible to apply for this position at Moksha Sewa.",
  robots: { index: false, follow: false },
};

export default function EligibleResultPage() {
  return (
    <Suspense>
      <ResultPageContent />
    </Suspense>
  );
}
