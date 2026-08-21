"use client";

import Link from "next/link";

import type { StudentProfile } from "@/types/student/profile";
import type { StudentSubscription } from "@/types/student/subscription";

interface AccountSummaryProps {
  profile: StudentProfile;
  subscription: StudentSubscription;
}

export function AccountSummary({
  profile,
  subscription,
}: AccountSummaryProps) {
  return (
    <section className="profile-card">
      <div className="profile-card-header">
        <div>
          <h2 className="profile-card-title">
            Account Summary
          </h2>

          <p className="profile-card-description">
            Your account and subscription overview.
          </p>
        </div>
      </div>

      <div className="profile-summary-list">
        {/* Member Since */}

        <div className="profile-summary-item">
          <span className="profile-summary-label">
            Member since
          </span>

          <span className="profile-summary-value">
            {formatDate(
              profile.memberSince,
            )}
          </span>
        </div>

        {/* Subscription */}

        <div className="profile-summary-item">
          <span className="profile-summary-label">
            Subscription
          </span>

          <span className="profile-summary-value">
            {subscription.planName}
          </span>
        </div>

        {/* Status */}

        <div className="profile-summary-item">
          <span className="profile-summary-label">
            Status
          </span>

          <span className="profile-summary-status">
            {formatStatus(
              subscription.status,
            )}
          </span>
        </div>

        {/* Expiry */}

        <div className="profile-summary-item">
          <span className="profile-summary-label">
            Expires
          </span>

          <span className="profile-summary-value">
            {formatDate(
              subscription.expiresAt,
            )}
          </span>
        </div>

        {/* Remaining */}

        <div className="profile-summary-item">
          <span className="profile-summary-label">
            Remaining
          </span>

          <span className="profile-summary-value">
            {subscription.remainingDays} days
          </span>
        </div>
      </div>

      <Link
        href="/student/subscription"
        className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-xl border border-border bg-background px-4 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
      >
        Manage Subscription
      </Link>
    </section>
  );
}

/* =========================================================
   HELPERS
========================================================= */

function formatDate(
  date: string,
): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return new Intl.DateTimeFormat(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  ).format(parsedDate);
}

function formatStatus(
  status: string,
): string {
  return (
    status.charAt(0).toUpperCase() +
    status.slice(1)
  );
}