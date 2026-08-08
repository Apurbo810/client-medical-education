import { Check } from "lucide-react";

import { Logo } from "@/components/common/logo";

const benefits = [
  {
    title: "12,500+",
    description: "Practice questions with rationales",
  },
  {
    title: "Realistic CAT",
    description: "Exam simulations",
  },
  {
    title: "96.4%",
    description: "Student pass rate",
  },
];

export function RegisterHero() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground lg:flex">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-12">
        {/* Top */}
        <div className="flex items-start justify-between">
          <Logo className="text-white [&_span:last-child]:text-white/60" />

          <span className="rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide text-white">
            GET STARTED
          </span>
        </div>

        {/* Main */}
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white xl:text-5xl">
            Pass the NCLEX. Become the nurse you're meant to be.
          </h2>

          <div className="mt-10 space-y-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-center gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Check className="size-5 text-white" />
                </div>

                <div>
                  <p className="font-bold text-white">
                    {benefit.title}
                  </p>

                  <p className="text-sm text-white/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
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