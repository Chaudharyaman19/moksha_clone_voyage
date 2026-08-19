import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import PolicyHero, { conductPolicyMeta } from "@/components/sections/policy-hero/PolicyHero";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import {
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export const metadata = createPageMetadata("/code-of-conduct");

const conductSections = [
  {
    title: "Serve With Dignity",
    text: "Volunteers must treat every deceased person, family member, hospital staff, authority and service partner with respect, patience and humanity.",
  },
  {
    title: "Protect Privacy",
    text: "Do not share personal details, case information, photographs, documents or sensitive conversations without written permission from authorised Moksha Sewa coordinators.",
  },
  {
    title: "Follow Instructions",
    text: "Volunteers must work under assigned coordinators, follow approved processes and avoid taking independent decisions in sensitive field situations.",
  },
  {
    title: "No Publicity Without Approval",
    text: "Volunteers must not post photos, videos, names, locations or case details on social media for promotion, fundraising or personal recognition without approval.",
  },
  {
    title: "Honest Communication",
    text: "Share accurate information only. Do not promise services, financial help, medical support, legal outcomes or official approvals on behalf of the organisation.",
  },
  {
    title: "Safety First",
    text: "Volunteers must follow safety guidance, avoid unsafe areas or confrontations, and immediately inform coordinators if a situation becomes risky.",
  },
  {
    title: "No Misuse of Identity",
    text: "Volunteer ID, badges, documents, contacts and organisational references must be used only for assigned Moksha Sewa work.",
  },
  {
    title: "Zero Tolerance Conduct",
    text: "Harassment, discrimination, intimidation, corruption, demand for money, substance abuse during service or disrespectful behaviour may lead to removal.",
  },
];

export default function CodeOfConductPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
      <JsonLd data={breadcrumbJsonLd("/code-of-conduct")} />
      <Topbar />
      <Navbar />
      <PolicyHero
        title="Volunteer Code of Conduct"
        subtitle="Guidelines for responsible seva"
        description="This Code of Conduct explains the standards expected from every Moksha Sewa volunteer while serving families, coordinating field support and representing the mission."
        policyMeta={conductPolicyMeta}
      />

      <main className="mx-auto max-w-[1180px] px-5 py-10 sm:py-12">
        <section className="rounded-[10px] border border-[#E5D8C4] bg-white px-5 py-5 shadow-[0_10px_28px_rgba(78,55,22,0.06)] sm:px-7">
          <div className="flex flex-col gap-4 border-b border-[#E8DDCA] pb-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#B77A18]">
                Moksha Sewa Volunteers
              </p>
              <h1 className="mt-2 text-[32px] font-medium leading-tight text-[#064335] sm:text-[40px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Conduct Built Around Trust, Privacy and Dignity
              </h1>
            </div>
            <div className="flex shrink-0 items-center gap-3 rounded-[8px] bg-[#F8EFE0] px-4 py-3 text-[#064335]">
              <ShieldCheck className="h-7 w-7 text-[#B77A18]" />
              <span className="text-[16px] font-semibold">Mandatory for active volunteers</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {conductSections.map((section, index) => (
              <article key={section.title} className="rounded-[8px] border border-[#E9DDCB] bg-[#FFFDF8] p-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#064335] text-[14px] font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-[19px] font-bold text-[#064335]">{section.title}</h2>
                    <p className="mt-2 text-[16px] leading-7 text-[#594236]">{section.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 rounded-[10px] bg-[#003E31] p-5 text-white md:grid-cols-[auto_1fr] md:items-center">
          <HeartHandshake className="h-12 w-12 text-[#D4A03B]" />
          <div>
            <h2 className="text-[24px] font-semibold">Acknowledgement</h2>
            <p className="mt-2 text-[16px] leading-7 text-[#EFE7D8]">
              By registering or serving as a volunteer, you agree to follow this Code of Conduct, organisational instructions, privacy requirements and all applicable laws. Moksha Sewa may pause or end volunteer participation if these standards are not followed.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
