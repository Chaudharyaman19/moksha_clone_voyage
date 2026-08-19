
import { CSRIcon, type CSRIconName } from "./CSRIcons";

const processes = [
  ["DocumentSearch", "Due Diligence", "Applicable organisational\nand project documentation\nis reviewed."],
  ["Target", "Defined Scope", "Objectives, responsibilities,\nbudgets and deliverables\nare mutually defined."],
  ["Folder", "Documentation", "Relevant activity and\nutilisation records are\nmaintained as applicable."],
  ["Report", "Reporting", "Programme and impact\nreporting is provided\naccording to the agreed\nframework."],
] as const;

export default function ComplianceAccountability() {
  return (
    <section className="relative overflow-hidden bg-[#fbf8f2] px-5 py-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-[455px] w-[58%] bg-no-repeat lg:block"
          style={{
            backgroundImage: "url('/assets/csr/compliance-photo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className="pointer-events-none absolute left-0 top-0 z-[1] hidden h-[455px] w-[61%] lg:block"
          style={{
            background:
              "linear-gradient(90deg,#fbf8f2 0%,#fbf8f2 63%,rgba(251,248,242,.92) 76%,rgba(251,248,242,.45) 90%,transparent 100%)",
          }}
        />

        <div className="relative z-10 min-h-[330px] px-4 pt-2 lg:w-[55%] mt-6">
          <div className="flex items-center gap-6 text-[17px] font-bold uppercase tracking-[0.12em] text-[#07483a]">
            <span className="h-px w-20 bg-[#bd8835]" />
            Compliance & Accountability
            <span className="h-px w-20 bg-[#bd8835]" />
          </div>
          <div className="mt-1 flex items-center gap-3 text-[#bd862e]">
            <span className="h-px w-16 bg-[#bd862e]" /><span>◇</span><span className="h-px w-16 bg-[#bd862e]" />
          </div>
          <h2
            className="mt-2 text-[42px] font-medium leading-[1.05] text-[#064335] lg:text-[48px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Responsible Partnerships
            <br />
            Need Responsible Processes.
          </h2>
          <span className="mt-3 block h-[2px] w-[100px] bg-[#c28b32]" />
          <p className="mt-3 text-[18px] font-medium leading-[1.45] text-[#3b4142]">
         Our approach to CSR partnerships is guided by accountability,<br/>
transparency and well-defined processes at every step.<br/> From initial
discussions to implementation
          </p>
        </div>

        <div className="relative z-20 mt-1 grid grid-cols-1 bg-[#fbf8f2]/95 sm:grid-cols-2 xl:grid-cols-4">
          {processes.map(([icon, title, text], index) => (
            <div key={title} className={`min-h-[200px] px-6 py-3 text-center ${index ? "border-l border-[#d5bd8f]" : ""}`}>
              <span className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-[3px] border-[#c58b29] bg-[#004c3a] text-[#d7a338]">
                <CSRIcon name={icon as CSRIconName} className="h-11 w-11" />
              </span>
              <h3
                className="mt-2 text-[22px] font-semibold text-[#064536]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {title}
              </h3>
              <p className="mt-2 whitespace-pre-line text-[16px] font-medium leading-[1.35] text-[#3f4546]">{text}</p>
            </div>
          ))}
        </div>

        <div className="relative z-20 mx-0 mt-2 flex min-h-[112px] flex-col items-start gap-3 rounded-[12px] border border-[#d8bf8b] bg-[#fffaf2]/95 px-5 py-3 lg:mx-3 lg:flex-row lg:items-center lg:px-7">
          <CSRIcon name="Scale" className="h-12 w-12 shrink-0 text-[#bd8730]" />
          <span className="hidden h-16 w-px bg-[#cdb286] lg:block" />
          <h3 className="w-full text-[22px] font-semibold leading-[1.05] text-[#064536] lg:w-[180px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Legal
            <br />
            Information
          </h3>
          <span className="hidden h-20 w-px bg-[#d0b98f] lg:block" />
          <p className="text-[16px] font-medium leading-[1.5] text-[#3c4244]">
            CSR collaborations are subject to applicable provisions of the Companies Act, 2013, Schedule VII,
            the Companies (CSR Policy) Rules, 2014, as amended, and other applicable requirements.
            Organisational, implementing-agency and project eligibility should be independently verified before
            any collaboration is represented as CSR-compliant.
          </p>
        </div>

        <div className="relative z-20 mt-3 grid grid-cols-1 items-center gap-3 bg-[#eef1e9] px-5 py-3 lg:grid-cols-[56%_44%] lg:px-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full border border-[#ac8f56] bg-[#f7f6ee] text-[#0c4e3b]">
              <CSRIcon name="ShieldCheck" className="h-8 w-8" />
            </span>
            <p className="text-[16px] leading-[1.45] text-[#3b4241]">
              <strong>Important:</strong> Do not display or claim any CSR-1, 12AB, 80G, registration number,
              tax benefit or CSR eligibility until the relevant documentation, validity and applicability have been legally verified.
            </p>
          </div>
          <div className="border-t border-[#aebbac] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <a href="#csr-enquiry" className="inline-flex h-[48px] w-full max-w-[390px] items-center justify-between rounded-[7px] bg-[#004b39] px-5 text-[16px] font-bold uppercase text-white">
              <span className="inline-flex items-center gap-3"><CSRIcon name="Form" className="h-8 w-8 text-[#d4a040]" />Request Compliance Information</span>
              <CSRIcon name="ArrowRight" className="h-6 w-6" />
            </a>
            <p className="mt-1.5 text-[16px] text-[#3f4544]">We are happy to share applicable information upon formal request.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
