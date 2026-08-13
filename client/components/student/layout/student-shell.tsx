"use client";

import { ReactNode, useState } from "react";

import { StudentMobileNav } from "./student-mobile-nav";
import { StudentNavbar } from "./student-navbar";
import { StudentSidebar } from "./student-sidebar";

interface StudentShellProps {
  children: ReactNode;
}

export function StudentShell({
  children,
}: StudentShellProps) {
  const [mobileNavOpen, setMobileNavOpen] =
    useState(false);

  const [sidebarExpanded, setSidebarExpanded] =
    useState(false);

  return (
    <div className="student-shell">
      <div
        className="student-sidebar-wrapper"
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <StudentSidebar
          collapsed={!sidebarExpanded}
        />
      </div>

      <StudentMobileNav
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      <div
        className={[
          "student-main",
          sidebarExpanded
            ? "student-main-expanded"
            : "student-main-collapsed",
        ].join(" ")}
      >
        <StudentNavbar
          onMenuClick={() =>
            setMobileNavOpen(true)
          }
        />

        <main className="student-content">
          {children}
        </main>
      </div>
    </div>
  );
}