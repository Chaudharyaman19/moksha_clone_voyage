import { Suspense } from "react";
import ApplicationSubmittedContent from "./ApplicationSubmittedContent";

export const metadata = {
  title: { absolute: "Application Submitted - Moksha Sewa" },
  description: "Thank you! Your application has been submitted successfully. Here is what happens next.",
  robots: { index: false, follow: false },
};

export default function ApplicationSubmittedPage() {
  return (
    <Suspense>
      <ApplicationSubmittedContent />
    </Suspense>
  );
}
