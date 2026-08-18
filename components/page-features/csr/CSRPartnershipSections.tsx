
import CSRHero from "./CSRHero";
import CSRSupportJourney from "./CSRSupportJourney";
import PartnershipModels from "./PartnershipModels";
import ComplianceAccountability from "./ComplianceAccountability";
import InstitutionalResponsibility from "./InstitutionalResponsibility";
import CSRPartnershipEnquiry from "./CSRPartnershipEnquiry";
import CSRFinalCTA from "./CSRFinalCTA";

export default function CSRPartnershipSections() {
  return (
    <div className="overflow-x-hidden bg-[#fbf7ef]">
      <CSRHero />
      <CSRSupportJourney />
      <PartnershipModels />
      <ComplianceAccountability />
      <InstitutionalResponsibility />
      <CSRPartnershipEnquiry />
      <CSRFinalCTA />
    </div>
  );
}
