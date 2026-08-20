"use client";

import {
  CheckCircle2,
  Home,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import type { QuizPassChance } from "@/types/practice-question";

interface QuizSummaryProps {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  passChance: QuizPassChance;
  onRetry?: () => void;
}

const passChanceConfig: Record<
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
      "Your performance is above the high-confidence threshold.",
    className:
      "bg-green-500/10 text-green-600 border-green-500/20",
  },

  BORDERLINE: {
    label: "Borderline",
    description:
      "Your performance is borderline. More practice is recommended.",
    className:
      "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
  },

  LOW: {
    label: "Low Chance to Pass",
    description:
      "Your performance is below the recommended passing range.",
    className:
      "bg-red-500/10 text-red-600 border-red-500/20",
  },
};

export function QuizSummary({
  totalQuestions,
  correctAnswers,
  percentage,
  passChance,
  onRetry,
}: QuizSummaryProps) {
  const incorrectAnswers =
    totalQuestions - correctAnswers;

  const config = passChanceConfig[passChance];

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {/* Header */}
      <div className="text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Trophy className="size-8" />
        </div>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Quiz Complete
        </h1>

        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Here is your performance summary.
        </p>
      </div>

      {/* Score */}
      <div className="mt-8 flex justify-center">
        <div className="flex size-36 flex-col items-center justify-center rounded-full bg-primary/10">
          <span className="text-4xl font-bold text-primary">
            {percentage}%
          </span>

          <span className="mt-1 text-sm text-muted-foreground">
            Score
          </span>
        </div>
      </div>

      {/* Pass Chance */}
      <div
        className={[
          "mx-auto mt-6 max-w-xl rounded-xl border p-4 text-center",
          config.className,
        ].join(" ")}
      >
        <p className="font-semibold">
          {config.label}
        </p>

        <p className="mt-1 text-sm opacity-80">
          {config.description}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Total */}
        <div className="rounded-xl bg-muted/50 p-5 text-center">
          <p className="text-3xl font-bold text-foreground">
            {totalQuestions}
          </p>

          <p className="mt-1 text-sm text-muted-foreground">
            Questions
          </p>
        </div>

        {/* Correct */}
        <div className="rounded-xl bg-green-500/5 p-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="size-5 text-green-500" />

            <p className="text-3xl font-bold text-foreground">
              {correctAnswers}
            </p>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Correct
          </p>
        </div>

        {/* Incorrect */}
        <div className="rounded-xl bg-destructive/5 p-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <XCircle className="size-5 text-destructive" />

            <p className="text-3xl font-bold text-foreground">
              {incorrectAnswers}
            </p>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            Incorrect
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <RotateCcw className="size-4" />
            Retake Quiz
          </button>
        )}

        <Link
          href="/student/practice"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Home className="size-4" />
          Back to Practice
        </Link>
      </div>
    </section>
  );
}