"use client";

import {
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";

import type {
  QuizPassChance,
} from "@/types/practice-question";

interface QuizSummaryProps {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  passChance: QuizPassChance;
  isMockExam?: boolean;
  onRetry: () => void;
}

const passChanceInfo: Record<
  QuizPassChance,
  {
    label: string;
    description: string;
    className: string;
  }
> = {
  HIGH: {
    label: "High Chance to Pass",
    description:
      "Your performance indicates a high chance of passing.",
    className:
      "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400",
  },

  BORDERLINE: {
    label: "Borderline",
    description:
      "Your performance is borderline. More practice is recommended.",
    className:
      "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },

  LOW: {
    label: "Low Chance to Pass",
    description:
      "Your performance indicates a low chance of passing. More preparation is recommended.",
    className:
      "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-400",
  },
};

export function QuizSummary({
  totalQuestions,
  correctAnswers,
  percentage,
  passChance,
  isMockExam = false,
  onRetry,
}: QuizSummaryProps) {
  const incorrectAnswers =
    totalQuestions - correctAnswers;

  const passInfo =
    passChanceInfo[passChance];

  return (
    <section className="mx-auto w-full max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Trophy className="size-7" />
        </div>

        <h1 className="mt-4 text-2xl font-bold text-foreground">
          {isMockExam
            ? "Mock Exam Complete"
            : "Quiz Complete"}
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          {isMockExam
            ? "Here is your mock exam performance."
            : "Here is your practice performance summary."}
        </p>
      </div>

      {/* =====================================================
          SCORE
      ===================================================== */}

      <div className="mt-8 flex justify-center">
        <div className="flex size-28 flex-col items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="text-3xl font-bold">
            {percentage}%
          </span>

          <span className="mt-1 text-xs text-muted-foreground">
            Score
          </span>
        </div>
      </div>

      {/* =====================================================
          PASS CHANCE
      ===================================================== */}

      <div
        className={[
          "mx-auto mt-6 max-w-lg rounded-xl border p-4 text-center",
          passInfo.className,
        ].join(" ")}
      >
        <p className="font-semibold">
          {passInfo.label}
        </p>

        <p className="mt-1 text-sm opacity-80">
          {passInfo.description}
        </p>
      </div>

      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Total */}
        <div className="rounded-xl bg-muted/50 p-4 text-center">
          <p className="text-3xl font-bold text-foreground">
            {totalQuestions}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Questions
          </p>
        </div>

        {/* Correct */}
        <div className="rounded-xl bg-green-500/5 p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />

            <p className="text-2xl font-bold text-foreground">
              {correctAnswers}
            </p>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Correct
          </p>
        </div>

        {/* Incorrect */}
        <div className="rounded-xl bg-destructive/5 p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <XCircle className="size-5 text-destructive" />

            <p className="text-2xl font-bold text-foreground">
              {incorrectAnswers}
            </p>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Incorrect
          </p>
        </div>
      </div>

      {/* =====================================================
          ACTION
      ===================================================== */}

      {!isMockExam && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onRetry}
            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <RotateCcw className="size-4" />
            Retake Quiz
          </button>
        </div>
      )}
    </section>
  );
}