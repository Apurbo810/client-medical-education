import { Logo } from "@/components/common/logo";

const users = ["SM", "JO", "PP", "MG"];

export function LoginHero() {
  return (
    <section className="relative hidden min-h-screen overflow-hidden bg-primary text-primary-foreground lg:flex">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-12">
        {/* Logo */}
        <Logo className="text-white [&_span:last-child]:text-white/60" />

        {/* Main content */}
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white xl:text-5xl">
            Welcome back to your NCLEX journey.
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-white/80 xl:text-lg">
            Pick up where you left off. Your study plan, progress, and
            12,500+ questions are waiting.
          </p>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {users.map((user) => (
                <div
                  key={user}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary/80 text-xs font-bold text-white"
                >
                  {user}
                </div>
              ))}
            </div>

            <p className="text-sm font-medium text-white/90">
              48,000+ nurses studying now
            </p>
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