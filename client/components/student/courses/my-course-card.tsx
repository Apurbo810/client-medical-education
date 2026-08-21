import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Lock,
  Play,
} from "lucide-react";

interface MyCourseCardProps {
  course: {
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
  };
}

export function MyCourseCard({
  course,
}: MyCourseCardProps) {
  const progress = Math.min(
    Math.max(course.progress, 0),
    100,
  );

  const completed = progress === 100;

  const progressLabel = completed
    ? "Completed"
    : progress === 0
      ? "Not started"
      : `${progress}% complete`;

  return (
    <article
      className={`student-my-course-card ${
        course.locked
          ? "student-my-course-locked"
          : ""
      }`}
    >
      {/* Image */}
      <div className="student-my-course-image">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            (max-width: 1279px) 33vw,
            25vw
          "
          className={`student-my-course-image-element ${
            course.locked
              ? "student-my-course-image-locked"
              : ""
          }`}
        />

        {/* Locked overlay */}
        {course.locked && (
          <div className="student-my-course-lock-overlay">
            <div className="student-my-course-lock-content">
              <div className="student-my-course-lock-icon">
                <Lock className="size-5" />
              </div>

              <span className="student-my-course-lock-label">
                Subscription required
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="student-my-course-content">
        <div>
          <p className="student-my-course-category">
            {course.category}
          </p>

          <h2 className="student-my-course-title">
            {course.title}
          </h2>

          <p className="student-my-course-description">
            {course.description}
          </p>
        </div>

        <div className="mt-auto">
          {/* Meta */}
          <div className="student-my-course-meta">
            <span className="student-my-course-meta-item">
              <Clock3 className="student-my-course-meta-icon" />
              {course.duration}
            </span>

            <span className="student-my-course-meta-item">
              <BookOpen className="student-my-course-meta-icon" />
              {course.lessons} lessons
            </span>
          </div>

          {/* Progress */}
          {!course.locked && (
            <div className="student-my-course-progress">
              <div className="student-my-course-progress-header">
                <span className="student-my-course-progress-label">
                  Progress
                </span>

                <span className="student-my-course-progress-value">
                  {progressLabel}
                </span>
              </div>

              <div
                className="student-my-course-progress-track"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${course.title} progress`}
              >
                <div
                  className="student-my-course-progress-bar"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Action */}
          <div className="student-my-course-action">
            {course.locked ? (
              <Link
                href="/pricing"
                className="student-my-course-button student-my-course-button-locked"
              >
                <Lock className="size-4" />

                <span>
                  Unlock Course
                </span>

                <ArrowRight className="student-my-course-button-arrow" />
              </Link>
            ) : (
              <Link
                href={`/student/learning/${course.id}`}
                className="student-my-course-button student-my-course-button-active"
              >
                {completed ? (
                  <CheckCircle2 className="size-4" />
                ) : (
                  <Play className="size-4" />
                )}

                <span>
                  {completed
                    ? "Review Course"
                    : progress > 0
                      ? "Continue Learning"
                      : "Start Learning"}
                </span>

                <ArrowRight className="student-my-course-button-arrow" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}