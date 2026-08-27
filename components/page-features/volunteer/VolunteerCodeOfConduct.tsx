"use client";

import Image from "next/image";

import { useState } from "react";

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
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

/* =========================================================
   LOTUS
========================================================= */

export function LotusMark({
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
   BANNER
========================================================= */

export function ConductBanner({
  compact = false,
}: {
  compact?: boolean;
}) {
  const codeSection = useWebsiteSection("volunteer-code");
  return (
    <section
      className={
        compact
          ? `
        relative

        overflow-hidden

        bg-[#FFF9EE]
      `
          : `
        relative

        overflow-hidden

        bg-[#FFF9EE]
      `
      }
    >
      <Image
        src="/assets/code_of_conduct.png"
        alt="Volunteer Code of Conduct"
        width={759}
        height={334}
        priority
        className="
          h-auto
          w-full
          object-cover
        "
      />
    </section>
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
  compact = false,
}: {
  item: ConductItem;
  compact?: boolean;
}) {
  const Icon = item.Icon;

  return (
    <article
      className={
        compact
          ? `
        relative
        grid
        grid-cols-[74px_1fr]
        gap-[10px]

        border-b
        border-[#E8DFD1]

        bg-[#FFFDF9]

        px-[10px]
        py-[10px]

        sm:grid-cols-[86px_1fr]
        sm:px-[13px]
      `
          : `
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
      `
      }
    >
      {/* LEFT LIGHT AREA */}

      <div
        className={
          compact
            ? `
        pointer-events-none
        absolute
        inset-y-0
        left-0

        w-[76px]

        bg-gradient-to-r
        from-[#F9F0DF]
        via-[#FBF5E9]/70
        to-transparent
      `
            : `
        pointer-events-none
        absolute
        inset-y-0
        left-0

        w-[118px]

        bg-gradient-to-r
        from-[#F9F0DF]
        via-[#FBF5E9]/70
        to-transparent
      `
        }
      />

      {/* ICON */}

      <div
        className={
          compact
            ? `
        relative
        z-10

        flex
        justify-center

        pt-[5px]
      `
            : `
        relative
        z-10

        flex
        justify-center

        pt-[13px]
      `
        }
      >
        <div
          className={
            compact
              ? `
        grid
        h-[52px]
        w-[52px]

        place-items-center

        rounded-full

        border
        border-[#DEC89D]

        bg-[#FFFDF7]

        text-[#064435]

        shadow-[0_4px_9px_rgba(70,50,23,0.08)]

        sm:h-[58px]
        sm:w-[58px]
      `
              : `
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
      `
          }
        >
          <Icon
            className={
              compact
                ? `
        h-[32px]
        w-[32px]

        sm:h-[36px]
        sm:w-[36px]
      `
                : `
        h-[49px]
        w-[49px]
      `
            }
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
          className={
            compact
              ? `
        flex
        items-start
        gap-[7px]
      `
              : `
        flex
        items-start
        gap-[9px]
      `
          }
        >
          <span
            className={
              compact
                ? `
        grid
        h-[24px]
        min-w-[24px]

        shrink-0

        place-items-center

        rounded-[4px]

        bg-[#064435]

        px-[4px]

        text-[12px]
        font-bold

        text-white
      `
                : `
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
      `
            }
          >
            {item.no}
          </span>

          <h2
            className={
              compact
                ? `
        pt-[3px]

        text-[13px]
        font-extrabold
        leading-[1.22]

        text-[#064435]

        sm:text-[14px]
      `
                : `
        pt-[4px]

        text-[16px]
        font-extrabold
        leading-[1.22]

        text-[#064435]

        lg:text-[17px]
      `
            }
          >
            {item.title}
          </h2>
        </div>

        <div
          className={
            compact
              ? `
        mt-[6px]

        text-[13px]
        leading-[1.3]

        text-[#333A38]

        sm:text-[14px]
      `
              : `
        mt-[10px]

        text-[16px]
        leading-[1.38]

        text-[#333A38]
      `
          }
        >
          {item.intro && (
            <p>{item.intro}</p>
          )}

          {item.bullets && (
            <ul
              className={
                compact
                  ? `
        mt-[3px]
        list-disc
        space-y-[1px]
        pl-[14px]
      `
                  : `
        mt-[5px]
        list-disc
        space-y-[1px]
        pl-[17px]
      `
              }
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
              className={
                compact
                  ? `
        mt-[4px]

        font-semibold
        leading-[1.3]

        text-[#B67B1B]

        text-[12px]

        sm:text-[13px]
      `
                  : `
        mt-[7px]

        font-semibold
        leading-[1.36]

        text-[#B67B1B]
      `
              }
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
   GRID
========================================================= */

export function ConductGrid({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section
      className={
        compact
          ? `
        w-full
      `
          : `
        mx-auto

        mt-[15px]

        w-full
        max-w-[1344px]

        px-4

        sm:px-5
        lg:px-6
      `
      }
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
              <ConductCard item={item} compact={compact} />
            </div>
          )
        )}
      </div>
    </section>
  );
}

/* =========================================================
   DECLARATION
========================================================= */

export function ConductDeclaration({
  onSubmit,
  submitLabel = "Continue Registration",
  asLink = true,
  compact = false,
  onCheckedChange,
}: {
  onSubmit?: () => void;
  submitLabel?: string;
  asLink?: boolean;
  compact?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  const [checked, setChecked] = useState(false);

  return (
    <section
      className={
        compact
          ? `
        w-full
      `
          : `
        mx-auto

        mt-[16px]

        w-full
        max-w-[1344px]

        px-4

        sm:px-5
        lg:px-6
      `
      }
    >
      <div
        className={
          compact
            ? `
        overflow-hidden

        rounded-[8px]

        border
        border-[#C49535]

        bg-[#004435]

        text-white

        shadow-[0_5px_14px_rgba(0,54,41,0.10)]

        sm:grid
        sm:grid-cols-[1.18fr_0.82fr]
      `
            : `
        overflow-hidden

        rounded-[9px]

        border
        border-[#C49535]

        bg-[#004435]

        text-white

        shadow-[0_7px_20px_rgba(0,54,41,0.12)]

        lg:grid
        lg:grid-cols-[1.32fr_0.88fr]
      `
        }
      >
        {/* LEFT */}

        <div
          className={
            compact
              ? `
        flex
        items-center
        gap-[10px]

        px-[14px]
        py-[10px]

        sm:border-r
        sm:border-[#A17C37]
        sm:px-[18px]
      `
              : `
        flex
        items-center
        gap-[22px]

        px-[25px]
        py-[19px]

        lg:border-r
        lg:border-[#A17C37]
      `
          }
        >
          <div
            className={
              compact
                ? `
        hidden

        h-[44px]
        w-[44px]
        shrink-0

        place-items-center

        rounded-full

        bg-[#FFF7E7]

        text-[#064435]

        sm:grid
      `
                : `
        hidden

        h-[112px]
        w-[112px]
        shrink-0

        place-items-center

        rounded-full

        bg-[#FFF7E7]

        text-[#064435]

        sm:grid
      `
            }
          >
            <ClipboardPenLine
              className={
                compact
                  ? `
        h-[26px]
        w-[26px]
      `
                  : `
        h-[68px]
        w-[68px]
      `
              }
              strokeWidth={1.35}
            />
          </div>

          <div className="min-w-0">
            <h2
              className={
                compact
                  ? `
        text-[14px]
        font-bold
        uppercase
        tracking-[0.02em]
      `
                  : `
        text-[18px]
        font-bold
        uppercase
        tracking-[0.02em]
      `
              }
            >
              Volunteer Declaration
            </h2>

            <div
              className={
                compact
                  ? `
        mt-[3px]

        space-y-[2px]

        text-[13px]
        leading-[1.32]

        text-[#F5EFE5]

        sm:text-[14px]
      `
                  : `
        mt-[7px]

        space-y-[3px]

        text-[16px]
        leading-[1.4]

        text-[#F5EFE5]
      `
              }
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
          className={
            compact
              ? `
        flex
        flex-col
        justify-center

        px-[14px]
        py-[10px]

        sm:px-[18px]
      `
              : `
        flex
        flex-col
        justify-center

        px-[25px]
        py-[19px]
      `
          }
        >
          <label
            className={
              compact
                ? `
        flex
        cursor-pointer
        items-start
        gap-[9px]
      `
                : `
        flex
        cursor-pointer
        items-start
        gap-[12px]
      `
            }
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => {
                const next = event.target.checked;
                setChecked(next);
                onCheckedChange?.(next);
              }}
              className={
                compact
                  ? `
        mt-[2px]

        h-[18px]
        w-[18px]

        shrink-0

        accent-[#D7A035]
      `
                  : `
        mt-[2px]

        h-[21px]
        w-[21px]

        shrink-0

        accent-[#D7A035]
      `
              }
            />

            <span
              className={
                compact
                  ? `
        text-[13px]
        font-bold
        uppercase
        leading-[1.3]

        text-[#FFF9EC]

        sm:text-[14px]
      `
                  : `
        text-[16px]
        font-bold
        uppercase
        leading-[1.3]

        text-[#FFF9EC]
      `
              }
            >
              I Agree to the Volunteer
              <br />
              Code of Conduct
            </span>
          </label>

          {asLink ? (
            <a
              href="/volunteer/register"
              className={
                compact
                  ? `
        group

        mt-[10px]

        inline-flex
        min-h-[42px]
        w-full

        items-center
        justify-between

        rounded-[5px]

        bg-[#E6A72D]

        px-[14px]

        text-[13px]
        font-bold
        uppercase
        tracking-[0.02em]

        text-[#163F35]

        transition

        hover:bg-[#F0B33B]

        sm:text-[14px]
      `
                  : `
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
      `
              }
            >
              {submitLabel}

              <ArrowRight
                className={
                  compact
                    ? `
        h-[18px]
        w-[18px]

        transition-transform

        group-hover:translate-x-[3px]
      `
                    : `
        h-[21px]
        w-[21px]

        transition-transform

        group-hover:translate-x-[4px]
      `
                }
              />
            </a>
          ) : (
            <button
              type="button"
              disabled={!checked}
              onClick={onSubmit}
              className={
                compact
                  ? `
        group

        mt-[10px]

        inline-flex
        min-h-[42px]
        w-full

        items-center
        justify-between

        rounded-[5px]

        bg-[#E6A72D]

        px-[14px]

        text-[13px]
        font-bold
        uppercase
        tracking-[0.02em]

        text-[#163F35]

        transition

        hover:bg-[#F0B33B]

        disabled:cursor-not-allowed
        disabled:opacity-50

        sm:text-[14px]
      `
                  : `
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

        disabled:cursor-not-allowed
        disabled:opacity-50
      `
              }
            >
              {submitLabel}

              <ArrowRight
                className={
                  compact
                    ? `
        h-[18px]
        w-[18px]

        transition-transform

        group-hover:translate-x-[3px]
      `
                    : `
        h-[21px]
        w-[21px]

        transition-transform

        group-hover:translate-x-[4px]
      `
                }
              />
            </button>
          )}

          <div
            className={
              compact
                ? `
        mt-[6px]

        flex
        items-start
        gap-[5px]

        text-[12px]
        leading-[1.25]

        text-[#E6DED1]

        sm:text-[13px]
      `
                : `
        mt-[8px]

        flex
        items-start
        gap-[6px]

        text-[16px]
        leading-[1.3]

        text-[#E6DED1]
      `
            }
          >
            <LockKeyhole
              className={
                compact
                  ? `
        mt-[1px]

        h-[14px]
        w-[14px]
        shrink-0

        text-[#D7A035]
      `
                  : `
        mt-[1px]

        h-[16px]
        w-[16px]
        shrink-0

        text-[#D7A035]
      `
              }
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
  );
}