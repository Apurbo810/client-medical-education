"use client";

import {
  CalendarDays,
  Clock3,
  RefreshCw,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import type { StudentSubscription } from "@/types/student/subscription";

interface CurrentPlanProps {
  subscription: StudentSubscription;
  onRenew?: () => void;
  onUpgrade?: () => void;
}

export function CurrentPlan({
  subscription,
  onRenew,
  onUpgrade,
}: CurrentPlanProps) {
  const progress = Math.min(
    100,
    Math.max(0, subscription.progress),
  );

  return (
    <section className="current-plan">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="current-plan-content">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="current-plan-header">
          <span className="current-plan-badge">
            Current Plan
          </span>

          <span className="current-plan-status">
            {subscription.status === "active"
              ? "Active"
              : subscription.status}
          </span>
        </div>

        {/* =====================================================
            PLAN NAME
        ===================================================== */}

        <h2 className="current-plan-title">
          {subscription.planName}
        </h2>

        <p className="current-plan-description">
          {subscription.description}
        </p>

        {/* =====================================================
            PLAN META
        ===================================================== */}

        <div className="current-plan-meta">
          <div className="current-plan-meta-item">
            <span className="current-plan-meta-label">
              <CalendarDays className="size-3.5" />
              Start Date
            </span>

            <span className="current-plan-meta-value">
              {subscription.startDate}
            </span>
          </div>

          <div className="current-plan-meta-item">
            <span className="current-plan-meta-label">
              <CalendarDays className="size-3.5" />
              Expires
            </span>

            <span className="current-plan-meta-value">
              {subscription.expiresAt}
            </span>
          </div>

          <div className="current-plan-meta-item">
            <span className="current-plan-meta-label">
              <Clock3 className="size-3.5" />
              Remaining
            </span>

            <span className="current-plan-meta-value">
              {subscription.remainingDays}{" "}
              {subscription.remainingDays === 1
                ? "day"
                : "days"}
            </span>
          </div>
        </div>

        {/* =====================================================
            PROGRESS
        ===================================================== */}

        <div className="subscription-progress">
          <div className="subscription-progress-header">
            <span className="subscription-progress-label">
              Subscription progress
            </span>

            <span className="subscription-progress-value">
              {progress}%
            </span>
          </div>

          <div className="subscription-progress-track">
            <div
              className="subscription-progress-bar"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* =====================================================
            ACTIONS
        ===================================================== */}

        <div className="current-plan-actions">
          <button
            type="button"
            onClick={onRenew}
            className="current-plan-action"
          >
            <RefreshCw className="size-4" />
            Renew Now
          </button>

          <button
            type="button"
            onClick={onUpgrade}
            className="current-plan-action-secondary"
          >
            <TrendingUp className="size-4" />
            Upgrade to Lifetime
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}