import {
  Award,
  BookOpen,
  BriefcaseBusiness,
  ClipboardCheck,
  FileCheck,
  Headphones,
  MessageCircle,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    title: "NCLEX Comprehensive Review",
    description:
      "A complete review of the NCLEX syllabus with structured learning.",
    icon: BookOpen,
  },
  {
    title: "Practice Question Bank",
    description:
      "Self-paced NCLEX-style questions with clear learning rationales.",
    icon: ClipboardCheck,
  },
  {
    title: "Mock Tests",
    description:
      "Unlimited NCLEX-pattern mock tests to build exam confidence.",
    icon: Award,
  },
  {
    title: "Live Lectures",
    description:
      "Four lectures every week by officially licensed USRNs practicing in the USA and Kuwait.",
    icon: Stethoscope,
  },
  {
    title: "Personal Guidance",
    description:
      "1:1 support and guidance throughout your NCLEX preparation journey.",
    icon: MessageCircle,
  },
  {
    title: "Credential Support",
    description:
      "Guidance with state Board selection and credential evaluation.",
    icon: FileCheck,
  },
  {
    title: "Career Guidance",
    description:
      "Support with job opportunities and choosing the right employer.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Interview Guidance",
    description:
      "Practical interview preparation and guidelines for candidates.",
    icon: Headphones,
  },
];

export function AboutServices() {
  return (
    <section className="about-services">
      <div className="about-container">
        <div className="about-services-header">
          <span className="about-section-label">
            What We Offer
          </span>

          <h2 className="about-section-title">
            More than just NCLEX preparation
          </h2>

          <p className="about-section-description">
            We support candidates throughout their journey
            toward becoming licensed nurses.
          </p>
        </div>

        <div className="about-services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="about-service-card"
              >
                <div className="about-service-icon">
                  <Icon className="size-5" />
                </div>

                <h3 className="about-service-title">
                  {service.title}
                </h3>

                <p className="about-service-text">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}