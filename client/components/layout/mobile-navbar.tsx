"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/data/navigation";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";

export function MobileNavbar() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={<Button size="icon" variant="ghost" aria-label="Open menu" />}
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent side="right" className="flex w-[320px] flex-col">
          <SheetHeader className="pb-8">
            <Logo />
          </SheetHeader>

          <nav className="flex flex-1 flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="space-y-3 border-t pt-6">
            <Button variant="outline" className="w-full">
              Login
            </Button>

            <Button className="w-full">Start Learning →</Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
