import UnclaimedBodyHero from "./UnclaimedBodyHero";
import WhatIsUnclaimedBody from "./WhatIsUnclaimedBody";
import UnclaimedBodyProcess from "./UnclaimedBodyProcess";
import FinalJourneySupport from "./FinalJourneySupport";
import DignityComesFirst from "./DignityComesFirst";
import OrganisationBehindMission from "./OrganisationBehindMission";
import UnclaimedBodyRequest from "./UnclaimedBodyRequest";
import UnclaimedBodyFAQ from "./UnclaimedBodyFAQ";
import MokshaFooter from "./MokshaFooter";

export default function UnclaimedBodyPageSections() {
  return (
    <div className="overflow-x-hidden bg-[#fbf7ef]">
      <UnclaimedBodyHero />
      <WhatIsUnclaimedBody />
      <UnclaimedBodyProcess />
      <FinalJourneySupport />
      <DignityComesFirst />
      <OrganisationBehindMission />
      <UnclaimedBodyRequest />
      <UnclaimedBodyFAQ />
      <MokshaFooter />
    </div>
  );
}
