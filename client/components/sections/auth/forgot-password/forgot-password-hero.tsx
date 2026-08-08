import { CheckCircle2, ShieldCheck, Clock3 } from "lucide-react";

import { Logo } from "@/components/common/logo";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Secure recovery",
    description: "Your account information stays protected.",
  },
  {
    icon: Clock3,
    title: "Quick reset",
    description: "Get back to your NCLEX preparation quickly.",
  },
  {
    icon: CheckCircle2,
    title: "Keep your progress",
    description: "Your courses and study progress remain intact.",
  },
];

export function ForgotPasswordHero() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-primary text-primary-foreground lg:flex">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-12">
        {/* Logo */}
        <Logo className="text-white [&_span:last-child]:text-white/60" />

        {/* Content */}
        <div className="max-w-xl">
          <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-white/15">
            <ShieldCheck className="size-7 text-white" />
          </div>

          <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white xl:text-5xl">
            Your NCLEX journey is worth protecting.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/80 xl:text-lg">
            Reset your password securely and get back to studying
            without losing your progress.
          </p>

          {/* Benefits */}
          <div className="mt-10 space-y-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex items-center gap-4"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Icon className="size-5 text-white" />
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      {benefit.title}
                    </p>

                    <p className="text-sm text-white/75">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-white/60">
          © {new Date().getFullYear()} Booster Prep. All rights reserved.
        </p>
      </div>
    </section>
  );
}