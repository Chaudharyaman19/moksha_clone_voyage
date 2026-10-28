import { Suspense } from "react";
import ResultPageContent from "./ResultPageContent";

export const metadata = {
  title: { absolute: "AI Screening Result - Moksha Sewa" },
  description: "Review your Moksha Sewa application profile match.",
  robots: { index: false, follow: false },
};

export default function ResultPage() {
  return (
    <Suspense>
      <ResultPageContent />
    </Suspense>
  );
}
