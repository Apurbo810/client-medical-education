"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Clock3,
  Star,
  Users,
} from "lucide-react";

import type { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="course-image">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="course-image-hover"
        />

        <span className="course-badge">
          {course.category}
        </span>

        <span className="course-level">
          {course.level}
        </span>
      </div>

      {/* Content */}
      <div className="course-content">
        {/* Meta */}
        <div className="course-meta">
          <div className="course-meta-left">
            <span className="course-meta-item">
              <BookOpen className="size-3.5" />
              {course.lessons} lessons
            </span>

            <span className="course-meta-item">
              <Clock3 className="size-3.5" />
              {course.duration}
            </span>
          </div>

          <span className="course-rating">
            <Star className="size-3.5 fill-current" />
            {course.rating}
          </span>
        </div>

        {/* Title */}
        <h3 className="course-title">
          {course.title}
        </h3>

        {/* Description */}
        <p className="course-description">
          {course.description}
        </p>

        {/* Footer */}
        <div className="course-footer">
          <span className="course-students">
            <Users className="size-3.5" />
            {course.students.toLocaleString()} students
          </span>

          <Link
            href={`/pricing?course=${course.id}`}
            className="course-enroll"
          >
            Enroll
          </Link>
        </div>
      </div>
    </article>
  );
}