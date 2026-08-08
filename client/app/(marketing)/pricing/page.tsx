import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";

import { pricingFaqs } from "@/data/faq/pricing-faq";

export default function PricingPage() {
  return (
    <>
      <Pricing />

      <FAQ
        title="Pricing Questions"
        highlighted="Questions"
        description="Find answers to the most common questions."
        faqs={pricingFaqs}
      />
    </>
  );
}