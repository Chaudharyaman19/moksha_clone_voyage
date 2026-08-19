"use client";

import PartnershipHero from "./PartnershipHero";
import PartnershipNetwork from "./PartnershipNetwork";
import PartnershipProcess from "./PartnershipProcess";
import PartnershipResponsibility from "./PartnershipResponsibility";
import PartnershipEnquiry from "./PartnershipEnquiry";
import PartnershipFAQ from "./PartnershipFAQ";
import PartnershipFinalCTA from "./PartnershipFinalCTA";

export default function PartnershipPageSections() {
  return (
    <div className="overflow-x-hidden bg-[#fbf7ef]">
      <PartnershipHero />
      <PartnershipNetwork />
      <PartnershipProcess />
      <PartnershipResponsibility />
      <PartnershipEnquiry />
      <PartnershipFAQ />
      <PartnershipFinalCTA />
    </div>
  );
}
