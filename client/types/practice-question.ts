export type QuestionOption = {
  id: "A" | "B" | "C" | "D";
  text: string;
};

export type PracticeQuestion = {
  id: string;
  courseId: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
};

export type PracticeQuestionFilter = {
  courseId?: string;
  category?: string;
};

export type QuizAnswer = {
  questionId: string;
  answer: QuestionOption["id"] | undefined;
};

export type QuizQuestionResult = {
  questionId: string;
  selectedAnswer: QuestionOption["id"] | null;
  correctAnswer: QuestionOption["id"];
  isCorrect: boolean;
};

export type QuizPassChance =
  | "HIGH"
  | "BORDERLINE"
  | "LOW";

export type QuizResult = {
  total: number;
  correct: number;
  incorrect: number;
  percentage: number;
  passChance: QuizPassChance;
  results: QuizQuestionResult[];
};