import { UBSIcon } from "./UnclaimedBodyIcons";

const mini = [
  ["01", "Receive", "We receive the request and details."],
  ["02", "Review", "Our team reviews available case information."],
  ["03", "Coordinate", "If eligible, we coordinate the required support."],
  ["04", "Stand Beside", "We stand beside the family or case with dignity and care."],
] as const;

export default function UnclaimedBodyRequest() {
  return (
    <section id="request-unclaimed-help" className="relative overflow-hidden bg-[#fbf6ed] px-5 py-4">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
        style={{
          backgroundImage: "url('/assets/unclaimed-body/request-background.png')",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)]">
        <div
          className="rounded-[16px] border border-[#eadcc7] bg-cover bg-center bg-no-repeat px-5 py-3 shadow-[0_8px_24px_rgba(50,38,20,.08)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,250,242,.84), rgba(255,250,242,.84)), url('/assets/unclaimed-body/request-background.png')",
          }}
        >
          <p className="text-[16px] font-bold uppercase tracking-[0.12em] text-[#b47a20]"><span className="mr-3">—</span> Request Sewa Help</p>
          <h2 className="mt-1.5 text-[36px] font-medium leading-[1.02] text-[#064335] sm:text-[42px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Need Assistance With
            <br />
            an Unclaimed Body Case?
          </h2>
          <p className="mt-2 max-w-[600px] text-[16px] font-medium leading-[1.3] text-[#414748]">
            Share the available details so our team can understand the situation and review the appropriate next step.
          </p>

          <div className="mt-2.5 rounded-[12px] border border-[#d9c4a0] bg-[#fffaf2]/90 px-4 py-2">
            <p className="flex gap-2.5 text-[16px] leading-[1.3] text-[#414746]">
              <UBSIcon name="ShieldCheck" className="h-7 w-7 shrink-0 text-[#b67e24]" />
              If the matter is currently with a hospital, police station or other competent authority, please complete the applicable official process and obtain the required authorisation before final-journey assistance can proceed.
            </p>
          </div>

          <h3 className="mt-2.5 text-[16px] font-bold text-[#0a4a39]">How it works after we receive your request</h3>
          <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
            {mini.map(([no, title, text]) => (
              <div key={no} className="flex min-h-[66px] items-start gap-2.5 rounded-[10px] bg-white/75 px-3 py-2 text-left">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#eef0e9] text-[16px] font-bold text-[#0b4c3a]">{no}</span>
                <div>
                  <h4 className="text-[16px] font-bold text-[#0b4b3b]">{title}</h4>
                  <p className="mt-0.5 text-[16px] leading-[1.25] text-[#4c5150]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[16px] bg-white p-4 shadow-[0_8px_24px_rgba(50,38,20,.08)]">
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#004b39] text-[#d39b31]"><UBSIcon name="Clipboard" className="h-7 w-7" /></span>
            <h3 className="text-[18px] font-bold uppercase tracking-[0.08em] text-[#0a4b3b]">Share The Details</h3>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2">
            {[
              ["Full Name", "Enter your full name"],
              ["Phone Number", "Enter your phone number"],
              ["Email", "Enter your email address"],
              ["City / Location", "Enter city or location"],
              ["Organisation / Institution (If applicable)", "Enter organisation or institution"],
              ["Hospital / Police Station / Authority (If applicable)", "Enter hospital, police station or authority"],
            ].map(([label, placeholder]) => (
              <label key={label} className="block">
                <span className="mb-1 block text-[16px] font-semibold text-[#222]">{label}</span>
                <input placeholder={placeholder} className="h-[42px] w-full rounded-[7px] border border-[#dfc9ab] px-3 text-[16px] outline-none focus:border-[#a97a31]" />
              </label>
            ))}
          </div>

          <label className="mt-2 block">
            <span className="mb-1 block text-[16px] font-semibold text-[#222]">Case / Authority Reference (If available)</span>
            <input placeholder="Enter case or authority reference" className="h-[42px] w-full rounded-[7px] border border-[#dfc9ab] px-3 text-[16px] outline-none focus:border-[#a97a31]" />
          </label>

          <label className="mt-2 block">
            <span className="mb-1 block text-[16px] font-semibold text-[#222]">Brief Case Details</span>
            <textarea placeholder="Please share available case details..." className="h-[64px] w-full resize-none rounded-[7px] border border-[#dfc9ab] p-3 text-[16px] outline-none focus:border-[#a97a31]" />
          </label>

          <div className="mt-2 rounded-[8px] border border-dashed border-[#cdb28b] bg-[#fbf7ef] px-4 py-2 text-center">
            <p className="text-[16px] font-semibold text-[#3f4545]">Supporting Document Upload</p>
            <p className="mt-1 text-[16px] text-[#666]">Click to upload or drag and drop PDF, JPG, PNG up to 10MB</p>
          </div>

          <label className="mt-2 flex gap-3 text-[16px] leading-[1.3] text-[#3c4342]">
            <input type="checkbox" className="mt-1 h-5 w-5 shrink-0" />
            <span>I confirm that the information provided is accurate to the best of my knowledge and consent to being contacted regarding this Sewa request.</span>
          </label>

          <button type="submit" className="mx-auto mt-3 flex h-[44px] w-full max-w-[300px] items-center justify-between rounded-[7px] bg-[#004b39] px-5 text-[16px] font-bold uppercase text-white">
            Submit Sewa Request
            <UBSIcon name="ArrowRight" className="h-6 w-6" />
          </button>
        </form>
      </div>

      <div className="relative mx-auto mt-3 grid max-w-7xl grid-cols-1 gap-3 rounded-[12px] bg-[#004537] px-5 py-2.5 text-white md:grid-cols-2">
        <p className="flex gap-4 text-[16px] leading-[1.45]"><UBSIcon name="ShieldCheck" className="h-9 w-9 shrink-0 text-[#d4a13b]" />Submitting a request does not guarantee acceptance of a case. Assistance is subject to verification, required authorisation, applicable formalities and availability.</p>
        <p className="flex gap-4 text-[16px] leading-[1.45]"><UBSIcon name="Check" className="h-9 w-9 shrink-0 text-[#d4a13b]" />Thank you. Your Sewa request has been received. Our team will review the information and respond further.</p>
      </div>
    </section>
  );
}
