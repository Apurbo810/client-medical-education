"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/field-error";
import { newPasswordSchema } from "@/lib/validations/auth";
import { ApiRequestError, resetPasswordRequest } from "@/lib/api/auth";

function readSessionValue(key: string) {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(key);
}

export function ResetPasswordForm() {
  const router = useRouter();

  // Read synchronously via lazy initializer instead of setState-in-effect.
  const [email] = useState<string | null>(() => readSessionValue("pendingResetEmail"));
  const [resetToken] = useState<string | null>(() => readSessionValue("resetToken"));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // The effect's only job now is the actual side effect: navigation.
  useEffect(() => {
    if (!email || !resetToken) {
      router.replace("/forgot-password");
    }
  }, [email, resetToken, router]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    if (!email || !resetToken) return;

    const formData = new FormData(event.currentTarget);
    const parsed = newPasswordSchema.safeParse({
      password: formData.get("password"),
      confirmPassword: formData.get("confirm-password"),
    });

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        errors[issue.path[0] as string] = issue.message;
      });
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);
    resetPasswordRequest(email, resetToken, parsed.data.password)
      .then(() => {
        sessionStorage.removeItem("pendingResetEmail");
        sessionStorage.removeItem("resetToken");
        router.push("/login");
      })
      .catch((err) => {
        setFormError(
          err instanceof ApiRequestError
            ? err.message
            : "Something went wrong. Please try again."
        );
      })
      .finally(() => setIsSubmitting(false));
  }

  return (
    <div className="auth-page">
      <header className="auth-header">
        <div className="auth-header-inner">
          <Logo />
        </div>
      </header>

      <div className="auth-content">
        <div className="auth-container">
          <Link href="/verify-reset-otp" className="auth-back-link">
            <ArrowLeft className="size-4" />
            Back to verification
          </Link>

          <div className="auth-icon">
            <LockKeyhole className="size-7" />
          </div>

          <div>
            <h1 className="auth-heading">Create a new password</h1>
            <p className="auth-description">
              Your identity has been verified. Create a new password for your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-semibold text-foreground">
                New Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter your new password"
                aria-invalid={!!fieldErrors.password}
                className="h-12 rounded-xl aria-invalid:border-destructive"
              />
              <FieldError message={fieldErrors.password} />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="confirm-password" className="text-sm font-semibold text-foreground">
                Confirm Password
              </label>
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                placeholder="Confirm your new password"
                aria-invalid={!!fieldErrors.confirmPassword}
                className="h-12 rounded-xl aria-invalid:border-destructive"
              />
              <FieldError message={fieldErrors.confirmPassword} />
            </div>

            <p className="text-xs leading-5 text-muted-foreground">
              Use at least 8 characters with an uppercase letter and a number.
            </p>

            {formError && (
              <p className="text-center text-sm text-destructive" role="alert">
                {formError}
              </p>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 w-full rounded-xl font-semibold"
            >
              {isSubmitting ? "Resetting..." : "Reset Password"}
              {!isSubmitting && <ArrowRight className="ml-2 size-4" />}
            </Button>
          </form>

          <p className="auth-footer-link">
            Remember your password?{" "}
            <Link href="/login" className="auth-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}