"use client";

import { BookOpen } from "lucide-react";
import { useState } from "react";

import { useStagger } from "@/hooks/gsap";

import { CourseLearningHeader } from "./course-learning-header";
import {
  CourseLearningTabs,
  type CourseTab,
} from "./course-learning-tabs";
import { CourseWeek } from "./course-week";
import { LockedCourse } from "../shared/locked-course";
import { CourseVideoGrid } from "../video/course-video-grid";
import { CourseNotesGrid } from "../notes/course-notes-grid";

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

          type:
            | "slide"
            | "video"
            | "notes"
            | "mock-test";

          title: string;
          description: string;

          required: boolean;
          isNew: boolean;
          isUpdated: boolean;

          file?: string;
          youtubeId?: string;
          duration?: number;
          questions?: number;
        }[];
      }[];
    } | null;

    hasAccess: boolean;

    weeks: {
      id: string;
      week: number;
      title: string;
      description?: string;
      unlockAfterDays: number;

      isUnlocked: boolean;
      progress: number;

      contents: {
        id: string;

        type:
          | "slide"
          | "video"
          | "notes"
          | "mock-test";

        title: string;
        description: string;

        file?: string;
        youtubeId?: string;
        duration?: number;
        questions?: number;

        isNew: boolean;
        isUpdated: boolean;
        required: boolean;

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
  const [activeTab, setActiveTab] =
    useState<CourseTab>("content");

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

  /* =========================================================
     COURSE OVERVIEW
  ========================================================= */

  const totalWeeks = weeks.length;

  const unlockedWeeks =
    enrollment?.unlockedWeek ?? 0;

  const completedWeeks = weeks.filter(
    (week) => week.progress === 100,
  ).length;

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
    const courseWeeks = weeks;


  return (
    <div className="student-learning-page">
      <div
        ref={pageRef}
        className="student-learning-container"
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

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

        {/* =====================================================
            TABS
        ===================================================== */}

        <div data-animate>
          <CourseLearningTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

       <main className="student-learning-content">
        {activeTab === "videos" ? (
          <CourseVideoGrid
            courseId={course.id}
            weeks={weeks}
          />
        ) : activeTab === "notes" ? (
          <CourseNotesGrid
            courseId={course.id}
            weeks={weeks}
          />
        ) : weeks.length === 0 ? (
          <div className="student-learning-empty">
            <BookOpen className="mx-auto size-8 text-muted-foreground" />

            <h2 className="student-learning-empty-title mt-3">
              No course content yet
            </h2>

            <p className="student-learning-empty-description">
              Course content will appear here when it
              becomes available.
            </p>
          </div>
        ) : (
          weeks.map((week) => (
            <div
              key={week.id}
              data-animate
            >
              <CourseWeek
                courseId={course.id}
                week={week}
              />
            </div>
          ))
        )}
      </main>
      </div>
    </div>
  );
}