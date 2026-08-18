"use client";

import Image from "next/image";
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({
  children,
  className = "h-5 w-5",
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

function LotusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 20c-4.8-1.4-8-4.5-8-8.2 3.9.1 6.7 1.4 8 4.2 1.3-2.8 4.1-4.1 8-4.2 0 3.7-3.2 6.8-8 8.2Z" />
      <path d="M12 16c-2.7-2.1-4.1-4.6-3.6-7.6 2.2.7 3.5 2 3.6 4.1.1-2.1 1.4-3.4 3.6-4.1.5 3-1 5.5-3.6 7.6Z" />
      <path d="M12 12.5C10.3 10.3 10 7.9 12 5.5c2 2.4 1.7 4.8 0 7Z" />
      <path d="M7 21h10" />
    </IconBase>
  );
}

function HandHeartIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M8.5 11.5 6.8 9.8a2.4 2.4 0 0 0-3.4 3.4l5.7 5.7c.8.8 2 .8 2.8.1l3.1-2.8" />
      <path d="M13.3 8.4c.9-1.3 2.8-1.4 3.8-.2 1-1.2 2.9-1.1 3.8.2 1 1.5.4 3.2-.7 4.2L17.1 15 14 12.6c-1.2-1-1.7-2.7-.7-4.2Z" />
      <path d="M11.5 14.7h3.4c1.4 0 2.4.8 2.7 1.9" />
    </IconBase>
  );
}

function PriestIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="7" r="3" />
      <path d="M5.5 20c.6-4.1 2.8-6.3 6.5-6.3s5.9 2.2 6.5 6.3" />
      <path d="M9.4 4.8c.8-.9 1.7-1.3 2.6-1.3s1.8.4 2.6 1.3" />
      <path d="M9.5 14.2 12 18l2.5-3.8" />
    </IconBase>
  );
}

function FlameIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 22c4.1 0 7-2.8 7-6.8 0-3.1-1.7-5.3-4.7-8.4.1 2.6-1 4.2-2.2 5.2-.2-3.6-1.9-6.1-4.3-8C8 8.8 5 10.6 5 15.2 5 19.2 7.9 22 12 22Z" />
      <path d="M9.7 17.1c0 1.5 1 2.6 2.3 2.6s2.3-1.1 2.3-2.6c0-1-.6-2-1.9-3.2-.1 1-.5 1.7-1.1 2.2-.1-1.3-.6-2.3-1.4-3.1-.2 1.7-.2 2.8-.2 4.1Z" />
    </IconBase>
  );
}

function AmbulanceIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h3.2l3.8 3.8V17h-7" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="M7 9v4M5 11h4" />
    </IconBase>
  );
}

function PackageIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12v9" />
      <path d="m8 5.3 8 4.6" />
    </IconBase>
  );
}

function BadgeCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.5 14 5l2.5-.2.8 2.4 2 1.5-.9 2.3.6 2.4-2.1 1.3-.9 2.3-2.5-.1L12 18.5 10 17l-2.5.1-.9-2.3-2.1-1.3.6-2.4-.9-2.3 2-1.5.8-2.4 2.5.2L12 3.5Z" />
      <path d="m8.8 11.2 2 2 4.5-4.5" />
    </IconBase>
  );
}

function UsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c.4-4.1 2.2-6.3 5.5-6.3s5.1 2.2 5.5 6.3" />
      <path d="M15.8 5.4a3 3 0 0 1 0 5.2M16.8 13.8c2.3.7 3.4 2.8 3.7 6.2" />
    </IconBase>
  );
}

function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5.4 3.8 8.7 3l1.7 4.1-2 1.7a15.8 15.8 0 0 0 6.8 6.8l1.7-2 4.1 1.7-.8 3.3c-.3 1.2-1.4 2-2.6 1.9C10.4 19.8 4.2 13.6 3.5 6.4c-.1-1.2.7-2.3 1.9-2.6Z" />
    </IconBase>
  );
}

function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3 20 6v5.7c0 4.8-3.2 7.8-8 9.3-4.8-1.5-8-4.5-8-9.3V6l8-3Z" />
      <path d="m8.7 12 2.2 2.2 4.6-4.6" />
    </IconBase>
  );
}

function BoxIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </IconBase>
  );
}

const sevaStats = [
  {
    value: "Verified",
    title: "Case Support",
    caption: "For Eligible Families",
    icon: HandHeartIcon,
  },
  {
    value: "Guided",
    title: "Ritual Support",
    caption: "Local Availability",
    icon: PriestIcon,
  },
  {
    value: "Delhi NCR",
    title: "Cremation Ground Support",
    caption: "Family Guidance",
    icon: FlameIcon,
  },
];

export default function CompassionSection() {
  const stats = sevaStats;

  const features = [
    {
      title: "Ambulance Support",
      text: "Transport with respect",
      icon: AmbulanceIcon,
    },
    {
      title: "Ritual Essentials",
      text: "Wood, cloth, flowers and samagri",
      icon: PackageIcon,
    },
    {
      title: "Priest Guidance",
      text: "Final rites with proper guidance",
      icon: BadgeCheckIcon,
    },
    {
      title: "Volunteer Support",
      text: "Help at hospital, home and ghat",
      icon: UsersIcon,
    },
  ];

  return (
    <section className="relative w-full min-h-[560px] overflow-hidden md:min-h-[600px] lg:min-h-[640px]">
      {/* Background dimensions and positioning are intentionally unchanged. */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image
            src="/assets/chatgpt.png"
            alt=""
            fill
            quality={75}
            sizes="100vw"
            aria-hidden="true"
            className="object-contain object-right"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#FBF7EF_0%,#FBF7EF_37%,rgba(251,247,239,0.96)_44%,rgba(251,247,239,0.55)_53%,rgba(251,247,239,0)_68%)]" />
        </div>

        <div className="absolute left-0 top-0 h-full w-[47%] opacity-[0.12] [background-image:radial-gradient(circle_at_20%_20%,#B7833E_0.7px,transparent_0.8px)] [background-size:18px_18px]" />
        <div className="absolute left-0 top-0 h-full w-[42%] bg-[radial-gradient(circle_at_0%_0%,rgba(202,157,93,0.12),transparent_42%)]" />
      </div>

      <div className="relative z-10 mx-auto h-full min-h-[560px] max-w-7xl px-0 md:min-h-[600px] lg:min-h-[640px]">
        <div className="flex h-full min-h-[560px] items-center md:min-h-[600px] lg:min-h-[640px]">
          <div className="w-full max-w-[650px] px-5 py-7 sm:px-7 md:px-8 lg:px-0 lg:py-8">
            {/* Brand row */}
            <div className="mb-3 flex items-end gap-3">
              <div className="flex h-11 w-11 items-center justify-center text-[#956A32]">
                <LotusIcon className="h-9 w-9" />
              </div>
              <span className="pb-0.5 text-[16px] font-semibold uppercase tracking-[0.28em] text-[#7F5A2E]">
                CREMATION & LAST RITES SUPPORT
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-2.5 text-[31px] font-normal leading-[1.08] text-[#26140D] sm:text-[38px] lg:text-[44px]"
            >
              <span className="block">
                When a Family Needs Help
              </span>
              <span className="mt-1 block text-[#956A32]">
                We Arrange the Essentials
              </span>
            </h2>

            {/* Decorative flourish */}
            <div className="mb-3.5 flex items-center gap-2 text-[#AE7B35]">
              <span className="h-px w-16 bg-[#AE7B35]" />
              <LotusIcon className="h-5 w-5" />
              <span className="h-px w-16 bg-gradient-to-r from-[#AE7B35] to-transparent" />
            </div>

            {/* Description */}
            <p className="mb-4 max-w-[600px] text-[16px] font-normal leading-[1.6] text-[#3F2A1F] sm:text-[16px]">
              At{" "}
              <span className="font-semibold text-[#865E30]">
                Moksha Sewa
              </span>
              , we support economically weaker families and legally authorised unclaimed cases with practical final-rites coordination. Our team helps coordinate transport, ritual guidance, essential materials, relief support and on-ground volunteers after verification and required formalities.
            </p>

            {/* Stat cards */}
            <div className="mb-4 grid max-w-[555px] grid-cols-1 gap-2 sm:grid-cols-3">
              {stats.map(({ value, title, caption, icon: StatIcon }) => (
                <article
                  key={title}
                  className="group rounded-lg border border-[#CDAF86]/35 bg-white/65 px-2.5 py-2 text-center shadow-[0_8px_24px_rgba(83,55,28,0.08)] backdrop-blur-sm transition-transform hover:-translate-y-0.5"
                >
                  <div className="mx-auto mb-1 grid h-10 w-10 place-items-center text-[#A87531]">
                    <StatIcon className="h-9 w-9" />
                  </div>
                  <div
                    className="text-[24px] font-semibold leading-none text-[#392116]"
                  >
                    {value}
                  </div>
                  <div className="mt-1 text-[16px] font-medium leading-tight text-[#39261B]">
                    {title}
                  </div>
                  <div className="mt-1 text-[16px] leading-tight text-[#786254]">
                    {caption}
                  </div>
                </article>
              ))}
            </div>

            {/* Feature grid */}
            <div className="mb-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {features.map(({ title, text, icon: FeatureIcon }) => (
                <div key={title} className="flex items-start gap-2.5">
                  <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#A87632] text-white shadow-sm">
                    <FeatureIcon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-[16px] font-semibold leading-tight text-[#332117]">
                      {title}
                    </div>
                    <div className="mt-1 text-[16px] leading-snug text-[#6F5A4C]">
                      {text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <a
                href="/request-help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-center text-[16px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)] sm:text-[16px]"
              >
                <HandHeartIcon className="h-5 w-5" />
                Request Sewa Support
              </a>

              <a
                href="tel:+919810247319"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-7 text-center text-[16px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)] sm:text-[16px]"
              >
                <PhoneIcon className="h-5 w-5" />
                Call for Help
              </a>
            </div>

            {/* Bottom trust strip */}
            <div className="mt-4 flex w-fit max-w-full flex-col overflow-hidden rounded-xl border border-white/70 bg-white/65 shadow-[0_8px_24px_rgba(76,48,23,0.08)] backdrop-blur-sm sm:flex-row">
              <div className="flex min-w-[235px] items-center gap-3 px-4 py-2.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#9A6B31]/10 text-[#8B5F2D]">
                  <PriestIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[#4A3020]">
                    Priest Support
                  </div>
                  <div className="text-[16px] text-[#796556]">
                    Experienced & Verified
                  </div>
                </div>
              </div>

              <span className="hidden w-px bg-[#BFA57E]/35 sm:block" />

              <div className="flex min-w-[250px] items-center gap-3 px-4 py-2.5">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#9A6B31]/10 text-[#8B5F2D]">
                  <BoxIcon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[16px] font-semibold text-[#4A3020]">
                    Ritual Items & Guidance
                  </div>
                  <div className="text-[16px] text-[#796556]">
                    Complete Essentials
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right-bottom trust badge */}
      <div className="absolute bottom-5 right-12 z-20 hidden items-center gap-3 rounded-2xl border border-[#CBAA77]/45 bg-[#FFF9EF]/90 px-4 py-3 text-[#5A3A21] shadow-[0_12px_35px_rgba(54,34,17,0.16)] backdrop-blur-md lg:flex">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#A67635]/10 text-[#8E612E]">
          <ShieldIcon className="h-6 w-6" />
        </div>
        <div className="text-[16px] leading-relaxed">
          <div className="font-semibold">Compassionate Support.</div>
          <div>Dignified Goodbyes.</div>
        </div>
      </div>
    </section>
  );
}
