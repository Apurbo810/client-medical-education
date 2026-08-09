import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutCta() {
  return (
    <section className="about-cta">
      <div className="about-container">
        <div className="about-cta-card">
          <h2 className="about-cta-title">
            Ready to start your NCLEX journey?
          </h2>

          <p className="about-cta-description">
            Prepare with practical learning, realistic
            questions, and guidance from experienced
            healthcare professionals.
          </p>

          <Link
            href="/courses"
            className="about-cta-button"
          >
            Explore Courses
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}