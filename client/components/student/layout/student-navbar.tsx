"use client";

import Link from "next/link";
import {
  Bell,
  Menu,
} from "lucide-react";

interface StudentNavbarProps {
  onMenuClick: () => void;
}

export function StudentNavbar({
  onMenuClick,
}: StudentNavbarProps) {
  return (
    <header className="student-navbar">
      {/* Mobile Menu */}
      <button
        type="button"
        onClick={onMenuClick}
        className="student-navbar-menu"
        aria-label="Open navigation"
      >
        <Menu className="size-5" />
      </button>

      {/* Desktop Context */}
      <div className="student-navbar-context">
        <p className="student-navbar-context-label">
          Student Portal
        </p>

        <p className="student-navbar-context-title">
          Welcome back
        </p>
      </div>

      {/* Right */}
      <div className="student-navbar-actions">
        {/* Notifications */}
        <button
          type="button"
          className="student-navbar-notification"
          aria-label="Notifications"
        >
          <Bell className="size-5" />

          <span className="student-navbar-notification-dot" />
        </button>

        {/* Profile */}
        <Link
          href="/student/profile"
          className="student-navbar-profile"
        >
          <div className="student-navbar-avatar">
            S
          </div>

          <div className="student-navbar-profile-info">
            <p className="student-navbar-profile-name">
              Student
            </p>

            <p className="student-navbar-profile-role">
              Learner
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}