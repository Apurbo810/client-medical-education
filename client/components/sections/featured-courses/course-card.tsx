import { ArrowRight } from "lucide-react";

import type { Course } from "@/types/course";

import { CourseImage } from "./course-image";

import { CourseMeta } from "./course-meta";
interface CourseCardProps {
  course: Course;
}

export function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <article className="group course-card flex h-full flex-col">
      <CourseImage
        image={course.image}
        title={course.title}
        category={course.category}
      />
      
      <div className="course-content flex flex-1 flex-col">

      <CourseMeta
          lessons={course.lessons}
          duration={course.duration}
          rating={course.rating}
        />

        <h3 className="course-title">
          {course.title}
        </h3>

        <p className="course-description">
          {course.description}
        </p>

        <div className="course-footer">
          <span className="course-price">
            {course.price}
          </span>

          <button className="course-button">
            Learn More
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}