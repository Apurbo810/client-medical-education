"use client";

import { useMemo, useState } from "react";

import type {
  ResultExamType,
  StudentExamResult,
} from "@/types/student/results";

import { studentExamResults } from "@/data/student-results";

import {
  filterResults,
  sortResultsByDate,
} from "@/lib/student-results";

import {
  ResultsFilter,
  type ResultsFilterType,
  type ResultsSort,
} from "./results-filter";

import { ResultsHeader } from "./results-header";
import { ResultsStats } from "./results-stats";
import { ResultsList } from "./results-list";
import { ResultsTrend } from "./results-trend";
import { ResultsGradeDistribution } from "./results-grade-distribution";
import { ResultsTips } from "./results-tips";

interface ResultsPageProps {
  studentId?: string;
  results?: StudentExamResult[];
}

export function ResultsPage({
  studentId = "student-1",
  results = studentExamResults,
}: ResultsPageProps) {
  const [activeFilter, setActiveFilter] =
    useState<ResultsFilterType>("all");

  const [sort, setSort] =
    useState<ResultsSort>("newest");

  /* =========================================================
     STUDENT RESULTS
  ========================================================= */

  const studentResults = useMemo(() => {
    return results.filter(
      (result) =>
        result.studentId === studentId &&
        result.status === "completed",
    );
  }, [results, studentId]);

  /* =========================================================
     FILTERED RESULTS
  ========================================================= */

  const filteredResults = useMemo(() => {
    const filtered = filterResults(
      studentResults,
      activeFilter,
    );

    return sortResults(
      filtered,
      sort,
    );
  }, [
    studentResults,
    activeFilter,
    sort,
  ]);

  /* =========================================================
     STATISTICS
  ========================================================= */

  const statistics = useMemo(() => {
    const totalExams =
      studentResults.length;

    const overallPercentage =
      calculateAverage(
        studentResults,
      );

    const practiceResults =
      studentResults.filter(
        (result) =>
          result.type === "practice",
      );

    const mockResults =
      studentResults.filter(
        (result) =>
          result.type === "mock",
      );

    return {
      totalExams,

      overallPercentage,

      practiceCount:
        practiceResults.length,

      practiceAverage:
        calculateAverage(
          practiceResults,
        ),

      mockCount:
        mockResults.length,

      mockAverage:
        calculateAverage(
          mockResults,
        ),
    };
  }, [studentResults]);

  /* =========================================================
     PAGE
  ========================================================= */

  return (
    <main className="results-page">
      <div className="results-container">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <ResultsHeader
          completedCount={
            statistics.totalExams
          }
          averagePercentage={
            statistics.overallPercentage
          }
        />

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <ResultsStats
          overallPercentage={
            statistics.overallPercentage
          }
          totalExams={
            statistics.totalExams
          }
          practiceCount={
            statistics.practiceCount
          }
          practiceAverage={
            statistics.practiceAverage
          }
          mockCount={
            statistics.mockCount
          }
          mockAverage={
            statistics.mockAverage
          }
        />

        {/* =====================================================
            FILTER + SORT
        ===================================================== */}

        <ResultsFilter
          activeFilter={
            activeFilter
          }
          sort={sort}
          onFilterChange={
            setActiveFilter
          }
          onSortChange={setSort}
        />

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="results-content">
          {/* ===================================================
              MAIN RESULTS
          =================================================== */}

          <div className="results-main">
            <ResultsList
              results={
                filteredResults
              }
            />
          </div>

          {/* ===================================================
              SIDEBAR
          =================================================== */}

          <aside className="results-sidebar">
            <ResultsTrend
              results={studentResults}
            />

            <ResultsGradeDistribution
              results={studentResults}
            />

            <ResultsTips
              averagePercentage={
                statistics.overallPercentage
              }
            />
          </aside>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   AVERAGE
========================================================= */

function calculateAverage(
  results: StudentExamResult[],
): number {
  if (results.length === 0) {
    return 0;
  }

  const total = results.reduce(
    (sum, result) =>
      sum + result.percentage,
    0,
  );

  return Math.round(
    total / results.length,
  );
}

/* =========================================================
   SORT
========================================================= */

function sortResults(
  results: StudentExamResult[],
  sort: ResultsSort,
): StudentExamResult[] {
  switch (sort) {
    case "newest":
      return sortResultsByDate(
        results,
      );

    case "oldest":
      return [
        ...sortResultsByDate(
          results,
        ),
      ].reverse();

    case "highest":
      return [...results].sort(
        (a, b) =>
          b.percentage -
          a.percentage,
      );

    case "lowest":
      return [...results].sort(
        (a, b) =>
          a.percentage -
          b.percentage,
      );

    default:
      return results;
  }
}