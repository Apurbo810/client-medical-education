"use client";

import { useRef } from "react";

import { gsap } from "@/lib/gsap";
import { useAppGSAP } from "./use-gsap";
import { ANIMATION } from "@/lib/animation";

const HERO = {
  badge: '[data-hero-el="badge"]',
  heading: '[data-hero-el="heading"]',
  description: '[data-hero-el="description"]',
  buttons: '[data-hero-el="buttons"]',
  students: '[data-hero-el="students"]',
  image: '[data-hero-el="image"]',
  quote: '[data-hero-el="quote"]',
  floating: '[data-hero-card]',
} as const;

export function useHeroAnimation<
  T extends HTMLElement = HTMLDivElement,
>() {
  const ref = useRef<T | null>(null);

  useAppGSAP(
    () => {
      if (!ref.current) return;

      const tl = gsap.timeline({
        defaults: {
          duration: ANIMATION.reveal.duration,
          ease: ANIMATION.reveal.ease,
        },
      });

      const badge = ref.current.querySelector(HERO.badge);
      const heading = ref.current.querySelector(HERO.heading);
      const description = ref.current.querySelector(HERO.description);
      const buttons = ref.current.querySelector(HERO.buttons);
      const students = ref.current.querySelector(HERO.students);
      const image = ref.current.querySelector(HERO.image);
      const quote = ref.current.querySelector(HERO.quote);
      const floatingCards = ref.current.querySelectorAll(HERO.floating);

      if (badge) {
        tl.from(badge, {
          opacity: 0,
          y: -20,
        });
      }

      if (heading) {
        tl.from(
          heading,
          {
            opacity: 0,
            y: 40,
          },
          "-=0.45",
        );
      }

      if (description) {
        tl.from(
          description,
          {
            opacity: 0,
            y: 30,
          },
          "-=0.45",
        );
      }

      if (buttons) {
        tl.from(
          buttons,
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          "-=0.4",
        );
      }

      if (students) {
        tl.from(
          students,
          {
            opacity: 0,
            x: -20,
          },
          "-=0.45",
        );
      }

      if (image) {
        tl.from(
          image,
          {
            opacity: 0,
            x: 80,
          },
          "-=0.8",
        );
      }

      if (quote) {
        tl.from(
          quote,
          {
            opacity: 0,
            y: -20,
          },
          "-=0.5",
        );
      }

      if (floatingCards.length > 0) {
        tl.from(
          floatingCards,
          {
            opacity: 0,
            scale: 0.9,
            x: 40,
            duration: 0.6,
          },
          "-=0.45",
        );
      }
    },
    {
      scope: ref,
    },
  );

  return ref;
}
