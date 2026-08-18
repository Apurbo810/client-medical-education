"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Lock,
  Play,
} from "lucide-react";

import { Section } from "@/components/common/section";
import { courses } from "@/data/courses";
import { useStagger } from "@/hooks/gsap";

interface StudentCourseProgress {
  id: string;
  progress: number;
}

interface StudentCoursesProps {
  hasCourseAccess: boolean;
  coursesProgress: StudentCourseProgress[];
}

export function StudentCourses({
  hasCourseAccess,
  coursesProgress,
}: StudentCoursesProps) {
  const coursesRef = useStagger({
    y: 24,
    duration: 0.6,
    stagger: 0.08,
    start: "top 90%",
    once: true,
  });

  function getProgress(courseId: string) {
    return (
      coursesProgress.find(
        (item) => item.id === courseId,
      )?.progress ?? 0
    );
  }

  return (
    <Section
      spacing="sm"
      className="student-courses-section"
    >
      {/* Header */}
      <div className="student-courses-header">
        <div>
          <p className="student-courses-eyebrow">
            Your learning
          </p>

          <h2 className="student-courses-heading">
            My Courses
          </h2>
        </div>

        <Link
          href="/student/my-courses"
          className="student-courses-view-all"
        >
          View all
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* Courses */}
      <div
        ref={coursesRef}
        className="student-courses-grid"
      >
        {courses.map((course) => {
          const progress = getProgress(course.id);

          const locked = !hasCourseAccess;

          const progressLabel = locked
            ? "Subscription required"
            : progress === 0
              ? "Not started"
              : progress === 100
                ? "Completed"
                : `${progress}% complete`;

          return (
            <article
              key={course.id}
              data-animate
              className="student-course-card"
            >
              {/* Image */}
              <div className="student-course-image">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="student-course-image-element"
                />

                {locked && (
                  <div className="student-course-lock">
                    <div className="student-course-lock-icon">
                      <Lock className="size-5" />
                    </div>

                    <span>Locked</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="student-course-content">
                <div>
                  <p className="student-course-category">
                    {course.category}
                  </p>

                  <h3 className="student-course-title">
                    {course.title}
                  </h3>

                  <p className="student-course-description">
                    {course.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="student-course-footer">
                  <div className="student-course-meta">
                    <span>
                      <Clock3 className="size-3.5" />
                      {course.duration}
                    </span>

                    <span>
                      {progressLabel}
                    </span>
                  </div>

                  {/* Progress */}
                  <div className="student-course-progress">
                    <div
                      className="student-course-progress-value"
                      style={{
                        width: locked
                          ? "0%"
                          : `${progress}%`,
                      }}
                    />
                  </div>

                  {/* Action */}
                  {locked ? (
                    <Link
                      href="/pricing"
                      className="student-course-button student-course-button-locked"
                    >
                      <Lock className="size-4" />
                      Unlock Course
                    </Link>
                  ) : (
                    <Link
                      href={`/student/learning/${course.id}`}
                      className="student-course-button student-course-button-active"
                    >
                      <Play className="size-4" />

                      {progress > 0
                        ? "Continue Learning"
                        : "Start Learning"}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}