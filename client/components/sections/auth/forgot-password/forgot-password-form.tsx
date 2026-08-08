"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgotPasswordForm() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6 py-12 sm:px-8 lg:px-12">
      <div className="w-full max-w-md">
        {/* Mobile Logo */}
        <div className="mb-12 lg:hidden">
          <Logo />
        </div>

        {/* Back to Login */}
        <Link
          href="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to sign in
        </Link>

        {/* Heading */}
        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Forgot your password?
          </h1>

          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            No worries. Enter your email address and we'll send you a
            link to reset your password.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-foreground"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="h-12 rounded-xl pl-12"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl font-semibold"
          >
            Send Reset Link
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>

        {/* Login */}
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}