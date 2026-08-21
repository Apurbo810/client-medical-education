export type ResultExamType =
  | "practice"
  | "mock"
  | "cat";

export type ResultStatus =
  | "completed"
  | "in-progress";

export type ResultGrade =
  | "A"
  | "B"
  | "C"
  | "D"
  | "F";

export type ResultPassChance =
  | "HIGH"
  | "BORDERLINE"
  | "LOW";

export interface StudentExamResult {
  id: string;

  studentId: string;

  examId: string;

  title: string;

  type: ResultExamType;

  status: ResultStatus;

  totalQuestions: number;

  correctAnswers: number;

  incorrectAnswers: number;

  percentage: number;

  grade: ResultGrade;

  passChance: ResultPassChance;

  completedAt: string;

  duration: number;
}