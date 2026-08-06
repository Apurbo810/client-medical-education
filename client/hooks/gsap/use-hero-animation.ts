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

      tl
        .from(ref.current.querySelector(HERO.badge), {
          opacity: 0,
          y: -20,
        })

        .from(
          ref.current.querySelector(HERO.heading),
          {
            opacity: 0,
            y: 40,
          },
          "-=0.45",
        )

        .from(
          ref.current.querySelector(HERO.description),
          {
            opacity: 0,
            y: 30,
          },
          "-=0.45",
        )

        .from(
          ref.current.querySelector(HERO.buttons),
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          "-=0.4",
        )

        .from(
          ref.current.querySelector(HERO.students),
          {
            opacity: 0,
            x: -20,
          },
          "-=0.45",
        )

        .from(
          ref.current.querySelector(HERO.image),
          {
            opacity: 0,
            x: 80,
          },
          "-=0.8",
        )

        .from(
          ref.current.querySelector(HERO.quote),
          {
            opacity: 0,
            y: -20,
          },
          "-=0.5",
        )

        .from(
          ref.current.querySelectorAll(HERO.floating),
          {
            opacity: 0,
            scale: 0.9,
            x: 40,
            duration: 0.6,
          },
          "-=0.45",
        );
    },
    {
      scope: ref,
    },
  );

  return ref;
}