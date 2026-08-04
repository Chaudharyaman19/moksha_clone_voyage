import { api } from "./api";

export const enquiryApi = {
  create: (input: { name: string; phone: string; email?: string; message: string }) =>
    api.post<null>("/enquiries", input),
};
