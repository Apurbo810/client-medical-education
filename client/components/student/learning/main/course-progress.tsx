"use client";

import { CheckCircle2 } from "lucide-react";

interface CourseProgressProps {
  progress: number;
  completedWeeks: number;
  totalWeeks: number;
}

export function CourseProgress({
  progress,
  completedWeeks,
  totalWeeks,
}: CourseProgressProps) {
  return (
    <div className="student-learning-progress-box">
      <div className="student-learning-progress-header">
        <span className="student-learning-progress-label">
          Course Progress
        </span>

        <span className="student-learning-progress-value">
          {progress}%
        </span>
      </div>

      <div className="student-learning-progress-track">
        <div
          className="student-learning-progress-fill"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <CheckCircle2 className="size-3.5" />

        {completedWeeks}/{totalWeeks} weeks completed
      </div>
    </div>
  );
}