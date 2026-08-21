"use client";

import { useRouter } from "next/navigation";

import type { StudentProfile } from "@/types/student/profile";
import type { StudentSubscription } from "@/types/student/subscription";

import { ProfileInformation } from "./profile-information";
import { AccountSummary } from "./account-summary";
import { SecuritySettings } from "./security-settings";
import { NotificationSettings } from "./notification-settings";
import { QuickActions } from "./quick-actions";

interface ProfilePageProps {
  profile: StudentProfile;
  subscription: StudentSubscription;
}

export function ProfilePage({
  profile,
  subscription,
}: ProfilePageProps) {
  const router = useRouter();

  function handleChangePassword() {
    router.push("/forgot-password");
  }

  function handleManageSessions() {
    console.log("Manage active sessions");
  }

  function handleDownloadData() {
    console.log("Download account data");
  }

  function handleExportProgress() {
    console.log("Export study progress");
  }

  function handleDeleteAccount() {
    console.log("Delete account");
  }

  return (
    <main className="profile-page">
      <div className="profile-container">
        <div className="profile-layout">
          {/* MAIN COLUMN */}

          <div className="profile-main">
            <ProfileInformation
              profile={profile}
            />

            <NotificationSettings
              emailNotifications={true}
              examReminders={true}
              securityAlerts={true}
            />
          </div>

          {/* SIDEBAR */}

          <aside className="profile-sidebar">
            <AccountSummary
              profile={profile}
              subscription={subscription}
            />

            <SecuritySettings
              onChangePassword={
                handleChangePassword
              }
              onManageSessions={
                handleManageSessions
              }
            />

            <QuickActions
              onDownloadData={
                handleDownloadData
              }
              onExportProgress={
                handleExportProgress
              }
              onDeleteAccount={
                handleDeleteAccount
              }
            />
          </aside>
        </div>
      </div>
    </main>
  );
}