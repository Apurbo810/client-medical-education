import { notFound } from "next/navigation";

import { courses } from "@/data/courses";

import { CourseDetail } from "@/components/sections/courses/course-detail";

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { courseId } = await params;

  const course = courses.find(
    (item) => item.id === courseId,
  );

  if (!course) {
    notFound();
  }

  return <CourseDetail course={course} />;
}