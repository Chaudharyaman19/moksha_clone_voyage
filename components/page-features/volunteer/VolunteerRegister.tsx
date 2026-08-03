"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { FaHandsHelping, FaCheckCircle } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import { volunteerApi } from "@/lib/volunteerApi";
import { ApiRequestError } from "@/lib/api";

const inputClass =
  "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";
const labelClass = "mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";

const SUGGESTED_SKILLS = ["Driving", "First Aid", "Documentation Help", "Ritual Assistance", "Translation"];

function VolunteerRegister() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", city: "" });
  const [skills, setSkills] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggleSkill = (skill: string) => {
    setSkills((prev) => (prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const result = await volunteerApi.register({ ...form, skills });
      dispatch(
        setCredentials({
          user: { ...result.user, userType: "VOLUNTEER" },
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
        })
      );
      router.push("/volunteer/dashboard");
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#F4EDE3] pb-6 pt-28 lg:pt-32">
          <div className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6 xl:px-0">
            <div className="mb-3 inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                <FaHandsHelping className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                Become a Volunteer
              </span>
            </div>
            <h1 className="font-serif leading-[1.05]">
              <span className="block text-[32px] text-[#2C1810] sm:text-[42px] lg:text-[48px]">
                Give Your Time,
              </span>
              <span className="mt-1 block text-[38px] italic text-[#8B6A3E] sm:text-[48px] lg:text-[54px]">
                Give Them Dignity
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
              Register as a Moksha Sewa volunteer and help families in your city arrange a
              dignified cremation, free of cost.
            </p>
          </div>
        </section>

        <section className="pb-10 pt-6 lg:pb-14">
          <div className="mx-auto w-full max-w-xl px-4 sm:px-6 xl:px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>Full Name *</label>
                    <input name="name" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      pattern="[6-9][0-9]{9}"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>Password *</label>
                    <input
                      name="password"
                      type="password"
                      required
                      minLength={8}
                      value={form.password}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="At least 8 characters"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>City *</label>
                    <input name="city" required value={form.city} onChange={handleChange} className={inputClass} placeholder="Your city" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Skills (optional)</label>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_SKILLS.map((skill) => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => toggleSkill(skill)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
                          skills.includes(skill)
                            ? "border-[#8B6A3E] bg-[#8B6A3E] text-white"
                            : "border-[#E4D5BE] bg-[#FBF8F3] text-[#5F4630] hover:border-[#C9A574]"
                        }`}
                      >
                        {skills.includes(skill) && <FaCheckCircle className="h-3 w-3" />}
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Registering...
                    </>
                  ) : (
                    <>
                      <FaHandsHelping />
                      Register as a Volunteer
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="mt-4 flex items-start gap-2.5 rounded-2xl border border-[#E6D6BF] bg-[#F6EFE6] px-4 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                <PiFlowerLotus className="h-4 w-4" />
              </span>
              <p className="text-[11px] leading-[1.4] text-[#5F4A3D]">
                Our team reviews every volunteer before assigning a case. You'll get access to
                your volunteer dashboard immediately after registering.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default VolunteerRegister;
