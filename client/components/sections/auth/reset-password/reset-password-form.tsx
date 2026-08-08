"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ResetPasswordForm() {
  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    // TODO: Reset password through your API here.
  }

  return (
    <div className="auth-page">
      {/* Header */}
      <header className="auth-header">
        <div className="auth-header-inner">
          <Logo />
        </div>
      </header>

      {/* Content */}
      <div className="auth-content">
        <div className="auth-container">
          {/* Back */}
          <Link
            href="/verify-otp"
            className="auth-back-link"
          >
            <ArrowLeft className="size-4" />
            Back to verification
          </Link>

          {/* Icon */}
          <div className="auth-icon">
            <LockKeyhole className="size-7" />
          </div>

          {/* Heading */}
          <div>
            <h1 className="auth-heading">
              Create a new password
            </h1>

            <p className="auth-description">
              Your identity has been verified.
              Create a new password for your account.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* New Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-foreground"
              >
                New Password
              </label>

              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter your new password"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label
                htmlFor="confirm-password"
                className="text-sm font-semibold text-foreground"
              >
                Confirm Password
              </label>

              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm your new password"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Password Hint */}
            <p className="text-xs leading-5 text-muted-foreground">
              Use at least 8 characters with a combination
              of letters, numbers, and symbols.
            </p>

            {/* Submit */}
            <Button
              type="submit"
              className="h-12 w-full rounded-xl font-semibold"
            >
              Reset Password
              <ArrowRight className="ml-1 size-3" />
            </Button>
          </form>

          {/* Login */}
          <p className="auth-footer-link">
            Remember your password?{" "}
            <Link
              href="/login"
              className="auth-link"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}