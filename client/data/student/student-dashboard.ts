import type { StudentDashboardData } from "@/types/student/student-dashboard";

export const studentDashboardData: Record<
  string,
  StudentDashboardData
> = {
  /*
   * =========================================================
   * STUDENT 1
   * Existing subscriber
   * All 3 weeks unlocked
   * Course completed
   * =========================================================
   */

  "student-1": {
    student: {
      name: "Sarah",
    },

    subscription: {
      plan: "6-Month Access",
      daysRemaining: 47,
      expiresAt: "2026-10-03",
      hasCourseAccess: true,
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

      mockExamsCompleted: 5,
      mockExamsTotal: 5,

      readiness: "High",
      readinessStatus: "CAT: Passed",
    },

    continueLearning: {
      courseTitle: "NCLEX-RN Complete Course",
      lessonTitle: "NCLEX Mock Test",
      progress: 100,
      remainingMinutes: 0,
      href: "/student/learning/nclex-complete",
    },

    coursesProgress: [
      {
        id: "nclex-complete",
        progress: 100,
      },
    ],
  },

  /*
   * =========================================================
   * STUDENT 2
   * New subscriber
   * Only Week 1 unlocked
   * Started the Week 1 PDF
   * =========================================================
   */

  "student-2": {
    student: {
      name: "Michael",
    },

    subscription: {
      plan: "6-Month Access",
      daysRemaining: 178,
      expiresAt: "2027-02-11",
      hasCourseAccess: true,
    },

    streak: {
      days: 2,
    },

    readiness: {
      level: "Getting Started",
    },

    stats: {
      questionsSolved: 120,
      questionsTotal: 12500,

      averageScore: 72,
      scoreChange: 0,

      mockExamsCompleted: 0,
      mockExamsTotal: 5,

      readiness: "Getting Started",
      readinessStatus: "Not Assessed",
    },

    continueLearning: {
      courseTitle: "NCLEX-RN Complete Course",
      lessonTitle: "NCLEX-RN Fundamentals",
      progress: 35,
      remainingMinutes: 10,
      href: "/student/learning/nclex-complete",
    },

    coursesProgress: [
      {
        id: "nclex-complete",
        progress: 35,
      },
    ],
  },

  /*
   * =========================================================
   * STUDENT 3
   * No subscription
   * No course access
   * =========================================================
   */

  "student-3": {
    student: {
      name: "David",
    },

    subscription: {
      plan: "No Active Subscription",
      daysRemaining: 0,
      expiresAt: "",
      hasCourseAccess: false,
    },

    streak: {
      days: 0,
    },

    readiness: {
      level: "Not Assessed",
    },

    stats: {
      questionsSolved: 0,
      questionsTotal: 0,

      averageScore: 0,
      scoreChange: 0,

      mockExamsCompleted: 0,
      mockExamsTotal: 0,

      readiness: "Not Assessed",
      readinessStatus: "No Assessment",
    },

    continueLearning: {
      courseTitle: "NCLEX-RN Complete Course",
      lessonTitle: "Subscribe to start learning",
      progress: 0,
      remainingMinutes: 0,
      href: "/pricing",
    },

    coursesProgress: [
      {
        id: "nclex-complete",
        progress: 0,
      },
    ],
  },

  "student-4": {
    student: {
      name: "Alex",
    },

    subscription: {
      plan: "6-Month Access",
      daysRemaining: 165,
      expiresAt: "2027-02-01",
      hasCourseAccess: true,
    },

    streak: {
      days: 3,
    },

    readiness: {
      level: "In Progress",
    },

    stats: {
      questionsSolved: 24,
      questionsTotal: 12500,
      averageScore: 0,
      scoreChange: 0,
      mockExamsCompleted: 0,
      mockExamsTotal: 5,
      readiness: "In Progress",
      readinessStatus: "Not Assessed",
    },

    continueLearning: {
      courseTitle: "NCLEX-RN Complete Course",
      lessonTitle: "NCLEX-RN Fundamentals",
      progress: 40,
      remainingMinutes: 15,
      href: "/student/learning/nclex-complete",
    },

    coursesProgress: [
      {
        id: "nclex-complete",
        progress: 40,
      },
    ],
  },
};
