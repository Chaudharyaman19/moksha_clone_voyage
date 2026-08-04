"use client";

import Image from "next/image";
import {
  FaAward,
  FaCertificate,
  FaClipboardList,
  FaHandHoldingHeart,
  FaHeadphones,
  FaMapMarkerAlt,
  FaBoxOpen,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const GOLD = "#B17A1D";

const serifFont = {
  fontFamily: 'Georgia, "Times New Roman", serif',
};

type ReasonType =
  | "support"
  | "team"
  | "pricing"
  | "care"
  | "arrangements"
  | "network"
  | "trusted"
  | "dignity";

interface Reason {
  type: ReasonType;
  title: string;
  text: string;
}

interface LotusMarkProps {
  className?: string;
}

interface ReasonIconProps {
  type: ReasonType;
}

const reasons: Reason[] = [
  {
    type: "support",
    title: "Urgent Sewa Support",
    text: "When a family needs help, we quickly guide them for ambulance, ghat and rituals.",
  },
  {
    type: "team",
    title: "Pandit Ji & Local Team",
    text: "Pandit ji and local volunteers help complete kriya karam with proper vidhi.",
  },
  {
    type: "pricing",
    title: "Help for Needy Families",
    text: "For eligible zaruratmand families, sewa support is arranged without adding burden.",
  },
  {
    type: "care",
    title: "Respectful Behaviour",
    text: "Every lawaris, anath or be-sahara person is treated with dignity and care.",
  },
  {
    type: "arrangements",
    title: "Complete Basic Arrangements",
    text: "Lakdi, kafan, phool, samagri, ambulance and ghat coordination are handled.",
  },
  {
    type: "network",
    title: "City & Ghat Network",
    text: "Local teams help families connect with nearby ghats, vehicles and support.",
  },
  {
    type: "trusted",
    title: "Trusted in Difficult Moments",
    text: "Families trust us because we explain clearly and stand with them on-ground.",
  },
  {
    type: "dignity",
    title: "Dignified Antim Vidai",
    text: "Our aim is simple: no final journey should happen without respect.",
  },
];

function LotusMark({
  className = "h-7 w-10",
}: LotusMarkProps) {
  return (
    <svg
      viewBox="0 0 72 50"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke={GOLD}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TopOrnament() {
  return (
    <div
      className="flex items-center justify-center gap-2.5"
      aria-hidden="true"
    >
      <span className="relative block h-px w-[80px] bg-[#D8A646] sm:w-[96px]">
        <span className="absolute -left-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#D8A646]" />
      </span>

      <LotusMark className="h-[27px] w-[41px]" />

      <span className="relative block h-px w-[80px] bg-[#D8A646] sm:w-[96px]">
        <span className="absolute -right-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#D8A646]" />
      </span>
    </div>
  );
}

function TitleDivider() {
  return (
    <div
      className="mt-2 flex items-center justify-center gap-2.5"
      aria-hidden="true"
    >
      <span className="h-px w-[44px] bg-[#B8862C]" />

      <span className="grid h-[9px] w-[9px] rotate-45 place-items-center border border-[#B8862C]">
        <span className="h-[3px] w-[3px] bg-[#B8862C]" />
      </span>

      <span className="h-px w-[44px] bg-[#B8862C]" />
    </div>
  );
}

function ReasonIcon({ type }: ReasonIconProps) {
  const iconClass =
    "h-[34px] w-[34px] stroke-[1.45] text-[#AA7318]";

  switch (type) {
    case "support":
      return (
        <div className="relative grid h-[38px] w-[38px] place-items-center">
          <FaHeadphones className="h-[36px] w-[36px] text-[#AA7318]" />

          <span
            className="absolute top-[15px] text-[9px] font-normal leading-none text-[#7D5412]"
            style={serifFont}
          >
            24/7
          </span>
        </div>
      );

    case "team":
      return (
        <div className="relative grid h-[38px] w-[46px] place-items-center">
          <FaUsers className="h-[35px] w-[35px] text-[#AA7318]" />

          <span className="absolute bottom-0 right-0 grid h-[16px] w-[16px] place-items-center rounded-full bg-[#FFFDF8]">
            <FaShieldAlt className="h-[16px] w-[16px] text-[#AA7318]" />
          </span>
        </div>
      );

    case "pricing":
      return (
        <div className="relative grid h-[38px] w-[46px] place-items-center">
          <FaClipboardList className="h-[35px] w-[35px] text-[#AA7318]" />

          <span className="absolute bottom-0 right-0 grid h-[18px] w-[18px] place-items-center rounded-full border border-[#AA7318] bg-[#FFFDF8]">
            <span
              className="text-[10px] font-normal leading-none text-[#AA7318]"
              style={serifFont}
            >
              ₹
            </span>
          </span>
        </div>
      );

    case "care":
      return <FaHandHoldingHeart className={iconClass} />;

    case "arrangements":
      return <FaBoxOpen className={iconClass} />;

    case "network":
      return <FaMapMarkerAlt className={iconClass} />;

    case "trusted":
      return <FaShieldAlt className={iconClass} />;

    case "dignity":
      return <FaAward className={iconClass} />;

    default:
      return <FaCertificate className={iconClass} />;
  }
}

export default function WhyFamiliesTrust() {
  return (
    <section className="w-full bg-[#F8F5EE] px-3 py-2 sm:px-4 lg:px-5 lg:py-3">
      <div className="relative mx-auto w-full max-w-[1280px] overflow-hidden rounded-[14px] border border-[#E9DDC9] bg-[#FCFAF5] shadow-[0_8px_24px_rgba(92,63,28,0.08)]">
        {/* Header */}
        <div className="relative min-h-[165px] overflow-hidden px-5 pb-2 pt-3 sm:px-8 lg:h-[165px] lg:min-h-0 lg:px-9 lg:pb-1 lg:pt-2">
          {/* Right image */}
          <div className="absolute inset-y-0 right-0 hidden w-[50%] overflow-hidden lg:block">
            <Image
              src="/assets/images/why-families-trust-ritual.png"
              alt="Moksha Sewa compassionate ritual support"
              fill
              sizes="50vw"
              className="object-cover"
              style={{
                objectPosition: "62% 45%",
              }}
            />
          </div>

          {/* Image left fade */}
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#FCFAF5_0%,#FCFAF5_48%,rgba(252,250,245,0.97)_54%,rgba(252,250,245,0.67)_65%,rgba(252,250,245,0)_82%)] lg:block" />

          {/* Image bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[45px] bg-gradient-to-t from-[#FCFAF5] via-[#FCFAF5]/75 to-transparent lg:block" />

          {/* Header content */}
          <div className="relative z-10 mx-auto w-full max-w-[760px]">
            <TopOrnament />

            <h2
              className="mt-1 text-center text-[24px] font-normal leading-tight text-[#321B10] sm:text-[28px] lg:text-[30px]"
              style={serifFont}
            >
              Why Families Trust Moksha Sewa
            </h2>

            <TitleDivider />

            <p
              className="mx-auto mt-2 max-w-[620px] text-center text-[13px] font-normal leading-[1.4] text-[#3F3028]"
              style={serifFont}
            >
              Moksha Sewa is built for families who need real help,
              <br className="hidden sm:block" />
              especially lawaris, anath and zaruratmand cases.
              <br className="hidden lg:block" />
              We arrange the essentials so antim sanskar happens with dignity.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="relative z-20 mx-auto grid w-[96%] grid-cols-1 gap-2 pb-2 sm:w-[94%] sm:grid-cols-2 lg:w-[93%] lg:grid-cols-4 lg:auto-rows-[145px] lg:gap-x-[14px] lg:gap-y-2 lg:pb-2">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="group flex min-h-[145px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#E6CFAB] bg-[rgba(255,253,248,0.95)] px-3 py-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] transition duration-300 hover:-translate-y-[1px] hover:border-[#C89543] hover:shadow-[0_5px_13px_rgba(104,70,25,0.06)] lg:h-[145px] lg:min-h-0 lg:px-3 lg:py-1.5"
            >
              {/* Icon */}
              <div className="relative grid h-[43px] w-[64px] shrink-0 place-items-center text-[#AA7318]">
                <span className="absolute left-1/2 top-0 h-[27px] w-[50px] -translate-x-1/2 rounded-t-full border-t border-[#E9D9BF]" />

                <ReasonIcon type={reason.type} />
              </div>

              {/* Title */}
              <h3
                className="mt-0.5 text-[16px] font-normal leading-[1.12] text-[#351F14]"
                style={serifFont}
              >
                {reason.title}
              </h3>

              {/* Divider */}
              <span className="mt-1.5 h-px w-[30px] shrink-0 bg-[#D6A146]" />

              {/* Description */}
              <p
                className="mt-1.5 max-w-[235px] text-[12px] font-normal leading-[1.3] text-[#44352C]"
                style={serifFont}
              >
                {reason.text}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="relative flex h-[28px] items-center justify-center px-5 ">
          <div className="flex items-center justify-center gap-2.5 text-center">
            <span className="relative hidden h-px w-[44px] bg-[#D8A646] sm:block">
              <span className="absolute -left-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#D8A646]" />
            </span>

            <p
              className="text-[12px] font-normal text-[#4A392E] "
              style={serifFont}
            >
              When there is no sahara, Moksha Sewa stands with the family.
            </p>

            <span className="relative hidden h-px w-[24px] bg-[#D8A646] sm:block">
              <span className="absolute -right-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#D8A646]" />
            </span>
          </div>

          <div className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 bg-[#FCFAF5] px-2 py-4">
            <LotusMark className="h-[19px] w-[29px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
