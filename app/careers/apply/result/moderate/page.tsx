import { Suspense } from "react";
import PartialResultContent from "../partial/PartialResultContent";

export const metadata = {
  title: "AI Screening Result - Partially Matched | Moksha Sewa",
  description: "Your profile shows good potential for this role at Moksha Sewa.",
};

export default function ModerateResultPage() {
  return (
    <Suspense>
      <PartialResultContent />
    </Suspense>
  );
}
