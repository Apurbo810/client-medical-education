import { notFound } from "next/navigation";

import { courses } from "@/data/courses";

import { VideoViewer } from "@/components/student/learning/video/video-viewer";

interface VideoPageProps {
  params: Promise<{
    courseId: string;
    contentId: string;
  }>;
}

export default async function VideoPage({
  params,
}: VideoPageProps) {
  const { courseId, contentId } =
    await params;

  console.log("VIDEO PAGE PARAMS:", {
    courseId,
    contentId,
  });

  /*
   * Find course
   */
  const course = courses.find(
    (item) => item.id === courseId,
  );

  console.log("FOUND COURSE:", course?.id);

  if (!course) {
    console.log("COURSE NOT FOUND");
    notFound();
  }

  /*
   * Find video from every version
   * and every week.
   */
  const video = course.versions
    .flatMap((version) => version.weeks)
    .flatMap((week) => week.contents)
    .find(
      (content) =>
        content.id === contentId &&
        content.type === "video",
    );

  console.log("FOUND VIDEO:", video);

  if (!video) {
    console.log("VIDEO NOT FOUND:", contentId);
    notFound();
  }

  /*
   * Video must have youtubeId
   */
  if (!video.youtubeId) {
    console.log(
      "VIDEO HAS NO YOUTUBE ID:",
      video,
    );

    notFound();
  }

  return (
    <VideoViewer
      courseId={course.id}
      title={video.title}
      description={video.description}
      youtubeId={video.youtubeId}
      duration={video.duration}
    />
  );
}