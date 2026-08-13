import { StudentWelcome } from "@/components/student/dashboard/student-welcome";
import { StudentStats } from "@/components/student/dashboard/student-stats";
import { StudentQuickActions } from "@/components/student/dashboard/student-quick-actions";

import { getStudentDashboard } from "@/services/student.service";

export default async function StudentDashboardPage() {
  const dashboard = await getStudentDashboard();

  return (
    <>
      <StudentWelcome data={dashboard} />

      <StudentStats stats={dashboard.stats} />

      <StudentQuickActions
        data={dashboard.continueLearning}
      />
    </>
  );
}