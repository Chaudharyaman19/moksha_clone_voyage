import React from "react";
import type { Metadata } from "next";
import DonationHistory from "@/components/page-features/donation/DonationHistory";

export const metadata: Metadata = {
  title: "Your Donation History | Moksha Sewa",
  description: "View your past donations and download receipts.",
};

function page() {
  return (
    <div>
      <DonationHistory />
    </div>
  );
}

export default page;
