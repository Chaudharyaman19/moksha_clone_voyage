import { Suspense } from "react";
import ResultPageContent from "./ResultPageContent";

export const metadata = {
  title: "AI Screening Result | Moksha Sewa",
  description: "Review your Moksha Sewa application profile match.",
};

export default function ResultPage() {
  return (
    <Suspense>
      <ResultPageContent />
    </Suspense>
  );
}
