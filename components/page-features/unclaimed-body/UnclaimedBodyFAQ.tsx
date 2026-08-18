import { UBSIcon } from "./UnclaimedBodyIcons";

const faqs = [
  ["What is an unclaimed body?", "The legal or administrative status of a deceased person is determined by competent authorities under applicable procedures. Moksha Sewa does not independently declare a body to be unclaimed."],
  ["Who can request Unclaimed Body Sewa?", "Requests may come from competent authorities, hospitals, recognised institutions or people with verifiable information, depending on the circumstances."],
  ["What documents or authorisation may be required?", "Requirements depend on the case and applicable local process. Assistance can proceed only after the required formalities and authorisation are available."],
  ["What support can Moksha Sewa provide?", "Depending on eligibility, authorisation and resources, support may include transport coordination, cremation or last-rites assistance, ritual essentials and on-ground coordination."],
  ["Does Moksha Sewa declare a body legally unclaimed?", "No. Moksha Sewa provides humanitarian assistance and does not replace the authority of competent legal or administrative bodies."],
  ["Where is Unclaimed Body Sewa currently available?", "Availability depends on location, case verification, local coordination and available resources."],
];

export default function UnclaimedBodyFAQ() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-5 py-10">
      <div className="mx-auto max-w-[1350px] text-center">
        <div className="flex items-center justify-center gap-3 text-[16px] font-bold uppercase tracking-[0.1em] text-[#b37b22]"><span className="h-px w-14 bg-[#c69139]" />Help &amp; Information<span className="h-px w-14 bg-[#c69139]" /></div>
        <h2 className="mt-4 text-[44px] font-medium leading-[1.05] text-[#064335] sm:text-[54px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-[20px] font-medium text-[#3f4546]">About Unclaimed Body Sewa</p>

        <div className="mx-auto mt-8 max-w-[900px] space-y-3 text-left">
          {faqs.map(([q, a], index) => (
            <details key={q} open={index === 0} className="group rounded-[8px] border border-[#ddd3c4] bg-white px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center gap-4 text-[16px] font-bold text-[#34403e]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#004b39] text-white"><UBSIcon name="ShieldCheck" className="h-5 w-5" /></span>
                <span className="flex-1">{q}</span>
                <span className="text-[#8e7b58] group-open:rotate-180">⌄</span>
              </summary>
              <p className="pl-12 pt-3 text-[16px] leading-[1.5] text-[#555b5a]">{a}</p>
            </details>
          ))}
        </div>

        <a href="#" className="mx-auto mt-6 inline-flex h-[50px] min-w-[180px] items-center justify-between rounded-[7px] border border-[#c89a56] bg-[#fffaf2] px-6 text-[16px] font-bold uppercase text-[#0b4b3b]">
          View All FAQs
          <UBSIcon name="ArrowRight" className="h-5 w-5" />
        </a>
      </div>

      <div
        className="relative mx-auto mt-8 min-h-[165px] max-w-[1350px] overflow-hidden rounded-[12px] bg-[#003e32] px-7 py-6 text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0,62,50,.78),rgba(0,62,50,.78)), url('/assets/unclaimed-body/request-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <p className="text-center text-[16px] font-bold uppercase tracking-[0.08em] text-[#d3a13f]">Dignity Until The Very End</p>
        <h3 className="mt-2 text-center text-[30px] font-medium" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          When Someone Has No One, Humanity Must Stand Beside Them.
        </h3>
        <p className="mt-3 text-center text-[16px] text-[#edeae2]">Every final journey deserves dignity, care and respect.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href="#request-unclaimed-help" className="inline-flex h-[48px] min-w-[190px] items-center justify-between rounded-[6px] bg-[#d39b37] px-5 text-[16px] font-bold uppercase text-[#0a4335]">Request Sewa Help<UBSIcon name="ArrowRight" className="h-5 w-5" /></a>
          <a href="#" className="inline-flex h-[48px] min-w-[190px] items-center justify-between rounded-[6px] border border-[#c69336] bg-transparent px-5 text-[16px] font-bold uppercase text-white">Support The Mission<UBSIcon name="ArrowRight" className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}
