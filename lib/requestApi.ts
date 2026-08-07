import { api } from "./api";

export interface CreateAssistanceRequestInput {
  type: "NORMAL" | "EMERGENCY";
  requester: {
    name: string;
    phone: string;
    altPhone?: string;
    email?: string;
    relation: string;
  };
  deceased: {
    name: string;
    age?: number;
    gender?: string;
  };
  location: {
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  cremationPreference?: "WOOD" | "ELECTRIC" | "AS_AVAILABLE";
  notes?: string;
  consent: {
    dataProcessing: boolean;
    publishStory: boolean;
  };
}

export interface AssistanceRequestResult {
  _id: string;
  requestNo: string;
  status: "SUBMITTED" | "CONVERTED" | "REJECTED";
}

export interface TrackedCase {
  caseId: string | null;
  requestNo: string;
  status: string;
  scheduledAt?: string | null;
  completedAt?: string | null;
  closedAt?: string | null;
  createdAt: string;
  timeline: { event: string; toStatus?: string; note?: string; at: string }[];
}

export const requestApi = {
  submit: (input: CreateAssistanceRequestInput) =>
    api.post<AssistanceRequestResult>("/requests", input),
  track: (caseId: string, phone: string) =>
    api.get<TrackedCase>(`/cases/track?caseId=${encodeURIComponent(caseId)}&phone=${encodeURIComponent(phone)}`),
};
