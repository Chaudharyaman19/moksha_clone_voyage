import React from "react";
import type { Metadata } from "next";
import VolunteerRegister from "@/components/page-features/volunteer/VolunteerRegister";

export const metadata: Metadata = {
  title: "Become a Volunteer | Moksha Sewa",
  description: "Register as a Moksha Sewa volunteer and help families in your city arrange a dignified cremation, free of cost.",
};

function page() {
  return (
    <div>
      <VolunteerRegister />
    </div>
  );
}

export default page;
