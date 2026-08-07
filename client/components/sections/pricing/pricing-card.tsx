import { Button } from "@/components/ui/button";

import type { PricingPlan } from "@/types/pricing";
import { cn } from "@/lib/utils";

import { PricingFeature } from "./pricing-feature";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({
  plan,
}: PricingCardProps) {
  return (
    <article
      data-animate
      className={cn(
        "pricing-card",
        plan.popular && "pricing-card-popular",
      )}
    >
      {plan.popular && (
        <span className="pricing-badge">
          Most Popular
        </span>
      )}

      <div>
        <h3 className="pricing-title">
          {plan.name}
        </h3>

        <p className="pricing-description">
          {plan.description}
        </p>

        <div className="pricing-price">
          <span className="pricing-currency">
            {plan.currency}
          </span>

          <span className="pricing-amount">
            {plan.price}
          </span>

          <span className="pricing-billing">
            /{plan.billing}
          </span>
        </div>

        <span className="pricing-duration">
          {plan.duration}
        </span>
      </div>

      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <PricingFeature
            key={feature}
            feature={feature}
          />
        ))}
      </ul>

      <div className="pricing-footer">
        <Button
          size="lg"
          className="pricing-button"
          variant={
            plan.popular ? "default" : "outline"
          }
        >
          {plan.buttonText}
        </Button>
      </div>
    </article>
  );
}
