import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import CompassionSection from "@/components/sections/CompassionSection/CompassionSection";
import OurSewa from "@/components/sections/OurSewa/HowHelp";
import Howwehelp from "@/components/sections/Who We Help/WhoWeHelp";
import PracticalSewaSupport from "@/components/sections/PracticalSewaSupport/PracticalSewaSupport";
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

export const metadata = createPageMetadata("/");

export default function Page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/")} />
      <Topbar />
      <Navbar />
      <main>
        <Hero />

        <Howwehelp />
        <OurSewa />


        {/* Namo Gange Section */}
        {/* <AboutNamoGange /> */}
        {/* 
     
        {/* <DonateVolunteerHighlight /> */}

        <PracticalSewaSupport />

        <HowSewaWorks />
        <CompassionSection />
        <OurHumanitarianCommitment />
        <SewaStories />

        <WhyYourSupportMatters />

        <JoinTheMission />
        <YourSupportInAction />
        <TrustTransparency />

        {/* <Serving /> */}
        {/* <HowItWorks /> */}

        {/* <SacredJourney /> */}
        {/* <WhyFamiliesTrust /> */}
        {/* <VoicesOfGratitude /> */}
        <GlimpseOfJourney />
        <OneFinalActOfHumanity />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
