import React from "react";
import type { Metadata } from "next";
import TrackRequest from "@/components/page-features/track/TrackRequest";

export const metadata: Metadata = {
  title: "Track Your Request | Moksha Sewa",
  description: "Track the status of your cremation assistance request using your Case ID and phone number — no login required.",
};

function page() {
  return (
    <div>
      <TrackRequest />
    </div>
  );
}

export default page;
