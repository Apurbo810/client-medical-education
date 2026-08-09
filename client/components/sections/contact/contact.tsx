"use client";

import { useReveal, useStagger } from "@/hooks/gsap";

import { SectionHeading } from "@/components/common/section-heading/section-heading";

import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function Contact() {
  const infoRef = useStagger({
    selector: "[data-contact-info]",
    y: 24,
    stagger: 0.1,
  });
  const formRef = useReveal({ y: 34, delay: 0.08 });

  return (
    <main className="contact-page">
      <div className="contact-container">
        <SectionHeading
          animated
          badge="Contact"
          title="We're here to help you"
          highlighted="help you"
          description="Questions about the NCLEX, our plans, or your account? Reach out anytime."
          className="contact-header"
        />

        <div className="contact-layout">
          <div ref={infoRef}>
            <ContactInfo />
          </div>

          <div ref={formRef}>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
