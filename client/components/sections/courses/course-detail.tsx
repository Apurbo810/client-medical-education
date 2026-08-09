"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Star,
  Users,
} from "lucide-react";

import type { Course } from "@/types/course";

interface CourseDetailProps {
  course: Course;
}

export function CourseDetail({
  course,
}: CourseDetailProps) {
  return (
    <main className="course-detail-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="course-detail-hero">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* Back */}
          <Link
            href="/courses"
            className="course-detail-back"
          >
            <ArrowLeft className="size-4" />
            Back to Courses
          </Link>

          <div className="course-detail-hero-grid">
            {/* Hero Content */}
            <div className="course-detail-hero-content">
              {/* Badges */}
              <div className="course-detail-badges">
                <span className="course-detail-badge">
                  {course.category}
                </span>

                <span className="course-detail-level">
                  {course.level}
                </span>
              </div>

              {/* Title */}
              <h1 className="course-detail-title">
                {course.title}
              </h1>

              {/* Description */}
              <p className="course-detail-description">
                {course.description}
              </p>

              {/* Rating */}
              <div className="course-detail-rating">
                <span className="course-detail-rating-value">
                  {course.rating}
                </span>

                <span className="course-detail-stars">
                  {Array.from({ length: 5 }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        className="size-4 fill-current"
                      />
                    ),
                  )}
                </span>

                <span>
                  {course.students.toLocaleString()}{" "}
                  students
                </span>
              </div>

              {/* Stats */}
              <div className="course-detail-stats">
                {/* Lessons */}
                <div className="course-detail-stat">
                  <BookOpen className="size-5 text-primary" />

                  <div>
                    <span className="course-detail-stat-label">
                      Lessons
                    </span>

                    <span className="course-detail-stat-value">
                      {course.lessons}
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div className="course-detail-stat">
                  <Clock3 className="size-5 text-primary" />

                  <div>
                    <span className="course-detail-stat-label">
                      Duration
                    </span>

                    <span className="course-detail-stat-value">
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Students */}
                <div className="course-detail-stat">
                  <Users className="size-5 text-primary" />

                  <div>
                    <span className="course-detail-stat-label">
                      Students
                    </span>

                    <span className="course-detail-stat-value">
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="course-detail-image-wrapper">
              <Image
                src={course.image}
                alt={course.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="course-detail-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="course-detail-content-section">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_360px] lg:px-10">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* About */}
            <section className="course-detail-section">
              <h2 className="course-detail-section-title">
                About this course
              </h2>

              <p className="course-detail-section-text">
                {course.description}
              </p>

              <p className="course-detail-section-text">
                This course provides a structured learning
                experience designed to help you build
                confidence, strengthen your knowledge, and
                prepare effectively for your nursing
                examinations.
              </p>
            </section>

            {/* What You'll Learn */}
            <section className="course-detail-section">
              <h2 className="course-detail-section-title">
                What you&apos;ll learn
              </h2>

              <div className="course-detail-learn-grid">
                <div className="course-detail-learn-item">
                  <CheckCircle2 className="course-detail-learn-icon size-5" />

                  <span>
                    Build a strong understanding of core
                    nursing concepts.
                  </span>
                </div>

                <div className="course-detail-learn-item">
                  <CheckCircle2 className="course-detail-learn-icon size-5" />

                  <span>
                    Practice applying knowledge to
                    exam-style questions.
                  </span>
                </div>

                <div className="course-detail-learn-item">
                  <CheckCircle2 className="course-detail-learn-icon size-5" />

                  <span>
                    Improve clinical reasoning and
                    decision-making skills.
                  </span>
                </div>

                <div className="course-detail-learn-item">
                  <CheckCircle2 className="course-detail-learn-icon size-5" />

                  <span>
                    Prepare with a structured and focused
                    study plan.
                  </span>
                </div>
              </div>
            </section>

            {/* Course Information */}
            <section className="course-detail-section">
              <h2 className="course-detail-section-title">
                Course information
              </h2>

              <div className="course-detail-information">
                {/* Level */}
                <div className="course-detail-information-item">
                  <span className="course-detail-information-label">
                    Level
                  </span>

                  <strong className="course-detail-information-value">
                    {course.level}
                  </strong>
                </div>

                {/* Category */}
                <div className="course-detail-information-item">
                  <span className="course-detail-information-label">
                    Category
                  </span>

                  <strong className="course-detail-information-value">
                    {course.category}
                  </strong>
                </div>

                {/* Lessons */}
                <div className="course-detail-information-item">
                  <span className="course-detail-information-label">
                    Lessons
                  </span>

                  <strong className="course-detail-information-value">
                    {course.lessons}
                  </strong>
                </div>

                {/* Duration */}
                <div className="course-detail-information-item">
                  <span className="course-detail-information-label">
                    Duration
                  </span>

                  <strong className="course-detail-information-value">
                    {course.duration}
                  </strong>
                </div>
              </div>
            </section>
          </div>

          {/* =================================================
              ENROLLMENT SIDEBAR
          ================================================= */}

          <aside className="course-detail-sidebar">
            <div className="course-detail-enroll-card">
              {/* Course Image */}
              <div className="course-detail-enroll-image">
                <Image
                  src={course.image}
                  alt=""
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>

              {/* Enrollment Content */}
              <div className="course-detail-enroll-content">
                <p className="course-detail-enroll-label">
                  Included with a Booster Prep plan
                </p>

                <Link
                  href="/pricing"
                  className="course-detail-enroll-button"
                >
                  Enroll Now
                  <ArrowRight className="size-4" />
                </Link>

                <p className="course-detail-enroll-note">
                  Start learning today and work toward
                  your NCLEX goals.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
