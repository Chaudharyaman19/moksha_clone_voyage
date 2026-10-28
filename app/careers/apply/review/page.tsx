import { Suspense } from "react";
import ReviewDetailsContent from "./ReviewDetailsContent";

export const metadata = {
  title: { absolute: "Review Your Details - Moksha Sewa" },
  description: "Review your information before submitting your application at Moksha Sewa.",
  robots: { index: false, follow: false },
};

export default function ReviewDetailsPage() {
  return (
    <Suspense>
      <ReviewDetailsContent />
    </Suspense>
  );
}
