import { UBSIcon } from "./UnclaimedBodyIcons";

const principles = [
  ["ShieldCheck", "Authorised Support", "Required legal and administrative clearances are verified before eligible assistance proceeds."],
  ["Lock", "Privacy & Respect", "Sensitive case information is handled responsibly, privately and with dignity at every stage."],
  ["Clipboard", "Responsible Documentation", "Relevant case and activity records are maintained where applicable for clear accountability."],
  ["HeartHands", "No Exploitation", "Human dignity always takes priority over publicity, promotion or unnecessary public exposure."],
] as const;

export default function DignityComesFirst() {
  return (
    <section className="relative overflow-hidden bg-[#003d31] px-5 py-6 text-white">
      <UBSIcon name="Lotus" className="pointer-events-none absolute -left-10 top-10 h-64 w-64 text-[#0b594a]/30" />
      <UBSIcon name="Lotus" className="pointer-events-none absolute -right-10 top-10 h-64 w-64 text-[#0b594a]/30" />
      <div className="relative mx-auto max-w-7xl text-center">
        <UBSIcon name="Lotus" className="mx-auto h-8 w-8 text-[#c69331]" />
        <p className="mt-1 text-[16px] font-bold uppercase tracking-[0.12em] text-[#d0a247]">Sewa With Responsibility</p>
        <h2 className="mt-1.5 text-[42px] font-medium sm:text-[50px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Dignity Comes First.
        </h2>
        <p className="mx-auto mt-2 max-w-[760px] text-[16px] leading-[1.4] text-[#ecebe4]">
          Humanitarian support during a final journey requires sensitivity, privacy and responsible processes.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-0 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map(([icon, title, text], index) => (
            <div key={title} className={`px-6 py-2 ${index ? "xl:border-l xl:border-[#9a8f5f]" : ""}`}>
              <span className="mx-auto grid h-[68px] w-[68px] place-items-center rounded-full border-2 border-[#bd8d34] text-[#d4a33f]">
                <UBSIcon name={icon} className="h-9 w-9" />
              </span>
              <h3 className="mt-2 text-[20px] font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
              <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#be8c31]" />
              <p className="mt-2 text-[16px] leading-[1.35] text-[#e6e4dd]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center rounded-[10px] border border-[#7f7e56] bg-[#084a3d] px-6 py-2.5 text-left">
          <UBSIcon name="ShieldCheck" className="h-8 w-8 shrink-0 text-[#d2a03b]" />
          <p className="ml-4 text-[16px] leading-[1.35] text-[#f1ede3]">
            No deceased person or vulnerable individual should be photographed, identified or publicly presented merely for promotional purposes. Any public documentation should follow applicable law, organisational policy, privacy considerations and dignity-first standards.
          </p>
        </div>
      </div>
    </section>
  );
}
