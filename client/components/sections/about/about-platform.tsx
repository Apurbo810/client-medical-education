import { GraduationCap } from "lucide-react";

export function AboutPlatform() {
  return (
    <section className="about-platform">
      <div className="about-container">
        <div className="about-platform-grid">
          <div className="about-platform-content">
            <span className="about-section-label">
              Our Platform
            </span>

            <h2 className="about-section-title">
              Booster Prep NCLEX
            </h2>

            <p className="about-section-description">
              Booster Prep NCLEX is an online platform
              providing comprehensive NCLEX-RN review
              designed to help aspiring nurses master the
              full NCLEX syllabus and prepare with
              confidence.
            </p>
          </div>

          <div className="about-platform-card">
            <div className="about-card-icon">
              <GraduationCap className="size-6" />
            </div>

            <h3 className="about-platform-card-title">
              Your NCLEX journey starts here
            </h3>

            <p className="about-platform-card-text">
              From comprehensive review and practice
              questions to realistic case studies and
              guidance, we focus on making your preparation
              practical, clear, and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}