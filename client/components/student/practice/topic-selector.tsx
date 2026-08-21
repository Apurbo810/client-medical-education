"use client";

interface TopicSelectorProps {
  topics: string[];
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
}

export function TopicSelector({
  topics,
  selectedTopic,
  onTopicChange,
}: TopicSelectorProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Select Topic
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Choose a topic or practice all topics.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() =>
            onTopicChange("all")
          }
          className={[
            "rounded-full border px-4 py-2 text-sm font-medium transition-all",
            selectedTopic === "all"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
          ].join(" ")}
        >
          All Topics
        </button>

        {topics.map((topic) => (
          <button
            key={topic}
            type="button"
            onClick={() =>
              onTopicChange(topic)
            }
            className={[
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              selectedTopic === topic
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
            ].join(" ")}
          >
            {topic}
          </button>
        ))}
      </div>
    </section>
  );
}