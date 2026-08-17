"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleAlert,
  CircleDollarSign,
  ClipboardList,
  Clock3,
  FileCheck2,
  FileText,
  Gift,
  HeartHandshake,
  Info,
  Landmark,
  Mail,
  Package,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  TriangleAlert,
  UsersRound,
  WalletCards,
  XCircle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navigationItems = [
  { number: 1, label: "Overview" },
  { number: 2, label: "Donations" },
  { number: 3, label: "Payment Failure or Deduction Without Successful Donation" },
  { number: 4, label: "Duplicate Transactions" },
  { number: 5, label: "Event / Campaign Registrations" },
  { number: 6, label: "Merchandise / Products" },
  { number: 7, label: "Volunteer or Other Services" },
  { number: 9, label: "How to Request a Refund" },
  { number: 10, label: "Refund Process & Timeline" },
  { number: 11, label: "Mode of Refund" },
  { number: 12, label: "Chargebacks" },
  { number: 13, label: "Partial Refunds" },
  { number: 14, label: "Changes to This Policy" },
  { number: 15, label: "Grievance / Contact" },
];

const mainSections = [
  {
    number: 1,
    title: "Overview",
    icon: HeartHandshake,
    content:
      "This Refund Policy applies to all donations, payments, registrations and transactions made on the Moksha Sewa website or through authorised channels.",
  },
  {
    number: 2,
    title: "Donations",
    icon: Gift,
    content:
      "Donations made towards our cause are voluntary and non-refundable. We utilize these funds towards verified humanitarian activities and operational expenses to support our mission.",
  },
  {
    number: 3,
    title: "Payment Failure or Deduction Without Successful Donation",
    icon: WalletCards,
    content:
      "If an amount is deducted from your account but the donation is not recorded by us due to a technical error or gateway failure, the full amount will be refunded to your original payment method within 7–10 working days.",
  },
  {
    number: 4,
    title: "Duplicate Transactions",
    icon: ReceiptText,
    content:
      "In case of duplicate transactions / multiple deductions for the same donation or payment, you are eligible for a full refund of the duplicate amount.",
  },
  {
    number: 5,
    title: "Event / Campaign Registrations",
    icon: CalendarDays,
    content:
      "Registration fees for events, campaigns or programmes are generally non-refundable. However, if an event is cancelled or postponed by us, we will issue a full refund to registered participants.",
  },
  {
    number: 6,
    title: "Merchandise / Products",
    icon: Package,
    content:
      "Refunds are not applicable on purchases of merchandise, books, or other items unless the product is damaged, defective or significantly different from the description provided.",
  },
  {
    number: 7,
    title: "Volunteer or Other Services",
    icon: UsersRound,
    content:
      "No refund is applicable for volunteer registrations, membership, or other non-monetary services.",
  },
];

const bottomCards = [
  {
    number: 9,
    title: "How to Request a Refund",
    icon: FileCheck2,
    content: (
      <>
        <p>To request a refund, contact us within 7 days of the transaction with your:</p>
        <ul className="mt-1.5 space-y-0.5">
          <li>• Full name</li>
          <li>• Transaction ID / Receipt</li>
          <li>• Reason for refund</li>
          <li>• Supporting details (if any)</li>
        </ul>
      </>
    ),
  },
  {
    number: 10,
    title: "Refund Process & Timeline",
    icon: Clock3,
    content: (
      <p>
        Once your request is reviewed and approved, refunds will be processed
        within <strong>7–10 working days</strong> to the original payment
        method.
      </p>
    ),
  },
  {
    number: 11,
    title: "Mode of Refund",
    icon: CircleDollarSign,
    content: (
      <p>
        Refunds will be made using the same method through which the original
        payment was made.
      </p>
    ),
  },
];

const finalCards = [
  {
    number: 12,
    title: "Chargebacks",
    icon: ShieldCheck,
    content:
      "Initiating a chargeback without contacting us first may affect your ability to make future donations and will incur additional charges, which will be deducted from the refundable amount (if any).",
  },
  {
    number: 13,
    title: "Partial Refunds",
    icon: FileText,
    content:
      "In certain situations, a partial refund may be considered at our sole discretion depending on the nature of the request and the services or benefits provided.",
  },
  {
    number: 14,
    title: "Changes to This Policy",
    icon: RefreshCcw,
    content:
      "We may update this Refund Policy from time to time. The updated version will be posted on our website.",
  },
  {
    number: 15,
    title: "Grievance / Contact",
    icon: Mail,
    content:
      "For any refund-related queries or grievances, please contact us.",
  },
];

function SectionIcon({
  icon: Icon,
}: {
  icon: React.ElementType;
}) {
  return (
    <div className="refund-section-icon flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white shadow-[0_3px_10px_rgba(139,106,62,0.12)]">
      <Icon size={24} strokeWidth={1.5} />
    </div>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <h2 className="font-serif text-[26px] font-bold leading-tight text-[#2C1810]">
      {number}. {title}
    </h2>
  );
}

export default function RefundPolicy() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const introTimeline = gsap.timeline();

      introTimeline
        .from(".refund-sidebar", {
          x: -24,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
        })
        .from(
          ".refund-main",
          {
            x: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(
          ".refund-intro",
          {
            y: -12,
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.35",
        );

      gsap.utils.toArray<HTMLElement>(".refund-section-icon").forEach(
        (icon) => {
          gsap.to(icon, {
            y: -2,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      );

      gsap.utils.toArray<HTMLElement>(".refund-nav-button").forEach(
        (button) => {
          button.addEventListener("mouseenter", () => {
            gsap.to(button, {
              x: 2,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          button.addEventListener("mouseleave", () => {
            gsap.to(button, {
              x: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        },
      );
    }, pageRef);

    return () => context.revert();
  }, []);

  const scrollToSection = (number: number) => {
    let anchor = number;

    if (number >= 9 && number <= 11) {
      anchor = 9;
    } else if (number >= 12) {
      anchor = 12;
    }

    const target = document.getElementById(`refund-section-${anchor}`);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#FBF8F2] text-[#2C1810]"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-2 pt-12 sm:px-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-0">
        {/* =====================================================
            SIDEBAR
        ====================================================== */}
        <aside className="refund-sidebar self-start lg:sticky lg:top-[100px]">
          <div className="overflow-hidden rounded-[7px] border border-[#e9e4d5] bg-[#fffef9] shadow-[0_2px_10px_rgba(29,65,53,0.04)]">
            <div className="flex h-[40px] items-center justify-center bg-[#8B6A3E]">
              <h2 className="text-[13px] font-bold tracking-wide text-white">
                ON THIS PAGE
              </h2>
            </div>

            <nav aria-label="Refund Policy sections">
              <ol className="list-none py-1">
                {navigationItems.map((item, index) => (
                  <li key={item.number}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.number)}
                      className={`refund-nav-button flex w-full items-start gap-2 px-3 py-1.5 text-left text-[13px] leading-[1.4] transition-colors ${
                        index === 0
                          ? "bg-[#f5edda] font-semibold text-[#2C1810]"
                          : "text-[#5A4030] hover:bg-[#f8f4e9]"
                      }`}
                    >
                      <span className="w-[16px] shrink-0 font-medium">
                        {item.number}.
                      </span>

                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* NOTE CARD */}
          <div className="mt-4 overflow-hidden rounded-[7px] border border-[#e8e1d1] bg-[#fffef9] px-4 pt-4 pb-0 shadow-[0_2px_10px_rgba(29,65,53,0.035)]">
            <div className="flex items-center gap-2.5">
              <TriangleAlert
                size={16}
                strokeWidth={2}
                className="text-[#D95A06]"
              />

              <h3 className="font-serif text-[16px] font-bold text-[#2C1810]">
                Note
              </h3>
            </div>

            <div className="mt-3 space-y-2 text-[13px] leading-6 text-[#5B4635]">
              <p>
                Refunds are processed only in eligible cases as per this
                policy.
              </p>

              <p>
                We request you to read this policy carefully before making any
                donation or payment.
              </p>
            </div>

            <div className="flex justify-end">
              <Image
                src="/assets/privacy-policy/our_commitment.webp"
                alt="Our Commitment"
                width={240}
                height={160}
                className="h-auto w-1/2 object-cover"
              />
            </div>
          </div>
        </aside>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <article className="refund-main min-w-0">
          {/* INTRO NOTICE */}
          <section
            className="refund-intro mb-4 flex items-center gap-3 rounded-[7px] border border-[#E2AE73] bg-[#FFF8EE] px-4 py-3"
            aria-label="Refund policy introduction"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8EE]">
              <ShieldCheck
                size={22}
                strokeWidth={1.6}
                className="text-[#8B6A3E]"
              />
            </div>

            <p className="text-[14px] font-medium leading-6 text-[#2C1810]">
              Moksha Sewa (an initiative of Namo Gange Trust) is a non-profit
              organisation. Donations made to support our humanitarian
              activities are voluntary and non-refundable except as provided
              in this Refund Policy.
            </p>
          </section>

          {/* SECTIONS 1 - 8 */}
          <div className="space-y-0">
            {mainSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.number}
                  id={`refund-section-${section.number}`}
                  className="refund-main-section scroll-mt-4"
                >
                  <div className="grid grid-cols-[64px_minmax(0,1fr)]">
                    <div className="flex justify-start pt-1">
                      <SectionIcon icon={Icon} />
                    </div>

                    <div
                      className={`border-b border-[#eadbc3] py-4 ${
                        section.number === 1 ? "pt-2" : ""
                      }`}
                    >
                      <SectionHeading
                        number={section.number}
                        title={section.title}
                      />

                      <p className="mt-1.5 max-w-[650px] text-[16px] leading-7 text-[#594236]">
                        {section.content}
                      </p>

                      {/* Section 8 special bullets */}
                      {section.number === 8 && (
                        <div className="mt-2 grid grid-cols-2 gap-x-7 text-[14px] leading-6 text-[#5B4635]">
                          <div className="space-y-1">
                            <p>• Change of mind after successful donation</p>
                            <p>
                              • Completed transactions without any technical
                              issue
                            </p>
                          </div>

                          <div className="space-y-1">
                            <p>• Incorrect details entered by the donor</p>
                            <p>• Donations made offline or in cash</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* =====================================================
              9 - 11 CARDS
          ====================================================== */}
          <section
            id="refund-section-9"
            className="mt-6 grid grid-cols-1 gap-3 scroll-mt-4 md:grid-cols-3"
          >
            {bottomCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.number}
                  className="refund-bottom-card min-h-[130px] rounded-[7px] border border-[#e7e2d5] bg-[#fffef9] px-4 py-3.5 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_7px_18px_rgba(139,106,62,0.08)]"
                >
                  <div className="flex items-start gap-2.5">
                    <Icon
                      size={24}
                      strokeWidth={1.45}
                      className="mt-[1px] shrink-0 text-[#8B6A3E]"
                    />

                    <h2 className="text-[14px] font-bold leading-[1.35] text-[#2C1810]">
                      {card.number}. {card.title}
                    </h2>
                  </div>

                  <div className="mt-2 pl-[31px] text-[13px] leading-5 text-[#5B4635]">
                    {card.content}
                  </div>
                </article>
              );
            })}
          </section>

          {/* =====================================================
              12 - 15 CARDS
          ====================================================== */}
          <section
            id="refund-section-12"
            className="refund-final-grid mt-6 grid grid-cols-1 gap-3 scroll-mt-4 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr]"
          >
            {finalCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.number}
                  className="refund-final-card min-h-[130px] rounded-[7px] border border-[#e7e2d5] bg-[#fffef9] px-4 py-3.5 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_7px_18px_rgba(139,106,62,0.08)]"
                >
                  <div className="flex items-start gap-2.5">
                    <Icon
                      size={23}
                      strokeWidth={1.4}
                      className="mt-[1px] shrink-0 text-[#8B6A3E]"
                    />

                    <h2 className="text-[13px] font-bold leading-[1.35] text-[#2C1810]">
                      {card.number}. {card.title}
                    </h2>
                  </div>

                  <p className="mt-2 pl-[31px] text-[12px] leading-5 text-[#5B4635]">
                    {card.content}
                  </p>
                </article>
              );
            })}
          </section>
        </article>
      </div>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}
      <section className="refund-contact w-full border-t border-[#e7e2d5] bg-white/65 px-4 py-3 sm:px-5 lg:px-0">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]">
              <HeartHandshake
                size={22}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>

            <div>
              <h2 className="font-serif text-[16px] font-bold text-[#2C1810]">
                Have Questions About a Refund?
              </h2>

              <p className="mt-1 text-[13px] leading-6 text-[#5B4635]">
                We are here to help you with any refund-related queries or
                concerns.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="group flex shrink-0 items-center gap-3 rounded-[5px] bg-[#8B6A3E] px-6 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#73532F] hover:shadow-[0_7px_18px_rgba(139,106,62,0.35)]"
          >
            Contact Us

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </section>
    </main>
  );
}
