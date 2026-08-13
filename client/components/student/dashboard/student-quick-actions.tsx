"use client";

import {
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Play,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/common/section";
import { useStagger } from "@/hooks/gsap";

import type { StudentDashboardData } from "@/types/student/student-dashboard";

interface StudentQuickActionsProps {
  data: StudentDashboardData["continueLearning"];
}

export function StudentQuickActions({
  data,
}: StudentQuickActionsProps) {
  const actionsRef = useStagger({
    y: 24,
    duration: 0.6,
    stagger: 0.08,
    start: "top 90%",
    once: true,
  });

  return (
    <Section
      spacing="sm"
      className="student-quick-actions-section"
    >
      <div
        ref={actionsRef}
        className="student-quick-actions"
      >
        {/* Continue Learning */}
        <article
          data-animate
          className="student-continue-card"
        >
          <div className="student-continue-content">
            <div className="student-continue-label">
              <Sparkles className="size-4" />
              Continue your preparation
            </div>

            <p className="student-continue-course">
              {data.courseTitle}
            </p>

            <h2 className="student-continue-title">
              {data.lessonTitle}
            </h2>

            <div className="student-continue-progress-row">
              <div className="student-continue-progress">
                <div
                  className="student-continue-progress-value"
                  style={{
                    width: `${data.progress}%`,
                  }}
                />
              </div>

              <span className="student-continue-progress-text">
                {data.progress}%
              </span>
            </div>

            <div className="student-continue-bottom">
              <span className="student-continue-time">
                <Clock3 className="size-4" />
                {data.remainingMinutes} min remaining
              </span>

              <Link
                href={data.href}
                className="student-continue-button"
              >
                Continue
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </article>

        {/* Quick Actions */}
        <div className="student-quick-action-grid">
          <Link
            data-animate
            href="/student/practice"
            className="student-quick-action"
          >
            <span className="student-quick-action-icon student-quick-action-icon-primary">
              <ClipboardCheck className="size-5" />
            </span>

            <span className="student-quick-action-content">
              <span className="student-quick-action-title">
                Practice Questions
              </span>

              <span className="student-quick-action-description">
                Test your knowledge
              </span>
            </span>

            <ArrowRight className="student-quick-action-arrow" />
          </Link>

          <Link
            data-animate
            href="/student/learning"
            className="student-quick-action"
          >
            <span className="student-quick-action-icon student-quick-action-icon-teal">
              <Play className="size-5" />
            </span>

            <span className="student-quick-action-content">
              <span className="student-quick-action-title">
                Watch Lectures
              </span>

              <span className="student-quick-action-description">
                Continue learning
              </span>
            </span>

            <ArrowRight className="student-quick-action-arrow" />
          </Link>
        </div>
      </div>
    </Section>
  );
}