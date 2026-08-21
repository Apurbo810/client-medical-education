"use client";

import {
  CheckCircle2,
  ChevronDown,
  Lock,
} from "lucide-react";
import { useState } from "react";

import type { StudentCourseWeek } from "@/types/student/courses/student-course";

import { useStagger } from "@/hooks/gsap";

import { CourseWeekItem } from "./course-week-item";

interface CourseWeekProps {
  courseId: string;
  week: StudentCourseWeek;
}

export function CourseWeek({
  courseId,
  week,
}: CourseWeekProps) {
  const [open, setOpen] = useState(
    week.isUnlocked,
  );

  const itemsRef = useStagger({
    y: 14,
    duration: 0.5,
    stagger: 0.06,
    start: "top 95%",
    once: true,
  });

  const completed =
    week.isUnlocked &&
    week.progress === 100;

  return (
    <section
      className={[
        "student-learning-week",
        !week.isUnlocked
          ? "student-learning-week-locked"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Week Header */}
      <button
        type="button"
        disabled={!week.isUnlocked}
        onClick={() =>
          setOpen((value) => !value)
        }
        className="student-learning-week-header w-full text-left"
        aria-expanded={
          week.isUnlocked ? open : false
        }
      >
        {/* Week Number */}
        <div className="student-learning-week-number">
          {week.isUnlocked ? (
            week.week
          ) : (
            <Lock className="size-4" />
          )}
        </div>

        {/* Week Info */}
        <div className="student-learning-week-info">
          <div className="student-learning-week-title-row">
            <h2 className="student-learning-week-title">
              Week {week.week}
              {week.title
                ? ` — ${week.title}`
                : ""}
            </h2>

            {completed && (
              <span className="student-learning-week-status">
                <CheckCircle2 className="mr-1 size-3" />
                Completed
              </span>
            )}

            {!week.isUnlocked && (
              <span className="student-learning-week-status">
                <Lock className="mr-1 size-3" />
                Locked
              </span>
            )}
          </div>

          {week.description && (
            <p className="student-learning-week-description">
              {week.description}
            </p>
          )}
        </div>

        {/* Week Progress */}
        {week.isUnlocked && (
          <div className="student-learning-week-progress">
            <div className="student-learning-week-progress-header">
              <span className="student-learning-week-progress-label">
                Progress
              </span>

              <span className="student-learning-week-progress-value">
                {week.progress}%
              </span>
            </div>

            <div className="student-learning-week-progress-track">
              <div
                className="student-learning-week-progress-fill"
                style={{
                  width: `${week.progress}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Toggle */}
        <span className="student-learning-week-toggle">
          {week.isUnlocked ? (
            <ChevronDown
              className={[
                "student-learning-week-toggle-icon",
                open
                  ? "student-learning-week-toggle-open"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ) : (
            <Lock className="size-4" />
          )}
        </span>
      </button>

      {/* Week Contents */}
      {week.isUnlocked && open && (
        <div className="student-learning-week-content">
          {week.contents.length > 0 ? (
            <div
              ref={itemsRef}
              className="student-learning-items"
            >
              {week.contents.map((content) => (
                <div
                  key={content.id}
                  data-animate
                >
                  <CourseWeekItem
                    courseId={courseId}
                    content={content}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="px-5 py-8 text-center text-sm text-muted-foreground">
              No course content available
              for this week.
            </div>
          )}
        </div>
      )}

      {/* Locked Week */}
      {!week.isUnlocked && (
        <div className="student-learning-week-content">
          <div className="px-4 py-4 text-center text-xs text-muted-foreground sm:px-5">
            This week is locked. Complete the
            currently unlocked weeks to
            continue.
          </div>
        </div>
      )}
    </section>
  );
}