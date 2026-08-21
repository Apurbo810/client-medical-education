"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  ClipboardCheck,
  CreditCard,
  FileText,
  GraduationCap,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  Bell,
  Settings,
  Trophy,
  User,
  X,
} from "lucide-react";

import { Logo } from "@/components/common/logo";
import { cn } from "@/lib/utils";

const navigation = [
  {
    title: "Dashboard",
    href: "/student",
    icon: LayoutDashboard,
  },
  {
    title: "My Courses",
    href: "/student/my-courses",
    icon: BookOpen,
  },
  {
    title: "Practice Questions",
    href: "/student/practice",
    icon: ClipboardCheck,
  },
  {
    title: "Quiz & Mock Exams",
    href: "/student/mock-exams",
    icon: FileText,
  },
  {
    title: "Results & Grades",
    href: "/student/results",
    icon: Trophy,
  },
];

const secondaryNavigation = [
  {
    title: "Subscription & Payments",
    href: "/student/subscription",
    icon: CreditCard,
  },
  {
    title: "Profile & Settings",
    href: "/student/profile",
    icon: Settings,
  },
  {
    title: "Support / Help",
    href: "/student/support",
    icon: HelpCircle,
  },
];

interface StudentSidebarProps {
  collapsed?: boolean;
  mobile?: boolean;
  onClose?: () => void;
}

export function StudentSidebar({
  collapsed = false,
  mobile = false,
  onClose,
}: StudentSidebarProps) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/student") {
      return pathname === href;
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  return (

    <aside
    className={cn(
        "student-sidebar",
        collapsed
        ? "student-sidebar-collapsed"
        : "student-sidebar-expanded",
        mobile && "student-sidebar-mobile",
    )}
    >

      {/* Brand */}
        <div
        className={cn(
            "student-sidebar-brand",
            mobile
            ? "student-sidebar-mobile-brand"
            : collapsed
                ? "student-sidebar-brand-collapsed"
                : "student-sidebar-brand-expanded",
        )}
        >
        {collapsed ? (
          <Logo
            href="/student"
            className="student-sidebar-logo-collapsed"
          />
        ) : (
          <Logo href="/student" />
        )}

        {mobile && (
          <button
            type="button"
            onClick={onClose}
            className="student-sidebar-close"
            aria-label="Close navigation"
          >
            <X className="student-sidebar-icon" />
          </button>
        )}
      </div>

      {/* Navigation */}
        <nav
        data-lenis-prevent
        className={cn(
            "student-sidebar-nav",
            mobile
            ? "student-sidebar-mobile-nav"
            : collapsed
                ? "student-sidebar-nav-collapsed"
                : "student-sidebar-nav-expanded",
        )}
        >
        {/* Learning */}
        {!collapsed && (
          <p className="student-sidebar-section-label">
            Learning
          </p>
        )}

        {navigation.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
                <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                title={collapsed ? item.title : undefined}
                className={cn(
                    mobile
                    ? "student-sidebar-mobile-link"
                    : [
                        "student-sidebar-link",
                        collapsed
                            ? "student-sidebar-link-collapsed"
                            : "student-sidebar-link-expanded",
                        ],
                    active
                    ? "student-sidebar-link-active"
                    : "student-sidebar-link-inactive",
                )}
                >
                <Icon
                    className={
                    mobile
                        ? "student-sidebar-mobile-icon"
                        : "student-sidebar-icon"
                    }
                />

                {!collapsed && <span>{item.title}</span>}
                </Link>
          );
        })}

        {/* Account */}
        <div className="student-sidebar-section">
          {!collapsed && (
            <p className="student-sidebar-section-label">
              Account
            </p>
          )}

          {secondaryNavigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                title={collapsed ? item.title : undefined}
                className={cn(
                  "student-sidebar-link",
                  collapsed
                    ? "student-sidebar-link-collapsed"
                    : "student-sidebar-link-expanded",
                  active
                    ? "student-sidebar-link-active"
                    : "student-sidebar-link-inactive",
                )}
              >
                <Icon className="student-sidebar-icon" />

                {!collapsed && (
                  <span>{item.title}</span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Sign Out */}
        <div
        className={cn(
            "student-sidebar-footer",
            mobile
            ? "student-sidebar-mobile-footer"
            : collapsed
                ? "student-sidebar-footer-collapsed"
                : "student-sidebar-footer-expanded",
        )}
        >
        <button
        type="button"
        title={collapsed ? "Sign out" : undefined}
        className={cn(
            mobile
            ? "student-sidebar-mobile-signout"
            : [
                "student-sidebar-signout",
                collapsed
                    ? "student-sidebar-signout-collapsed"
                    : "student-sidebar-signout-expanded",
                ],
        )}
        >
        <LogOut
            className={
            mobile
                ? "student-sidebar-mobile-icon"
                : "student-sidebar-icon"
            }
        />

        {!collapsed && <span>Sign out</span>}
        </button>
      </div>
    </aside>
  );
}