"use client";

import { useRef } from "react";

import { ANIMATION } from "@/lib/animation";
import { gsap } from "@/lib/gsap";
import { useAppGSAP } from "./use-gsap";

interface UseRevealOptions {
  y?: number;
  x?: number;
  duration?: number;
  delay?: number;
  start?: string;
  once?: boolean;
}

export function useReveal<
  T extends HTMLElement = HTMLDivElement,
>({
  y = ANIMATION.reveal.y,
  x = ANIMATION.reveal.x,
  duration = ANIMATION.reveal.duration,
  delay = 0,
  start = ANIMATION.reveal.start,
  once = ANIMATION.reveal.once,
}: UseRevealOptions = {}) {
    const ref = useRef<T | null>(null);

  useAppGSAP(
    () => {
      if (!ref.current) return;

      gsap.from(ref.current, {
        opacity: 0,
        y,
        x,
        duration,
        delay,
        ease: ANIMATION.reveal.ease,
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