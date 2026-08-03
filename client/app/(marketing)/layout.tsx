import { Navbar } from "@/components/layout/navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
}
