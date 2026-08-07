import { learningProcess } from "@/data/learning-process";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { ProcessCard } from "./process-card";

export function LearningProcess() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Learning Process"
          title="Your 4-Step Path to Licensure"
          highlighted="4-Step Path" 
          description="A structured, proven learning journey that takes you from assessment to exam-day confidence."
          animated
       />

        <div className="process-grid">
          {learningProcess.map((process, index) => (
            <ProcessCard
              key={process.step}
              process={process}
              isLast={index === learningProcess.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}