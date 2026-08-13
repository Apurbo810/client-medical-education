import type { StudentDashboardData } from "@/types/student/student-dashboard";

export const studentDashboardData: StudentDashboardData = {
  student: {
    name: "Sarah",
  },

  subscription: {
    plan: "6-Month Access",
    daysRemaining: 47,
    expiresAt: "2025-01-31",
  },

  streak: {
    days: 12,
  },

  readiness: {
    level: "High",
  },

  stats: {
    questionsSolved: 8420,
    questionsTotal: 12500,
    averageScore: 84,
    scoreChange: 4,
    mockExamsCompleted: 3,
    mockExamsTotal: 5,
    readiness: "High",
    readinessStatus: "CAT: Passed",
  },

    continueLearning: {
    courseTitle: "NCLEX-RN Complete Course",
    lessonTitle: "Pharmacology — Cardiovascular Medications",
    progress: 68,
    remainingMinutes: 18,
    href: "/student/learning",
  },

};