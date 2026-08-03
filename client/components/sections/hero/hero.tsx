import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionGrid } from "@/components/common/section-grid";

import { HeroContent } from "./hero-content";
import { HeroImage } from "./hero-image";

export function Hero() {
  return (
    <Section className="overflow-hidden pt-36">
      <Container>
        <SectionGrid columns={2}>
          <HeroContent />
          <HeroImage />
        </SectionGrid>
      </Container>
    </Section>
  );
}
