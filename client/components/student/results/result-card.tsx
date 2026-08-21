"use client";

import Link from "next/link";
import {
  Award,
  Brain,
  CheckCircle2,
  Clock3,
  FileText,
  Target,
  XCircle,
} from "lucide-react";

import type {
  ResultExamType,
  ResultGrade,
  ResultPassChance,
  StudentExamResult,
} from "@/types/student/results";

interface ResultCardProps {
  result: StudentExamResult;
}

/* =========================================================
   HELPERS
========================================================= */

function getExamIcon(
  type: ResultExamType,
) {
  switch (type) {
    case "mock":
      return Award;

    case "cat":
      return Brain;

    case "practice":
    default:
      return FileText;
  }
}

function getExamTypeLabel(
  type: ResultExamType,
) {
  switch (type) {
    case "mock":
      return "Mock Exam";

    case "cat":
      return "CAT";

    case "practice":
    default:
      return "Practice";
  }
}

function getGradeClass(
  grade: ResultGrade,
) {
  switch (grade) {
    case "A":
      return "result-grade result-grade-a";

    case "B":
      return "result-grade result-grade-b";

    case "C":
      return "result-grade result-grade-c";

    case "D":
      return "result-grade result-grade-d";

    case "F":
      return "result-grade result-grade-f";

    default:
      return "result-grade";
  }
}

function getPassChanceClass(
  passChance: ResultPassChance,
) {
  switch (passChance) {
    case "HIGH":
      return "result-pass-chance result-pass-high";

    case "BORDERLINE":
      return "result-pass-chance result-pass-borderline";

    case "LOW":
      return "result-pass-chance result-pass-low";

    default:
      return "result-pass-chance";
  }
}

function getPassChanceLabel(
  passChance: ResultPassChance,
) {
  switch (passChance) {
    case "HIGH":
      return "High Chance";

    case "BORDERLINE":
      return "Borderline";

    case "LOW":
      return "Low Chance";

    default:
      return passChance;
  }
}

function formatDate(
  date: string,
) {
  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  ).format(new Date(date));
}

/* =========================================================
   COMPONENT
========================================================= */

export function ResultCard({
  result,
}: ResultCardProps) {
  const Icon = getExamIcon(
    result.type,
  );

  return (
    <article className="result-card">
      <div className="result-card-content">
        {/* ===================================================
            EXAM INFORMATION
        =================================================== */}

        <div className="result-card-main">
          <div className="flex items-start gap-3">
            {/* Icon */}

            <div
              className={[
                "result-card-icon",
                result.type === "practice"
                  ? "result-card-icon-practice"
                  : "",
                result.type === "mock"
                  ? "result-card-icon-mock"
                  : "",
                result.type === "cat"
                  ? "result-card-icon-cat"
                  : "",
              ].join(" ")}
            >
              <Icon className="size-5" />
            </div>

            {/* Title */}
            <div className="min-w-0 flex-1">
              <span
                className={[
                  "result-card-type",
                  result.type === "practice"
                    ? "result-card-type-practice"
                    : "",
                  result.type === "mock"
                    ? "result-card-type-mock"
                    : "",
                  result.type === "cat"
                    ? "result-card-type-cat"
                    : "",
                ].join(" ")}
              >
                {getExamTypeLabel(
                  result.type,
                )}
              </span>

              <h3 className="result-card-title">
                {result.title}
              </h3>

              {/* Meta */}
              <div className="result-card-meta">
                <span>
                  {formatDate(
                    result.completedAt,
                  )}
                </span>

                <span className="result-card-meta-separator">
                  •
                </span>

                <span>
                  {result.totalQuestions}{" "}
                  Questions
                </span>

                <span className="result-card-meta-separator">
                  •
                </span>

                <span className="inline-flex items-center gap-1">
                  <Clock3 className="size-3.5" />
                  {result.duration} min
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            SCORE
        =================================================== */}

        <div className="result-card-score">
          {/* Percentage */}

          <div className="result-score-ring bg-primary/10">
            <div className="result-score-ring-inner">
              <span className="result-score-value">
                {result.percentage}%
              </span>
            </div>
          </div>

          {/* Correct / Incorrect */}

          <div className="result-answer-stats">
            <span className="result-correct">
              <CheckCircle2 className="size-4" />

              {result.correctAnswers} Correct
            </span>

            <span className="result-incorrect">
              <XCircle className="size-4" />

              {result.incorrectAnswers} Incorrect
            </span>
          </div>

          {/* Grade */}

          <div className={getGradeClass(result.grade)}>
            <span className="result-grade-label">
              {result.grade}
            </span>

            <span className="result-grade-text">
              Grade
            </span>
          </div>

          {/* Pass Chance */}

          <div
            className={getPassChanceClass(
              result.passChance,
            )}
          >
            <span className="result-pass-chance-label">
              {getPassChanceLabel(
                result.passChance,
              )}
            </span>

            <span className="result-pass-chance-description">
              Pass chance
            </span>
          </div>

          {/* View Result */}

          <Link
            href={`/student/practice/result/${result.examId}`}
            className="result-action"
          >
            <Target className="size-4" />

            View Result
          </Link>
        </div>
      </div>
    </article>
  );
}