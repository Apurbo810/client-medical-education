"use client";

interface QuizSettingsProps {
  questionCount: number;
  onQuestionCountChange: (
    count: number,
  ) => void;
}

const questionCounts = [10, 20, 30, 50];

export function QuizSettings({
  questionCount,
  onQuestionCountChange,
}: QuizSettingsProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Quiz Settings
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Choose how many questions you want to answer.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {questionCounts.map((count) => (
          <button
            key={count}
            type="button"
            onClick={() =>
              onQuestionCountChange(count)
            }
            className={[
              "rounded-xl border px-5 py-2.5 text-sm font-medium transition-all",
              questionCount === count
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
            ].join(" ")}
          >
            {count} Questions
          </button>
        ))}
      </div>
    </section>
  );
}