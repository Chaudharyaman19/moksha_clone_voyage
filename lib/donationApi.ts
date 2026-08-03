import { api } from "./api";

export interface MyDonation {
  _id: string;
  cause: string;
  type: "ONE_TIME" | "RECURRING" | "OFFLINE";
  amount: number;
  status: "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED" | "CANCELLED";
  isAnonymous: boolean;
  dedication?: string;
  receiptId?: string;
  createdAt: string;
}

export const donationApi = {
  myDonations: () => api.get<MyDonation[]>("/donations/me"),
};
