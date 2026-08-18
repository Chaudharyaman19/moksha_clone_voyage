
import CSRHero from "./CSRHero";
import CSRSupportJourney from "./CSRSupportJourney";
import PartnershipModels from "./PartnershipModels";
import ComplianceAccountability from "./ComplianceAccountability";
import InstitutionalResponsibility from "./InstitutionalResponsibility";
import CSRPartnershipEnquiry from "./CSRPartnershipEnquiry";
import CSRFinalCTA from "./CSRFinalCTA";

export default function CSRPartnershipSections() {
  return (
    <div className="overflow-x-hidden bg-[#fbf7ef] font-sans font-normal [&_*]:!font-sans [&_.font-black]:font-normal [&_.font-bold]:font-normal [&_.font-extrabold]:font-normal [&_.font-medium]:font-normal [&_.font-semibold]:font-normal [&_b]:font-normal [&_button]:text-[16px] [&_input]:text-[16px] [&_label]:text-[16px] [&_select]:text-[16px] [&_strong]:font-normal [&_textarea]:text-[16px]">
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
