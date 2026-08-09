"use client";

import { useReveal } from "@/hooks/gsap";

interface CoursePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CoursePagination({
  currentPage,
  totalPages,
  onPageChange,
}: CoursePaginationProps) {
  const paginationRef = useReveal({
    y: 20,
  });

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div
      ref={paginationRef}
      className="courses-pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`courses-pagination-button ${
          currentPage === 1
            ? "courses-pagination-button-disabled"
            : ""
        }`}
        aria-label="Previous page"
      >
        ←
      </button>

      {Array.from(
        { length: totalPages },
        (_, index) => index + 1,
      ).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={
            currentPage === page
              ? "courses-pagination-button courses-pagination-button-active"
              : "courses-pagination-button"
          }
          aria-current={
            currentPage === page
              ? "page"
              : undefined
          }
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`courses-pagination-button ${
          currentPage === totalPages
            ? "courses-pagination-button-disabled"
            : ""
        }`}
        aria-label="Next page"
      >
        →
      </button>
    </div>
  );
}