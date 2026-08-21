"use client";

import { useRouter } from "next/navigation";

import type {
  PaymentRecord,
  SubscriptionPlan,
  StudentSubscription,
} from "@/types/student/subscription";

import { CurrentPlan } from "./current-plan";
import { PlanComparison } from "./plan-comparison";
import { PaymentHistory } from "./payment-history";

interface SubscriptionPageProps {
  subscription: StudentSubscription;
  plans: SubscriptionPlan[];
  payments: PaymentRecord[];
}

export function SubscriptionPage({
  subscription,
  plans,
  payments,
}: SubscriptionPageProps) {
  const router = useRouter();

  function handleRenew() {
    router.push("/pricing");
  }

  function handleUpgrade(
    plan: SubscriptionPlan,
  ) {
    router.push(`/pricing?plan=${plan.id}`);
  }

  function handleExportPayments() {
    console.log(
      "Export payment history",
    );
  }

  return (
    <main className="subscription-page">
      <div className="subscription-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="subscription-header">
          <h1 className="subscription-title">
            Subscription
          </h1>

          <p className="subscription-description">
            Manage your plan, billing, and renewal.
          </p>
        </header>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="subscription-top-grid">

          {/* LEFT COLUMN */}
          <div className="min-w-0 space-y-5">

            <CurrentPlan
              subscription={subscription}
              onRenew={handleRenew}
              onUpgrade={() => {
                const lifetimePlan =
                  plans.find(
                    (plan) =>
                      plan.id ===
                      "lifetime",
                  );

                if (lifetimePlan) {
                  handleUpgrade(
                    lifetimePlan,
                  );
                }
              }}
            />

            <PaymentHistory
            payments={payments}
            onExport={handleExportPayments}
            onSelectPayment={(paymentId) => {
                console.log("Selected payment:", paymentId);
            }}
            />

          </div>

          {/* RIGHT COLUMN */}
          <div className="min-w-0">

            <PlanComparison
              plans={plans}
              currentSubscription={
                subscription
              }
              onSelectPlan={
                handleUpgrade
              }
            />

          </div>

        </div>
      </div>
    </main>
  );
}