import { Suspense } from "react";
import NotEligibleResultContent from "./NotEligibleResultContent";

export const metadata = {
  title: { absolute: "AI Screening Result - Not Eligible - Moksha Sewa" },
  description: "AI screening analysis for Volunteer position at Moksha Sewa.",
  robots: { index: false, follow: false },
};

export default function NotEligibleResultPage() {
  return (
    <Suspense>
      <NotEligibleResultContent />
    </Suspense>
  );
}
