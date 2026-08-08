import { LoginForm } from "@/components/sections/auth/login/login-form";
import { LoginHero } from "@/components/sections/auth/login/login-hero";

export default function LoginPage() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <LoginHero />
      <LoginForm />
    </main>
  );
}