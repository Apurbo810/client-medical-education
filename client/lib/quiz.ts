import type {
  PracticeQuestion,
  QuizAnswer,
  QuizResult,
  QuizPassChance,
} from "@/types/practice-question";

/* =========================================================
   CREATE QUIZ
========================================================= */

export function createQuiz(
  questions: PracticeQuestion[],
  numberOfQuestions: number,
): PracticeQuestion[] {
  const shuffled = [...questions].sort(
    () => Math.random() - 0.5,
  );

  return shuffled.slice(
    0,
    Math.min(
      numberOfQuestions,
      shuffled.length,
    ),
  );
}

/* =========================================================
   PASS CHANCE
========================================================= */

export function getPassChance(
  percentage: number,
): QuizPassChance {
  /*
   * 75% or higher
   * → HIGH chance to pass
   *
   * 66% - 74%
   * → BORDERLINE
   *
   * 50% - 65%
   * → BORDERLINE
   *
   * Below 50%
   * → LOW chance to pass
   */

  if (percentage >= 75) {
    return "HIGH";
  }

  if (percentage >= 50) {
    return "BORDERLINE";
  }

  return "LOW";
}

/* =========================================================
   CALCULATE RESULT
========================================================= */

export function calculateQuizResult(
  questions: PracticeQuestion[],
  answers: QuizAnswer[],
): QuizResult {
  let correct = 0;

  const results = questions.map(
    (question) => {
      const answer = answers.find(
        (item) =>
          item.questionId === question.id,
      );

      const selectedAnswer =
        answer?.answer ?? null;

      const isCorrect =
        selectedAnswer ===
        question.correctAnswer;

      if (isCorrect) {
        correct++;
      }

      return {
        questionId: question.id,
        selectedAnswer,
        correctAnswer:
          question.correctAnswer,
        isCorrect,
      };
    },
  );

  const total = questions.length;

  const percentage =
    total > 0
      ? Math.round(
          (correct / total) * 100,
        )
      : 0;

  const passChance =
    getPassChance(percentage);

  return {
    total,
    correct,
    incorrect: total - correct,
    percentage,
    passChance,
    results,
  };
}

/* =========================================================
   TEMPORARY RESULT STORAGE
========================================================= */

const RESULT_PREFIX =
  "practice-quiz-result:";

const QUESTIONS_PREFIX =
  "practice-quiz-questions:";

/*
 * Temporary frontend storage.
 *
 * Later this will be replaced by
 * backend/API storage.
 */

export function saveQuizResult(
  quizId: string,
  result: QuizResult,
  questions: PracticeQuestion[],
): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    sessionStorage.setItem(
      `${RESULT_PREFIX}${quizId}`,
      JSON.stringify(result),
    );

    sessionStorage.setItem(
      `${QUESTIONS_PREFIX}${quizId}`,
      JSON.stringify(questions),
    );
  } catch (error) {
    console.error(
      "Failed to save quiz result:",
      error,
    );
  }
}

/* =========================================================
   GET STORED RESULT
========================================================= */

export function getStoredQuizResult(
  quizId: string,
): QuizResult | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored =
      sessionStorage.getItem(
        `${RESULT_PREFIX}${quizId}`,
      );

    if (!stored) {
      return null;
    }

    return JSON.parse(
      stored,
    ) as QuizResult;
  } catch (error) {
    console.error(
      "Failed to read quiz result:",
      error,
    );

    return null;
  }
}

/* =========================================================
   GET STORED QUESTIONS
========================================================= */

export function getStoredQuizQuestions(
  quizId: string,
): PracticeQuestion[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored =
      sessionStorage.getItem(
        `${QUESTIONS_PREFIX}${quizId}`,
      );

    if (!stored) {
      return [];
    }

    return JSON.parse(
      stored,
    ) as PracticeQuestion[];
  } catch (error) {
    console.error(
      "Failed to read quiz questions:",
      error,
    );

    return [];
  }
}


/* =========================================================
   CREATE FIXED EXAM
========================================================= */

export function createFixedExam(
  questions: PracticeQuestion[],
): PracticeQuestion[] {
  return [...questions];
}