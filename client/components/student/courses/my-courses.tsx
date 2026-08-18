"use client";

import { BookOpen } from "lucide-react";

import type { useStagger } from "@/hooks/gsap";
import { useStagger as useCourseStagger } from "@/hooks/gsap";

import { Section } from "@/components/common/section";

import { MyCoursesHeader } from "./my-courses-header";
import { MyCourseCard } from "./my-course-card";

interface StudentCourse {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  lessons: number;
  duration: string;
  price: string;
  progress: number;
  locked: boolean;
}

interface MyCoursesProps {
  hasActiveSubscription: boolean;
  courses: StudentCourse[];
}

export function MyCourses({
  hasActiveSubscription,
  courses,
}: MyCoursesProps) {
  const coursesRef = useCourseStagger({
    y: 30,
    duration: 0.65,
    stagger: 0.1,
    start: "top 88%",
    once: true,
  });

  return (
    <Section
      spacing="none"
      className="student-my-courses"
    >
      <MyCoursesHeader
        hasActiveSubscription={
          hasActiveSubscription
        }
        courseCount={courses.length}
      />

      {courses.length > 0 ? (
        <>
          <div className="student-my-courses-count">
            <p className="student-my-courses-count-label">
              Available courses
            </p>

            <p className="student-my-courses-count-value">
              {courses.length}
            </p>
          </div>

          <div
            ref={coursesRef}
            className="student-my-courses-grid"
          >
            {courses.map((course) => (
              <div
                key={course.id}
                data-animate
              >
                <MyCourseCard
                  course={course}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="student-my-courses-empty">
          <div className="student-my-courses-empty-icon">
            <BookOpen className="size-6" />
          </div>

          <h2 className="student-my-courses-empty-title">
            No courses available
          </h2>

          <p className="student-my-courses-empty-description">
            There are currently no courses available
            for your account.
          </p>
        </div>
      )}
    </Section>
  );
}