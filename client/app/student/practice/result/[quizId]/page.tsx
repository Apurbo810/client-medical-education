"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";

import { QuizSummary } from "@/components/student/quiz/quiz-summary";

import { mockExams } from "@/data/mock-exams";

import { getQuestionById } from "@/lib/questions";

import {
  getStoredQuizResult,
  getStoredQuizQuestions,
} from "@/lib/quiz";

import type {
  PracticeQuestion,
  QuizQuestionResult,
} from "@/types/practice-question";

export default function QuizResultPage() {
  const params = useParams();

  const quizId = String(params.quizId);

  /*
   * Check whether this result belongs to
   * one of the admin-defined mock exams.
   */
  const isMockExam = mockExams.some(
    (exam) => exam.id === quizId,
  );

  const result = getStoredQuizResult(quizId);

  const questions =
    getStoredQuizQuestions(quizId);

  /* =========================================================
     RESULT NOT FOUND
  ========================================================= */

  if (!result) {
    return (
      <main className="min-h-[calc(100vh-4rem)] bg-background">
        <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl items-center justify-center px-4">
          <div className="w-full rounded-2xl border border-border bg-card p-8 text-center">
            <h1 className="text-2xl font-bold text-foreground">
              Result Not Found
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              This quiz result is no longer available.
            </p>

            <Link
              href="/student/practice"
              className="mt-6 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Back to Practice
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* =========================================================
     RESULT
  ========================================================= */

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* ===================================================
            PAGE HEADER
        =================================================== */}

        <div className="mb-6">
          <p className="text-sm font-medium text-primary">
            {isMockExam
              ? "Mock Exam Result"
              : "Practice Result"}
          </p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">
            {isMockExam
              ? "Mock Exam Results"
              : "Quiz Results"}
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {isMockExam
              ? "Review your mock exam performance and the questions you answered."
              : "Review your performance and the questions you answered."}
          </p>
        </div>

        {/* ===================================================
            SUMMARY
        =================================================== */}

        <QuizSummary
          totalQuestions={result.total}
          correctAnswers={result.correct}
          percentage={result.percentage}
          passChance={result.passChance}
          isMockExam={isMockExam}
          onRetry={() => {
            /*
             * Mock exams cannot be retaken.
             *
             * This callback is only used by
             * normal practice quizzes.
             */
            if (isMockExam) {
              return;
            }

            window.location.href =
              `/student/practice?retry=${quizId}`;
          }}
        />

        {/* ===================================================
            QUESTION REVIEW
        =================================================== */}

        <section className="mt-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground">
              Question Review & Rationales
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Review your answers and understand why
              each answer was correct.
            </p>
          </div>

          <div className="space-y-4">
            {result.results.map(
              (
                questionResult: QuizQuestionResult,
                index: number,
              ) => {
                const question =
                  getQuestionById(
                    questions,
                    questionResult.questionId,
                  );

                if (!question) {
                  return null;
                }

                return (
                  <ResultQuestion
                    key={
                      questionResult.questionId
                    }
                    question={question}
                    questionNumber={
                      index + 1
                    }
                    selectedAnswer={
                      questionResult.selectedAnswer
                    }
                    isCorrect={
                      questionResult.isCorrect
                    }
                  />
                );
              },
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   RESULT QUESTION
========================================================= */

type ResultQuestionProps = {
  question: PracticeQuestion;
  questionNumber: number;
  selectedAnswer:
    QuizQuestionResult["selectedAnswer"];
  isCorrect: boolean;
};

function ResultQuestion({
  question,
  questionNumber,
  selectedAnswer,
  isCorrect,
}: ResultQuestionProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-start gap-3">
        {isCorrect ? (
          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600" />
        ) : (
          <XCircle className="mt-0.5 size-5 shrink-0 text-red-600" />
        )}

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-muted-foreground">
            Question {questionNumber}
          </p>

          <h3 className="mt-1 text-base font-semibold text-foreground">
            {question.question}
          </h3>

          {/* Options */}
          <div className="mt-4 space-y-2">
            {question.options.map(
              (option) => {
                const isSelected =
                  option.id ===
                  selectedAnswer;

                const isCorrectAnswer =
                  option.id ===
                  question.correctAnswer;

                return (
                  <div
                    key={option.id}
                    className={[
                      "rounded-lg border px-3 py-2 text-sm",

                      isCorrectAnswer
                        ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400"

                        : isSelected
                          ? "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400"

                          : "border-border text-muted-foreground",
                    ].join(" ")}
                  >
                    <span className="font-semibold">
                      {option.id}.
                    </span>{" "}
                    {option.text}
                  </div>
                );
              },
            )}
          </div>

          {/* Explanation */}
          <div className="mt-4 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Explanation:{" "}
            </span>

            {question.explanation}
          </div>
        </div>
      </div>
    </article>
  );
}