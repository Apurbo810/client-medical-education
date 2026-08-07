"use client";

import { useStagger } from "@/hooks/gsap";

import { courses } from "@/data/courses";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { CourseCard } from "./course-card";

export function FeaturedCourses() {

  const gridRef = useStagger({
      y: 30,
      stagger: 0.08,
    });



  return (
    <Section id="courses">
      <Container>
        <SectionHeading
          badge="Courses"
          title="Everything You Need to Pass"
          highlighted="Need to Pass"
          description="Explore our complete NCLEX preparation courses designed to help you study smarter and pass with confidence."
          animated
        />

        <div
          ref={gridRef}
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
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