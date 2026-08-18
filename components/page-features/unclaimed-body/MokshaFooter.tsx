import { UBSIcon } from "./UnclaimedBodyIcons";

export default function MokshaFooter() {
  return (
    <footer className="bg-[#00372d] px-5 py-6 text-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 lg:grid-cols-[28%_16%_18%_18%_20%]">
        <div>
          <UBSIcon name="Lotus" className="h-16 w-16 text-[#d3a13d]" />
          <h3 className="mt-2 text-[28px] font-bold">MOKSHA SEWA</h3>
          <p className="mt-2 text-[16px] text-[#e8e4d9]">A Namo Gange Trust Initiative</p>
          <p className="mt-5 max-w-[340px] text-[16px] leading-[1.5] text-[#d8d5cd]">We stand with compassion, coordination and dignity so no final journey is forgotten.</p>
        </div>
        {[
          ["Quick Links", ["Home", "About Us", "Gallery", "Blog", "Contact Us"]],
          ["Our Services", ["Request Sewa Help", "Transport", "Cremation", "Ritual Material Support", "Priest Guidance", "Family Guidance"]],
          ["Our Initiatives", ["Unclaimed Bodies Support", "Volunteer Program", "Awareness & Outreach"]],
        ].map(([heading, items]) => (
          <div key={heading as string}>
            <h4 className="text-[16px] font-bold uppercase text-[#d3a13d]">{heading}</h4>
            <ul className="mt-4 space-y-2 text-[16px] text-[#e5e2da]">
              {(items as string[]).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-[16px] font-bold uppercase text-[#d3a13d]">Contact Us</h4>
          <div className="mt-4 space-y-3 text-[16px] text-[#e5e2da]">
            <p className="flex gap-3"><UBSIcon name="Phone" className="h-5 w-5 text-[#d3a13d]" />24x7 Sewa Support</p>
            <p>Delhi • Ghaziabad • Noida</p>
          </div>
          <div className="mt-5 rounded-[10px] border border-[#826f42] bg-[#0a4539] p-4">
            <p className="text-[16px] font-bold text-[#d3a13d]">Moksha Sewa</p>
            <p className="mt-2 text-[16px] leading-[1.4] text-[#e8e4dc]">Request support or connect with our team.</p>
            <a href="#request-unclaimed-help" className="mt-4 inline-flex h-[44px] w-full items-center justify-between rounded-[6px] bg-[#d5a13a] px-4 text-[16px] font-bold uppercase text-[#083d32]">Send Request<UBSIcon name="ArrowRight" className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-[1500px] flex-wrap items-center justify-between gap-3 border-t border-[#526b5e] pt-4 text-[16px] text-[#d3d0c7]">
        <p>© 2026 Moksha Sewa. All Rights Reserved.</p>
        <p>Sewa • Samman • Sanrakshan</p>
      </div>
    </footer>
  );
}
