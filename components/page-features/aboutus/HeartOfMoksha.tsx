import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaHandshake, FaUsers } from "react-icons/fa";
import { PiFlowerLotus, PiHandHeart, PiHandsPraying } from "react-icons/pi";

const actions = [
  { label: "Be a\nVolunteer", icon: FaUsers },
  { label: "Partner\nWith Us", icon: FaHandshake },
  { label: "Support the\nMission", icon: PiHandHeart },
];

export default function HeartOfMoksha() {
  return (
    <section className="relative aspect-[4/1] w-full overflow-hidden bg-[#003a2f]">
        <Image
          src="/assets/about-reference/heart-of-moksha-sewa.png"
          alt="Moksha Sewa volunteers beside a sacred river ghat at sunset"
          fill
          sizes="(max-width: 1344px) 100vw, 1344px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003b2f]/45 via-transparent to-transparent" />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-7xl items-center px-6 lg:px-8 2xl:px-0">
            <div className="flex h-full w-[61%] items-center text-left text-white max-lg:w-full max-lg:bg-gradient-to-r max-lg:from-[#003a2f]/95 max-lg:via-[#003a2f]/75 max-lg:to-transparent">
              <div className="flex w-full items-center justify-start gap-[4%]">
            <div className="hidden shrink-0 items-center gap-5 lg:flex">
              <PiHandsPraying className="h-16 w-16 text-[#d3a13e]" />
              <span className="h-24 w-px bg-[#d0a14d]/75" />
            </div>

            <div className="flex w-full max-w-[650px] flex-col items-start text-left">
              <p className="text-[16px] font-semibold uppercase tracking-[0.15em] text-[#d8a43d]">
                The Heart of Moksha Sewa
              </p>

              <div className="mt-2 flex items-center justify-start gap-2 text-[#cda24a]">
                <span className="h-px w-24 bg-[#cda24a]/65" />
                <PiFlowerLotus className="h-5 w-5" />
                <span className="h-px w-24 bg-[#cda24a]/65" />
              </div>

              <h2 className="mt-3 w-full text-left font-serif text-[28px] font-semibold leading-[1.03] tracking-[-0.02em] sm:text-[34px] xl:text-[38px]">
                When Someone Has No One,<br />
                <span className="text-[#d39a3d]">Humanity</span> Must Stand Beside Them.
              </h2>

              <p className="mt-4 w-full max-w-[610px] text-left text-[16px] leading-[1.6] text-white/90">
                Because the final journey is not only about how life ends.<br />
                It is about how we choose to stand beside one another until the very end.
              </p>

              <div className="mt-5 flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-start">
                <Link href="/volunteer" className="inline-flex h-11 w-fit items-center gap-4 bg-[#dda546] px-6 text-[16px] font-bold uppercase tracking-[0.08em] text-[#113e31] shadow-[0_4px_8px_rgba(0,0,0,.2)] transition hover:bg-[#ebba61]">
                  Join the Mission
                  <FaArrowRight className="h-3 w-3" />
                </Link>

                <div className="flex items-center">
                  {actions.map(({ label, icon: Icon }, index) => (
                    <div key={label} className={`flex min-w-[92px] flex-col items-center px-3 text-center ${index ? "border-l border-[#d4aa53]/35" : ""}`}>
                      <span className="grid h-9 w-9 place-items-center border border-[#d0a346] text-[#d0a346]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="mt-1 whitespace-pre-line text-[16px] leading-[1.15] text-white">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

        <PiFlowerLotus className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-36 text-[#d0a14d]/[.07]" />
    </section>
  );
}
