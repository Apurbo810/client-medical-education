import { ForgotPasswordForm } from "@/components/sections/auth/forgot-password/forgot-password-form";
import { ForgotPasswordHero } from "@/components/sections/auth/forgot-password/forgot-password-hero";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <ForgotPasswordForm />
      <ForgotPasswordHero />
    </main>
  );
}