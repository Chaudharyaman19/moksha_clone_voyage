"use client";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import CompassionSection from "@/components/sections/CompassionSection/CompassionSection";
import HowWeHelp from "@/components/sections/HowWeHelp/HowWeHelp";
import Serving from "@/components/sections/Serving/Serving";
import SacredJourney from "@/components/sections/SacredJourney/SacredJourney";
import VoicesOfGratitude from "@/components/sections/VoicesOfGratitude/VoicesOfGratitude";
import GlimpseOfJourney from "@/components/sections/GlimpseOfJourney/GlimpseOfJourney";
import Footer from "@/components/layout/Footer/Footer";
import Sideicon from "@/components/layout/Sideicon/Sideicon";

import FAQ from "@/components/sections/FAQ/FAQ";

export default function Page() {
  return (
    <div>
      <Sideicon />
      <Topbar />
      <Navbar variant="seva" />
      <Hero variant="seva" />
      <CompassionSection variant="seva" />
      <HowWeHelp variant="seva" />
      <Serving variant="seva" />
      <SacredJourney variant="seva" />
      <VoicesOfGratitude />
      <GlimpseOfJourney />
      <FAQ />
      <Footer variant="seva" />
    </div>
  );
}
