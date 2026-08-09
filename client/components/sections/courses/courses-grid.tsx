"use client";

import { useStagger } from "@/hooks/gsap";

import type { Course } from "@/types/course";

import { CourseCard } from "./course-card";

interface CoursesGridProps {
  courses: Course[];
}

export function CoursesGrid({
  courses,
}: CoursesGridProps) {
  const gridRef = useStagger({
    y: 30,
    stagger: 0.08,
  });

  if (!courses.length) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground">
          No courses found in this category.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={gridRef}
      className="courses-page-grid"
    >
      {courses.map((course) => (
        <div
          key={course.id}
          data-animate
        >
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
}