import { Suspense } from "react";
import ApplicationProgressContent from "./ApplicationProgressContent";

export const metadata = {
  title: "Application in Progress | Moksha Sewa",
  description: "Your application is under review. Track your AI analysis progress.",
};

export default function ApplicationProgressPage() {
  return (
    <Suspense>
      <ApplicationProgressContent />
    </Suspense>
  );
}
