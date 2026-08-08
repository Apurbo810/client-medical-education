"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/common/logo";
import { FieldError } from "@/components/ui/field-error";
import { loginSchema } from "@/lib/validations/auth";
import { ApiRequestError, loginRequest } from "@/lib/api/auth";

export function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setFieldErrors({});

    const formData = new FormData(event.currentTarget);
    const parsed = loginSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
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
    try {
      await loginRequest(parsed.data.email, parsed.data.password);
      sessionStorage.setItem("pendingLoginEmail", parsed.data.email);
      router.push("/verify-login-otp");
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

        <div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Sign in
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Enter your credentials to access your dashboard.
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
                className="h-12 rounded-xl border-border bg-card pl-12 pr-4 aria-invalid:border-destructive"
              />
            </div>
            <FieldError message={fieldErrors.email} />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-semibold text-foreground">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-semibold text-primary transition-colors hover:text-primary/80 sm:text-sm"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <LockKeyhole className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                aria-invalid={!!fieldErrors.password}
                className="h-12 rounded-xl border-border bg-card pl-12 pr-12 aria-invalid:border-destructive"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
            <FieldError message={fieldErrors.password} />
          </div>

          <label className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
            <input
              type="checkbox"
              name="remember"
              className="size-4 rounded border-border accent-primary"
            />
            <span>Remember me for 30 days</span>
          </label>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl text-sm font-semibold"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
            {!isSubmitting && <ArrowRight className="ml-2 size-4" />}
          </Button>

          {formError && (
            <p className="text-center text-sm text-destructive" role="alert">
              {formError}
            </p>
          )}
        </form>

        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-xl bg-card font-semibold"
        >
          <span className="mr-2 text-base font-bold text-[#4285F4]">G</span>
          Continue with Google
        </Button>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}