import { Suspense } from "react";
import NotEligibleResultContent from "./NotEligibleResultContent";

export const metadata = {
  title: "AI Screening Result - Currently Not Eligible | Moksha Sewa",
  description: "AI screening analysis for Volunteer position at Moksha Sewa.",
};

export default function NotEligibleResultPage() {
  return (
    <Suspense>
      <NotEligibleResultContent />
    </Suspense>
  );
}
