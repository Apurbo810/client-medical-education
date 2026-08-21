"use client";

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export function QuizProgress({
  currentQuestion,
  totalQuestions,
}: QuizProgressProps) {
  const progress =
    totalQuestions > 0
      ? (currentQuestion / totalQuestions) * 100
      : 0;

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-foreground">
          Question {currentQuestion} of {totalQuestions}
        </span>

        <span className="text-sm font-medium text-muted-foreground">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}