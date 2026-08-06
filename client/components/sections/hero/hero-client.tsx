"use client";

import { useHeroAnimation } from "@/hooks/gsap";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function HeroClient() {
  const heroRef = useHeroAnimation();

  return (
    <div ref={heroRef} className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-8">
      <div className="relative z-10 mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
        <HeroContent />
      </div>

      <HeroImage />
    </div>
  );
}