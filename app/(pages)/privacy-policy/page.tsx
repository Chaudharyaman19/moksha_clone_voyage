import Footer from "@/components/layout/Footer/Footer";
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
          Moksha Sewa collects only the information needed to respond to service
          requests, donations, volunteer registrations and enquiries. We use this
          information to coordinate support, contact families and maintain basic
          service records.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Information We Use</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          Details such as name, phone number, location, request information and
          donation references may be used for service coordination, verification,
          communication and receipts.
        </p>
        <h2 className="mt-8 font-serif text-[26px]">Contact</h2>
        <p className="mt-3 text-[16px] leading-7 text-[#594236]">
          For privacy questions, contact Moksha Sewa through the contact page or
          the helpline listed on the website.
        </p>
      </main>
      <Footer />
    </div>
  );
}
