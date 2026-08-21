"use client";

import {
  ChevronRight,
  KeyRound,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

interface SecuritySettingsProps {
  onChangePassword?: () => void;
  onManageSessions?: () => void;
}

export function SecuritySettings({
  onChangePassword,
  onManageSessions,
}: SecuritySettingsProps) {
  return (
    <section className="profile-card">
      <div className="profile-card-header">
        <div>
          <h2 className="profile-card-title">
            Security
          </h2>

        </div>

        <ShieldCheck className="size-5 text-primary" />
      </div>

      <div className="profile-security-list">
        {/* =====================================================
            PASSWORD
        ===================================================== */}

        <button
          type="button"
          onClick={onChangePassword}
          className="profile-security-action"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
              <KeyRound className="size-4 text-muted-foreground" />
            </div>

            <div className="profile-security-action-content">
              <p className="profile-security-action-title">
                Password
              </p>

              <p className="profile-security-action-description">
                Change your account password.
              </p>
            </div>
          </div>

          <ChevronRight className="profile-security-action-arrow size-4" />
        </button>

        {/* =====================================================
            ACTIVE SESSIONS
        ===================================================== */}

        <button
          type="button"
          onClick={onManageSessions}
          className="profile-security-action"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
              <MonitorSmartphone className="size-4 text-muted-foreground" />
            </div>

            <div className="profile-security-action-content">
              <p className="profile-security-action-title">
                Active sessions
              </p>

              <p className="profile-security-action-description">
                Review devices currently signed in.
              </p>
            </div>
          </div>

          <ChevronRight className="profile-security-action-arrow size-4" />
        </button>
      </div>
    </section>
  );
}