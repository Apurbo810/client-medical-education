import type {
  PaymentRecord,
  SubscriptionPlan,
  StudentSubscription,
} from "@/types/student/subscription";

/* =========================================================
   STUDENT SUBSCRIPTION
========================================================= */

export const studentSubscription: StudentSubscription = {
  id: "subscription-001",

  studentId: "student-1",

  planId: "six-month",

  planName: "6-Month Access",

  description:
    "Albert's Road to NCLEX — Complete Prep",

  status: "active",

  startDate: "2026-08-01",

  expiresAt: "2027-01-31",

  remainingDays: 164,

  progress: 12,
};

/* =========================================================
   AVAILABLE PLANS
========================================================= */

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: "four-month",

    name: "4-Month Access",

    price: "$199",

    description:
      "Focused preparation for your NCLEX journey.",

    durationMonths: 4,

    features: [
      "Course access",
      "Practice questions",
      "Mock exams",
    ],
  },

  {
    id: "six-month",

    name: "6-Month Access",

    price: "$279",

    description:
      "Extended access for complete preparation.",

    durationMonths: 6,

    features: [
      "Course access",
      "Practice questions",
      "Mock exams",
      "CAT assessments",
    ],

    isPopular: true,
  },

  {
    id: "lifetime",

    name: "Lifetime Access",

    price: "$499",

    description:
      "Unlimited access to all available preparation materials.",

    durationMonths: null,

    features: [
      "Lifetime course access",
      "Practice questions",
      "Mock exams",
      "CAT assessments",
      "Future content updates",
    ],
  },
];

/* =========================================================
   PAYMENT HISTORY
========================================================= */

export const paymentHistory: PaymentRecord[] = [
  {
    id: "payment-001",

    invoice: "INV-2041",

    date: "2026-08-01",

    description: "6-Month Access",

    amount: "$279",

    status: "paid",
  },

  {
    id: "payment-002",

    invoice: "INV-1987",

    date: "2026-03-01",

    description: "4-Month Access",

    amount: "$199",

    status: "paid",
  },

  {
    id: "payment-003",

    invoice: "INV-1842",

    date: "2025-11-01",

    description: "4-Month Access",

    amount: "$199",

    status: "paid",
  },
];