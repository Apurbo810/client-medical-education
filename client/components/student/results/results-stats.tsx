"use client";

import {
  Award,
  BarChart3,
  FileCheck2,
  Target,
} from "lucide-react";

interface ResultsStatsProps {
  overallPercentage: number;
  totalExams: number;
  practiceCount: number;
  practiceAverage: number;
  mockCount: number;
  mockAverage: number;
}

export function ResultsStats({
  overallPercentage,
  totalExams,
  practiceCount,
  practiceAverage,
  mockCount,
  mockAverage,
}: ResultsStatsProps) {
  return (
    <section className="results-stats">
      {/* =====================================================
          OVERALL
      ===================================================== */}

      <div className="results-stat-card">
        <div className="results-stat-header">
          <div>
            <p className="results-stat-label">
              Overall Average
            </p>

            <p className="results-stat-value">
              {overallPercentage}%
            </p>

            <p className="results-stat-description">
              Across all completed exams
            </p>
          </div>

          <div className="results-stat-icon">
            <Target className="size-5" />
          </div>
        </div>
      </div>

      {/* =====================================================
          TOTAL EXAMS
      ===================================================== */}

      <div className="results-stat-card">
        <div className="results-stat-header">
          <div>
            <p className="results-stat-label">
              Total Exams
            </p>

            <p className="results-stat-value">
              {totalExams}
            </p>

            <p className="results-stat-description">
              Completed assessments
            </p>
          </div>

          <div className="results-stat-icon">
            <FileCheck2 className="size-5" />
          </div>
        </div>
      </div>

      {/* =====================================================
          PRACTICE
      ===================================================== */}

      <div className="results-stat-card">
        <div className="results-stat-header">
          <div>
            <p className="results-stat-label">
              Practice Tests
            </p>

            <p className="results-stat-value">
              {practiceCount}
            </p>

            <p className="results-stat-description">
              Average: {practiceAverage}%
            </p>
          </div>

          <div className="results-stat-icon">
            <BarChart3 className="size-5" />
          </div>
        </div>
      </div>

      {/* =====================================================
          MOCK EXAMS
      ===================================================== */}

      <div className="results-stat-card">
        <div className="results-stat-header">
          <div>
            <p className="results-stat-label">
              Mock Exams
            </p>

            <p className="results-stat-value">
              {mockCount}
            </p>

            <p className="results-stat-description">
              Average: {mockAverage}%
            </p>
          </div>

          <div className="results-stat-icon">
            <Award className="size-5" />
          </div>
        </div>
      </div>
    </section>
  );
}