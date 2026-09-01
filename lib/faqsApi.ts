import { api } from "./api";

export interface Faq {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}

export const faqsApi = {
  getAll: async () => {
    return await api.get<Faq[]>("/faqs");
  },
};
