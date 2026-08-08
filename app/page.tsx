"use client";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import CompassionSection from "@/components/sections/CompassionSection/CompassionSection";
import AboutNamoGange from "@/components/sections/about/AboutNamoGange";
import HowWeHelp from "@/components/sections/HowWeHelp/HowWeHelp";
import WhyFamiliesTrust from "@/components/sections/WhyFamiliesTrust/WhyFamiliesTrust";
import Serving from "@/components/sections/Serving/Serving";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import SacredJourney from "@/components/sections/SacredJourney/SacredJourney";
import VoicesOfGratitude from "@/components/sections/VoicesOfGratitude/VoicesOfGratitude";
import GlimpseOfJourney from "@/components/sections/GlimpseOfJourney/GlimpseOfJourney";
import Footer from "@/components/layout/Footer/Footer";

import FAQ from "@/components/sections/FAQ/FAQ";

export default function Page() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      {/* Namo Gange Section */}
      {/* <AboutNamoGange /> */}

      <CompassionSection />
      <HowWeHelp />
      <Serving />
      <HowItWorks />
      <SacredJourney />
      <WhyFamiliesTrust />
      <VoicesOfGratitude />
      <GlimpseOfJourney />
      <FAQ />
      <Footer />
    </div>
  );
}
