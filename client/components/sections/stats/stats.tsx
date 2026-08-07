"use client";

import { statistics } from "@/data/statistics";

import { useStagger } from "@/hooks/gsap";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";

import { StatCard } from "./stat-card";

export function Stats() {
  const staggerRef = useStagger({
    y: 25,
    stagger: 0.08,
  });

  return (
    <Section spacing="none" className="pt-8 lg:pt-12">
      <Container>
        <div
          ref={staggerRef}
          className="rounded-3xl bg-primary text-primary-foreground shadow-xl"
        >
          <div className="grid grid-cols-2 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            {statistics.map((statistic) => (
              <StatCard
                key={statistic.label}
                statistic={statistic}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}