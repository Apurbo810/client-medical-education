import type { MockExam } from "@/types/mock-exam";

export const mockExams: MockExam[] = [
  {
    id: "nclex-v1-w3-mock-1",

    courseId: "nclex-complete",
    contentId: "nclex-v1-w3-mock-1",

    title: "NCLEX Mock Test",

    description:
      "A practice mock examination using NCLEX-style questions.",

    type: "mock",

    questions: 50,
    duration: 60,

    status: "available",
  },
];