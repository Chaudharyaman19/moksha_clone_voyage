import React from "react";
import type { Metadata } from "next";
import VolunteerDashboard from "@/components/page-features/volunteer/VolunteerDashboard";

export const metadata: Metadata = {
  title: "Volunteer Dashboard | Moksha Sewa",
  description: "View and respond to your assigned cases.",
};

function page() {
  return (
    <div>
      <VolunteerDashboard />
    </div>
  );
}

export default page;
