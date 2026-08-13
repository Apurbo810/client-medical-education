"use client";

import { useHeroAnimation } from "@/hooks/gsap";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function HeroClient() {
  const heroRef = useHeroAnimation();

  return (
    <div ref={heroRef} className="hero-layout">
      <div className="hero-content-column">
        <HeroContent />
      </div>

      <HeroImage />
    </div>
  );
}
