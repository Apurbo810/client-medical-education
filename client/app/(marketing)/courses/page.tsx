"use client";

import { useMemo, useState } from "react";

import { courses } from "@/data/courses";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { CourseFilters } from "@/components/sections/courses/course-filters";
import { CoursesGrid } from "@/components/sections/courses/courses-grid";
import { CoursePagination } from "@/components/sections/courses/course-pagination";

const COURSES_PER_PAGE = 9;

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [currentPage, setCurrentPage] =
    useState(1);

  const categories = [
    "All",
    ...Array.from(
      new Set(
        courses.map(
          (course) => course.category,
        ),
      ),
    ),
  ];

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All") {
      return courses;
    }

    return courses.filter(
      (course) =>
        course.category === selectedCategory,
    );
  }, [selectedCategory]);

  const totalPages = Math.ceil(
    filteredCourses.length /
      COURSES_PER_PAGE,
  );

  const paginatedCourses =
    filteredCourses.slice(
      (currentPage - 1) *
        COURSES_PER_PAGE,
      currentPage *
        COURSES_PER_PAGE,
    );

  function handleCategoryChange(
    category: string,
  ) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function handlePageChange(
    page: number,
  ) {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Section spacing="md">
      <Container>
        <SectionHeading
          title="Explore Our Courses"
          highlighted="Courses"
          description="Build your confidence with expert-led courses designed to help you prepare, practice, and succeed."
          animated
        />

        <CourseFilters
          categories={categories}
          selectedCategory={
            selectedCategory
          }
          onCategoryChange={
            handleCategoryChange
          }
        />

        <CoursesGrid
          courses={paginatedCourses}
        />

        <CoursePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Container>
    </Section>
  );
}