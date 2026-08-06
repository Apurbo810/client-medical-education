import {
  BookOpen,
  Video,
  ClipboardCheck,
  Timer,
  BrainCircuit,
  ChartColumnIncreasing,
} from "lucide-react";

import type { Feature } from "@/types/feature";

export const features: Feature[] = [
  {
    icon: BookOpen,
    title: "Comprehensive Study Notes",
    description:
      "30+ NCLEX topics with structured lessons, diagrams, and printable summaries.",
  },
  {
    icon: Video,
    title: "HD Video Lectures",
    description:
      "Expert-led video lessons with progress tracking and downloadable resources.",
  },
  {
    icon: ClipboardCheck,
    title: "12,500+ Practice Questions",
    description:
      "Adaptive NCLEX question bank with detailed rationales and smart filtering.",
  },
  {
    icon: Timer,
    title: "Realistic Mock Exams",
    description:
      "Full-length NCLEX-style exams with real exam timing and instant scoring.",
  },
  {
    icon: BrainCircuit,
    title: "CAT Exam Simulations",
    description:
      "Computer Adaptive Testing experience that closely mirrors the official NCLEX.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Performance Analytics",
    description:
      "Track your readiness, identify weak areas, and monitor your learning progress.",
  },
];