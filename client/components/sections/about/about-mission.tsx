import {
  Target,
  Telescope,
} from "lucide-react";

export function AboutMission() {
  return (
    <section className="about-mission-vision">
      <div className="about-container">
        <div className="about-mission-vision-grid">
          {/* Mission */}
          <article className="about-mission-card">
            <div className="about-card-icon">
              <Target className="size-6" />
            </div>

            <h2 className="about-card-title">
              Mission
            </h2>

            <p className="about-card-text">
              To empower nurses to pass the NCLEX-RN on
              their first attempt by providing comprehensive,
              easy-to-understand content, realistic
              NCLEX-style questions, Next Generation NCLEX
              (NGN) case studies, and clear, evidence-based
              rationales that build critical thinking and
              clinical judgment.
            </p>
          </article>

          {/* Vision */}
          <article className="about-vision-card">
            <div className="about-card-icon">
              <Telescope className="size-6" />
            </div>

            <h2 className="about-card-title">
              Vision
            </h2>

            <p className="about-card-text">
              To become a trusted global online NCLEX
              review platform that transforms complex
              nursing concepts into simple, practical
              learning, enabling every aspiring nurse to
              achieve licensure with confidence, competence,
              and excellence.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}