import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
      <JsonLd data={breadcrumbJsonLd("/privacy-policy")} />
      <Topbar />
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 pb-16 pt-28">
        <h1 className="font-serif text-[34px] leading-tight sm:text-[44px]">
          Privacy Policy
        </h1>
        <p className="mt-4 text-[16px] leading-7 text-[#594236]">
          Moksha Sewa is an initiative of Namo Gange Trust. We collect only the
          information needed to respond to help requests, donations, volunteer
          registrations and enquiries, and to maintain responsible programme
          records.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Information We Collect</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          We may collect name, phone number, email address, city, location,
          case details, donation details, PAN where voluntarily provided for a
          receipt, volunteer preferences, emergency contact details and documents
          needed for screening or legal verification.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">How We Use Information</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          Information is used for case verification, support coordination,
          helpline communication, volunteer screening, donation processing,
          receipts, compliance, fraud prevention and internal reporting.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Sharing and Safeguards</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          Where necessary, limited information may be shared with authorised
          volunteers, hospitals, police, municipal bodies, cremation grounds,
          payment processors or service partners for the requested support. We
          do not sell personal data.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Retention and Rights</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          Records are kept only as long as needed for programme, legal,
          accounting and safety purposes. You may request correction, deletion
          or access to your information, subject to applicable legal and
          operational requirements.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Contact</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          For privacy questions or grievance requests, contact Moksha Sewa at
          info@mokshasewa.org or call +91 9220147229.
        </p>
      </main>
      <Footer />
    </div>
  );
}
