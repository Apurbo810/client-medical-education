"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";

import { Container } from "./container";
import { NavigationLinks } from "./navigation-links";
import { MobileNavbar } from "./mobile-navbar";
import Link from "next/link";

export function Navbar() {
  const { isScrolled } = useScroll();

  return (
  <header
  className={cn(
    "fixed inset-x-0 top-0 z-50 transition-all duration-300",
    isScrolled
      ? "border-b bg-background/80 shadow-sm backdrop-blur-xl"
      : "bg-transparent",
  )}
>
  <Container>
    <div className="flex h-20 items-center justify-between">
      {/* Logo */}
      <Logo />

      {/* Desktop Navigation */}
      <NavigationLinks />

      {/* Desktop Actions */}
      <div className="hidden items-center gap-2 lg:flex">
        <Button
          variant="ghost"
          nativeButton={false}
          render={<Link href="/login" />}
        >
          Login
        </Button>

        <Button
          className="rounded-xl"
          nativeButton={false}
          render={<Link href="/register" />}
        >
          Get Started
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      {/* Mobile */}
      <MobileNavbar />
    </div>
  </Container>
</header>
  );
}
