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
import Supportthemission from "./Supportthemission";
import JoinSewa from "@/components/sections/JoinSewa/JoinSewa";
import { WebsiteSection } from "@/components/website/WebsiteContentContext";

export default function About() {
  return (
    <>
      <Topbar />
      <Navbar />

      <main className="overflow-x-clip bg-[#FBF8F3] font-sans font-normal text-[#2C1810] [&_*]:!font-sans [&_.font-black]:font-normal [&_.font-bold]:font-normal [&_.font-extrabold]:font-normal [&_.font-medium]:font-normal [&_.font-semibold]:font-normal [&_b]:font-normal [&_strong]:font-normal">
        <WebsiteSection name="about-hero"><AboutBanner /></WebsiteSection>
        <WebsiteSection name="about-who-we-are"><WhoWeAre /></WebsiteSection>
        <WebsiteSection name="about-moksha-sewa"><MokshaSewaIntro /></WebsiteSection>
        <WebsiteSection name="about-services"><MokshaServices /></WebsiteSection>
        <WebsiteSection name="about-how-support"><Howwesupport /></WebsiteSection>
        <WebsiteSection name="about-why-exist"><Whyweexist /></WebsiteSection>
        <WebsiteSection name="about-behind-mission"><BehindMission /></WebsiteSection>
        <WebsiteSection name="about-our-story"><Ourstory /></WebsiteSection>
        <WebsiteSection name="about-namo-gange"><AboutNamoGangeTrust /></WebsiteSection>
        <WebsiteSection name="about-responsible-sewa"><Responsiblesewa /></WebsiteSection>
        <WebsiteSection name="about-support-mission"><Supportthemission /></WebsiteSection>
        <WebsiteSection name="about-join-sewa"><JoinSewa /></WebsiteSection>
        <WebsiteSection name="about-faq"><AboutFaq /></WebsiteSection>
        <WebsiteSection name="about-heart"><HeartOfMoksha /></WebsiteSection>
      </main>

      <Footer />
    </>
  );
}
