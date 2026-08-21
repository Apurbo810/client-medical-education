"use client";

import {
  Activity,
  ClipboardCheck,
  ClipboardList,
  Trophy,
} from "lucide-react";

import { Section } from "@/components/common/section";
import { useStagger } from "@/hooks/gsap";

import type { StudentDashboardData } from "@/types/student/student-dashboard";

interface StudentStatsProps {
  stats: StudentDashboardData["stats"];
}

export function StudentStats({
  stats,
}: StudentStatsProps) {
  const statsRef = useStagger({
    y: 24,
    duration: 0.6,
    stagger: 0.08,
    start: "top 90%",
    once: true,
  });

  const questionProgress =
    stats.questionsTotal > 0
      ? Math.min(
          (stats.questionsSolved /
            stats.questionsTotal) *
            100,
          100,
        )
      : 0;

  const mockExamProgress =
    stats.mockExamsTotal > 0
      ? Math.min(
          (stats.mockExamsCompleted /
            stats.mockExamsTotal) *
            100,
          100,
        )
      : 0;

  return (
    <Section
      spacing="sm"
      className="student-stats-section"
    >
      <div
        ref={statsRef}
        className="student-stats-grid"
      >
        {/* Questions */}
        <article
          data-animate
          className="student-stat-card"
        >
          <div className="student-stat-icon student-stat-icon-blue">
            <ClipboardList className="size-5" />
          </div>

          <div className="student-stat-value">
            {stats.questionsSolved.toLocaleString()}
          </div>

          <p className="student-stat-label">
            Questions Solved
          </p>

          <p className="student-stat-subtext">
            {stats.questionsTotal > 0
              ? `of ${stats.questionsTotal.toLocaleString()}`
              : "No questions yet"}
          </p>

          <div className="student-stat-progress">
            <div
              className="student-stat-progress-value"
              style={{
                width: `${questionProgress}%`,
              }}
            />
          </div>
        </article>

        {/* Average Score */}
        <article
          data-animate
          className="student-stat-card"
        >
          <div className="student-stat-icon student-stat-icon-green">
            <Trophy className="size-5" />
          </div>

          <div className="student-stat-value">
            {stats.averageScore}%
          </div>

          <p className="student-stat-label">
            Average Score
          </p>

          <p className="student-stat-subtext">
            {stats.scoreChange > 0
              ? `+${stats.scoreChange}% this week`
              : "No change this week"}
          </p>

          <div className="student-stat-progress">
            <div
              className="student-stat-progress-value"
              style={{
                width: `${Math.min(
                  stats.averageScore,
                  100,
                )}%`,
              }}
            />
          </div>
        </article>

        {/* Mock Exams */}
        <article
          data-animate
          className="student-stat-card"
        >
          <div className="student-stat-icon student-stat-icon-orange">
            <ClipboardCheck className="size-5" />
          </div>

          <div className="student-stat-value">
            {stats.mockExamsCompleted}/
            {stats.mockExamsTotal}
          </div>

          <p className="student-stat-label">
            Mock Exams
          </p>

          <p className="student-stat-subtext">
            {stats.mockExamsTotal > 0
              ? "Completed"
              : "No exams yet"}
          </p>

          <div className="student-stat-progress">
            <div
              className="student-stat-progress-value"
              style={{
                width: `${mockExamProgress}%`,
              }}
            />
          </div>
        </article>

        {/* Readiness */}
        <article
          data-animate
          className="student-stat-card"
        >
          <div className="student-stat-icon student-stat-icon-teal">
            <Activity className="size-5" />
          </div>

          <div className="student-stat-value">
            {stats.readiness}
          </div>

          <p className="student-stat-label">
            Readiness
          </p>

          <p className="student-stat-subtext">
            {stats.readinessStatus}
          </p>

          <div className="student-stat-progress">
            <div
              className="student-stat-progress-value"
              style={{
                width:
                  stats.readiness === "High"
                    ? "88%"
                    : stats.readiness ===
                        "Getting Started"
                      ? "20%"
                      : "0%",
              }}
            />
          </div>
        </article>
      </div>
    </Section>
  );
}