"use client";

import {
  ArrowLeft,
  BookOpen,
  Clock3,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

import { useStagger } from "@/hooks/gsap";

import { CourseProgress } from "./course-progress";

interface CourseLearningHeaderProps {
  course: {
    title: string;
    description: string;
  };

  versionId: string;

  totalWeeks: number;

  unlockedWeeks: number;

  completedWeeks: number;

  progress: number;
}

export function CourseLearningHeader({
  course,
  versionId,
  totalWeeks,
  unlockedWeeks,
  completedWeeks,
  progress,
}: CourseLearningHeaderProps) {
  const headerRef = useStagger({
    y: 20,
    duration: 0.6,
    stagger: 0.08,
    start: "top 95%",
    once: true,
  });

  return (
    <header
      ref={headerRef}
      className="student-learning-header"
    >
      <div className="student-learning-header-main">
        {/* Course Information */}
        <div
          data-animate
          className="student-learning-header-info"
        >
          <div className="student-learning-header-top">
            <span className="student-learning-course-badge">
              <GraduationCap className="size-3.5" />
              Course
            </span>

            <span className="student-learning-version-badge">
              {versionId}
            </span>
          </div>

          <h1 className="student-learning-title">
            {course.title}
          </h1>

          <p className="student-learning-description">
            {course.description}
          </p>

          <div className="student-learning-header-meta">
            <span className="student-learning-header-meta-item">
              <BookOpen className="student-learning-header-meta-icon" />

              {totalWeeks} weeks
            </span>

            <span className="student-learning-header-meta-item">
              <Clock3 className="student-learning-header-meta-icon" />

              {unlockedWeeks}{" "}
              {unlockedWeeks === 1
                ? "week"
                : "weeks"}{" "}
              unlocked
            </span>
          </div>
        </div>

        {/* Progress */}
        <div
          data-animate
          className="student-learning-header-action"
        >
          <CourseProgress
            progress={progress}
            completedWeeks={completedWeeks}
            totalWeeks={totalWeeks}
          />

          <Link
            href="/student/my-courses"
            className="student-learning-continue"
          >
            <ArrowLeft className="size-4" />

            <span>My Courses</span>
          </Link>
        </div>
      </div>
    </header>
  );
}