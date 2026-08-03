"use client";

import Image from "next/image";

import { heroCards } from "@/data/hero";

import { HeroFloatingCard } from "./hero-floating-card";

export function HeroImage() {
  return (
    <div className="relative flex min-h-[700px] items-center justify-center">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      {/* Image */}
      <Image
        src="/images/hero/hero.webp"
        alt="Medical Student"
        width={720}
        height={760}
        priority
        className="relative z-10 object-contain"
      />

      {/* Quote */}
      <div className="absolute top-8 right-20 z-20 max-w-[180px] text-center">
        <p className="font-serif text-lg italic text-foreground/80">
          Every step you take today brings you closer to saving lives.
        </p>
      </div>

      {/* Cards */}
      <div className="absolute top-40 right-0 z-20 space-y-4">
        {heroCards.map((card) => (
          <HeroFloatingCard
            key={card.title}
            icon={<card.icon className="size-5" />}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
