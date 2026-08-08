"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldError } from "@/components/ui/field-error";
import { registerSchema } from "@/lib/validations/auth";
import { ApiRequestError, registerRequest } from "@/lib/api/auth";

export function RegisterForm() {
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
    const parsed = registerSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      terms: formData.get("terms") === "on",
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
      await registerRequest(parsed.data.name, parsed.data.email, parsed.data.password);
      sessionStorage.setItem("pendingVerifyEmail", parsed.data.email);
      router.push("/verify-otp");
    } catch (err) {
      setFormError(
        err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6 py-10 sm:px-8 lg:px-12">
      <div className="w-full max-w-md">
        <div className="mb-10 lg:hidden">
          <Logo />
        </div>

        <div>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Start your NCLEX journey today. It&apos;s free to begin.
          </p>
        </div>

        <form className="mt-7 space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="firstName" className="text-sm font-semibold text-foreground">
                First Name
              </label>
              <div className="relative">
                <UserRound className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Sarah"
                  autoComplete="given-name"
                  aria-invalid={!!fieldErrors.firstName}
                  className="h-12 rounded-xl pl-11 aria-invalid:border-destructive"
                />
              </div>
              <FieldError message={fieldErrors.firstName} />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="lastName" className="text-sm font-semibold text-foreground">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Mitchell"
                autoComplete="family-name"
                aria-invalid={!!fieldErrors.lastName}
                className="h-12 rounded-xl aria-invalid:border-destructive"
              />
              <FieldError message={fieldErrors.lastName} />
            </div>
          </div>

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

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-semibold text-foreground">
              Password
            </label>
            <div className="relative">
              <LockKeyhole className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                aria-invalid={!!fieldErrors.password}
                className="h-12 rounded-xl pl-12 pr-12 aria-invalid:border-destructive"
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

            <div className="space-y-1 pt-1 text-xs text-muted-foreground">
              <p>◉ At least 8 characters</p>
              <p>◉ One uppercase letter</p>
              <p>◉ One number</p>
            </div>
            <FieldError message={fieldErrors.password} />
          </div>

          <div className="space-y-1.5">
            <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-xs leading-5 text-muted-foreground">
              <input
                type="checkbox"
                name="terms"
                className="mt-0.5 size-4 shrink-0 rounded border-border accent-primary"
              />
              <span>
                I agree to the{" "}
                <Link href="/terms" className="font-medium text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-medium text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            <FieldError message={fieldErrors.terms} />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-xl text-sm font-semibold"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
            {!isSubmitting && <ArrowRight className="ml-2 size-4" />}
          </Button>

          {formError && (
            <p className="text-center text-sm text-destructive" role="alert">
              {formError}
            </p>
          )}
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or sign up with</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-xl bg-card font-semibold"
        >
          <span className="mr-2 font-bold text-[#4285F4]">G</span>
          Sign up with Google
        </Button>

        <p className="mt-7 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}