// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { lookupPincode } from "@/lib/pincode";

// import Topbar from "@/components/layout/topbar/Topbar";
// import Navbar from "@/components/layout/navbar/Navbar";
// import Footer from "@/components/layout/Footer/FooterNew";

// import {
//   FaCalendarAlt,
//   FaCheckCircle,
//   FaEnvelope,
//   FaHandsHelping,
//   FaHeart,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaRegClock,
//   FaShieldAlt,
//   FaStar,
//   FaUser,
//   FaUsers,
// } from "react-icons/fa";

// import { PiFlowerLotus } from "react-icons/pi";

// import { useAppDispatch } from "@/store/hooks";
// import { setCredentials } from "@/store/slices/authSlice";
// import {
//   volunteerApi,
//   VolunteerGender,
//   VolunteerBloodGroup,
//   VolunteerSchedulePreference,
//   VolunteerPreferredRole,
// } from "@/lib/volunteerApi";
// import { ApiRequestError } from "@/lib/api";

// interface VolunteerForm {
//   name: string;
//   phone: string;
//   email: string;
//   password: string;

//   dateOfBirth: string;
//   gender: string;
//   bloodGroup: string;

//   address: string;
//   city: string;
//   state: string;
//   pincode: string;

//   motivation: string;
//   experience: string;
//   availability: string;
//   preferredRole: string;
//   whatsappPhone: string;
//   occupation: string;
//   organisation: string;
//   languagesKnown: string;
//   hoursPerWeek: string;
//   emergencyOnCall: string;
//   canParticipateFieldCases: string;
//   ownVehicle: string;
//   volunteeredBefore: string;
//   previousOrganisationRole: string;
//   emergencyContactName: string;
//   emergencyContactRelationship: string;
//   emergencyContactPhone: string;
//   idProofType: string;
//   idProofNumber: string;
// }

// interface TrustItem {
//   title: string;
//   description: string;
//   icon: React.ComponentType<{
//     className?: string;
//   }>;
// }

// const EMPTY_FORM: VolunteerForm = {
//   name: "",
//   phone: "",
//   email: "",
//   password: "",

//   dateOfBirth: "",
//   gender: "",
//   bloodGroup: "",

//   address: "",
//   city: "",
//   state: "",
//   pincode: "",

//   motivation: "",
//   experience: "",
//   availability: "",
//   preferredRole: "",
//   whatsappPhone: "", occupation: "", organisation: "", languagesKnown: "", hoursPerWeek: "",
//   emergencyOnCall: "", canParticipateFieldCases: "", ownVehicle: "", volunteeredBefore: "",
//   previousOrganisationRole: "", emergencyContactName: "", emergencyContactRelationship: "",
//   emergencyContactPhone: "", idProofType: "", idProofNumber: "",
// };

// const SUGGESTED_SKILLS = [
//   "Driving",
//   "First Aid",
//   "Documentation Help",
//   "Ritual Assistance",
//   "Translation",
// ];
// const SERVICE_AREAS = ["Field Volunteer", "Hospital & Authority Coordination", "Cremation & Ritual Assistance", "Unclaimed Body Support", "Economically Weaker Family Support", "24×7 Helpline Support", "Ambulance / Logistics Support", "Documentation & Case Support", "Community Awareness", "Social Media / Digital Volunteering", "Photography / Videography / Content", "Fundraising & Donor Outreach", "Professional / Pro-Bono Support", "Events & Campaign Support"];

// const trustItems: TrustItem[] = [
//   {
//     title: "Make a Real Impact",
//     description:
//       "Your time and compassion can bring comfort to families in their most difficult moments.",
//     icon: FaUsers,
//   },
//   {
//     title: "Serve with Dignity",
//     description:
//       "Be a part of a respectful and meaningful Sewa for the departed and their loved ones.",
//     icon: FaHeart,
//   },
//   {
//     title: "Growth & Learning",
//     description:
//       "Develop leadership, empathy and life skills while serving humanity.",
//     icon: FaShieldAlt,
//   },
//   {
//     title: "Join a Dedicated Team",
//     description:
//       "Work alongside like-minded people committed to the same mission.",
//     icon: FaHandsHelping,
//   },
//  {
//   title: "Be Part of a Purpose",
//   description:
//     "Join a compassionate community working together to support families when they need it most.",
//   icon: FaHandsHelping,
// },
// ];

// const inputClass =
//   "h-[36px] w-full rounded-[6px] border border-[#E6D8C9] bg-white px-3 text-[13px] font-normal text-[#35241B] outline-none transition placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10";

// const iconInputClass =
//   "h-[36px] w-full rounded-[6px] border border-[#E6D8C9] bg-white pl-9 pr-3 text-[13px] font-normal text-[#35241B] outline-none transition placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10";

// const labelClass =
//   "mb-0.5 block text-[12px] font-medium leading-none text-[#3B2A20]";

// function LotusOrnament({
//   className = "h-8 w-11",
// }: {
//   className?: string;
// }) {
//   return (
//     <svg
//       viewBox="0 0 72 50"
//       className={className}
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z"
//         stroke="#ED6B13"
//         strokeWidth="1.8"
//       />

//       <path
//         d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
//         stroke="#ED6B13"
//         strokeWidth="1.8"
//       />

//       <path
//         d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
//         stroke="#ED6B13"
//         strokeWidth="1.8"
//       />

//       <path
//         d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
//         stroke="#ED6B13"
//         strokeWidth="1.8"
//       />

//       <path
//         d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
//         stroke="#ED6B13"
//         strokeWidth="1.8"
//       />

//       <path
//         d="M8 31c9 8 18 12 28 12s19-4 28-12"
//         stroke="#ED6B13"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//       />
//     </svg>
//   );
// }

// function SectionTitle({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="mb-1.5 flex items-center gap-2">
//       <span className="h-px w-4 bg-[#ED6B13]" />

//       <h3 className="font-serif text-[14px] font-normal text-[#3C251B]">
//         {children}
//       </h3>
//     </div>
//   );
// }

// export default function VolunteerRegister() {
//   const router = useRouter();
//   const dispatch = useAppDispatch();

//   const [form, setForm] =
//     useState<VolunteerForm>(EMPTY_FORM);

//   const [skills, setSkills] =
//     useState<string[]>([]);
//   const [volunteerAreas, setVolunteerAreas] = useState<string[]>([]);
//   const [availabilityDays, setAvailabilityDays] = useState<string[]>([]);
//   const [preferredTimes, setPreferredTimes] = useState<string[]>([]);
//   const [photograph, setPhotograph] = useState<File | null>(null);
//   const [idProof, setIdProof] = useState<File | null>(null);

//   const [consent, setConsent] =
//     useState(false);

//   const [isSubmitting, setIsSubmitting] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const [pincodeStatus, setPincodeStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

//   // Pincode-first lookup: once 6 digits are typed, auto-fill state/city so the volunteer doesn't
//   // have to type them by hand. Both stay editable afterward in case the lookup gets it wrong.
//   useEffect(() => {
//     if (!/^\d{6}$/.test(form.pincode)) {
//       setPincodeStatus("idle");
//       return;
//     }
//     let cancelled = false;
//     setPincodeStatus("loading");
//     lookupPincode(form.pincode).then((result) => {
//       if (cancelled) return;
//       if (result) {
//         setForm((current) => ({ ...current, city: result.city, state: result.state }));
//         setPincodeStatus("done");
//       } else {
//         setPincodeStatus("error");
//       }
//     });
//     return () => {
//       cancelled = true;
//     };
//   }, [form.pincode]);

//   const toggleSkill = (skill: string) => {
//     setSkills((current) =>
//       current.includes(skill)
//         ? current.filter(
//           (item) => item !== skill,
//         )
//         : [...current, skill],
//     );
//   };
//   const toggleList = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => setter((items) => items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);

//   const handleChange = (
//     event: React.ChangeEvent<
//       | HTMLInputElement
//       | HTMLTextAreaElement
//       | HTMLSelectElement
//     >,
//   ) => {
//     const { name, value } = event.target;

//     setForm((current) => ({
//       ...current,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (
//     event: React.FormEvent<HTMLFormElement>,
//   ) => {
//     event.preventDefault();
//     setError("");

//     if (!consent) {
//       setError(
//         "Please accept the volunteer guidelines and code of conduct.",
//       );
//       return;
//     }
//     if (!photograph || !idProof) {
//       setError("Please attach both your photograph and ID proof.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const result =
//         await volunteerApi.register({
//           name: form.name,
//           phone: form.phone,
//           email: form.email,
//           password: form.password,
//           city: form.city,
//           skills,
//           dateOfBirth: form.dateOfBirth || undefined,
//           gender: (form.gender || undefined) as VolunteerGender | undefined,
//           bloodGroup: (form.bloodGroup || undefined) as VolunteerBloodGroup | undefined,
//           address: form.address || undefined,
//           state: form.state || undefined,
//           pincode: form.pincode || undefined,
//           motivation: form.motivation || undefined,
//           experience: form.experience || undefined,
//           schedulePreference: (form.availability || undefined) as VolunteerSchedulePreference | undefined,
//           preferredRole: (form.preferredRole || undefined) as VolunteerPreferredRole | undefined,
//           whatsappPhone: form.whatsappPhone || undefined,
//           occupation: form.occupation || undefined,
//           organisation: form.organisation || undefined,
//           volunteerAreas,
//           availabilityDays,
//           preferredTimes,
//           emergencyOnCall: form.emergencyOnCall === "Yes",
//           canParticipateFieldCases: form.canParticipateFieldCases === "Yes",
//           ownVehicle: form.ownVehicle === "Yes",
//           languagesKnown: form.languagesKnown || undefined,
//           hoursPerWeek: form.hoursPerWeek || undefined,
//           volunteeredBefore: form.volunteeredBefore === "Yes",
//           previousOrganisationRole: form.previousOrganisationRole || undefined,
//           emergencyContact: { name: form.emergencyContactName, relationship: form.emergencyContactRelationship, phone: form.emergencyContactPhone || undefined },
//           idProofType: form.idProofType || undefined,
//           idProofNumber: form.idProofNumber || undefined,
//           declarationAccepted: true,
//           photograph,
//           idProof,
//         });

//       dispatch(
//         setCredentials({
//           user: {
//             ...result.user,
//             userType: "VOLUNTEER",
//           },
//           accessToken:
//             result.accessToken,
//           refreshToken:
//             result.refreshToken,
//         }),
//       );

//       router.push(
//         "/volunteer/dashboard",
//       );
//     } catch (caughtError) {
//       setError(
//         caughtError instanceof
//           ApiRequestError
//           ? caughtError.message
//           : "Something went wrong. Please try again.",
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen overflow-x-hidden bg-[#FCF8F1] text-[#302017]">
//       <Topbar />
//       <Navbar />

//       <main className="relative overflow-hidden px-3 pb-6 pt-5 sm:px-5 lg:px-7 lg:pb-8 lg:pt-6">
//         {/* Side decorations */}
//         <div className="pointer-events-none absolute -left-14 top-[38%] hidden opacity-[0.08] lg:block">
//           <LotusOrnament className="h-64 w-64" />
//         </div>

//         <div className="pointer-events-none absolute -right-14 top-[42%] hidden opacity-[0.08] lg:block">
//           <LotusOrnament className="h-64 w-64" />
//         </div>

//         <div className="relative mx-auto w-full max-w-7xl">
//           {/* Heading */}
//           <header className="mb-3 text-center">
//             <div className="flex items-center justify-center gap-4">
//               <span className="hidden h-px w-28 bg-gradient-to-r from-transparent to-[#ED6B13] sm:block" />

//               <LotusOrnament className="h-9 w-12" />

//               <span className="hidden h-px w-28 bg-gradient-to-l from-transparent to-[#ED6B13] sm:block" />
//             </div>

//             <h1 className="mt-1 font-serif text-[31px] font-normal leading-none tracking-[-0.025em] text-[#351B12] sm:text-[41px] lg:text-[48px]">
//               Volunteer Registration
//             </h1>

//             <div className="mt-2 flex items-center justify-center gap-2">
//               <span className="h-px w-14 bg-[#E39453]" />

//               <span className="h-2 w-2 rotate-45 border border-[#ED6B13]" />

//               <span className="h-px w-14 bg-[#E39453]" />
//             </div>

//             <p className="mx-auto mt-2 max-w-[650px] text-[14px] leading-5 text-[#665246] sm:text-[15px]">
//               Join our mission of serving
//               families with care, respect and
//               compassion.
//             </p>
//           </header>

//           <div className="flex flex-col gap-3">
//             {/* Registration form */}
//             <section className="relative overflow-hidden rounded-[15px] border border-[#E7D9C9] bg-white/95 px-4 py-2.5 shadow-[0_14px_38px_rgba(93,55,30,0.08)] sm:px-5">
//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-1.5"
//               >

//                 <div>
//                   <div className="mb-1.5 flex items-center gap-2">
//                     <LotusOrnament className="h-6 w-8" />
//                     <h2 className="font-serif text-[18px] font-normal text-[#382117]">
//                       Personal Information
//                     </h2>
//                   </div>

//                   <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-5">
//                     <div>
//                       <label className={labelClass}>Full Name *</label>
//                       <div className="relative">
//                         <FaUser className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
//                         <input name="name" value={form.name} onChange={handleChange} required className={iconInputClass} placeholder="Enter your full name" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Mobile Number *</label>
//                       <div className="relative">
//                         <FaPhoneAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
//                         <input name="phone" type="tel" required pattern="[6-9][0-9]{9}" value={form.phone} onChange={handleChange} className={iconInputClass} placeholder="Enter mobile number" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Email Address *</label>
//                       <div className="relative">
//                         <FaEnvelope className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
//                         <input name="email" type="email" required value={form.email} onChange={handleChange} className={iconInputClass} placeholder="Enter email address" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Date of Birth *</label>
//                       <div className="relative">
//                         <FaCalendarAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
//                         <input name="dateOfBirth" type="date" required value={form.dateOfBirth} onChange={handleChange} className={`${iconInputClass} pr-2`} />
//                       </div>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Gender *</label>
//                       <select name="gender" value={form.gender} onChange={handleChange} required className={`${inputClass} appearance-none`}>
//                         <option value="">Select your gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Blood Group</label>
//                       <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className={`${inputClass} appearance-none`}>
//                         <option value="">Select blood group</option>
//                         <option value="A+">A+</option>
//                         <option value="A-">A-</option>
//                         <option value="B+">B+</option>
//                         <option value="B-">B-</option>
//                         <option value="AB+">AB+</option>
//                         <option value="AB-">AB-</option>
//                         <option value="O+">O+</option>
//                         <option value="O-">O-</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-dashed border-[#EDB886] pt-1.5">
//                   <SectionTitle>Address Information</SectionTitle>

//                   <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-5">
//                     <div>
//                       <label className={labelClass}>Pincode *</label>
//                       <input name="pincode" value={form.pincode} onChange={handleChange} required inputMode="numeric" pattern="[0-9]{6}" title="Enter a valid 6-digit pincode" className={inputClass} placeholder="6-digit pincode" />
//                     </div>

//                     <div>
//                       <label className={labelClass}>State *</label>
//                       <input name="state" value={form.state} onChange={handleChange} required className={inputClass} placeholder="Auto-filled from pincode" />
//                     </div>

//                     <div>
//                       <label className={labelClass}>City *</label>
//                       <input name="city" value={form.city} onChange={handleChange} required className={inputClass} placeholder="Auto-filled from pincode" />
//                     </div>

//                     <div>
//                       <label className={labelClass}>Address *</label>
//                       <div className="relative">
//                         <FaMapMarkerAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
//                         <input name="address" value={form.address} onChange={handleChange} required className={iconInputClass} placeholder="House/flat, street, landmark" />
//                       </div>
//                     </div>
//                   </div>

//                   {pincodeStatus === "loading" && (
//                     <p className="mt-1 text-[12px] text-[#9E9186]">Looking up state and city…</p>
//                   )}
//                   {pincodeStatus === "done" && (
//                     <p className="mt-1 text-[12px] text-emerald-600">Found: {form.city}, {form.state}</p>
//                   )}
//                   {pincodeStatus === "error" && (
//                     <p className="mt-1 text-[12px] text-[#C1502E]">Couldn&apos;t find this pincode — please enter state and city manually.</p>
//                   )}
//                 </div>

//                 <div className="border-t border-dashed border-[#EDB886] pt-1.5">
//                   <SectionTitle>About You</SectionTitle>

//                   <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-5">
//                     <div>
//                       <label className={labelClass}>Why do you want to volunteer with us? *</label>
//                       <div className="relative">
//                         <FaHeart className="pointer-events-none absolute left-3 top-2.5 h-3 w-3 text-[#A45331]" />
//                         <textarea name="motivation" value={form.motivation} onChange={handleChange} required rows={1} className="min-h-[36px] w-full resize-none rounded-[6px] border border-[#E6D8C9] bg-white py-1 pl-9 pr-3 text-[13px] text-[#35241B] outline-none placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10" placeholder="Share your motivation" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Skills / Experience</label>
//                       <div className="relative">
//                         <FaStar className="pointer-events-none absolute left-3 top-2.5 h-3 w-3 text-[#A45331]" />
//                         <textarea name="experience" value={form.experience} onChange={handleChange} rows={1} className="min-h-[36px] w-full resize-none rounded-[6px] border border-[#E6D8C9] bg-white py-1 pl-9 pr-3 text-[13px] text-[#35241B] outline-none placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10" placeholder="Your skills or experience" />
//                       </div>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Availability *</label>
//                       <div className="relative">
//                         <FaRegClock className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
//                         <select name="availability" value={form.availability} onChange={handleChange} required className={`${iconInputClass} appearance-none`}>
//                           <option value="">Select availability</option>
//                           <option value="Weekdays">Weekdays</option>
//                           <option value="Weekends">Weekends</option>
//                           <option value="Evenings">Evenings</option>
//                           <option value="Emergency Support">Emergency Support</option>
//                           <option value="Flexible">Flexible</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className={labelClass}>Preferred Role *</label>
//                       <select name="preferredRole" value={form.preferredRole} onChange={handleChange} required className={`${inputClass} appearance-none`}>
//                         <option value="">Select preferred role</option>
//                         <option value="Field Volunteer">Field Volunteer</option>
//                         <option value="Transport Support">Transport Support</option>
//                         <option value="Documentation">Documentation</option>
//                         <option value="Family Coordination">Family Coordination</option>
//                         <option value="Ritual Assistance">Ritual Assistance</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="border-t border-dashed border-[#EDB886] pt-1.5">
//                   <SectionTitle>Service &amp; Availability Details</SectionTitle>

//                   <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-5">
//                     {[['whatsappPhone','WhatsApp Number','tel'],['occupation','Occupation / Profession','text'],['organisation','Organisation / Institution','text'],['languagesKnown','Languages Known','text'],['hoursPerWeek','Approx. Hours / Week','text']].map(([name, text, type]) => (
//                       <label key={name}>
//                         <span className={labelClass}>{text}</span>
//                         <input name={name} type={type} value={form[name as keyof VolunteerForm]} onChange={handleChange} pattern={name === 'whatsappPhone' ? '[6-9][0-9]{9}' : undefined} className={inputClass}/>
//                       </label>
//                     ))}
//                   </div>

//                   <p className={`${labelClass} mt-1.5`}>Preferred Areas of Volunteering</p>
//                   <div className="grid gap-x-3 gap-y-1 sm:grid-cols-2 lg:grid-cols-5">
//                     {SERVICE_AREAS.map((area) => (
//                       <label key={area} className="flex items-start gap-2 text-[12px] leading-4 text-[#5E4B3F]">
//                         <input type="checkbox" checked={volunteerAreas.includes(area)} onChange={() => toggleList(setVolunteerAreas,area)} className="mt-0.5 accent-[#ED6B13]"/>
//                         {area}
//                       </label>
//                     ))}
//                   </div>

//                   <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-5">
//                     <div>
//                       <span className={labelClass}>Available Days</span>
//                       <div className="flex flex-wrap gap-2">
//                         {['Weekdays','Weekends','Flexible'].map(v => (
//                           <label key={v} className="text-[12px]"><input type="checkbox" checked={availabilityDays.includes(v)} onChange={() => toggleList(setAvailabilityDays,v)} className="mr-1 accent-[#ED6B13]"/>{v}</label>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <span className={labelClass}>Preferred Time</span>
//                       <div className="flex flex-wrap gap-2">
//                         {['Morning','Day','Evening','Night'].map(v => (
//                           <label key={v} className="text-[12px]"><input type="checkbox" checked={preferredTimes.includes(v)} onChange={() => toggleList(setPreferredTimes,v)} className="mr-1 accent-[#ED6B13]"/>{v}</label>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-5">
//                     {[['emergencyOnCall','Emergency / On-Call Seva?'],['canParticipateFieldCases','Can Participate in Field Cases?'],['ownVehicle','Own Vehicle Available?'],['volunteeredBefore','Volunteered with an NGO before?']].map(([name,text]) => (
//                       <label key={name}>
//                         <span className={labelClass}>{text}</span>
//                         <select name={name} value={form[name as keyof VolunteerForm]} onChange={handleChange} required className={inputClass}>
//                           <option value="">Select</option>
//                           <option>Yes</option>
//                           <option>No</option>
//                         </select>
//                       </label>
//                     ))}
//                   </div>

//                   <div className="mt-1.5">
//                     <label>
//                       <span className={labelClass}>Previous Organisation &amp; Role</span>
//                       <input name="previousOrganisationRole" value={form.previousOrganisationRole} onChange={handleChange} className={inputClass}/>
//                     </label>
//                   </div>
//                 </div>

//                 <div className="border-t border-dashed border-[#EDB886] pt-1.5">
//                   <SectionTitle>Emergency Contact &amp; Identity Verification</SectionTitle>

//                   <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-5">
//                     {[['emergencyContactName','Contact Person *','text'],['emergencyContactRelationship','Relationship *','text'],['emergencyContactPhone','Emergency Mobile No. *','tel']].map(([name,text,type]) => (
//                       <label key={name}>
//                         <span className={labelClass}>{text}</span>
//                         <input name={name} type={type} required value={form[name as keyof VolunteerForm]} onChange={handleChange} pattern={type==='tel'?'[6-9][0-9]{9}':undefined} className={inputClass}/>
//                       </label>
//                     ))}

//                     <label>
//                       <span className={labelClass}>ID Proof Type *</span>
//                       <select name="idProofType" required value={form.idProofType} onChange={handleChange} className={inputClass}>
//                         <option value="">Select</option>
//                         {['Aadhaar','Voter ID','Driving Licence','Passport','Other'].map(v => <option key={v}>{v}</option>)}
//                       </select>
//                     </label>

//                     <label>
//                       <span className={labelClass}>ID Proof Number *</span>
//                       <input name="idProofNumber" required value={form.idProofNumber} onChange={handleChange} className={inputClass}/>
//                     </label>

//                     <label>
//                       <span className={labelClass}>Upload Photograph *</span>
//                       <input type="file" accept="image/jpeg,image/png,image/webp" required onChange={(e)=>setPhotograph(e.target.files?.[0] ?? null)} className={`${inputClass} h-auto py-1.5`}/>
//                       <span className="mt-0.5 block text-[10px] text-[#75655A]">JPG, PNG or WebP · max 10MB</span>
//                     </label>

//                     <label className="sm:col-span-2">
//                       <span className={labelClass}>Upload ID Proof *</span>
//                       <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" required onChange={(e)=>setIdProof(e.target.files?.[0] ?? null)} className={`${inputClass} h-auto py-1.5`}/>
//                       <span className="mt-0.5 block text-[10px] text-[#75655A]">JPG, PNG, WebP or PDF · max 10MB</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Password */}
//                 <div className="border-t border-dashed border-[#EDB886] pt-1.5">
//                   <div className="grid gap-1.5 sm:grid-cols-[0.75fr_1.25fr]">
//                     <div>
//                       <label
//                         className={labelClass}
//                       >
//                         Password *
//                       </label>

//                       <input
//                         name="password"
//                         type="password"
//                         required
//                         minLength={8}
//                         value={form.password}
//                         onChange={handleChange}
//                         className={inputClass}
//                         placeholder="At least 8 characters"
//                       />
//                     </div>

//                     <div>
//                       <label
//                         className={labelClass}
//                       >
//                         Skills
//                       </label>

//                       <div className="flex min-h-[36px] flex-wrap items-center gap-1">
//                         {SUGGESTED_SKILLS.map(
//                           (skill) => {
//                             const selected =
//                               skills.includes(
//                                 skill,
//                               );

//                             return (
//                               <button
//                                 key={skill}
//                                 type="button"
//                                 onClick={() =>
//                                   toggleSkill(
//                                     skill,
//                                   )
//                                 }
//                                 className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[13px] font-medium transition ${selected
//                                     ? "border-[#ED6B13] bg-[#ED6B13] text-white"
//                                     : "border-[#E6D8C9] bg-[#FCF8F2] text-[#674E3E] hover:border-[#E9A166]"
//                                   }`}
//                               >
//                                 {selected && (
//                                   <FaCheckCircle className="h-2.5 w-2.5" />
//                                 )}

//                                 {skill}
//                               </button>
//                             );
//                           },
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <label className="flex cursor-pointer items-start gap-2 border-t border-dashed border-[#EDB886] pt-2 text-[13px] leading-4 text-[#5E4B3F]">
//                   <input
//                     type="checkbox"
//                     checked={consent}
//                     onChange={(event) =>
//                       setConsent(
//                         event.target.checked,
//                       )
//                     }
//                     className="mt-0.5 h-3.5 w-3.5 rounded border-[#D6C3B2] text-[#ED6B13] focus:ring-[#ED6B13]/20"
//                   />

//                   I agree to abide by
//                   Moksha Sewa&apos;s volunteer
//                   guidelines and code of
//                   conduct.
//                   <span className="text-red-500">
//                     *
//                   </span>
//                 </label>

//                 {error && (
//                   <div className="rounded-[6px] border border-red-200 bg-red-50 px-3 py-2 text-[14px] text-red-700">
//                     {error}
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="group flex h-[39px] w-full items-center justify-center gap-2.5 rounded-[6px] bg-gradient-to-r from-[#FF6A13] to-[#EF4E0A] px-4 text-[14px] font-medium text-white shadow-[0_7px_18px_rgba(229,78,11,0.22)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
//                       Registering...
//                     </>
//                   ) : (
//                     <>
//                       <PiFlowerLotus className="h-5 w-5" />
//                       Register as Volunteer
//                       <span className="transition-transform group-hover:translate-x-1">
//                         →
//                       </span>
//                     </>
//                   )}
//                 </button>

//                 <p className="flex items-center justify-center gap-2 text-center text-[12px] text-[#75655A]">
//                   <FaShieldAlt className="text-[#726D67]" />
//                   Your information is safe and
//                   secure with us.
//                 </p>
//               </form>
//             </section>

//             {/* Right panel */}
//             <aside className="overflow-hidden rounded-[15px] border border-[#EDD9BF] bg-[#FFF8EC] p-3 shadow-[0_14px_36px_rgba(106,65,29,0.09)]">
//               <h2 className="text-center font-serif text-[17px] font-normal text-[#40271B]">
//                 Why Volunteer With Us?
//               </h2>

//               <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#EA7C28] to-transparent" />

//               <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
//                 {trustItems.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.title}
//                       className="flex gap-2.5 rounded-[10px] border border-[#EBDCC9] bg-white/65 p-3"
//                     >
//                       <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#EBD5BA] bg-white text-[#ED6B13] shadow-[0_4px_12px_rgba(89,57,31,0.07)]">
//                         <Icon className="h-4.5 w-4.5" />
//                       </span>

//                       <div>
//                         <h3 className="font-serif text-[14px] leading-tight text-[#3E261B]">
//                           {item.title}
//                         </h3>

//                         <p className="mt-1 text-[14px] leading-[1.45] text-[#715C4E]">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>



//             </aside>
//           </div>

//           {/* Bottom message */}

//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { lookupPincode } from "@/lib/pincode";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";

import {
  FaCalendarAlt,
  FaCheckCircle,
  FaEnvelope,
  FaHandsHelping,
  FaHeart,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaUser,
  FaUsers,
} from "react-icons/fa";

import { PiFlowerLotus } from "react-icons/pi";

import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import {
  volunteerApi,
  VolunteerGender,
  VolunteerBloodGroup,
  VolunteerSchedulePreference,
  VolunteerPreferredRole,
} from "@/lib/volunteerApi";
import { ApiRequestError } from "@/lib/api";

interface VolunteerForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;

  dateOfBirth: string;
  gender: string;
  bloodGroup: string;

  address: string;
  city: string;
  state: string;
  pincode: string;

  motivation: string;
  experience: string;
  availability: string;
  preferredRole: string;
  whatsappPhone: string;
  occupation: string;
  organisation: string;
  languagesKnown: string;
  hoursPerWeek: string;
  emergencyOnCall: string;
  canParticipateFieldCases: string;
  ownVehicle: string;
  volunteeredBefore: string;
  previousOrganisationRole: string;
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactPhone: string;
  idProofType: string;
  idProofNumber: string;
}

interface TrustItem {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

const EMPTY_FORM: VolunteerForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",

  dateOfBirth: "",
  gender: "",
  bloodGroup: "",

  address: "",
  city: "",
  state: "",
  pincode: "",

  motivation: "",
  experience: "",
  availability: "",
  preferredRole: "",
  whatsappPhone: "", occupation: "", organisation: "", languagesKnown: "", hoursPerWeek: "",
  emergencyOnCall: "", canParticipateFieldCases: "", ownVehicle: "", volunteeredBefore: "",
  previousOrganisationRole: "", emergencyContactName: "", emergencyContactRelationship: "",
  emergencyContactPhone: "", idProofType: "", idProofNumber: "",
};

const SUGGESTED_SKILLS = [
  "Driving",
  "First Aid",
  "Documentation Help",
  "Ritual Assistance",
  "Translation",
];
const SERVICE_AREAS = ["Field Volunteer", "Hospital & Authority Coordination", "Cremation & Ritual Assistance", "Unclaimed Body Support", "Economically Weaker Family Support", "24×7 Helpline Support", "Ambulance / Logistics Support", "Documentation & Case Support", "Community Awareness", "Social Media / Digital Volunteering", "Photography / Videography / Content", "Fundraising & Donor Outreach", "Professional / Pro-Bono Support", "Events & Campaign Support"];

const trustItems: TrustItem[] = [
  {
    title: "Make a Real Impact",
    description:
      "Your time and compassion will bring lasting comfort to families during their most difficult moments.",
    icon: FaUsers,
  },
  {
    title: "Serve with Dignity",
    description:
      "Serve with compassion, bringing dignity to the departed and meaningful comfort to grieving families.",
    icon: FaHeart,
  },
  {
    title: "Growth & Learning",
    description:
      "Develop leadership, empathy and real life skills while serving humanity with compassion and purpose.",
    icon: FaShieldAlt,
  },
  {
    title: "Join a Dedicated Team",
    description:
      "Work with kind, aligned people who support families through compassion, dignity and shared purpose.",
    icon: FaHandsHelping,
  },
  {
    title: "Be Part of a Purpose",
    description:
      "Join a compassionate community working together to support families whenever they need aid the most.",
    icon: FaHandsHelping,
  },
];

const inputClass =
  "h-[36px] w-full rounded-[6px] border border-[#E6D8C9] bg-white px-3 text-[16px] font-normal text-[#35241B] outline-none transition placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10";

const iconInputClass =
  "h-[36px] w-full rounded-[6px] border border-[#E6D8C9] bg-white pl-9 pr-3 text-[16px] font-normal text-[#35241B] outline-none transition placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10";

const labelClass =
  "mb-0.5 block text-[16px] font-medium leading-none text-[#3B2A20]";

function LotusOrnament({
  className = "h-8 w-11",
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
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke="#ED6B13"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-1.5 flex items-center gap-2">
      <span className="h-px w-4 bg-[#ED6B13]" />

      <h3 className="font-serif text-[16px] font-normal text-[#3C251B]">
        {children}
      </h3>
    </div>
  );
}

export default function VolunteerRegister() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [form, setForm] =
    useState<VolunteerForm>(EMPTY_FORM);

  const [skills, setSkills] =
    useState<string[]>([]);
  const [volunteerAreas, setVolunteerAreas] = useState<string[]>([]);
  const [availabilityDays, setAvailabilityDays] = useState<string[]>([]);
  const [preferredTimes, setPreferredTimes] = useState<string[]>([]);
  const [photograph, setPhotograph] = useState<File | null>(null);
  const [idProof, setIdProof] = useState<File | null>(null);

  const [consent, setConsent] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const [heroSlide, setHeroSlide] = useState(0);

  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % 2);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  // Pincode-first lookup: once 6 digits are typed, auto-fill state/city so the volunteer doesn't
  // have to type them by hand. Both stay editable afterward in case the lookup gets it wrong.
  useEffect(() => {
    if (!/^\d{6}$/.test(form.pincode)) {
      setPincodeStatus("idle");
      return;
    }
    let cancelled = false;
    setPincodeStatus("loading");
    lookupPincode(form.pincode).then((result) => {
      if (cancelled) return;
      if (result) {
        setForm((current) => ({ ...current, city: result.city, state: result.state }));
        setPincodeStatus("done");
      } else {
        setPincodeStatus("error");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [form.pincode]);

  const toggleSkill = (skill: string) => {
    setSkills((current) =>
      current.includes(skill)
        ? current.filter(
          (item) => item !== skill,
        )
        : [...current, skill],
    );
  };
  const toggleList = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => setter((items) => items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);

  const handleChange = (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >,
  ) => {
    const { name } = event.target;
    let { value } = event.target;

    if (["phone", "whatsappPhone", "emergencyContactPhone"].includes(name)) {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "pincode") {
      value = value.replace(/\D/g, "").slice(0, 6);
    }

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError("");

    if (!consent) {
      setError(
        "Please accept the volunteer guidelines and code of conduct.",
      );
      return;
    }
    setIsSubmitting(true);

    try {
      const result =
        await volunteerApi.register({
          name: `${form.firstName} ${form.lastName}`.trim(),
          phone: form.phone,
          email: form.email,
          password: form.password,
          city: form.city,
          skills,
          dateOfBirth: form.dateOfBirth || undefined,
          gender: (form.gender || undefined) as VolunteerGender | undefined,
          bloodGroup: (form.bloodGroup || undefined) as VolunteerBloodGroup | undefined,
          address: form.address || undefined,
          state: form.state || undefined,
          pincode: form.pincode || undefined,
          motivation: form.motivation || undefined,
          experience: form.experience || undefined,
          schedulePreference: (form.availability || undefined) as VolunteerSchedulePreference | undefined,
          preferredRole: (form.preferredRole || undefined) as VolunteerPreferredRole | undefined,
          whatsappPhone: form.whatsappPhone || undefined,
          occupation: form.occupation || undefined,
          organisation: form.organisation || undefined,
          volunteerAreas,
          availabilityDays,
          preferredTimes,
          emergencyOnCall: form.emergencyOnCall === "Yes",
          canParticipateFieldCases: form.canParticipateFieldCases === "Yes",
          ownVehicle: form.ownVehicle === "Yes",
          languagesKnown: form.languagesKnown || undefined,
          hoursPerWeek: form.hoursPerWeek || undefined,
          volunteeredBefore: form.volunteeredBefore === "Yes",
          previousOrganisationRole: form.previousOrganisationRole || undefined,
          emergencyContact: { name: form.emergencyContactName, relationship: form.emergencyContactRelationship, phone: form.emergencyContactPhone || undefined },
          idProofType: form.idProofType || undefined,
          idProofNumber: form.idProofNumber || undefined,
          declarationAccepted: true,
          photograph: photograph || undefined,
          idProof: idProof || undefined,
        });

      dispatch(
        setCredentials({
          user: {
            ...result.user,
            userType: "VOLUNTEER",
          },
          accessToken:
            result.accessToken,
          refreshToken:
            result.refreshToken,
        }),
      );

      router.push(
        "/volunteer/dashboard",
      );
    } catch (caughtError) {
      setError(
        caughtError instanceof
          ApiRequestError
          ? caughtError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCF8F1] text-[#302017]">
      <Topbar />
      <Navbar />

      <main className="relative overflow-hidden px-3 pb-6 pt-0 sm:px-5 lg:px-7 lg:pb-8">
        {/* Side decorations */}
        <div className="pointer-events-none absolute -left-14 top-[38%] hidden opacity-[0.08] lg:block">
          <LotusOrnament className="h-64 w-64" />
        </div>

        <div className="pointer-events-none absolute -right-14 top-[42%] hidden opacity-[0.08] lg:block">
          <LotusOrnament className="h-64 w-64" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          {/* Volunteer hero */}
          <section className="relative left-1/2 mb-5 aspect-[16/7] min-h-[390px] w-screen -translate-x-1/2 overflow-hidden bg-[#F4EDE3] lg:min-h-[620px]">
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${heroSlide * 100}%)` }}
            >
              <div className="relative h-full w-full shrink-0">
                <Image
                  src="/hero-images/volunteer-impact-v2.png"
                  alt="Moksha Sewa volunteers serving families with care and compassion"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="relative h-full w-full shrink-0">
                <Image
                  src="/hero-images/volunteer-hero-second.png"
                  alt="Moksha Sewa volunteer carrying ritual materials at a sacred river ghat"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

            <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-5 lg:px-0">
              <div className="max-w-[540px] translate-y-4 sm:translate-y-5">
                <div className="mb-2 flex w-full max-w-[440px] flex-col items-start text-left">
                  <div className="w-[150px] self-center sm:w-[190px] lg:w-[220px]">
                    <Image
                      src="/hero-images/image6.png"
                      alt="Namo Gange"
                      width={420}
                      height={150}
                      priority
                      sizes="220px"
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  <div className="mt-1 flex flex-col items-start text-left">
                    <span className="text-[15px] font-bold leading-tight text-[#2C1810]">Moksha Sewa</span>
                    <span className="mt-0.5 text-[13px] font-medium leading-tight text-[#8F5A21]">
                      An Initiative of Namo Gange Trust
                    </span>
                  </div>
                </div>

                <h1 className="font-serif text-[32px] font-medium leading-[1.03] text-[#102B44] sm:text-[42px] lg:text-[52px]">
                  Be the Reason Someone Receives a
                  <span className="block text-[#DC671F]">Dignified Farewell.</span>
                </h1>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-[2px] w-14 bg-[#DC671F]" />
                  <span className="h-2 w-2 rotate-45 bg-[#DC671F]" />
                  <span className="h-px w-20 bg-gradient-to-r from-[#DC671F] to-transparent" />
                </div>

                <p className="mt-2 max-w-[510px] text-[16px] leading-6 text-[#17283A] sm:text-[17px]">
                  Your time can bring comfort, care and compassion to families when they need it most.
                </p>

                <div className="mt-3 flex flex-wrap gap-2.5">
                  <a
                    href="#volunteer-registration"
                    className="inline-flex h-[46px] items-center justify-center border border-[#C6520A] bg-[#D95A06] px-5 text-[16px] font-bold text-white shadow-[0_8px_18px_rgba(190,74,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#C94F03]"
                  >
                    Become a Volunteer
                  </a>
                  <a
                    href="/donation"
                    className="inline-flex h-[46px] items-center justify-center border border-[#C6520A] bg-[#D95A06] px-5 text-[16px] font-bold text-white shadow-[0_8px_18px_rgba(190,74,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#C94F03]"
                  >
                    Support This Mission
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Heading */}
          <header id="volunteer-registration" className="mb-3 scroll-mt-32 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden h-px w-28 bg-gradient-to-r from-transparent to-[#ED6B13] sm:block" />

              <LotusOrnament className="h-9 w-12" />

              <span className="hidden h-px w-28 bg-gradient-to-l from-transparent to-[#ED6B13] sm:block" />
            </div>

            <h1 className="mt-1 font-serif text-[31px] font-normal leading-none tracking-[-0.025em] text-[#351B12] sm:text-[41px] lg:text-[48px]">
              Volunteer Registration Form
            </h1>

            <p className="mx-auto mt-2 max-w-[650px] text-[16px] leading-5 text-[#665246]">
              Join our mission of serving
              families with care, respect and
              compassion.
            </p>

            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="h-px w-14 bg-[#E39453]" />

              <span className="h-2 w-2 rotate-45 border border-[#ED6B13]" />

              <span className="h-px w-14 bg-[#E39453]" />
            </div>
          </header>

          <div className="flex flex-col gap-3">
            {/* Registration form */}
            <section className="relative overflow-hidden rounded-[15px] border border-[#E7D9C9] bg-white/95 px-4 py-2.5 shadow-[0_14px_38px_rgba(93,55,30,0.08)] sm:px-5">
              <form
                onSubmit={handleSubmit}
                className="space-y-1.5"
              >

                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <LotusOrnament className="h-6 w-8" />
                    <h2 className="font-serif text-[18px] font-normal text-[#382117]">
                      Personal Information
                    </h2>
                  </div>

                  <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <div className="relative">
                        <FaUser className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                        <input name="firstName" value={form.firstName ?? ""} onChange={handleChange} required className={iconInputClass} placeholder="Enter first name" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <div className="relative">
                        <FaUser className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                        <input name="lastName" value={form.lastName ?? ""} onChange={handleChange} required className={iconInputClass} placeholder="Enter last name" />
                      </div>
                    </div>


                    <div>
                      <label className={labelClass}>Mobile Number *</label>
                      <div className="relative">
                        <FaPhoneAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                        <input name="phone" type="tel" required inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}" value={form.phone ?? ""} onChange={handleChange} className={iconInputClass} placeholder="Enter mobile number" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <div className="relative">
                        <FaEnvelope className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                        <input name="email" type="email" required value={form.email ?? ""} onChange={handleChange} className={iconInputClass} placeholder="Enter email address" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Date of Birth *</label>
                      <div className="relative">
                        <FaCalendarAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                        <input name="dateOfBirth" type="date" required value={form.dateOfBirth ?? ""} onChange={handleChange} className={`${iconInputClass} pr-2`} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Gender *</label>
                      <select name="gender" value={form.gender ?? ""} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                        <option value="">Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Blood Group</label>
                      <select name="bloodGroup" value={form.bloodGroup ?? ""} onChange={handleChange} className={`${inputClass} appearance-none`}>
                        <option value="">Select blood group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                  <SectionTitle>Address Information</SectionTitle>

                  <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <label className={labelClass}>Pincode *</label>
                      <input name="pincode" type="tel" value={form.pincode ?? ""} onChange={handleChange} required inputMode="numeric" maxLength={6} pattern="[0-9]{6}" title="Enter a valid 6-digit pincode" className={inputClass} placeholder="6-digit pincode" />
                    </div>

                    <div>
                      <label className={labelClass}>State *</label>
                      <input name="state" value={form.state ?? ""} onChange={handleChange} required className={inputClass} placeholder="Auto-filled from pincode" />
                    </div>

                    <div>
                      <label className={labelClass}>City *</label>
                      <input name="city" value={form.city ?? ""} onChange={handleChange} required className={inputClass} placeholder="Auto-filled from pincode" />
                    </div>

                    <div>
                      <label className={labelClass}>Address *</label>
                      <div className="relative">
                        <FaMapMarkerAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                        <input name="address" value={form.address ?? ""} onChange={handleChange} required className={iconInputClass} placeholder="House/flat, street, landmark" />
                      </div>
                    </div>
                  </div>

                  {pincodeStatus === "loading" && (
                    <p className="mt-1 text-[16px] text-[#9E9186]">Looking up state and city…</p>
                  )}
                  {pincodeStatus === "done" && (
                    <p className="mt-1 text-[16px] text-emerald-600">Found: {form.city}, {form.state}</p>
                  )}
                  {pincodeStatus === "error" && (
                    <p className="mt-1 text-[16px] text-[#C1502E]">Couldn&apos;t find this pincode — please enter state and city manually.</p>
                  )}
                </div>

                <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                  <SectionTitle>About You</SectionTitle>

                  <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <label className={labelClass}>Why do you want to volunteer with us? *</label>
                      <div className="relative">
                        <FaHeart className="pointer-events-none absolute left-3 top-2.5 h-3 w-3 text-[#A45331]" />
                        <textarea name="motivation" value={form.motivation ?? ""} onChange={handleChange} required rows={1} className="min-h-[36px] w-full resize-none rounded-[6px] border border-[#E6D8C9] bg-white py-1 pl-9 pr-3 text-[16px] text-[#35241B] outline-none placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10" placeholder="Share your motivation" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Skills / Experience</label>
                      <div className="relative">
                        <FaStar className="pointer-events-none absolute left-3 top-2.5 h-3 w-3 text-[#A45331]" />
                        <textarea name="experience" value={form.experience ?? ""} onChange={handleChange} rows={1} className="min-h-[36px] w-full resize-none rounded-[6px] border border-[#E6D8C9] bg-white py-1 pl-9 pr-3 text-[16px] text-[#35241B] outline-none placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10" placeholder="Your skills or experience" />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Availability *</label>
                      <div className="relative">
                        <FaRegClock className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                        <select name="availability" value={form.availability ?? ""} onChange={handleChange} required className={`${iconInputClass} appearance-none`}>
                          <option value="">Select availability</option>
                          <option value="Weekdays">Weekdays</option>
                          <option value="Weekends">Weekends</option>
                          <option value="Evenings">Evenings</option>
                          <option value="Emergency Support">Emergency Support</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Preferred Role *</label>
                      <select name="preferredRole" value={form.preferredRole ?? ""} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                        <option value="">Select preferred role</option>
                        <option value="Field Volunteer">Field Volunteer</option>
                        <option value="Transport Support">Transport Support</option>
                        <option value="Documentation">Documentation</option>
                        <option value="Family Coordination">Family Coordination</option>
                        <option value="Ritual Assistance">Ritual Assistance</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                  <SectionTitle>Service &amp; Availability Details</SectionTitle>

                  <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
                    {[['whatsappPhone', 'WhatsApp Number', 'tel'], ['occupation', 'Occupation / Profession', 'text'], ['organisation', 'Organisation / Institution', 'text'], ['languagesKnown', 'Languages Known', 'text'], ['hoursPerWeek', 'Approx. Hours / Week', 'text']].map(([name, text, type]) => (
                      <label key={name}>
                        <span className={labelClass}>{text}</span>
                        <input name={name} type={type} value={form[name as keyof VolunteerForm] ?? ""} onChange={handleChange} inputMode={name === 'whatsappPhone' ? 'numeric' : undefined} maxLength={name === 'whatsappPhone' ? 10 : undefined} pattern={name === 'whatsappPhone' ? '[6-9][0-9]{9}' : undefined} className={inputClass} />
                      </label>
                    ))}
                  </div>

                  <p className={`${labelClass} mt-1.5`}>Preferred Areas of Volunteering</p>
                  <div className="grid gap-x-3 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICE_AREAS.map((area) => (
                      <label key={area} className="flex items-start gap-2 text-[16px] leading-5 text-[#5E4B3F]">
                        <input type="checkbox" checked={volunteerAreas.includes(area)} onChange={() => toggleList(setVolunteerAreas, area)} className="mt-0.5 accent-[#ED6B13]" />
                        {area}
                      </label>
                    ))}
                  </div>

                  <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <span className={labelClass}>Available Days</span>
                      <div className="flex flex-wrap gap-2">
                        {['Weekdays', 'Weekends', 'Flexible'].map(v => (
                          <label key={v} className="text-[16px]"><input type="checkbox" checked={availabilityDays.includes(v)} onChange={() => toggleList(setAvailabilityDays, v)} className="mr-1 accent-[#ED6B13]" />{v}</label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className={labelClass}>Preferred Time</span>
                      <div className="flex flex-wrap gap-2">
                        {['Morning', 'Day', 'Evening', 'Night'].map(v => (
                          <label key={v} className="text-[16px]"><input type="checkbox" checked={preferredTimes.includes(v)} onChange={() => toggleList(setPreferredTimes, v)} className="mr-1 accent-[#ED6B13]" />{v}</label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-1.5 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
                    {[['emergencyOnCall', 'Emergency / On-Call Seva?'], ['canParticipateFieldCases', 'Can Participate in Field Cases?'], ['ownVehicle', 'Own Vehicle Available?'], ['volunteeredBefore', 'Volunteered with an NGO before?']].map(([name, text]) => (
                      <label key={name}>
                        <span className={labelClass}>{text}</span>
                        <select name={name} value={form[name as keyof VolunteerForm] ?? ""} onChange={handleChange} required className={inputClass}>
                          <option value="">Select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </label>
                    ))}
                  </div>

                  <div className="mt-1.5">
                    <label>
                      <span className={labelClass}>Previous Organisation &amp; Role</span>
                      <input name="previousOrganisationRole" value={form.previousOrganisationRole ?? ""} onChange={handleChange} className={inputClass} />
                    </label>
                  </div>
                </div>

                <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                  <SectionTitle>Emergency Contact &amp; KYC Later</SectionTitle>

                  <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-4">
                    {[['emergencyContactName', 'Contact Person *', 'text'], ['emergencyContactRelationship', 'Relationship *', 'text'], ['emergencyContactPhone', 'Emergency Mobile No. *', 'tel']].map(([name, text, type]) => (
                      <label key={name}>
                        <span className={labelClass}>{text}</span>
                        <input name={name} type={type} required value={form[name as keyof VolunteerForm] ?? ""} onChange={handleChange} inputMode={type === 'tel' ? 'numeric' : undefined} maxLength={type === 'tel' ? 10 : undefined} pattern={type === 'tel' ? '[6-9][0-9]{9}' : undefined} className={inputClass} />
                      </label>
                    ))}

                    <label>
                      <span className={labelClass}>ID Proof Type (optional)</span>
                      <select name="idProofType" value={form.idProofType ?? ""} onChange={handleChange} className={inputClass}>
                        <option value="">Select</option>
                        {['Aadhaar', 'Voter ID', 'Driving Licence', 'Passport', 'Other'].map(v => <option key={v}>{v}</option>)}
                      </select>
                    </label>

                    <label>
                      <span className={labelClass}>ID Proof Number (optional)</span>
                      <input name="idProofNumber" value={form.idProofNumber ?? ""} onChange={handleChange} className={inputClass} />
                    </label>

                    <label>
                      <span className={labelClass}>Upload Photograph (optional)</span>
                      <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setPhotograph(e.target.files?.[0] ?? null)} className={`${inputClass} h-auto py-1.5`} />
                      <span className="mt-0.5 block text-[16px] text-[#75655A]">JPG, PNG or WebP · max 10MB</span>
                    </label>

                    <label className="sm:col-span-2">
                      <span className={labelClass}>Upload ID Proof (optional)</span>
                      <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" onChange={(e) => setIdProof(e.target.files?.[0] ?? null)} className={`${inputClass} h-auto py-1.5`} />
                      <span className="mt-0.5 block text-[16px] text-[#75655A]">JPG, PNG, WebP or PDF · max 10MB</span>
                    </label>
                  </div>
                </div>

                {/* Password */}
                <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                  <div className="grid gap-1.5 sm:grid-cols-[0.75fr_1.25fr]">
                    <div>
                      <label
                        className={labelClass}
                      >
                        Password *
                      </label>

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

                    <div>
                      <label
                        className={labelClass}
                      >
                        Skills
                      </label>

                      <div className="flex min-h-[36px] flex-wrap items-center gap-1">
                        {SUGGESTED_SKILLS.map(
                          (skill) => {
                            const selected =
                              skills.includes(
                                skill,
                              );

                            return (
                              <button
                                key={skill}
                                type="button"
                                onClick={() =>
                                  toggleSkill(
                                    skill,
                                  )
                                }
                                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[16px] font-medium transition ${selected
                                  ? "border-[#ED6B13] bg-[#ED6B13] text-white"
                                  : "border-[#E6D8C9] bg-[#FCF8F2] text-[#674E3E] hover:border-[#E9A166]"
                                  }`}
                              >
                                {selected && (
                                  <FaCheckCircle className="h-2.5 w-2.5" />
                                )}

                                {skill}
                              </button>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <label className="flex cursor-pointer items-start gap-2 border-t border-dashed border-[#EDB886] pt-2 text-[16px] leading-5 text-[#5E4B3F]">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(event) =>
                      setConsent(
                        event.target.checked,
                      )
                    }
                    className="mt-0.5 h-3.5 w-3.5 rounded border-[#D6C3B2] text-[#ED6B13] focus:ring-[#ED6B13]/20"
                  />

                  I agree to abide by
                  Moksha Sewa&apos;s volunteer
                  guidelines and code of
                  conduct.
                  <span className="text-red-500">
                    *
                  </span>
                </label>

                {error && (
                  <div className="rounded-[6px] border border-red-200 bg-red-50 px-3 py-2 text-[16px] text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex h-[39px] w-full items-center justify-center gap-2.5 rounded-[6px] bg-gradient-to-r from-[#FF6A13] to-[#EF4E0A] px-4 text-[16px] font-medium text-white shadow-[0_7px_18px_rgba(229,78,11,0.22)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Registering...
                    </>
                  ) : (
                    <>
                      <PiFlowerLotus className="h-5 w-5" />
                      Register as Volunteer
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}
                </button>

                <p className="flex items-center justify-center gap-2 text-center text-[16px] text-[#75655A]">
                  <FaShieldAlt className="text-[#726D67]" />
                  Your information is safe and
                  secure with us.
                </p>
              </form>
            </section>

            {/* Right panel */}
            <aside className="overflow-hidden rounded-[15px] border border-[#EDD9BF] bg-[#FFF8EC] p-3 shadow-[0_14px_36px_rgba(106,65,29,0.09)]">
              <h2 className="text-center font-serif text-[17px] font-normal text-[#40271B]">
                Why Volunteer With Us?
              </h2>

              <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#EA7C28] to-transparent" />

              <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-2.5 rounded-[10px] border border-[#EBDCC9] bg-white/65 p-3"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#EBD5BA] bg-white text-[#ED6B13] shadow-[0_4px_12px_rgba(89,57,31,0.07)]">
                        <Icon className="h-4.5 w-4.5" />
                      </span>

                      <div>
                        <h3 className="font-serif text-[16px] leading-tight text-[#3E261B]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[16px] leading-[1.45] text-[#715C4E]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>



            </aside>
          </div>

          {/* Bottom message */}

        </div>
      </main>

      <Footer />
    </div>
  );
}
