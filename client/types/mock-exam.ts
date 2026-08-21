export type MockExamType =
  | "mock"
  | "cat"
  | "weekly";

export type MockExamStatus =
  | "available"
  | "upcoming";

export interface MockExam {
  id: string;

  courseId: string;
  contentId: string;

  title: string;
  description: string;

  type: MockExamType;

  questions: number;
  duration: number;

  status: MockExamStatus;
}