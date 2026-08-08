"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertCircle, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { ApiRequestError, resendOtpRequest, verifyLoginOtpRequest } from "@/lib/api/auth";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

function readSessionValue(key: string) {
  if (typeof window === "undefined") return null;
  return window.sessionStorage.getItem(key);
}

export function VerifyLoginOtpForm() {
  const router = useRouter();

  const [email] = useState<string | null>(() => readSessionValue("pendingLoginEmail"));
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [countdown, setCountdown] = useState(RESEND_SECONDS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const otpValue = otp.join("");

  useEffect(() => {
    if (!email) {
      router.replace("/login");
    }
  }, [email, router]);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setInterval(() => {
      setCountdown((current) => (current > 0 ? current - 1 : 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [countdown]);

  function focusInput(index: number) {
    inputRefs.current[index]?.focus();
  }

  function handleChange(index: number, value: string) {
    const cleanValue = value.replace(/\D/g, "");

    if (!cleanValue) {
      setOtp((current) => {
        const next = [...current];
        next[index] = "";
        return next;
      });
      return;
    }

    const characters = cleanValue.split("");

    setOtp((current) => {
      const next = [...current];
      characters.forEach((character, offset) => {
        const targetIndex = index + offset;
        if (targetIndex < OTP_LENGTH) {
          next[targetIndex] = character;
        }
      });
      return next;
    });

    focusInput(Math.min(index + characters.length, OTP_LENGTH - 1));
  }

  function handleKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace" && !otp[index] && index > 0) focusInput(index - 1);
    if (event.key === "ArrowLeft" && index > 0) focusInput(index - 1);
    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) focusInput(index + 1);
  }

  function handlePaste(event: React.ClipboardEvent<HTMLDivElement>) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    setOtp(Array.from({ length: OTP_LENGTH }, (_, index) => pasted[index] ?? ""));
    focusInput(Math.min(pasted.length, OTP_LENGTH - 1));
  }

  async function handleResend() {
    if (countdown > 0 || !email) return;
    setFormError(null);
    setOtp(Array(OTP_LENGTH).fill(""));
    focusInput(0);

    try {
      await resendOtpRequest(email);
      setCountdown(RESEND_SECONDS);
    } catch (err) {
      setFormError(
        err instanceof ApiRequestError ? err.message : "Could not resend code. Please try again."
      );
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    if (otpValue.length !== OTP_LENGTH || !email) return;

    setIsSubmitting(true);
    try {
      await verifyLoginOtpRequest(email, otpValue);
      sessionStorage.removeItem("pendingLoginEmail");
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setFormError(
        err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again."
      );
      setOtp(Array(OTP_LENGTH).fill(""));
      focusInput(0);
    } finally {
      setIsSubmitting(false);
    }
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
          <Link href="/login" className="auth-back-link">
            <ArrowLeft className="size-4" />
            Back to sign in
          </Link>

          <div className="auth-icon">
            <ShieldCheck className="size-7" />
          </div>

          <div>
            <h1 className="auth-heading">Verify your login</h1>
            <p className="auth-description">
              We&apos;ve sent a 6-digit verification code to your email address. Enter the code
              below to continue.
            </p>
            {email && <p className="auth-email">{email}</p>}
          </div>

          <form onSubmit={handleSubmit} className="otp-form">
            <fieldset>
              <legend className="otp-label">Verification Code</legend>

              <div className="otp-inputs" onPaste={handlePaste}>
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={index === 0 ? "one-time-code" : "off"}
                    maxLength={1}
                    value={value}
                    onChange={(event) => handleChange(index, event.target.value)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    aria-label={`Verification code digit ${index + 1}`}
                    className={`otp-input ${formError ? "border-destructive" : ""}`}
                  />
                ))}
              </div>
            </fieldset>

            {formError && (
              <p className="flex items-center justify-center gap-1.5 text-center text-sm font-medium text-destructive" role="alert">
                <AlertCircle className="size-4 shrink-0" />
                {formError}
              </p>
            )}

            <div className="otp-submit-wrapper">
              <Button
                type="submit"
                disabled={otpValue.length !== OTP_LENGTH || isSubmitting}
                className="otp-submit"
              >
                {isSubmitting ? "Verifying..." : "Verify Login"}
                {!isSubmitting && <ArrowRight className="ml-2 size-4" />}
              </Button>
            </div>
          </form>

          <div className="otp-resend">
            <p className="otp-resend-text">Didn&apos;t receive the code?</p>
            {countdown > 0 ? (
              <p className="otp-resend-countdown">
                Resend code in <span className="font-semibold text-foreground">{countdown}s</span>
              </p>
            ) : (
              <button type="button" onClick={handleResend} className="otp-resend-button">
                Resend code
              </button>
            )}
          </div>

          <p className="auth-footer-link">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="auth-link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}