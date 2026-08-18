import { MyCourses } from "@/components/student/courses";
import { getStudentCourses } from "@/services/student.service";

export default async function MyCoursesPage() {
  const data = await getStudentCourses();

  return (
    <MyCourses
      hasActiveSubscription={
        data.hasActiveSubscription
      }
      courses={data.courses}
    />
  );
}