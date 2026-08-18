import {
  BookOpen,
  CheckCircle2,
  Lock,
} from "lucide-react";

interface MyCoursesHeaderProps {
  hasActiveSubscription: boolean;
  courseCount: number;
}

export function MyCoursesHeader({
  hasActiveSubscription,
  courseCount,
}: MyCoursesHeaderProps) {
  return (
    <div className="student-my-courses-header">
      <div className="student-my-courses-header-content">
        <p className="student-my-courses-eyebrow">
          Learning Library
        </p>

        <h1 className="student-my-courses-title">
          My Courses
        </h1>

        <p className="student-my-courses-description">
          Explore your NCLEX preparation courses and
          continue building your knowledge and clinical
          confidence.
        </p>
      </div>

      <div className="student-my-courses-subscription">
        <div className="student-my-courses-subscription-content">
          <div className="student-my-courses-subscription-icon">
            {hasActiveSubscription ? (
              <CheckCircle2 className="size-5" />
            ) : (
              <Lock className="size-5" />
            )}
          </div>

          <div className="student-my-courses-subscription-text">
            <p className="student-my-courses-subscription-label">
              {hasActiveSubscription
                ? "Active subscription"
                : "No active subscription"}
            </p>

            <p className="student-my-courses-subscription-value">
              {courseCount} courses available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}