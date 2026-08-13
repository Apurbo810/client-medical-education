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
      <div className="hero-mobile-background">
        <Image
          src="/images/hero/hero.webp"
          alt="Medical Student"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 70vw"
          className="hero-mobile-image"
        />

        {/* Light Overlay */}
        <div className="hero-mobile-overlay" />
      </div>

      {/* ================================
          Desktop Hero
      ================================= */}
      <div className="hero-desktop">
        {/* Background Glow */}
        <div className="hero-glow hero-glow-position" />

        {/* Decorative Background */}
        <div className="hero-decorative-background" />

        {/* Hero Image */}
        <div data-hero-el="image" className="hero-image-frame hero-image-mask">
          <Image
            src="/images/hero/hero.webp"
            alt="Medical Student"
            fill
            priority
            sizes="(min-width:1024px) 55vw,100vw"
            className="hero-desktop-image"
          />

          <div className="hero-overlay hero-overlay-frame" />
          <div className="hero-image-highlight" />
        </div>

        {/* Quote */}
        <div data-hero-el="quote" className="hero-quote">
          <p className="hero-quote-text">
            Every step you take today brings you closer to saving lives.
          </p>
        </div>

        {/* Floating Cards */}
        <div data-hero-card className="hero-floating-cards">
          {heroCards.map((card) => (
            <HeroFloatingCard
              key={card.title}
              className="hero-card-offset"
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
