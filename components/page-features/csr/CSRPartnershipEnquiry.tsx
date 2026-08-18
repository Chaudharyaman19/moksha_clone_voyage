"use client";

import { CSRIcon } from "./CSRIcons";

const values = [
  {
    icon: "Handshake" as const,
    title: "Meaningful\nImpact",
    text: "Support dignified\nhumanitarian\ninitiatives.",
  },
  {
    icon: "ShieldCheck" as const,
    title: "Responsible\nCollaboration",
    text: "Built on trust, compliance\nand accountability.",
  },
  {
    icon: "People" as const,
    title: "Community\nDriven",
    text: "Strengthen support\nwhere it’s needed\nmost.",
  },
  {
    icon: "Report" as const,
    title: "Transparent\nReporting",
    text: "Clear updates and\nimpact reporting\nas agreed.",
  },
];

const fields = [
  {
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
    type: "text",
  },
  {
    label: "Company / Organisation",
    placeholder: "Enter company / organisation name",
    required: true,
    type: "text",
  },
  {
    label: "Official Email",
    placeholder: "Enter official email address",
    required: true,
    type: "email",
  },
  {
    label: "Phone Number",
    placeholder: "Enter phone number",
    required: true,
    type: "tel",
  },
  {
    label: "Designation",
    placeholder: "Enter your designation",
    required: false,
    type: "text",
  },
];

export default function CSRPartnershipEnquiry() {
  return (
    <section
      id="csr-enquiry"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7F0]

        px-4
        py-[20px]

        sm:px-5
        lg:px-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* =====================================================
            MAIN 2 COLUMN GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-[22px]

            lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)]
            lg:gap-[26px]
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div
            className="
              relative
              h-full
              min-h-[650px]

              overflow-hidden

              [&>*:not(:first-child)]:hidden

              bg-[#FBF7F0]
            "
          >
            <img
              src="/assets/csr/responsible-partnership-conversation.png"
              alt="Start a Conversation - Let's Build a Responsible Partnership"
              className="absolute inset-0 h-full w-full object-fill"
            />
            {/* ===============================================
                BOTTOM SCENIC IMAGE

                Background sirf lower part me hai.
                Top icons/text duplicate nahi honge.
            =============================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0

                h-[320px]

                bg-cover
                bg-bottom
                bg-no-repeat
              "
              style={{
                backgroundImage:
                  "url('/assets/csr/enquiry-team-bg.jpg')",
              }}
            />

            {/* TOP FADE OVER IMAGE */}

            <div
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-[170px]

                z-[1]

                h-[150px]

                bg-gradient-to-b
                from-[#FBF7F0]
                via-[#FBF7F0]/80
                to-transparent
              "
            />

            {/* =================================================
                EDITABLE CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10

                px-[22px]
                pt-[18px]

                sm:px-[38px]

                lg:px-[42px]
                lg:pt-[22px]
              "
            >
              {/* LABEL */}

              <div
                className="
                  flex
                  items-center
                  gap-[13px]
                "
              >
                <span
                  className="
                    h-[2px]
                    w-[31px]
                    bg-[#C68B28]
                  "
                />

                <p
                  className="
                    whitespace-nowrap

                    text-[17px]
                    font-bold
                    uppercase
                    tracking-[0.15em]

                    text-[#0B4A3C]
                  "
                >
                  Start a Conversation
                </p>
              </div>

              {/* =================================================
                  HEADING
              ================================================= */}

              <h2
                className="
                  mt-[16px]

                  max-w-[600px]

                  font-serif
                  text-[38px]
                  font-medium
                  leading-[1.02]
                  tracking-[-0.025em]

                  text-[#064335]

                  sm:text-[44px]
                  xl:text-[48px]
                "
                style={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                }}
              >
                Let&apos;s Build a
                <br />
                Responsible Partnership
                <span className="text-[#BD7C18]">
                  .
                </span>
              </h2>

              <span
                className="
                  mt-[15px]
                  block

                  h-[2px]
                  w-[105px]

                  bg-[#C18C35]
                "
              />

              {/* DESCRIPTION */}

              <p
                className="
                  mt-[14px]

                  max-w-[580px]

                  text-[18px]
                  font-medium
                  leading-[1.45]

                  text-[#3D4242]
                "
              >
                Tell us a little about your organisation and CSR
                priorities.
                <br />
                Our team can connect with you to explore
                <br />
                an appropriate collaboration.
              </p>

              {/* =================================================
                  4 VALUES
              ================================================= */}

              <div
                className="
                  mt-[22px]

                  grid
                  grid-cols-2

                  gap-y-[16px]

                  sm:grid-cols-4
                  sm:gap-y-0
                "
              >
                {values.map(
                  ({ icon, title, text }, index) => (
                    <div
                      key={title}
                      className={`
                        relative

                        min-w-0

                        px-[12px]

                        text-center

                        ${
                          index
                            ? "sm:border-l sm:border-[#D1B789]"
                            : ""
                        }
                      `}
                    >
                      {/* ICON */}

                      <span
                        className="
                          mx-auto

                          grid
                          h-[54px]
                          w-[54px]

                          place-items-center

                          rounded-full

                          border
                          border-[#D7C8AA]

                          bg-[#FBF7EE]

                          text-[#0C4C3A]
                        "
                      >
                        <CSRIcon
                          name={icon}
                          className="
                            h-[32px]
                            w-[32px]
                          "
                        />
                      </span>

                      {/* TITLE */}

                      <h3
                        className="
                          mt-[7px]

                          whitespace-pre-line

                          text-[16px]
                          font-bold
                          leading-[1.2]

                          text-[#0B4A3A]
                        "
                      >
                        {title}
                      </h3>

                      {/* SMALL GOLD LINE */}

                      <span
                        className="
                          mx-auto
                          mt-[5px]
                          block

                          h-[2px]
                          w-[28px]

                          bg-[#C79541]
                        "
                      />

                      {/* TEXT */}

                      <p
                        className="
                          mt-[6px]

                          whitespace-pre-line

                          text-[16px]
                          leading-[1.34]

                          text-[#3F4443]
                        "
                      >
                        {text}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT FORM CARD
          ================================================= */}

          <form
            className="
              self-start

              rounded-[18px]

              bg-white

              px-[30px]
              pb-[22px]
              pt-[22px]

              shadow-[0_7px_26px_rgba(50,39,22,0.08)]

              sm:px-[38px]

              lg:min-h-[650px]
              lg:px-[42px]
              lg:pb-[22px]
              lg:pt-[22px]
            "
          >
            {/* =================================================
                FORM HEADER
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-[16px]
              "
            >
              <span
                className="
                  grid
                  h-[56px]
                  w-[56px]
                  shrink-0

                  place-items-center

                  rounded-full

                  bg-[#004A39]

                  text-[#D39A2D]
                "
              >
                <CSRIcon
                  name="Form"
                  className="
                    h-[34px]
                    w-[34px]
                  "
                />
              </span>

              <h3
                className="
                  whitespace-nowrap

                  text-[18px]
                  font-bold
                  uppercase
                  tracking-[0.08em]

                  text-[#0B4A3B]

                  sm:text-[20px]
                "
              >
                CSR Partnership Enquiry
              </h3>

              <span
                className="
                  ml-auto
                  hidden
                  h-px
                  min-w-[45px]
                  flex-1

                  bg-[#C48D32]

                  sm:block
                "
              />

              <span
                className="
                  hidden
                  h-[8px]
                  w-[8px]
                  shrink-0

                  rounded-full

                  bg-[#BD8019]

                  sm:block
                "
              />
            </div>

            {/* =================================================
                FORM GRID
            ================================================= */}

            <div
              className="
                mt-[18px]

                grid
                grid-cols-1

                gap-x-[24px]
                gap-y-[14px]

                md:grid-cols-2
              "
            >
              {fields.map((field) => (
                <label
                  key={field.label}
                  className="block min-w-0"
                >
                  <span
                    className="
                      mb-[5px]
                      block

                      text-[16px]
                      font-semibold

                      text-[#222]
                    "
                  >
                    {field.label}

                    {field.required && (
                      <span className="text-red-600">
                        {" "}
                        *
                      </span>
                    )}
                  </span>

                  <input
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="
                      h-[48px]
                      w-full

                      rounded-[7px]

                      border
                      border-[#DFC8AA]

                      bg-white

                      px-[16px]

                      text-[16px]

                      outline-none

                      transition

                      placeholder:text-[#868686]

                      focus:border-[#A8792C]
                    "
                  />
                </label>
              ))}

              {/* CSR FOCUS */}

              <label className="block min-w-0">
                <span
                  className="
                    mb-[5px]
                    block

                    text-[16px]
                    font-semibold

                    text-[#222]
                  "
                >
                  CSR / ESG Focus Area
                </span>

                <select
                  className="
                    h-[48px]
                    w-full

                    rounded-[7px]

                    border
                    border-[#DFC8AA]

                    bg-white

                    px-[16px]

                    text-[16px]
                    text-[#777]

                    outline-none

                    focus:border-[#A8792C]
                  "
                >
                  <option>
                    Select or type focus area
                  </option>

                  <option>
                    Humanitarian Support
                  </option>

                  <option>
                    Community Welfare
                  </option>

                  <option>
                    Employee Volunteering
                  </option>
                </select>
              </label>
            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <label
              className="
                mt-[15px]
                block
              "
            >
              <span
                className="
                  mb-[5px]
                  block

                  text-[16px]
                  font-semibold

                  text-[#222]
                "
              >
                Message / Partnership Requirement{" "}
                <span className="text-red-600">
                  *
                </span>
              </span>

              <textarea
                required
                placeholder="Tell us about your CSR goals and partnership requirements..."
                className="
                  h-[88px]
                  w-full

                  resize-none

                  rounded-[7px]

                  border
                  border-[#DFC8AA]

                  p-[16px]

                  text-[16px]

                  outline-none

                  placeholder:text-[#868686]

                  focus:border-[#A8792C]
                "
              />
            </label>

            {/* =================================================
                CONSENT
            ================================================= */}

            <label
              className="
                mt-[12px]

                flex
                items-start
                gap-[12px]

                text-[16px]
                leading-[1.45]

                text-[#333]
              "
            >
              <input
                type="checkbox"
                className="
                  mt-[2px]
                  h-[20px]
                  w-[20px]
                  shrink-0

                  rounded

                  border-[#BB9870]
                "
              />

              <span>
                I consent to being contacted regarding this
                enquiry and acknowledge the{" "}

                <strong className="text-[#0A4C3A]">
                  Privacy Policy.
                </strong>
              </span>
            </label>

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <div
              className="
                mt-[15px]
                flex
                justify-center
              "
            >
              <button
                type="submit"
                className="
                  group

                  inline-flex
                  h-[48px]
                  w-full
                  max-w-[290px]

                  items-center
                  justify-between

                  rounded-[7px]

                  bg-[#004B39]

                  px-[24px]

                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[0.06em]

                  text-white

                  shadow-[0_5px_12px_rgba(0,69,49,0.12)]

                  transition

                  hover:bg-[#003D30]
                "
              >
                Submit CSR Enquiry

                <CSRIcon
                  name="ArrowRight"
                  className="
                    h-[25px]
                    w-[25px]

                    transition-transform

                    group-hover:translate-x-[3px]
                  "
                />
              </button>
            </div>

            <p
              className="
                mt-[9px]
                text-center

                text-[16px]

                text-[#555]
              "
            >
              For CSR, institutional and corporate partnership
              enquiries.
            </p>
          </form>
        </div>

        {/* =====================================================
            THANK YOU STRIP
        ====================================================== */}

        <div
          className="
            mt-[20px]

            flex
            flex-col
            items-start
            gap-[12px]

            rounded-[14px]

            border
            border-[#B6C8B8]

            bg-[#F6F8EF]

            px-[24px]
            py-[9px]

            lg:px-[40px]
            sm:flex-row
            sm:items-center
          "
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-4">
              <h3
                className="
                  font-serif
                  text-[26px]
                  font-semibold

                  text-[#064536]
                "
                style={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                }}
              >
                Thank you!
              </h3>

              <span
                className="
                  block
                  h-px
                  w-[70px]
                  bg-[#C9912F]
                "
              />
            </div>
            <p className="mt-1 text-[17px] font-medium leading-[1.35] text-[#3D4443]">
              Your CSR partnership enquiry has been received. Our team will review the information and respond through the contact details provided.
            </p>
          </div>

          <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-[#E7F1D9] text-[#084D3B] sm:ml-auto">
            <CSRIcon name="HeartHands" className="h-[40px] w-[40px]" />
          </span>
        </div>
      </div>
    </section>
  );
}
