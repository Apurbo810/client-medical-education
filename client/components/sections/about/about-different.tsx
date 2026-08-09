const differences = [
  {
    title: "Real Clinical Experience",
    description:
      "We provide education based on real bedside skills and practical case studies.",
  },
  {
    title: "Original Learning Content",
    description:
      "We don't rely on third-party links, duplicate question banks, or recycled lectures.",
  },
  {
    title: "Practicing Healthcare Professionals",
    description:
      "Our tutors bring real bedside and healthcare experience rather than simply teaching memorized content.",
  },
  {
    title: "Success Over Business",
    description:
      "We believe in helping candidates succeed rather than simply treating education as a business.",
  },
  {
    title: "Beyond the Exam",
    description:
      "Our goal is to support the complete journey toward becoming a licensed American RN.",
  },
];

export function AboutDifferent() {
  return (
    <section className="about-different">
      <div className="about-container">
        <div className="about-different-header">
          <span className="about-section-label">
            Why Booster Prep
          </span>

          <h2 className="about-section-title">
            Why we're different
          </h2>

          <p className="about-section-description">
            Our focus is practical education, real
            experience, and helping candidates achieve
            their American RN dream.
          </p>
        </div>

        <div className="about-different-grid">
          {differences.map((item, index) => (
            <article
              key={item.title}
              className="about-different-card"
            >
              <div className="about-different-number">
                {index + 1}
              </div>

              <h3 className="about-different-title">
                {item.title}
              </h3>

              <p className="about-different-text">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}