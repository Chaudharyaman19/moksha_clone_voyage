import { Suspense } from "react";
import CompleteApplicationContent from "./CompleteApplicationContent";

export const metadata = {
  title: { absolute: "Complete Your Application - Moksha Sewa" },
  description: "Review and confirm your details to submit your application at Moksha Sewa.",
  robots: { index: false, follow: false },
};

export default function CompleteApplicationPage() {
  return (
    <Suspense>
      <CompleteApplicationContent />
    </Suspense>
  );
}
