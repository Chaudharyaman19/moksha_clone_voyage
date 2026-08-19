"use client";

import Image from "next/image";
import { PartnershipIcon } from "./PartnershipIcons";

const leftGroups = [
  {
    icon: "Hospital" as const,
    title: "Hospitals &\nInstitutions",
    text: "Explore appropriate referral\nand coordination pathways\nfor eligible cases.",
  },
  {
    icon: "Community" as const,
    title: "NGOs &\nCommunity Networks",
    text: "Strengthen community reach,\nreferrals and humanitarian\ncoordination.",
  },
];

const rightGroups = [
  {
    icon: "Gear" as const,
    title: "Service & Professional\nPartners",
    text: "Contribute relevant logistics,\nfinal-journey services, professional\nexpertise or operational capabilities.",
  },
  {
    icon: "Volunteer" as const,
    title: "Volunteer &\nSupport Networks",
    text: "Create suitable opportunities\nfor organised participation\nand community Sewa.",
  },
];

function Connector() {
  return (
    <div
      className="
        hidden
        min-w-0
        flex-1
        items-center
        xl:flex
      "
    >
      <span
        className="
          h-px
          flex-1
          border-t
          border-dashed
          border-[#8C927B]
        "
      />

      <span
        className="
          mx-[5px]
          grid
          h-[36px]
          w-[54px]
          shrink-0
          place-items-center

          rounded-full

          border
          border-dashed
          border-[#91927C]

          bg-[#FBF8F2]

          text-[25px]
          font-medium
          leading-none

          text-[#C48317]
        "
      >
        ↔
      </span>

      <span
        className="
          h-px
          flex-1
          border-t
          border-dashed
          border-[#8C927B]
        "
      />
    </div>
  );
}

function PartnerItem({
  icon,
  title,
  text,
}: {
  icon: "Hospital" | "Community" | "Gear" | "Volunteer";
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        flex
        min-w-0
        flex-col
        items-center
        text-center
      "
    >
      {/* =====================================================
          BIG ICON CIRCLE
      ====================================================== */}

      <div
        className="
          relative

          grid
          h-[146px]
          w-[146px]
          shrink-0

          place-items-center

          rounded-full

          border-[2px]
          border-[#D6C69E]

          bg-[#FFFDF8]

          shadow-[0_3px_12px_rgba(66,44,19,0.035)]

          xl:h-[154px]
          xl:w-[154px]
        "
      >
        <PartnershipIcon
          name={icon}
          className="
            h-[76px]
            w-[76px]
            text-[#194F40]
          "
        />
      </div>

      {/* TITLE */}

      <h3
        className="
          mt-[13px]

          min-h-[48px]

          whitespace-pre-line

          text-[19px]
          font-bold
          leading-[1.17]

          text-[#064B3A]
        "
      >
        {title}
      </h3>

      {/* SMALL GOLD LINE */}

      <span
        className="
          mt-[10px]
          block
          h-[2px]
          w-[38px]
          bg-[#D3A24C]
        "
      />

      {/* DESCRIPTION */}

      <p
        className="
          mt-[11px]

          whitespace-pre-line

          text-[16px]
          font-medium
          leading-[1.48]

          text-[#454B4C]
        "
      >
        {text}
      </p>
    </div>
  );
}

export default function PartnershipNetwork() {
  return (
    <section
      id="partnership-network"
      className="
        relative
        w-full
        overflow-hidden

        bg-[#FBF8F2]

        px-4
        py-[32px]

        sm:px-5
        lg:px-6
      "
    >
      {/* =====================================================
          SUBTLE CORNER LOTUS DECORATIONS
      ====================================================== */}

      <PartnershipIcon
        name="Lotus"
        className="
          pointer-events-none
          absolute
          -bottom-[55px]
          -left-[44px]

          h-[190px]
          w-[190px]

          text-[#D9C496]/20
        "
      />

      <PartnershipIcon
        name="Lotus"
        className="
          pointer-events-none
          absolute
          -bottom-[55px]
          -right-[44px]

          h-[190px]
          w-[190px]

          text-[#D9C496]/20
        "
      />

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1344px]

          text-center
        "
      >
        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-[14px]
          "
        >
          <span
            className="
              h-px
              w-[85px]
              bg-[#D0A359]
            "
          />

          <span
            className="
              text-[16px]
              font-bold
              uppercase
              tracking-[0.08em]

              text-[#B47B22]
            "
          >
            Work Together
          </span>

          <span
            className="
              h-px
              w-[85px]
              bg-[#D0A359]
            "
          />
        </div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <h2
          className="
            mt-[13px]

            text-[38px]
            font-medium
            leading-[1.04]
            tracking-[-0.018em]

            text-[#064335]

            sm:text-[44px]
            lg:text-[50px]
          "
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          Different Strengths. One Human Purpose.
        </h2>

        {/* =====================================================
            LOTUS DIVIDER
        ====================================================== */}

        <div
          className="
            mt-[12px]

            flex
            items-center
            justify-center
            gap-[11px]

            text-[#C48925]
          "
        >
          <span
            className="
              h-px
              w-[150px]
              bg-[#D2A65C]
            "
          />

          <PartnershipIcon
            name="Lotus"
            className="
              h-[28px]
              w-[28px]
            "
          />

          <span
            className="
              h-px
              w-[150px]
              bg-[#D2A65C]
            "
          />
        </div>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <p
          className="
            mx-auto
            mt-[15px]

            max-w-[760px]

            text-[16px]
            font-medium
            leading-[1.55]

            text-[#464C4D]
          "
        >
          Moksha Sewa seeks to work with organisations and professionals whose
          <br className="hidden md:block" />
          capabilities, services or networks can responsibly strengthen
          humanitarian support.
        </p>

        {/* =====================================================
            MAIN NETWORK ROW
        ====================================================== */}

        <div
          className="
            mt-[31px]

            grid
            grid-cols-1
            items-start

            gap-y-[34px]

            md:grid-cols-2
            md:gap-x-[42px]

            xl:grid-cols-[1fr_68px_1fr_88px_1.18fr_88px_1fr_68px_1fr]
            xl:gap-x-0
          "
        >
          {/* =================================================
              LEFT ITEM 01
          ================================================= */}

          <PartnerItem {...leftGroups[0]} />

          <Connector />

          {/* =================================================
              LEFT ITEM 02
          ================================================= */}

          <PartnerItem {...leftGroups[1]} />

          <Connector />

          {/* =================================================
              CENTER MOKSHA SEWA
          ================================================= */}

          <div
            className="
              flex
              min-w-0
              flex-col
              items-center
              text-center

              md:col-span-2

              xl:col-span-1
            "
          >
            <div
              className="
                relative

                grid
                h-[178px]
                w-[178px]

                place-items-center

                rounded-full

                border-[7px]
                border-[#E2B45C]

                bg-[#004A3A]

                shadow-[0_7px_18px_rgba(0,60,43,0.15)]
              "
            >
              {/* INNER BORDER */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-[4px]

                  rounded-full

                  border
                  border-[#D3A249]
                "
              />

              <div>
                <PartnershipIcon
                  name="Lotus"
                  className="
                    mx-auto
                    h-[60px]
                    w-[60px]

                    text-[#D59A27]
                  "
                />

                <p
                  className="
                    mt-[2px]

                    text-[19px]
                    font-medium
                    uppercase

                    text-white
                  "
                >
                  Moksha Sewa
                </p>

                <p
                  className="
                    mt-[3px]

                    text-[10px]
                    font-semibold
                    leading-[1.3]

                    text-[#D7A23A]
                  "
                >
                  A Namo Gange
                  <br />
                  Trust Initiative
                </p>
              </div>

              {/* LEFT / RIGHT DOTS */}

              <span
                className="
                  absolute
                  left-[-10px]
                  top-1/2

                  h-[18px]
                  w-[18px]

                  -translate-y-1/2

                  rounded-full

                  border-[4px]
                  border-[#C99A3A]

                  bg-[#004A3A]
                "
              />

              <span
                className="
                  absolute
                  right-[-10px]
                  top-1/2

                  h-[18px]
                  w-[18px]

                  -translate-y-1/2

                  rounded-full

                  border-[4px]
                  border-[#C99A3A]

                  bg-[#004A3A]
                "
              />
            </div>

            <p
              className="
                mt-[18px]

                max-w-[250px]

                text-[16px]
                font-medium
                leading-[1.42]

                text-[#4A5051]
              "
            >
              Facilitating responsible partnerships that ensure dignity,
              compassion and coordinated humanitarian support.
            </p>
          </div>

          <Connector />

          {/* =================================================
              RIGHT ITEM 01
          ================================================= */}

          <PartnerItem {...rightGroups[0]} />

          <Connector />

          {/* =================================================
              RIGHT ITEM 02
          ================================================= */}

          <PartnerItem {...rightGroups[1]} />
        </div>

        {/* =====================================================
            CTA ROW
        ====================================================== */}

        <div
          className="
            mt-[28px]

            flex
            items-center
            justify-center
            gap-[17px]
          "
        >
          <span
            className="
              hidden
              h-px
              flex-1
              bg-gradient-to-r
              from-transparent
              to-[#C99A3E]

              md:block
            "
          />

          <span
            className="
              hidden
              h-[8px]
              w-[8px]
              shrink-0

              rotate-45

              bg-[#C9891E]

              md:block
            "
          />

          <a
            href="#partnership-enquiry"
            className="
              group

              inline-flex
              h-[54px]
              w-full
              max-w-[360px]

              items-center
              justify-between

              rounded-[6px]

              border
              border-[#C79030]

              bg-[#004B39]

              px-[25px]

              text-[17px]
              font-medium
              uppercase
              tracking-[0.025em]

              text-white

              shadow-[0_5px_13px_rgba(0,64,45,0.12)]

              transition
              hover:bg-[#003D30]
            "
          >
            Explore a Partnership

            <PartnershipIcon
              name="ArrowRight"
              className="
                h-[22px]
                w-[22px]

                transition-transform
                group-hover:translate-x-[3px]
              "
            />
          </a>

          <span
            className="
              hidden
              h-[8px]
              w-[8px]
              shrink-0

              rotate-45

              bg-[#C9891E]

              md:block
            "
          />

          <span
            className="
              hidden
              h-px
              flex-1
              bg-gradient-to-l
              from-transparent
              to-[#C99A3E]

              md:block
            "
          />
        </div>

        {/* =====================================================
            IMPORTANT NOTE
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-[17px]

            flex
            max-w-[820px]

            items-center

            rounded-[8px]

            border
            border-[#E0D8C9]

            bg-[#F5F2EA]

            px-[20px]
            py-[13px]

            text-left
          "
        >
          <span
            className="
              grid
              h-[46px]
              w-[46px]
              shrink-0

              place-items-center

              rounded-full

              bg-[#FAF8F2]

              text-[#0A4B3B]
            "
          >
            <PartnershipIcon
              name="ShieldCheck"
              className="
                h-[32px]
                w-[32px]
              "
            />
          </span>

          <span
            className="
              mx-[16px]

              h-[42px]
              w-px

              bg-[#CDB98F]
            "
          />

          <p
            className="
              text-[16px]
              leading-[1.45]

              text-[#4A504F]
            "
          >
            Potential partner categories do not imply an existing affiliation,
            endorsement or formal partnership with any institution or authority.
          </p>
        </div>
      </div>
    </section>
  );
}