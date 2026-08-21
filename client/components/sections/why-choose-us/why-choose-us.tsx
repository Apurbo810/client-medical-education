import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";

import { WhyChooseUsContent } from "./why-choose-us-content";
import { WhyChooseUsImage } from "./why-choose-us-image";

export function WhyChooseUs() {
  return (
    <Section spacing="sm">
      <Container>
        <div className="why-grid">
          <WhyChooseUsContent />
          <WhyChooseUsImage />
        </div>
      </Container>
    </Section>
  );
}