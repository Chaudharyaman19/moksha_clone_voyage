
import { CSRIcon } from "./CSRIcons";

export default function CSRFinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#002f28] px-5 py-7 text-white">
      <CSRIcon name="Lotus" className="pointer-events-none absolute -left-6 top-12 h-48 w-48 text-[#0d493f]/30" />
      <CSRIcon name="Lotus" className="pointer-events-none absolute -right-6 top-12 h-48 w-48 text-[#0d493f]/30" />
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex items-center justify-center gap-5 text-[17px] uppercase tracking-[0.06em] text-[#d39a2d]">
          <span className="h-px w-16 bg-[#c28a31]" />
          <CSRIcon name="Lotus" className="h-8 w-8" />
          Purpose Meets Responsibility
          <span className="h-px w-16 bg-[#c28a31]" />
        </div>
        <h2 className="mt-3 text-[46px] font-medium leading-[1.05] sm:text-[56px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Create Meaningful Human Impact With Us<span className="text-[#d4942d]">.</span>
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3 text-[#c99330]">
          <span className="h-px w-16 bg-[#c99330]" /><span>◆</span><span className="h-px w-16 bg-[#c99330]" />
        </div>
        <p className="mx-auto mt-5 max-w-[900px] text-[20px] leading-[1.5] text-[#f1eee8]">
          Explore a responsible collaboration that brings corporate participation
          <br />
          and humanitarian service together with dignity and accountability.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-7">
          <a href="#csr-enquiry" className="inline-flex h-[64px] w-full max-w-[460px] items-center justify-between rounded-[7px] bg-[#f0b64e] px-6 text-[16px] font-bold uppercase text-[#0a4335] sm:px-10 sm:text-[20px]">
            Discuss a CSR Partnership
            <CSRIcon name="ArrowRight" className="h-7 w-7" />
          </a>
          <a href="#organisation" className="inline-flex h-[64px] w-full max-w-[490px] items-center justify-between rounded-[7px] border-2 border-[#c89132] bg-transparent px-6 text-[16px] font-bold uppercase text-white sm:px-10 sm:text-[20px]">
            Request Organisation Profile
            <CSRIcon name="ArrowRight" className="h-7 w-7" />
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#bb8a35]" />
    </section>
  );
}
