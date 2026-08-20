"use client";

import type {
  PracticeQuestion,
  QuestionOption,
} from "@/types/practice-question";

import { QuizOption } from "./quiz-option";

interface QuizQuestionProps {
  question: PracticeQuestion;
  selectedAnswer: QuestionOption["id"] | null;
  onAnswerChange: (
    answer: QuestionOption["id"],
  ) => void;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onAnswerChange,
}: QuizQuestionProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6 lg:p-8">
      {/* Question */}
      <div>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {question.category}
        </span>

        <h1 className="mt-2 text-lg font-semibold leading-relaxed text-foreground sm:text-xl lg:text-2xl">
          {question.question}
        </h1>
      </div>

      {/* Options */}
      <div className="mt-6 space-y-3">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            option={option}
            selected={selectedAnswer === option.id}
            onSelect={onAnswerChange}
          />
        ))}
      </div>
    </article>
  );
}