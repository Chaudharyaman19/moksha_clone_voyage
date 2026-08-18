import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import CompassionSection from "@/components/sections/CompassionSection/CompassionSection";
import DonateVolunteerHighlight from "@/components/sections/DonateVolunteerHighlight/DonateVolunteerHighlight";
import OurSewa from "@/components/sections/OurSewa/HowWeHelp";
import Howwehelp from "@/components/sections/Howwehelp/Howwehelp";
import PracticalSewaSupport from "@/components/sections/PracticalSewaSupport/PracticalSewaSupport";
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

export const metadata = createPageMetadata("/");

export default function Page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/")} />
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        {/* Namo Gange Section */}
        {/* <AboutNamoGange /> */}

        <CompassionSection />
        <DonateVolunteerHighlight />
        <OurSewa />
        <Howwehelp />
        <PracticalSewaSupport />
        <SewaStories/>
        <Serving />
        <HowItWorks />
        <HowSewaWorks />
        <SacredJourney />
        <WhyFamiliesTrust />
        <VoicesOfGratitude />
        <GlimpseOfJourney />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
