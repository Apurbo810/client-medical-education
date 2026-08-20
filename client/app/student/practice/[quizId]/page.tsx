"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import type {
  PracticeQuestion,
  QuestionOption,
} from "@/types/practice-question";

import { practiceQuestions } from "@/data/practice-questions";

import {
  calculateQuizResult,
  createQuiz,
  saveQuizResult,
} from "@/lib/quiz";

import { QuizNavigation } from "@/components/student/quiz/quiz-navigation";
import { QuizProgress } from "@/components/student/quiz/quiz-progress";
import { QuizQuestion } from "@/components/student/quiz/quiz-question";

interface QuizPageProps {
  params: Promise<{
    quizId: string;
  }>;
}

export default function QuizPage({
  params,
}: QuizPageProps) {
  const router = useRouter();

  const [quizId, setQuizId] = useState<string | null>(
    null,
  );

  const [questions, setQuestions] = useState<
    PracticeQuestion[]
  >([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState<
    Record<string, QuestionOption["id"]>
  >({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  /* =========================================================
     LOAD QUIZ
  ========================================================= */

  useEffect(() => {
    async function loadQuiz() {
      const resolvedParams = await params;

      const id = resolvedParams.quizId;

      setQuizId(id);

      /*
       * For now:
       * Practice uses the practice question bank.
       *
       * Later:
       * CAT / Weekly Mock can load their own
       * question source based on quizId/type.
       */

      const quizQuestions = createQuiz(
        practiceQuestions,
        10,
      );

      setQuestions(quizQuestions);
    }

    loadQuiz();
  }, [params]);

  /* =========================================================
     CURRENT QUESTION
  ========================================================= */

  const question = useMemo(() => {
    return questions[currentQuestion];
  }, [questions, currentQuestion]);

  /* =========================================================
     ANSWER
  ========================================================= */

  function handleAnswerChange(
    answer: QuestionOption["id"],
  ) {
    if (!question || isSubmitting) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [question.id]: answer,
    }));
  }

  /* =========================================================
     NEXT
  ========================================================= */

  function handleNext() {
    if (
      isSubmitting ||
      currentQuestion >= questions.length - 1
    ) {
      return;
    }

    setCurrentQuestion(
      (previous) => previous + 1,
    );
  }

  /* =========================================================
     PREVIOUS
  ========================================================= */

  function handlePrevious() {
    if (
      isSubmitting ||
      currentQuestion <= 0
    ) {
      return;
    }

    setCurrentQuestion(
      (previous) => previous - 1,
    );
  }

  /* =========================================================
     SUBMIT
  ========================================================= */

  function handleFinish() {
    if (
      !quizId ||
      !questions.length ||
      isSubmitting
    ) {
      return;
    }

    setIsSubmitting(true);

    /*
     * Convert the student's selected answers
     * into the format expected by calculateQuizResult().
     */
    const quizAnswers = questions.map(
      (item) => ({
        questionId: item.id,
        answer: answers[item.id],
      }),
    );

    /*
     * Calculate the result.
     *
     * IMPORTANT:
     * The correct answer comes from the question data.
     * The frontend only sends/uses the student's answer.
     */
    const result = calculateQuizResult(
      questions,
      quizAnswers,
    );

    /*
     * Save the result temporarily.
     *
     * Later this will be replaced with
     * a backend API request.
     */
    saveQuizResult(
      quizId,
      result,
      questions,
    );

    /*
     * Move to the separate result page.
     */
    router.push(
      `/student/practice/result/${quizId}`,
    );
  }

  /* =========================================================
     LOADING
  ========================================================= */

  if (!quizId || questions.length === 0) {
    return (
      <main className="min-h-[calc(100vh-4rem)] bg-background">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
            <p className="text-sm text-muted-foreground">
              Loading practice questions...
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     QUIZ
  ========================================================= */

  const selectedAnswer =
    question && answers[question.id]
      ? answers[question.id]
      : null;

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Header */}
        <header className="mb-6">
          <p className="text-sm font-medium text-primary">
            Practice Questions
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Practice Quiz
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Answer each question and submit when you
            are finished.
          </p>
        </header>

        {/* Progress */}
        <QuizProgress
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />

        {/* Question */}
        <div className="mt-5">
          <QuizQuestion
            question={question}
            selectedAnswer={selectedAnswer}
            onAnswerChange={handleAnswerChange}
          />
        </div>

        {/* Navigation */}
        <div className="mt-5">
          <QuizNavigation
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            hasAnswer={Boolean(selectedAnswer)}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onFinish={handleFinish}
          />
        </div>

        {/* Submitting */}
        {isSubmitting && (
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Calculating your result...
          </p>
        )}
      </div>
    </main>
  );
}