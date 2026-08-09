import { Stethoscope } from "lucide-react";

const tutors = [
  {
    name: "Albart Neil",
    role: "Critical Care RN — USA",
    description:
      "Albart is an officially practicing Critical Care RN in the USA with 12 years of bedside ICU experience across different countries. He is the main tutor for the course.",
  },
  {
    name: "Salauddin",
    role: "OR Scrub RN — Kuwait",
    description:
      "Salauddin is an OR Scrub RN currently living in Kuwait and in the process of obtaining a visa.",
  },
];

export function AboutTutors() {
  return (
    <section className="about-tutors">
      <div className="about-container">
        <div className="about-tutors-header">
          <span className="about-section-label">
            Our Tutors
          </span>

          <h2 className="about-section-title">
            Learn from practicing nurses
          </h2>

          <p className="about-section-description">
            Learn from professionals with real clinical
            experience in the healthcare system.
          </p>
        </div>

        <div className="about-tutors-grid">
          {tutors.map((tutor) => (
            <article
              key={tutor.name}
              className="about-tutor-card"
            >
              <div className="about-tutor-header">
                <div className="about-tutor-avatar">
                  <Stethoscope className="size-6" />
                </div>

                <div>
                  <h3 className="about-tutor-name">
                    {tutor.name}
                  </h3>

                  <p className="about-tutor-role">
                    {tutor.role}
                  </p>
                </div>
              </div>

              <p className="about-tutor-description">
                {tutor.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}