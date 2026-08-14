import { api } from "./api";
import { AuthUser, AuthTokens } from "@/store/slices/authSlice";

export const VOLUNTEER_GENDERS = ["Male", "Female", "Other"] as const;
export type VolunteerGender = (typeof VOLUNTEER_GENDERS)[number];

export const VOLUNTEER_BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] as const;
export type VolunteerBloodGroup = (typeof VOLUNTEER_BLOOD_GROUPS)[number];

export const VOLUNTEER_SCHEDULE_PREFERENCES = ["Weekdays", "Weekends", "Evenings", "Emergency Support", "Flexible"] as const;
export type VolunteerSchedulePreference = (typeof VOLUNTEER_SCHEDULE_PREFERENCES)[number];

export const VOLUNTEER_PREFERRED_ROLES = [
  "Field Volunteer",
  "Transport Support",
  "Documentation",
  "Family Coordination",
  "Ritual Assistance",
] as const;
export type VolunteerPreferredRole = (typeof VOLUNTEER_PREFERRED_ROLES)[number];

export interface VolunteerProfile {
  _id: string;
  city: string;
  skills: string[];
  status: "ACTIVE" | "INACTIVE" | "BLACKLISTED";
  availability: "AVAILABLE" | "BUSY" | "UNAVAILABLE";
  totalAssignments: number;
  name?: string;
  phone?: string;
  email?: string;
  avatarUrl?: string;
  address?: string;
  state?: string;
  pincode?: string;
  preferredRole?: VolunteerPreferredRole;
  schedulePreference?: VolunteerSchedulePreference;
}

export interface VolunteerAssignmentCase {
  caseId: string;
  status: string;
  city: string;
  priority: "LOW" | "NORMAL" | "HIGH" | "CRITICAL";
  scheduledAt?: string;
}

export interface VolunteerAssignment {
  _id: string;
  caseId: string;
  case: VolunteerAssignmentCase | null;
  role: "PRIMARY" | "SUPPORT" | "DRIVER";
  status: "ASSIGNED" | "ACCEPTED" | "DECLINED" | "COMPLETED" | "WITHDRAWN";
  note?: string;
  createdAt: string;
}

export const VOLUNTEER_DOCUMENT_TYPES = [
  "DEATH_CERTIFICATE",
  "ID_PROOF",
  "ADDRESS_PROOF",
  "CREMATION_PROOF",
  "CONSENT_FORM",
  "BILL",
  "OTHER",
] as const;
export type VolunteerDocumentType = (typeof VOLUNTEER_DOCUMENT_TYPES)[number];

export interface CaseDocumentResult {
  _id: string;
  caseId: string;
  docType: VolunteerDocumentType;
  url: string;
  fileName: string;
  isProof: boolean;
  createdAt: string;
}

export interface VolunteerAssignmentDetail {
  assignment: VolunteerAssignment;
  case: VolunteerAssignmentCase;
  pickup: { address: string; area: string; city: string; state: string; pincode: string } | null;
  contact: { name: string; phone: string; altPhone?: string } | null;
  caseManager: { name: string; phone: string } | null;
  timeline: { event: string; toStatus?: string; note?: string; at: string }[];
}

type RegisterResult = { user: AuthUser; volunteer: VolunteerProfile } & AuthTokens;

interface RegisterVolunteerInput {
  name: string;
  phone: string;
  email: string;
  password: string;
  city: string;
  skills: string[];
  dateOfBirth?: string;
  gender?: VolunteerGender;
  bloodGroup?: VolunteerBloodGroup;
  address?: string;
  state?: string;
  pincode?: string;
  motivation?: string;
  experience?: string;
  schedulePreference?: VolunteerSchedulePreference;
  preferredRole?: VolunteerPreferredRole;
  whatsappPhone?: string;
  occupation?: string;
  organisation?: string;
  volunteerAreas: string[];
  availabilityDays: string[];
  preferredTimes: string[];
  emergencyOnCall: boolean;
  canParticipateFieldCases: boolean;
  ownVehicle: boolean;
  languagesKnown?: string;
  hoursPerWeek?: string;
  volunteeredBefore: boolean;
  previousOrganisationRole?: string;
  emergencyContact: { name?: string; relationship?: string; phone?: string };
  idProofType?: string;
  idProofNumber?: string;
  declarationAccepted: true;
  photograph: File;
  idProof: File;
}

export const volunteerApi = {
  register: (input: RegisterVolunteerInput) => {
    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
      if (value === undefined) return;
      if (value instanceof File) formData.append(key, value);
      else if (Array.isArray(value) || typeof value === "object") formData.append(key, JSON.stringify(value));
      else formData.append(key, String(value));
    });
    return api.postForm<RegisterResult>("/volunteers/register", formData);
  },
  myProfile: () => api.get<VolunteerProfile>("/volunteers/me"),
  updateProfile: (
    input: Partial<{
      city: string;
      skills: string[];
      address: string;
      state: string;
      pincode: string;
      schedulePreference: VolunteerSchedulePreference;
      preferredRole: VolunteerPreferredRole;
    }>
  ) => api.patch<VolunteerProfile>("/volunteers/me", input),
  updateAvailability: (availability: VolunteerProfile["availability"]) =>
    api.patch<VolunteerProfile>("/volunteers/me/availability", { availability }),
  myAssignments: () => api.get<VolunteerAssignment[]>("/volunteers/me/assignments"),
  assignmentDetail: (assignmentId: string) =>
    api.get<VolunteerAssignmentDetail>(`/volunteers/me/assignments/${assignmentId}`),
  respondToAssignment: (assignmentId: string, response: "ACCEPTED" | "DECLINED") =>
    api.patch<VolunteerAssignment>(`/volunteers/me/assignments/${assignmentId}/respond`, { response }),
  uploadDocument: (assignmentId: string, file: File, docType: VolunteerDocumentType, isProof: boolean) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("docType", docType);
    formData.append("isProof", String(isProof));
    return api.postForm<CaseDocumentResult>(`/volunteers/me/assignments/${assignmentId}/documents`, formData);
  },
};
