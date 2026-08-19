import { api } from "./api";

export type SubmissionResult = { _id: string; status: "new" | "contacted" | "closed" };

export const websiteSubmissionsApi = {
  csr: (input: Record<string, unknown>) => api.post<SubmissionResult>("/enquiries/csr", input),
  partnership: (input: Record<string, unknown>) => api.post<SubmissionResult>("/enquiries/partnership", input),
  unclaimedBody: (input: FormData) => api.postForm<SubmissionResult>("/enquiries/unclaimed-body", input),
};
