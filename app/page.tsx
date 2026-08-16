import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import CompassionSection from "@/components/sections/CompassionSection/CompassionSection";
import DonateVolunteerHighlight from "@/components/sections/DonateVolunteerHighlight/DonateVolunteerHighlight";
import HowWeHelp from "@/components/sections/HowWeHelp/HowWeHelp";
import WhyFamiliesTrust from "@/components/sections/WhyFamiliesTrust/WhyFamiliesTrust";
import Serving from "@/components/sections/Serving/Serving";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import SacredJourney from "@/components/sections/SacredJourney/SacredJourney";
import VoicesOfGratitude from "@/components/sections/VoicesOfGratitude/VoicesOfGratitude";
import GlimpseOfJourney from "@/components/sections/GlimpseOfJourney/GlimpseOfJourney";
import Footer from "@/components/layout/Footer/FooterNew";
import FAQ from "@/components/sections/FAQ/FAQ";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

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
        <HowWeHelp />
        <Serving />
        <HowItWorks />
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
