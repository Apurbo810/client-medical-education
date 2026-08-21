"use client";

import { useState } from "react";

interface NotificationSettingsProps {
  emailNotifications: boolean;
  examReminders: boolean;
  securityAlerts: boolean;
}

export function NotificationSettings({
  emailNotifications: initialEmailNotifications,
  examReminders: initialExamReminders,
  securityAlerts: initialSecurityAlerts,
}: NotificationSettingsProps) {
  const [emailNotifications, setEmailNotifications] =
    useState(initialEmailNotifications);

  const [examReminders, setExamReminders] =
    useState(initialExamReminders);

  const [securityAlerts, setSecurityAlerts] =
    useState(initialSecurityAlerts);

  return (
    <section className="profile-card">
      <div className="profile-card-header">
        <div>
          <h2 className="profile-card-title">
            Notifications & Privacy
          </h2>

          <p className="profile-card-description">
            Control how we communicate with you.
          </p>
        </div>
      </div>

      <div className="profile-settings-list">
        <SettingRow
          title="Email notifications"
          description="Receive important account and platform updates by email."
          enabled={emailNotifications}
          onChange={setEmailNotifications}
        />

        <SettingRow
          title="Exam reminders"
          description="Receive reminders about upcoming exams and assessments."
          enabled={examReminders}
          onChange={setExamReminders}
        />

        <SettingRow
          title="Security alerts"
          description="Receive notifications about important security activity."
          enabled={securityAlerts}
          onChange={setSecurityAlerts}
        />
      </div>
    </section>
  );
}

/* =========================================================
   SETTING ROW
========================================================= */

interface SettingRowProps {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
}

function SettingRow({
  title,
  description,
  enabled,
  onChange,
}: SettingRowProps) {
  return (
    <div className="profile-setting-row">
      <div className="profile-setting-content">
        <p className="profile-setting-title">
          {title}
        </p>

        <p className="profile-setting-description">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={`Toggle ${title}`}
        onClick={() => onChange(!enabled)}
        className={[
          "profile-toggle",
          enabled
            ? "profile-toggle-active"
            : "",
        ].join(" ")}
      >
        <span
          className={[
            "profile-toggle-thumb",
            enabled
              ? "profile-toggle-thumb-active"
              : "",
          ].join(" ")}
        />
      </button>
    </div>
  );
}