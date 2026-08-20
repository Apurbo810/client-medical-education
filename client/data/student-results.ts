import type {
  StudentExamResult,
} from "@/types/student/results";

export const studentExamResults: StudentExamResult[] = [
  /*
   * =========================================================
   * MOCK EXAM
   * =========================================================
   */

  {
    id: "result-001",

    studentId: "student-1",

    examId: "nclex-v1-w3-mock-1",

    title: "NCLEX Mock Test",

    type: "mock",

    status: "completed",

    totalQuestions: 50,

    correctAnswers: 43,

    incorrectAnswers: 7,

    percentage: 86,

    grade: "A",

    passChance: "HIGH",

    completedAt: "2026-08-11T20:30:00",

    duration: 58,
  },

  /*
   * =========================================================
   * PRACTICE
   * =========================================================
   */

  {
    id: "result-002",

    studentId: "student-1",

    examId: "practice-001",

    title: "Clinical Judgment Practice",

    type: "practice",

    status: "completed",

    totalQuestions: 20,

    correctAnswers: 15,

    incorrectAnswers: 5,

    percentage: 75,

    grade: "B",

    passChance: "HIGH",

    completedAt: "2026-08-14T18:20:00",

    duration: 24,
  },

  /*
   * =========================================================
   * PRACTICE
   * =========================================================
   */

  {
    id: "result-003",

    studentId: "student-1",

    examId: "practice-002",

    title: "Pharmacology Practice",

    type: "practice",

    status: "completed",

    totalQuestions: 20,

    correctAnswers: 12,

    incorrectAnswers: 8,

    percentage: 60,

    grade: "C",

    passChance: "BORDERLINE",

    completedAt: "2026-08-16T21:10:00",

    duration: 27,
  },

  /*
   * =========================================================
   * CAT
   * =========================================================
   */

  {
    id: "result-004",

    studentId: "student-1",

    examId: "cat-001",

    title: "NCLEX CAT Assessment",

    type: "cat",

    status: "completed",

    totalQuestions: 35,

    correctAnswers: 18,

    incorrectAnswers: 17,

    percentage: 51,

    grade: "C",

    passChance: "BORDERLINE",

    completedAt: "2026-08-18T19:45:00",

    duration: 42,
  },

  /*
   * =========================================================
   * PRACTICE
   * =========================================================
   */

  {
    id: "result-005",

    studentId: "student-1",

    examId: "practice-003",

    title: "Prioritization Practice",

    type: "practice",

    status: "completed",

    totalQuestions: 10,

    correctAnswers: 4,

    incorrectAnswers: 6,

    percentage: 40,

    grade: "F",

    passChance: "LOW",

    completedAt: "2026-08-19T20:15:00",

    duration: 13,
  },
];