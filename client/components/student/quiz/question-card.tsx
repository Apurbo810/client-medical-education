"use client";

import type {
  PracticeQuestion,
  QuestionOption,
} from "@/types/practice-question";

interface QuestionCardProps {
  question: PracticeQuestion;
  selectedAnswer: QuestionOption["id"] | null;
  onAnswerChange: (
    answer: QuestionOption["id"],
  ) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswerChange,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </span>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary">
          {question.difficulty}
        </span>
      </div>

      <h2 className="text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
        {question.question}
      </h2>

      <div className="mt-6 space-y-3">
        {question.options.map((option) => {
          const selected =
            selectedAnswer === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                onAnswerChange(option.id)
              }
              className={[
                "practice-option",
                selected &&
                  "practice-option-selected",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className={[
                  "flex size-9 shrink-0 items-center justify-center rounded-full",
                  "text-sm font-semibold",
                  selected
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground",
                ].join(" ")}
              >
                {option.id}
              </span>

              <span className="pt-1 text-sm leading-6 text-foreground sm:text-base">
                {option.text}
              </span>
            </button>
          );
        })}
      </div>

      {question.category && (
        <div className="mt-6 border-t border-border pt-4">
          <span className="text-xs text-muted-foreground">
            Category:{" "}
            <span className="font-medium text-foreground">
              {question.category}
            </span>
          </span>
        </div>
      )}
    </article>
  );
}