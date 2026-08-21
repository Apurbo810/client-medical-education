"use client";

import type { StudentExamResult } from "@/types/student/results";

interface ResultsTrendProps {
  results: StudentExamResult[];
}

export function ResultsTrend({
  results,
}: ResultsTrendProps) {
  const sortedResults = [...results]
    .sort(
      (a, b) =>
        new Date(a.completedAt).getTime() -
        new Date(b.completedAt).getTime(),
    )
    .slice(-6);

  if (sortedResults.length === 0) {
    return (
      <section className="results-sidebar-card">
        <h2 className="results-sidebar-title">
          Performance Trend
        </h2>

        <p className="results-sidebar-description">
          Your recent exam performance.
        </p>

        <div className="results-trend">
          <div className="results-trend-placeholder">
            <span className="results-trend-placeholder-text">
              Complete an exam to see your trend.
            </span>
          </div>
        </div>
      </section>
    );
  }

  const width = 280;
  const height = 150;
  const paddingX = 18;
  const paddingY = 18;

  const chartWidth =
    width - paddingX * 2;

  const chartHeight =
    height - paddingY * 2;

  const points = sortedResults.map(
    (result, index) => {
      const x =
        sortedResults.length === 1
          ? width / 2
          : paddingX +
            (index /
              (sortedResults.length - 1)) *
              chartWidth;

      const y =
        paddingY +
        ((100 - result.percentage) /
          100) *
          chartHeight;

      return {
        x,
        y,
        result,
      };
    },
  );

  const path = points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`,
    )
    .join(" ");

  return (
    <section className="results-sidebar-card">
      <div>
        <h2 className="results-sidebar-title">
          Performance Trend
        </h2>

        <p className="results-sidebar-description">
          Your recent exam performance.
        </p>
      </div>

      <div className="results-trend">
        <div className="overflow-hidden rounded-xl bg-muted/30 p-2">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-48 w-full"
            role="img"
            aria-label="Performance trend"
          >
            {/* 100% line */}
            <line
              x1={paddingX}
              y1={paddingY}
              x2={width - paddingX}
              y2={paddingY}
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
              strokeDasharray="4 4"
            />

            {/* 50% line */}
            <line
              x1={paddingX}
              y1={height / 2}
              x2={width - paddingX}
              y2={height / 2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
              strokeDasharray="4 4"
            />

            {/* 0% line */}
            <line
              x1={paddingX}
              y1={height - paddingY}
              x2={width - paddingX}
              y2={height - paddingY}
              stroke="currentColor"
              strokeWidth="1"
              className="text-border"
              strokeDasharray="4 4"
            />

            {/* Trend line */}
            <path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            />

            {/* Points */}
            {points.map(
              ({
                x,
                y,
                result,
              }) => (
                <circle
                  key={result.id}
                  cx={x}
                  cy={y}
                  r="5"
                  fill="currentColor"
                  className="text-primary"
                />
              ),
            )}
          </svg>
        </div>

        {/* Result labels */}
        <div className="mt-3 flex items-center justify-between gap-2">
          {sortedResults.map(
            (result) => (
              <div
                key={result.id}
                className="min-w-0 text-center"
              >
                <p className="text-xs font-semibold text-foreground">
                  {result.percentage}%
                </p>

                <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
                  {getShortExamType(
                    result.type,
                  )}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SHORT TYPE LABEL
========================================================= */

function getShortExamType(
  type: StudentExamResult["type"],
): string {
  switch (type) {
    case "mock":
      return "Mock";

    case "cat":
      return "CAT";

    case "practice":
    default:
      return "Practice";
  }
}