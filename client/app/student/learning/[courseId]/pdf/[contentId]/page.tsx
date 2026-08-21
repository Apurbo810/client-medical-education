import { notFound } from "next/navigation";

import { PdfViewer } from "@/components/student/learning/pdf/pdf-viewer";
import { getStudentCourseContent } from "@/services/student.service";

interface PdfPageProps {
  params: Promise<{
    courseId: string;
    contentId: string;
  }>;
}

export default async function PdfPage({
  params,
}: PdfPageProps) {
  const { courseId, contentId } = await params;

  const data =
    await getStudentCourseContent(courseId);

  /*
   * Course doesn't exist.
   */
  if (!data) {
    notFound();
  }

  /*
   * Student doesn't have access to this course.
   */
  if (!data.hasAccess) {
    notFound();
  }

  /*
   * Find the requested content
   * from the student's assigned course version.
   */
  const content = data.weeks
    .flatMap((week) => week.contents)
    .find((item) => item.id === contentId);

  /*
   * Content doesn't exist.
   */
  if (!content) {
    notFound();
  }

  /*
   * Only slide content currently
   * represents a PDF.
   */
  if (content.type !== "slide" || !content.file) {
    notFound();
  }

  /*
   * A locked week cannot be opened
   * directly through the URL.
   */
  if (!content.isUnlocked) {
    notFound();
  }

  return (
    <PdfViewer
      courseId={courseId}
      title={content.title}
      file={content.file}
    />
  );
}