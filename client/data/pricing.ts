import type { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    id: "4-month",
    name: "4-Month Access",
    description:
      "Focused preparation for students close to exam day.",
    price: 199,
    currency: "$",
    billing: "One-time",
    duration: "4 Months",
    popular: false,
    buttonText: "Get Started",
    features: [
      "12,500+ Practice Questions",
      "30+ Study Notes",
      "HD Video Lectures",
      "5 Full-Length Mock Exams",
      "2 CAT Simulations",
      "Email Support",
    ],
  },
  {
    id: "6-month",
    name: "6-Month Access",
    description:
      "Our most popular plan for complete NCLEX preparation.",
    price: 279,
    currency: "$",
    billing: "One-time",
    duration: "6 Months",
    popular: true,
    buttonText: "Get Started",
    features: [
      "Everything in 4-Month Plan",
      "Unlimited Mock Exams",
      "10 CAT Simulations",
      "Personalized Study Plan",
      "Priority Mentor Support",
      "Performance Analytics",
      "Mobile App Access",
    ],
  },
  {
    id: "lifetime",
    name: "Lifetime Access",
    description:
      "Unlimited access with future updates and premium support.",
    price: 499,
    currency: "$",
    billing: "One-time",
    duration: "Lifetime",
    popular: false,
    buttonText: "Get Started",
    features: [
      "Everything in 6-Month Plan",
      "Lifetime Course Updates",
      "1-on-1 Strategy Session",
      "Pass Guarantee Program",
      "Printable Flashcards",
      "Exclusive Community Access",
      "Priority Support",
    ],
  },
];