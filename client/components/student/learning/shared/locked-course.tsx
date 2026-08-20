"use client";

import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

export function LockedCourse() {
  return (
    <section className="student-learning-locked">
      <div className="student-learning-locked-card">
        <div className="student-learning-locked-icon">
          <Lock className="size-7" />
        </div>

        <h1 className="student-learning-locked-title">
          Course Access Required
        </h1>

        <p className="student-learning-locked-description">
          You need an active subscription to access
          this course and its learning materials.
        </p>

        <Link
          href="/student/my-courses"
          className="student-learning-locked-button"
        >
          <ArrowLeft className="size-4" />
          Back to My Courses
        </Link>
      </div>
    </section>
  );
}