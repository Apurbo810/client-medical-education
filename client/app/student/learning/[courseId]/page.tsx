import { getStudentCourseContent } from "@/services/student.service";

import { CourseLearningPage } from "@/components/student/learning/main/course-learning-page";

interface StudentLearningPageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function StudentLearningPage({
  params,
}: StudentLearningPageProps) {
  const { courseId } = await params;

  const data = await getStudentCourseContent(courseId);

  return <CourseLearningPage data={data} />;
}