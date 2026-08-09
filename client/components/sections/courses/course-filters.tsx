"use client";

import { useReveal } from "@/hooks/gsap";

interface CourseFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CourseFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: CourseFiltersProps) {
  const filterRef = useReveal({
    y: 20,
  });

  return (
    <div
      ref={filterRef}
      className="courses-filter"
    >
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={
            selectedCategory === category
              ? "courses-filter-button courses-filter-button-active"
              : "courses-filter-button"
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}