"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";

interface NavbarLinksProps {
  className?: string;
}

export function NavigationLinks({
  className,
}: NavbarLinksProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "hidden items-center gap-1 lg:flex",
        className,
      )}
    >
      {navigation.map((item) => {
        const isActive =
          pathname === item.href ||
          pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
              "hover:bg-accent hover:text-foreground",
              isActive
                ? "text-primary"
                : "text-muted-foreground",
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}