import {
  Target,
  Clock3,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import type { WhyChooseItem } from "@/types/why-choose-us";

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Target,
    title: "96.4% Pass Rate",
    description:
      "Our data-driven curriculum is continuously refined using real student outcomes.",
  },
  {
    icon: Clock3,
    title: "Adaptive Study Plans",
    description:
      "Flexible 4 or 6-month learning plans that adapt to your pace and weak areas.",
  },
  {
    icon: ShieldCheck,
    title: "NCLEX-Aligned Content",
    description:
      "Every lesson, question, and study note follows the latest NCLEX-RN blueprint.",
  },
  {
    icon: Headphones,
    title: "Mentor Support",
    description:
      "Get answers from experienced RN educators within 24 hours whenever you need help.",
  },
];