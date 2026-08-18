import { UBSIcon } from "./UnclaimedBodyIcons";

const principles = [
  ["ShieldCheck", "Authorised Support", "Required legal or administrative clearance should be in place before applicable assistance proceeds."],
  ["Lock", "Privacy & Respect", "Sensitive case information should be handled responsibly and with dignity."],
  ["Clipboard", "Responsible Documentation", "Relevant case and activity records may be maintained where applicable for accountability."],
  ["HeartHands", "No Exploitation", "Human dignity must always take priority over publicity or promotional content."],
] as const;

export default function DignityComesFirst() {
  return (
    <section className="relative overflow-hidden bg-[#003d31] px-5 py-10 text-white">
      <UBSIcon name="Lotus" className="pointer-events-none absolute -left-10 top-10 h-64 w-64 text-[#0b594a]/30" />
      <UBSIcon name="Lotus" className="pointer-events-none absolute -right-10 top-10 h-64 w-64 text-[#0b594a]/30" />
      <div className="relative mx-auto max-w-[1500px] text-center">
        <UBSIcon name="Lotus" className="mx-auto h-8 w-8 text-[#c69331]" />
        <p className="mt-2 text-[16px] font-bold uppercase tracking-[0.12em] text-[#d0a247]">Sewa With Responsibility</p>
        <h2 className="mt-3 text-[46px] font-medium sm:text-[56px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Dignity Comes First.
        </h2>
        <p className="mx-auto mt-5 max-w-[760px] text-[17px] leading-[1.55] text-[#ecebe4]">
          Humanitarian support during a final journey requires sensitivity, privacy and responsible processes.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map(([icon, title, text], index) => (
            <div key={title} className={`px-8 py-4 ${index ? "xl:border-l xl:border-[#9a8f5f]" : ""}`}>
              <span className="mx-auto grid h-[82px] w-[82px] place-items-center rounded-full border-2 border-[#bd8d34] text-[#d4a33f]">
                <UBSIcon name={icon} className="h-11 w-11" />
              </span>
              <h3 className="mt-4 text-[20px] font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
              <span className="mx-auto mt-3 block h-[2px] w-10 bg-[#be8c31]" />
              <p className="mt-4 text-[16px] leading-[1.45] text-[#e6e4dd]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center rounded-[10px] border border-[#7f7e56] bg-[#084a3d] px-7 py-4 text-left">
          <UBSIcon name="ShieldCheck" className="h-10 w-10 shrink-0 text-[#d2a03b]" />
          <p className="ml-5 text-[16px] leading-[1.45] text-[#f1ede3]">
            No deceased person or vulnerable individual should be photographed, identified or publicly presented merely for promotional purposes. Any public documentation should follow applicable law, organisational policy, privacy considerations and dignity-first standards.
          </p>
        </div>
      </div>
    </section>
  );
}
