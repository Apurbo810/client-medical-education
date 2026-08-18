"use client";

import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import Link from "next/link";

import { useStagger } from "@/hooks/gsap";

import { CourseLearningHeader } from "./course-learning-header";
import { CourseLearningTabs } from "./course-learning-tabs";
import { CourseWeek } from "./course-week";
import { LockedCourse } from "./locked-course";

interface CourseLearningPageProps {
  data: {
    course: {
      id: string;
      title: string;
      description: string;
      image: string;
    };

    enrollment: {
      unlockedWeek: number;
      courseVersionId: string | null;
    } | null;

    version: {
      id: string;
      weeks: {
        week: number;
        title: string;
        description?: string;

        contents: {
          id: string;
          type: "slide" | "video" | "notes" | "mock-test";
          title: string;
          description: string;

          required: boolean;

          isNew: boolean;
          isUpdated: boolean;

          file?: string;
          videoUrl?: string;
          youtubeId?: string;
          href?: string;

          duration?: number | string;
        }[];
      }[];
    } | null;

    hasAccess: boolean;

    weeks: {
      week: number;
      title: string;
      description?: string;

      isUnlocked: boolean;

      progress: number;

      contents: {
        id: string;
        type: "slide" | "video" | "notes" | "mock-test";
        title: string;
        description: string;

        required: boolean;

        isNew: boolean;
        isUpdated: boolean;

        file?: string;
        videoUrl?: string;
        youtubeId?: string;
        href?: string;

        duration?: number | string;

        isUnlocked: boolean;

        progress: number;

        completed: boolean;

        completedAt?: string | null;
      }[];
    }[];
  } | null;
}

export function CourseLearningPage({
  data,
}: CourseLearningPageProps) {
  const pageRef = useStagger({
    y: 20,
    duration: 0.6,
    stagger: 0.08,
    start: "top 92%",
    once: true,
  });

  /*
   * No subscription / no course access.
   */
  if (!data || !data.hasAccess) {
    return <LockedCourse />;
  }

  const {
    course,
    enrollment,
    version,
    weeks,
  } = data;

  const totalWeeks = weeks.length;

  const unlockedWeeks =
    enrollment?.unlockedWeek ?? 0;

  const completedWeeks = weeks.filter(
    (week) => week.progress === 100,
  ).length;

  /*
   * Overall progress is calculated from
   * the progress of all available weeks.
   */
  const overallProgress =
    totalWeeks > 0
      ? Math.round(
          weeks.reduce(
            (total, week) =>
              total + week.progress,
            0,
          ) / totalWeeks,
        )
      : 0;

  return (
    <div className="student-learning-page">
      <div
        ref={pageRef}
        className="student-learning-container"
      >
        {/* Header */}
        <div data-animate>
          <CourseLearningHeader
            course={course}
            versionId={
              version?.id ??
              enrollment?.courseVersionId ??
              "Course"
            }
            totalWeeks={totalWeeks}
            unlockedWeeks={unlockedWeeks}
            completedWeeks={completedWeeks}
            progress={overallProgress}
          />
        </div>

        {/* Tabs */}
        <div data-animate>
          <CourseLearningTabs />
        </div>

        {/* Course Content */}
        <main className="student-learning-content">
          {weeks.length === 0 ? (
            <div className="student-learning-empty">
              <BookOpen className="mx-auto size-8 text-muted-foreground" />

              <h2 className="student-learning-empty-title mt-3">
                No course content yet
              </h2>

              <p className="student-learning-empty-description">
                Course content will appear here when
                it becomes available.
              </p>
            </div>
          ) : (
            weeks.map((week) => (
              <div
                key={week.week}
                data-animate
              >
                <CourseWeek week={week} />
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
}