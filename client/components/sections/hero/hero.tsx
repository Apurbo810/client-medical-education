import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";

import { HeroClient } from "./hero-client";

export function Hero() {
  return (
    <Section spacing="none" className="hero-section">
      <Container>
        <HeroClient />
      </Container>
    </Section>
  );
}
