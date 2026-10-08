"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import {
  ArrowRight,
  HeartHandshake,
  Handshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

type JoinCard = {
  title: React.ReactNode;
  description: React.ReactNode;
  button: string;
  href: string;
  icon: React.ReactNode;
  image: string;
  variant: "green" | "gold";
};

const customIcons: Record<string, React.ReactNode> = {
  Privacy: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M32 6 51 13v14c0 13-7 22-19 29-12-7-19-16-19-29V13L32 6Z" />
      <rect x="24" y="30" width="16" height="14" rx="2" />
      <path d="M27 30v-5a5 5 0 0 1 10 0v5" />
    </svg>
  ),
  Verification: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <rect x="12" y="10" width="32" height="43" rx="2" />
      <path d="M22 10V6h12v4" />
      <path d="m19 23 3 3 5-6" />
      <path d="M30 23h9" />
      <path d="m19 34 3 3 5-6" />
      <path d="M30 34h9" />
      <path d="m19 45 3 3 5-6" />
      <path d="M30 45h6" />
      <circle cx="46" cy="45" r="9" />
      <path d="m52 51 6 6" />
    </svg>
  ),
  Formalities: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M15 6h25l9 9v37H15Z" />
      <path d="M40 6v10h9" />
      <path d="M22 25h17" />
      <path d="M22 33h17" />
      <path d="M22 41h11" />
      <circle cx="44" cy="46" r="9" />
      <path d="M40 55 44 51l4 4 3-10" />
    </svg>
  ),
  Documentation: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M10 25h18l5 6h21l-4 23H14Z" />
      <path d="M16 25V13h21l8 8v10" />
      <path d="M37 13v9h8" />
    </svg>
  ),
  Body: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M8 39h48" />
      <path d="M12 39v11" />
      <path d="M52 39v11" />
      <path d="M15 27h34c4 0 7 3 7 7v5H8v-5c0-4 3-7 7-7Z" />
      <path d="M20 27c2-5 7-8 12-8 7 0 12 3 15 8" />
      <path d="M22 23h20" />
    </svg>
  ),
  Lotus: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
      <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8" />
      <path d="M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
      <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
      <path d="M24 49h16" />
    </svg>
  ),
  Diya: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
      <path d="M32 9c5 7 8 12 8 17a8 8 0 1 1-16 0c0-5 3-10 8-17Z" />
      <path d="M32 35c-8-5-13-5-19-2 3 12 10 18 19 21 9-3 16-9 19-21-6-3-11-3-19 2Z" />
      <path d="M18 42h28" />
    </svg>
  ),
};

function renderCardIcon(iconName: string | undefined, fallback: React.ReactNode): React.ReactNode {
  if (!iconName) return fallback;

  // 1. Try custom SVG map first (case-insensitive)
  const cleanName = iconName.toLowerCase().replace(/[-_\s]/g, "");
  const customKey = Object.keys(customIcons).find(
    (k) => k.toLowerCase() === cleanName
  );
  if (customKey) return customIcons[customKey];

  // 2. Normalise name to PascalCase: "book-open" -> "BookOpen"
  const pascalKey = iconName
    .split(/[-_\s]+/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join("");

  const aliases: Record<string, string> = {
    PartnerIcon:    "Handshake",
    Partner:        "Handshake",
    Hands:          "Handshake",
    HeartHands:     "HeartHandshake",
    HeartHand:      "HeartHandshake",
    HeartHandshake: "HeartHandshake",
    GiveIcon:       "HeartHandshake",
    ServeIcon:      "Heart",
    Leaf:           "Leaf",
    ShieldCheck:    "ShieldCheck",
    Shield:         "Shield",
    UsersRound:     "Users",
    Users:          "Users",
    People:         "Users",
    FamilyHands:    "Users",
    ElderlyCare:    "UserPlus",
    BookOpen:       "BookOpen",
    Diya:           "Flame",
    Flame:          "Flame",
    Fire:          "Flame",
    Ambulance:      "Truck",
    Van:            "Truck",
    Clipboard:      "ClipboardList",
    Document:       "FileText",
    DocumentCheck:  "FileCheck",
    Scale:          "Scale",
    Eye:            "Eye",
    Globe:          "Globe",
    MapPin:         "MapPin",
    Phone:          "Phone",
    Mail:           "Mail",
    Star:           "Star",
    Smile:          "Smile",
    Building:       "Building2",
    Activity:       "Activity",
  };

  const target = aliases[pascalKey] || pascalKey;
  if (customIcons[target]) return customIcons[target];

  const LucideIcon = (LucideIcons as any)[target] || (LucideIcons as any)[pascalKey];
  if (LucideIcon) {
    return <LucideIcon />;
  }

  return fallback;
}

const cards: JoinCard[] = [
  {
    title: (
      <>
        Become a
        <br />
        Volunteer
      </>
    ),
    description: (
      <>
        Give your time.
        <br />
        Bring compassion.
        <br />
        Be the reason someone is not alone.
      </>
    ),
    button: "JOIN AS VOLUNTEER",
    href: "/volunteer/register",
    icon: <HeartHandshake />,
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165026/moksha-sewa/assets/about-optimized/volunteer.png",
    variant: "green",
  },
  {
    title: (
      <>
        Partner
        <br />
        With Us
      </>
    ),
    description: (
      <>
        Join hands to create
        <br />
        a greater and
        <br />
        lasting impact.
      </>
    ),
    button: "EXPLORE PARTNERSHIP",
    href: "/partnership",
    icon: <Handshake />,
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165011/moksha-sewa/assets/about-optimized/partner.png",
    variant: "gold",
  },
  {
    title: (
      <>
        Support
        <br />
        the Mission
      </>
    ),
    description: (
      <>
        Your support helps ensure
        <br />
        dignity, care and respect
        <br />
        in every final journey.
      </>
    ),
    button: "SUPPORT THE MISSION",
    href: "/donation",
    icon: <Leaf />,
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165022/moksha-sewa/assets/about-optimized/support.png",
    variant: "green",
  },
];

const CardIcon = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "green" | "gold";
}) => (
  <div
    className={`
      flex
      h-[66px]
      w-[66px]
      shrink-0
      items-center
      justify-center
      rounded-full

      ${variant === "gold"
        ? "bg-[#f6ead8] text-[#bd7c1e]"
        : "bg-[#e7eee5] text-[#0b403b]"
      }
    `}
  >
    <div
      className="
        h-[37px]
        w-[37px]
        [&>svg]:h-full
        [&>svg]:w-full
        [&>svg]:stroke-[1.35]
      "
    >
      {children}
    </div>
  </div>
);

const JoinCard = ({ card }: { card: JoinCard }) => {
  return (
    <article
      className="
        group
        relative
        min-h-[190px]
        overflow-hidden
        rounded-[9px]
        border
        border-[#ded8ca]
        bg-[#faf8f2]
        shadow-[0_4px_16px_rgba(53,48,35,0.08)]
        transition
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_10px_28px_rgba(53,48,35,0.14)]
      "
    >
      {/* CARD IMAGE */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          transition-transform
          duration-500

          group-hover:scale-[1.03]
        "
        style={{
          backgroundImage: `url("${card.image}")`,
        }}
      />

      {/* CARD CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          min-h-[260px]
          w-full
          flex-col
          p-4

          sm:p-5

          lg:min-h-[190px]
          lg:w-[70%]
        "
      >
        <div className="flex items-start gap-4">
          <CardIcon variant={card.variant}>
            {card.icon}
          </CardIcon>

          <div className="pt-1">
            <h3
              className="
                font-serif
                text-[20px]
                font-bold
                leading-[1.03]
                text-[#10423c]

                sm:text-[21px]
              "
            >
              {card.title}
            </h3>

            <div className="mt-2 h-px w-16 bg-[#c88829]" />
          </div>
        </div>

        <p
          className="
            my-3
            text-base
            leading-[1.5]
            text-[#343735]
          "
        >
          {card.description}
        </p>

        <Link
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group/button
            mt-auto

            flex
            w-full
            items-center
            justify-center
            gap-3

            rounded-[7px]

            px-6
            py-3

            text-[14px]
            font-bold
            tracking-[0.04em]

            text-white

            transition

            sm:w-auto
            sm:min-w-[230px]

            ${card.variant === "gold"
              ? "bg-[#bf7c1e] hover:bg-[#a96816]"
              : "bg-[#06443d] hover:bg-[#07554d]"
            }
          `}
        >
          {card.button}

          <ArrowRight
            size={16}
            className="
              transition-transform
              group-hover/button:translate-x-1
            "
          />
        </Link>
      </div>
    </article>
  );
};

const JoinSewa: React.FC = () => {
  const section = useWebsiteSection("about-join-sewa");
  const activeCards = (section?.items?.length ? section.items : cards).map((item: any, index) => {
    const fallback = cards[index % cards.length];
    return {
      title: item.title || fallback.title,
      description: item.description || fallback.description,
      button: item.buttonLabel || item.button || fallback.button,
      href: item.buttonHref || item.href || fallback.href,
      icon: renderCardIcon(item.icon, fallback.icon),
      image: item.image || fallback.image,
      variant: fallback.variant,
    };
  });

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#f7f1e6]
        text-[#103f3a]
      "
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          aspect-[1728/623]
          min-h-[620px]
        "
      >
        {/* HERO BACKGROUND — kept at the image's native aspect
            ratio so the artwork's curve/icon detailing near the
            bottom edge is never cropped off by object-cover. */}
        <div className="absolute inset-0 -z-20">
          <Image
            src={imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164993/moksha-sewa/assets/about-optimized/be_part.png")}
            alt=""
            fill
            sizes="100vw"
            className="
              h-full
              w-full
              object-cover
              object-center
              blur-[3px]
              sm:blur-none
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            flex
            h-full
            w-full
            max-w-7xl
            flex-col
            justify-center

            px-6
            py-6

            sm:px-8
            sm:py-7
            lg:px-8
            lg:py-8
            2xl:px-0
          "
        >
          <div
            className="
              max-w-[640px]
            "
          >
            {/* JOIN */}

            <div className="flex items-center gap-3">


              <span className="h-px w-12 bg-[#bd7b20]" />

              <span
                className="
                  ml-1
                  text-base
                  font-semibold
                  tracking-[0.20em]
                  text-[#0b403b]
                "
              >
                JOIN
              </span>

              <span className="h-px w-12 bg-[#bd7b20]" />
            </div>

            {/* EYEBROW */}

            <div
              className="
                mt-3
                text-base
                font-semibold
                tracking-[0.19em]
                text-[#b66f16]
              "
            >
              {textOrFallback(section?.eyebrow, "BE PART OF THE SEWA", 60)}
            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                mt-2

                font-serif

                text-[32px]
                font-semibold
                leading-[0.98]
                tracking-[-0.025em]

                text-[#0b403b]

                sm:text-[38px]
                md:text-[42px]
                lg:text-[40px]
              "
            >
              <span className="whitespace-pre-line">{textOrFallback(section?.title, "You Don't Have to\nDo Everything.", 150)}</span>
            </h2>

            {/* SECOND HEADING */}

            <h2
              className="
                mt-2

                font-sans

                text-[20px]
                font-semibold
                leading-[1.05]

                text-[#17443e]

                sm:text-[24px]
              "
            >
              <span className="whitespace-pre-line">{textOrFallback(section?.subtitle, "You Can Simply Do Something.", 60)}</span>
            </h2>

            {/* =================================================
                UPDATED LONG DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-2
                max-w-[620px]
                whitespace-pre-line
                text-[16px]
                font-medium
                leading-[1.5]

                text-[#333735]

                sm:text-[17px]
              "
            >
              {textOrFallback(section?.description, "Every act of kindness creates a ripple of dignity, compassion and respect. Even a small contribution of time, care or support can bring comfort to someone during their most difficult moments and help ensure that no one has to face their final journey alone.\n\nWhether you give your time as a volunteer, partner with us as an organisation, or support a family directly, every contribution helps us stand beside those who need it most — with dignity, care and respect.", 2000)}
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CARDS
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto
          max-w-7xl

          px-6
          pt-1
          pb-2

          sm:px-8
          sm:pt-2
          lg:px-8
          2xl:px-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-3

            md:grid-cols-3
            md:gap-4
          "
        >
          {activeCards.map((card) => (
            <JoinCard
              key={card.button}
              card={card}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM MESSAGE BAR
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto
          mt-2
          max-w-7xl

          px-6
          pb-3

          sm:px-8
          lg:px-8
          2xl:px-0
        "
      >
        <div
          className="
            flex
            min-h-[58px]
            items-center
            justify-between
            gap-5

            rounded-[8px]

            border
            border-[#e5dfd2]

            bg-[#f4f1ea]/95

            px-5
            py-3

            shadow-[0_2px_8px_rgba(60,50,35,.04)]

            sm:px-7
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#06443d]
                text-white
              "
            >
              <ShieldCheck
                size={23}
                strokeWidth={1.4}
              />
            </div>

            <div
              className="
                hidden
                h-8
                w-px
                bg-[#cfc7b7]

                sm:block
              "
            />

            <p
              className="
                text-base
                whitespace-pre-line
                leading-[1.4]
                text-[#173f3a]
              "
            >
              {textOrFallback(section?.bottomStatement, "Together, we can make sure that no one has to face their final journey alone. Be Part of the Sewa. Be the change.", 600)}
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="
              hidden
              items-center
              gap-3

              md:flex
            "
          >
            <div className="text-[#b87920]">
              <Users
                size={32}
                strokeWidth={1.3}
              />
            </div>

            <div className="h-8 w-px bg-[#cfc7b7]" />

            <div className="text-base leading-[1.35]">
              <div className="text-[#17443e]">
                Be Part of the Sewa.
              </div>

              <div className="font-medium text-[#b87920]">
                Be the change.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSewa;