"use client";

import type {
  ResultGrade,
  StudentExamResult,
} from "@/types/student/results";

interface ResultsGradeDistributionProps {
  results: StudentExamResult[];
}

const grades: ResultGrade[] = [
  "A",
  "B",
  "C",
  "D",
  "F",
];

export function ResultsGradeDistribution({
  results,
}: ResultsGradeDistributionProps) {
  const totalResults = results.length;

  const gradeCounts: Record<
    ResultGrade,
    number
  > = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0,
  };

  results.forEach((result) => {
    gradeCounts[result.grade]++;
  });

  return (
    <section className="results-sidebar-card">
      <div>
        <h2 className="results-sidebar-title">
          Grade Distribution
        </h2>

        <p className="results-sidebar-description">
          Your completed exam grades.
        </p>
      </div>

      <div className="results-grade-list">
        {grades.map((grade) => {
          const count =
            gradeCounts[grade];

          const percentage =
            totalResults > 0
              ? Math.round(
                  (count / totalResults) *
                    100,
                )
              : 0;

          return (
            <div
              key={grade}
              className="results-grade-row"
            >
              {/* Grade */}
              <span className="results-grade-row-label">
                {grade}
              </span>

              {/* Progress */}
              <div className="results-grade-row-track">
                <div
                  className={[
                    "results-grade-row-progress",
                    getProgressClass(
                      grade,
                    ),
                  ].join(" ")}
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              {/* Count */}
              <span className="results-grade-row-value">
                {count}
              </span>
            </div>
          );
        })}
      </div>

      {totalResults === 0 && (
        <p className="mt-4 text-xs text-muted-foreground">
          Complete an exam to see your
          grade distribution.
        </p>
      )}
    </section>
  );
}

/* =========================================================
   PROGRESS COLOR
========================================================= */

function getProgressClass(
  grade: ResultGrade,
): string {
  switch (grade) {
    case "A":
      return "results-grade-progress-a";

    case "B":
      return "results-grade-progress-b";

    case "C":
      return "results-grade-progress-c";

    case "D":
      return "results-grade-progress-d";

    case "F":
      return "results-grade-progress-f";

    default:
      return "";
  }
}