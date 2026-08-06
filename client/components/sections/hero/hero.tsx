import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";

import { HeroClient } from "./hero-client";

export function Hero() {
  return (
    <Section
      spacing="none"
      className="overflow-hidden pt-24 sm:pt-28 lg:pt-10"
    >
      <Container>
        <HeroClient />
      </Container>
    </Section>
  );
}