"use client";

import Image from "next/image";

import { heroCards } from "@/data/hero";
import { HeroFloatingCard } from "./hero-floating-card";

export function HeroImage() {
  return (
    <>
      {/* ================================
          Mobile Hero Background
      ================================= */}
      <div className="absolute inset-y-0 -left-4 -right-4 overflow-hidden sm:-left-6 sm:-right-6 lg:hidden">
        <Image
          src="/images/hero/hero.webp"
          alt="Medical Student"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
          className="object-cover object-[55%_top] scale-110"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/35 to-primary/15" />
      </div>

      {/* ================================
          Desktop Hero
      ================================= */}
      <div className="relative hidden min-h-[760px] items-center justify-end lg:flex">
        {/* Background Glow */}
        <div className="hero-glow left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2" />

        {/* Decorative Background */}
        <div className="absolute right-6 top-8 h-[620px] w-[500px] rounded-[48px] bg-gradient-to-b from-white via-[#FCFCFD] to-[#F7F9FC] opacity-90" />

        {/* Hero Image */}
        <div className="relative right-10 z-10 h-[760px] w-[650px] overflow-hidden hero-image-mask xl:w-[700px] xl:translate-x-16">
          <Image
            src="/images/hero/hero.webp"
            alt="Medical Student"
            fill
            priority
            sizes="(min-width:1024px) 55vw,100vw"
            className="object-cover object-center"
          />

          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* Quote */}
        <div className="absolute right-20 top-12 z-30 hidden max-w-[220px] text-center xl:block">
          <p className="font-serif text-lg italic leading-8 text-foreground/70">
            Every step you take today brings you closer to saving lives.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="absolute right-[-70px] top-40 z-30 hidden space-y-6 xl:block">
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
    </>
  );
}