"use client";

import Image from "next/image";

import { heroCards } from "@/data/hero";
import { HeroFloatingCard } from "./hero-floating-card";

export function HeroImage() {
  return (
    <div className="relative flex min-h-[760px] items-center justify-end">
      {/* Background Glow */}
      <div className="hero-glow left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" />

      {/* Decorative Background Panel */}
      <div className="absolute right-10 top-8 h-[640px] w-[520px] rounded-[48px] bg-gradient-to-b from-white via-[#FCFCFD] to-[#F7F9FC] opacity-90" />

      {/* Hero Image */}
      <div className="relative z-10 h-[760px] w-[700px] translate-x-16 overflow-hidden hero-image-mask">
        <Image
          src="/images/hero/hero.webp"
          alt="Medical Student"
          fill
          priority
          sizes="(min-width:1024px) 55vw,100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Extra Soft Fade */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Quote */}
      <div className="absolute right-28 top-12 z-30 max-w-[220px] text-center">
        <p className="font-serif text-lg italic leading-8 text-foreground/70">
          Every step you take today brings you closer to saving lives.
        </p>
      </div>

      {/* Floating Cards */}
      <div className="absolute right-[-95px] top-40 z-30 space-y-6">
        {heroCards.map((card) => (
          <HeroFloatingCard
            key={card.title}
            className="hero-card-shadow translate-x-4"
            icon={<card.icon className="size-5" />}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
