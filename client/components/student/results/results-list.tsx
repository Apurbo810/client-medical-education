"use client";

import { ClipboardList } from "lucide-react";

import type { StudentExamResult } from "@/types/student/results";

import { ResultCard } from "./result-card";

interface ResultsListProps {
  results: StudentExamResult[];
}

export function ResultsList({
  results,
}: ResultsListProps) {
  /* =========================================================
     EMPTY STATE
  ========================================================= */

  if (results.length === 0) {
    return (
      <div className="results-empty">
        <div className="results-empty-icon">
          <ClipboardList className="size-6" />
        </div>

        <h2 className="results-empty-title">
          No results found
        </h2>

        <p className="results-empty-description">
          You have not completed any exams in this
          category yet. Complete a practice test,
          mock exam, or CAT assessment and your
          result will appear here.
        </p>
      </div>
    );
  }

  /* =========================================================
     RESULT LIST
  ========================================================= */

  return (
    <div className="results-list">
      {results.map((result) => (
        <ResultCard
          key={result.id}
          result={result}
        />
      ))}
    </div>
  );
}