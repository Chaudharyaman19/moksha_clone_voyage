import { Suspense } from "react";
import ApplyPageContent from "./ApplyPageContent";

export const metadata = {
  title: { absolute: "Apply for Position - Moksha Sewa" },
  description: "Apply for your dream job at Moksha Sewa",
  robots: { index: false, follow: false },
};

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplyPageContent />
    </Suspense>
  );
}
