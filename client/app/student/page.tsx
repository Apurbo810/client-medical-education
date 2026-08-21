import { StudentWelcome } from "@/components/student/dashboard/student-welcome";
import { StudentQuickActions } from "@/components/student/dashboard/student-quick-actions";
import { StudentStats } from "@/components/student/dashboard/student-stats";
import { StudentCourses } from "@/components/student/dashboard/student-courses";

import { getStudentDashboard } from "@/services/student.service";

export default async function StudentDashboardPage() {
  const data = await getStudentDashboard();

  return (
    <div className="student-dashboard">
      <StudentWelcome data={data} />

      <StudentQuickActions
        data={data.continueLearning}
        hasCourseAccess={
          data.subscription.hasCourseAccess
        }
      />

      <StudentStats stats={data.stats} />

      <StudentCourses
        hasCourseAccess={
          data.subscription.hasCourseAccess
        }
        coursesProgress={data.coursesProgress}
      />
    </div>
  );
}