"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/field-error";
import { forgotPasswordSchema } from "@/lib/validations/auth";
import { ApiRequestError, forgotPasswordRequest } from "@/lib/api/auth";

export function ForgotPasswordForm() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const parsed = forgotPasswordSchema.safeParse({
      email: formData.get("email"),
    });

    if (!parsed.success) {
      setFieldErrors({ email: parsed.error.issues[0].message });
      return;
    }

    setIsSubmitting(true);
    try {
      await forgotPasswordRequest(parsed.data.email);
      sessionStorage.setItem("pendingResetEmail", parsed.data.email);
      router.push("/verify-reset-otp");
    } catch (err) {
      setFormError(
        err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6 py-12 sm:px-8 lg:px-12">
      <div className="w-full max-w-md">
        <div className="mb-12 lg:hidden">
          <Logo />
        </div>

        <Link
          href="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to sign in
        </Link>

        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Forgot your password?
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            No worries. Enter your email address and we&apos;ll send you a verification code to
            reset your password.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
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
                aria-invalid={!!fieldErrors.email}
                className="h-12 rounded-xl pl-12 aria-invalid:border-destructive"
              />
            </div>
            <FieldError message={fieldErrors.email} />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl font-semibold"
          >
            {isSubmitting ? "Sending..." : "Send Reset Code"}
            {!isSubmitting && <ArrowRight className="ml-2 size-4" />}
          </Button>

          {formError && (
            <p className="text-center text-sm text-destructive" role="alert">
              {formError}
            </p>
          )}
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}