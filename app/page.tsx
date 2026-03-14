"use client";

import Topbar from "../components/topbar/Topbar";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import CompassionSection from "../components/CompassionSection/CompassionSection";
import HowWeHelp from "../components/HowWeHelp/HowWeHelp";
import Serving from "../components/Serving/Serving";
import SacredJourney from "../components/SacredJourney/SacredJourney";
import Footer from "../components/Footer/Footer";
import Sideicon from "../components/Sideicon/Sideicon";

export default function Page() {
  return (
    <div>
      <Sideicon />
      <Topbar />
      <Navbar />
      <Hero />
      <CompassionSection />
      <HowWeHelp />
      <Serving />
      <SacredJourney />
      <Footer />
    </div>
  );
}
