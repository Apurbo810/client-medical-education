import { courses } from "@/data/courses";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading";

import { CourseCard } from "./course-card";

export function FeaturedCourses() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Featured Courses"
          title="Choose Your Learning Path"
          description="Comprehensive NCLEX preparation courses designed to help you succeed with confidence."
          align="center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              course={course}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}