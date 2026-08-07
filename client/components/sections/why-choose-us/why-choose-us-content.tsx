import { whyChooseUs } from "@/data/why-choose-us";

import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { WhyChooseItem } from "./why-choose-item";

export function WhyChooseUsContent() {
  return (
    <div className="why-content">
      <SectionHeading
        badge="Why Choose Us"
        title="Built on Proven Outcomes"
        highlighted="Proven Outcomes"
        description="We don't just teach content—we engineer success. Every feature is designed around how nurses actually pass the NCLEX."
        size="md"
        animated
      />

      <div className="why-list">
        {whyChooseUs.map((item) => (
          <WhyChooseItem
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}