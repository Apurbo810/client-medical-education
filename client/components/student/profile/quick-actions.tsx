"use client";

import {
  Download,
  FileDown,
  Trash2,
} from "lucide-react";

interface QuickActionsProps {
  onDownloadData?: () => void;
  onExportProgress?: () => void;
  onDeleteAccount?: () => void;
}

export function QuickActions({
  onDownloadData,
  onExportProgress,
  onDeleteAccount,
}: QuickActionsProps) {
  return (
    <section className="profile-card">
      <div className="profile-card-header">
        <div>
          <h2 className="profile-card-title">
            Quick Actions
          </h2>

        </div>
      </div>

      <div className="profile-security-list">
        {/* Download account data */}

        <button
          type="button"
          onClick={onDownloadData}
          className="profile-security-action"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
              <Download className="size-4 text-muted-foreground" />
            </div>

            <div className="profile-security-action-content">
              <p className="profile-security-action-title">
                Download my data
              </p>

              <p className="profile-security-action-description">
                Download a copy of your account data.
              </p>
            </div>
          </div>
        </button>

        {/* Export progress */}

        <button
          type="button"
          onClick={onExportProgress}
          className="profile-security-action"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
              <FileDown className="size-4 text-muted-foreground" />
            </div>

            <div className="profile-security-action-content">
              <p className="profile-security-action-title">
                Export study progress
              </p>

              <p className="profile-security-action-description">
                Download your exam and course progress.
              </p>
            </div>
          </div>
        </button>

        {/* Delete account */}

        <button
          type="button"
          onClick={onDeleteAccount}
          className="profile-security-action profile-danger"
        >
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
              <Trash2 className="size-4" />
            </div>

            <div className="profile-security-action-content">
              <p className="profile-security-action-title">
                Delete account
              </p>

              <p className="profile-security-action-description">
                Permanently delete your account and data.
              </p>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}