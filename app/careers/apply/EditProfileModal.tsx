"use client";

import { useState } from "react";
import { X, Check, User, Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { CandidateProfileData } from "../submit-resume/page";

export function EditProfileModal({
  isOpen,
  candidate,
  onClose,
  onSave,
}: {
  isOpen: boolean;
  candidate: CandidateProfileData;
  onClose: () => void;
  onSave: (updated: Partial<CandidateProfileData>) => void;
}) {
  const [name, setName] = useState(candidate.candidateName || candidate.firstName || "Ram");
  const [email, setEmail] = useState(candidate.email || "");
  const [phone, setPhone] = useState(candidate.phone || "");
  const [location, setLocation] = useState(candidate.location || "Delhi NCR");

  if (!isOpen) return null;

  const handleSave = () => {
    const trimmedName = name.trim();
    const updated: Partial<CandidateProfileData> = {
      candidateName: trimmedName,
      firstName: trimmedName.split(" ")[0] || "Ram",
      email: email.trim(),
      phone: phone.trim(),
      location: location.trim(),
    };
    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-[480px] rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#ebdcc4] pb-3">
          <div className="flex items-center gap-2">
            <span className="grid h-[32px] w-[32px] place-items-center rounded-lg bg-[#0d5c46]/10 text-[#0d5c46]">
              <User className="h-4 w-4" />
            </span>
            <h3 className="font-serif text-[18px] font-bold text-[#0c3d30]">Edit Profile Details</h3>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-full text-gray-500 hover:bg-gray-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <label className="text-[12px] font-semibold text-[#0c3d30]">Full Name</label>
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-2">
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
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-2">
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
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-2">
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
            <div className="mt-1 flex items-center gap-2 rounded-xl border border-[#ebdcc4] bg-white px-3 py-2">
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
        </div>

        <div className="mt-5 flex items-center justify-end gap-2 border-t border-[#ebdcc4] pt-3">
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
