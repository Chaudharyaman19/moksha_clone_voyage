"use client";
import React from "react";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  Compass,
  Target,
  Globe,
  Award,
  Heart,
  Quote,
  Eye,
  Feather,
  Star,
  Shield,
  Clock,
  Lock,
  HandHeart,
  Phone,
  Calendar,
  CheckCircle,
  TrendingUp,
  Users,
  Globe2,
  Video,
  HeartHandshake,
  Ambulance,
  ShieldCheck,
  Gem,
  MessageSquareQuote,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-white">
      <Topbar />
      <Navbar variant="seva" />

      {/* Hero Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B6A3E] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5A3E2B] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/10 rounded-full border border-[#8B6A3E]/20 mb-2">
            <Feather className="w-3.5 h-3.5 text-[#8B6A3E]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
              Compassionate Antim Sanskar Care
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#2C1810] mb-2 tracking-tight">
            About
            <span className="block text-2xl md:text-3xl lg:text-4xl font-semibold text-[#8B6A3E] mt-3">
              Moksha Sewa
            </span>
          </h1>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Quote className="absolute -top-3 -left-8 w-5 h-5 text-[#8B6A3E]/20" />
              <p className="text-sm md:text-sm text-[#5A3E2B]/90 italic leading-relaxed font-light px-5">
                &quot;Moksha Sewa supports families with dignified funeral,
                cremation and ritual arrangements, so the final journey is
                handled with calm, respect and complete transparency.&quot;
              </p>
              <Quote className="absolute -bottom-4 -right-8 w-5 h-5 text-[#8B6A3E]/20 rotate-180" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="py-4 px-6 bg-[#8B6A3E]/5 border-y border-[#8B6A3E]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              icon: Clock,
              value: "24/7",
              label: "Sewa Support",
              desc: "365 days a year",
            },
            {
              icon: Globe,
              value: "15+",
              label: "Cities Covered",
              desc: "Verified local support",
            },
            {
              icon: Users,
              value: "500+",
              label: "Verified Pandits",
              desc: "Across India",
            },
            {
              icon: Shield,
              value: "100%",
              label: "Transparency",
              desc: "No hidden charges",
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#8B6A3E]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2C1810]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8B6A3E] font-medium">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-[#5A3E2B]/60">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-3 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/im1.jpeg"
                alt="Moksha Sewa support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl">
                  <p className="text-[#2C1810] text-sm italic">
                    &quot;One reliable team for ambulance, hearse van, samagri,
                    pandit ji, prayer hall, cremation coordination and family
                    support.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/10 rounded-full border border-[#8B6A3E]/20 mb-2">
              <Heart className="w-4 h-4 text-[#8B6A3E]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1810] mb-2 leading-tight">
              Built for Families
              <span className="block text-[#8B6A3E] mt-2">in Difficult Moments</span>
            </h2>

            <div className="space-y-2 text-[#5A3E2B]/80 leading-relaxed">
              <p className="text-sm">
                Moksha Sewa was created to remove confusion from the most
                sensitive family responsibility. When a loved one passes, every
                minute matters and every ritual deserves dignity.
              </p>
              <p className="text-sm">
                Our team coordinates practical needs and sacred customs with one
                calm point of contact, clear packages and verified local
                providers, so families can focus on prayer and farewell.
              </p>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3">
              {[
                { icon: Calendar, value: "24/7", label: "Available" },
                { icon: TrendingUp, value: "500+", label: "Families Helped" },
                { icon: Users, value: "50+", label: "Pandits" },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="text-center p-3 bg-[#FAF7F2] rounded-lg border border-[#8B6A3E]/10"
                  >
                    <Icon className="w-5 h-5 text-[#8B6A3E] mx-auto mb-2" />
                    <div className="text-sm font-semibold text-[#2C1810]">
                      {stat.value}
                    </div>
                    <div className="text-[10px] text-[#5A3E2B]/70">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - 3 Cards Layout */}
      <section className="py-8 px-6 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/10 rounded-full border border-[#8B6A3E]/20 mb-2">
              <Target className="w-4 h-4 text-[#8B6A3E]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
                Our Purpose
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1810] mb-2">
              Vision, Mission & Promise
            </h2>
            <p className="text-sm text-[#5A3E2B]/70 max-w-2xl mx-auto">
              Guided by dignity, tradition and transparent arrangements for
              every family we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {/* Vision Card */}
            <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#8B6A3E]/10 group">
              <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Eye className="w-5 h-5 text-[#8B6A3E]" />
              </div>
              <h3 className="text-sm font-semibold text-[#2C1810] mb-2">
                Our Vision
              </h3>
              <p className="text-sm text-[#5A3E2B]/80 leading-relaxed">
                A world where every family can complete the final rites with
                dignity, purity and peace, without panic, confusion or unfair
                charges.
              </p>
              <div className="mt-4 pt-3 border-t border-[#8B6A3E]/10">
                <div className="flex items-center gap-2 text-[#8B6A3E]">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs">
                    Dignity · Ritual Respect
                  </span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#8B6A3E]/10 group">
              <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <Target className="w-5 h-5 text-[#8B6A3E]" />
              </div>
              <h3 className="text-sm font-semibold text-[#2C1810] mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-[#5A3E2B]/80 leading-relaxed">
                To arrange ambulance, hearse van, funeral samagri, pandit ji,
                cremation support, prayer hall and post-ritual guidance through
                one trusted Sewa team.
              </p>
              <div className="mt-4 pt-3 border-t border-[#8B6A3E]/10">
                <div className="flex items-center gap-2 text-[#8B6A3E]">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs">
                    Verified Network · 24/7 Support
                  </span>
                </div>
              </div>
            </div>

            {/* Promise Card - Special Highlight */}
            <div className="bg-gradient-to-br from-[#8B6A3E] to-[#5A3E2B] rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-white" />
                </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                  Our Promise
                </h3>
                <p className="text-white/90 text-sm leading-relaxed italic">
                  &quot;Every family receives dignified arrangements, clear pricing,
                  verified support and ritual care at the moment they need it
                  most.&quot;
                </p>
                <div className="mt-4 pt-3 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white">
                    <HeartHandshake className="w-4 h-4" />
                    <span className="text-xs">Human Promise · Sacred Duty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE HELP SECTION - 4 Cards Layout */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/10 rounded-full border border-[#8B6A3E]/20 mb-2">
            <HeartHandshake className="w-4 h-4 text-[#8B6A3E]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1810] mb-2">
            How We Help
          </h2>
          <p className="text-sm text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Complete funeral and antim sanskar support through every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              icon: Ambulance,
              title: "Ambulance & Hearse",
              desc: "Respectful body transport with ambulance, hearse van and route coordination.",
              features: ["Ambulance", "Hearse Van", "24/7 Support"],
              color: "from-[#8B6A3E] to-[#A88B5E]",
            },
            {
              icon: Globe2,
              title: "Funeral Samagri",
              desc: "Complete antim sanskar items arranged with purity, quality and timely delivery.",
              features: ["Samagri Kit", "Quality Items", "Fast Delivery"],
              color: "from-[#5C4033] to-[#7A5B46]",
            },
            {
              icon: Heart,
              title: "Pandit Service",
              desc: "Verified pandit ji for last rites, shraddh, havan and family traditions.",
              features: ["Vedic Guidance", "Ritual Planning", "Customs"],
              color: "from-[#4A716C] to-[#5E8B83]",
            },
            {
              icon: Video,
              title: "Prayer Hall Support",
              desc: "Prayer hall, decoration and relatives coordination handled with care.",
              features: ["Prayer Hall", "Decoration", "Family Support"],
              color: "from-[#6B7D6E] to-[#8A9B8C]",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DBC5] overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#8B6A3E]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#2C1810] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A3E2B]/70 leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="px-2 py-1 bg-[#8B6A3E]/5 text-[10px] text-[#8B6A3E] rounded-full border border-[#8B6A3E]/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FIVE CORE OBJECTIVES */}
      <section className="py-8 px-6 max-w-7xl mx-auto bg-[#FAF7F2]">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/10 rounded-full border border-[#8B6A3E]/20 mb-2">
            <Compass className="w-4 h-4 text-[#8B6A3E]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
              Our Core
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1810] mb-2">
            Five Sewa Principles
          </h2>
          <p className="text-sm text-[#5A3E2B]/70 max-w-2xl mx-auto">
            The values that guide every arrangement, every call and every
            family interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
          {[
            {
              icon: Compass,
              title: "ARRANGE",
              desc: "Bring urgent funeral needs into clear, manageable steps through one trusted point of contact.",
              color: "from-[#8B6A3E] to-[#A88B5E]",
              features: [
                "Single Contact",
                "Clear Steps",
                "Fast Action",
              ],
            },
            {
              icon: Globe,
              title: "GUIDE",
              desc: "Guide families through rituals, timing, samagri and customs with verified pandit support.",
              color: "from-[#5C4033] to-[#7A5B46]",
              features: [
                "Ritual Guidance",
                "Verified Pandits",
                "Family Traditions",
              ],
            },
            {
              icon: Shield,
              title: "PROTECT",
              desc: "Keep pricing and service details clear before arrangements begin, with no hidden charges.",
              color: "from-[#4A716C] to-[#5E8B83]",
              features: [
                "Transparent Pricing",
                "Clear Packages",
                "Zero Hidden Charges",
              ],
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DBC5] overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#8B6A3E]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#2C1810] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A3E2B]/70 leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="px-2 py-1 bg-[#8B6A3E]/5 text-[10px] text-[#8B6A3E] rounded-full border border-[#8B6A3E]/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {[
            {
              icon: Star,
              title: "HONOUR",
              desc: "Honour every final journey with dignity, clean arrangements and respect for family customs.",
              color: "from-[#6B7D6E] to-[#8A9B8C]",
              features: ["Dignified Farewell", "Ritual Respect", "Clean Setup"],
            },
            {
              icon: HandHeart,
              title: "SERVE",
              desc: "Stay present with families through urgent coordination, relatives support and post-ritual needs.",
              color: "from-[#8B6A3E] to-[#A88B5E]",
              features: [
                "Family Support",
                "24/7 Sewa",
                "Post-Ritual Help",
              ],
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DBC5] overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-[#8B6A3E]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#2C1810] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5A3E2B]/70 leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, fidx) => (
                      <span
                        key={fidx}
                        className="px-2 py-1 bg-[#8B6A3E]/5 text-[10px] text-[#8B6A3E] rounded-full border border-[#8B6A3E]/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/10 rounded-full border border-[#8B6A3E]/20 mb-2">
            <MessageSquareQuote className="w-4 h-4 text-[#8B6A3E]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
              Real Stories
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1810] mb-2">
            What Families Say
          </h2>
          <p className="text-sm text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Families who trusted Moksha Sewa during difficult moments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DBC5] group overflow-hidden">
            <div className="relative w-full h-36 overflow-hidden">
              <Image
                src="/assets/four.jpg"
                alt="Moksha Sewa family support"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-white ml-1">5.0</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] px-3 py-1.5 bg-[#8B6A3E] text-white rounded-full">
                  Verified
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <p className="text-sm font-semibold text-[#2C1810]">
                  Sharma Family
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Delhi NCR · Complete Funeral Support
                </p>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-1 w-4 h-4 text-[#8B6A3E]/30" />
                <p className="text-sm text-[#5A3E2B]/80 italic leading-relaxed pl-4">
                  &quot;Moksha Sewa arranged the pandit ji, samagri, vehicle and
                  prayer hall with dignity. Their team stayed calm when our
                  family needed it most.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DBC5] group overflow-hidden">
            <div className="relative w-full h-36 overflow-hidden">
              <Image
                src="/assets/im3.jpeg"
                alt="Funeral arrangements"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-white ml-1">5.0</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] px-3 py-1.5 bg-[#8B6A3E] text-white rounded-full">
                  Verified
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <p className="text-sm font-semibold text-[#2C1810]">
                  Desai Family
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Mumbai · Antim Sanskar Sewa
                </p>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-1 w-4 h-4 text-[#8B6A3E]/30" />
                <p className="text-sm text-[#5A3E2B]/80 italic leading-relaxed pl-4">
                  &quot;The pricing was clear before anything started. The samagri
                  was complete, the pandit ji was respectful and the entire
                  process felt organized.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#E8DBC5] group overflow-hidden">
            <div className="relative w-full h-36 overflow-hidden">
              <Image
                src="/assets/im4.jpeg"
                alt="Prayer support"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute top-3 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-white ml-1">5.0</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] px-3 py-1.5 bg-[#8B6A3E] text-white rounded-full">
                  Verified
                </span>
              </div>
            </div>

            <div className="p-3">
              <div className="mb-3">
                <p className="text-sm font-semibold text-[#2C1810]">
                  Arjun Nair
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Bengaluru · Prayer Hall Support
                </p>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-1 w-4 h-4 text-[#8B6A3E]/30" />
                <p className="text-sm text-[#5A3E2B]/80 italic leading-relaxed pl-4">
                  &quot;They helped with the prayer hall, decoration and relatives
                  coordination. In the most difficult moment, they became our
                  calm support.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Reviews Row */}
        <div className="grid md:grid-cols-2 gap-3 mt-3">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-[#E8DBC5] hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-[#8B6A3E] font-medium">
                March 2024
              </span>
            </div>
            <p className="text-sm text-[#5A3E2B]/90 italic leading-relaxed mb-2">
              &quot;The ambulance and hearse van coordination was quick and
              respectful. Every update was shared clearly with our family.&quot;
            </p>
            <p className="text-sm font-medium text-[#2C1810]">
              — Meera Krishnan, Delhi
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-[#E8DBC5] hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-[#8B6A3E] font-medium">
                February 2024
              </span>
            </div>
            <p className="text-sm text-[#5A3E2B]/90 italic leading-relaxed mb-2">
              &quot;Moksha Sewa helped us complete rituals for an elderly resident
              with dignity, care and no confusion.&quot;
            </p>
            <p className="text-sm font-medium text-[#2C1810]">
              — Anjali Srivastava, Varanasi
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B6A3E] text-white rounded-lg text-sm font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Reviews
            <ThumbsUp className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#8B6A3E]/60 mt-4">
            Trusted by 500+ families across India
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-4 px-6 bg-white border-y border-[#8B6A3E]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-7">
          {[
            { icon: ShieldCheck, text: "Verified Pandits" },
            { icon: Lock, text: "Clear Packages" },
            { icon: Clock, text: "24/7 Sewa Support" },
            { icon: Heart, text: "Dignified Ritual Care" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 justify-center">
                <Icon className="w-5 h-5 text-[#8B6A3E]" />
                <span className="text-sm font-medium text-[#5A3E2B]">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sewa Network */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/10 rounded-full border border-[#8B6A3E]/20 mb-2">
            <Award className="w-4 h-4 text-[#8B6A3E]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
              Sewa Network
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1810] mb-2">
            Trusted Support Network
          </h2>
          <p className="text-sm text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Verified people, reliable arrangements and respectful coordination
            for every family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {/* Press Mentions */}
          <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#8B6A3E]/10 group">
            <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5 text-[#8B6A3E]" />
            </div>
            <h3 className="text-sm font-semibold text-[#2C1810] mb-2">
              Verified Team
            </h3>
            <div className="space-y-2">
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Trained Coordinators
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  One calm point of contact
                </p>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Verified Pandits
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Ritual guidance with family customs
                </p>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">Local Partners</p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Ambulance, hearse van and prayer hall support
                </p>
              </div>
            </div>
          </div>

          {/* Key Partnerships */}
          <div className="bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#8B6A3E]/10 group">
            <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Gem className="w-5 h-5 text-[#8B6A3E]" />
            </div>
            <h3 className="text-sm font-semibold text-[#2C1810] mb-2">
              Service Coverage
            </h3>
            <div className="space-y-2">
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Funeral Samagri
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Complete kits and urgent delivery
                </p>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Cremation Coordination
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Ground timing and process support
                </p>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Family Assistance
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  Relatives coordination and post-ritual help
                </p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-gradient-to-br from-[#8B6A3E]/5 to-[#5A3E2B]/5 rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#8B6A3E]/10 group">
            <div className="w-10 h-10 bg-[#8B6A3E]/10 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Star className="w-5 h-5 text-[#8B6A3E]" />
            </div>
            <h3 className="text-sm font-semibold text-[#2C1810] mb-2">
              Sewa Standards
            </h3>
            <div className="space-y-2">
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Transparent Pricing
                </p>
                <p className="text-xs text-[#5A3E2B]/60">
                  No hidden charges
                </p>
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Respectful Handling
                </p>
                <p className="text-xs text-[#5A3E2B]/60">Dignity at every step</p>
              </div>
              <div className="p-3 bg-white/80 backdrop-blur-sm rounded-lg border border-[#8B6A3E]/10">
                <p className="text-sm font-medium text-[#2C1810]">
                  Traditional Ritual Care
                </p>
                <p className="text-xs text-[#5A3E2B]/60">Pandit ji and samagri support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moksha Sewa Section */}
      <section className="py-4 px-6 bg-gradient-to-r from-[#8B6A3E]/10 to-[#5A3E2B]/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/20 rounded-full border border-[#8B6A3E]/30 mb-2">
            <HandHeart className="w-4 h-4 text-[#8B6A3E]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E] font-medium">
              Social Impact
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2C1810] mb-2">
            Moksha Sewa Promise
          </h2>
          <p className="text-sm text-[#5A3E2B]/80 mb-3 max-w-2xl mx-auto">
            Moksha Sewa stands for dignity, transparency and timely help. From
            the first call to post-ritual guidance, our team handles every
            arrangement with the care we would want for our own family.
          </p>
          <button className="px-5 py-3 bg-[#8B6A3E] text-white rounded-lg text-sm font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Call Moksha Sewa
          </button>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] to-[#8B6A3E]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.png')] bg-repeat"></div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-3">
            <Phone className="w-4 h-4 text-white" />
            <span className="text-xs tracking-wider text-white font-medium">
              24/7 Immediate Support
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
            Need Funeral Support Now?
            <span className="block text-[#F5E9D9] mt-2">
              Moksha Sewa Is Available 24/7
            </span>
          </h2>

          <p className="text-white/80 text-sm mb-2 max-w-3xl mx-auto">
            One trusted team for ambulance, hearse van, samagri, pandit ji,
            cremation coordination and prayer hall arrangements.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-5 py-3 bg-white text-[#2C1810] rounded-lg text-sm font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Call Moksha Sewa
            </button>
            <button className="px-5 py-3 bg-transparent border-2 border-white text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-300">
              Plan Ritual Arrangements
            </button>
            <button className="px-5 py-3 bg-[#F5E9D9] text-[#2C1810] rounded-lg text-sm font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              WhatsApp Chat
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Verified Pandits</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5" />
              <span className="text-sm">24/7 Sewa Coordinators</span>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="seva" />
    </div>
  );
}

export default About;
