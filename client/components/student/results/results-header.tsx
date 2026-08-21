"use client";

import {
  Award,
  TrendingUp,
} from "lucide-react";

interface ResultsHeaderProps {
  completedCount: number;
  averagePercentage: number;
}

export function ResultsHeader({
  completedCount,
  averagePercentage,
}: ResultsHeaderProps) {
  return (
    <header className="results-header">
      <div className="results-header-content">
        {/* Main heading */}
        <div className="results-header-main">
          <span className="results-header-badge">
            Performance
          </span>

          <h1 className="results-title">
            Results & Grades
          </h1>

          <p className="results-description">
            Review your performance across practice
            tests, mock exams, and CAT assessments.
          </p>
        </div>

        {/* Motivation */}
        <div className="results-motivation">
          <div className="results-motivation-icon">
            {averagePercentage >= 75 ? (
              <Award className="size-5" />
            ) : (
              <TrendingUp className="size-5" />
            )}
          </div>

          <div className="results-motivation-content">
            <p className="results-motivation-title">
              {averagePercentage >= 75
                ? "Great work! Keep it up."
                : "Keep practicing. You can improve."}
            </p>

            <p className="results-motivation-description">
              {completedCount}{" "}
              {completedCount === 1
                ? "exam"
                : "exams"}{" "}
              completed
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}