"use client";

import {
  BookOpenCheck,
  CheckCircle2,
  Target,
  TrendingUp,
} from "lucide-react";

interface ResultsTipsProps {
  averagePercentage: number;
}

export function ResultsTips({
  averagePercentage,
}: ResultsTipsProps) {
  const tips =
    averagePercentage >= 75
      ? [
          {
            icon: CheckCircle2,
            text: "Your performance is strong. Keep practicing consistently.",
          },
          {
            icon: Target,
            text: "Focus on maintaining your accuracy under timed conditions.",
          },
          {
            icon: BookOpenCheck,
            text: "Review incorrect answers to strengthen weak areas.",
          },
          {
            icon: TrendingUp,
            text: "Use mock exams regularly to measure your progress.",
          },
        ]
      : [
          {
            icon: BookOpenCheck,
            text: "Review the questions you answered incorrectly.",
          },
          {
            icon: Target,
            text: "Focus your practice on your weakest topics.",
          },
          {
            icon: TrendingUp,
            text: "Practice consistently instead of doing everything at once.",
          },
          {
            icon: CheckCircle2,
            text: "Try another assessment after reviewing your mistakes.",
          },
        ];

  return (
    <section className="results-sidebar-card">
      <div>
        <h2 className="results-sidebar-title">
          Study Tips
        </h2>

        <p className="results-sidebar-description">
          Suggestions based on your overall
          performance.
        </p>
      </div>

      <div className="results-tips">
        {tips.map(
          ({
            icon: Icon,
            text,
          }) => (
            <div
              key={text}
              className="results-tip"
            >
              <span className="results-tip-icon">
                <Icon className="size-3" />
              </span>

              <p className="results-tip-text">
                {text}
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}