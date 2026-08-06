import { CheckCircle2 } from "lucide-react";

interface PricingFeatureProps {
  feature: string;
}

export function PricingFeature({
  feature,
}: PricingFeatureProps) {
  return (
    <li className="pricing-feature">
      <CheckCircle2 className="pricing-feature-icon size-5" />
      <span>{feature}</span>
    </li>
  );
}