"use client";

import { useStagger } from "@/hooks/gsap";

import { whyChooseUs } from "@/data/why-choose-us";

import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { WhyChooseItem } from "./why-choose-item";

export function WhyChooseUsContent() {
  const listRef = useStagger({
    y: 24,
    stagger: 0.1,
  });

  return (
    <div>
      <SectionHeading
        animated
        badge="Why Choose Us"
        title="Everything You Need to Succeed"
        highlighted="Need to Succeed"
        description="Discover why thousands of nursing students trust Medix for their NCLEX preparation."
        align="left"
      />

      <div
        ref={listRef}
        className="why-list"
      >
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