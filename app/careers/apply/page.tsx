import { Suspense } from "react";
import ApplyPageContent from "./ApplyPageContent";

export const metadata = {
  title: "Apply for Position | Moksha Sewa",
  description: "Apply for your dream job at Moksha Sewa",
};

export default function ApplyPage() {
  return (
    <Suspense>
      <ApplyPageContent />
    </Suspense>
  );
}
