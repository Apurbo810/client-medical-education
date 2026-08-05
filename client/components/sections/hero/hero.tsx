import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionGrid } from "@/components/common/section-grid";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function Hero() {
  return (
    <Section spacing="none" className="overflow-hidden pt-10">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.25fr]">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}
