import { Suspense } from "react";
import NotEligibleResultContent from "../not-eligible/NotEligibleResultContent";

export const metadata = {
  title: "AI Screening Result - Currently Not Eligible | Moksha Sewa",
  description: "AI screening analysis for Volunteer position at Moksha Sewa.",
};

export default function NoMatchResultPage() {
  return (
    <Suspense>
      <NotEligibleResultContent />
    </Suspense>
  );
}
