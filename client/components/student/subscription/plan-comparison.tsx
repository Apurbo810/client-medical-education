"use client";

import {
  Check,
  Crown,
} from "lucide-react";

import type {
  SubscriptionPlan,
  StudentSubscription,
} from "@/types/student/subscription";

interface PlanComparisonProps {
  plans: SubscriptionPlan[];
  currentSubscription: StudentSubscription;
  onSelectPlan?: (
    plan: SubscriptionPlan,
  ) => void;
}

export function PlanComparison({
  plans,
  currentSubscription,
  onSelectPlan,
}: PlanComparisonProps) {
  return (
    <section className="plan-comparison">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="plan-comparison-title">
            Plan Comparison
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Choose the plan that works best for you.
          </p>
        </div>

        <Crown className="size-5 text-primary" />
      </div>

      <div className="plan-list">
        {plans.map((plan) => {
          const isCurrent =
            plan.id ===
            currentSubscription.planId;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() =>
                !isCurrent &&
                onSelectPlan?.(plan)
              }
              disabled={isCurrent}
              className={[
                "w-full text-left",
                "plan-option",
                isCurrent
                  ? "plan-option-current"
                  : "hover:border-primary/30 hover:bg-primary/5",
              ].join(" ")}
            >
              <div className="plan-option-header">
                <div>
                  <p className="plan-option-name">
                    {plan.name}
                  </p>

                  <p className="plan-option-price">
                    {plan.price}
                  </p>
                </div>

                {isCurrent && (
                  <span className="plan-option-current-badge">
                    Current
                  </span>
                )}
              </div>

              {/* Plan description */}
              {plan.description && (
                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {plan.description}
                </p>
              )}

              {/* Features */}
              {plan.features.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {plan.features
                    .slice(0, 3)
                    .map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-1.5 text-xs text-muted-foreground"
                      >
                        <Check className="size-3.5 shrink-0 text-primary" />

                        {feature}
                      </span>
                    ))}
                </div>
              )}

              {/* Select action */}
              {!isCurrent && (
                <span className="mt-4 inline-flex text-xs font-semibold text-primary">
                  Choose this plan →
                </span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}