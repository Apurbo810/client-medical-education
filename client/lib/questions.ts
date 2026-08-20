import type {
  PracticeQuestion,
  PracticeQuestionFilter,
} from "@/types/practice-question";

export function getQuestions(
  questions: PracticeQuestion[],
  filter?: PracticeQuestionFilter,
): PracticeQuestion[] {
  if (!filter) {
    return questions;
  }

  return questions.filter((question) => {
    const matchesCourse =
      !filter.courseId ||
      question.courseId === filter.courseId;

    const matchesCategory =
      !filter.category ||
      question.category === filter.category;

    return (
      matchesCourse &&
      matchesCategory
    );
  });
}

export function getQuestionById(
  questions: PracticeQuestion[],
  questionId: string,
): PracticeQuestion | undefined {
  return questions.find(
    (question) =>
      question.id === questionId,
  );
}