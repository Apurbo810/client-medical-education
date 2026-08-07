"use client";

import { useReveal } from "@/hooks/gsap";

export function useSectionHeadingAnimation() {
  return {
    badgeRef: useReveal({
      y: 20,
    }),

    titleRef: useReveal({
      y: 30,
    }),

    descriptionRef: useReveal({
      y: 40,
    }),
  };

}