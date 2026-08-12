import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/terms");

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
      <JsonLd data={breadcrumbJsonLd("/terms")} />
      <Topbar />
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 pb-16 pt-28">
        <h1 className="font-serif text-[34px] leading-tight sm:text-[44px]">
          Terms and Conditions
        </h1>
        <p className="mt-4 text-[16px] leading-7 text-[#594236]">
          By using the Moksha Sewa website, you agree to provide accurate
          information when requesting help, making donations, volunteering or
          contacting the team.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Service Requests</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          Assistance depends on case verification, local availability and team
          coordination. Moksha Sewa will make reasonable efforts to guide and
          support eligible families.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Donations</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          Donations are used to support seva activities, cremation essentials,
          transport support, volunteer coordination and related welfare work.
        </p>
      </main>
      <Footer />
    </div>
  );
}
