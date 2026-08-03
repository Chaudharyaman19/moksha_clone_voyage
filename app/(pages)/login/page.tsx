import React, { Suspense } from "react";
import type { Metadata } from "next";
import Login from "@/components/page-features/auth/Login";

export const metadata: Metadata = {
  title: "Login | Moksha Sewa",
  description: "Sign in to Moksha Sewa to book services and track your requests.",
};

function page() {
  return (
    <Suspense fallback={null}>
      <Login />
    </Suspense>
  );
}

export default page;
