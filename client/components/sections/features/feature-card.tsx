import type { Feature } from "@/types/feature";

interface FeatureCardProps {
  feature: Feature;
}

export function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="group feature-card">
      <div className="feature-icon">
        <Icon className="size-7" />
      </div>

      <h3 className="feature-title">
        {feature.title}
      </h3>

      <p className="feature-description">
        {feature.description}
      </p>
    </article>
  );
}