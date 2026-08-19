import Image from "next/image";

import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";

import JsonLd from "@/components/seo/JsonLd";

import {
  breadcrumbJsonLd,
  createPageMetadata,
} from "@/lib/seo";

import namoGangeLogo from "../../../public/assets/namo-gange-logo.webp";
import footerMokshaLogo from "../../../public/assets/footer-moksha-mark.png";

import {
  ArrowRight,
  BadgeCheck,
  CameraOff,
  ClipboardCheck,
  ClipboardPenLine,
  HandCoins,
  HandHeart,
  HeartHandshake,
  IdCard,
  LockKeyhole,
  Megaphone,
  Scale,
  ShieldCheck,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export const metadata =
  createPageMetadata("/code-of-conduct");

/* =========================================================
   LOTUS
========================================================= */

function LotusMark({
  className = "h-6 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 52"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M36 4c-7 8-10 16-8 23 1.5 5.5 8 10.5 8 10.5s6.5-5 8-10.5c2-7-1-15-8-23Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M13 17c9 0 16 3 20 9 3 5 3 11 3 11s-7 0-13-4c-6-4-9-10-10-16Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M59 17c-9 0-16 3-20 9-3 5-3 11-3 11s7 0 13-4c6-4 9-10 10-16Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 11 1 11s-6-2-10-7c-4-5-6-11-6-16Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 11-1 11s6-2 10-7c4-5 6-11 6-16Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 33c9 8 18 12 28 12s19-4 28-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   TYPE
========================================================= */

type ConductItem = {
  no: string;
  title: string;
  Icon: LucideIcon;
  intro?: string;
  bullets?: string[];
  highlight?: string;
};

/* =========================================================
   CONTENT
========================================================= */

const conductItems: ConductItem[] = [
  {
    no: "01",
    title: "DIGNITY COMES FIRST",
    Icon: HandHeart,
    intro:
      "I will treat every deceased person, beneficiary, family member, volunteer, service provider and member of the public with respect.",
    bullets: [
      "I will not use insulting, discriminatory, humiliating or insensitive language or behaviour.",
    ],
    highlight:
      "Human dignity will always take priority over publicity, convenience or personal recognition.",
  },

  {
    no: "02",
    title: "FOLLOW AUTHORISED PROCESSES",
    Icon: ClipboardCheck,
    intro: "I will:",
    bullets: [
      "perform only tasks assigned or approved by Moksha Sewa;",
      "follow applicable instructions, procedures and safety guidelines;",
      "respect the authority of hospitals, police, municipal bodies and other competent authorities;",
      "never attempt to bypass official procedures or independently make legal/administrative decisions.",
    ],
  },

  {
    no: "03",
    title: "PRIVACY & CONFIDENTIALITY",
    Icon: LockKeyhole,
    intro:
      "Information received during Sewa may be private or sensitive.",
    bullets: [
      "I will not disclose beneficiary or case details without authorisation.",
      "I will not share names, phone numbers, addresses, documents or photographs casually.",
      "I will not forward case information in personal WhatsApp groups or social-media channels.",
      "I will not use confidential information for personal, commercial or promotional purposes.",
    ],
    highlight:
      "Case information will be used only for the purpose for which it has been provided.",
  },

  {
    no: "04",
    title: "PHOTOGRAPHY, VIDEO & SOCIAL MEDIA",
    Icon: CameraOff,
    bullets: [
      "I will not photograph, record, livestream or publicly identify a deceased person or vulnerable beneficiary merely for promotional or social-media purposes.",
      "I will not upload Sewa-related photos, documents, case details, hospital information or beneficiary stories from my personal account unless specifically authorised under Moksha Sewa's policy.",
      "Where documentation is required, it must follow applicable law, required consent/authorisation, privacy, organisational policy and dignity-first standards.",
    ],
  },

  {
    no: "05",
    title: "RESPECT FAMILIES DURING SENSITIVE MOMENTS",
    Icon: UsersRound,
    intro:
      "I will not pressure grieving or vulnerable people to:",
    bullets: [
      "provide testimonials • pose for photographs • make videos",
      "publicly thank Moksha Sewa • promote the organisation",
      "provide donations or financial support.",
    ],
    highlight:
      "Sewa must never make assistance conditional upon publicity.",
  },

  {
    no: "06",
    title: "NO FINANCIAL MISCONDUCT",
    Icon: HandCoins,
    intro:
      "Unless specifically authorised by Moksha Sewa, I will not:",
    bullets: [
      "collect cash or donations • request money from beneficiaries",
      "receive commissions • charge fees for Sewa",
      "solicit personal payments • use Moksha Sewa's name for personal fundraising.",
    ],
    highlight:
      "Any authorised financial transaction should follow the organisation's approved process.",
  },

  {
    no: "07",
    title: "NO MISREPRESENTATION",
    Icon: IdCard,
    intro:
      "I will not falsely present myself as a police officer, hospital official, government representative, doctor or legal professional unless professionally qualified and authorised.",
    bullets: [
      "I will not make commitments, guarantees or statements on behalf of Moksha Sewa that I am not authorised to make.",
    ],
  },

  {
    no: "08",
    title: "RESPECTFUL & NON-DISCRIMINATORY SEWA",
    Icon: Users,
    intro:
      "Sewa must be delivered without unfair discrimination based on religion, caste, gender, language, region, economic status or social background.",
    bullets: [
      "Volunteers must respect different cultural and religious practices while operating within the scope of the approved Sewa.",
    ],
  },

  {
    no: "09",
    title: "SAFETY & PROFESSIONAL BEHAVIOUR",
    Icon: ShieldCheck,
    intro: "I agree to:",
    bullets: [
      "follow safety instructions and use protective equipment where required;",
      "avoid unsafe activities for which I am not trained;",
      "immediately report accidents, risks or inappropriate behaviour;",
      "remain sober and fit for duty during Sewa;",
      "avoid violence, intimidation, harassment and threats.",
    ],
  },

  {
    no: "10",
    title: "IDENTIFICATION & VOLUNTEER STATUS",
    Icon: BadgeCheck,
    intro:
      "Any Moksha Sewa ID card, uniform, badge, kit or other identity material remains connected to authorised volunteer activities.",
    bullets: [
      "I will not use organisational identification for personal advantage or for any unauthorised purpose.",
      "I will return the identification material if my participation is suspended or terminated.",
    ],
  },

  {
    no: "11",
    title:
      "POLITICAL & RELIGIOUS NEUTRALITY DURING SEWA",
    Icon: HeartHandshake,
    intro:
      "I will not use Moksha Sewa assignments to:",
    bullets: [
      "promote a political party or candidate or campaign politically;",
      "pressure beneficiaries toward a particular belief;",
      "exploit someone's vulnerable situation for any ideological promotion.",
    ],
    highlight:
      "Ritual support should respect the relevant circumstances and approved scope of the case.",
  },

  {
    no: "12",
    title: "CONFLICT OF INTEREST",
    Icon: Scale,
    intro:
      "I will disclose any personal or financial interest that could affect my impartiality during a Sewa assignment.",
    bullets: [
      "I will not divert beneficiaries to businesses, vendors or professionals for personal benefit, commission or favour.",
    ],
  },

  {
    no: "13",
    title: "PROTECT MOKSHA SEWA'S TRUST",
    Icon: ShieldCheck,
    intro: "I will not:",
    bullets: [
      "issue unauthorised media statements or publish confidential internal discussions;",
      "misuse logos or branding or create fake certificates, letters or partnership claims;",
      "claim association with hospitals, police, authorities or institutions that has not been formally established.",
    ],
  },

  {
    no: "14",
    title: "REPORT CONCERNS",
    Icon: Megaphone,
    intro:
      "If I observe suspected abuse, harassment, financial misconduct, privacy breach, unsafe conduct, misrepresentation, exploitation or serious procedural violation, I will promptly report it through the appropriate Moksha Sewa reporting channel.",
    highlight:
      "I will not conceal or ignore serious incidents.",
  },
];

/* =========================================================
   CARD
========================================================= */

function ConductCard({
  item,
}: {
  item: ConductItem;
}) {
  const Icon = item.Icon;

  return (
    <article
      className="
        relative
        grid
        min-h-[220px]
        grid-cols-[104px_1fr]
        gap-[16px]

        border-b
        border-[#E8DFD1]

        bg-[#FFFDF9]

        px-[14px]
        py-[17px]

        sm:grid-cols-[116px_1fr]
        sm:px-[18px]

        lg:min-h-[228px]
      "
    >
      {/* LEFT LIGHT AREA */}

      <div
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0

          w-[118px]

          bg-gradient-to-r
          from-[#F9F0DF]
          via-[#FBF5E9]/70
          to-transparent
        "
      />

      {/* ICON */}

      <div
        className="
          relative
          z-10

          flex
          justify-center

          pt-[13px]
        "
      >
        <div
          className="
            grid
            h-[82px]
            w-[82px]

            place-items-center

            rounded-full

            border
            border-[#DEC89D]

            bg-[#FFFDF7]

            text-[#064435]

            shadow-[0_7px_15px_rgba(70,50,23,0.10)]

            sm:h-[90px]
            sm:w-[90px]
          "
        >
          <Icon
            className="
              h-[49px]
              w-[49px]
            "
            strokeWidth={1.45}
          />
        </div>
      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          min-w-0
        "
      >
        <div
          className="
            flex
            items-start
            gap-[9px]
          "
        >
          <span
            className="
              grid
              h-[31px]
              min-w-[31px]

              shrink-0

              place-items-center

              rounded-[5px]

              bg-[#064435]

              px-[5px]

              text-[16px]
              font-bold

              text-white
            "
          >
            {item.no}
          </span>

          <h2
            className="
              pt-[4px]

              text-[16px]
              font-extrabold
              leading-[1.22]

              text-[#064435]

              lg:text-[17px]
            "
          >
            {item.title}
          </h2>
        </div>

        <div
          className="
            mt-[10px]

            text-[16px]
            leading-[1.38]

            text-[#333A38]
          "
        >
          {item.intro && (
            <p>{item.intro}</p>
          )}

          {item.bullets && (
            <ul
              className="
                mt-[5px]
                list-disc
                space-y-[1px]
                pl-[17px]
              "
            >
              {item.bullets.map((bullet) => (
                <li key={bullet}>
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {item.highlight && (
            <p
              className="
                mt-[7px]

                font-semibold
                leading-[1.36]

                text-[#B67B1B]
              "
            >
              {item.highlight}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function CodeOfConductPage() {
  return (
    <div
      className="
        min-h-screen
        bg-[#FBF8F2]
        text-[#2C1810]
      "
    >
      <JsonLd
        data={breadcrumbJsonLd(
          "/code-of-conduct"
        )}
      />

      <Topbar />
      <Navbar />

      {/* =====================================================
          IMPORTANT:
          TOP SPACING ADDED SO SECTION DOES NOT COLLIDE
          WITH NAVBAR
      ====================================================== */}

      <main
        className="
          relative
          z-0

          mt-[12px]

          overflow-hidden

          bg-[#FBF8F2]

          sm:mt-[14px]
          lg:mt-[16px]
        "
      >
        {/* =====================================================
            TOP GREEN LINE
        ====================================================== */}

        <div
          className="
            relative
            h-[15px]
            bg-[#004535]
          "
        >
          <div
            className="
              mx-auto

              flex
              h-full
              max-w-[1344px]

              items-center
              justify-center

              border-b-[3px]
              border-[#C98A1C]

              text-[#C98A1C]
            "
          >
            <LotusMark
              className="
                h-[18px]
                w-[25px]
              "
            />
          </div>
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section
          className="
            relative

            min-h-[430px]

            overflow-hidden

            bg-[#FFF9EE]

            sm:min-h-[455px]

            lg:min-h-[475px]
          "
        >
          {/* CREAM BACKGROUND */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
            "
            style={{
              background:
                "radial-gradient(circle at 50% 35%, #FFFDF8 0%, #FFF9EE 54%, #F0DFC5 100%)",
            }}
          />

          {/* =================================================
              LEFT IMAGE

              PUBLIC PATH:
              /public/assets/left.png
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-0
              left-0
              top-[74px]

              z-[1]

              hidden

              w-[37%]

              sm:block

              lg:top-[68px]
              lg:w-[35%]
            "
          >
            <Image
              src="/assets/left.png"
              alt=""
              fill
              priority
              sizes="35vw"
              className="
                object-cover
                object-left-bottom
              "
            />
          </div>

          {/* LEFT SOFT BLEND */}

          <div
            className="
              pointer-events-none
              absolute

              inset-y-0
              left-[22%]

              z-[2]

              hidden

              w-[22%]

              bg-gradient-to-r
              from-transparent
              to-[#FFF9EE]

              sm:block
            "
          />

          {/* =================================================
              RIGHT IMAGE

              PUBLIC PATH:
              /public/assets/right.png
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute

              bottom-0
              right-0
              top-[74px]

              z-[1]

              hidden

              w-[37%]

              sm:block

              lg:top-[68px]
              lg:w-[35%]
            "
          >
            <Image
              src="/assets/right.png"
              alt=""
              fill
              priority
              sizes="35vw"
              className="
                object-cover
                object-right-bottom
              "
            />
          </div>

          {/* RIGHT SOFT BLEND */}

          <div
            className="
              pointer-events-none
              absolute

              inset-y-0
              right-[22%]

              z-[2]

              hidden

              w-[22%]

              bg-gradient-to-l
              from-transparent
              to-[#FFF9EE]

              sm:block
            "
          />

          {/* =================================================
              HERO INNER
          ================================================= */}

          <div
            className="
              relative
              z-10

              mx-auto

              min-h-[430px]

              w-full
              max-w-[1344px]

              sm:min-h-[455px]

              lg:min-h-[475px]
            "
          >
            {/* ===============================================
                LEFT MOKSHA LOGO
            =============================================== */}

            <div
              className="
                absolute

                left-[3.6%]
                top-[23px]

                z-30

                hidden

                w-[150px]

                lg:block
              "
            >
              <Image
                src={footerMokshaLogo}
                alt="Moksha Sewa"
                className="
                  mx-auto
                  h-auto
                  max-h-[72px]
                  w-auto
                  max-w-[145px]
                  object-contain
                "
              />

              <p
                className="
                  mt-[2px]

                  text-center

                  font-serif

                  text-[17px]
                  font-bold
                  uppercase

                  text-[#073F34]
                "
              >
                Moksha Sewa
              </p>

              <p
                className="
                  mt-[1px]

                  whitespace-nowrap

                  text-center

                  text-[16px]
                  italic

                  text-[#C1831E]
                "
              >
                A Namo Gange Trust Initiative
              </p>
            </div>

            {/* ===============================================
                RIGHT NAMO GANGE LOGO
            =============================================== */}

            <div
              className="
                absolute

                right-[3.5%]
                top-[25px]

                z-30

                hidden

                w-[160px]

                lg:block
              "
            >
              <Image
                src={namoGangeLogo}
                alt="Namo Gange Trust"
                className="
                  mx-auto
                  h-auto
                  max-h-[70px]
                  w-auto
                  max-w-[155px]
                  object-contain
                "
              />

              <p
                className="
                  mt-[3px]

                  text-center

                  font-serif

                  text-[17px]
                  font-bold
                  uppercase

                  text-[#073F34]
                "
              >
                Namo Gange Trust
              </p>

              <p
                className="
                  mt-[1px]

                  whitespace-nowrap

                  text-center

                  text-[16px]
                  uppercase

                  text-[#6B5B49]
                "
              >
                A Journey to Healthy World...
              </p>
            </div>

            {/* ===============================================
                CENTER CONTENT
            =============================================== */}

            <div
              className="
                relative
                z-40

                mx-auto

                flex
                max-w-[670px]
                flex-col
                items-center

                px-5

                pb-[28px]
                pt-[27px]

                text-center

                sm:px-7

                lg:pt-[33px]
              "
            >
              {/* LABEL */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-[7px]
                "
              >
                <ArrowRight
                  className="
                    h-[16px]
                    w-[16px]
                    text-[#D09A2C]
                  "
                />

                <span
                  className="
                    text-[16px]
                    font-bold
                    uppercase
                    tracking-[0.055em]

                    text-[#17483F]
                  "
                >
                  Serve With Responsibility
                </span>

                <ArrowRight
                  className="
                    h-[16px]
                    w-[16px]

                    rotate-180

                    text-[#D09A2C]
                  "
                />
              </div>

              {/* TITLE */}

              <h1
                className="
                  mt-[5px]

                  font-serif

                  text-[42px]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.03em]

                  text-[#064435]

                  sm:text-[50px]

                  lg:text-[57px]
                "
              >
                Volunteer Code
                <br />
                of Conduct
              </h1>

              {/* LOTUS */}

              <div
                className="
                  mt-[8px]

                  flex
                  items-center
                  justify-center
                  gap-[8px]

                  text-[#D19B31]
                "
              >
                <span
                  className="
                    h-px
                    w-[46px]
                    bg-[#D3A654]
                  "
                />

                <LotusMark
                  className="
                    h-[21px]
                    w-[27px]
                  "
                />

                <span
                  className="
                    h-px
                    w-[46px]
                    bg-[#D3A654]
                  "
                />
              </div>

              {/* GREEN BAR */}

              <div
                className="
                  mt-[9px]

                  w-full
                  max-w-[610px]

                  rounded-[5px]

                  bg-[#064435]

                  px-[18px]
                  py-[8px]

                  text-[16px]
                  font-semibold
                  leading-[1.3]

                  text-[#FFF8E9]

                  shadow-[0_4px_10px_rgba(0,56,43,0.12)]
                "
              >
                Every act of Sewa must protect dignity,
                privacy, safety and trust.
              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-[9px]

                  max-w-[625px]

                  text-[16px]
                  font-medium
                  leading-[1.43]

                  text-[#3D403D]
                "
              >
                As a Moksha Sewa volunteer, I understand that I
                may be serving individuals and families during
                highly sensitive circumstances. I therefore agree
                to conduct myself with compassion, discipline,
                respect and responsibility at all times.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            COMMITMENT BAR
        ====================================================== */}

        <div
          className="
            relative
            z-30

            mx-auto
            -mt-[13px]

            flex
            h-[45px]
            w-[92%]
            max-w-[650px]

            items-center
            justify-center

            bg-[#064435]

            px-[22px]

            text-white

            shadow-[0_5px_14px_rgba(0,55,42,0.14)]
          "
          style={{
            clipPath:
              "polygon(17px 0, calc(100% - 17px) 0, 100% 50%, calc(100% - 17px) 100%, 17px 100%, 0 50%)",
          }}
        >
          <LotusMark
            className="
              mr-[10px]
              h-[22px]
              w-[27px]
              text-[#D2A03A]
            "
          />

          <span
            className="
              text-center
              text-[16px]
              font-bold
              uppercase
              tracking-[0.035em]
            "
          >
            Our Commitment as Volunteers
          </span>

          <LotusMark
            className="
              ml-[10px]
              h-[22px]
              w-[27px]
              text-[#D2A03A]
            "
          />
        </div>

        {/* =====================================================
            CONDUCT GRID
        ====================================================== */}

        <section
          className="
            mx-auto

            mt-[15px]

            w-full
            max-w-[1344px]

            px-4

            sm:px-5
            lg:px-6
          "
        >
          <div
            className="
              overflow-hidden

              border
              border-[#EFE6D7]

              bg-[#FFFDF9]

              md:grid
              md:grid-cols-2
            "
          >
            {conductItems.map(
              (item, index) => (
                <div
                  key={item.no}
                  className={
                    index % 2 === 0
                      ? "md:border-r md:border-[#E7DDCB]"
                      : ""
                  }
                >
                  <ConductCard item={item} />
                </div>
              )
            )}
          </div>
        </section>

        {/* =====================================================
            DECLARATION
        ====================================================== */}

        <section
          className="
            mx-auto

            mt-[16px]

            w-full
            max-w-[1280px]

            px-4

            sm:px-5
            lg:px-6
          "
        >
          <div
            className="
              overflow-hidden

              rounded-[9px]

              border
              border-[#C49535]

              bg-[#004435]

              text-white

              shadow-[0_7px_20px_rgba(0,54,41,0.12)]

              lg:grid
              lg:grid-cols-[1.32fr_0.88fr]
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                items-center
                gap-[22px]

                px-[25px]
                py-[19px]

                lg:border-r
                lg:border-[#A17C37]
              "
            >
              <div
                className="
                  hidden

                  h-[112px]
                  w-[112px]
                  shrink-0

                  place-items-center

                  rounded-full

                  bg-[#FFF7E7]

                  text-[#064435]

                  sm:grid
                "
              >
                <ClipboardPenLine
                  className="
                    h-[68px]
                    w-[68px]
                  "
                  strokeWidth={1.35}
                />
              </div>

              <div>
                <h2
                  className="
                    text-[18px]
                    font-bold
                    uppercase
                    tracking-[0.02em]
                  "
                >
                  Volunteer Declaration
                </h2>

                <div
                  className="
                    mt-[7px]

                    space-y-[3px]

                    text-[16px]
                    leading-[1.4]

                    text-[#F5EFE5]
                  "
                >
                  <p>
                    I have read and understood the Moksha Sewa
                    Volunteer Code of Conduct.
                  </p>

                  <p>
                    I agree to follow its standards of dignity,
                    privacy, safety, responsible representation and
                    authorised Sewa.
                  </p>

                  <p>
                    I understand that registration does not
                    automatically authorise field deployment and
                    that violation of this Code may result in
                    restriction, suspension or termination of my
                    volunteer participation.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="
                flex
                flex-col
                justify-center

                px-[25px]
                py-[19px]
              "
            >
              <label
                className="
                  flex
                  cursor-pointer
                  items-start
                  gap-[12px]
                "
              >
                <input
                  type="checkbox"
                  className="
                    mt-[2px]

                    h-[21px]
                    w-[21px]

                    shrink-0

                    accent-[#D7A035]
                  "
                />

                <span
                  className="
                    text-[16px]
                    font-bold
                    uppercase
                    leading-[1.3]

                    text-[#FFF9EC]
                  "
                >
                  I Agree to the Volunteer
                  <br />
                  Code of Conduct
                </span>
              </label>

              <a
                href="/volunteer/register"
                className="
                  group

                  mt-[14px]

                  inline-flex
                  min-h-[50px]
                  w-full

                  items-center
                  justify-between

                  rounded-[5px]

                  bg-[#E6A72D]

                  px-[20px]

                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[0.03em]

                  text-[#163F35]

                  transition

                  hover:bg-[#F0B33B]
                "
              >
                Continue Registration

                <ArrowRight
                  className="
                    h-[21px]
                    w-[21px]

                    transition-transform

                    group-hover:translate-x-[4px]
                  "
                />
              </a>

              <div
                className="
                  mt-[8px]

                  flex
                  items-start
                  gap-[6px]

                  text-[16px]
                  leading-[1.3]

                  text-[#E6DED1]
                "
              >
                <LockKeyhole
                  className="
                    mt-[1px]

                    h-[16px]
                    w-[16px]
                    shrink-0

                    text-[#D7A035]
                  "
                />

                <p>
                  Your information is safe with us.
                  <br />
                  Please read our{" "}
                  <a
                    href="/privacy-policy"
                    className="
                      underline
                      underline-offset-2
                    "
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            IMPORTANT NOTE
        ====================================================== */}

        <section
          className="
            mx-auto

            mt-[12px]

            w-full
            max-w-[1280px]

            px-4
            pb-[16px]

            sm:px-5
            lg:px-6
          "
        >
          <div
            className="
              flex
              items-center
              gap-[20px]

              rounded-[8px]

              border
              border-[#D9C59E]

              bg-[#FFF9EF]

              px-[21px]
              py-[13px]
            "
          >
            <div
              className="
                grid
                h-[60px]
                w-[60px]
                shrink-0

                place-items-center

                text-[#B98A32]
              "
            >
              <HandHeart
                className="
                  h-[50px]
                  w-[50px]
                "
                strokeWidth={1.2}
              />
            </div>

            <div>
              <h2
                className="
                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[0.04em]

                  text-[#064435]
                "
              >
                Important Note
              </h2>

              <p
                className="
                  mt-[4px]

                  text-[16px]
                  leading-[1.38]

                  text-[#404541]
                "
              >
                This Code of Conduct establishes minimum behavioural
                and organisational expectations for Moksha Sewa
                volunteers. Specific assignments may require
                additional instructions, training, permissions,
                safety procedures or confidentiality obligations.
                Volunteers must comply with applicable law and
                authorised directions relevant to their assigned
                activity.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <div className="h-[17px] bg-[#004535]">
          <div
            className="
              mx-auto

              flex
              h-full
              max-w-[1344px]

              items-center
              justify-center

              border-t-[3px]
              border-[#C98A1C]

              text-[#C98A1C]
            "
          >
            <LotusMark
              className="
                h-[19px]
                w-[26px]
              "
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}