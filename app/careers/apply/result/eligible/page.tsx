import { Suspense } from "react";
import ResultPageContent from "../ResultPageContent";

export const metadata = {
  title: "AI Screening Result - Eligible | Moksha Sewa",
  description: "Great news! You are eligible to apply for this position at Moksha Sewa.",
};

export default function EligibleResultPage() {
  return (
    <Suspense>
      <ResultPageContent />
    </Suspense>
  );
}
