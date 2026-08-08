import { RegisterForm } from "@/components/sections/auth/register/register-form";
import { RegisterHero } from "@/components/sections/auth/register/register-hero";

export default function RegisterPage() {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <RegisterForm />
      <RegisterHero />
    </main>
  );
}