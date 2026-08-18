import { UBSIcon } from "./UnclaimedBodyIcons";

const mini = [
  ["01", "Receive", "We receive the request and details."],
  ["02", "Review", "Our team reviews available case information."],
  ["03", "Coordinate", "If eligible, we coordinate the required support."],
  ["04", "Stand Beside", "We stand beside the family or case with dignity and care."],
] as const;

export default function UnclaimedBodyRequest() {
  return (
    <section id="request-unclaimed-help" className="relative overflow-hidden bg-[#fbf6ed] px-5 py-9">
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[54%] w-[50%] bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/assets/unclaimed-body/request-background.png')",
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative mx-auto grid max-w-[1550px] grid-cols-1 gap-8 lg:grid-cols-[44%_56%]">
        <div className="px-4 py-4">
          <p className="text-[16px] font-bold uppercase tracking-[0.12em] text-[#b47a20]"><span className="mr-3">—</span> Request Sewa Help</p>
          <h2 className="mt-5 text-[44px] font-medium leading-[1.03] text-[#064335] sm:text-[52px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Need Assistance With
            <br />
            an Unclaimed Body Case?
          </h2>
          <p className="mt-6 max-w-[600px] text-[18px] font-medium leading-[1.55] text-[#414748]">
            Share the available details so our team can understand the situation and review the appropriate next step.
          </p>

          <div className="mt-7 rounded-[12px] border border-[#d9c4a0] bg-[#fffaf2]/90 px-5 py-4">
            <p className="flex gap-3 text-[16px] leading-[1.5] text-[#414746]">
              <UBSIcon name="ShieldCheck" className="h-9 w-9 shrink-0 text-[#b67e24]" />
              If the matter is currently with a hospital, police station or other competent authority, please complete the applicable official process and obtain the required authorisation before final-journey assistance can proceed.
            </p>
          </div>

          <h3 className="mt-7 text-[16px] font-bold text-[#0a4a39]">How it works after we receive your request</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {mini.map(([no, title, text]) => (
              <div key={no} className="text-center">
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#eef0e9] text-[16px] font-bold text-[#0b4c3a]">{no}</span>
                <h4 className="mt-2 text-[16px] font-bold text-[#0b4b3b]">{title}</h4>
                <p className="mt-2 text-[16px] leading-[1.35] text-[#4c5150]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[16px] bg-white p-7 shadow-[0_8px_24px_rgba(50,38,20,.08)]">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#004b39] text-[#d39b31]"><UBSIcon name="Clipboard" className="h-9 w-9" /></span>
            <h3 className="text-[18px] font-bold uppercase tracking-[0.08em] text-[#0a4b3b]">Share The Details</h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["Full Name", "Enter your full name"],
              ["Phone Number", "Enter your phone number"],
              ["Email", "Enter your email address"],
              ["City / Location", "Enter city or location"],
              ["Organisation / Institution (If applicable)", "Enter organisation or institution"],
              ["Hospital / Police Station / Authority (If applicable)", "Enter hospital, police station or authority"],
            ].map(([label, placeholder]) => (
              <label key={label} className="block">
                <span className="mb-2 block text-[16px] font-semibold text-[#222]">{label}</span>
                <input placeholder={placeholder} className="h-[50px] w-full rounded-[7px] border border-[#dfc9ab] px-4 text-[16px] outline-none focus:border-[#a97a31]" />
              </label>
            ))}
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-[16px] font-semibold text-[#222]">Case / Authority Reference (If available)</span>
            <input placeholder="Enter case or authority reference" className="h-[50px] w-full rounded-[7px] border border-[#dfc9ab] px-4 text-[16px] outline-none focus:border-[#a97a31]" />
          </label>

          <label className="mt-4 block">
            <span className="mb-2 block text-[16px] font-semibold text-[#222]">Brief Case Details</span>
            <textarea placeholder="Please share available case details..." className="h-[92px] w-full resize-none rounded-[7px] border border-[#dfc9ab] p-4 text-[16px] outline-none focus:border-[#a97a31]" />
          </label>

          <div className="mt-4 rounded-[8px] border border-dashed border-[#cdb28b] bg-[#fbf7ef] px-5 py-5 text-center">
            <p className="text-[16px] font-semibold text-[#3f4545]">Supporting Document Upload</p>
            <p className="mt-2 text-[16px] text-[#666]">Click to upload or drag and drop PDF, JPG, PNG up to 10MB</p>
          </div>

          <label className="mt-4 flex gap-3 text-[16px] leading-[1.45] text-[#3c4342]">
            <input type="checkbox" className="mt-1 h-5 w-5 shrink-0" />
            <span>I confirm that the information provided is accurate to the best of my knowledge and consent to being contacted regarding this Sewa request.</span>
          </label>

          <button type="submit" className="mt-5 inline-flex h-[54px] w-full items-center justify-between rounded-[7px] bg-[#004b39] px-7 text-[17px] font-bold uppercase text-white">
            Submit Sewa Request
            <UBSIcon name="ArrowRight" className="h-6 w-6" />
          </button>
        </form>
      </div>

      <div className="relative mx-auto mt-7 grid max-w-[1550px] grid-cols-1 gap-4 rounded-[12px] bg-[#004537] px-7 py-5 text-white md:grid-cols-2">
        <p className="flex gap-4 text-[16px] leading-[1.45]"><UBSIcon name="ShieldCheck" className="h-9 w-9 shrink-0 text-[#d4a13b]" />Submitting a request does not guarantee acceptance of a case. Assistance is subject to verification, required authorisation, applicable formalities and availability.</p>
        <p className="flex gap-4 text-[16px] leading-[1.45]"><UBSIcon name="Check" className="h-9 w-9 shrink-0 text-[#d4a13b]" />Thank you. Your Sewa request has been received. Our team will review the information and respond further.</p>
      </div>
    </section>
  );
}
