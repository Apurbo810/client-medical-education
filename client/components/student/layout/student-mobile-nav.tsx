"use client";

import { useEffect } from "react";

import { cn } from "@/lib/utils";

import { StudentSidebar } from "./student-sidebar";

interface StudentMobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function StudentMobileNav({
  open,
  onClose,
}: StudentMobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "student-mobile-nav",
        open
          ? "student-mobile-nav-open"
          : "student-mobile-nav-closed",
      )}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className={cn(
          "student-mobile-overlay",
          open && "student-mobile-overlay-open",
        )}
      />

      {/* Sidebar */}
      <div
        className={cn(
          "student-mobile-sidebar",
          open && "student-mobile-sidebar-open",
        )}
      >
        <StudentSidebar
          mobile
          onClose={onClose}
        />
      </div>
    </div>
  );
}