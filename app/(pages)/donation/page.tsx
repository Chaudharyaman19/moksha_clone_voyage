import React from "react";
import type { Metadata } from "next";
import Donation from "@/components/page-features/donation/Donation";

export const metadata: Metadata = {
  title: "Donate | Moksha Sewa",
  description:
    "Support families who cannot afford a dignified farewell. Your donation funds cremation sponsorships, ambulance services, and essential support for grieving families.",
};

function page() {
  return (
    <div>
      <Donation />
    </div>
  );
}

export default page;
