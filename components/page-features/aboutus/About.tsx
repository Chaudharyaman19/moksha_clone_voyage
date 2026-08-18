import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import AboutBanner from "@/components/sections/AboutBanner/AboutBanner";
import MokshaSewaIntro from "@/components/sections/MokshaSewaIntro/MokshaSewaIntro";
import MokshaServices from "@/components/sections/MokshaServices/MokshaServices";
import WhoWeAre from "./WhoWeAre";
// import AboutMokshaSewa from "./AboutMokshaSewa";
import Howwesupport from "./Howwesupport";
import Whyweexist from "./Whyweexist";
import BehindMission from "./BehindMission";
import Ourstory from "./Ourstory";
import AboutNamoGangeTrust from "./AboutNamoGangeTrust";
import HeartOfMoksha from "./HeartOfMoksha";
import Responsiblesewa from "./Responsiblesewa";
import AboutFaq from "./AboutFaq";

export default function About() {
  return (
    <div className="overflow-x-clip bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        <AboutBanner />
        <WhoWeAre />
        <MokshaSewaIntro />
        <MokshaServices />
        {/* <AboutMokshaSewa /> */}
        <Howwesupport />
        <Whyweexist />
        <BehindMission />
        <Ourstory />
        <AboutNamoGangeTrust />
        <Responsiblesewa />
        <AboutFaq />
        <HeartOfMoksha />
      </main>

      <Footer />
    </div>
  );
}
