"use client";

import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  hasAnswer: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export function QuizNavigation({
  currentQuestion,
  totalQuestions,
  hasAnswer,
  onPrevious,
  onNext,
  onFinish,
}: QuizNavigationProps) {
  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion =
    currentQuestion === totalQuestions - 1;

  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
      {/* Previous */}
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
      >
        <ArrowLeft className="size-4" />

        <span className="hidden sm:inline">
          Previous
        </span>
      </button>

      {/* Next / Finish */}
      {isLastQuestion ? (
        <button
          type="button"
          onClick={onFinish}
          disabled={!hasAnswer}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
        >
          <Check className="size-4" />

          <span>
            Submit Quiz
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          disabled={!hasAnswer}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
        >
          <span>
            Next
          </span>

          <ArrowRight className="size-4" />
        </button>
      )}
    </div>
  );
}