import React from "react";
import type { Metadata } from "next";
import RequestHelp from "@/components/page-features/request-help/RequestHelp";

export const metadata: Metadata = {
  title: "Request Cremation Assistance | Moksha Sewa",
  description:
    "Request free cremation assistance from Moksha Sewa. No payment is ever collected from a family — our team will reach out to help within minutes.",
};

function page() {
  return (
    <div>
      <RequestHelp />
    </div>
  );
}

export default page;
