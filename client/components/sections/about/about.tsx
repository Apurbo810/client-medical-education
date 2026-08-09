"use client";

import Image from "next/image";
import { ArrowRight, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";

import { whyChooseUs } from "@/data/why-choose-us";
import { useFloating, useReveal, useStagger } from "@/hooks/gsap";

import { Section } from "@/components/common/section";
import { SectionHeading } from "@/components/common/section-heading/section-heading";
import { LinkButton } from "@/components/common/link-button";
import { Container } from "@/components/layout/container";

export function About() {
  const imageRef = useReveal({ x: 40 });
  const valuesRef = useStagger({ y: 26, stagger: 0.1 });
  const accentRef = useFloating<HTMLDivElement>();

  return (
    <>
      <Section className="about-hero" spacing="lg">
        <Container>
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <SectionHeading
                animated
                align="left"
                badge="About Medix"
                title="Built by educators. Focused on your future."
                highlighted="your future"
                description="We make focused, supportive NCLEX preparation accessible to every nursing student—so exam day feels like the next confident step, not a leap into the unknown."
              />

              <div className="about-hero-actions">
                <LinkButton href="/courses" size="lg" className="about-primary-action">
                  Explore Courses
                  <ArrowRight className="size-4" />
                </LinkButton>

                <p>Trusted by aspiring nurses across the country.</p>
              </div>
            </div>

            <div ref={imageRef} className="about-image-wrap">
              <div className="about-image-frame">
                <Image
                  src="/images/why-choose-us/team.webp"
                  alt="Medix educators supporting nursing students"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div ref={accentRef} className="about-image-note">
                <HeartPulse className="size-5" />
                <span>Made for future nurses</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="about-story-section" spacing="lg">
        <Container>
          <div className="about-story-grid">
            <SectionHeading
              animated
              align="left"
              badge="Our mission"
              title="Preparation that meets you where you are"
              highlighted="meets you"
              description="The path to becoming a nurse is demanding. We created Medix to pair clear lessons, realistic practice, and encouraging guidance in one place."
            />

            <div className="about-story-copy">
              <p>
                We believe every nursing student deserves tools that turn a full study schedule into steady, measurable progress. That is why our content is organized around the skills and judgment you&apos;ll use in practice.
              </p>
              <p>
                From your first study session to your final review, Medix helps you understand what matters, practice with purpose, and walk into the NCLEX with confidence.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="lg">
        <Container>
          <SectionHeading
            animated
            badge="What guides us"
            title="Support that makes a real difference"
            highlighted="real difference"
            description="Every part of Medix is designed to help you study clearly, consistently, and with confidence."
          />

          <div ref={valuesRef} className="about-values-grid">
            {whyChooseUs.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} data-animate className="about-value-card">
                  <div className="about-value-icon">
                    <Icon className="size-6" />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}

            <article data-animate className="about-value-card about-value-card-accent">
              <div className="about-value-icon">
                <Sparkles className="size-6" />
              </div>
              <h3>Progress, not pressure</h3>
              <p>Study at a pace that works for your life, with a clear next step whenever you need it.</p>
            </article>
          </div>
        </Container>
      </Section>

      <Section spacing="none" className="pb-4 md:pb-8">
        <Container>
          <div className="about-promise">
            <ShieldCheck className="size-7" />
            <p>Our promise: practical preparation, honest support, and a plan you can follow.</p>
          </div>
        </Container>
      </Section>
    </>
  );
}
