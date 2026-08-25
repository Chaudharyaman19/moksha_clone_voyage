import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import CompassionSection from "@/components/sections/CompassionSection/CompassionSection";
import OurSewa from "@/components/sections/OurSewa/HowHelp";
import Howwehelp from "@/components/sections/Who We Help/WhoWeHelp";
import PracticalSewaSupport from "@/components/sections/PracticalSewaSupport/PracticalSewaSupport";
import FamilyNeed from "@/components/sections/FamilyNeed/FamilyNeed";
import OurHumanitarianCommitment from "@/components/sections/OurHumanitarianCommitment/OurHumanitarianCommitment";
import WhyFamiliesTrust from "@/components/sections/WhyFamiliesTrust/WhyFamiliesTrust";
import Serving from "@/components/sections/Serving/Serving";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import HowSewaWorks from "@/components/sections/HowSewaWorks/HowSewaWorks";
import SacredJourney from "@/components/sections/SacredJourney/SacredJourney";
import VoicesOfGratitude from "@/components/sections/VoicesOfGratitude/VoicesOfGratitude";
import GlimpseOfJourney from "@/components/sections/GlimpseOfJourney/GlimpseOfJourney";
import Footer from "@/components/layout/Footer/FooterNew";
import FAQ from "@/components/sections/FAQ/FAQ";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import SewaStories from "@/components/sections/SewaStories/SewaStories";
import WhyYourSupportMatters from "@/components/sections/WhyYourSupportMatters/WhyYourSupportMatters";
import JoinTheMission from "@/components/sections/JoinTheMission/JoinTheMission";
import OneFinalActOfHumanity from "@/components/sections/OneFinalActOfHumanity/OneFinalActOfHumanity";
import YourSupportInAction from "@/components/sections/YourSupportInAction/YourSupportInAction";
import TrustTransparency from "@/components/sections/TrustTransparency/TrustTransparency";
import { getWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/");

export default async function Page() {
  const websiteSections = await getWebsiteSections();

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/")} />
      <Topbar />
      <Navbar />
      <WebsiteContentProvider sections={websiteSections}>
      <main>
        <WebsiteSection name="hero"><Hero /></WebsiteSection>

        <WebsiteSection name="who-we-help"><Howwehelp /></WebsiteSection>
        <WebsiteSection name="practical-support"><PracticalSewaSupport /></WebsiteSection>
        <WebsiteSection name="family-need"><FamilyNeed /></WebsiteSection>
        {/* <OurSewa /> */}


        {/* Namo Gange Section */}
        {/* <AboutNamoGange /> */}
        {/* 
     
        {/* <DonateVolunteerHighlight /> */}

   

        <WebsiteSection name="how-sewa-works"><HowSewaWorks /></WebsiteSection>
        <WebsiteSection name="compassion"><CompassionSection /></WebsiteSection>
        <WebsiteSection name="humanitarian-commitment"><OurHumanitarianCommitment /></WebsiteSection>
        <WebsiteSection name="sewa-stories"><SewaStories /></WebsiteSection>

        <WebsiteSection name="support-matters"><WhyYourSupportMatters /></WebsiteSection>

        <WebsiteSection name="join-mission"><JoinTheMission /></WebsiteSection>
        <WebsiteSection name="support-in-action"><YourSupportInAction /></WebsiteSection>
        <WebsiteSection name="trust-transparency"><TrustTransparency /></WebsiteSection>

        {/* <Serving /> */}
        {/* <HowItWorks /> */}

        {/* <SacredJourney /> */}
        {/* <WhyFamiliesTrust /> */}
        {/* <VoicesOfGratitude /> */}
        <WebsiteSection name="journey-glimpse"><GlimpseOfJourney /></WebsiteSection>
        <WebsiteSection name="final-act"><OneFinalActOfHumanity /></WebsiteSection>
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </main>
      </WebsiteContentProvider>
      <Footer />
    </div>
  );
}
