"use client";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Flame,
  Target,
} from "lucide-react";

import type { StudentDashboardData } from "@/types/student/student-dashboard";

import { useStagger } from "@/hooks/gsap";

interface StudentWelcomeProps {
  data: StudentDashboardData;
}

export function StudentWelcome({
  data,
}: StudentWelcomeProps) {
  const {
    student,
    subscription,
    streak,
    readiness,
  } = data;

  const welcomeRef = useStagger({
    y: 24,
    duration: 0.7,
    stagger: 0.1,
    start: "top 90%",
    once: true,
  });

  return (
    <section
      ref={welcomeRef}
      className="student-welcome"
    >
      <div className="student-welcome-content">
        {/* Left */}
        <div className="student-welcome-main">
          <div
            data-animate
            className="student-welcome-badges"
          >
            <span className="student-welcome-streak">
              <Flame className="size-3.5" />
              {streak.days}-day streak
            </span>

            <span className="student-welcome-plan">
              {subscription.plan}
            </span>
          </div>

          <h1
            data-animate
            className="student-welcome-title"
          >
            Welcome back, {student.name}!{" "}
            <span aria-hidden="true">👋</span>
          </h1>

          <p
            data-animate
            className="student-welcome-description"
          >
            Albert&apos;s Road to NCLEX — Complete Prep
          </p>

          <div
            data-animate
            className="student-welcome-meta"
          >
            <div className="student-welcome-meta-item">
              <CalendarDays className="student-welcome-meta-icon" />

              <span>
                Ends:{" "}
                <strong className="student-welcome-meta-value">
                  {subscription.expiresAt}
                </strong>
              </span>
            </div>

            <div className="student-welcome-meta-item">
              <Clock3 className="student-welcome-meta-icon" />

              <span>
                <strong className="student-welcome-meta-value">
                  {subscription.daysRemaining} days
                </strong>{" "}
                remaining
              </span>
            </div>

            <div className="student-welcome-meta-item">
              <Target className="student-welcome-meta-icon" />

              <span>
                Readiness:{" "}
                <strong className="student-welcome-meta-value">
                  {readiness.level}
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          data-animate
          className="student-welcome-action"
        >
          <div className="student-welcome-expiry">
            <span className="student-welcome-expiry-number">
              {subscription.daysRemaining}
            </span>

            <span className="student-welcome-expiry-label">
              days until expiry
            </span>
          </div>

          <button
            type="button"
            className="student-welcome-button"
          >
            Continue Studying
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}