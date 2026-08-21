"use client";

import {
  ArrowRight,
  ClipboardCheck,
  Clock3,
  Lock,
  Sparkles,
  Trophy,
} from "lucide-react";
import Link from "next/link";

import { Section } from "@/components/common/section";
import { useStagger } from "@/hooks/gsap";

import type { StudentDashboardData } from "@/types/student/student-dashboard";

interface StudentQuickActionsProps {
  data: StudentDashboardData["continueLearning"];
  hasCourseAccess: boolean;
}

export function StudentQuickActions({
  data,
  hasCourseAccess,
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
      spacing="none"
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

              {hasCourseAccess
                ? "Continue your preparation"
                : "Start your preparation"}
            </div>

            <p className="student-continue-course">
              {data.courseTitle}
            </p>

            <h2 className="student-continue-title">
              {data.lessonTitle}
            </h2>

            {hasCourseAccess ? (
              <>
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
              </>
            ) : (
              <div className="student-continue-bottom">
                <span className="student-continue-time">
                  <Lock className="size-4" />
                  Subscription required
                </span>

                <Link
                  href="/pricing"
                  className="student-continue-button"
                >
                  View Courses
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            )}
          </div>
        </article>

        {/* Quick Actions */}
        <div className="student-quick-action-grid">
          <Link
            data-animate
            href={
              hasCourseAccess
                ? "/student/practice"
                : "/pricing"
            }
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
                {hasCourseAccess
                  ? "Test your knowledge"
                  : "Subscribe to practice"}
              </span>
            </span>

            <ArrowRight className="student-quick-action-arrow" />
          </Link>

          <Link
            data-animate
            href="/student/results"
            className="student-quick-action"
          >
            <span className="student-quick-action-icon student-quick-action-icon-primary">
              <Trophy className="size-5" />
            </span>

            <span className="student-quick-action-content">
              <span className="student-quick-action-title">
                View Grades
              </span>

              <span className="student-quick-action-description">
                Review your performance
              </span>
            </span>

            <ArrowRight className="student-quick-action-arrow" />
          </Link>
        </div>
      </div>
    </Section>
  );
}