"use client";

import type { ReactNode, SVGProps } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";

type IconName =
  | "phone"
  | "heart"
  | "shield"
  | "clock"
  | "hands"
  | "leaf"
  | "ritual"
  | "team"
  | "ambulance"
  | "pin"
  | "family"
  | "support";

interface InfoItem {
  icon: IconName;
  title: string;
  copy: string;
}

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const highlights: InfoItem[] = [
  {
    icon: "clock",
    title: "24/7 Response",
    copy: "Available round the clock whenever a case is reported.",
  },
  {
    icon: "shield",
    title: "Legally Verified",
    copy: "Every case proceeds only after due police or hospital authorisation.",
  },
  {
    icon: "hands",
    title: "Respectful Handling",
    copy: "Complete dignity maintained at every single step.",
  },
  {
    icon: "leaf",
    title: "No Discrimination",
    copy: "Sewa is offered regardless of identity, faith or background.",
  },
];

const steps: InfoItem[] = [
  {
    icon: "phone",
    title: "Case Reported",
    copy: "Police, hospital, NGO or a citizen informs us of an unclaimed body.",
  },
  {
    icon: "shield",
    title: "Verification",
    copy: "Authorities complete identification attempts and legal formalities.",
  },
  {
    icon: "hands",
    title: "Rites Coordinated",
    copy: "We coordinate transport, rituals and cremation with due respect.",
  },
  {
    icon: "leaf",
    title: "Dignified Farewell",
    copy: "A peaceful, respectful farewell is ensured for every soul.",
  },
];

const stories = [
  {
    image: "/unclaimed-body-sewa/story-always-ready.webp",
    icon: "clock" as IconName,
    title: "Always Ready to Respond",
    copy: "On-call coordination for every reported unclaimed case.",
  },
  {
    image: "/unclaimed-body-sewa/story-verified-coordination.webp",
    icon: "shield" as IconName,
    title: "Verified & Authorised",
    copy: "Every case proceeds strictly after legal clearance.",
  },
  {
    image: "/unclaimed-body-sewa/story-peaceful-rites.webp",
    icon: "leaf" as IconName,
    title: "Peaceful Last Rites",
    copy: "Complete rites performed with full respect and care.",
  },
];

const receiveItems: InfoItem[] = [
  {
    icon: "ritual",
    title: "Cremation Arrangements",
    copy: "Ground, wood and ritual essentials arranged with care.",
  },
  {
    icon: "team",
    title: "Authority Coordination",
    copy: "Working closely with police, hospitals & municipal bodies.",
  },
  {
    icon: "ambulance",
    title: "Transport Support",
    copy: "Respectful transport arranged to the cremation site.",
  },
  {
    icon: "shield",
    title: "Legal Documentation",
    copy: "Records maintained for every case as per due process.",
  },
  {
    icon: "phone",
    title: "Reporting Helpline",
    copy: "A dedicated line to report unclaimed cases anytime.",
  },
];

const trustItems: InfoItem[] = [
  {
    icon: "leaf",
    title: "Dignity for Every Soul",
    copy: "No one is denied a respectful farewell.",
  },
  {
    icon: "shield",
    title: "Fully Verified Process",
    copy: "Every case is legally authorised before rites.",
  },
  {
    icon: "family",
    title: "Standing In For Family",
    copy: "We become family when there is none to claim.",
  },
  {
    icon: "pin",
    title: "Wide Coverage",
    copy: "Responding across Delhi • Ghaziabad • Noida and nearby regions.",
  },
  {
    icon: "support",
    title: "End-to-End Care",
    copy: "From first report to final rites, complete support.",
  },
];

const supportBullets = [
  "Coordination with police, hospitals & municipal bodies for authorised cases",
  "Cremation ground arrangements and ritual essentials",
  "Complete last rites performed as per due process",
  "Records and documentation maintained for every case",
];

const primaryButton =
  "inline-flex min-h-[37px] items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-transparent bg-gradient-to-b from-[#A77A38] to-[#8B5D21] px-[15px] text-[20px] font-medium text-white shadow-[0_5px_12px_rgba(88,55,17,0.18),inset_0_1px_rgba(255,255,255,0.22)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_7px_15px_rgba(88,55,17,0.23)]";

export default function UnclaimedBodySewa() {
  return (
    <div className="service-page min-h-screen bg-[#FDFBF7] font-sans text-[#2F2922]">
      <Topbar />
      <Navbar />

      <main className="w-full bg-[#FBFAF7] pt-24 lg:pt-24">
        <div className="w-full overflow-hidden bg-[#FBFAF7]">
          <HeroSection />
          <FeatureHighlights />
          <HowItWorks />
          <SupportSection />
          <StoryCards />
          <ReceiveSection />
          <TrustSection />
          <DonationSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="service-banner relative min-h-[500px] overflow-hidden bg-[#FBF8F1] max-[820px]:min-h-[700px]">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-[40%] right-0 bg-[url('/unclaimed-body-sewa/hero-unclaimed-body-sewa.webp')] bg-[length:100%_100%] bg-right-center bg-no-repeat max-[820px]:inset-x-0 max-[820px]:top-0 max-[820px]:h-[310px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,#FAF7F0_0%,#FAF7F0_40%,rgba(250,247,240,0.98)_46%,rgba(250,247,240,0.84)_52%,rgba(250,247,240,0.35)_61%,transparent_70%)] max-[820px]:bg-[linear-gradient(180deg,transparent_0%,transparent_35%,rgba(250,247,240,0.9)_47%,#FAF7F0_58%,#FAF7F0_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-5 py-[20px] lg:px-0">
        <div className="w-[52%] max-[820px]:w-auto max-[820px]:pt-[350px]">
          <div className="mb-[2px] flex items-center gap-[9px] text-[24px] font-normal tracking-wide text-[#8B682F]">
            <span className="grid size-[21px] place-items-center rounded-full bg-[#9C6D2A] text-white shadow-[0_3px_8px_rgba(106,70,24,0.18)]">
              <Icon name="leaf" size={14} />
            </span>

            <span>Dignity For The Unidentified &amp; Unclaimed</span>
          </div>

          <h1 className="pb-[20px] pt-[8px] font-serif text-[30px] font-normal leading-[1.1] text-[#2B251F]">
            Unclaimed Body Sewa
            <br />
            No One Is Left Without Dignity
          </h1>

          <Divider className="my-3 w-[127px]" />

          <p className="w-full max-w-[440px] text-[18px] leading-relaxed text-[#50483F] max-[820px]:max-w-none">
            Namo Gange coordinates verified, legally authorised last rites for
            unclaimed and unidentified bodies, working closely with police,
            hospitals and municipal authorities to ensure a respectful farewell
            for every soul.
          </p>

          <div className="mt-4 flex gap-3 max-[520px]:flex-col">
            <a className={primaryButton} href="tel:+919654900525">
              <Icon name="phone" size={18} />
              <span>Report an Unclaimed Case</span>
            </a>

            <a
              className="inline-flex min-h-[37px] items-center justify-center gap-2 whitespace-nowrap rounded-[6px] border border-[#B68B50] bg-white/80 px-[15px] text-[20px] font-medium text-[#7D561F] shadow-[0_3px_9px_rgba(86,59,25,0.08)] transition-all duration-200 hover:-translate-y-px hover:bg-white"
              href="/request-help"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="heart" size={17} />
              <span>Request Support</span>
            </a>
          </div>

          <div className="mt-4 flex items-center gap-[6px] text-[18px] font-normal text-[#756858]">
            <span className="text-[#A87935]">
              <Icon name="shield" size={16} />
            </span>

            <span>
              Every last rite proceeds only after due legal verification.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureHighlights() {
  return (
    <section
      aria-label="Service highlights"
      className="relative z-20 -mt-px mx-auto grid w-full max-w-7xl grid-cols-4 gap-[12px] bg-[#FBFAF7] px-5 pb-[5px] pt-[10px] lg:px-0 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1"
    >
      {highlights.map((item) => (
        <article
          className="flex h-full min-h-[68px] items-center gap-[9px] rounded-[7px] border border-[#E5DAC8] bg-[#FFFDF9]/90 px-[11px] py-[8px] shadow-[0_4px_10px_rgba(79,55,24,0.045),inset_0_0_0_1px_rgba(255,255,255,0.55)]"
          key={item.title}
        >
          <div className="grid h-[36px] min-w-[36px] place-items-center text-[#9C6D2A]">
            <Icon name={item.icon} size={35} />
          </div>

          <div>
            <h3 className="mb-[3px] text-[20px] font-semibold leading-[1.15] text-[#2F2A24]">
              {item.title}
            </h3>

            <p className="text-[18px] leading-snug text-[#5A5148]">
              {item.copy}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-1 pt-0 lg:px-0">
      <SectionTitle>How It Works</SectionTitle>

      <div className="grid grid-cols-4 gap-[12px] max-[820px]:grid-cols-2 max-[520px]:grid-cols-1">
        {steps.map((step, index) => (
          <div className="relative" key={step.title}>
            <article className="relative h-full min-h-[102px] rounded-[7px] border border-[#E5DAC8] bg-[#FFFDFA] px-[12px] pb-[8px] pt-[18px] text-center shadow-[0_5px_13px_rgba(76,53,23,0.04)]">
              <span className="absolute -top-[14px] left-1/2 grid size-[24px] -translate-x-1/2 place-items-center rounded-full border-2 border-[#FFF7EB] bg-[#9C6D2A] font-serif text-[20px] text-white shadow-[0_3px_7px_rgba(81,51,15,0.15)]">
                {index + 1}
              </span>

              <div className="mx-auto mb-1 grid h-[34px] place-items-center text-[#9C6D2A]">
                <Icon name={step.icon} size={33} />
              </div>

              <h3 className="mb-[3px] text-[20px] font-semibold">
                {step.title}
              </h3>

              <p className="text-[18px] leading-snug text-[#514A42]">
                {step.copy}
              </p>
            </article>

            {index < steps.length - 1 ? (
              <span className="absolute -right-[11px] top-1/2 z-20 -translate-y-1/2 text-[22px] font-normal text-[#9C6D2A] [text-shadow:0_1px_#fff] max-[820px]:hidden">
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function SupportSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-[37%_63%] items-stretch gap-[14px] px-5 pt-[7px] lg:px-0 max-[820px]:grid-cols-1">
      <div className="flex h-full flex-col justify-center px-[3px] py-[12px] max-[820px]:py-[8px]">
        <h2 className="py-[20px] font-serif text-[30px] font-normal leading-[1.1] text-[#28231E]">
          Every Soul Deserves
          <br />
          A Dignified Farewell
        </h2>

        <span className="my-[11px] block h-px w-[145px] bg-gradient-to-r from-[#9C6D2A] to-transparent" />

        <p className="text-[18px] leading-relaxed text-[#554C43]">
          When there is no family to claim a body, we step in. Our unclaimed
          body sewa ensures every case is handled with verified authorisation,
          full respect and complete last rites.
        </p>

        <ul className="mt-[11px] grid gap-[7px]">
          {supportBullets.map((item) => (
            <li
              className="flex items-start gap-[7px] text-[18px] leading-[1.3] text-[#3F3831]"
              key={item}
            >
              <span className="mt-px grid size-[16px] shrink-0 place-items-center rounded-full bg-[#9C6D2A] text-[20px] font-normal text-white">
                ✓
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a
          className={`${primaryButton} mt-[13px] min-h-[36px] self-start px-[15px] text-[20px]`}
          href="tel:+919654900525"
        >
          <span>Report an Unclaimed Case</span>
          <Icon name="heart" size={15} />
        </a>
      </div>

      <div className="self-center overflow-hidden rounded-xl bg-[#E8D8C4] shadow-[inset_0_0_0_1px_rgba(95,63,25,0.1),0_5px_12px_rgba(70,47,20,0.07)]">
        <Image
          alt="Volunteers coordinating a respectful last rite"
          className="block h-auto w-full"
          width={1100}
          height={620}
          sizes="(max-width: 820px) 100vw, 50vw"
          src="/unclaimed-body-sewa/support-mission.webp"
        />
      </div>
    </section>
  );
}

function StoryCards() {
  return (
    <section
      aria-label="Unclaimed body sewa stories"
      className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-[10px] px-5 pb-[5px] pt-[8px] lg:px-0 max-[820px]:grid-cols-1"
    >
      {stories.map((story) => (
        <article
          className="flex h-full w-full flex-col overflow-hidden rounded-[10px] bg-[#392719] shadow-[0_4px_10px_rgba(58,38,16,0.14)]"
          key={story.title}
        >
          <Image
            alt={story.title}
            className="block aspect-[2.25/1] w-full object-cover object-center"
            width={720}
            height={320}
            sizes="(max-width: 820px) 100vw, 33vw"
            src={story.image}
          />

          <div className="flex min-h-[58px] flex-1 items-center gap-[10px] bg-gradient-to-b from-[#4A2D17] to-[#351F0E] px-[12px] py-[8px] text-[#F6E8C9]">
            <span className="grid size-[34px] shrink-0 place-items-center rounded-full border border-[#DAB471]/70 text-[#D8B372]">
              <Icon name={story.icon} size={23} />
            </span>

            <div className="min-w-0">
              <h3 className="mb-[2px] text-[20px] font-semibold leading-[1.15] text-[#E2BD78]">
                {story.title}
              </h3>

              <p className="text-[18px] leading-snug text-[#F5EEE2]">
                {story.copy}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function ReceiveSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 lg:px-0">
      <SectionTitle compact>What We Coordinate</SectionTitle>
      <InfoGrid items={receiveItems} />
    </section>
  );
}

function TrustSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-[4px] lg:px-0">
      <SectionTitle compact>Why This Sewa Matters</SectionTitle>
      <InfoGrid compact items={trustItems} />
    </section>
  );
}

function DonationSection() {
  return (
    <section
      className="mx-auto mb-[14px] mt-[8px] w-full max-w-7xl px-5 lg:px-0"
      id="donate"
    >
      <div className="relative min-h-[168px] w-full overflow-hidden rounded-[11px] bg-gradient-to-r from-[#83561F] via-[#6F471C] to-[#4D2F18] text-[#FFF5E6] shadow-[0_6px_14px_rgba(64,39,15,0.13)] max-[820px]:min-h-[330px]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-[48%] bg-[url('/unclaimed-body-sewa/donation-banner.webp')] bg-[length:100%_100%] bg-center bg-no-repeat max-[820px]:inset-x-0 max-[820px]:bottom-0 max-[820px]:top-auto max-[820px]:h-[170px] max-[820px]:w-full"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#774B19] from-[0%] via-[#704215]/95 via-[45%] to-transparent to-[83%] max-[820px]:bg-gradient-to-b max-[820px]:from-[#774B19] max-[820px]:via-[#6A3D13]/95 max-[820px]:to-transparent" />

        <div className="relative z-10 w-[43%] pb-[14px] pl-[38px] pt-4 max-[820px]:w-full max-[820px]:px-6 max-[820px]:pt-[18px]">
          <h2 className="mb-[7px] py-[20px] font-serif text-[30px] font-normal text-[#FFF4DE]">
            Give Someone Their Last Dignity
          </h2>

          <p className="text-[18px] leading-relaxed text-[#FFF6E9]">
            Your donation helps us complete verified, dignified last rites for
            unclaimed and unidentified bodies who have no one else to turn to.
            Together, we can make sure no soul is forgotten.
          </p>

          <div className="mt-3 flex flex-nowrap items-center gap-2 max-[820px]:flex-wrap">
            <a
              className="donate-nav-sparkle relative inline-flex min-h-[38px] shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-4 text-[20px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
              href="/donation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="donate-nav-shine" aria-hidden />

              <span className="relative z-10 shrink-0">
                <Icon name="heart" size={16} />
              </span>

              <span className="relative z-10 whitespace-nowrap">
                Donate for Unclaimed Body Sewa
              </span>
            </a>

            <a
              className="inline-flex min-h-[31px] shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[5px] border border-[#FFEED1]/65 bg-[#381F0C]/20 px-[11px] text-[20px] font-medium text-[#FFF7E9] transition-transform hover:-translate-y-px"
              href="tel:+919654900525"
            >
              <Icon name="hands" size={16} />
              <span className="whitespace-nowrap">Report a Case</span>
            </a>
          </div>
        </div>

        <div className="absolute left-[45.1%] top-[18px] z-20 flex h-[132px] w-[112px] -translate-x-1/2 flex-col items-center justify-center bg-[#4E2E12]/30 text-center font-serif text-[14px] leading-[1.2] text-[#F3DDB7] shadow-[inset_0_0_0_2px_rgba(213,174,107,0.6)] [clip-path:polygon(50%_0%,61%_7%,74%_5%,82%_16%,94%_22%,94%_36%,100%_49%,93%_62%,94%_76%,81%_83%,74%_95%,60%_93%,50%_100%,39%_93%,25%_95%,18%_83%,6%_76%,7%_62%,0_49%,7%_36%,6%_22%,18%_16%,26%_5%,39%_7%)] max-[820px]:hidden">
          <span className="mb-[7px] text-[#DCB56F]">
            <Icon name="heart" size={16} />
          </span>

          <span>
            Every
            <br />
            Soul
            <br />
            Deserves Peace
          </span>

          <i className="mt-[5px] text-[14px]">❦</i>
        </div>
      </div>
    </section>
  );
}

function InfoGrid({
  items,
  compact = false,
}: {
  items: InfoItem[];
  compact?: boolean;
}) {
  return (
    <div className="grid grid-cols-5 gap-[6px] max-[820px]:grid-cols-2 max-[520px]:grid-cols-1">
      {items.map((item) => (
        <article
          className={`flex h-full items-center gap-[6px] rounded-[7px] border border-[#E5DAC8] bg-[#FFFDF9]/90 px-[8px] py-[6px] shadow-[0_3px_8px_rgba(71,47,19,0.035)] ${
            compact ? "min-h-[58px] py-[5px]" : "min-h-[64px]"
          }`}
          key={item.title}
        >
          <div className="grid min-w-[32px] place-items-center text-[#9C6D2A]">
            <Icon name={item.icon} size={compact ? 30 : 33} />
          </div>

          <div>
            <h3 className="mb-[2px] text-[20px] font-semibold leading-[1.15]">
              {item.title}
            </h3>

            <p className="text-[18px] leading-snug text-[#51483F]">
              {item.copy}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

function SectionTitle({
  children,
  compact = false,
}: {
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center ${
        compact ? "mb-[7px]" : "mb-[11px]"
      }`}
    >
      <h2 className="py-[20px] text-center font-serif text-[30px] font-normal leading-[1.08]">
        {children}
      </h2>

      {!compact ? <Divider className="mt-[7px] w-[70px]" small /> : null}
    </div>
  );
}

function Divider({
  className = "",
  small = false,
}: {
  className?: string;
  small?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex items-center text-[#9C6D2A] ${className}`}
    >
      <i className="h-px flex-1 bg-current opacity-60" />

      <b
        className={`${
          small ? "mx-[6px] size-[5px]" : "mx-2 size-[7px]"
        } rotate-45 bg-current`}
      />

      <i className="h-px flex-1 bg-current opacity-60" />
    </span>
  );
}

const commonStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Icon({ name, size = 28, ...props }: IconProps) {
  const paths: Record<IconName, ReactNode> = {
    phone: (
      <path
        {...commonStroke}
        d="M7.4 3.8 10 7.2 8.2 9.4c1.5 3 3.8 5.3 6.8 6.8l2.2-1.8 3.4 2.6c.4.3.5.9.2 1.4l-1.1 1.8c-.5.8-1.4 1.2-2.3 1-8.4-1.6-15-8.2-16.6-16.6-.2-.9.2-1.8 1-2.3l1.8-1.1c.5-.3 1.1-.2 1.4.2Z"
      />
    ),

    heart: (
      <path
        {...commonStroke}
        d="M12 20.5 4.7 13.4a4.8 4.8 0 0 1 6.8-6.8L12 7l.5-.4a4.8 4.8 0 0 1 6.8 6.8L12 20.5Z"
      />
    ),

    shield: (
      <>
        <path
          {...commonStroke}
          d="M12 2.8 20 6v5.7c0 5.1-3.1 8.1-8 10.5-4.9-2.4-8-5.4-8-10.5V6l8-3.2Z"
        />
        <path {...commonStroke} d="m8.6 12.2 2.2 2.2 4.8-5" />
      </>
    ),

    clock: (
      <>
        <circle {...commonStroke} cx="12" cy="12" r="8.5" />
        <path {...commonStroke} d="M12 7.2v5.2l3.5 2" />
        <path
          {...commonStroke}
          d="M7.2 2.8 5.8 1.6M16.8 2.8l1.4-1.2"
        />
      </>
    ),

    hands: (
      <>
        <path
          {...commonStroke}
          d="M4 13.5c2.4-.5 4.4.2 6 2.1l2 2.4 2-2.4c1.6-1.9 3.6-2.6 6-2.1"
        />
        <path
          {...commonStroke}
          d="M7.2 12.5 5.5 8.8c-.5-1.1-.2-2.4.8-3.1l.6-.4 3.2 5.1"
        />
        <path
          {...commonStroke}
          d="m16.8 12.5 1.7-3.7c.5-1.1.2-2.4-.8-3.1l-.6-.4-3.2 5.1"
        />
        <path {...commonStroke} d="M12 13.6V8.2" />
        <path
          {...commonStroke}
          d="M12 8.2c-2.4-.8-3.2-2.7-2.3-4.8 1.9.1 3.2 1.2 3.5 3 .8-1.8 2.3-2.7 4.4-2.4.4 2.2-.7 3.9-3.2 4.6"
        />
      </>
    ),

    leaf: (
      <>
        <path
          {...commonStroke}
          d="M12 21c0-7.8 3.4-13 9-16-1 8.2-3.9 13-9 14.3"
        />
        <path
          {...commonStroke}
          d="M12 21C12 13.2 8.6 8 3 5c1 8.2 3.9 13 9 14.3"
        />
        <path {...commonStroke} d="M12 21v-9" />
      </>
    ),

    ritual: (
      <>
        <path {...commonStroke} d="M7 20h10M9 17h6l1-7H8l1 7Z" />
        <path
          {...commonStroke}
          d="M12 10V5M10 7h4M9.5 5.2c.7-2.2 1.5-3 2.5-3 1 0 1.8.8 2.5 3"
        />
      </>
    ),

    team: (
      <>
        <circle {...commonStroke} cx="8" cy="8" r="2.6" />
        <circle {...commonStroke} cx="16.3" cy="8.8" r="2.2" />
        <path
          {...commonStroke}
          d="M2.8 18c.5-4 2.5-6 5.2-6 2.8 0 4.8 2 5.3 6"
        />
        <path {...commonStroke} d="M13.5 13c3.6-.5 6.2 1.3 6.8 5" />
      </>
    ),

    ambulance: (
      <>
        <path {...commonStroke} d="M3 8h11.5l3.2 3.2H21v6.3h-2" />
        <path {...commonStroke} d="M3 8v9.5h2" />
        <path {...commonStroke} d="M9 17.5h5" />
        <circle {...commonStroke} cx="7" cy="17.5" r="2" />
        <circle {...commonStroke} cx="16.5" cy="17.5" r="2" />
        <path {...commonStroke} d="M8.5 10.7h3M10 9.2v3" />
      </>
    ),

    pin: (
      <>
        <path
          {...commonStroke}
          d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z"
        />
        <circle {...commonStroke} cx="12" cy="10" r="2" />
      </>
    ),

    family: (
      <>
        <circle {...commonStroke} cx="12" cy="7" r="3" />
        <path
          {...commonStroke}
          d="M6.5 20c.4-4.4 2.4-7 5.5-7s5.1 2.6 5.5 7"
        />
        <circle {...commonStroke} cx="5" cy="10" r="2" />
        <circle {...commonStroke} cx="19" cy="10" r="2" />
        <path
          {...commonStroke}
          d="M1.5 20c.2-3.4 1.4-5.3 3.5-5.3 1.4 0 2.5.8 3.1 2.3M22.5 20c-.2-3.4-1.4-5.3-3.5-5.3-1.4 0-2.5.8-3.1 2.3"
        />
      </>
    ),

    support: (
      <>
        <path
          {...commonStroke}
          d="M12 21c-4.9-2.4-8-5.4-8-10.5V6.2l8-3.3 8 3.3v4.3c0 5.1-3.1 8.1-8 10.5Z"
        />
        <path
          {...commonStroke}
          d="M8.5 12.2c1.4-1.2 2.5-1.7 3.5-1.7s2.1.5 3.5 1.7M12 10.5V7.8"
        />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}