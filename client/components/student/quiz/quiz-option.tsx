"use client";

import type { QuestionOption } from "@/types/practice-question";

interface QuizOptionProps {
  option: QuestionOption;
  selected: boolean;
  onSelect: (optionId: QuestionOption["id"]) => void;
}

export function QuizOption({
  option,
  selected,
  onSelect,
}: QuizOptionProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={[
        "practice-option",
        selected && "practice-option-selected",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Option Letter */}
      <span
        className={[
          "flex size-10 shrink-0 items-center justify-center rounded-full",
          "text-sm font-semibold transition-colors",
          selected
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground",
        ].join(" ")}
      >
        {option.id}
      </span>

      {/* Option Text */}
      <span
        className={[
          "pt-1 text-left text-sm leading-6 sm:text-base",
          selected
            ? "font-medium text-foreground"
            : "text-foreground",
        ].join(" ")}
      >
        {option.text}
      </span>
    </button>
  );
}