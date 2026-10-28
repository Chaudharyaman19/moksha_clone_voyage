import { Suspense } from "react";
import PartialResultContent from "./PartialResultContent";

export const metadata = {
  title: { absolute: "AI Screening Result - Partially Matched - Moksha Sewa" },
  description: "Your profile shows good potential for this role at Moksha Sewa.",
  robots: { index: false, follow: false },
};

export default function PartialResultPage() {
  return (
    <Suspense>
      <PartialResultContent />
    </Suspense>
  );
}
