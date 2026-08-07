"use client";

import { useStagger } from "@/hooks/gsap";

export function useCoursesAnimation() {
  const gridRef = useStagger({
    y: 30,
    stagger: 0.08,
  });

  return {
    gridRef,
  };
}