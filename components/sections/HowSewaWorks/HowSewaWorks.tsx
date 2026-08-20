"use client";

import {
  FaArrowRight,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: "clipboard" | "document" | "hands" | "diya";
}

function LotusMark({
  className = "h-6 w-9",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 50"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClipboardIcon({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="9"
        width="28"
        height="34"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />

      <rect
        x="18"
        y="5"
        width="12"
        height="7"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.08"
      />

      <circle
        cx="24"
        cy="22"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M17 34c1.5-5 4.5-7 7-7s5.5 2 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocumentIcon({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13 6h16l8 8v27a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M29 6v8h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      <path
        d="M15 26h11M15 32h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="33"
        cy="34"
        r="8"
        fill="#FBEEDD"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M29.5 34.2l2.2 2.3 4.3-4.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandsIcon({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="17"
        r="3.4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M11.5 26c1-3 2.5-4.6 4.5-4.6s3.5 1.6 4.5 4.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="24"
        cy="13"
        r="3.8"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M18.7 23.5c1.2-3.6 3-5.4 5.3-5.4s4.1 1.8 5.3 5.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="32"
        cy="17"
        r="3.4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M27.5 26c1-3 2.5-4.6 4.5-4.6s3.5 1.6 4.5 4.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M6 30c3 6 10 10 18 10s15-4 18-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M9 30.5c2 4.4 8 7.5 15 7.5s13-3.1 15-7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DiyaIcon({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 2v4M15 5l2 3.4M33 5l-2 3.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M24 11c-2.6 4-3.8 7-2.6 9.6.8 1.9 2.6 3 2.6 3s1.8-1.1 2.6-3c1.2-2.6 0-5.6-2.6-9.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />

      <path
        d="M6 28c4 6.4 11 10 18 10s14-3.6 18-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M9.5 28c1.8 4.6 7.6 8 14.5 8s12.7-3.4 14.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 28h40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ICONS = {
  clipboard: ClipboardIcon,
  document: DocumentIcon,
  hands: HandsIcon,
  diya: DiyaIcon,
};

function LeafBranch({
  className = "h-28 w-40",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 140"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4c40 8 80 30 110 70 20 26 34 50 40 62"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {[
        [20, 14, 46, 8],
        [40, 30, 68, 22],
        [60, 48, 90, 40],
        [80, 66, 112, 58],
        [98, 84, 130, 76],
      ].map(([x1, y1, x2, y2], i) => (
        <path
          key={i}
          d={`M${x1} ${y1}C${x1 + 10} ${y1 - 14},${
            x2 - 6
          } ${y2 - 18},${x2} ${y2}C${x2 - 6} ${
            y2 + 6
          },${x1 + 6} ${y1 + 10},${x1} ${y1}Z`}
          fill="currentColor"
          fillOpacity="0.5"
        />
      ))}
    </svg>
  );
}

function GhatSkyline({
  className = "h-64 w-72",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M40 320V150M80 320V110M120 320V150M160 320V90M200 320V150M240 320V110M280 320V150"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M150 90c0-16 10-26 10-26s10 10 10 26"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M70 110c0-14 10-24 10-24s10 10 10 24"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M230 110c0-14 10-24 10-24s10 10 10 24"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M0 190c40-10 60-10 100-2s60 8 100 0 60-10 120-2"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M0 320c60-30 100-40 160-40s100 10 160 40"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="160"
        cy="40"
        r="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Request Sewa Help",
    description: "Share the basic\ncase details.",
    icon: "clipboard",
  },
  {
    number: "02",
    title: "Case Verification",
    description:
      "Our team reviews the need\nand applicable requirements.",
    icon: "document",
  },
  {
    number: "03",
    title: "Sewa Coordination",
    description:
      "Required assistance is\ncoordinated based on\navailability.",
    icon: "hands",
  },
  {
    number: "04",
    title: "Dignified Final Journey",
    description:
      "The family/case receives\ncompassionate on-ground\nassistance.",
    icon: "diya",
  },
];

export default function HowSewaWorks() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFFDF8]
        px-4
        py-[27px]

        sm:px-5
        lg:px-6
      "
    >
      {/* PAPER TEXTURE */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(176,132,69,0.10) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* LEFT LEAVES */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[18px]
          -top-[18px]
          text-[#D7B16B]/35
        "
      >
        <LeafBranch className="h-[120px] w-[165px]" />
      </div>

      {/* RIGHT GHAT */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[18px]
          bottom-[30px]
          text-[#D19F51]/22
        "
      >
        <GhatSkyline className="h-[255px] w-[260px]" />
      </div>

      {/* BIRDS */}

      <div
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[93px]
          hidden
          text-[#C89B51]/50

          lg:block
        "
      >
        <svg
          viewBox="0 0 80 30"
          className="h-[42px] w-[100px]"
          fill="none"
        >
          <path
            d="M5 16c5-5 10-5 15 0M20 16c5-5 10-5 15 0"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          <path
            d="M46 6c4-4 8-4 12 0M58 6c4-4 8-4 12 0"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1344px]
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="text-center">
          <div
            className="
              inline-flex
              items-center
              justify-center
              gap-[11px]
            "
          >
            <span
              className="
                h-px
                w-[49px]
                bg-gradient-to-r
                from-transparent
                to-[#D09A35]
              "
            />

            <span
              className="
                inline-flex
                items-center
                gap-[7px]
                font-sans
                text-[16px]
                font-semibold
                uppercase
                text-[#3F332B]
              "
            >
              <LotusMark
                className="
                  h-[21px]
                  w-[25px]
                  text-[#D19524]
                "
              />

              How Sewa Works
            </span>

            <span
              className="
                h-px
                w-[49px]
                bg-gradient-to-l
                from-transparent
                to-[#D09A35]
              "
            />
          </div>

          <h2
            className="
              mx-auto
              mt-[7px]
              max-w-[1120px]
              font-sans
              text-[24px]
              font-semibold
              leading-[1.05]
              text-[#321C12]

              sm:text-[30px]
            "
          >
            Support With Care, Verification &amp; Responsibility
          </h2>

          <div
            className="
              mt-[10px]
              flex
              items-center
              justify-center
              gap-[11px]
              text-[#D09528]
            "
          >
            <span className="h-px w-[105px] bg-[#D4A049]" />

            <LotusMark className="h-[21px] w-[28px]" />

            <span className="h-px w-[105px] bg-[#D4A049]" />
          </div>

          <p
            className="
              mt-[6px]
              text-[16px]
              font-medium
              leading-[1.4]
              text-[#596068]
            "
          >
            A simple process. Compassionate support. Dignified final
            journey.
          </p>
        </header>

        {/* =====================================================
            PROCESS
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-[16px]
            w-full
            max-w-[1210px]
          "
        >
          {/* =================================================
              GOLD LINE

              IMPORTANT:
              card starts at y = 70px
              line also sits exactly at y = 70px

              So line TOUCHES card top border,
              same as reference.
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[7%]
              right-[7%]
              top-[70px]

              hidden
              h-px

              bg-[#D8A54B]

              lg:block
            "
          />

          <div
            className="
              grid
              grid-cols-1
              gap-[28px]

              sm:grid-cols-2

              lg:grid-cols-4
              lg:gap-[82px]
            "
          >
            {steps.map((step, index) => {
              const Icon = ICONS[step.icon];

              return (
                <article
                  key={step.number}
                  className="
                    relative
                    min-w-0
                    pt-[70px]
                  "
                >
                  {/* =============================================
                      ICON
                  ============================================= */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-0
                      z-30
                      -translate-x-1/2
                    "
                  >
                    <div className="relative">
                      <div
                        className="
                          grid
                          h-[108px]
                          w-[108px]
                          place-items-center
                          rounded-full
                          border-[2px]
                          border-[#DDA44B]
                          bg-[#FFF9EE]
                          text-[#66704C]
                          shadow-[0_6px_16px_rgba(163,111,42,0.10)]
                        "
                      >
                        <Icon
                          className="
                            h-[58px]
                            w-[58px]
                          "
                        />
                      </div>

                      {/* NUMBER */}

                      <span
                        className="
                          absolute
                          -left-[24px]
                          top-[5px]
                          z-40

                          grid
                          h-[46px]
                          w-[46px]
                          place-items-center

                          rounded-full
                          border
                          border-[#B47322]

                          bg-[#3A1E10]

                          text-[18px]
                          font-semibold
                          text-white

                          shadow-[0_3px_7px_rgba(45,25,13,0.18)]
                        "
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* =============================================
                      CARD
                  ============================================= */}

                  <div
                    className="
                      relative
                      min-h-[172px]

                      rounded-[8px]

                      border
                      border-[#ECD8B8]

                      bg-[#FFFDFC]/95

                      px-[18px]
                      pb-[20px]
                      pt-[50px]

                      text-center

                      shadow-[0_6px_18px_rgba(93,64,29,0.055)]
                    "
                  >
                    <h3
                      className="
                        text-[18px]
                        font-bold
                        leading-[1.2]
                        text-[#39281E]
                      "
                    >
                      {step.title}
                    </h3>

                    <span
                      className="
                        mx-auto
                        mt-[9px]
                        block
                        h-[2px]
                        w-[38px]
                        bg-[#D6A047]
                      "
                    />

                    <p
                      className="
                        mt-[11px]
                        whitespace-pre-line
                        text-[16px]
                        font-medium
                        leading-[1.43]
                        text-[#646669]
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* =============================================
                      CONNECTOR ARROW

                      Card top = 70px
                      Arrow size = 32px
                      70 - 16 = 54px

                      Arrow center = 70px exactly.
                  ============================================= */}

                  {index < steps.length - 1 && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-[57px]
                        top-[54px]
                        z-50

                        hidden

                        h-[32px]
                        w-[32px]

                        place-items-center

                        rounded-full

                        border-[2px]
                        border-[#D39A32]

                        bg-[#FFFDF8]

                        text-[#C9861F]

                        shadow-[0_2px_4px_rgba(126,82,25,0.06)]

                        lg:grid
                      "
                    >
                      <FaArrowRight
                        className="
                          h-[13px]
                          w-[13px]
                        "
                      />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          className="
            mt-[18px]

            grid
            overflow-hidden

            rounded-[8px]

            border
            border-[#EAD9BD]

            bg-[#FFF9EF]/95

            shadow-[0_4px_14px_rgba(98,69,33,0.04)]

            lg:grid-cols-[1.05fr_1.05fr_1fr]
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[18px]

              px-[24px]
              py-[12px]
            "
          >
            <span
              className="
                grid
                h-[64px]
                w-[64px]
                shrink-0

                place-items-center

                rounded-full

                bg-[#E8E5C9]

                text-[#596431]
              "
            >
              <FaHeadset
                className="
                  h-[31px]
                  w-[31px]
                "
              />
            </span>

            <div className="text-left">
              <p
                className="
                  text-[17px]
                  font-bold
                  text-[#3C2D22]
                "
              >
                Need assistance?
              </p>

              <p
                className="
                  mt-[3px]
                  text-[16px]
                  leading-[1.35]
                  text-[#5F6263]
                "
              >
                We are here to help you
                <br />
                in this difficult time.
              </p>
            </div>
          </div>

          {/* CENTER */}

          <div
            className="
              relative
              flex
              items-center
              justify-center

              border-y
              border-[#E4D1B3]

              px-[28px]
              py-[12px]

              lg:border-x
              lg:border-y-0
            "
          >
            <a
              href="/request-help"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group

                inline-flex
                h-[59px]
                w-full
                max-w-[350px]

                items-center
                justify-between

                rounded-[6px]

                border
                border-[#687023]

                bg-[#4E5912]

                px-[24px]

                text-[16px]
                font-bold
                uppercase
                tracking-[0.02em]

                text-[#FFF7DB]

                shadow-[0_4px_9px_rgba(66,73,14,0.17)]

                transition

                hover:bg-[#414B0D]
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-[15px]
                "
              >
                <LotusMark
                  className="
                    h-[31px]
                    w-[39px]
                    text-[#D8A230]
                  "
                />

                Request Sewa Help
              </span>

              <FaArrowRight
                className="
                  h-[21px]
                  w-[21px]
                  transition-transform

                  group-hover:translate-x-[3px]
                "
              />
            </a>
          </div>

          {/* RIGHT */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[17px]

              px-[24px]
              py-[12px]
            "
          >
            <span
              className="
                grid
                h-[64px]
                w-[64px]
                shrink-0

                place-items-center

                rounded-full

                bg-[#F1ECD6]

                text-[#667345]
              "
            >
              <FaShieldAlt
                className="
                  h-[30px]
                  w-[30px]
                "
              />
            </span>

            <p
              className="
                max-w-[285px]
                text-left
                text-[16px]
                font-medium
                leading-[1.38]
                text-[#626567]
              "
            >
              Support is provided subject to verification,
              availability and applicable legal requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}