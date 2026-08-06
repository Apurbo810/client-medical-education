import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function Hero() {
  return (
    <Section
      spacing="none"
      className="overflow-hidden pt-24 sm:pt-28 lg:pt-10"
    >
      <Container>
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.95fr_1.25fr] lg:gap-8">


          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <HeroContent />
          </div>

          {/* Desktop Image */}
          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}