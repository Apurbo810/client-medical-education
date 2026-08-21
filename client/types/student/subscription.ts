export type SubscriptionStatus =
  | "active"
  | "expired"
  | "cancelled"
  | "pending";

export type PaymentStatus =
  | "paid"
  | "pending"
  | "failed";

export interface StudentSubscription {
  id: string;

  studentId: string;

  planId: string;

  planName: string;

  description: string;

  status: SubscriptionStatus;

  startDate: string;

  expiresAt: string;

  remainingDays: number;

  progress: number;
}

export interface SubscriptionPlan {
  id: string;

  name: string;

  price: string;

  description: string;

  durationMonths: number | null;

  features: string[];

  isPopular?: boolean;
}

export interface PaymentRecord {
  id: string;

  invoice: string;

  date: string;

  description: string;

  amount: string;

  status: PaymentStatus;
}