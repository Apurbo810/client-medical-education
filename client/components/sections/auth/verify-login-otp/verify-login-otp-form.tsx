"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 30;

export function VerifyLoginOtpForm() {
  const [otp, setOtp] = useState<string[]>(
    Array(OTP_LENGTH).fill(""),
  );

  const [countdown, setCountdown] =
    useState(RESEND_SECONDS);

  const inputRefs = useRef<
    Array<HTMLInputElement | null>
  >([]);

  const otpValue = otp.join("");

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = window.setInterval(() => {
      setCountdown((current) =>
        current > 0 ? current - 1 : 0,
      );
    }, 1000);

    return () => window.clearInterval(timer);
  }, [countdown]);

  function focusInput(index: number) {
    inputRefs.current[index]?.focus();
  }

  function handleChange(
    index: number,
    value: string,
  ) {
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

    const nextIndex = Math.min(
      index + characters.length,
      OTP_LENGTH - 1,
    );

    focusInput(nextIndex);
  }

  function handleKeyDown(
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      focusInput(index - 1);
    }

    if (
      event.key === "ArrowLeft" &&
      index > 0
    ) {
      focusInput(index - 1);
    }

    if (
      event.key === "ArrowRight" &&
      index < OTP_LENGTH - 1
    ) {
      focusInput(index + 1);
    }
  }

  function handlePaste(
    event: React.ClipboardEvent<HTMLDivElement>,
  ) {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    if (!pasted) return;

    setOtp(
      Array.from(
        { length: OTP_LENGTH },
        (_, index) => pasted[index] ?? "",
      ),
    );

    focusInput(
      Math.min(
        pasted.length,
        OTP_LENGTH - 1,
      ),
    );
  }

  function handleResend() {
    if (countdown > 0) return;

    setOtp(Array(OTP_LENGTH).fill(""));
    setCountdown(RESEND_SECONDS);

    focusInput(0);

    // TODO: Call resend login OTP API here.
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (otpValue.length !== OTP_LENGTH) {
      return;
    }

    // TODO: Verify login OTP through your API here.
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
            href="/login"
            className="auth-back-link"
          >
            <ArrowLeft className="size-4" />
            Back to sign in
          </Link>

          {/* Icon */}
          <div className="auth-icon">
            <ShieldCheck className="size-7" />
          </div>

          {/* Heading */}
          <div>
            <h1 className="auth-heading">
              Verify your login
            </h1>

            <p className="auth-description">
              We've sent a 6-digit verification
              code to your email address. Enter
              the code below to continue.
            </p>

            <p className="auth-email">
              sarah.mitchell@email.com
            </p>
          </div>

          {/* OTP */}
          <form
            onSubmit={handleSubmit}
            className="otp-form"
          >
            <fieldset>
              <legend className="otp-label">
                Verification Code
              </legend>

              <div
                className="otp-inputs"
                onPaste={handlePaste}
              >
                {otp.map((value, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      inputRefs.current[index] =
                        element;
                    }}
                    type="text"
                    inputMode="numeric"
                    autoComplete={
                      index === 0
                        ? "one-time-code"
                        : "off"
                    }
                    maxLength={1}
                    value={value}
                    onChange={(event) =>
                      handleChange(
                        index,
                        event.target.value,
                      )
                    }
                    onKeyDown={(event) =>
                      handleKeyDown(
                        index,
                        event,
                      )
                    }
                    aria-label={`Verification code digit ${
                      index + 1
                    }`}
                    className="otp-input"
                  />
                ))}
              </div>
            </fieldset>

            <div className="otp-submit-wrapper">
              <Button
                type="submit"
                disabled={
                  otpValue.length !== OTP_LENGTH
                }
                className="otp-submit"
              >
                Verify Login
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </form>

          {/* Resend */}
          <div className="otp-resend">
            <p className="otp-resend-text">
              Didn't receive the code?
            </p>

            {countdown > 0 ? (
              <p className="otp-resend-countdown">
                Resend code in{" "}
                <span className="font-semibold text-foreground">
                  {countdown}s
                </span>
              </p>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="otp-resend-button"
              >
                Resend code
              </button>
            )}
          </div>

          {/* Register */}
          <p className="auth-footer-link">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="auth-link"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}