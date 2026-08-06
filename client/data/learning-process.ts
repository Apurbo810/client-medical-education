import {
  ClipboardCheck,
  CalendarDays,
  BookOpenCheck,
  GraduationCap,
} from "lucide-react";

import type { LearningProcess } from "@/types/learning-process";

export const learningProcess: LearningProcess[] = [
  {
    step: "01",
    title: "Assess Your Readiness",
    description:
      "Take a diagnostic assessment to identify your strengths and focus areas.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Build Your Study Plan",
    description:
      "Follow a personalized learning path with structured daily milestones.",
    icon: CalendarDays,
  },
  {
    step: "03",
    title: "Practice Every Day",
    description:
      "Master NCLEX-style questions with detailed rationales and progress tracking.",
    icon: BookOpenCheck,
  },
  {
    step: "04",
    title: "Pass With Confidence",
    description:
      "Complete mock exams and walk into test day fully prepared to succeed.",
    icon: GraduationCap,
  },
];