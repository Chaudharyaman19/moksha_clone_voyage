import { Suspense } from "react";
import Login from "@/components/page-features/auth/Login";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/login");

function page() {
  return (
    <Suspense fallback={null}>
      <Login />
    </Suspense>
  );
}

export default page;
