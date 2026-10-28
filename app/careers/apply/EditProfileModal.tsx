"use client";

import { useEffect, useState } from "react";
import { X, Check, User, Mail, Phone, MapPin, Camera, Link2 } from "lucide-react";
import { CandidateProfileData } from "../submit-resume/page";
import { CandidatePhoto, useChangePhoto, type ApplyCandidate } from "./candidateView";

export function EditProfileModal({
  isOpen,
  candidate,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  candidate: CandidateProfileData;
  onClose: () => void;
  onSave: (updated: Partial<ApplyCandidate>) => void;
}) {
  const [name, setName] = useState(candidate.candidateName || "");
  const [email, setEmail] = useState(candidate.email || "");
  const [phone, setPhone] = useState(candidate.phone || "");
  const [location, setLocation] = useState((candidate as ApplyCandidate).location || "");
  const [gender, setGender] = useState((candidate as ApplyCandidate).gender || "");
  const [linkedin, setLinkedin] = useState(candidate.linkedin || "");
  const [photo, setPhoto] = useState(candidate.image || "");
  const [formError, setFormError] = useState("");

  const photoChange = useChangePhoto(candidate as ApplyCandidate, (next) => {
    setPhoto(next.image || "");
    // The photo is already stored for this candidate; the page updates its own copy now.
    onSave({ image: next.image });
  });

  // The page mounts this before the candidate has loaded, so refill the fields each time it opens.
  useEffect(() => {
    if (!isOpen) return;
    setName(candidate.candidateName || "");
    setEmail(candidate.email || "");
    setPhone(candidate.phone || "");
    setLocation((candidate as ApplyCandidate).location || "");
    setGender((candidate as ApplyCandidate).gender || "");
    setLinkedin(candidate.linkedin || "");
    setPhoto(candidate.image || "");
    setFormError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const phoneDigits = phone.replace(/\D/g, "");

    if (!trimmedName) return setFormError("Please enter your full name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return setFormError("Please enter a valid email address.");
    if (phoneDigits.length < 10) return setFormError("Please enter a valid phone number.");

    const updated: Partial<ApplyCandidate> = {
      candidateName: trimmedName,
      firstName: trimmedName.split(" ")[0] || "",
      email: trimmedEmail,
      phone: phone.trim(),
      location: location.trim(),
      gender: gender.trim(),
      linkedin: linkedin.trim(),
    };
    setFormError("");
    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-[460px] max-h-[86vh] overflow-y-auto rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-4 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-lg bg-[#0d5c46]/10 text-[#0d5c46]">
              <User className="h-4 w-4" />
            </span>
            <h3 className="font-sans text-[17px] font-bold text-[#0c3d30]">Edit Profile Details</h3>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-gray-500 hover:bg-gray-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-3">
            <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-xl border border-[#ebdcc4] bg-[#f4ebe1]">
              <CandidatePhoto src={photo} gender={gender} name={name} className="object-cover object-top" />
            </div>
            <div>
              <button
                type="button"
                onClick={photoChange.open}
                disabled={photoChange.busy}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#ebdcc4] bg-[#fcf8ee] px-3 py-1.5 text-[12.5px] font-semibold text-[#0c3d30] hover:bg-gray-100 disabled:opacity-60 cursor-pointer"
              >
                <Camera className="h-3.5 w-3.5" /> {photoChange.busy ? "Uploading..." : photo ? "Change Photo" : "Add Photo"}
              </button>
              {photoChange.error && <p className="mt-1 text-[11px] text-[#b23b2e] leading-tight">{photoChange.error}</p>}
              {photoChange.input}
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#0c3d30]">Full Name</label>
            <div className="mt-0.5 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-1.5">
              <User className="h-4 w-4 text-[#0d5c46]" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-[13.5px] text-[#0c3d30] outline-none"
                placeholder="Candidate Full Name"
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#0c3d30]">Email Address</label>
            <div className="mt-0.5 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-1.5">
              <Mail className="h-4 w-4 text-[#0d5c46]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-[13.5px] text-[#0c3d30] outline-none"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#0c3d30]">Phone Number</label>
            <div className="mt-0.5 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-1.5">
              <Phone className="h-4 w-4 text-[#0d5c46]" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent text-[13.5px] text-[#0c3d30] outline-none"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#0c3d30]">Location</label>
            <div className="mt-0.5 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-1.5">
              <MapPin className="h-4 w-4 text-[#d97706]" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-[13.5px] text-[#0c3d30] outline-none"
                placeholder="Location"
              />
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#0c3d30]">Gender (Select for Avatar)</label>
            <div className="mt-1 flex items-center gap-2">
              {[
                { label: "Male (Boy Avatar)", value: "male" },
                { label: "Female (Girl Avatar)", value: "female" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setGender(opt.value)}
                  className={`flex-1 rounded-xl border py-1.5 px-3 text-[12px] font-semibold transition cursor-pointer ${
                    gender.toLowerCase() === opt.value
                      ? "border-[#0d5c46] bg-[#0d5c46] text-white"
                      : "border-[#ebdcc4] bg-white text-[#0c3d30] hover:bg-[#fcf8ee]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[12px] font-semibold text-[#0c3d30]">LinkedIn</label>
            <div className="mt-0.5 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-1.5">
              <Link2 className="h-4 w-4 text-[#0d5c46]" />
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                className="w-full bg-transparent text-[13.5px] text-[#0c3d30] outline-none"
                placeholder="linkedin.com/in/your-name"
              />
            </div>
          </div>

          {formError && <p className="text-[12px] font-medium text-[#b23b2e]">{formError}</p>}
        </div>

        <div className="mt-4 flex items-center justify-end gap-2 border-t border-[#ebdcc4] pt-3">
          <button
            onClick={onClose}
            className="rounded-xl border border-[#ebdcc4] bg-[#fcf8ee] px-4 py-1.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#0b4d3b] px-4 py-1.5 text-[13px] font-semibold text-white shadow-xs hover:bg-[#073629]"
          >
            <Check className="h-3.5 w-3.5" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
