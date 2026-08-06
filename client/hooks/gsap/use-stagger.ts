"use client";

import { useRef } from "react";

import { ANIMATION } from "@/lib/animation";
import { gsap } from "@/lib/gsap";
import { useAppGSAP } from "./use-gsap";

interface UseStaggerOptions {
  selector?: string;
  y?: number;
  x?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
}

export function useStagger<
  T extends HTMLElement = HTMLDivElement,
>({
  selector = "[data-animate]",
  y = ANIMATION.stagger.y,
  x = ANIMATION.stagger.x,
  duration = ANIMATION.stagger.duration,
  stagger = ANIMATION.stagger.stagger,
  start = ANIMATION.stagger.start,
  once = ANIMATION.stagger.once,
}: UseStaggerOptions = {}) {
  const ref = useRef<T | null>(null);

  useAppGSAP(
    () => {
      if (!ref.current) return;

      const elements = ref.current.querySelectorAll(selector);

      if (!elements.length) return;

      gsap.from(elements, {
        opacity: 0,
        y,
        x,
        duration,
        stagger,
        ease: ANIMATION.stagger.ease,
        scrollTrigger: {
          trigger: ref.current,
          start,
          once,
        },
      });
    },
    {
      scope: ref,
    },
  );

  return ref;
}